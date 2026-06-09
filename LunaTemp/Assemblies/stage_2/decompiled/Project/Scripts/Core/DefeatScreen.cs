using System;
using System.Collections;
using DG.Tweening;
using UnityEngine;

namespace Project.Scripts.Core
{
	public class DefeatScreen : MonoBehaviour
	{
		private const float FadeDuration = 0.5f;

		private const float DisplayDuration = 1f;

		[SerializeField]
		private CanvasGroup _defeatGroup;

		private void OnDisable()
		{
			_defeatGroup.DOKill();
		}

		public void ShowDefeat(Action onComplete)
		{
			StartCoroutine(DefeatRoutine(onComplete));
		}

		private IEnumerator DefeatRoutine(Action onComplete)
		{
			_defeatGroup.gameObject.SetActive(true);
			_defeatGroup.alpha = 0f;
			yield return _defeatGroup.DOFade(1f, 0.5f).WaitForCompletion();
			onComplete?.Invoke();
			yield return new WaitForSeconds(1f);
			yield return _defeatGroup.DOFade(0f, 0.5f).WaitForCompletion();
			_defeatGroup.gameObject.SetActive(false);
		}
	}
}
