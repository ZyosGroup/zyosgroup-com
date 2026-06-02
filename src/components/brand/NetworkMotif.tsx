// Hero graphic — the AI Operating Model as a dimensional, floating layer stack.
// Five isometric glass planes (Governance -> Projects -> Skills -> Agents -> Apps),
// each labeled, lit from within, drifting gently, with a sheen that pulses up
// the stack. Built for a DARK hero (deep navy) so it reads premium + 3D, not
// the flat node-wheel of the product site (zyos.io). Pure SVG, ~zero weight.

const LAYERS = [
  { label: "APPS", sub: "internal tools", y: 40 },
  { label: "AGENTS", sub: "autonomous workers", y: 104 },
  { label: "SKILLS", sub: "repeatable workflows", y: 168 },
  { label: "PROJECTS", sub: "shared workspaces", y: 232 },
  { label: "GOVERNANCE", sub: "policy · data · review", y: 296 },
];

// isometric parallelogram (diamond) path for a layer at vertical offset y
function plane(y: number) {
  const w = 300;
  const cx = 240;
  const skew = 70;
  const h = 30;
  return `M ${cx} ${y} L ${cx + w / 2 + skew} ${y + h} L ${cx} ${y + 2 * h} L ${cx - w / 2 - skew} ${y + h} Z`;
}

export function NetworkMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 400"
      className={className}
      role="img"
      aria-label="The Zyos AI Operating Model stack: governance, projects, skills, agents, and apps, built bottom-up."
      fill="none"
    >
      <defs>
        <linearGradient id="os-plane" x1="0" y1="0" x2="480" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1569ac" stopOpacity="0.55" />
          <stop offset="0.5" stopColor="#48c1eb" stopOpacity="0.78" />
          <stop offset="1" stopColor="#1569ac" stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id="os-edge" x1="0" y1="0" x2="480" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#48c1eb" />
          <stop offset="1" stopColor="#31c6f6" />
        </linearGradient>
        <radialGradient id="os-core" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#7ad6f5" />
          <stop offset="1" stopColor="#1569ac" />
        </radialGradient>
        <filter id="os-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <g className="layer-float">
        {LAYERS.map((l, i) => (
          <g key={l.label} style={{ opacity: 0.94 - i * 0.05 }}>
            {i < LAYERS.length - 1 && (
              <line x1="240" y1={l.y + 30} x2="240" y2={l.y + 64} stroke="#48c1eb" strokeWidth="1" strokeDasharray="2 4" opacity="0.4" />
            )}
            <path d={plane(l.y)} fill="url(#os-plane)" stroke="url(#os-edge)" strokeWidth="1.5" />
            <text
              x="34" y={l.y + 24}
              fontFamily="var(--font-jetbrains-mono), monospace"
              fontSize="11" fontWeight="700" letterSpacing="2"
              fill="#cfeefb"
            >
              {l.label}
            </text>
            <text
              x="34" y={l.y + 38}
              fontFamily="var(--font-inter-tight), sans-serif"
              fontSize="9" fill="#86adcd"
            >
              {l.sub}
            </text>
          </g>
        ))}

        {/* traveling sheen on the top plane */}
        <path className="layer-sheen" d={plane(40)} fill="#9be3fb" opacity="0.3" />
      </g>

      {/* Zyos core mark glowing above the stack */}
      <g filter="url(#os-glow)">
        <line x1="240" y1="56" x2="240" y2="40" stroke="#48c1eb" strokeWidth="1" strokeDasharray="2 4" opacity="0.5" />
        <circle cx="240" cy="30" r="19" fill="url(#os-core)" />
        <circle cx="240" cy="30" r="19" fill="none" stroke="#9be3fb" strokeWidth="1" opacity="0.85" />
      </g>
    </svg>
  );
}
