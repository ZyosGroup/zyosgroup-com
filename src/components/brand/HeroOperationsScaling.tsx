// Hero graphic for /consulting/operations-and-scaling — the operating model as
// a continuous loop (Measure -> Deliver -> Continuously Improve) around a core.
// DARK hero, large labels.

const NODES = [
  { label: "MEASURE", x: 240, y: 86 },
  { label: "DELIVER", x: 360, y: 286 },
  { label: "IMPROVE", x: 120, y: 286 },
];
const CX = 240;
const CY = 200;

export function HeroOperationsScaling({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 400"
      className={className}
      role="img"
      aria-label="Operations and scaling: the operating model as a continuous loop, measure, deliver, continuously improve, around one core."
      fill="none"
    >
      <defs>
        <radialGradient id="ops-core" cx="42%" cy="38%" r="70%">
          <stop offset="0" stopColor="#7ad6f5" />
          <stop offset="1" stopColor="#1569ac" />
        </radialGradient>
        <filter id="ops-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* the loop ring */}
      <circle cx={CX} cy={CY} r="116" fill="none" stroke="#48c1eb" strokeWidth="2" strokeDasharray="4 5" opacity="0.55" />
      {/* directional arrowheads on the ring (clockwise) */}
      {[18, 138, 258].map((deg, i) => {
        const a = (deg * Math.PI) / 180;
        const x = CX + Math.cos(a) * 116, y = CY + Math.sin(a) * 116;
        const t = a + Math.PI / 2; // tangent
        return (
          <path
            key={i}
            d={`M ${x - Math.cos(t) * 7 - Math.cos(a) * 5} ${y - Math.sin(t) * 7 - Math.sin(a) * 5} L ${x} ${y} L ${x - Math.cos(t) * 7 + Math.cos(a) * 5} ${y - Math.sin(t) * 7 + Math.sin(a) * 5}`}
            fill="none" stroke="#9be3fb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          />
        );
      })}

      {/* phase nodes */}
      {NODES.map((n) => (
        <g key={n.label}>
          <circle cx={n.x} cy={n.y} r="11" fill="#0c2c47" stroke="#48c1eb" strokeWidth="2.5" />
          <circle cx={n.x} cy={n.y} r="4" fill="#9be3fb" />
          <text
            x={n.x}
            y={n.y < CY ? n.y - 22 : n.y + 32}
            textAnchor="middle"
            fontFamily="var(--font-jetbrains-mono), monospace"
            fontSize="14" fontWeight="700" letterSpacing="1" fill="#eaf8ff"
          >
            {n.label}
          </text>
        </g>
      ))}

      {/* core */}
      <g filter="url(#ops-glow)">
        <circle cx={CX} cy={CY} r="46" fill="url(#ops-core)" />
        <circle cx={CX} cy={CY} r="46" fill="none" stroke="#bdeeff" strokeWidth="1.25" opacity="0.9" />
      </g>
      <text x={CX} y={CY - 4} textAnchor="middle" fontFamily="var(--font-inter-tight), sans-serif" fontSize="14" fontWeight="700" fill="#eaf8ff">
        operating
      </text>
      <text x={CX} y={CY + 15} textAnchor="middle" fontFamily="var(--font-inter-tight), sans-serif" fontSize="14" fontWeight="700" fill="#eaf8ff">
        model
      </text>
    </svg>
  );
}
