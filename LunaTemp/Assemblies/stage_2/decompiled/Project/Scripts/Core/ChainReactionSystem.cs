using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using Project.Scripts.Config;
using Project.Scripts.Hex;
using UnityEngine;

namespace Project.Scripts.Core
{
	public class ChainReactionSystem : MonoBehaviour
	{
		private const float BaseChainSpeed = 1f;

		private const float StaggerDelayFraction = 0.15f;

		private const float ElementHeightOffset = 0.15f;

		private const float MidpointLerpFactor = 0.5f;

		private const float DirectionMagnitudeThreshold = 0.001f;

		[Header("Particles")]
		[SerializeField]
		private GameObject _particlePrefab;

		private Coroutine _chainReaction;

		private float _chainSpeed;

		private GameConfig _config;

		private GameBoard _gameBoard;

		private GameController _gameController;

		private HexMaterialMap _materialMap;

		public bool IsChainActive { get; private set; }

		private void OnDisable()
		{
			if (_chainReaction != null)
			{
				StopCoroutine(_chainReaction);
			}
		}

		public void Init(GameConfig config, GameBoard gameBoard, GameController gameController, HexMaterialMap materialMap)
		{
			_config = config;
			_gameBoard = gameBoard;
			_gameController = gameController;
			_materialMap = materialMap;
		}

		public void StartChain(HexCell from)
		{
			_chainReaction = StartCoroutine(ExecuteChain(from));
		}

		private IEnumerator ExecuteChain(HexCell startCell)
		{
			IsChainActive = true;
			_chainSpeed = 1f;
			HexCell currentTarget = startCell;
			Coroutine lastAnim = null;
			while (currentTarget != null && !currentTarget.IsEmpty)
			{
				HexColor needed = currentTarget.Stack.TopColor;
				HexCell donor = _gameBoard.FindDonor(currentTarget, needed);
				if (donor == null || donor.IsEmpty)
				{
					break;
				}
				List<HexElement> transferred = donor.Stack.PopTop(_config.SplitPoint);
				lastAnim = StartCoroutine(AnimateAndProcess(currentTarget, donor, transferred));
				yield return WaitForStagger(transferred.Count);
				currentTarget = donor;
			}
			if (lastAnim != null)
			{
				yield return lastAnim;
			}
			EvaluateGameState();
			IsChainActive = false;
			_chainReaction = null;
		}

		private void EvaluateGameState()
		{
			if (_gameBoard.IsBoardComplete())
			{
				_gameController.GoToPackshot();
			}
			else if (!_gameBoard.HasEmptyCells())
			{
				_gameController.GoToDefeat();
			}
			else
			{
				_gameBoard.TryRefillPlayerStacks();
			}
		}

		private IEnumerator WaitForStagger(int elementCount)
		{
			if (elementCount > 1)
			{
				float duration = _config.ElementFlyDuration / _chainSpeed;
				float staggerDelay = duration * 0.15f;
				yield return new WaitForSeconds(staggerDelay * (float)(elementCount - 1));
			}
		}

		private IEnumerator AnimateAndProcess(HexCell target, HexCell from, List<HexElement> elements)
		{
			target.IsLocked = true;
			yield return FlyElements(target, from, elements);
			if (target.Stack != null)
			{
				yield return ProcessMergeAndDestroy(target, elements);
			}
			target.IsLocked = false;
		}

		private IEnumerator FlyElements(HexCell target, HexCell from, List<HexElement> elements)
		{
			float duration = _config.ElementFlyDuration / _chainSpeed;
			float staggerDelay = duration * 0.15f;
			Quaternion flipRotation = CalculateFlipRotation(target, from);
			Vector3 basePos = GetBasePosition(target);
			Vector3[] startPositions = UnparentAndGetStartPositions(elements);
			for (int j = 0; j < elements.Count; j++)
			{
				if (!(elements[j] == null))
				{
					LaunchElement(elements[j], startPositions[j], basePos, j, target, duration, flipRotation);
					if (j < elements.Count - 1)
					{
						yield return new WaitForSeconds(staggerDelay);
					}
				}
			}
			yield return new WaitForSeconds(duration);
			for (int i = 0; i < elements.Count; i++)
			{
				if (elements[i] != null)
				{
					SnapElement(elements[i], basePos, i, target);
				}
			}
		}

		private IEnumerator ProcessMergeAndDestroy(HexCell target, List<HexElement> elements)
		{
			target.Stack.PushElements(elements);
			if (target.Stack.Count == _config.StackSize && target.Stack.IsUniformColor())
			{
				HexColor stackColor = target.Stack.TopColor;
				Vector3 particlePos = target.transform.position;
				HexStack stackToDestroy = target.Stack;
				target.Stack.SetCell(null);
				target.Stack = null;
				yield return stackToDestroy.AnimateDisappear(_chainSpeed);
				SpawnParticle(particlePos, stackColor);
				_gameBoard.ShakeBoard();
				_chainSpeed *= _config.SpeedMultiplier;
			}
		}

		private Vector3[] UnparentAndGetStartPositions(List<HexElement> elements)
		{
			Vector3[] startPositions = new Vector3[elements.Count];
			for (int i = 0; i < elements.Count; i++)
			{
				if (elements[i] != null)
				{
					startPositions[i] = elements[i].transform.position;
					elements[i].transform.SetParent(null, true);
				}
			}
			return startPositions;
		}

		private void LaunchElement(HexElement el, Vector3 startPos, Vector3 basePos, int targetIndex, HexCell target, float duration, Quaternion flipRotation)
		{
			int stackCount = ((target.Stack != null) ? target.Stack.Count : 0);
			Vector3 endPos = basePos + Vector3.up * (stackCount + targetIndex) * 0.15f;
			Vector3 midPos = Vector3.Lerp(startPos, endPos, 0.5f) + Vector3.up * _config.ElementJumpHeight;
			Vector3[] path = new Vector3[3] { startPos, midPos, endPos };
			el.FlyTo(path, duration, flipRotation);
		}

		private void SnapElement(HexElement el, Vector3 basePos, int targetIndex, HexCell target)
		{
			el.transform.DOKill();
			int stackCount = ((target.Stack != null) ? target.Stack.Count : 0);
			Vector3 endPos = basePos + Vector3.up * (stackCount + targetIndex) * 0.15f;
			el.transform.position = endPos;
			el.transform.rotation = Quaternion.identity;
		}

		private Quaternion CalculateFlipRotation(HexCell target, HexCell from)
		{
			Vector3 overallDir = target.transform.position - from.transform.position;
			overallDir.y = 0f;
			Vector3 rotAxis = ((overallDir.sqrMagnitude > 0.001f) ? Vector3.Cross(Vector3.up, overallDir).normalized : Vector3.right);
			return Quaternion.AngleAxis(_config.ElementFlipAngle, rotAxis);
		}

		private Vector3 GetBasePosition(HexCell target)
		{
			return (target.Stack != null) ? target.Stack.ElementsContainer.position : target.transform.position;
		}

		private void SpawnParticle(Vector3 position, HexColor color)
		{
			if (_particlePrefab == null)
			{
				return;
			}
			Material mat = _materialMap.GetMaterial(color);
			if (!(mat == null))
			{
				GameObject particleObj = Object.Instantiate(_particlePrefab, position, Quaternion.identity);
				ParticleSystem ps = particleObj.GetComponent<ParticleSystem>();
				if (ps != null)
				{
					ParticleSystem.MainModule mainModule = ps.main;
					mainModule.startColor = mat.color;
				}
			}
		}
	}
}
