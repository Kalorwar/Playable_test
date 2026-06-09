using DG.Tweening;
using Project.Scripts.Config;
using Project.Scripts.Core;
using UnityEngine;

namespace Project.Scripts.Tutorial
{
    public class TutorialGuide : MonoBehaviour
    {
        private const float GrabScale = 0.85f;
        private const float NormalScale = 1f;
        private const float ScaleDuration = 0.2f;
        private const float MoveDuration = 1f;
        private const float LoopDelay = 0.2f;
        private const int InfiniteLoops = -1;

        [SerializeField] private Transform _hand;

        private GameConfig _config;
        private GameBoard _gameBoard;
        private Camera _gameCamera;

        private float _idleTimer;
        private bool _isComplete;
        private bool _isPlayerDragging;
        private Sequence _seq;

        private void Start()
        {
            ShowTutorial();
        }

        private void Update()
        {
            if (_isComplete || _isPlayerDragging || _hand.gameObject.activeSelf)
            {
                return;
            }

            _idleTimer += Time.deltaTime;
            if (_idleTimer >= _config.IdleDelay)
            {
                ShowTutorial();
            }
        }

        private void OnDisable()
        {
            _seq?.Kill();
        }

        public void Init(GameConfig config, GameBoard gameBoard)
        {
            _config = config;
            _gameBoard = gameBoard;
            _idleTimer = 0f;
            _hand.gameObject.SetActive(false);
            _gameCamera = Camera.main;
        }

        public void OnPlayerGrabbed()
        {
            if (_isComplete)
            {
                return;
            }

            _isPlayerDragging = true;
            _seq?.Kill();
            _hand.gameObject.SetActive(false);
        }

        public void OnPlayerReleased(bool success)
        {
            if (_isComplete)
            {
                return;
            }

            _isPlayerDragging = false;

            if (success)
            {
                _isComplete = true;
                _hand.gameObject.SetActive(false);
            }
            else
            {
                _idleTimer = 0f;
            }
        }

        private void ShowTutorial()
        {
            var startStack = _gameBoard.GetFirstPlayerStack();
            var targetCell = _gameBoard.GetTutorialTargetCell();

            if (startStack == null || targetCell == null)
            {
                return;
            }

            var startScreenPos = _gameCamera.WorldToScreenPoint(startStack.position);
            var targetScreenPos = _gameCamera.WorldToScreenPoint(targetCell.transform.position);

            _hand.position = startScreenPos;
            _hand.localScale = Vector3.one * NormalScale;
            _hand.gameObject.SetActive(true);

            _seq = DOTween.Sequence();
            _seq.Append(_hand.DOScale(GrabScale, ScaleDuration));
            _seq.Append(_hand.DOMove(targetScreenPos, MoveDuration).SetEase(Ease.InOutQuad));
            _seq.Append(_hand.DOScale(NormalScale, ScaleDuration));
            _seq.AppendInterval(LoopDelay);
            _seq.AppendCallback(() => _hand.position = startScreenPos);
            _seq.SetLoops(InfiniteLoops);
        }
    }
}