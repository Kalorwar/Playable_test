namespace Project.Scripts.Hex
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
            if (obj is HexCoordinates other)
            {
                return Q == other.Q && R == other.R;
            }

            return false;
        }

        public override int GetHashCode()
        {
            unchecked
            {
                var hash = 17;
                hash = hash * 31 + Q;
                hash = hash * 31 + R;
                return hash;
            }
        }
    }
}