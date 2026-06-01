import { CtaButton } from "@/components/ui/Button";
import { TAGLINE, HERO_SUBHEAD, FOUNDATIONAL_LINE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background — subtle navy-on-cream gradient line, no glow */}
      <div className="container-content pt-16 pb-20 md:pt-24 md:pb-28">
        <p className="eyebrow mb-5">Digital transformation &amp; AI consulting · one vendor</p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tightish text-primary leading-[1.05] max-w-4xl">
          {/* Hero rebuild — the locked tagline as H1, fragmented for hierarchy */}
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

      <div className="hairline" />
    </section>
  );
}
