using System.Collections.Generic;
using System.Linq;
using _Project.Scripts.Config;
using _Project.Scripts.Hex;
using _Project.Scripts.Tutorial;
using UnityEngine;

namespace _Project.Scripts.Core
{
    public class BoardManager : MonoBehaviour
    {
        private const float BoardSpawnOffset = -0.32f;
        [SerializeField] private GameObject _elementPrefab;
        [SerializeField] private Camera _gameCamera;
        [SerializeField] private Transform[] _playerStackSlots;
        [SerializeField] private HexCell _cellPrefab;
        [SerializeField] private HexStack _stackPrefab;
        [SerializeField] private HexMaterialMap _materialMap;

        private readonly List<HexCell> _allCells = new();
        private readonly Dictionary<HexCoordinates, HexCell> _cellMap = new();
        private readonly List<HexStack> _playerStacks = new();

        private ChainReactionManager _chainReaction;
        private GameConfig _config;
        private LevelData _levelData;
        private TutorialManager _tutorialManager;

        public HexMaterialMap MaterialMap => _materialMap;

        public void Init(GameConfig config, LevelData levelData, ChainReactionManager chainReaction,
            TutorialManager tutorialManager)
        {
            _chainReaction = chainReaction;
            _tutorialManager = tutorialManager;
            _config = config;
            _levelData = levelData;
            GenerateGrid();
            SpawnPlayerStacks();
        }

        private void GenerateGrid()
        {
            if (_levelData == null)
            {
                return;
            }

            var hexSize = _levelData.HexSize;
            var halfSize = _config.StackSize / 2;

            foreach (var cellConfig in _levelData.Cells)
            {
                var q = cellConfig.Coordinates.x;
                var r = cellConfig.Coordinates.y;

                var x = hexSize * (Mathf.Sqrt(3) * q + Mathf.Sqrt(3) / 2f * r);
                var z = hexSize * (3f / 2f * r);

                var cellWorldPos = new Vector3(x, 0, z);
                var boardWorldPos = new Vector3(x, BoardSpawnOffset, z);

                if (_levelData.BaseLayerPrefab != null)
                {
                    Instantiate(_levelData.BaseLayerPrefab, boardWorldPos, Quaternion.identity, transform);
                }

                var cell = Instantiate(_cellPrefab, cellWorldPos, Quaternion.identity, transform);
                var coords = new HexCoordinates(q, r);
                cell.Init(coords);

                _cellMap[coords] = cell;
                _allCells.Add(cell);

                if (cellConfig.IsEmpty)
                {
                    continue;
                }

                var stackColors = new List<HexColor>();

                if (cellConfig.IsFull)
                {
                    for (var i = 0; i < halfSize; i++)
                    {
                        stackColors.Add(cellConfig.BottomColor);
                    }

                    for (var i = 0; i < halfSize; i++)
                    {
                        stackColors.Add(cellConfig.TopColor);
                    }
                }
                else
                {
                    for (var i = 0; i < halfSize; i++)
                    {
                        stackColors.Add(cellConfig.BottomColor);
                    }
                }

                if (stackColors.Count > 0)
                {
                    var stack = Instantiate(_stackPrefab, cell.transform);
                    stack.Init(_config, stackColors, _elementPrefab, _materialMap);
                    stack.SetCell(cell);
                }
            }
        }

        private void SpawnPlayerStacks()
        {
            var halfSize = _config.StackSize / 2;

            for (var i = 0; i < _levelData.PlayerStacks.Count && i < _playerStackSlots.Length; i++)
            {
                var stackData = _levelData.PlayerStacks[i];
                var slot = _playerStackSlots[i];

                var stackColors = new List<HexColor>();
                for (var j = 0; j < halfSize; j++)
                {
                    stackColors.Add(stackData.Color);
                }

                var stack = Instantiate(_stackPrefab, slot.position, Quaternion.identity, slot);
                stack.Init(_config, stackColors, _elementPrefab, _materialMap);

                var draggable = stack.gameObject.AddComponent<DraggableStack>();
                draggable.Init(stack, _gameCamera, this, _tutorialManager, _config);

                _playerStacks.Add(stack);
            }
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
                if (d < bestDist && d < 1.5f)
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
                if (n.IsEmpty)
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

        public void OnStackPlaced(HexStack stack)
        {
            _playerStacks.Remove(stack);

            var draggable = stack.GetComponent<DraggableStack>();
            if (draggable != null)
            {
                Destroy(draggable);
            }

            _chainReaction.StartChain(stack.CurrentCell);
        }

        // ⬇️ Новый метод: проверяет, есть ли ещё стопки у игрока
        public bool HasPlayerStacks()
        {
            return _playerStacks.Count > 0;
        }

        // ⬇️ Новый метод: собирает уникальные цвета со всех стопок на поле
        private List<HexColor> GetColorsOnBoard()
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

        public void TryRefillPlayerStacks()
        {
            if (HasPlayerStacks())
            {
                return;
            }

            var availableColors = GetColorsOnBoard();
            if (availableColors.Count == 0)
            {
                return;
            }

            var shuffledColors = availableColors.OrderBy(c => Random.value).ToList();

            var spawned = 0;
            foreach (var slot in _playerStackSlots)
            {
                if (spawned >= 3)
                {
                    break;
                }

                if (slot.childCount > 0 && slot.GetChild(0).GetComponent<HexStack>() != null)
                {
                    continue;
                }

                var color = shuffledColors[Mathf.Min(spawned, shuffledColors.Count - 1)];

                var stackColors = new List<HexColor>();
                for (var j = 0; j < 5; j++)
                {
                    stackColors.Add(color);
                }

                var stack = Instantiate(_stackPrefab, slot.position, Quaternion.identity, slot);
                stack.Init(_config, stackColors, _elementPrefab, _materialMap);

                var draggable = stack.gameObject.AddComponent<DraggableStack>();
                draggable.Init(stack, _gameCamera, this, _tutorialManager, _config);

                _playerStacks.Add(stack);
                spawned++;
            }
        }
    }
}