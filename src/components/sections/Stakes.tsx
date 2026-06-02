import Link from "next/link";
import { ArrowRight } from "lucide-react";

// S2 — The Stakes. Fear of waiting + the single-vendor close. Dark premium band
// for contrast against the white sections that follow. (Paul: hit on fear if
// companies wait; single vendor; foundation for agentic.)

const POINTS = [
  {
    head: "Waiting compounds",
    body: "Agentic AI is moving from edge to operating standard. Every quarter without a foundation is a quarter your competitors spend orchestrating, while your gap widens.",
  },
  {
    head: "Tools are not readiness",
    body: "The winners will not be the ones who bought the most AI. They will be the ones whose operations were actually ready: documented, integrated, instrumented. That takes a partner, not a license.",
  },
  {
    head: "One vendor owns the outcome",
    body: "Stitch together ten point solutions and you own the integration risk. We own the whole arc, from the first survey to the agents running in production.",
  },
];

export function Stakes() {
  return (
    <section className="relative overflow-hidden bg-primary-deep text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(38rem 26rem at 15% 0%, rgba(72,193,235,0.16), transparent 60%), radial-gradient(34rem 24rem at 95% 100%, rgba(21,105,172,0.32), transparent 62%)",
        }}
      />
      <div className="container-content relative py-16 md:py-24">
        <p className="eyebrow mb-4 text-accent">The stakes</p>
        <h2 className="max-w-4xl text-3xl md:text-5xl font-semibold tracking-tightish leading-[1.08] text-white">
          The window to get agentic AI right is open now. It will not stay open.
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/12 bg-white/[0.06] md:grid-cols-3">
          {POINTS.map((p) => (
            <div key={p.head} className="bg-primary-deep/40 p-6 md:p-7">
              <h3 className="text-lg font-semibold text-white tracking-tightish">
                {p.head}
              </h3>
              <p className="mt-3 text-[15px] text-white/80 leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/start"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-primary-deep transition-colors hover:bg-accent-vivid"
          >
            Start with a survey <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
          <p className="text-sm text-white/65">
            One partner, from first survey to agents in production.
          </p>
        </div>
      </div>
    </section>
  );
}
