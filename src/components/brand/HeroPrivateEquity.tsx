// Hero graphic for /who-we-serve/private-equity. One PE firm, one operating
// model rolled across portfolio companies, compounding (engagement N > N-1).

export function HeroPrivateEquity({ className = "" }: { className?: string }) {
  const ports = [0, 1, 2, 3];
  const cardW = 96, gap = 16;
  const totalW = ports.length * cardW + (ports.length - 1) * gap;
  const startX = (480 - totalW) / 2;
  const cardY = 176;
  return (
    <svg viewBox="0 0 480 400" className={className} role="img" fill="none"
      aria-label="A private equity firm rolling one operating model across portfolio companies, compounding value with each engagement.">
      <defs>
        <linearGradient id="pe-hub" x1="0" y1="36" x2="0" y2="98" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1569ac" stopOpacity="0.55" /><stop offset="1" stopColor="#0c2c47" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="pe-card" x1="0" y1="176" x2="0" y2="256" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1569ac" stopOpacity="0.4" /><stop offset="1" stopColor="#0c2c47" stopOpacity="0.62" />
        </linearGradient>
      </defs>

      {/* PE firm hub */}
      <rect x="160" y="38" width="160" height="60" rx="12" fill="url(#pe-hub)" stroke="#48c1eb" strokeWidth="1.5" />
      <text x="240" y="64" textAnchor="middle" fontFamily="var(--font-inter-tight), sans-serif" fontSize="17" fontWeight="700" fill="#eaf8ff">PE firm</text>
      <text x="240" y="84" textAnchor="middle" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="10" letterSpacing="0.5" fill="#86adcd">ONE OPERATING MODEL</text>

      {/* connectors */}
      <g opacity="0.4">
        {ports.map((_, i) => {
          const x = startX + i * (cardW + gap) + cardW / 2;
          return <line key={i} x1="240" y1="98" x2={x} y2={cardY} stroke="#48c1eb" strokeWidth="1.25" />;
        })}
      </g>

      {/* portfolio companies, growing maturity bar L->R */}
      {ports.map((i) => {
        const x = startX + i * (cardW + gap);
        const fill = 0.4 + i * 0.18;
        return (
          <g key={i}>
            <rect x={x} y={cardY} width={cardW} height="80" rx="10" fill="url(#pe-card)" stroke="#48c1eb" strokeWidth="1.25" strokeOpacity="0.7" />
            <text x={x + cardW / 2} y={cardY + 32} textAnchor="middle" fontFamily="var(--font-inter-tight), sans-serif" fontSize="13" fontWeight="600" fill="#eaf8ff">PortCo</text>
            {/* maturity dots */}
            <g>
              {[0, 1, 2, 3].map((d) => (
                <circle key={d} cx={x + 22 + d * 18} cy={cardY + 56} r="4" fill={d <= i ? "#9be3fb" : "#2a4a66"} />
              ))}
            </g>
            <rect x={x} y={cardY} width={cardW} height="80" rx="10" fill="#48c1eb" fillOpacity={0.04 * i} />
          </g>
        );
      })}

      {/* compounding caption */}
      <text x="240" y="304" textAnchor="middle" fontFamily="var(--font-inter-tight), sans-serif" fontSize="14" fontWeight="600" fill="#cfeefb">Engagement N is faster than N-1</text>
      <text x="240" y="326" textAnchor="middle" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="10.5" letterSpacing="0.5" fill="#86adcd">VALUE-IMPACT COMPOUNDS ACROSS THE PORTFOLIO</text>
    </svg>
  );
}
