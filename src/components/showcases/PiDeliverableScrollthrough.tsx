"use client";

// Full implementation per zyosgroup-com-capability-showcases.md §6.
// Six-section scrollthrough of an anonymized Process Intelligence Implementation
// deliverable. Used on /foundation.
//
// - Process map (annotated SVG topology)
// - Value stream overlay (process map with revenue/cost/decision callouts)
// - Instrumentation gaps (table)
// - Value-impact estimates (bar chart, Recharts)
// - Readiness & Maturity scorecard (radar, Recharts)
// - Prioritized backlog + agent-suitable matrix (table)
//
// Animations: section-by-section reveal as the user scrolls.
// Respects prefers-reduced-motion via Framer Motion + global CSS rule.

import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

const DELIVERABLES = [
  {
    id: "process-map",
    label: "Deliverable 01, Process map",
    headline:
      "End-to-end process, every decision point, handoff, exception, and human role visible.",
    body:
      "Not a Visio diagram. A real-state walk-through of how work happens today, the bottlenecks, the silent handoffs, the steps nobody documented because everyone already 'knew.'",
  },
  {
    id: "value-stream",
    label: "Deliverable 02, Value stream map",
    headline:
      "Where value is created vs consumed. Revenue-touching steps, cost-burning steps, decision-bottleneck steps.",
    body:
      "The lens that reveals what to prioritize. Most processes have one or two steps generating 70% of the value-impact, and they're rarely the ones leadership thinks.",
  },
  {
    id: "instrumentation",
    label: "Deliverable 03, Instrumentation plan",
    headline:
      "Which steps need data capture; what tools provide it; what BI signal each step produces.",
    body:
      "Steps without instrumentation can't be measured, can't be improved, and can't be safely automated. PI exits with a plan to close every measurement gap.",
  },
  {
    id: "value-impact",
    label: "Deliverable 04, Value-impact estimates",
    headline:
      "Quantified estimates per detected gap, revenue, cost, risk, time effect of intervention.",
    body:
      "The chart that gets a CFO to sign the next-cycle SOW. Every gap is named, sized, and ranked against effort + readiness fit.",
  },
  {
    id: "readiness",
    label: "Deliverable 05, Readiness & Maturity scorecard",
    headline:
      "Five dimensions scored 1–5, Process Maturity, Tech + Integration, Data Quality, Automation + AI Readiness, People + Knowledge Risk.",
    body:
      "Low-data-discipline customers need instrumentation before agents. Low-process-discipline customers need process mapping before automation. The scorecard tells us which.",
  },
  {
    id: "backlog",
    label: "Deliverable 06, Prioritized backlog + agent-suitability",
    headline:
      "Ranked intervention list with operate / scale / stay-human recommendation per item.",
    body:
      "Three recommendations: operate (replace human throughput with agents), scale (multiply human throughput while keeping human judgment), stay-human (judgment dominates; agent overhead would cost more than it saves).",
  },
];

const VALUE_IMPACT_DATA = [
  { gap: "Pipeline hygiene", impact: 340 },
  { gap: "Tier-1 ticket triage", impact: 215 },
  { gap: "Month-end close", impact: 180 },
  { gap: "Reviews velocity", impact: 130 },
  { gap: "Onboarding orchestration", impact: 95 },
  { gap: "Forecast variance", impact: 72 },
];

const READINESS_DATA = [
  { dimension: "Process Maturity", score: 3.4, target: 4.5 },
  { dimension: "Tech + Integration", score: 2.8, target: 4.0 },
  { dimension: "Data Quality", score: 2.2, target: 4.0 },
  { dimension: "Automation Readiness", score: 1.9, target: 3.5 },
  { dimension: "People + Knowledge", score: 3.1, target: 4.0 },
];

const INSTRUMENTATION_GAPS = [
  { step: "Lead-stage transitions", missing: "Activity timestamps", impact: "~$120K / yr leakage" },
  { step: "Ticket categorization", missing: "Resolution tag at close", impact: "Inhibits Tier-1 routing" },
  { step: "Forecast actuals", missing: "Department-level breakdown", impact: "Variance unattributable" },
  { step: "Reviews response latency", missing: "Time-to-first-reply log", impact: "GBP velocity capped" },
];

