using System.Collections.Generic;
using System.Linq;
using Project.Scripts.Config;
using Project.Scripts.Hex;
using Project.Scripts.Tutorial;
using UnityEngine;

namespace Project.Scripts.Core
{
    public class PlayerStackController
    {
        private const int MaxRefillStacks = 3;
        private readonly Camera _camera;
        private readonly GameObject _elementPrefab;
        private readonly GameBoard _gameBoard;
        private readonly HexMaterialMap _materialMap;

        private readonly List<HexStack> _playerStacks = new();

        private readonly Transform[] _slots;
        private readonly HexStack _stackPrefab;

        public PlayerStackController(GameBoard gameBoard, Transform[] slots, Camera camera, HexStack stackPrefab,
            GameObject elementPrefab, HexMaterialMap materialMap)
        {
            _gameBoard = gameBoard;
            _slots = slots;
            _camera = camera;
            _stackPrefab = stackPrefab;
            _elementPrefab = elementPrefab;
            _materialMap = materialMap;
        }

        public void SpawnInitial(LevelData levelData, GameConfig config, TutorialGuide tutorial,
            ChainReactionSystem chainReaction)
        {
            var playerStackSize = config.StackSize - config.SplitPoint;

            for (var i = 0; i < levelData.PlayerStacks.Count && i < _slots.Length; i++)
            {
                var stackData = levelData.PlayerStacks[i];
                var slot = _slots[i];

                var stackColors = new List<HexColor>();
                for (var j = 0; j < playerStackSize; j++)
                {
                    stackColors.Add(stackData.Color);
                }

                SpawnStack(slot, stackColors, config, tutorial, chainReaction);
            }
        }

        public void TryRefill(GameConfig config, TutorialGuide tutorial, ChainReactionSystem chainReaction)
        {
            if (HasStacks())
            {
                return;
            }

            var availableColors = _gameBoard.GetColorsOnBoard();
            if (availableColors.Count == 0)
            {
                return;
            }

            var shuffledColors = availableColors.OrderBy(c => Random.value).ToList();
            var playerStackSize = config.StackSize - config.SplitPoint;

            var spawned = 0;
            foreach (var slot in _slots)
            {
                if (spawned >= MaxRefillStacks)
                {
                    break;
                }

                if (slot.childCount > 0 && slot.GetChild(0).GetComponent<HexStack>() != null)
                {
                    continue;
                }

                var color = shuffledColors[Mathf.Min(spawned, shuffledColors.Count - 1)];

                var stackColors = new List<HexColor>();
                for (var j = 0; j < playerStackSize; j++)
                {
                    stackColors.Add(color);
                }

                SpawnStack(slot, stackColors, config, tutorial, chainReaction);
                spawned++;
            }
        }

        private void SpawnStack(Transform slot, List<HexColor> colors, GameConfig config, TutorialGuide tutorial,
            ChainReactionSystem chainReaction)
        {
            var stack = Object.Instantiate(_stackPrefab, slot.position, Quaternion.identity, slot);
            stack.Init(config, colors, _elementPrefab, _materialMap);

            var draggable = stack.gameObject.AddComponent<DraggableStack>();
            draggable.Init(stack, _camera, _gameBoard, tutorial, config, chainReaction);

            _playerStacks.Add(stack);
        }

        public void RemoveStack(HexStack stack)
        {
            _playerStacks.Remove(stack);
        }

        public bool HasStacks()
        {
            return _playerStacks.Count > 0;
        }

        public Transform GetFirstStack()
        {
            return _playerStacks.Count > 0 ? _playerStacks[0].transform : null;
        }
    }
}