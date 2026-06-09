using System;
using System.Collections.Generic;
using Project.Scripts.Hex;
using UnityEngine;

namespace Project.Scripts.Config
{
	[CreateAssetMenu(fileName = "LevelData", menuName = "HexStack/LevelData")]
	public class LevelData : ScriptableObject
	{
		[Serializable]
		public class CellConfig
		{
			public Vector2Int Coordinates;

			public HexColor TopColor;

			public HexColor BottomColor;

			public bool IsFull = true;

			public bool IsEmpty;
		}

		[Serializable]
		public class PlayerStackConfig
		{
			public HexColor Color;
		}

		[SerializeField]
		private List<CellConfig> _cells = new List<CellConfig>();

		[SerializeField]
		private List<PlayerStackConfig> _playerStacks = new List<PlayerStackConfig>();

		[SerializeField]
		private float _hexSize = 1f;

		[SerializeField]
		private GameObject _baseLayerPrefab;

		public List<CellConfig> Cells => _cells;

		public List<PlayerStackConfig> PlayerStacks => _playerStacks;

		public float HexSize => _hexSize;

		public GameObject BaseLayerPrefab => _baseLayerPrefab;

		[ContextMenu("Generate Triangle 4")]
		private void GenerateTriangle4()
		{
			_cells.Clear();
			int size = 4;
			for (int q = 0; q < size; q++)
			{
				for (int r = 0; r < size - q; r++)
				{
					_cells.Add(new CellConfig
					{
						Coordinates = new Vector2Int(q, r)
					});
				}
			}
		}

		[ContextMenu("Generate Triangle 5")]
		private void GenerateTriangle5()
		{
			_cells.Clear();
			int size = 5;
			for (int q = 0; q < size; q++)
			{
				for (int r = 0; r < size - q; r++)
				{
					_cells.Add(new CellConfig
					{
						Coordinates = new Vector2Int(q, r)
					});
				}
			}
		}

		[ContextMenu("Clear")]
		private void Clear()
		{
			_cells.Clear();
		}
	}
}
