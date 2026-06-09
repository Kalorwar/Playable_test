using System.Collections;
using System.Collections.Generic;
using System.Linq;
using DG.Tweening;
using Project.Scripts.Config;
using UnityEngine;

namespace Project.Scripts.Hex
{
	public class HexStack : MonoBehaviour
	{
		[SerializeField]
		private Transform _elementsContainer;

		private readonly List<HexElement> _elements = new List<HexElement>();

		private GameConfig _config;

		public int Count => _elements.Count;

		public bool IsEmpty => Count == 0;

		public HexColor TopColor => (Count > 0) ? _elements[Count - 1].Color : HexColor.Red;

		public HexCell CurrentCell { get; private set; }

		public Transform ElementsContainer => _elementsContainer;

		private void OnDisable()
		{
			foreach (HexElement el in _elements)
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
			for (int i = 0; i < colors.Count; i++)
			{
				GameObject go = Object.Instantiate(elementPrefab, _elementsContainer);
				HexElement el = go.GetComponent<HexElement>();
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
			List<HexElement> result = new List<HexElement>();
			int removeCount = Mathf.Min(count, _elements.Count);
			for (int i = 0; i < removeCount; i++)
			{
				HexElement el = _elements[_elements.Count - 1];
				_elements.RemoveAt(_elements.Count - 1);
				result.Add(el);
			}
			RefreshPositions();
			return result;
		}

		public void PushElements(List<HexElement> newElements)
		{
			for (int i = 0; i < newElements.Count; i++)
			{
				HexElement el = newElements[i];
				el.transform.SetParent(_elementsContainer, true);
				el.transform.localRotation = Quaternion.identity;
				_elements.Add(el);
			}
			RefreshPositions();
		}

		public void RefreshPositions()
		{
			float heightStep = 0.15f;
			for (int i = 0; i < _elements.Count; i++)
			{
				_elements[i].SetLocalPosition(Vector3.up * i * heightStep);
			}
		}

		public bool IsUniformColor()
		{
			return Count > 0 && _elements.All((HexElement e) => e.Color == _elements[0].Color);
		}

		public IEnumerable<HexColor> GetColors()
		{
			return _elements.Select((HexElement e) => e.Color);
		}

		public IEnumerator AnimateDisappear(float speed)
		{
			float duration = _config.ElementDisappearDuration / speed;
			float staggerDelay = duration / 2f;
			Tweener lastTween = null;
			for (int i = _elements.Count - 1; i >= 0; i--)
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
