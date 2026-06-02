import { Section } from "@/components/ui/Section";

// S8 — The disciplines behind it (minimal). The heritage blend that earns the
// right to run agents: BI / Technology / Operations. Deliberately understated.
// (Paul 2026-06-02: keep this minimal, it's "where we come from.")

const DISCIPLINES = [
  { title: "Business Intelligence", tags: "Data integrations · Visualizations" },
  { title: "Technology", tags: "Software · Hosting · Middleware" },
  { title: "Operations", tags: "Lean Six Sigma · Agile · Performance · Goals" },
];

export function Disciplines() {
  return (
    <Section className="!py-12">
      <div className="rounded-xl border border-border bg-surface p-6 md:p-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
          The disciplines behind it
        </p>
        <p className="mt-2 max-w-3xl text-[15px] text-ink/80 leading-relaxed">
          Two decades blending three disciplines is what lets a boutique senior team
          run agentic AI that actually holds up in your business.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {DISCIPLINES.map((d) => (
            <div
              key={d.title}
              className="rounded-lg border border-border bg-bg px-4 py-3"
            >
              <h3 className="text-[15px] font-semibold text-primary">{d.title}</h3>
              <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-subtle">
                {d.tags}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
