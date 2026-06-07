import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";

// Replaces the old capability-showcase block (technical agent task logs, an
// empty topology diagram, and fabricated "permission pending" outcome metrics).
// We sell to owners, so this speaks their language: the problems they actually
// bring us, and how we solve them. No jargon, no invented numbers.

const PROBLEMS = [
  {
    problem: "My team spends its day on manual, repetitive work.",
    solution:
      "We map how the work actually flows, then put agents on the repetitive parts. Your people get their time back for judgment, not data entry.",
    href: "/agents",
    link: "Agents across your business",
  },
  {
    problem: "Growing means hiring, and every hire costs more.",
    solution:
      "We productize how you operate, so the next hire onboards into a system and the same team handles more without the headcount creep.",
    href: "/consulting/operations-and-scaling",
    link: "Operations & scaling",
  },
  {
    problem: "I can't trust my numbers, or get them quickly.",
    solution:
      "We integrate your systems and instrument the data, so reporting is current and reconcilable instead of a monthly scramble.",
    href: "/consulting/software-and-data",
    link: "Software & data",
  },
  {
    problem: "We spend on marketing but can't prove what works.",
    solution:
      "We run marketing as one measured system tied to pipeline and OKRs, including the AI-search visibility most firms still ignore.",
    href: "/consulting/integrated-marketing",
    link: "Integrated marketing",
  },
  {
    problem: "Everyone says do AI, but our pilots go nowhere.",
    solution:
      "Pilots fail on a weak foundation. We build the documentation, data, and workflows first, so the agents actually stick.",
    href: "/foundation",
    link: "The foundation",
  },
  {
    problem: "I'm tired of vendors who hand off and disappear.",
    solution:
      "One senior team owns the whole arc, from the first measurement to agents running in production. You own the outcome.",
    href: "/how-we-deliver",
    link: "How we engage",
  },
];

export function OwnerProblems() {
  return (
    <Section className="bg-surface border-y border-border">
      <SectionHeading
        eyebrow="How we solve it"
        title="The problems owners actually bring us."
        description="Not features and task logs. The things that keep you up: manual work, headcount creep, numbers you can't trust, marketing you can't measure, AI that goes nowhere. Here's how we solve them."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PROBLEMS.map((p) => (
          <article
            key={p.problem}
            className="flex flex-col rounded-lg border border-border bg-bg p-6"
          >
            <p className="text-lg font-semibold tracking-tightish text-primary leading-snug">
              &ldquo;{p.problem}&rdquo;
            </p>
            <p className="mt-3 flex-1 text-[15px] text-ink/80 leading-relaxed">
              {p.solution}
            </p>
            <Link
              href={p.href}
              className="group mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-ink transition-colors"
            >
              {p.link}
              <ArrowUpRight
                aria-hidden
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
