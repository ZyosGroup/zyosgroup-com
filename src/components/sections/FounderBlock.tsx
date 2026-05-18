import { Section } from "@/components/ui/Section";
import { SITE } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

export function FounderBlock() {
  return (
    <Section className="bg-surface border-y border-border">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] items-start">
        <div
          aria-label="Paul Ruddy — photo placeholder"
          className="aspect-[4/5] rounded-lg border border-border bg-bg overflow-hidden flex items-center justify-center"
        >
          {/* Photo placeholder — replace with on-camera still per
              customer-video-pipeline.md Track A on first quarterly shoot. */}
          <div className="text-center px-6">
            <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
              Founder · Paul Ruddy
            </p>
            <p className="mt-3 text-primary text-2xl font-semibold tracking-tightish">
              PR
            </p>
            <p className="mt-1 text-xs text-subtle">Track A on-camera still — pending</p>
          </div>
        </div>

        <div>
          <p className="eyebrow mb-3">Founder</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tightish text-primary">
            Paul Ruddy
          </h2>
          <p className="mt-4 text-lg text-ink/85 leading-relaxed">
            Two decades building and scaling IT managed services, software, and
            business intelligence practices. Now focused on integrated marketing,
            digital transformation, and foundational agentic-AI solutions for B2B
            growth — and on the operating system that compounds it.
          </p>
          <p className="mt-4 text-[15px] text-ink/75 leading-relaxed">
            Zyos Group is the services company. Zyos OS is the operating system
            it builds on. The marketing site is the product demo.
          </p>
          <a
            href={SITE.paulruddy}
            rel="noopener"
            className="mt-7 inline-flex items-center gap-2 text-primary hover:underline"
          >
            <span>Read more at paulruddy.com</span>
            <ArrowUpRight aria-hidden className="h-4 w-4" />
          </a>
        </div>
      </div>
    </Section>
  );
}
