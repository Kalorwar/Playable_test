using DG.Tweening;
using Project.Scripts.Config;
using Project.Scripts.Core;
using Project.Scripts.Tutorial;
using UnityEngine;
using UnityEngine.EventSystems;

namespace Project.Scripts.Hex
{
	[RequireComponent(typeof(BoxCollider))]
	public class DraggableStack : MonoBehaviour, IPointerDownHandler, IEventSystemHandler, IDragHandler, IPointerUpHandler
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
			base.transform.DOKill();
		}

		public void OnDrag(PointerEventData eventData)
		{
			if (!_isDragging)
			{
				return;
			}
			Plane dragPlane = new Plane(-_gameCamera.transform.forward, _dragStartPosition);
			Ray ray = _gameCamera.ScreenPointToRay(eventData.position);
			if (dragPlane.Raycast(ray, out var distance))
			{
				Vector3 worldPos = ray.GetPoint(distance);
				Vector3 targetPos = worldPos + _dragOffset;
				if (targetPos.y > 2f)
				{
					if (new Plane(Vector3.up, new Vector3(0f, 2f - _dragOffset.y, 0f)).Raycast(ray, out var limitDistance))
					{
						targetPos = ray.GetPoint(limitDistance) + _dragOffset;
					}
					else
					{
						targetPos.y = 2f;
					}
				}
				base.transform.position = targetPos;
			}
			UpdateHoveredCell(eventData.position);
		}

		public void OnPointerDown(PointerEventData eventData)
		{
			if (!_chainReactionSystem.IsChainActive && !_gameBoard.IsInputLocked)
			{
				_isDragging = true;
				_originalPosition = base.transform.position;
				_originalParent = base.transform.parent;
				_dragStartPosition = base.transform.position;
				Plane dragPlane = new Plane(-_gameCamera.transform.forward, base.transform.position);
				Ray ray = _gameCamera.ScreenPointToRay(eventData.position);
				if (dragPlane.Raycast(ray, out _dragPlaneDistance))
				{
					Vector3 worldPos = ray.GetPoint(_dragPlaneDistance);
					_dragOffset = base.transform.position - worldPos;
				}
				_collider.enabled = false;
				_tutorialGuide?.OnPlayerGrabbed();
			}
		}

		public void OnPointerUp(PointerEventData eventData)
		{
			if (_isDragging)
			{
				_isDragging = false;
				_collider.enabled = true;
				HexCell target = _hoveredCell ?? FindCellUnderCursor(eventData.position);
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
		}

		public void Init(HexStack stack, Camera gameCamera, GameBoard gameBoard, TutorialGuide tutorialGuide, GameConfig config, ChainReactionSystem chainReactionSystem)
		{
			_collider = GetComponent<BoxCollider>();
			_collider.size = new Vector3(1.8f, 1f, 1.8f);
			_chainReactionSystem = chainReactionSystem;
			_stack = stack;
			_gameCamera = gameCamera;
			_gameBoard = gameBoard;
			_tutorialGuide = tutorialGuide;
			_config = config;
		}

		private void UpdateHoveredCell(Vector2 screenPosition)
		{
			Ray ray = _gameCamera.ScreenPointToRay(screenPosition);
			if (Physics.Raycast(ray, out var hit, 100f, 64))
			{
				HexCell cell = hit.collider.GetComponent<HexCell>();
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
			Ray ray = _gameCamera.ScreenPointToRay(screenPosition);
			RaycastHit[] results = new RaycastHit[10];
			int hits = Physics.RaycastNonAlloc(ray, results, 100f, 64);
			HexCell bestCell = null;
			float bestDist = float.MaxValue;
			for (int i = 0; i < hits; i++)
			{
				HexCell cell = results[i].collider.GetComponent<HexCell>();
				if (cell != null && cell.IsEmpty)
				{
					float dist = Vector2.Distance(screenPosition, _gameCamera.WorldToScreenPoint(cell.transform.position));
					if (dist < bestDist)
					{
						bestDist = dist;
						bestCell = cell;
					}
				}
			}
			if (bestCell == null && new Plane(Vector3.up, Vector3.zero).Raycast(ray, out var distance))
			{
				Vector3 worldPos = ray.GetPoint(distance);
				bestCell = _gameBoard.FindNearestEmptyCell(worldPos);
			}
			return bestCell;
		}

		private void SnapToCell(HexCell cell)
		{
			base.transform.SetParent(cell.transform, true);
			Vector3 targetPos = cell.transform.position;
			base.transform.DOMove(targetPos, _config.DragSnapDuration).SetEase(Ease.OutQuad).OnComplete(delegate
			{
				_stack.SetCell(cell);
				_gameBoard.OnStackPlaced(_stack);
				_tutorialGuide?.OnPlayerReleased(true);
			});
		}

		private void ReturnToOriginal()
		{
			base.transform.SetParent(_originalParent, true);
			Vector3 returnPos = _originalPosition;
			base.transform.DOMove(returnPos, _config.ReturnDuration).SetEase(Ease.OutQuad).OnComplete(delegate
			{
				_tutorialGuide?.OnPlayerReleased(false);
			});
		}
	}
}
