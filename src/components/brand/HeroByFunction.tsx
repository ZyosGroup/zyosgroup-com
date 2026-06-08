// Shared hero graphic for the /by-function/* pages. One function, operated by a
// stack of named agent workflows. Driven by each page's data so all six pages
// get a consistent branded graphic from one component.

function shorten(name: string): string {
  return name.replace(/\s*Agent$/i, "").trim();
}

export function HeroByFunction({
  func,
  agents,
  className = "",
}: {
  func: string;
  agents: string[];
  className?: string;
}) {
  const chips = agents.slice(0, 5).map(shorten);
  const chipX = 56, chipW = 368, chipH = 42, startY = 128, step = 50;

  return (
    <svg viewBox="0 0 480 400" className={className} role="img" fill="none"
      aria-label={`${func} operated by a stack of named agent workflows.`}>
      <defs>
        <linearGradient id="bf-hub" x1="0" y1="30" x2="0" y2="92" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1569ac" stopOpacity="0.55" /><stop offset="1" stopColor="#0c2c47" stopOpacity="0.72" />
        </linearGradient>
        <linearGradient id="bf-chip" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1569ac" stopOpacity="0.4" /><stop offset="1" stopColor="#0c2c47" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* function hub */}
      <rect x="110" y="30" width="260" height="62" rx="12" fill="url(#bf-hub)" stroke="#48c1eb" strokeWidth="1.5" />
      <text x="240" y="58" textAnchor="middle" fontFamily="var(--font-inter-tight), sans-serif" fontSize="20" fontWeight="700" fill="#eaf8ff">{func}</text>
      <text x="240" y="79" textAnchor="middle" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="10.5" letterSpacing="1" fill="#86adcd">OPERATED BY AGENTS</text>

      {/* connector */}
      <line x1="240" y1="92" x2="240" y2={startY - 6} stroke="#48c1eb" strokeWidth="1.25" opacity="0.4" />

      {/* agent workflow chips */}
      {chips.map((c, i) => {
        const y = startY + i * step;
        return (
          <g key={c + i}>
            <rect x={chipX} y={y} width={chipW} height={chipH} rx="9" fill="url(#bf-chip)" stroke="#48c1eb" strokeWidth="1.25" strokeOpacity="0.7" />
            <circle cx={chipX + 22} cy={y + chipH / 2} r="4.5" fill="#9be3fb" />
            <text x={chipX + 40} y={y + chipH / 2 + 5} fontFamily="var(--font-inter-tight), sans-serif" fontSize="14" fontWeight="600" fill="#dceaf5">{c}</text>
            <text x={chipX + chipW - 16} y={y + chipH / 2 + 4} textAnchor="end" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="10" fill="#5f8bab">agent</text>
          </g>
        );
      })}
    </svg>
  );
}
