// Hero diagram for /how-we-deliver. The three-phase operating loop:
// Measure -> Deliver -> Continuously Improve, running continuously.

export function HeroHowWeDeliver({ className = "" }: { className?: string }) {
  const nodes = [
    { t: "Measure", s: "score + scope", x: 175, y: 44 },
    { t: "Deliver", s: "ship monthly", x: 300, y: 210 },
    { t: "Improve", s: "QBR re-prioritize", x: 50, y: 210 },
  ];
  const w = 130, h = 56;
  // centers
  const c = nodes.map((n) => ({ x: n.x + w / 2, y: n.y + h / 2 }));
  return (
    <svg viewBox="0 0 480 400" className={className} role="img" fill="none"
      aria-label="The three-phase operating loop: Measure, Deliver, and Continuously Improve, running continuously.">
      <defs>
        <linearGradient id="hwd-node" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1569ac" stopOpacity="0.55" /><stop offset="1" stopColor="#0c2c47" stopOpacity="0.72" />
        </linearGradient>
        <marker id="hwd-arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#9be3fb" />
        </marker>
      </defs>

      {/* loop arrows between the three phases (clockwise) */}
      <g stroke="#48c1eb" strokeWidth="2" opacity="0.8" markerEnd="url(#hwd-arrow)" fill="none">
        <path d={`M ${c[0].x + 40} ${c[0].y + 18} Q ${c[1].x + 40} ${c[1].y - 70} ${c[1].x + 6} ${c[1].y - 32}`} />
        <path d={`M ${c[1].x - 44} ${c[1].y + 30} Q ${240} ${330} ${c[2].x + 44} ${c[2].y + 30}`} />
        <path d={`M ${c[2].x + 6} ${c[2].y - 32} Q ${c[2].x - 30} ${c[0].y + 10} ${c[0].x - 40} ${c[0].y + 18}`} />
      </g>

      {/* phase nodes */}
      {nodes.map((n, i) => (
        <g key={n.t}>
          <rect x={n.x} y={n.y} width={w} height={h} rx="12" fill="url(#hwd-node)" stroke="#48c1eb" strokeWidth="1.5" />
          <text x={n.x + w / 2} y={n.y + 26} textAnchor="middle" fontFamily="var(--font-inter-tight), sans-serif" fontSize="16" fontWeight="700" fill="#eaf8ff">{n.t}</text>
          <text x={n.x + w / 2} y={n.y + 44} textAnchor="middle" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="10" fill="#86adcd">{n.s}</text>
          <circle cx={n.x + w / 2} cy={n.y - 0} r="0" />
          <text x={n.x + 12} y={n.y + 18} fontFamily="var(--font-jetbrains-mono), monospace" fontSize="10" fill="#9be3fb">{i + 1}</text>
        </g>
      ))}

      {/* caption */}
      <text x="240" y="362" textAnchor="middle" fontFamily="var(--font-inter-tight), sans-serif" fontSize="13.5" fontWeight="600" fill="#cfeefb">Monthly value-impact · quarterly re-prioritization</text>
    </svg>
  );
}
