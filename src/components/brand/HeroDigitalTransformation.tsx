// Hero graphic for /consulting/digital-transformation — the arc from legacy,
// siloed operations to an AI-native, connected state, along a rising phased
// path. DARK hero, large labels.

export function HeroDigitalTransformation({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 400"
      className={className}
      role="img"
      aria-label="Digital transformation: the arc from legacy, siloed operations to a connected, AI-native operating model, along a phased path."
      fill="none"
    >
      <defs>
        <radialGradient id="dt-core" cx="42%" cy="38%" r="70%">
          <stop offset="0" stopColor="#9be3fb" />
          <stop offset="1" stopColor="#1569ac" />
        </radialGradient>
        <filter id="dt-glow" x="-70%" y="-70%" width="240%" height="240%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* LEFT: legacy, siloed, dim scattered squares */}
      <g opacity="0.5">
        {[[60, 250], [96, 296], [44, 308], [104, 250], [70, 210]].map(([x, y], i) => (
          <rect key={i} x={x} y={y} width="20" height="20" rx="3" fill="none" stroke="#6f93b3" strokeWidth="2" />
        ))}
      </g>
      <text x="78" y="340" textAnchor="middle" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="13" fontWeight="700" letterSpacing="1" fill="#86adcd">
        LEGACY
      </text>

      {/* rising phased path */}
      <path d="M 110 280 Q 230 270 250 180 T 392 96" stroke="url(#dt-core)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {[[176, 234], [250, 180], [320, 134]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="9" fill="#0c2c47" stroke="#48c1eb" strokeWidth="2" />
          <text x={x} y={y + 4} textAnchor="middle" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="10" fontWeight="700" fill="#cfeefb">
            {i + 1}
          </text>
        </g>
      ))}
      <text x="248" y="300" textAnchor="middle" fontFamily="var(--font-inter-tight), sans-serif" fontSize="12.5" fill="#9cc4dd">
        crawl · walk · run
      </text>

      {/* RIGHT: AI-native connected core */}
      <g filter="url(#dt-glow)">
        <circle cx="392" cy="96" r="34" fill="url(#dt-core)" />
        <circle cx="392" cy="96" r="34" fill="none" stroke="#bdeeff" strokeWidth="1.25" opacity="0.9" />
        {/* small connected satellites */}
        {[-40, 80, 200].map((deg, i) => {
          const a = (deg * Math.PI) / 180;
          const x = 392 + Math.cos(a) * 34, y = 96 + Math.sin(a) * 34;
          const ox = 392 + Math.cos(a) * 52, oy = 96 + Math.sin(a) * 52;
          return <g key={i}><line x1={x} y1={y} x2={ox} y2={oy} stroke="#48c1eb" strokeWidth="1.5" /><circle cx={ox} cy={oy} r="4" fill="#9be3fb" /></g>;
        })}
      </g>
      <text x="392" y="160" textAnchor="middle" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="13" fontWeight="700" letterSpacing="1" fill="#eaf8ff">
        AI-NATIVE
      </text>
    </svg>
  );
}
