// Hero graphic option C — "Refined OS stack."
// The current isometric stack concept, reworked: each plane gets a thin 3D
// side face for real depth, cleaner gradients, tighter type, and a single
// light sheen drifting up. Same five layers, more premium glass, less flat.

const LAYERS = [
  { label: "APPS", sub: "internal tools", y: 56 },
  { label: "AGENTS", sub: "autonomous workers", y: 118 },
  { label: "SKILLS", sub: "repeatable workflows", y: 180 },
  { label: "PROJECTS", sub: "shared workspaces", y: 242 },
  { label: "GOVERNANCE", sub: "policy · data · review", y: 304 },
];

const CX = 240;
const HALF = 188; // half-width of the diamond
const H = 26; // half-height of the diamond
const DEPTH = 12; // side-face thickness

// top diamond face
function top(y: number) {
  return `M ${CX} ${y} L ${CX + HALF} ${y + H} L ${CX} ${y + 2 * H} L ${CX - HALF} ${y + H} Z`;
}
// front-left + front-right side faces giving the slab thickness
function sides(y: number) {
  const left = `M ${CX - HALF} ${y + H} L ${CX} ${y + 2 * H} L ${CX} ${y + 2 * H + DEPTH} L ${CX - HALF} ${y + H + DEPTH} Z`;
  const right = `M ${CX} ${y + 2 * H} L ${CX + HALF} ${y + H} L ${CX + HALF} ${y + H + DEPTH} L ${CX} ${y + 2 * H + DEPTH} Z`;
  return { left, right };
}

export function HeroRefinedStack({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 400"
      className={className}
      role="img"
      aria-label="The Zyos AI Operating Model stack: governance, projects, skills, agents, and apps, built bottom-up."
      fill="none"
    >
      <defs>
        <linearGradient id="rs-top" x1="0" y1="0" x2="480" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1569ac" stopOpacity="0.5" />
          <stop offset="0.5" stopColor="#5fcdf0" stopOpacity="0.85" />
          <stop offset="1" stopColor="#1569ac" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="rs-edge" x1="0" y1="0" x2="480" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#48c1eb" />
          <stop offset="1" stopColor="#31c6f6" />
        </linearGradient>
        <radialGradient id="rs-core" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#9be3fb" />
          <stop offset="1" stopColor="#1569ac" />
        </radialGradient>
        <filter id="rs-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <g className="layer-float">
        {LAYERS.map((l, i) => {
          const s = sides(l.y);
          return (
            <g key={l.label} style={{ opacity: 0.97 - i * 0.04 }}>
              {/* side faces (darker, behind the top) */}
              <path d={s.left} fill="#0c2c47" fillOpacity="0.85" stroke="url(#rs-edge)" strokeWidth="0.75" strokeOpacity="0.5" />
              <path d={s.right} fill="#0a2238" fillOpacity="0.9" stroke="url(#rs-edge)" strokeWidth="0.75" strokeOpacity="0.5" />
              {/* top face */}
              <path d={top(l.y)} fill="url(#rs-top)" stroke="url(#rs-edge)" strokeWidth="1.5" />
              {/* labels */}
              <text
                x="26" y={l.y + H + 1}
                fontFamily="var(--font-jetbrains-mono), monospace"
                fontSize="16" fontWeight="700" letterSpacing="1.5" fill="#eaf8ff"
              >
                {l.label}
              </text>
              <text
                x="26" y={l.y + H + 19}
                fontFamily="var(--font-inter-tight), sans-serif"
                fontSize="12.5" fill="#9cc4dd"
              >
                {l.sub}
              </text>
            </g>
          );
        })}
        {/* drifting sheen on the top plane */}
        <path className="layer-sheen" d={top(56)} fill="#bdeeff" opacity="0.3" />
      </g>

      {/* Zyos core glowing above the stack */}
      <g filter="url(#rs-glow)">
        <line x1={CX} y1="44" x2={CX} y2="56" stroke="#48c1eb" strokeWidth="1" strokeDasharray="2 4" opacity="0.6" />
        <circle cx={CX} cy="28" r="18" fill="url(#rs-core)" />
        <circle cx={CX} cy="28" r="18" fill="none" stroke="#bdeeff" strokeWidth="1" opacity="0.9" />
      </g>
    </svg>
  );
}
