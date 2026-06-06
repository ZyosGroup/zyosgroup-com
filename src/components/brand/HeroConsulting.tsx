// Hero graphic for /consulting — the four practice areas as one integrated
// team converging on a single core (delivered on Zyos OS). Reinforces the
// single-vendor / one-team positioning. Built for the DARK hero, large labels.

const NODES = [
  { x: 132, y: 116, label: "Software & Data", anchor: "middle" as const, ly: 96 },
  { x: 348, y: 116, label: "Digital Transformation", anchor: "middle" as const, ly: 96 },
  { x: 132, y: 284, label: "Operations & Scaling", anchor: "middle" as const, ly: 318 },
  { x: 348, y: 284, label: "Integrated Marketing", anchor: "middle" as const, ly: 318 },
];

const CX = 240;
const CY = 200;
const CORE_R = 50;

export function HeroConsulting({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 400"
      className={className}
      role="img"
      aria-label="Zyos Group Consulting: four practice areas, Software & Data, Digital Transformation, Operations & Scaling, and Integrated Marketing, delivered as one team on the Zyos Operating System."
      fill="none"
    >
      <defs>
        <radialGradient id="con-core" cx="42%" cy="38%" r="70%">
          <stop offset="0" stopColor="#7ad6f5" />
          <stop offset="1" stopColor="#1569ac" />
        </radialGradient>
        <filter id="con-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* connectors node -> core */}
      <g opacity="0.4">
        {NODES.map((n) => (
          <line key={n.label} x1={n.x} y1={n.y} x2={CX} y2={CY} stroke="#48c1eb" strokeWidth="1.25" />
        ))}
      </g>

      {/* practice-area nodes + labels */}
      {NODES.map((n, i) => (
        <g key={n.label}>
          <circle cx={n.x} cy={n.y} r="8" fill={i % 2 ? "#48c1eb" : "#7ad6f5"} stroke="#9be3fb" strokeWidth="1.25" />
          <text
            x={n.x} y={n.ly} textAnchor={n.anchor}
            fontFamily="var(--font-inter-tight), sans-serif"
            fontSize="14.5" fontWeight="600" fill="#eaf8ff"
          >
            {n.label}
          </text>
        </g>
      ))}

      {/* core */}
      <g filter="url(#con-glow)">
        <circle cx={CX} cy={CY} r={CORE_R} fill="url(#con-core)" />
        <circle cx={CX} cy={CY} r={CORE_R} fill="none" stroke="#bdeeff" strokeWidth="1.25" opacity="0.9" />
      </g>
      <text x={CX} y={CY - 2} textAnchor="middle" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="16" fontWeight="700" letterSpacing="1" fill="#eaf8ff">
        ZYOS OS
      </text>
      <text x={CX} y={CY + 18} textAnchor="middle" fontFamily="var(--font-inter-tight), sans-serif" fontSize="12.5" fill="#d7f0fb">
        one team
      </text>
    </svg>
  );
}
