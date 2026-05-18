import { Section } from "@/components/ui/Section";
import { SITE } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

export function NewsletterSignup() {
  return (
    <Section>
      <div className="rounded-xl border border-border bg-surface p-8 md:p-12 grid gap-6 md:grid-cols-[1.4fr_1fr] items-center">
        <div>
          <p className="eyebrow mb-3">The Zyos Brief</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tightish text-primary">
            One monthly read for B2B operators.
          </h2>
          <p className="mt-4 text-[15px] text-ink/80 leading-relaxed max-w-prose">
            Paul&apos;s monthly take on agentic AI, operating systems, and what we
            shipped this month. Published on LinkedIn Newsletter — no inbox spam,
            just one Tuesday-morning issue with the patterns worth your time.
          </p>
        </div>
        <div className="flex md:justify-end">
          <a
            href={SITE.newsletter}
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-white hover:bg-ink transition-colors"
          >
            Subscribe on LinkedIn
            <ArrowUpRight aria-hidden className="h-4 w-4" />
          </a>
        </div>
      </div>
    </Section>
  );
}
