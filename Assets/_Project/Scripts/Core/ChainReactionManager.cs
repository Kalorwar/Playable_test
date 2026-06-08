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
        private BoardManager _boardManager;
        private Coroutine _chainReaction;

        // Выносим скорость в поле класса, чтобы менять её после уничтожения стопки
        private float _chainSpeed;
        private GameConfig _config;
        private GameManager _gameManager;

        private void OnDisable()
        {
            if (_chainReaction != null)
            {
                StopCoroutine(_chainReaction);
            }

            DOTween.KillAll();
        }

        public void Init(GameConfig config, BoardManager boardManager, GameManager gameManager)
        {
            _config = config;
            _boardManager = boardManager;
            _gameManager = gameManager;
        }

        public void StartChain(HexCell from)
        {
            _chainReaction = StartCoroutine(ExecuteChain(from));
        }

        private IEnumerator ExecuteChain(HexCell startCell)
        {
            var currentTarget = startCell;
            _chainSpeed = 1f; // Сброс скорости при старте цепи
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

                // Рассчитываем задержку взлёта на основе ТЕКУЩЕЙ скорости
                var duration = _config.ElementFlyDuration / _chainSpeed;
                var staggerDelay = duration * 0.15f;

                // Запускаем анимацию полета, приземления и исчезновения в фоне
                lastAnim = StartCoroutine(AnimateAndProcess(currentTarget, donor, transferred));

                // Ждём только до тех пор, пока последний элемент не оторвется от земли
                if (transferred.Count > 1)
                {
                    yield return new WaitForSeconds(staggerDelay * (transferred.Count - 1));
                }

                // Сразу переходим к следующей стопке (донору)
                // Скорость здесь НЕ меняется — она изменится только когда стопка уничтожится
                currentTarget = donor;
            }

            // Ждём завершения самой последней анимации в цепи
            if (lastAnim != null)
            {
                yield return lastAnim;
            }

            if (_boardManager.IsBoardComplete())
            {
                _gameManager.GoToPackshot();
            }

            _chainReaction = null;
        }

        private IEnumerator AnimateAndProcess(HexCell target, HexCell from, List<HexElement> elements)
        {
            // Используем текущую скорость для расчета времени анимации
            var duration = _config.ElementFlyDuration / _chainSpeed;
            var jumpHeight = _config.ElementJumpHeight;
            var staggerDelay = duration * 0.15f;

            var startPositions = new Vector3[elements.Count];
            for (var i = 0; i < elements.Count; i++)
            {
                startPositions[i] = elements[i].transform.position;
                elements[i].transform.SetParent(null, true);
            }

            var basePos = target.Stack.ElementsContainer.position;

            var overallDir = target.transform.position - from.transform.position;
            overallDir.y = 0f;
            var rotAxis = Vector3.Cross(Vector3.up, overallDir).normalized;
            var flipRotation = Quaternion.AngleAxis(_config.ElementFlipAngle, rotAxis);

            // Запускаем полет каждого элемента
            for (var i = 0; i < elements.Count; i++)
            {
                var el = elements[i];
                var startPos = startPositions[i];

                var targetIndex = i;
                var endPos = basePos + Vector3.up * (target.Stack.Count + targetIndex) * 0.15f;
                var midPos = Vector3.Lerp(startPos, endPos, 0.5f) + Vector3.up * jumpHeight;
                var path = new[] { startPos, midPos, endPos };

                el.FlyTo(path, duration, flipRotation);

                if (i < elements.Count - 1)
                {
                    yield return new WaitForSeconds(staggerDelay);
                }
            }

            // Ждем, пока последний элемент долетит и приземлится
            yield return new WaitForSeconds(duration);

            // Фиксируем позиции и перекидываем в стопку
            for (var i = 0; i < elements.Count; i++)
            {
                elements[i].transform.DOKill();
                var targetIndex = i;
                var endPos = basePos + Vector3.up * (target.Stack.Count + targetIndex) * 0.15f;
                elements[i].transform.position = endPos;
                elements[i].transform.rotation = Quaternion.identity;
            }

            target.Stack.PushElements(elements);

            // Проверяем на заполненность и играем исчезновение
            if (target.Stack.Count == _config.StackSize && target.Stack.IsUniformColor())
            {
                yield return target.Stack.AnimateDisappear(_chainSpeed);
                target.Stack.SetCell(null);
                target.Stack = null;

                // ⬇️ УСКОРЯЕМ ЦЕПЬ ИМЕННО ЗДЕСЬ — после уничтожения стопки
                _chainSpeed *= _config.SpeedMultiplier;
            }
            else
            {
                Debug.LogError("Stack not full or not uniform after transfer!");
            }
        }
    }
}