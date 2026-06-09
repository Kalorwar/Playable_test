using UnityEngine;

namespace Project.Scripts.Hex
{
	public class HexCell : MonoBehaviour
	{
		public HexCoordinates Coordinates { get; private set; }

		public HexStack Stack { get; set; }

		public bool IsEmpty => Stack == null || Stack.IsEmpty;

		public bool IsLocked { get; set; }

		public void Init(HexCoordinates coordinates)
		{
			Coordinates = coordinates;
		}
	}
}
