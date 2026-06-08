// Hero graphic for /solutions/agent-as-a-service. The five AaaS variants fan out
// from one operated agent layer, over a "visible task log" panel (the moat: we
// show the reasoning trace, not just outputs). Dark-hero compatible, large
// legible labels. Matches HeroSolutions' visual language.

const VARIANTS = ["Workflows", "Systems", "Middleware", "Lean", "Insights"];

export function HeroAgentService({ className = "" }: { className?: string }) {
  const chipW = 86;
  const gap = 11;
  const totalW = VARIANTS.length * chipW + (VARIANTS.length - 1) * gap;
  const startX = (480 - totalW) / 2;
  const chipY = 150;

  return (
    <svg
      viewBox="0 0 480 400"
      className={className}
      role="img"
      aria-label="Agent as a Service: five agent variants (Workflows, Systems, Middleware, Lean, Insights) operated over a visible task log."
      fill="none"
    >
      <defs>
        <linearGradient id="aas-hub" x1="0" y1="36" x2="0" y2="108" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1569ac" stopOpacity="0.55" />
          <stop offset="1" stopColor="#0c2c47" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="aas-chip" x1="0" y1="150" x2="0" y2="206" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1569ac" stopOpacity="0.4" />
          <stop offset="1" stopColor="#0c2c47" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* operated agent hub */}
      <rect x="106" y="40" width="268" height="64" rx="12" fill="url(#aas-hub)" stroke="#48c1eb" strokeWidth="1.5" />
      <text x="240" y="68" textAnchor="middle" fontFamily="var(--font-inter-tight), sans-serif" fontSize="19" fontWeight="700" fill="#eaf8ff">
        AI Agents
      </text>
      <text x="240" y="89" textAnchor="middle" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="10.5" letterSpacing="0.5" fill="#86adcd">
        DESIGNED · DEPLOYED · OPERATED
      </text>

      {/* connectors hub -> variants */}
      <g opacity="0.4">
        {VARIANTS.map((_, i) => {
          const x = startX + i * (chipW + gap) + chipW / 2;
          return <line key={i} x1="240" y1="104" x2={x} y2={chipY} stroke="#48c1eb" strokeWidth="1.25" />;
        })}
      </g>

      {/* five variant chips */}
      {VARIANTS.map((v, i) => {
        const x = startX + i * (chipW + gap);
        return (
          <g key={v}>
            <rect x={x} y={chipY} width={chipW} height="56" rx="9" fill="url(#aas-chip)" stroke="#48c1eb" strokeWidth="1.25" strokeOpacity="0.7" />
            <circle cx={x + chipW / 2} cy={chipY + 20} r="4" fill="#9be3fb" />
            <text x={x + chipW / 2} y={chipY + 44} textAnchor="middle" fontFamily="var(--font-inter-tight), sans-serif" fontSize="13" fontWeight="600" fill="#cfeefb">
              {v}
            </text>
          </g>
        );
      })}

      {/* visible task log panel (the moat) */}
      <g>
        <rect x="48" y="244" width="384" height="120" rx="12" fill="#081a2d" stroke="#48c1eb" strokeWidth="1.25" strokeOpacity="0.55" />
        <text x="68" y="272" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="11" fontWeight="700" letterSpacing="1.5" fill="#48c1eb">
          VISIBLE TASK LOG
        </text>
        <g fontFamily="var(--font-jetbrains-mono), monospace" fontSize="11.5" fill="#9cc4dd">
          <text x="68" y="298">→ intake parsed · 3 actions planned</text>
          <text x="68" y="318">→ checked policy · routed to owner</text>
          <text x="68" y="338">
            → executed · logged reasoning trace
          </text>
        </g>
        <rect x="68" y="349" width="9" height="3" fill="#9be3fb">
          <animate attributeName="opacity" values="1;0;1" dur="1.1s" repeatCount="indefinite" />
        </rect>
      </g>
    </svg>
  );
}
