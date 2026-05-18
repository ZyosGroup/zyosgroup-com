// TODO Pass 2: full implementation per zyosgroup-com-capability-showcases.md §5
// 4 looping automation animations (lead-to-quote, onboarding, anomaly-to-action,
// customer-success). Start as mp4 with poster ≤120KB + preload="none";
// migrate to Framer Motion native sequences.
//
// Stub: labeled placeholder reels.

const REELS = [
  "Lead-to-Quote — high-intent inbound → enriched → scored → routed → quote drafted",
  "Onboarding — SOW signed → kickoff scheduled → workspace provisioned → welcome packet → QBR calendar",
  "Anomaly-to-Action — KPI deviation → context joined → hypothesis drafted → owner approval",
  "Customer Success — dormant customer → churn-risk scored → re-engagement drafted for CSM approval",
];

export function AutomationReel() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {REELS.map((r, idx) => (
        <figure
          key={idx}
          className="rounded-lg border border-border bg-surface aspect-[16/10] p-5 flex flex-col"
        >
          <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
            Reel 0{idx + 1} · pass 2
          </p>
          <p className="mt-3 text-[14px] text-ink/85 leading-relaxed flex-1">
            {r}
          </p>
          <p className="text-[11px] text-subtle">mp4 · ≤2MB · captions burned in</p>
        </figure>
      ))}
    </div>
  );
}
