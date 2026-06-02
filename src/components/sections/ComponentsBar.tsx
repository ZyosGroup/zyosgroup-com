import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ArrowUpRight } from "lucide-react";

// The three integrated service components + Agents-across,
// per zyosgroup-positioning-architecture.md §3 + §7.

const COMPONENTS = [
  {
    title: "Business Intelligence",
    blurb:
      "The data, instrumentation, and measurement layer that makes everything else legible. Dashboards, KPI / OKR tracking, analytics integrations, and the measurement plan that grounds every PI Implementation.",
    proof: "Eight-dashboard gallery",
    href: "/consulting/operations-and-scaling",
  },
  {
    title: "Software",
    blurb:
      "Custom application development plus the technology layer, infrastructure, platforms, integrations, cloud, security, devops. We build when off-the-shelf can't, and integrate cleanly when it can.",
    proof: "Zyos OS itself, shipped weekly",
    href: "/consulting/software-and-data",
  },
  {
    title: "Operations",
    blurb:
      "The operating layer that turns ad-hoc work into a repeatable system. Process design, operating-model rollouts, OKR / KPI systems, Customer Success cadence, and the Zyos Service Desk discipline.",
    proof: "QBR + monthly-report cadence",
    href: "/consulting/operations-and-scaling",
  },
];

export function ComponentsBar() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Three integrated components"
        title="Business Intelligence, Software, Operations, with Agents running across all three."
        description="Most firms deliver one or two of these as separate practices. Almost nobody integrates all three with Agents as the cross-cutting layer. That integration is the differentiator."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {COMPONENTS.map((c) => (
          <Link
            key={c.title}
            href={c.href}
            className="group rounded-lg border border-border bg-surface p-6 hover:border-primary/40 transition-colors flex flex-col"
          >
            <h3 className="text-xl font-semibold tracking-tightish text-primary">
              {c.title}
            </h3>
            <p className="mt-3 text-[15px] text-ink/80 leading-relaxed flex-1">
              {c.blurb}
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-primary/80 group-hover:text-primary">
              <span className="font-mono uppercase tracking-[0.14em] text-[11px]">
                Proof
              </span>
              <span>· {c.proof}</span>
              <ArrowUpRight aria-hidden className="ml-auto h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>

      {/* Agents bar, horizontal layer beneath the three components */}
      <Link
        href="/solutions/agent-as-a-service"
        className="mt-4 group block rounded-lg border border-primary/15 bg-primary text-white p-6 md:p-7 hover:bg-ink transition-colors"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <div className="md:w-1/3">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              Agents, running across all three
            </p>
            <h3 className="mt-1 text-xl font-semibold">
              The AI-native integration + operational layer
            </h3>
          </div>
          <p className="md:flex-1 text-[15px] text-white/85 leading-relaxed">
            Every Agent pulls BI signals, executes Software actions, and triggers
            Operations workflows. A Service Desk ticket becomes a BI signal becomes
            a Software roadmap input becomes a fresh BI dashboard. Productized as{" "}
            <span className="font-semibold">Agent as a Service</span>.
          </p>
          <ArrowUpRight aria-hidden className="h-5 w-5 self-end md:self-center text-accent" />
        </div>
      </Link>
    </Section>
  );
}
