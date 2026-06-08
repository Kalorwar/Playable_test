using System.Collections;
using System.Collections.Generic;
using _Project.Scripts.Config;
using _Project.Scripts.Hex;
using DG.Tweening;
using UnityEngine;

namespace _Project.Scripts.Core
{
    public class ChainReactionManager : MonoBehaviour
    {
        [Header("Particles")] [SerializeField] private GameObject _particlePrefab;

        private BoardManager _boardManager;
        private Coroutine _chainReaction;
        private float _chainSpeed;
        private GameConfig _config;
        private GameManager _gameManager;
        private HexMaterialMap _materialMap;
        public bool IsChainActive { get; private set; }

        private void OnDisable()
        {
            if (_chainReaction != null)
            {
                StopCoroutine(_chainReaction);
            }

            DOTween.KillAll();
        }

        public void Init(GameConfig config, BoardManager boardManager, GameManager gameManager,
            HexMaterialMap materialMap)
        {
            _config = config;
            _boardManager = boardManager;
            _gameManager = gameManager;
            _materialMap = materialMap;
        }

        public void StartChain(HexCell from)
        {
            _chainReaction = StartCoroutine(ExecuteChain(from));
        }

        private IEnumerator ExecuteChain(HexCell startCell)
        {
            IsChainActive = true;
            var currentTarget = startCell;
            _chainSpeed = 1f;
            Coroutine lastAnim = null;

            while (currentTarget != null && !currentTarget.IsEmpty)
            {
                var needed = currentTarget.Stack.TopColor;
                var donor = _boardManager.FindDonor(currentTarget, needed);

                if (donor == null || donor.IsEmpty)
                {
                    break;
                }

                var transferred = donor.Stack.PopTop(_config.SplitPoint);

                var duration = _config.ElementFlyDuration / _chainSpeed;
                var staggerDelay = duration * 0.15f;

                lastAnim = StartCoroutine(AnimateAndProcess(currentTarget, donor, transferred));

                if (transferred.Count > 1)
                {
                    yield return new WaitForSeconds(staggerDelay * (transferred.Count - 1));
                }

                currentTarget = donor;
            }

            if (lastAnim != null)
            {
                yield return lastAnim;
            }

            if (_boardManager.IsBoardComplete())
            {
                _gameManager.GoToPackshot();
            }
            else
            {
                _boardManager.TryRefillPlayerStacks();
            }

            IsChainActive = false;
            _chainReaction = null;
        }

        private IEnumerator AnimateAndProcess(HexCell target, HexCell from, List<HexElement> elements)
        {
            target.IsLocked = true;

            var duration = _config.ElementFlyDuration / _chainSpeed;
            var jumpHeight = _config.ElementJumpHeight;
            var staggerDelay = duration * 0.15f;

            var startPositions = new Vector3[elements.Count];
            for (var i = 0; i < elements.Count; i++)
            {
                if (elements[i] == null)
                {
                    yield break;
                }

                startPositions[i] = elements[i].transform.position;
                elements[i].transform.SetParent(null, true);
            }

            var basePos = target.Stack != null
                ? target.Stack.ElementsContainer.position
                : target.transform.position;

            var overallDir = target.transform.position - from.transform.position;
            overallDir.y = 0f;
            var rotAxis = overallDir.sqrMagnitude > 0.001f
                ? Vector3.Cross(Vector3.up, overallDir).normalized
                : Vector3.right;
            var flipRotation = Quaternion.AngleAxis(_config.ElementFlipAngle, rotAxis);

            for (var i = 0; i < elements.Count; i++)
            {
                if (elements[i] == null)
                {
                    continue;
                }

                var el = elements[i];
                var startPos = startPositions[i];
                var targetIndex = i;
                var stackCount = target.Stack != null ? target.Stack.Count : 0;
                var endPos = basePos + Vector3.up * (stackCount + targetIndex) * 0.15f;
                var midPos = Vector3.Lerp(startPos, endPos, 0.5f) + Vector3.up * jumpHeight;
                var path = new[] { startPos, midPos, endPos };

                el.FlyTo(path, duration, flipRotation);

                if (i < elements.Count - 1)
                {
                    yield return new WaitForSeconds(staggerDelay);
                }
            }

            yield return new WaitForSeconds(duration);

            for (var i = 0; i < elements.Count; i++)
            {
                if (elements[i] == null)
                {
                    continue;
                }

                elements[i].transform.DOKill();
                var targetIndex = i;
                var stackCount = target.Stack != null ? target.Stack.Count : 0;
                var endPos = basePos + Vector3.up * (stackCount + targetIndex) * 0.15f;
                elements[i].transform.position = endPos;
                elements[i].transform.rotation = Quaternion.identity;
            }

            if (target.Stack == null)
            {
                target.IsLocked = false;
                yield break;
            }

            target.Stack.PushElements(elements);

            if (target.Stack.Count == _config.StackSize && target.Stack.IsUniformColor())
            {
                var stackColor = target.Stack.TopColor;
                var particlePos = target.transform.position;
                var stackToDestroy = target.Stack;

                target.Stack.SetCell(null);
                target.Stack = null;

                yield return stackToDestroy.AnimateDisappear(_chainSpeed);

                SpawnParticle(particlePos, stackColor);

                _chainSpeed *= _config.SpeedMultiplier;
            }

            target.IsLocked = false;
        }

        private void SpawnParticle(Vector3 position, HexColor color)
        {
            if (_particlePrefab == null)
            {
                return;
            }

            var mat = _materialMap.GetMaterial(color);
            if (mat == null)
            {
                return;
            }

            var particleObj = Instantiate(_particlePrefab, position, Quaternion.identity);
            var ps = particleObj.GetComponent<ParticleSystem>();

            if (ps != null)
            {
                var mainModule = ps.main;
                mainModule.startColor = mat.color;
            }
        }
    }
}