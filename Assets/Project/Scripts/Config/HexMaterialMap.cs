using System;
using System.Collections.Generic;
using Project.Scripts.Hex;
using UnityEngine;

namespace Project.Scripts.Config
{
    [CreateAssetMenu(fileName = "HexMaterialMap", menuName = "HexStack/HexMaterialMap")]
    public class HexMaterialMap : ScriptableObject
    {
        [SerializeField] private List<Pair> _pairs = new();
        private Dictionary<HexColor, Material> _map;

        private void OnValidate()
        {
            BuildMap();
        }

        public Material GetMaterial(HexColor color)
        {
            if (_map == null)
            {
                BuildMap();
            }

            return _map.GetValueOrDefault(color);
        }

        private void BuildMap()
        {
            _map = new Dictionary<HexColor, Material>();
            foreach (var pair in _pairs)
            {
                if (pair.Material != null)
                {
                    _map[pair.Color] = pair.Material;
                }
            }
        }

        [Serializable]
        public class Pair
        {
            public HexColor Color;
            public Material Material;
        }
    }
}