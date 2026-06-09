using System.Collections.Generic;
using Project.Scripts.Config;
using Project.Scripts.Hex;
using UnityEngine;

namespace Project.Scripts.Core
{
    public class BoardGridGenerator
    {
        private const float BoardSpawnOffset = -0.32f;

        private readonly Transform _boardTransform;
        private readonly HexCell _cellPrefab;
        private readonly GameObject _elementPrefab;
        private readonly HexMaterialMap _materialMap;
        private readonly HexStack _stackPrefab;

        public BoardGridGenerator(Transform boardTransform, HexCell cellPrefab, HexStack stackPrefab,
            GameObject elementPrefab, HexMaterialMap materialMap)
        {
            _boardTransform = boardTransform;
            _cellPrefab = cellPrefab;
            _stackPrefab = stackPrefab;
            _elementPrefab = elementPrefab;
            _materialMap = materialMap;
        }

        public void Generate(LevelData levelData, GameConfig config, List<HexCell> allCells,
            Dictionary<HexCoordinates, HexCell> cellMap)
        {
            if (levelData == null)
            {
                return;
            }

            var hexSize = levelData.HexSize;
            var halfSize = config.StackSize / 2;

            foreach (var cellConfig in levelData.Cells)
            {
                var q = cellConfig.Coordinates.x;
                var r = cellConfig.Coordinates.y;

                var x = hexSize * (Mathf.Sqrt(3) * q + Mathf.Sqrt(3) / 2f * r);
                var z = hexSize * (3f / 2f * r);

                var cellWorldPos = new Vector3(x, 0, z);
                var boardWorldPos = new Vector3(x, BoardSpawnOffset, z);

                if (levelData.BaseLayerPrefab != null)
                {
                    Object.Instantiate(levelData.BaseLayerPrefab, boardWorldPos, Quaternion.identity, _boardTransform);
                }

                var cell = Object.Instantiate(_cellPrefab, cellWorldPos, Quaternion.identity, _boardTransform);
                var coords = new HexCoordinates(q, r);
                cell.Init(coords);

                cellMap[coords] = cell;
                allCells.Add(cell);

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
                    var stack = Object.Instantiate(_stackPrefab, cell.transform);
                    stack.Init(config, stackColors, _elementPrefab, _materialMap);
                    stack.SetCell(cell);
                }
            }
        }
    }
}