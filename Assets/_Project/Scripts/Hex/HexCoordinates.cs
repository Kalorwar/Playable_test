namespace _Project.Scripts.Hex
{
    public readonly struct HexCoordinates
    {
        public int Q { get; }
        public int R { get; }
        public int S { get; }

        public HexCoordinates(int q, int r)
        {
            Q = q;
            R = r;
            S = -q - r;
        }

        public static readonly HexCoordinates[] Directions =
        {
            new(1, -1), new(1, 0), new(0, 1),
            new(-1, 1), new(-1, 0), new(0, -1)
        };

        public static HexCoordinates operator +(HexCoordinates a, HexCoordinates b)
        {
            return new HexCoordinates(a.Q + b.Q, a.R + b.R);
        }

        public override bool Equals(object obj)
        {
            return obj is HexCoordinates o && Q == o.Q && R == o.R;
        }

        public override int GetHashCode()
        {
            return (Q, R).GetHashCode();
        }
    }
}