// Hero diagram for /framework. The Readiness + Maturity Scorecard: five
// dimensions scored 1-5, then an honest routing decision.

const DIMS = [
  { t: "Process Maturity", score: 4 },
  { t: "Tech + Integration", score: 3 },
  { t: "Data Quality", score: 3 },
  { t: "Automation + AI", score: 2 },
  { t: "People + Knowledge", score: 4 },
];

export function HeroFramework({ className = "" }: { className?: string }) {
  const segW = 26, segGap = 7, segX = 252, rowH = 40, startY = 56;
  return (
    <svg viewBox="0 0 480 400" className={className} role="img" fill="none"
      aria-label="Readiness and maturity scorecard: five dimensions scored one to five, with an honest routing decision.">
      <defs>
        <linearGradient id="fw-panel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0c2c47" stopOpacity="0.5" /><stop offset="1" stopColor="#0a2238" stopOpacity="0.7" />
        </linearGradient>
      </defs>

      <rect x="24" y="28" width="432" height="248" rx="14" fill="url(#fw-panel)" stroke="#48c1eb" strokeWidth="1.25" strokeOpacity="0.5" />
      <text x="48" y="52" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="11" fontWeight="700" letterSpacing="1" fill="#48c1eb">READINESS SCORECARD · 1-5</text>

      {DIMS.map((d, i) => {
        const y = startY + 14 + i * rowH;
        return (
          <g key={d.t}>
            <text x="48" y={y + 16} fontFamily="var(--font-inter-tight), sans-serif" fontSize="13.5" fill="#dceaf5">{d.t}</text>
            {[1, 2, 3, 4, 5].map((n) => (
              <rect key={n} x={segX + (n - 1) * (segW + segGap)} y={y + 2} width={segW} height="16" rx="3"
                fill={n <= d.score ? "#48c1eb" : "#1c344d"}
              />
            ))}
          </g>
        );
      })}

      {/* routing decision */}
      <g>
        <rect x="24" y="296" width="432" height="80" rx="12" fill="#081a2d" stroke="#48c1eb" strokeWidth="1.1" strokeOpacity="0.5" />
        <text x="48" y="320" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="10.5" letterSpacing="0.5" fill="#86adcd">ROUTING DECISION</text>
        <g>
          <rect x="48" y="332" width="180" height="30" rx="8" fill="#1f9d57" fillOpacity="0.22" stroke="#1f9d57" strokeWidth="1.25" />
          <text x="138" y="352" textAnchor="middle" fontFamily="var(--font-inter-tight), sans-serif" fontSize="12.5" fontWeight="600" fill="#7ee2a8">Engagement recommended</text>
          <text x="246" y="346" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="10.5" fill="#86adcd">RS ≥ 3.0</text>
          <text x="246" y="362" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="9.5" fill="#5f7d96">else: conditions · not yet</text>
        </g>
      </g>
    </svg>
  );
}
