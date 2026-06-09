using Project.Scripts.Config;
using Project.Scripts.Tutorial;
using UnityEngine;

namespace Project.Scripts.Core
{
	public class GameController : MonoBehaviour
	{
		[SerializeField]
		private GameConfig _config;

		[SerializeField]
		private LevelData _levelData;

		[SerializeField]
		private GameBoard _gameBoard;

		[SerializeField]
		private ChainReactionSystem _chainReactionSystem;

		[SerializeField]
		private TutorialGuide _tutorialGuide;

		[SerializeField]
		private PackshotScreen _packshotScreen;

		[SerializeField]
		private DefeatScreen _defeatScreen;

		private void Start()
		{
			Debug.Log("Game Controller Start");
			_tutorialGuide.Init(_config, _gameBoard);
			_chainReactionSystem.Init(_config, _gameBoard, this, _gameBoard.MaterialMap);
			_gameBoard.Init(_config, _levelData, _chainReactionSystem, _tutorialGuide);
		}

		public void GoToPackshot()
		{
			_gameBoard.LockInput();
			_tutorialGuide.OnPlayerReleased(true);
			_packshotScreen.ShowPackshot(_config.DelayBeforePackshot);
		}

		[ContextMenu("Lose")]
		public void GoToDefeat()
		{
			_gameBoard.LockInput();
			_tutorialGuide.OnPlayerReleased(true);
			_defeatScreen.ShowDefeat(GoToPackshot);
		}
	}
}
