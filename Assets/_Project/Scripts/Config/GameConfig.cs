using UnityEngine;

namespace _Project.Scripts.Config
{
    [CreateAssetMenu(fileName = "GameConfig", menuName = "HexStack/GameConfig")]
    public class GameConfig : ScriptableObject
    {
        [Header("Stack")] [SerializeField] private int _stackSize = 10;

        [SerializeField] private int _splitPoint = 5;

        [Header("Animation")] [SerializeField] private float _elementFlyDuration = 0.4f;

        [SerializeField] private float _elementDisappearDuration = 0.25f;
        [SerializeField] private float _dragSnapDuration = 0.2f;
        [SerializeField] private float _returnDuration = 0.3f;
        [SerializeField] private float _elementJumpHeight = 0.5f;
        [SerializeField] private float _elementFlipAngle = 180f;

        [Header("Chain Reaction")] [SerializeField]
        private float _speedMultiplier = 1.3f;

        [SerializeField] private float _delayBeforePackshot = 0.8f;

        [Header("Tutorial")] [SerializeField] private float _idleDelay = 2.5f;

        public int StackSize => _stackSize;
        public int SplitPoint => _splitPoint;
        public float ElementFlyDuration => _elementFlyDuration;
        public float ElementDisappearDuration => _elementDisappearDuration;
        public float DragSnapDuration => _dragSnapDuration;
        public float ReturnDuration => _returnDuration;
        public float ElementJumpHeight => _elementJumpHeight;
        public float ElementFlipAngle => _elementFlipAngle;
        public float SpeedMultiplier => _speedMultiplier;
        public float DelayBeforePackshot => _delayBeforePackshot;
        public float IdleDelay => _idleDelay;
    }
}