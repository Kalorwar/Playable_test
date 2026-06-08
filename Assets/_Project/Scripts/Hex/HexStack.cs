using System.Collections;
using System.Collections.Generic;
using System.Linq;
using _Project.Scripts.Config;
using DG.Tweening;
using UnityEngine;

namespace _Project.Scripts.Hex
{
    public class HexStack : MonoBehaviour
    {
        [SerializeField] private Transform _elementsContainer;

        private readonly List<HexElement> _elements = new();
        private GameConfig _config;

        public int Count => _elements.Count;
        public bool IsEmpty => Count == 0;
        public HexColor TopColor => Count > 0 ? _elements[Count - 1].Color : HexColor.Red;
        public HexCell CurrentCell { get; private set; }

        public Transform ElementsContainer => _elementsContainer;

        private void OnDisable()
        {
            foreach (var el in _elements)
            {
                if (el != null)
                {
                    el.transform.DOKill();
                }
            }
        }

        public void Init(GameConfig config, List<HexColor> colors, GameObject elementPrefab, HexMaterialMap materialMap)
        {
            _config = config;

            for (var i = 0; i < colors.Count; i++)
            {
                var go = Instantiate(elementPrefab, _elementsContainer);
                var el = go.GetComponent<HexElement>();
                el.SetColor(colors[i], materialMap.GetMaterial(colors[i]));
                _elements.Add(el);
            }

            RefreshPositions();
        }

        public void SetCell(HexCell cell)
        {
            CurrentCell = cell;
            if (cell != null)
            {
                cell.Stack = this;
            }
        }

        public List<HexElement> PopTop(int count)
        {
            var result = new List<HexElement>();
            var removeCount = Mathf.Min(count, _elements.Count);

            for (var i = 0; i < removeCount; i++)
            {
                var el = _elements[_elements.Count - 1];
                _elements.RemoveAt(_elements.Count - 1);
                result.Add(el);
            }

            RefreshPositions();
            return result;
        }

        public void PushElements(List<HexElement> newElements)
        {
            for (var i = 0; i < newElements.Count; i++)
            {
                var el = newElements[i];
                el.transform.SetParent(_elementsContainer, true);
                el.transform.localRotation = Quaternion.identity;
                _elements.Add(el);
            }

            RefreshPositions();
        }

        public void RefreshPositions()
        {
            var heightStep = 0.15f;
            for (var i = 0; i < _elements.Count; i++)
            {
                _elements[i].SetLocalPosition(Vector3.up * i * heightStep);
            }
        }

        public bool IsUniformColor()
        {
            return Count > 0 && _elements.All(e => e.Color == _elements[0].Color);
        }

        // ⬇️ Новый метод: возвращает все цвета элементов в стопке
        public IEnumerable<HexColor> GetColors()
        {
            return _elements.Select(e => e.Color);
        }

        public IEnumerator AnimateDisappear(float speed)
        {
            var duration = _config.ElementDisappearDuration / speed;
            var staggerDelay = duration / 2f;

            Tweener lastTween = null;

            for (var i = _elements.Count - 1; i >= 0; i--)
            {
                lastTween = _elements[i].Disappear(duration);

                if (i > 0)
                {
                    yield return new WaitForSeconds(staggerDelay);
                }
            }

            if (lastTween != null)
            {
                yield return lastTween.WaitForCompletion();
            }

            _elements.Clear();
        }
    }
}