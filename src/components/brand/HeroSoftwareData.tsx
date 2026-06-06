// Hero graphic for /consulting/software-and-data — the build/data stack
// (software + data + integrations) producing instrumented BI insight on top.
// DARK hero, large labels.

const LAYERS = [
  { label: "SOFTWARE", y: 176 },
  { label: "DATA", y: 232 },
  { label: "INTEGRATIONS", y: 288 },
];
const CX = 240;
const W = 252;

export function HeroSoftwareData({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 400"
      className={className}
      role="img"
      aria-label="Software and data: a built foundation of software, data, and integrations producing instrumented business-intelligence insight."
      fill="none"
    >
      <defs>
        <linearGradient id="sd-layer" x1="0" y1="0" x2="480" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1569ac" stopOpacity="0.6" />
          <stop offset="0.5" stopColor="#48c1eb" stopOpacity="0.4" />
          <stop offset="1" stopColor="#1569ac" stopOpacity="0.6" />
        </linearGradient>
        <filter id="sd-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* BI / insight panel on top */}
      <g>
        <rect x={CX - 84} y="48" width="168" height="92" rx="10" fill="#0c2c47" fillOpacity="0.85" stroke="#48c1eb" strokeWidth="1.25" strokeOpacity="0.6" />
        {/* rising bars */}
        {[0, 1, 2, 3].map((i) => {
          const bx = CX - 60 + i * 32;
          const bh = 18 + i * 14;
          return <rect key={i} x={bx} y={128 - bh} width="18" height={bh} rx="2" fill={i === 3 ? "#9be3fb" : "#48c1eb"} filter={i === 3 ? "url(#sd-glow)" : undefined} />;
        })}
        <text x={CX} y="40" textAnchor="middle" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="13" fontWeight="700" letterSpacing="1" fill="#cfeefb">
          BI · INSIGHT
        </text>
      </g>

      {/* connector */}
      <line x1={CX} y1="140" x2={CX} y2="176" stroke="#48c1eb" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.6" />

      {/* the built stack */}
      {LAYERS.map((l) => (
        <g key={l.label}>
          <rect x={CX - W / 2} y={l.y} width={W} height="44" rx="9" fill="url(#sd-layer)" stroke="#48c1eb" strokeWidth="1.5" strokeOpacity="0.7" />
          <text x={CX} y={l.y + 28} textAnchor="middle" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="15" fontWeight="700" letterSpacing="1.5" fill="#eaf8ff">
            {l.label}
          </text>
        </g>
      ))}
      <text x={CX} y="356" textAnchor="middle" fontFamily="var(--font-inter-tight), sans-serif" fontSize="12.5" fill="#9cc4dd">
        built, not just configured
      </text>
    </svg>
  );
}
