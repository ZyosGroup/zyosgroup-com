// Hero graphic option A — "The journey spine."
// The 5-step engagement arc as a dimensional, descending path: Survey ->
// Roadmap -> Process Intelligence -> Orchestration -> Monitoring. A glowing
// node line with a light pulse traveling down toward agents in production.
// Built for the DARK hero. Reinforces "we go the whole way with you."

const STEPS = [
  { n: "01", title: "Opportunity Engine", sub: "survey" },
  { n: "02", title: "Transformation", sub: "roadmap" },
  { n: "03", title: "Process Intelligence", sub: "function by function" },
  { n: "04", title: "Agent orchestration", sub: "across the business" },
  { n: "05", title: "Monitor & administer", sub: "in production" },
];

const X = 96;
const TOP = 56;
const GAP = 72;

export function HeroJourneySpine({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 400"
      className={className}
      role="img"
      aria-label="The Zyos journey: Opportunity Engine survey, transformation roadmap, Process Intelligence, agent orchestration, and monitoring in production."
      fill="none"
    >
      <defs>
        <linearGradient id="spine-line" x1="0" y1={TOP} x2="0" y2={TOP + GAP * 4} gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#48c1eb" />
          <stop offset="1" stopColor="#1569ac" />
        </linearGradient>
        <radialGradient id="spine-node" cx="40%" cy="35%" r="70%">
          <stop offset="0" stopColor="#7ad6f5" />
          <stop offset="1" stopColor="#1569ac" />
        </radialGradient>
        <filter id="spine-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* the spine line */}
      <line x1={X} y1={TOP} x2={X} y2={TOP + GAP * 4} stroke="url(#spine-line)" strokeWidth="2.5" opacity="0.55" />

      {/* traveling pulse down the line */}
      <circle className="spine-flow" cx={X} cy={TOP} r="5" fill="#9be3fb" filter="url(#spine-glow)" />

      {STEPS.map((s, i) => {
        const y = TOP + GAP * i;
        return (
          <g key={s.n} style={{ opacity: 0.96 - i * 0.04 }}>
            {/* node */}
            <circle cx={X} cy={y} r="19" fill="url(#spine-node)" stroke="#9be3fb" strokeWidth="1.25" />
            <text
              x={X} y={y + 4} textAnchor="middle"
              fontFamily="var(--font-jetbrains-mono), monospace"
              fontSize="12" fontWeight="700" fill="#eaf8ff"
            >
              {s.n}
            </text>
            {/* label */}
            <text
              x={X + 34} y={y - 2}
              fontFamily="var(--font-inter-tight), sans-serif"
              fontSize="14" fontWeight="600" fill="#eaf8ff" letterSpacing="0.2"
            >
              {s.title}
            </text>
            <text
              x={X + 34} y={y + 15}
              fontFamily="var(--font-jetbrains-mono), monospace"
              fontSize="10.5" fill="#86adcd" letterSpacing="0.5"
            >
              {s.sub}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
