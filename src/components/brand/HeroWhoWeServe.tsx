// Hero graphic for /who-we-serve. One operating model feeds three ICPs, each
// with context-tuned architecture. Dark-hero compatible, legible labels.

const ICPS = [
  { t: "High-Growth SMBs", s: "10-200, scaling" },
  { t: "Private Equity", s: "firm + portfolio" },
  { t: "Associations", s: "members, regulated" },
];

export function HeroWhoWeServe({ className = "" }: { className?: string }) {
  const cardW = 142;
  const gap = 16;
  const totalW = ICPS.length * cardW + (ICPS.length - 1) * gap;
  const startX = (480 - totalW) / 2;
  const cardY = 178;

  return (
    <svg viewBox="0 0 480 400" className={className} role="img" fill="none"
      aria-label="One Zyos operating model serving three ICPs: High-Growth SMBs, Private Equity, and Associations.">
      <defs>
        <linearGradient id="wws-hub" x1="0" y1="36" x2="0" y2="104" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1569ac" stopOpacity="0.55" /><stop offset="1" stopColor="#0c2c47" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="wws-card" x1="0" y1="178" x2="0" y2="290" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1569ac" stopOpacity="0.4" /><stop offset="1" stopColor="#0c2c47" stopOpacity="0.62" />
        </linearGradient>
      </defs>

      {/* operating model hub */}
      <rect x="120" y="40" width="240" height="64" rx="12" fill="url(#wws-hub)" stroke="#48c1eb" strokeWidth="1.5" />
      <text x="240" y="68" textAnchor="middle" fontFamily="var(--font-inter-tight), sans-serif" fontSize="18" fontWeight="700" fill="#eaf8ff">One operating model</text>
      <text x="240" y="89" textAnchor="middle" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="10.5" letterSpacing="0.5" fill="#86adcd">MEASURE · DELIVER · IMPROVE</text>

      {/* connectors */}
      <g opacity="0.4">
        {ICPS.map((_, i) => {
          const x = startX + i * (cardW + gap) + cardW / 2;
          return <line key={i} x1="240" y1="104" x2={x} y2={cardY} stroke="#48c1eb" strokeWidth="1.25" />;
        })}
      </g>

      {/* three ICP cards */}
      {ICPS.map((icp, i) => {
        const x = startX + i * (cardW + gap);
        return (
          <g key={icp.t}>
            <rect x={x} y={cardY} width={cardW} height="112" rx="11" fill="url(#wws-card)" stroke="#48c1eb" strokeWidth="1.25" strokeOpacity="0.7" />
            <circle cx={x + cardW / 2} cy={cardY + 30} r="5" fill="#9be3fb" />
            <text x={x + cardW / 2} y={cardY + 68} textAnchor="middle" fontFamily="var(--font-inter-tight), sans-serif" fontSize="14.5" fontWeight="600" fill="#eaf8ff">{icp.t}</text>
            <text x={x + cardW / 2} y={cardY + 90} textAnchor="middle" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="10.5" fill="#86adcd">{icp.s}</text>
          </g>
        );
      })}
    </svg>
  );
}
