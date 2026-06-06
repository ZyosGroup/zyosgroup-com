// Hero graphic for /solutions — the two productized, continuously-operated
// services (Agent as a Service + Growth as a Service) running on one platform
// (Zyos OS), under a continuous operating loop. Built for the DARK hero, with
// large legible labels (learning from the platform/agents text-size feedback).

function CycleArrow() {
  // a circular arrow ring suggesting continuous operation
  const cx = 240, cy = 64, r = 30;
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#48c1eb" strokeWidth="2" strokeDasharray="3 4" opacity="0.7" />
      {/* arrowhead riding the ring */}
      <path d={`M ${cx + r - 4} ${cy - 8} L ${cx + r} ${cy} L ${cx + r + 6} ${cy - 7}`} fill="none" stroke="#9be3fb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* three cadence nodes */}
      {[-90, 30, 150].map((deg, i) => {
        const a = (deg * Math.PI) / 180;
        const x = cx + Math.cos(a) * r, y = cy + Math.sin(a) * r;
        return <circle key={i} cx={x} cy={y} r="4" fill={i === 0 ? "#9be3fb" : "#48c1eb"} />;
      })}
      <text x={cx} y={cy + 4} textAnchor="middle" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="11" fontWeight="700" letterSpacing="1" fill="#cfeefb">
        CONTINUOUS
      </text>
    </g>
  );
}

function ServiceCard({ x, abbr, name, sub }: { x: number; abbr: string; name: string; sub: string }) {
  const w = 156, y = 132, h = 116;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="12" fill="url(#sol-card)" stroke="url(#sol-edge)" strokeWidth="1.5" />
      <text x={x + w / 2} y={y + 44} textAnchor="middle" fontFamily="var(--font-inter-tight), sans-serif" fontSize="30" fontWeight="700" fill="#eaf8ff">
        {abbr}
      </text>
      <text x={x + w / 2} y={y + 72} textAnchor="middle" fontFamily="var(--font-inter-tight), sans-serif" fontSize="14" fontWeight="600" fill="#bfe4f7">
        {name}
      </text>
      <text x={x + w / 2} y={y + 94} textAnchor="middle" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="11" fill="#86adcd">
        {sub}
      </text>
    </g>
  );
}

export function HeroSolutions({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 400"
      className={className}
      role="img"
      aria-label="Zyos Solutions: Agent as a Service and Growth as a Service, two productized services operated continuously on the Zyos Operating System."
      fill="none"
    >
      <defs>
        <linearGradient id="sol-card" x1="0" y1="132" x2="0" y2="248" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1569ac" stopOpacity="0.45" />
          <stop offset="1" stopColor="#0c2c47" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="sol-edge" x1="0" y1="0" x2="480" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#48c1eb" />
          <stop offset="1" stopColor="#31c6f6" />
        </linearGradient>
        <linearGradient id="sol-base" x1="0" y1="306" x2="0" y2="368" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1569ac" stopOpacity="0.85" />
          <stop offset="1" stopColor="#0a2238" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* continuous operating loop */}
      <CycleArrow />

      {/* connectors: loop -> each card */}
      <g opacity="0.4">
        <line x1="240" y1="96" x2="148" y2="132" stroke="#48c1eb" strokeWidth="1.25" />
        <line x1="240" y1="96" x2="332" y2="132" stroke="#48c1eb" strokeWidth="1.25" />
      </g>

      {/* the two productized services */}
      <ServiceCard x={70} abbr="AaaS" name="Agent as a Service" sub="agents, operated" />
      <ServiceCard x={254} abbr="GaaS" name="Growth as a Service" sub="marketing, operated" />

      {/* connectors: cards -> platform base */}
      <g opacity="0.4">
        <line x1="148" y1="248" x2="170" y2="306" stroke="#48c1eb" strokeWidth="1.25" />
        <line x1="332" y1="248" x2="310" y2="306" stroke="#48c1eb" strokeWidth="1.25" />
      </g>

      {/* platform base */}
      <rect x="56" y="306" width="368" height="60" rx="12" fill="url(#sol-base)" stroke="#48c1eb" strokeWidth="1.25" strokeOpacity="0.55" />
      <text x="240" y="332" textAnchor="middle" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="15" fontWeight="700" letterSpacing="1.5" fill="#eaf8ff">
        ZYOS OPERATING SYSTEM
      </text>
      <text x="240" y="352" textAnchor="middle" fontFamily="var(--font-inter-tight), sans-serif" fontSize="12.5" fill="#9cc4dd">
        one platform · support baked in · measured to OKRs
      </text>
    </svg>
  );
}
