// Hero graphic for /who-we-serve/associations. A member organization at the
// center, members + chapters around it, governed (audit trail, human-in-loop).

export function HeroAssociations({ className = "" }: { className?: string }) {
  const cx = 240, cy = 188, R = 118;
  const members = Array.from({ length: 8 }, (_, i) => {
    const a = (Math.PI * 2 * i) / 8 - Math.PI / 2;
    return { x: cx + Math.cos(a) * R, y: cy + Math.sin(a) * R, big: i % 2 === 0 };
  });
  return (
    <svg viewBox="0 0 480 400" className={className} role="img" fill="none"
      aria-label="An association at the center with members and chapters around it, governed with audit trails and human-in-the-loop.">
      <defs>
        <radialGradient id="assoc-core" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#1569ac" stopOpacity="0.7" /><stop offset="1" stopColor="#0c2c47" stopOpacity="0.85" />
        </radialGradient>
      </defs>

      {/* spokes */}
      <g opacity="0.38">
        {members.map((m, i) => <line key={i} x1={cx} y1={cy} x2={m.x} y2={m.y} stroke="#48c1eb" strokeWidth="1.1" />)}
      </g>
      {/* member nodes */}
      {members.map((m, i) => (
        <circle key={i} cx={m.x} cy={m.y} r={m.big ? 9 : 6} fill={m.big ? "#48c1eb" : "#2a8fd0"} stroke="#9be3fb" strokeWidth={m.big ? 1.5 : 0} />
      ))}
      {/* core */}
      <circle cx={cx} cy={cy} r="52" fill="url(#assoc-core)" stroke="#48c1eb" strokeWidth="1.75" />
      <text x={cx} y={cy - 2} textAnchor="middle" fontFamily="var(--font-inter-tight), sans-serif" fontSize="16" fontWeight="700" fill="#eaf8ff">Association</text>
      <text x={cx} y={cy + 18} textAnchor="middle" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="9.5" letterSpacing="0.5" fill="#9cc4dd">MEMBERS · CHAPTERS</text>

      {/* governance tag */}
      <rect x="138" y="338" width="204" height="34" rx="9" fill="#0a2238" fillOpacity="0.9" stroke="#48c1eb" strokeWidth="1.1" strokeOpacity="0.5" />
      <text x="240" y="360" textAnchor="middle" fontFamily="var(--font-jetbrains-mono), monospace" fontSize="11" letterSpacing="0.5" fill="#cfeefb">AUDIT TRAIL · HUMAN-IN-LOOP</text>
    </svg>
  );
}
