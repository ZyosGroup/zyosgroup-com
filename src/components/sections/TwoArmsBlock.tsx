import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";

export function TwoArmsBlock() {
  return (
    <Section className="bg-surface border-y border-border">
      <SectionHeading
        eyebrow="Two arms · one platform"
        title="Buy it as Consulting. Buy it as Solutions. Same operating system underneath."
        description="Most firms either consult or sell platforms. We do both, on the same Zyos OS — so consulting engagements compound into reusable IP that powers our productized as-a-service offerings."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <Link
          href="/consulting"
          className="group rounded-lg border border-border p-7 bg-bg hover:border-primary/40 transition-colors"
        >
          <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
            Consulting · Fixed Price · Retainer
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-primary tracking-tightish">
            Consulting
          </h3>
          <p className="mt-3 text-[15px] text-ink/80 leading-relaxed">
            Human-led, scoped, expert work — delivered on Zyos OS so deliverables
            compound into reusable IP. Four practice areas: Software & Data,
            Digital Transformation, Operations & Scaling, Integrated Marketing.
          </p>
          <ul className="mt-5 grid grid-cols-2 gap-y-2 gap-x-3 text-sm text-ink/85">
            <li>· Software & Data</li>
            <li>· Digital Transformation</li>
            <li>· Operations & Scaling</li>
            <li>· Integrated Marketing</li>
          </ul>
          <span className="mt-6 inline-block text-sm text-primary group-hover:underline">
            Explore Consulting →
          </span>
        </Link>

        <Link
          href="/solutions"
          className="group rounded-lg border border-primary/20 p-7 bg-primary text-white hover:bg-ink transition-colors"
        >
          <p className="mono text-[11px] uppercase tracking-[0.16em] text-accent">
            Solutions · As-A-Service
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tightish">
            Solutions
          </h3>
          <p className="mt-3 text-[15px] text-white/85 leading-relaxed">
            Productized continuous services. Monthly recurring, scoped variants,
            platform-led execution. The same team that consults also operates
            agents and growth motions on the same operating system.
          </p>
          <ul className="mt-5 grid grid-cols-1 gap-y-2 text-sm text-white/85">
            <li>· Agent as a Service (AaaS) — Workflows / Systems / Middleware / Lean / Insights</li>
            <li>· Growth as a Service (GaaS) — Website / GBP / Ads + LSA / SEO content / GEO</li>
          </ul>
          <span className="mt-6 inline-block text-sm text-accent group-hover:underline">
            Explore Solutions →
          </span>
        </Link>
      </div>
    </Section>
  );
}
