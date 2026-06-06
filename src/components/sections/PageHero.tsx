import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Reusable dark hero band: eyebrow + light headline + subhead + CTAs on the
// left, a brand graphic on the right. The atmospheric background (aurora +
// grid + bottom fade) matches the homepage hero. Used by the interior pages
// so the dark-hero treatment is consistent and defined in one place.

type Cta = { href: string; label: string; external?: boolean };

export function PageHero({
  eyebrow,
  title,
  subhead,
  primary,
  secondary,
  graphic,
}: {
  eyebrow: string;
  title: string;
  subhead: string;
  primary: Cta;
  secondary?: Cta;
  graphic: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-primary-deep text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="aurora-a absolute -top-1/3 right-[-10%] h-[40rem] w-[40rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(72,193,235,0.30), transparent 60%)" }}
        />
        <div
          className="aurora-b absolute bottom-[-30%] left-[-10%] h-[34rem] w-[34rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(21,105,172,0.45), transparent 62%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at 60% 40%, #000 40%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at 60% 40%, #000 40%, transparent 80%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white" />
      </div>

      <div className="container-content pt-20 pb-24 md:pt-24 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6">
              {eyebrow}
            </p>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white leading-[1.04] [text-shadow:0_2px_30px_rgba(0,0,0,0.35)]">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/75 leading-relaxed">
              {subhead}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href={primary.href}
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-primary-deep transition-colors hover:bg-accent-vivid"
              >
                {primary.label} <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
              {secondary ? (
                secondary.external ? (
                  <a
                    href={secondary.href}
                    rel="noopener"
                    className="inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-accent hover:text-accent"
                  >
                    {secondary.label}
                  </a>
                ) : (
                  <Link
                    href={secondary.href}
                    className="inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-accent hover:text-accent"
                  >
                    {secondary.label}
                  </Link>
                )
              ) : null}
            </div>
          </div>

          <div className="hidden lg:block">{graphic}</div>
        </div>
      </div>
    </section>
  );
}
