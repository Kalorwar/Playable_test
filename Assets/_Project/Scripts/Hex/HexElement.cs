using DG.Tweening;
using UnityEngine;

namespace _Project.Scripts.Hex
{
    public class HexElement : MonoBehaviour
    {
        [SerializeField] private MeshRenderer _meshRenderer;
        public HexColor Color { get; private set; }

        private void OnDisable()
        {
            transform.DOKill();
        }

        public void SetColor(HexColor color, Material mat)
        {
            Color = color;
            if (_meshRenderer != null)
            {
                _meshRenderer.material = mat;
            }
        }

        public void SetLocalPosition(Vector3 pos)
        {
            transform.localPosition = pos;
        }

        public void FlyTo(Vector3[] path, float duration, Quaternion targetRotation)
        {
            transform.DOPath(path, duration, PathType.CatmullRom)
                .SetEase(Ease.OutQuad);

            transform.DORotateQuaternion(targetRotation, duration)
                .SetEase(Ease.OutQuad);
        }

        public Tweener Disappear(float duration)
        {
            return transform.DOScale(Vector3.zero, duration)
                .OnComplete(() => Destroy(gameObject));
        }
    }
}