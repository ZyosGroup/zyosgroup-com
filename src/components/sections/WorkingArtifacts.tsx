import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";

// Replaces the old placeholder testimonial rail (fabricated quotes + "permission
// pending"). We have no permissioned customer quotes yet, so instead of faking
// social proof we make the headline literal: the real, tangible deliverables
// every engagement produces. Named customer stories replace nothing here, they
// land on /case-studies as permissions clear.

const ARTIFACTS = [
  {
    when: "Within 60 minutes",
    name: "Opportunity diagnostic",
    body: "A scored readiness and maturity snapshot with an honest routing decision, in your inbox the same day you complete the intake.",
  },
  {
    when: "Week one",
    name: "Business Transformation Roadmap",
    body: "A phased, crawl-walk-run plan built from the diagnostic and sequenced to value-impact. A plan, not a pitch deck.",
  },
  {
    when: "First delivery cycle",
    name: "Process Intelligence deliverable",
    body: "How your business actually runs, documented department by department: the gaps, the value stream, and the prioritized backlog.",
  },
  {
    when: "Before we build",
    name: "Solution Architecture brief",
    body: "The architecture for your context, with security, ownership, maintenance, and evolution addressed in writing before construction begins.",
  },
  {
    when: "Every cycle",
    name: "Delivery board + value-impact OKRs",
    body: "A customer-visible engagement Kanban and OKRs measured continuously in Zyos OS. Progress you can open any time, not a status email.",
  },
  {
    when: "Every quarter",
    name: "Quarterly Business Review",
    body: "Recap, re-prioritization, and next-quarter commitments. The renewal evidence customers actually defend internally.",
  },
];

export function WorkingArtifacts() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Working artifacts"
        title="Working artifacts, not slide decks."
        description="Every engagement produces the same tangible deliverables. The proof is the artifact you can open, not a promise. Named customer stories land on the outcomes catalog as permissions clear."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {ARTIFACTS.map((a) => (
          <article
            key={a.name}
            className="flex flex-col rounded-lg border border-border bg-surface p-6"
          >
            <p className="mono text-[11px] uppercase tracking-[0.16em] text-accent">
              {a.when}
            </p>
            <h3 className="mt-1.5 text-lg font-semibold tracking-tightish text-primary">
              {a.name}
            </h3>
            <p className="mt-2 text-[14px] text-ink/80 leading-relaxed">
              {a.body}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/case-studies"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-ink transition-colors"
        >
          See the outcomes catalog
          <ArrowUpRight
            aria-hidden
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </Section>
  );
}
