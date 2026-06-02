import { CtaButton } from "@/components/ui/Button";
import { NetworkMotif } from "@/components/brand/NetworkMotif";
import { TAGLINE, HERO_SUBHEAD, FOUNDATIONAL_LINE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Brand gradient wash, navy→cyan, subtle, top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60rem 40rem at 85% -10%, rgba(72,193,235,0.10), transparent 60%), radial-gradient(50rem 40rem at 110% 20%, rgba(21,105,172,0.08), transparent 55%)",
        }}
      />
      <div className="container-content pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* LEFT, copy */}
          <div>
            <p className="eyebrow mb-5">Digital transformation &amp; AI consulting · one vendor</p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tightish text-primary leading-[1.05]">
              Agentic transformation built for ROI.
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-ink/80 leading-relaxed">
              {TAGLINE.replace("Agentic transformation built for ROI. ", "")}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CtaButton href="/start">Start with a measurement</CtaButton>
              <CtaButton href="/framework" variant="secondary" withArrow={false}>
                See the framework
              </CtaButton>
            </div>

            <p className="mt-12 max-w-3xl text-[15px] text-subtle leading-relaxed border-l-2 border-accent pl-4">
              {HERO_SUBHEAD}
            </p>

            <p className="mt-10 font-mono text-xs text-subtle uppercase tracking-[0.18em]">
              {FOUNDATIONAL_LINE}
            </p>
          </div>

          {/* RIGHT, brand network motif (decorative, hidden on small screens) */}
          <div className="hidden lg:block">
            <NetworkMotif className="mx-auto w-full max-w-md" />
          </div>
        </div>
      </div>

      <div className="hairline" />
    </section>
  );
}
