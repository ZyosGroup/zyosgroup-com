// Full implementation per zyosgroup-com-capability-showcases.md §4.
// Static dashboard gallery. Real screenshots replace the placeholder previews
// when ZyosApp captures are taken (seeded with demo data, not real customers).
// Each card renders an SSR-friendly SVG preview so the layout reads correctly
// without shipping bitmap assets until they exist.

import { cn } from "@/lib/cn";

export type DashboardEntry = {
  slug:
    | "seo-baseline"
    | "engagement-kanban"
    | "reviews-velocity"
    | "okr-tracker"
    | "gaas-pipeline"
    | "cs-cadence-heatmap"
    | "qbr-output"
    | "agent-throughput";
  title: string;
  description: string;
  status: "Live in Zyos OS" | "Concept · Q3 2026";
  // Visual hint for the placeholder preview.
  shape: "bars" | "line" | "heatmap" | "radar" | "table" | "tiles";
};

export const DASHBOARDS: DashboardEntry[] = [
  {
    slug: "seo-baseline",
    title: "SEO Baseline + Quarterly Trend",
    description:
      "Rank tracking, organic + GEO impressions, citation consistency. The instrumentation that runs underneath every Integrated Marketing engagement.",
    status: "Live in Zyos OS",
    shape: "line",
  },
  {
    slug: "engagement-kanban",
    title: "Engagement Kanban + Burndown",
    description:
      "Customer-visible delivery board. Every two-week cycle ships against a measurable outcome target.",
    status: "Live in Zyos OS",
    shape: "tiles",
  },
  {
    slug: "reviews-velocity",
    title: "Reviews Velocity",
    description:
      "Reviews monitored across platforms, response drafting queued, velocity tracked against the quarter target.",
    status: "Live in Zyos OS",
    shape: "bars",
  },
  {
    slug: "okr-tracker",
    title: "OKR Progress Tracker",
    description:
      "Value-impact OKRs named at engagement kickoff and measured continuously. Score curve refreshes at every QBR.",
    status: "Live in Zyos OS",
    shape: "radar",
  },
  {
    slug: "gaas-pipeline",
    title: "GaaS Pipeline Health",
    description:
      "Combined SEO + GBP + reviews + ads view. The one screen GaaS customers and Zyos open every morning.",
    status: "Live in Zyos OS",
    shape: "bars",
  },
  {
    slug: "cs-cadence-heatmap",
    title: "Customer Success Cadence Heatmap",
    description:
      "Check-in cadence + monthly report rhythm + QBR scheduling visualized across the portfolio.",
    status: "Live in Zyos OS",
    shape: "heatmap",
  },
  {
    slug: "qbr-output",
    title: "QBR Report Output",
    description:
      "The recurring quarterly artifact. Value-impact recap + variance vs target + re-prioritization decisions.",
    status: "Live in Zyos OS",
    shape: "table",
  },
  {
    slug: "agent-throughput",
    title: "Agent Task Throughput + Reliability",
    description:
      "Per-agent volume, reliability, and human-review rates surfaced from the Foundational AI Layer task log.",
    status: "Concept · Q3 2026",
    shape: "line",
  },
];

