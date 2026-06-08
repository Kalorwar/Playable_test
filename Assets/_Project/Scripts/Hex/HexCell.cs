using UnityEngine;

namespace _Project.Scripts.Hex
{
    public class HexCell : MonoBehaviour
    {
        public HexCoordinates Coordinates { get; private set; }

        public HexStack Stack { get; set; }
        public bool IsEmpty => Stack == null || Stack.IsEmpty;

        public void Init(HexCoordinates coordinates)
        {
            Coordinates = coordinates;
        }
    }
}