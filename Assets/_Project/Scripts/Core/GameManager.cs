using System.Collections;
using _Project.Scripts.Config;
using _Project.Scripts.Tutorial;
using DG.Tweening;
using Luna.Unity;
using UnityEngine;

namespace _Project.Scripts.Core
{
    public class GameManager : MonoBehaviour
    {
        [SerializeField] private GameConfig _config;
        [SerializeField] private LevelData _levelData;
        [SerializeField] private CanvasGroup _packshotGroup;
        [SerializeField] private BoardManager _boardManager;
        [SerializeField] private ChainReactionManager _chainReactionManager;
        [SerializeField] private TutorialManager _tutorialManager;

        private void Start()
        {
            _tutorialManager.Init(_config);

            _chainReactionManager.Init(_config, _boardManager, this, _boardManager.MaterialMap);

            _boardManager.Init(_config, _levelData, _chainReactionManager, _tutorialManager);
        }

        public void GoToPackshot()
        {
            StartCoroutine(PackshotRoutine());
        }

        public void OnPackshotInteract()
        {
            Playable.InstallFullGame();
        }

        private IEnumerator PackshotRoutine()
        {
            yield return new WaitForSeconds(_config.DelayBeforePackshot);
            LifeCycle.GameEnded();

            _packshotGroup.gameObject.SetActive(true);
            _packshotGroup.alpha = 0;
            yield return _packshotGroup.DOFade(1, 0.5f).WaitForCompletion();
        }
    }
}