// Hero graphic for /who-we-serve/high-growth-smbs. Crawl-walk-run maturity with
// a rising curve: scale where the next hire and customer cost less than the last.

export function HeroHighGrowthSmbs({ className = "" }: { className?: string }) {
  const steps = [
    { label: "Crawl", x: 60, h: 70 },
    { label: "Walk", x: 196, h: 120 },
    { label: "Run", x: 332, h: 176 },
  ];
  const baseY = 320;
  const stepW = 110;
  return (
    <svg viewBox="0 0 480 400" className={className} role="img" fill="none"
      aria-label="A high-growth SMB scaling crawl-walk-run, with a rising curve: the next hire and customer cost less than the last.">
      <defs>
        <linearGradient id="hg-step" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1569ac" stopOpacity="0.55" /><stop offset="1" stopColor="#0c2c47" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="hg-curve" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#48c1eb" stopOpacity="0.32" /><stop offset="1" stopColor="#48c1eb" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {/* rising area under the curve */}
      <polygon points="60,250 196,196 432,108 432,320 60,320" fill="url(#hg-curve)" />

      {/* step blocks */}
      {steps.map((s) => (
        <g key={s.label}>
          <rect x={s.x} y={baseY - s.h} width={stepW} height={s.h} rx="10" fill="url(#hg-step)" stroke="#48c1eb" strokeWidth="1.4" />
          <text x={s.x + stepW / 2} y={baseY - s.h + 28} textAnchor="middle" fontFamily="var(--font-inter-tight), sans-serif" fontSize="15" fontWeight="700" fill="#eaf8ff">{s.label}</text>
        </g>
      ))}

      {/* rising node curve */}
      <polyline points="115,250 251,196 387,108" fill="none" stroke="#9be3fb" strokeWidth="2.5" strokeLinecap="round" />
      {[[115, 250], [251, 196], [387, 108]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="6" fill="#9be3fb" />
      ))}
      {/* arrowhead */}
      <path d="M 374 110 L 387 108 L 381 121" fill="none" stroke="#9be3fb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* baseline + caption */}
      <line x1="48" y1="320" x2="444" y2="320" stroke="#48c1eb" strokeWidth="1" opacity="0.5" />
      <text x="240" y="350" textAnchor="middle" fontFamily="var(--font-inter-tight), sans-serif" fontSize="14" fontWeight="600" fill="#cfeefb">The next hire and customer cost less than the last</text>
      <text x="240" y="372" textAnchor="middle" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="10.5" letterSpacing="0.5" fill="#86adcd">ENTERPRISE STRUCTURE · RIGHT-SIZED FOR SMB</text>
    </svg>
  );
}