function Preview({ shape }: { shape: DashboardEntry["shape"] }) {
  const stroke = "#0F1B3F";
  const accent = "#22D3EE";
  const muted = "#E2E8F0";

  return (
    <svg
      viewBox="0 0 320 200"
      aria-hidden
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <rect x={0} y={0} width={320} height={200} fill="#FAFAF9" />
      {/* Header strip */}
      <rect x={0} y={0} width={320} height={28} fill="#FFFFFF" />
      <rect x={12} y={11} width={56} height={6} rx={2} fill={muted} />
      <circle cx={306} cy={14} r={3} fill={accent} />

      {shape === "line" && (
        <>
          <polyline
            points="20,160 60,140 100,150 140,110 180,90 220,95 260,70 300,55"
            fill="none"
            stroke={stroke}
            strokeWidth={1.6}
          />
          <polyline
            points="20,170 60,165 100,150 140,140 180,130 220,120 260,108 300,100"
            fill="none"
            stroke={accent}
            strokeWidth={1.4}
            strokeDasharray="3 3"
          />
        </>
      )}
      {shape === "bars" &&
        [40, 90, 65, 120, 85, 140, 95, 150].map((h, i) => (
          <rect
            key={i}
            x={24 + i * 34}
            y={180 - h}
            width={22}
            height={h}
            fill={i % 2 ? accent : stroke}
            opacity={i % 2 ? 0.8 : 1}
          />
        ))}
      {shape === "tiles" &&
        Array.from({ length: 12 }).map((_, i) => (
          <rect
            key={i}
            x={20 + (i % 4) * 72}
            y={50 + Math.floor(i / 4) * 44}
            width={64}
            height={32}
            rx={3}
            fill={i % 5 === 0 ? accent : "#FFFFFF"}
            stroke={muted}
          />
        ))}
      {shape === "heatmap" &&
        Array.from({ length: 56 }).map((_, i) => {
          const x = 18 + (i % 14) * 21;
          const y = 50 + Math.floor(i / 14) * 30;
          const v = (i * 37) % 100;
          return (
            <rect
              key={i}
              x={x}
              y={y}
              width={18}
              height={26}
              rx={2}
              fill={accent}
              opacity={Math.min(0.18 + (v / 100) * 0.7, 0.9)}
            />
          );
        })}
      {shape === "radar" && (
        <g transform="translate(160 110)">
          {[60, 45, 30, 15].map((r) => (
            <polygon
              key={r}
              points={[
                [0, -r],
                [r, -r * 0.3],
                [r * 0.6, r],
                [-r * 0.6, r],
                [-r, -r * 0.3],
              ]
                .map((p) => p.join(","))
                .join(" ")}
              fill="none"
              stroke={muted}
              strokeWidth={1}
            />
          ))}
          <polygon
            points="0,-50 40,-18 30,40 -32,38 -42,-16"
            fill={accent}
            opacity={0.25}
            stroke={accent}
            strokeWidth={1.5}
          />
        </g>
      )}
      {shape === "table" &&
        Array.from({ length: 6 }).map((_, i) => (
          <g key={i} transform={`translate(0 ${48 + i * 22})`}>
            <rect x={20} y={0} width={280} height={16} fill="#FFFFFF" stroke={muted} />
            <rect x={28} y={5} width={70 + (i % 3) * 30} height={6} rx={2} fill={stroke} />
            <rect x={220} y={5} width={30} height={6} rx={2} fill={i % 2 ? accent : muted} />
          </g>
        ))}
    </svg>
  );
}

export function DashboardCard({
  entry,
  className,
}: {
  entry: DashboardEntry;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "rounded-lg border border-border bg-surface overflow-hidden flex flex-col",
        className
      )}
    >
      <div
        className="aspect-[16/10] bg-bg border-b border-border"
        aria-label={`${entry.title} — anonymized dashboard preview`}
      >
        <Preview shape={entry.shape} />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <p className="mono text-[11px] uppercase tracking-[0.16em] text-accent">
          {entry.status}
        </p>
        <h3 className="mt-1 text-lg font-semibold text-primary tracking-tightish">
          {entry.title}
        </h3>
        <p className="mt-2 text-sm text-ink/75 leading-relaxed flex-1">
          {entry.description}
        </p>
      </div>
    </article>
  );
}

export function DashboardGallery({
  slugs,
  className,
}: {
  // Optional subset; defaults to all 8.
  slugs?: DashboardEntry["slug"][];
  className?: string;
}) {
  const list = slugs
    ? DASHBOARDS.filter((d) => slugs.includes(d.slug))
    : DASHBOARDS;
  return (
    <div className={cn("grid gap-4 md:grid-cols-2 lg:grid-cols-3", className)}>
      {list.map((d) => (
        <DashboardCard key={d.slug} entry={d} />
      ))}
    </div>
  );
}
