using DG.Tweening;
using Project.Scripts.Config;
using Project.Scripts.Core;
using Project.Scripts.Tutorial;
using UnityEngine;
using UnityEngine.EventSystems;

namespace Project.Scripts.Hex
{
    [RequireComponent(typeof(BoxCollider))]
    public class DraggableStack : MonoBehaviour, IPointerDownHandler, IDragHandler, IPointerUpHandler
    {
        private const float ColliderSize = 1.8f;
        private const int BoardLayer = 6;
        private const float MaxRaycastDistance = 100f;
        private const int MaxRaycastHits = 10;
        private const float MaxDragY = 2f;
        private ChainReactionSystem _chainReactionSystem;
        private BoxCollider _collider;
        private GameConfig _config;
        private Vector3 _dragOffset;
        private float _dragPlaneDistance;
        private Vector3 _dragStartPosition;

        private GameBoard _gameBoard;
        private Camera _gameCamera;
        private HexCell _hoveredCell;
        private bool _isDragging;
        private Transform _originalParent;
        private Vector3 _originalPosition;
        private HexStack _stack;
        private TutorialGuide _tutorialGuide;

        private void Update()
        {
            if (_isDragging && (_chainReactionSystem.IsChainActive || _gameBoard.IsInputLocked))
            {
                _isDragging = false;
                _collider.enabled = true;
                ReturnToOriginal();
                _hoveredCell = null;
            }
        }

        private void OnDisable()
        {
            transform.DOKill();
        }

        public void OnDrag(PointerEventData eventData)
        {
            if (!_isDragging)
            {
                return;
            }

            var dragPlane = new Plane(-_gameCamera.transform.forward, _dragStartPosition);
            var ray = _gameCamera.ScreenPointToRay(eventData.position);

            if (dragPlane.Raycast(ray, out var distance))
            {
                var worldPos = ray.GetPoint(distance);
                var targetPos = worldPos + _dragOffset;

                if (targetPos.y > MaxDragY)
                {
                    var limitPlane = new Plane(Vector3.up, new Vector3(0, MaxDragY - _dragOffset.y, 0));

                    if (limitPlane.Raycast(ray, out var limitDistance))
                    {
                        targetPos = ray.GetPoint(limitDistance) + _dragOffset;
                    }
                    else
                    {
                        targetPos.y = MaxDragY;
                    }
                }

                transform.position = targetPos;
            }

            UpdateHoveredCell(eventData.position);
        }

        public void OnPointerDown(PointerEventData eventData)
        {
            if (_chainReactionSystem.IsChainActive || _gameBoard.IsInputLocked)
            {
                return;
            }

            _isDragging = true;
            _originalPosition = transform.position;
            _originalParent = transform.parent;
            _dragStartPosition = transform.position;

            var dragPlane = new Plane(-_gameCamera.transform.forward, transform.position);
            var ray = _gameCamera.ScreenPointToRay(eventData.position);

            if (dragPlane.Raycast(ray, out _dragPlaneDistance))
            {
                var worldPos = ray.GetPoint(_dragPlaneDistance);
                _dragOffset = transform.position - worldPos;
            }

            _collider.enabled = false;
            _tutorialGuide?.OnPlayerGrabbed();
        }

        public void OnPointerUp(PointerEventData eventData)
        {
            if (!_isDragging)
            {
                return;
            }

            _isDragging = false;
            _collider.enabled = true;

            var target = _hoveredCell ?? FindCellUnderCursor(eventData.position);

            if (target != null && target.IsEmpty)
            {
                SnapToCell(target);
            }
            else
            {
                ReturnToOriginal();
            }

            _hoveredCell = null;
        }

        public void Init(HexStack stack, Camera gameCamera, GameBoard gameBoard, TutorialGuide tutorialGuide,
            GameConfig config, ChainReactionSystem chainReactionSystem)
        {
            _collider = GetComponent<BoxCollider>();
            _collider.size = new Vector3(ColliderSize, 1, ColliderSize);
            _chainReactionSystem = chainReactionSystem;
            _stack = stack;
            _gameCamera = gameCamera;
            _gameBoard = gameBoard;
            _tutorialGuide = tutorialGuide;
            _config = config;
        }

        private void UpdateHoveredCell(Vector2 screenPosition)
        {
            var ray = _gameCamera.ScreenPointToRay(screenPosition);

            if (Physics.Raycast(ray, out var hit, MaxRaycastDistance, 1 << BoardLayer))
            {
                var cell = hit.collider.GetComponent<HexCell>();
                if (cell != null && cell.IsEmpty && cell != _hoveredCell)
                {
                    _hoveredCell = cell;
                }
            }
            else
            {
                _hoveredCell = null;
            }
        }

        private HexCell FindCellUnderCursor(Vector2 screenPosition)
        {
            var ray = _gameCamera.ScreenPointToRay(screenPosition);

            var results = new RaycastHit[MaxRaycastHits];
            var hits = Physics.RaycastNonAlloc(ray, results, MaxRaycastDistance, 1 << BoardLayer);

            HexCell bestCell = null;
            var bestDist = float.MaxValue;

            for (var i = 0; i < hits; i++)
            {
                var cell = results[i].collider.GetComponent<HexCell>();
                if (cell != null && cell.IsEmpty)
                {
                    var dist = Vector2.Distance(screenPosition,
                        _gameCamera.WorldToScreenPoint(cell.transform.position));
                    if (dist < bestDist)
                    {
                        bestDist = dist;
                        bestCell = cell;
                    }
                }
            }

            if (bestCell == null)
            {
                var plane = new Plane(Vector3.up, Vector3.zero);
                if (plane.Raycast(ray, out var distance))
                {
                    var worldPos = ray.GetPoint(distance);
                    bestCell = _gameBoard.FindNearestEmptyCell(worldPos);
                }
            }

            return bestCell;
        }

        private void SnapToCell(HexCell cell)
        {
            transform.SetParent(cell.transform, true);

            var targetPos = cell.transform.position;

            transform.DOMove(targetPos, _config.DragSnapDuration)
                .SetEase(Ease.OutQuad)
                .OnComplete(() =>
                {
                    _stack.SetCell(cell);
                    _gameBoard.OnStackPlaced(_stack);
                    _tutorialGuide?.OnPlayerReleased(true);
                });
        }

        private void ReturnToOriginal()
        {
            transform.SetParent(_originalParent, true);

            var returnPos = _originalPosition;

            transform.DOMove(returnPos, _config.ReturnDuration).SetEase(Ease.OutQuad)
                .OnComplete(() => _tutorialGuide?.OnPlayerReleased(false));
        }
    }
}