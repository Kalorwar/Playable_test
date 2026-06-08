using _Project.Scripts.Config;
using DG.Tweening;
using UnityEngine;

namespace _Project.Scripts.Tutorial
{
    public class TutorialManager : MonoBehaviour
    {
        [SerializeField] private Transform _hand;
        [SerializeField] private Transform _endPos;
        private GameConfig _config;
        private float _idleTimer;
        private bool _playerGrabbed;
        private Sequence _seq;
        private Transform _startPos;

        private void Start()
        {
            _startPos = _hand;
        }

        private void Update()
        {
            if (_playerGrabbed || _hand.gameObject.activeSelf)
            {
                return;
            }

            _idleTimer += Time.deltaTime;
            if (_idleTimer >= _config.IdleDelay)
            {
                ShowHand();
            }
        }

        private void OnDisable()
        {
            _seq?.Kill();
        }

        public void Init(GameConfig config)
        {
            _config = config;
        }

        public void OnPlayerGrabbed()
        {
            _playerGrabbed = true;
            _idleTimer = 0f;
            _seq?.Kill();
            _hand.gameObject.SetActive(false);
        }

        private void ShowHand()
        {
            _hand.gameObject.SetActive(true);
            _seq = DOTween.Sequence();
            _seq.Append(_hand.DOMove(_startPos.position, 0.4f));
            _seq.AppendInterval(0.2f);
            _seq.Append(_hand.DOMove(_endPos.position, 0.8f).SetEase(Ease.InOutQuad));
            _seq.AppendInterval(0.4f);
            _seq.SetLoops(-1);
        }
    }
}