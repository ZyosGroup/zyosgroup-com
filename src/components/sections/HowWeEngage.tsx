import { Section } from "@/components/ui/Section";

// S7 — How we engage. The boutique / senior-team-direct + flexible-engagement
// differentiator, plus the operating cadence (Measure / Deliver / Continuously
// Improve) reframed as "how we run it once we're in." Absorbs the old
// OperatingModelFlow + Two Arms framing. Dark premium band. (Paul: flexible
// engagement model is the point; boutique must come across; single operating model.)

const MODELS = [
  {
    name: "Fixed Price",
    line: "Consulting",
    blurb:
      "Defined scope, defined endpoint. Best when the outcome is clear and bounded. Support packaged in when you want ongoing stewardship.",
  },
  {
    name: "Retainer",
    line: "Consulting",
    blurb:
      "Evolving scope over six to eighteen months. Process Intelligence is always the first cycle. The right fit when the work compounds.",
  },
  {
    name: "As-A-Service",
    line: "Solutions · AaaS / GaaS",
    blurb:
      "Productized and continuous, with support baked into the fee. Agent as a Service and Growth as a Service, operated on Zyos OS.",
  },
];

const CADENCE = [
  {
    label: "Measure",
    blurb:
      "Process Intelligence, readiness and maturity scoring, value-impact OKRs. We baseline before we build.",
  },
  {
    label: "Deliver",
    blurb:
      "Monthly cycles prioritized to value-impact, cross-discipline execution, measured outcomes, a visible board.",
  },
  {
    label: "Continuously Improve",
    blurb:
      "Quarterly business reviews, monthly reports, OKR and KPI tracking, support. We re-prioritize on what the data says.",
  },
];

export function HowWeEngage() {
  return (
    <Section className="relative overflow-hidden bg-primary-deep text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(40rem 28rem at 10% 110%, rgba(72,193,235,0.16), transparent 60%)",
        }}
      />
      <div className="relative">
        <p className="eyebrow mb-3 text-accent">How we engage</p>
        <h2 className="max-w-3xl text-3xl md:text-4xl font-semibold tracking-tightish text-white">
          Boutique by design. Senior people on the work, flexible terms, one operating model.
        </h2>
        <p className="mt-4 max-w-prose text-lg text-white/75 leading-relaxed">
          You work directly with the senior team that does the work, not a layer of
          account managers. We hold a limited number of engagements at a time, on
          purpose. Pick the commercial model that fits. The way we run it does not change.
        </p>

        {/* Engagement models */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {MODELS.map((m) => (
            <div
              key={m.name}
              className="rounded-xl border border-white/12 bg-white/[0.05] p-6 md:p-7"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                {m.line}
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tightish text-white">
                {m.name}
              </h3>
              <p className="mt-3 text-[15px] text-white/80 leading-relaxed">
                {m.blurb}
              </p>
            </div>
          ))}
        </div>

        {/* Operating cadence */}
        <div className="mt-12 rounded-xl border border-white/12 bg-white/[0.03] p-6 md:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">
            How we run it, every engagement
          </p>
          <ol className="mt-5 grid gap-6 md:grid-cols-3">
            {CADENCE.map((c, idx) => (
              <li key={c.label} className="flex gap-4">
                <span className="font-mono text-sm text-accent">0{idx + 1}</span>
                <div>
                  <h4 className="text-base font-semibold text-white tracking-tightish">
                    {c.label}
                  </h4>
                  <p className="mt-1.5 text-[14px] text-white/75 leading-relaxed">
                    {c.blurb}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
