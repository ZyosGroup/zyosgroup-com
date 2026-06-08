// Hero diagram for /foundation. Built bottom-up: Process Intelligence is the
// base, then the architecture, then agents on top. Foundation first.

export function HeroFoundation({ className = "" }: { className?: string }) {
  const tiers = [
    { t: "Agents", s: "operate + scale the work", y: 64, bright: false },
    { t: "Architecture", s: "security · ownership · maintenance · evolution", y: 150, bright: false },
    { t: "Process Intelligence", s: "map the processes + the value stream", y: 236, bright: true },
  ];
  const x = 96, w = 336, h = 74;
  return (
    <svg viewBox="0 0 480 400" className={className} role="img" fill="none"
      aria-label="The foundation built bottom-up: Process Intelligence at the base, then architecture, then agents on top.">
      <defs>
        <linearGradient id="fnd-base" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#48c1eb" stopOpacity="0.32" /><stop offset="1" stopColor="#1569ac" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="fnd-tier" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1569ac" stopOpacity="0.42" /><stop offset="1" stopColor="#0c2c47" stopOpacity="0.64" />
        </linearGradient>
      </defs>

      {/* build-order arrow (bottom -> top) */}
      <g stroke="#48c1eb" strokeWidth="2.5" fill="none" opacity="0.85">
        <line x1="56" y1="300" x2="56" y2="78" />
        <polyline points="46,104 56,78 66,104" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <text x="56" y="324" textAnchor="middle" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="9.5" fill="#7fb4d8">FIRST</text>

      {tiers.map((t) => (
        <g key={t.t}>
          <rect x={x} y={t.y} width={w} height={h} rx="12" fill={t.bright ? "url(#fnd-base)" : "url(#fnd-tier)"} stroke="#48c1eb" strokeWidth={t.bright ? 1.75 : 1.25} strokeOpacity={t.bright ? 1 : 0.65} />
          <text x={x + w / 2} y={t.y + 32} textAnchor="middle" fontFamily="var(--font-inter-tight), sans-serif" fontSize="17" fontWeight="700" fill="#eaf8ff">{t.t}</text>
          <text x={x + w / 2} y={t.y + 54} textAnchor="middle" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="10.5" fill="#9cc4dd">{t.s}</text>
        </g>
      ))}

      <text x="240" y="352" textAnchor="middle" fontFamily="var(--font-inter-tight), sans-serif" fontSize="13.5" fontWeight="600" fill="#cfeefb">Foundation first. Agents second. Value-impact always.</text>
    </svg>
  );
}
