// Hero graphic option B — "Agents across the business."
// A readied foundation slab (data, systems, workflows) with agent nodes
// fanning out above it across business functions, connected back down to the
// foundation. Matches "agents are the real show, on a foundation that's in place."

const AGENTS = [
  { x: 90, label: "SALES" },
  { x: 170, label: "OPS" },
  { x: 245, label: "FINANCE" },
  { x: 320, label: "SUPPORT" },
  { x: 395, label: "MKTG" },
];

const FOUND_Y = 300;
const AGENT_Y = 120;
const ANCHOR_X = 242;
const ANCHOR_Y = FOUND_Y;

export function HeroAgentsMesh({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 400"
      className={className}
      role="img"
      aria-label="AI agents orchestrating across business functions on a readied foundation of data, systems, and workflows."
      fill="none"
    >
      <defs>
        <linearGradient id="mesh-slab" x1="0" y1={FOUND_Y} x2="0" y2={FOUND_Y + 70} gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1569ac" stopOpacity="0.85" />
          <stop offset="1" stopColor="#0c2c47" stopOpacity="0.9" />
        </linearGradient>
        <radialGradient id="mesh-agent" cx="40%" cy="35%" r="70%">
          <stop offset="0" stopColor="#7ad6f5" />
          <stop offset="1" stopColor="#1569ac" />
        </radialGradient>
        <filter id="mesh-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="4.5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* connectors: each agent back down to the foundation anchor */}
      <g opacity="0.4">
        {AGENTS.map((a) => (
          <line key={a.label} x1={a.x} y1={AGENT_Y} x2={ANCHOR_X} y2={ANCHOR_Y} stroke="#48c1eb" strokeWidth="1" />
        ))}
      </g>
      {/* lateral mesh between adjacent agents */}
      <g opacity="0.28">
        {AGENTS.slice(0, -1).map((a, i) => (
          <line key={a.label} x1={a.x} y1={AGENT_Y} x2={AGENTS[i + 1].x} y2={AGENT_Y} stroke="#9be3fb" strokeWidth="1" strokeDasharray="2 4" />
        ))}
      </g>

      {/* agent nodes */}
      <g className="hero-pulse">
        {AGENTS.map((a, i) => (
          <g key={a.label} style={{ opacity: 0.95 - Math.abs(i - 2) * 0.06 }}>
            <circle cx={a.x} cy={AGENT_Y} r="15" fill="url(#mesh-agent)" stroke="#9be3fb" strokeWidth="1.25" filter={i === 2 ? "url(#mesh-glow)" : undefined} />
            <text
              x={a.x} y={AGENT_Y - 26} textAnchor="middle"
              fontFamily="var(--font-jetbrains-mono), monospace"
              fontSize="13" fontWeight="700" letterSpacing="0.5" fill="#cfeefb"
            >
              {a.label}
            </text>
          </g>
        ))}
      </g>

      {/* foundation slab */}
      <rect x="40" y={FOUND_Y} width="400" height="64" rx="10" fill="url(#mesh-slab)" stroke="#48c1eb" strokeWidth="1.25" strokeOpacity="0.55" />
      <text
        x="240" y={FOUND_Y + 26} textAnchor="middle"
        fontFamily="var(--font-jetbrains-mono), monospace"
        fontSize="15" fontWeight="700" letterSpacing="1.5" fill="#eaf8ff"
      >
        THE FOUNDATION
      </text>
      <text
        x="240" y={FOUND_Y + 46} textAnchor="middle"
        fontFamily="var(--font-inter-tight), sans-serif"
        fontSize="12.5" fill="#9cc4dd"
      >
        documentation · data · systems · workflows
      </text>
    </svg>
  );
}
