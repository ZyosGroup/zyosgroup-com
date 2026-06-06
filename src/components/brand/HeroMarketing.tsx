// Hero graphic for /consulting/integrated-marketing — the marketing channels
// feeding one measured engine, with growth as the output. Reinforces "every
// layer measured against business performance." DARK hero, large labels.

const CHANNELS = ["SEO", "GEO", "Content", "Paid"];
const TOP_Y = 96;
const CORE_Y = 220;
const CX = 240;

export function HeroMarketing({ className = "" }: { className?: string }) {
  const xs = CHANNELS.map((_, i) => 84 + i * 104); // 84,188,292,396
  return (
    <svg
      viewBox="0 0 480 400"
      className={className}
      role="img"
      aria-label="Integrated marketing: SEO, GEO, content, and paid feeding one measured engine, with growth as the output, measured to OKRs."
      fill="none"
    >
      <defs>
        <linearGradient id="mkt-chip" x1="0" y1={TOP_Y - 22} x2="0" y2={TOP_Y + 22} gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1569ac" stopOpacity="0.5" />
          <stop offset="1" stopColor="#0c2c47" stopOpacity="0.65" />
        </linearGradient>
        <radialGradient id="mkt-core" cx="42%" cy="38%" r="70%">
          <stop offset="0" stopColor="#7ad6f5" />
          <stop offset="1" stopColor="#1569ac" />
        </radialGradient>
        <filter id="mkt-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* connectors channel -> core */}
      <g opacity="0.4">
        {xs.map((x, i) => (
          <line key={i} x1={x} y1={TOP_Y + 18} x2={CX} y2={CORE_Y - 30} stroke="#48c1eb" strokeWidth="1.25" />
        ))}
      </g>

      {/* channel chips */}
      {CHANNELS.map((c, i) => (
        <g key={c}>
          <rect x={xs[i] - 40} y={TOP_Y - 20} width="80" height="40" rx="9" fill="url(#mkt-chip)" stroke="#48c1eb" strokeWidth="1.25" strokeOpacity="0.7" />
          <text x={xs[i]} y={TOP_Y + 6} textAnchor="middle" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="14" fontWeight="700" fill="#eaf8ff">
            {c}
          </text>
        </g>
      ))}

      {/* measured engine core */}
      <g filter="url(#mkt-glow)">
        <circle cx={CX} cy={CORE_Y} r="46" fill="url(#mkt-core)" />
        <circle cx={CX} cy={CORE_Y} r="46" fill="none" stroke="#bdeeff" strokeWidth="1.25" opacity="0.9" />
      </g>
      <text x={CX} y={CORE_Y - 4} textAnchor="middle" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="14" fontWeight="700" letterSpacing="0.5" fill="#eaf8ff">
        MEASURED
      </text>
      <text x={CX} y={CORE_Y + 16} textAnchor="middle" fontFamily="var(--font-inter-tight), sans-serif" fontSize="12.5" fill="#d7f0fb">
        GA4 + OKRs
      </text>

      {/* output arrow -> growth */}
      <line x1={CX} y1={CORE_Y + 46} x2={CX} y2={296} stroke="#9be3fb" strokeWidth="2.5" strokeLinecap="round" />
      <path d={`M ${CX - 7} 290 L ${CX} 300 L ${CX + 7} 290`} fill="none" stroke="#9be3fb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* growth base */}
      <rect x="120" y="306" width="240" height="56" rx="12" fill="#0c2c47" fillOpacity="0.9" stroke="#48c1eb" strokeWidth="1.25" strokeOpacity="0.55" />
      <text x={CX} y={332} textAnchor="middle" fontFamily="var(--font-inter-tight), sans-serif" fontSize="18" fontWeight="700" letterSpacing="0.5" fill="#eaf8ff">
        GROWTH
      </text>
      <text x={CX} y={350} textAnchor="middle" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="11" fill="#9cc4dd">
        pipeline · not vanity metrics
      </text>
    </svg>
  );
}
