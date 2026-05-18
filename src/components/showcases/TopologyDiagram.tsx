// TODO Pass 2: full implementation per zyosgroup-com-capability-showcases.md §1
// Reactflow-based interactive system topology with industry filter,
// hover sidebars, animated pulse edges. Reused across /consulting/software-and-data,
// /consulting/digital-transformation, /case-studies, /foundation.
//
// Stub: a static SVG-flavor placeholder showing the node-and-edge shape so the
// layout slot is real even before Reactflow lands.

import { cn } from "@/lib/cn";

const NODES = [
  "CRM",
  "ERP",
  "Data warehouse",
  "Marketing",
  "Payments",
  "Support",
  "Custom app",
];

export function TopologyDiagram({
  className,
  caption = "System topology — typical mid-market B2B fabric Zyos integrates.",
}: {
  className?: string;
  caption?: string;
}) {
  return (
    <figure
      className={cn(
        "rounded-lg border border-border bg-surface p-6 md:p-8",
        className
      )}
    >
      <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
        System connections · stub preview
      </p>

      {/* Static node grid — Reactflow comes in pass 2 */}
      <div className="mt-5 relative">
        <svg
          aria-hidden
          viewBox="0 0 600 220"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Connecting lines */}
          <g stroke="#22D3EE" strokeWidth="1" opacity="0.55">
            <line x1="80" y1="60" x2="300" y2="110" />
            <line x1="200" y1="60" x2="300" y2="110" />
            <line x1="320" y1="60" x2="300" y2="110" />
            <line x1="440" y1="60" x2="300" y2="110" />
            <line x1="560" y1="60" x2="300" y2="110" />
            <line x1="120" y1="170" x2="300" y2="110" />
            <line x1="480" y1="170" x2="300" y2="110" />
          </g>

          {/* Central Zyos integration hub */}
          <g>
            <circle cx="300" cy="110" r="34" fill="#0F1B3F" />
            <text
              x="300"
              y="115"
              textAnchor="middle"
              fontFamily="Inter Tight, sans-serif"
              fontSize="11"
              fill="#FAFAF9"
            >
              Zyos OS
            </text>
          </g>

          {/* Surrounding nodes */}
          <g
            fontFamily="Inter Tight, sans-serif"
            fontSize="10"
            fill="#0A0E1F"
          >
            {[
              { x: 80, y: 60 },
              { x: 200, y: 60 },
              { x: 320, y: 60 },
              { x: 440, y: 60 },
              { x: 560, y: 60 },
              { x: 120, y: 170 },
              { x: 480, y: 170 },
            ].map((n, idx) => (
              <g key={idx}>
                <rect
                  x={n.x - 38}
                  y={n.y - 14}
                  width="76"
                  height="28"
                  rx="4"
                  fill="#FFFFFF"
                  stroke="#E2E8F0"
                />
                <text x={n.x} y={n.y + 4} textAnchor="middle">
                  {NODES[idx]}
                </text>
              </g>
            ))}
          </g>
        </svg>
      </div>

      <figcaption className="mt-5 text-sm text-subtle">{caption}</figcaption>
    </figure>
  );
}
