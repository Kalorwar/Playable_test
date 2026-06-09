using System.Collections;
using DG.Tweening;
using Luna.Unity;
using UnityEngine;
using UnityEngine.UI;

namespace Project.Scripts.Core
{
	public class PackshotScreen : MonoBehaviour
	{
		private const float FadeDuration = 0.3f;

		private const float ExpandDuration = 1.2f;

		private const float TargetMaskSize = 3500f;

		[SerializeField]
		private CanvasGroup _packshotGroup;

		[SerializeField]
		private Button _packshotButton;

		[SerializeField]
		private RectTransform _hexagonMask;

		[Header("Border")]
		[SerializeField]
		private RectTransform _hexagonBorder;

		[SerializeField]
		private CanvasGroup _borderCanvasGroup;

		private void OnEnable()
		{
			_packshotButton.onClick.AddListener(OnPackshotInteract);
		}

		private void OnDisable()
		{
			_packshotButton.onClick.RemoveListener(OnPackshotInteract);
			_packshotGroup.DOKill();
			_hexagonMask.DOKill();
			if (_hexagonBorder != null)
			{
				_hexagonBorder.DOKill();
			}
			if (_borderCanvasGroup != null)
			{
				_borderCanvasGroup.DOKill();
			}
		}

		public void ShowPackshot(float delay)
		{
			StartCoroutine(PackshotRoutine(delay));
		}

		private void OnPackshotInteract()
		{
			Playable.InstallFullGame();
		}

		private IEnumerator PackshotRoutine(float delay)
		{
			yield return new WaitForSeconds(delay);
			LifeCycle.GameEnded();
			_packshotGroup.gameObject.SetActive(true);
			_packshotGroup.alpha = 0f;
			_hexagonMask.sizeDelta = Vector2.zero;
			_hexagonBorder.sizeDelta = Vector2.zero;
			_borderCanvasGroup.alpha = 1f;
			_packshotGroup.DOFade(1f, 0.3f);
			yield return new WaitForSeconds(0.3f);
			Vector2 targetSize = new Vector2(3500f, 3500f);
			_hexagonMask.DOSizeDelta(targetSize, 1.2f).SetEase(Ease.InOutQuad);
			_hexagonBorder.DOSizeDelta(targetSize, 1.2f).SetEase(Ease.InOutQuad);
			_borderCanvasGroup.DOFade(0f, 0.3f).SetDelay(0.90000004f);
		}
	}
}
