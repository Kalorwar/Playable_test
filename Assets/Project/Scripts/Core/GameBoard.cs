using System.Collections.Generic;
using System.Linq;
using DG.Tweening;
using Project.Scripts.Config;
using Project.Scripts.Hex;
using Project.Scripts.Tutorial;
using UnityEngine;

namespace Project.Scripts.Core
{
    public class GameBoard : MonoBehaviour
    {
        private const float ShakeAnimationDuration = 0.2f;
        private const float MaxSnapDistance = 1.5f;
        private const float ShakeStrength = 0.04f;
        private const int ShakeVibrato = 5;

        [SerializeField] private GameObject _elementPrefab;
        [SerializeField] private Transform[] _playerStackSlots;
        [SerializeField] private HexCell _cellPrefab;
        [SerializeField] private HexStack _stackPrefab;
        [SerializeField] private HexMaterialMap _materialMap;

        private readonly List<HexCell> _allCells = new();
        private readonly Dictionary<HexCoordinates, HexCell> _cellMap = new();

        private ChainReactionSystem _chainReactionSystem;
        private GameConfig _config;
        private Camera _gameCamera;

        private BoardGridGenerator _gridGenerator;
        private Vector3 _originalPosition;
        private Tween _shakeTween;
        private PlayerStackController _stackController;
        private TutorialGuide _tutorialGuide;

        public HexMaterialMap MaterialMap => _materialMap;

        public bool IsInputLocked { get; private set; }

        private void OnDisable()
        {
            if (_shakeTween != null && _shakeTween.IsActive())
            {
                _shakeTween.Kill();
            }
        }

        public void Init(GameConfig config, LevelData levelData, ChainReactionSystem chainReactionSystem,
            TutorialGuide tutorialGuide)
        {
            _gameCamera = Camera.main;
            _chainReactionSystem = chainReactionSystem;
            _tutorialGuide = tutorialGuide;
            _config = config;
            _originalPosition = transform.position;
            IsInputLocked = false;

            _gridGenerator = new BoardGridGenerator(transform, _cellPrefab, _stackPrefab, _elementPrefab, _materialMap);
            _stackController = new PlayerStackController(this, _playerStackSlots, _gameCamera, _stackPrefab,
                _elementPrefab, _materialMap);

            _gridGenerator.Generate(levelData, config, _allCells, _cellMap);
            _stackController.SpawnInitial(levelData, config, tutorialGuide, chainReactionSystem);
        }

        public void LockInput()
        {
            IsInputLocked = true;
        }

        public void ShakeBoard()
        {
            _shakeTween?.Kill();
            transform.position = _originalPosition;
            _shakeTween = transform.DOShakePosition(ShakeAnimationDuration,
                    new Vector3(ShakeStrength, 0f, ShakeStrength), ShakeVibrato)
                .OnComplete(() => { transform.position = _originalPosition; });
        }

        public HexCell FindNearestEmptyCell(Vector3 position)
        {
            HexCell best = null;
            var bestDist = float.MaxValue;

            foreach (var cell in _allCells)
            {
                if (!cell.IsEmpty)
                {
                    continue;
                }

                var d = Vector3.Distance(position, cell.transform.position);
                if (d < bestDist && d < MaxSnapDistance)
                {
                    bestDist = d;
                    best = cell;
                }
            }

            return best;
        }

        public List<HexCell> GetNeighbors(HexCell cell)
        {
            var result = new List<HexCell>();
            foreach (var dir in HexCoordinates.Directions)
            {
                if (_cellMap.TryGetValue(cell.Coordinates + dir, out var n))
                {
                    result.Add(n);
                }
            }

            return result;
        }

        public HexCell FindDonor(HexCell target, HexColor color)
        {
            foreach (var n in GetNeighbors(target))
            {
                if (n.IsEmpty || n.IsLocked)
                {
                    continue;
                }

                if (n.Stack.TopColor == color && n.Stack.Count >= _config.SplitPoint)
                {
                    return n;
                }
            }

            return null;
        }

        public bool IsBoardComplete()
        {
            return _allCells.All(c => c.IsEmpty);
        }

        public bool HasEmptyCells()
        {
            return _allCells.Any(c => c.IsEmpty);
        }

        public void OnStackPlaced(HexStack stack)
        {
            _stackController.RemoveStack(stack);

            var draggable = stack.GetComponent<DraggableStack>();
            if (draggable != null)
            {
                Destroy(draggable);
            }

            _chainReactionSystem.StartChain(stack.CurrentCell);
        }

        public List<HexColor> GetColorsOnBoard()
        {
            var colors = new HashSet<HexColor>();
            foreach (var cell in _allCells)
            {
                if (!cell.IsEmpty && cell.Stack != null)
                {
                    foreach (var c in cell.Stack.GetColors())
                    {
                        colors.Add(c);
                    }
                }
            }

            return colors.ToList();
        }

        public HexCell GetTutorialTargetCell()
        {
            foreach (var cell in _allCells)
            {
                if (cell.IsEmpty && !cell.IsLocked)
                {
                    return cell;
                }
            }

            return null;
        }

        public bool HasPlayerStacks()
        {
            return _stackController.HasStacks();
        }

        public void TryRefillPlayerStacks()
        {
            _stackController.TryRefill(_config, _tutorialGuide, _chainReactionSystem);
        }

        public Transform GetFirstPlayerStack()
        {
            return _stackController.GetFirstStack();
        }
    }
}