using _Project.Scripts.Config;
using _Project.Scripts.Core;
using _Project.Scripts.Tutorial;
using DG.Tweening;
using UnityEngine;
using UnityEngine.EventSystems;

namespace _Project.Scripts.Hex
{
    [RequireComponent(typeof(BoxCollider))]
    public class DraggableStack : MonoBehaviour, IPointerDownHandler, IDragHandler, IPointerUpHandler
    {
        private const int BoardLayer = 6;
        private BoardManager _boardManager;
        private Collider _collider;
        private GameConfig _config;
        private Vector3 _dragOffset;
        private float _dragPlaneDistance;
        private Vector3 _dragStartPosition;
        private Camera _gameCamera;
        private HexCell _hoveredCell;
        private bool _isDragging;
        private Transform _originalParent;
        private Vector3 _originalPosition;
        private HexStack _stack;
        private TutorialManager _tutorialManager;

        private void Start()
        {
            _collider = GetComponent<Collider>();
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
                transform.position = worldPos + _dragOffset;
            }

            UpdateHoveredCell(eventData.position);
        }

        public void OnPointerDown(PointerEventData eventData)
        {
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
            _tutorialManager?.OnPlayerGrabbed();
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

        public void Init(HexStack stack, Camera gameCamera, BoardManager boardManager, TutorialManager tutorialManager,
            GameConfig config)
        {
            _stack = stack;
            _gameCamera = gameCamera;
            _boardManager = boardManager;
            _tutorialManager = tutorialManager;
            _config = config;
        }

        private void UpdateHoveredCell(Vector2 screenPosition)
        {
            var ray = _gameCamera.ScreenPointToRay(screenPosition);

            if (Physics.Raycast(ray, out var hit, 100f, 1 << BoardLayer))
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

            var results = new RaycastHit[] { };
            Physics.RaycastNonAlloc(ray, results, 100f, 1 << BoardLayer);

            HexCell bestCell = null;
            var bestDist = float.MaxValue;

            foreach (var hit in results)
            {
                var cell = hit.collider.GetComponent<HexCell>();
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
                    bestCell = _boardManager.FindNearestEmptyCell(worldPos);
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
                    _boardManager.OnStackPlaced(_stack);
                });
        }

        private void ReturnToOriginal()
        {
            transform.SetParent(_originalParent, true);

            var returnPos = _originalPosition;

            transform.DOMove(returnPos, _config.ReturnDuration).SetEase(Ease.OutQuad);
        }
    }
}