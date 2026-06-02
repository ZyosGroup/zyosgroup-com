import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ArrowUpRight } from "lucide-react";

// High-level examples of agentic transformation applied by functional area.
// Process Intelligence is where the work goes tactical per department, so these
// sit right after the journey. Full case studies arrive later via the content
// engine. (Paul 2026-06-02.)

const FUNCTIONS = [
  {
    title: "Sales",
    example:
      "Agents qualify and route inbound, keep the CRM clean, and draft follow-ups so reps spend their time selling.",
    href: "/by-function/sales",
  },
  {
    title: "Marketing",
    example:
      "A content engine drafts, optimizes, and schedules; agents run SEO, GEO, and reporting. Productized as Growth as a Service.",
    href: "/by-function/marketing",
  },
  {
    title: "Finance",
    example:
      "Agents reconcile transactions, flag anomalies, and assemble the monthly reporting pack for review.",
    href: "/by-function/finance",
  },
  {
    title: "Human Resources",
    example:
      "Agents handle candidate intake and screening, then run onboarding workflows end to end.",
    href: "/by-function/hr",
  },
  {
    title: "Information Technology",
    example:
      "Agents triage service-desk tickets, diagnose routine issues, and remediate, escalating only what needs a human.",
    href: "/by-function/information-technology",
  },
  {
    title: "Logistics",
    example:
      "Agents monitor throughput, surface bottlenecks, and trigger the next action before a delay becomes a problem.",
    href: "/by-function/logistics",
  },
];

export function FunctionExamples() {
  return (
    <Section className="bg-surface">
      <SectionHeading
        eyebrow="Agents are the show"
        title="Once the foundation is in place, agents run the work, function by function."
        description="A high-level look at where agents earn their keep across the business. These are the patterns; full case studies are on the way through our content engine."
      />

      <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {FUNCTIONS.map((f) => (
          <Link
            key={f.title}
            href={f.href}
            className="group rounded-lg border border-border bg-bg p-5 hover:border-primary/40 transition-colors flex flex-col"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-[15px] font-semibold tracking-tightish text-primary">
                {f.title}
              </h3>
              <ArrowUpRight
                aria-hidden
                className="h-4 w-4 text-subtle group-hover:text-primary"
              />
            </div>
            <p className="mt-2 text-[14px] text-ink/80 leading-relaxed flex-1">
              {f.example}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
        <Link
          href="/agents"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-ink transition-colors"
        >
          See how agents run across your business
          <ArrowUpRight aria-hidden className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
          Case studies coming soon, published through the Zyos content engine.
        </p>
      </div>
    </Section>
  );
}
