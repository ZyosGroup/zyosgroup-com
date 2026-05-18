// TODO Pass 2: full implementation per zyosgroup-com-capability-showcases.md §6
// Six-section scrolling PI deliverable: process map (Reactflow), instrumentation
// gaps table, value-impact bar chart, readiness radar (Recharts), prioritized
// backlog table, agent-suitable matrix.
//
// Stub: ordered list of the six deliverables so the layout slot reads correctly.

const DELIVERABLES = [
  {
    label: "Process map",
    body:
      "End-to-end business process with every decision point, handoff, exception, system, and human role visible.",
  },
  {
    label: "Instrumentation plan",
    body:
      "Which steps need data capture to be measurable; what tools provide the data.",
  },
  {
    label: "Value-impact model",
    body:
      "For each measurable step — expected revenue / cost / risk / time effect of intervention.",
  },
  {
    label: "Readiness & maturity scorecard",
    body:
      "Five dimensions: data discipline, process discipline, team capability, change tolerance, executive sponsorship.",
  },
  {
    label: "Prioritized opportunity backlog",
    body:
      "Ranked intervention list with quantified value-impact estimates per item.",
  },
  {
    label: "Agent-suitable vs human-better recommendation",
    body:
      "Per item — whether an agent should run it, augment it, or stay out, with reasoning.",
  },
];

export function PiDeliverableScrollthrough() {
  return (
    <ol className="space-y-4">
      {DELIVERABLES.map((d, idx) => (
        <li
          key={d.label}
          className="rounded-lg border border-border bg-surface p-5 md:p-6"
        >
          <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
            Deliverable 0{idx + 1}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-primary tracking-tightish">
            {d.label}
          </h3>
          <p className="mt-2 text-[15px] text-ink/80 leading-relaxed">
            {d.body}
          </p>
        </li>
      ))}
    </ol>
  );
}
