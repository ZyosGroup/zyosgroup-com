// Full implementation per zyosgroup-com-capability-showcases.md §5.
// 4-card grid with short looping clips of automations in motion.
//
// Video assets land in pass 3 — until then, each card renders an inline
// animated SVG mini-reel as the placeholder. The <video> markup is in place
// with preload="none" + poster slot so swapping in MP4s is a content change,
// not a code change. Respects prefers-reduced-motion via globals.css.

import { cn } from "@/lib/cn";

type Reel = {
  title: string;
  steps: string[];
  outcome: string;
  videoSrc?: string; // wired pass 3 — when AI video Track A is produced
  posterSrc?: string;
};

const REELS: Reel[] = [
  {
    title: "Lead-to-Quote",
    steps: [
      "High-intent inbound arrives",
      "Company + buying-committee enriched",
      "Scored against ICP fit",
      "Routed to the right rep",
      "Personalized quote drafted",
      "48h follow-up scheduled if quiet",
    ],
    outcome: "Quote out the door same day, not same week.",
  },
  {
    title: "Onboarding",
    steps: [
      "SOW signed event fires",
      "Engagement record created",
      "Kickoff scheduled",
      "Workspace + docs provisioned",
      "Welcome packet emailed",
      "Added to QBR calendar",
    ],
    outcome: "Day-1 clarity with zero coordination overhead.",
  },
  {
    title: "Anomaly-to-Action",
    steps: [
      "KPI deviates from baseline",
      "Context joined across 3 systems",
      "Hypothesis drafted",
      "Owner notified with proposed action",
      "Approval routes back to agent",
      "Outcome measured + logged",
    ],
    outcome: "Action item in hand before the on-call gets paged.",
  },
  {
    title: "Customer-success save",
    steps: [
      "Dormant-account signal fires",
      "Churn-risk scored against history",
      "Re-engagement email drafted for CSM approval",
      "Response classified + handed off",
      "Save motion logged + measured",
    ],
    outcome: "Save attempts run continuously, not at QBR-time.",
  },
];

function MiniReelSvg({ steps }: { steps: string[] }) {
  // Static, dependency-free preview — strokes that imply motion under
  // a `prefers-reduced-motion: no-preference` media query.
  const accent = "#22D3EE";
  const stroke = "#0F1B3F";
  return (
    <svg
      viewBox="0 0 320 200"
      aria-hidden
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <rect width={320} height={200} fill="#0A0E1F" />
      <g>
        {steps.slice(0, 5).map((_, i) => {
          const cx = 40 + i * 60;
          const cy = 100;
          return (
            <g key={i}>
              {i < 4 ? (
                <line
                  x1={cx + 12}
                  y1={cy}
                  x2={cx + 48}
                  y2={cy}
                  stroke={accent}
                  strokeOpacity={0.6}
                  strokeWidth={1.5}
                  strokeDasharray="3 3"
                />
              ) : null}
              <circle
                cx={cx}
                cy={cy}
                r={11}
                fill={i === 2 ? accent : "#FFFFFF"}
                stroke={i === 2 ? accent : "#23252E"}
              />
              <text
                x={cx}
                y={cy + 3.5}
                textAnchor="middle"
                fontFamily="JetBrains Mono, monospace"
                fontSize={9}
                fill={i === 2 ? stroke : "#0A0E1F"}
              >
                {String(i + 1).padStart(2, "0")}
              </text>
            </g>
          );
        })}
      </g>
      <text
        x={160}
        y={42}
        textAnchor="middle"
        fontFamily="JetBrains Mono, monospace"
        fontSize={10}
        letterSpacing="0.18em"
        fill="#22D3EE"
      >
        AUTOMATION IN MOTION
      </text>
      <text
        x={160}
        y={170}
        textAnchor="middle"
        fontFamily="Inter Tight, sans-serif"
        fontSize={12}
        fill="#FFFFFF"
      >
        Visible task log · Foundational AI Layer
      </text>
    </svg>
  );
}

export function AutomationReel({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-4 md:grid-cols-2", className)}>
      {REELS.map((r, idx) => (
        <article
          key={r.title}
          className="rounded-lg border border-border bg-surface overflow-hidden flex flex-col"
        >
          <div className="aspect-[16/10] bg-ink relative">
            {r.videoSrc ? (
              <video
                preload="none"
                poster={r.posterSrc}
                muted
                loop
                playsInline
                aria-label={`${r.title} automation reel`}
                className="w-full h-full object-cover"
              >
                <source src={r.videoSrc} type="video/mp4" />
              </video>
            ) : (
              <MiniReelSvg steps={r.steps} />
            )}
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <p className="mono text-[11px] uppercase tracking-[0.16em] text-accent">
              Reel · 0{idx + 1}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-primary tracking-tightish">
              {r.title}
            </h3>
            <ol className="mt-3 space-y-1.5 text-sm text-ink/80 flex-1">
              {r.steps.map((s, i) => (
                <li key={i} className="flex gap-2">
                  <span
                    aria-hidden
                    className="mono text-[10px] text-subtle pt-1 shrink-0"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm mono text-accent">{r.outcome}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
