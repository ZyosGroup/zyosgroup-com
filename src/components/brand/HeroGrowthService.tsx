// Hero graphic for /solutions/growth-as-a-service. The growth channels (website,
// GBP, paid, SEO, content) feed one operated growth engine with a rising trend,
// run as a single service on Zyos OS. Dark-hero compatible, large legible labels.

const CHANNELS = ["Website", "Google Business", "Ads + LSA", "SEO", "Content"];

export function HeroGrowthService({ className = "" }: { className?: string }) {
  const chipX = 30;
  const chipW = 168;
  const chipH = 42;
  const startY = 58;
  const stepY = 52;
  const hubX = 252;
  const hubY = 96;
  const hubW = 198;
  const hubH = 176;

  return (
    <svg
      viewBox="0 0 480 400"
      className={className}
      role="img"
      aria-label="Growth as a Service: website, Google Business Profile, paid, SEO, and content channels feeding one operated growth engine on the Zyos Operating System."
      fill="none"
    >
      <defs>
        <linearGradient id="gaas-chip" x1="0" y1="0" x2="0" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1569ac" stopOpacity="0.42" />
          <stop offset="1" stopColor="#0c2c47" stopOpacity="0.62" />
        </linearGradient>
        <linearGradient id="gaas-hub" x1="0" y1="96" x2="0" y2="272" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1569ac" stopOpacity="0.5" />
          <stop offset="1" stopColor="#0c2c47" stopOpacity="0.68" />
        </linearGradient>
        <linearGradient id="gaas-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9be3fb" />
          <stop offset="1" stopColor="#48c1eb" />
        </linearGradient>
      </defs>

      {/* channels */}
      {CHANNELS.map((c, i) => {
        const y = startY + i * stepY;
        return (
          <g key={c}>
            <rect x={chipX} y={y} width={chipW} height={chipH} rx="9" fill="url(#gaas-chip)" stroke="#48c1eb" strokeWidth="1.25" strokeOpacity="0.7" />
            <circle cx={chipX + 20} cy={y + chipH / 2} r="4" fill="#9be3fb" />
            <text x={chipX + 36} y={y + chipH / 2 + 5} fontFamily="var(--font-inter-tight), sans-serif" fontSize="14" fontWeight="600" fill="#cfeefb">
              {c}
            </text>
            {/* connector to hub */}
            <line x1={chipX + chipW} y1={y + chipH / 2} x2={hubX} y2={hubY + hubH / 2} stroke="#48c1eb" strokeWidth="1.1" opacity="0.34" />
          </g>
        );
      })}

      {/* growth engine hub */}
      <rect x={hubX} y={hubY} width={hubW} height={hubH} rx="12" fill="url(#gaas-hub)" stroke="#48c1eb" strokeWidth="1.5" />
      <text x={hubX + hubW / 2} y={hubY + 30} textAnchor="middle" fontFamily="var(--font-inter-tight), sans-serif" fontSize="16" fontWeight="700" fill="#eaf8ff">
        Growth Engine
      </text>

      {/* rising bars + trend */}
      {(() => {
        const bx = hubX + 24;
        const baseY = hubY + hubH - 30;
        const bw = 22;
        const bgap = 12;
        const heights = [26, 40, 54, 70, 92];
        return (
          <g>
            {heights.map((h, i) => {
              const x = bx + i * (bw + bgap);
              return <rect key={i} x={x} y={baseY - h} width={bw} height={h} rx="3" fill="url(#gaas-bar)" opacity={0.55 + i * 0.09} />;
            })}
            {/* up trend arrow */}
            <path
              d={`M ${bx + 6} ${baseY - 20} L ${bx + 4 * (bw + bgap) + bw - 6} ${baseY - 96}`}
              stroke="#9be3fb"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d={`M ${bx + 4 * (bw + bgap) + bw - 20} ${baseY - 92} L ${bx + 4 * (bw + bgap) + bw - 6} ${baseY - 96} L ${bx + 4 * (bw + bgap) + bw - 12} ${baseY - 80}`}
              fill="none"
              stroke="#9be3fb"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line x1={bx - 6} y1={baseY} x2={hubX + hubW - 18} y2={baseY} stroke="#48c1eb" strokeWidth="1" opacity="0.5" />
          </g>
        );
      })()}

      {/* base: operated as one service */}
      <rect x="30" y="320" width="420" height="54" rx="12" fill="#0a2238" fillOpacity="0.9" stroke="#48c1eb" strokeWidth="1.25" strokeOpacity="0.55" />
      <text x="240" y="345" textAnchor="middle" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="13" fontWeight="700" letterSpacing="1.4" fill="#eaf8ff">
        OPERATED AS ONE SERVICE
      </text>
      <text x="240" y="363" textAnchor="middle" fontFamily="var(--font-inter-tight), sans-serif" fontSize="12" fill="#9cc4dd">
        on Zyos OS · measured to OKRs
      </text>
    </svg>
  );
}
