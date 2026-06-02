import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroJourneySpine } from "@/components/brand/HeroJourneySpine";
import { TAGLINE, HERO_SUBHEAD, FOUNDATIONAL_LINE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-deep text-white">
      {/* Atmospheric depth: drifting aurora glows + fine grid + bottom fade */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="aurora-a absolute -top-1/3 right-[-10%] h-[42rem] w-[42rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(72,193,235,0.30), transparent 60%)" }}
        />
        <div
          className="aurora-b absolute bottom-[-30%] left-[-10%] h-[36rem] w-[36rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(21,105,172,0.45), transparent 62%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at 55% 35%, #000 40%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at 55% 35%, #000 40%, transparent 80%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white" />
      </div>

      <div className="container-content pt-20 pb-28 md:pt-28 md:pb-36">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT — copy */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6">
              Boutique agentic AI · for high-growth SMBs, PE &amp; associations
            </p>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white leading-[1.04] [text-shadow:0_2px_30px_rgba(0,0,0,0.35)]">
              Agentic transformation built for ROI.
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/75 leading-relaxed">
              {TAGLINE.replace("Agentic transformation built for ROI. ", "")}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/start"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-primary-deep transition-colors hover:bg-accent-vivid"
              >
                Start with a measurement <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
              <Link
                href="/framework"
                className="inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-accent hover:text-accent"
              >
                See the framework
              </Link>
            </div>

            <p className="mt-12 max-w-2xl text-[15px] text-white/70 leading-relaxed border-l-2 border-accent pl-4">
              {HERO_SUBHEAD}
            </p>

            <p className="mt-10 font-mono text-xs text-white/55 uppercase tracking-[0.18em]">
              {FOUNDATIONAL_LINE}
            </p>
          </div>

          {/* RIGHT — the Zyos journey spine (engagement arc, survey to production) */}
          <div className="hidden lg:block">
            <HeroJourneySpine className="mx-auto w-full max-w-lg drop-shadow-[0_20px_60px_rgba(0,0,0,0.45)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
