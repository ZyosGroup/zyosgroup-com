// Brand network motif — the hexagon-node mark from the Zyos logo, expanded into
// a hero-scale visual. Pure SVG: zero image weight, no LCP cost, fully on-brand
// (navy #1569ac → cyan #48c1eb gradient on nodes + edges). Decorative only.
//
// Echoes the AI Operating Model deck's network/agents-across motif: a governed
// graph of connected nodes, not scattered points.

export function NetworkMotif({ className = "" }: { className?: string }) {
  // Hexagonal ring of 6 outer nodes + 1 center — the logo's icon, scaled up,
  // with extra interior edges to read as a "connected operating model."
  const cx = 200;
  const cy = 200;
  const r = 150;
  const outer = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 2; // start at top
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  });
  // Edges: hexagon perimeter + spokes to center + a couple of cross-chords
  const edges: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], // perimeter
  ];
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label="Zyos network operating model motif"
      fill="none"
    >
      <defs>
        <linearGradient id="zyos-edge" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1569ac" />
          <stop offset="1" stopColor="#48c1eb" />
        </linearGradient>
        <radialGradient id="zyos-glow" cx="50%" cy="42%" r="60%">
          <stop offset="0" stopColor="#48c1eb" stopOpacity="0.14" />
          <stop offset="1" stopColor="#48c1eb" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* soft brand glow behind the graph */}
      <circle cx={cx} cy={cy} r="190" fill="url(#zyos-glow)" />

      {/* perimeter edges */}
      {edges.map(([a, b], i) => (
        <line
          key={`e${i}`}
          x1={outer[a].x} y1={outer[a].y}
          x2={outer[b].x} y2={outer[b].y}
          stroke="url(#zyos-edge)" strokeWidth="2" strokeOpacity="0.75"
        />
      ))}
      {/* spokes to center */}
      {outer.map((p, i) => (
        <line
          key={`s${i}`}
          x1={p.x} y1={p.y} x2={cx} y2={cy}
          stroke="url(#zyos-edge)" strokeWidth="2" strokeOpacity="0.5"
        />
      ))}
      {/* cross-chords for depth */}
      <line x1={outer[0].x} y1={outer[0].y} x2={outer[3].x} y2={outer[3].y} stroke="url(#zyos-edge)" strokeWidth="1.5" strokeOpacity="0.35" />
      <line x1={outer[1].x} y1={outer[1].y} x2={outer[4].x} y2={outer[4].y} stroke="url(#zyos-edge)" strokeWidth="1.5" strokeOpacity="0.35" />

      {/* outer nodes */}
      {outer.map((p, i) => (
        <circle key={`n${i}`} cx={p.x} cy={p.y} r="11" fill="#48c1eb" />
      ))}
      {/* center node, navy, the anchor */}
      <circle cx={cx} cy={cy} r="14" fill="#1569ac" />
    </svg>
  );
}