const BACKLOG = [
  { item: "Outbound + ABM Agent", value: "$340K ARR", effort: "M", readiness: "Engagement recommended", rec: "Operate" },
  { item: "Tier-1 Support Triage Agent", value: "$215K opex", effort: "M", readiness: "Engagement recommended", rec: "Scale" },
  { item: "Month-end close reconciliation", value: "$180K opex", effort: "L", readiness: "Conditions to address", rec: "Scale" },
  { item: "Reviews velocity engine", value: "$130K LTV", effort: "S", readiness: "Engagement recommended", rec: "Operate" },
  { item: "Compensation modeling", value: "Risk · undefined", effort: "L", readiness: "Not yet, revisit", rec: "Stay human" },
];

function SectionFrame({
  index,
  d,
  children,
}: {
  index: number;
  d: (typeof DELIVERABLES)[number];
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={d.id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
      className="rounded-lg border border-border bg-surface p-6 md:p-8"
    >
      <p className="mono text-[11px] uppercase tracking-[0.16em] text-accent">
        {d.label}
      </p>
      <h3 className="mt-2 text-xl md:text-2xl font-semibold text-primary tracking-tightish">
        {d.headline}
      </h3>
      <p className="mt-3 max-w-prose text-[15px] text-ink/80 leading-relaxed">
        {d.body}
      </p>
      <div className="mt-6">{children}</div>
      <p className="mt-6 text-xs text-subtle">
        Anonymized · pattern + magnitude shown. Real customer data never appears here.
      </p>
      {index < DELIVERABLES.length - 1 ? (
        <div className="mt-6 flex items-center gap-3 text-xs text-subtle">
          <span aria-hidden className="h-px flex-1 bg-border" />
          <span className="mono uppercase tracking-[0.16em]">scroll</span>
          <span aria-hidden className="h-px flex-1 bg-border" />
        </div>
      ) : null}
    </motion.section>
  );
}

function ProcessMap({ withValueStream = false }: { withValueStream?: boolean }) {
  const steps = [
    { x: 30, y: 60, label: "Inbound" },
    { x: 160, y: 60, label: "Qualify" },
    { x: 290, y: 60, label: "Route" },
    { x: 420, y: 60, label: "Resolve" },
    { x: 550, y: 60, label: "Close" },
  ];
  const annotations = withValueStream
    ? [
        { x: 30, y: 105, text: "Lead-source quality unmeasured", color: "#22D3EE" },
        { x: 160, y: 105, text: "Manual scoring, bottleneck", color: "#F59E0B" },
        { x: 420, y: 105, text: "67% of value-impact lives here", color: "#10B981" },
      ]
    : [
        { x: 30, y: 105, text: "Inbound queue", color: "#94A3B8" },
        { x: 160, y: 105, text: "SDR triage", color: "#94A3B8" },
        { x: 290, y: 105, text: "Owner assignment", color: "#94A3B8" },
        { x: 420, y: 105, text: "AE working", color: "#94A3B8" },
        { x: 550, y: 105, text: "CRM update", color: "#94A3B8" },
      ];

  return (
    <svg viewBox="0 0 640 160" className="w-full h-auto" role="img" aria-label="Process map preview">
      <g stroke="#0F1B3F" strokeWidth="1.2" fill="none">
        {steps.slice(0, -1).map((s, i) => (
          <line key={i} x1={s.x + 80} y1={s.y + 20} x2={steps[i + 1].x} y2={steps[i + 1].y + 20} />
        ))}
      </g>
      {steps.map((s) => (
        <g key={s.label} transform={`translate(${s.x} ${s.y})`}>
          <rect width={80} height={40} rx={6} fill="#FFFFFF" stroke="#E2E8F0" />
          <text x={40} y={25} textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize={12} fill="#0A0E1F">
            {s.label}
          </text>
        </g>
      ))}
      {annotations.map((a, i) => (
        <g key={i} transform={`translate(${a.x} ${a.y})`}>
          <rect width={120} height={26} rx={4} fill="#FAFAF9" stroke={a.color} />
          <text x={60} y={17} textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize={10} fill="#0A0E1F">
            {a.text}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function PiDeliverableScrollthrough() {
  return (
    <div className="space-y-6">
      <SectionFrame index={0} d={DELIVERABLES[0]}>
        <div className="rounded-md border border-border bg-bg p-4">
          <ProcessMap />
        </div>
      </SectionFrame>

      <SectionFrame index={1} d={DELIVERABLES[1]}>
        <div className="rounded-md border border-border bg-bg p-4">
          <ProcessMap withValueStream />
        </div>
      </SectionFrame>

      <SectionFrame index={2} d={DELIVERABLES[2]}>
        <div className="overflow-hidden rounded-md border border-border">
          <table className="w-full text-sm">
            <thead className="bg-bg">
              <tr>
                <th className="text-left px-4 py-2.5 font-medium text-primary">Step</th>
                <th className="text-left px-4 py-2.5 font-medium text-primary">Missing capture</th>
                <th className="text-left px-4 py-2.5 font-medium text-primary">Impact</th>
              </tr>
            </thead>
            <tbody>
              {INSTRUMENTATION_GAPS.map((row) => (
                <tr key={row.step} className="border-t border-border">
                  <td className="px-4 py-3 text-ink/85">{row.step}</td>
                  <td className="px-4 py-3 text-ink/75">{row.missing}</td>
                  <td className="px-4 py-3 mono text-ink/85">{row.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionFrame>

      <SectionFrame index={3} d={DELIVERABLES[3]}>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={VALUE_IMPACT_DATA}
              layout="vertical"
              margin={{ top: 8, right: 24, bottom: 8, left: 16 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis
                type="number"
                tick={{ fontSize: 11, fill: "#64748B" }}
                tickFormatter={(v) => `$${v}K`}
              />
              <YAxis
                type="category"
                dataKey="gap"
                tick={{ fontSize: 11, fill: "#0A0E1F" }}
                width={140}
              />
              <Tooltip
                cursor={{ fill: "#F1F5F9" }}
                formatter={(v) =>
                  [`$${typeof v === "number" ? v : 0}K / yr`, "Estimated value-impact"] as [string, string]
                }
              />
              <Bar dataKey="impact" fill="#0F1B3F" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </SectionFrame>

      <SectionFrame index={4} d={DELIVERABLES[4]}>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={READINESS_DATA} outerRadius="78%">
              <PolarGrid stroke="#E2E8F0" />
              <PolarAngleAxis dataKey="dimension" tick={{ fontSize: 11, fill: "#0A0E1F" }} />
              <PolarRadiusAxis angle={30} domain={[0, 5]} tick={{ fontSize: 10, fill: "#64748B" }} />
              <Radar
                name="Today"
                dataKey="score"
                stroke="#0F1B3F"
                fill="#0F1B3F"
                fillOpacity={0.25}
              />
              <Radar
                name="Target"
                dataKey="target"
                stroke="#22D3EE"
                fill="#22D3EE"
                fillOpacity={0.18}
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-4 text-sm text-ink/75">
          Routing applied:{" "}
          <span className="mono text-primary">RS 2.7, Conditions to address</span>{" "}
          (Data Quality + Automation Readiness need a runway before Phase 2 begins).
        </p>
      </SectionFrame>

      <SectionFrame index={5} d={DELIVERABLES[5]}>
        <div className="overflow-hidden rounded-md border border-border">
          <table className="w-full text-sm">
            <thead className="bg-bg">
              <tr>
                <th className="text-left px-4 py-2.5 font-medium text-primary">Item</th>
                <th className="text-left px-4 py-2.5 font-medium text-primary">Value-impact</th>
                <th className="text-left px-4 py-2.5 font-medium text-primary">Effort</th>
                <th className="text-left px-4 py-2.5 font-medium text-primary">Readiness</th>
                <th className="text-left px-4 py-2.5 font-medium text-primary">Recommendation</th>
              </tr>
            </thead>
            <tbody>
              {BACKLOG.map((row) => (
                <tr key={row.item} className="border-t border-border">
                  <td className="px-4 py-3 text-ink/85">{row.item}</td>
                  <td className="px-4 py-3 mono text-ink/85">{row.value}</td>
                  <td className="px-4 py-3 text-ink/75">{row.effort}</td>
                  <td className="px-4 py-3 text-ink/75">{row.readiness}</td>
                  <td className="px-4 py-3 mono text-accent">{row.rec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionFrame>
    </div>
  );
}
