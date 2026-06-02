// Hero graphic — the Zyos "blend" as an animated operating-model diagram.
// Four capability pillars (Operations, Technology, Data, Software) ringed around
// the Zyos icon, with Agents as the cross-cutting layer. Animated: a slow spinning
// dashed ring + an orbiting "THE BLEND · ONE VENDOR" textPath + a pulsing core.
//
// Distinct utility from zyos.io's hero (which shows the People/Process/Data/Tech
// FOUNDATION). This shows the four delivery capabilities most firms don't have
// under one roof — the single-vendor differentiator. Pure SVG: ~zero weight.

const PILLARS = [
  { label: "OPERATIONS", x: 240, y: 96, lx: 240, ly: 66 },
  { label: "TECHNOLOGY", x: 384, y: 240, lx: 384, ly: 220 },
  { label: "DATA", x: 240, y: 384, lx: 240, ly: 411 },
  { label: "SOFTWARE", x: 96, y: 240, lx: 96, ly: 220 },
];

export function NetworkMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 480"
      className={className}
      role="img"
      aria-label="The Zyos blend: operations, technology, data, and software under one vendor, with agents running across."
      fill="none"
    >
      <defs>
        <radialGradient id="zg-halo" cx="50%" cy="48%" r="55%">
          <stop offset="0%" stopColor="#48c1eb" stopOpacity="0.20" />
          <stop offset="60%" stopColor="#1569ac" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#1569ac" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="zg-edge" x1="0" y1="0" x2="480" y2="480" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1569ac" />
          <stop offset="1" stopColor="#48c1eb" />
        </linearGradient>
        <linearGradient id="zg-orbit" x1="0" y1="0" x2="480" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#31c6f6" />
          <stop offset="1" stopColor="#1569ac" />
        </linearGradient>
        <path id="zg-orbit-path" d="M 240,240 m -200,0 a 200,200 0 1,1 400,0 a 200,200 0 1,1 -400,0" />
        <clipPath id="zg-core-clip"><circle cx="240" cy="240" r="78" /></clipPath>
      </defs>

      {/* halo */}
      <circle cx="240" cy="240" r="220" fill="url(#zg-halo)" />

      {/* outer slow-spinning dashed ring */}
      <g className="hero-ring-spin">
        <circle cx="240" cy="240" r="200" fill="none" stroke="url(#zg-edge)" strokeWidth="1.2" strokeDasharray="3 9" opacity="0.85" />
      </g>

      {/* orbiting brand text */}
      <g className="hero-orbit">
        <text fontFamily="var(--font-jetbrains-mono), monospace" fontSize="12" fontWeight="700" fill="url(#zg-orbit)" letterSpacing="4">
          <textPath href="#zg-orbit-path" startOffset="0">
            THE BLEND · ONE VENDOR · AGENTS ACROSS · THE BLEND · ONE VENDOR · AGENTS ACROSS ·
          </textPath>
        </text>
      </g>

      {/* diamond between pillars */}
      <g stroke="#1569ac" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.28">
        <line x1="240" y1="96" x2="384" y2="240" />
        <line x1="384" y1="240" x2="240" y2="384" />
        <line x1="240" y1="384" x2="96" y2="240" />
        <line x1="96" y1="240" x2="240" y2="96" />
      </g>

      {/* spokes core → pillars */}
      <g stroke="#48c1eb" strokeWidth="1.2" strokeLinecap="round" opacity="0.55">
        {PILLARS.map((p) => (
          <line key={p.label} x1="240" y1="240" x2={p.x} y2={p.y} />
        ))}
      </g>

      {/* pillar nodes + labels */}
      <g fontFamily="var(--font-inter-tight), sans-serif" fontSize="11" fontWeight="700" fill="#1569ac" letterSpacing="0.4">
        {PILLARS.map((p) => (
          <g key={p.label}>
            <circle cx={p.x} cy={p.y} r="11" fill="#fff" stroke="#1569ac" strokeWidth="2" />
            <circle cx={p.x} cy={p.y} r="5" fill="#48c1eb" />
            <text x={p.lx} y={p.ly} textAnchor="middle">{p.label}</text>
          </g>
        ))}
      </g>

      {/* core: white backing + Zyos icon + pulsing cyan ring */}
      <circle cx="240" cy="240" r="78" fill="#ffffff" />
      <image
        href="/brand/icon-color.png"
        x="180" y="178" width="120" height="104"
        preserveAspectRatio="xMidYMid meet"
        clipPath="url(#zg-core-clip)"
      />
      <circle cx="240" cy="240" r="78" fill="none" stroke="#1569ac" strokeWidth="1.5" />
      <circle className="hero-pulse" cx="240" cy="240" r="78" fill="none" stroke="#48c1eb" strokeWidth="1.2" strokeDasharray="2 4" />
    </svg>
  );
}
