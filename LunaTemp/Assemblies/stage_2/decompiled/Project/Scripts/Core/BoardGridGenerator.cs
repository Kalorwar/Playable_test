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

		public BoardGridGenerator(Transform boardTransform, HexCell cellPrefab, HexStack stackPrefab, GameObject elementPrefab, HexMaterialMap materialMap)
		{
			_boardTransform = boardTransform;
			_cellPrefab = cellPrefab;
			_stackPrefab = stackPrefab;
			_elementPrefab = elementPrefab;
			_materialMap = materialMap;
		}

		public void Generate(LevelData levelData, GameConfig config, List<HexCell> allCells, Dictionary<HexCoordinates, HexCell> cellMap)
		{
			if (levelData == null)
			{
				return;
			}
			float hexSize = levelData.HexSize;
			int halfSize = config.StackSize / 2;
			foreach (LevelData.CellConfig cellConfig in levelData.Cells)
			{
				int q = cellConfig.Coordinates.x;
				int r = cellConfig.Coordinates.y;
				float x = hexSize * (Mathf.Sqrt(3f) * (float)q + Mathf.Sqrt(3f) / 2f * (float)r);
				float z = hexSize * (1.5f * (float)r);
				Vector3 cellWorldPos = new Vector3(x, 0f, z);
				Vector3 boardWorldPos = new Vector3(x, -0.32f, z);
				if (levelData.BaseLayerPrefab != null)
				{
					Object.Instantiate(levelData.BaseLayerPrefab, boardWorldPos, Quaternion.identity, _boardTransform);
				}
				HexCell cell = Object.Instantiate(_cellPrefab, cellWorldPos, Quaternion.identity, _boardTransform);
				HexCoordinates coords = new HexCoordinates(q, r);
				cell.Init(coords);
				cellMap[coords] = cell;
				allCells.Add(cell);
				if (cellConfig.IsEmpty)
				{
					continue;
				}
				List<HexColor> stackColors = new List<HexColor>();
				if (cellConfig.IsFull)
				{
					for (int k = 0; k < halfSize; k++)
					{
						stackColors.Add(cellConfig.BottomColor);
					}
					for (int j = 0; j < halfSize; j++)
					{
						stackColors.Add(cellConfig.TopColor);
					}
				}
				else
				{
					for (int i = 0; i < halfSize; i++)
					{
						stackColors.Add(cellConfig.BottomColor);
					}
				}
				if (stackColors.Count > 0)
				{
					HexStack stack = Object.Instantiate(_stackPrefab, cell.transform);
					stack.Init(config, stackColors, _elementPrefab, _materialMap);
					stack.SetCell(cell);
				}
			}
		}
	}
}
