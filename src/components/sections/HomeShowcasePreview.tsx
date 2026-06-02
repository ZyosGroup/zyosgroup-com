import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { AgentWorkflowCard } from "@/components/showcases/AgentWorkflowCard";
import { SAMPLE_WORKFLOWS } from "@/components/showcases/sample-workflows";
import { TopologyDiagram } from "@/components/showcases/TopologyDiagram";
import { OutcomeCard, SAMPLE_OUTCOMES } from "@/components/showcases/OutcomeCard";
import { ArrowRight } from "lucide-react";

// Compact capability-showcase block per positioning architecture §7 / homepage step 7.
// Shows 2 full agent workflow cards (Marketing + Operations per the showcase brief),
// plus a topology diagram preview, plus an outcomes catalog preview.

export function HomeShowcasePreview() {
  const featured = [
    SAMPLE_WORKFLOWS.find((w) => w.area === "Marketing")!,
    SAMPLE_WORKFLOWS.find((w) => w.area === "Operations")!,
  ];

  return (
    <Section className="bg-surface border-y border-border">
      <SectionHeading
        eyebrow="Capability showcases"
        title="Show, don't tell."
        description="Every capability claim is paired with a visible artifact, a diagram, a screen, a code snippet, or a quantified outcome."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {featured.map((w) => (
          <AgentWorkflowCard key={w.title} {...w} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <TopologyDiagram />

        <div className="rounded-lg border border-border bg-bg p-6">
          <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
            Outcomes catalog · preview
          </p>
          <h3 className="mt-2 text-lg font-semibold text-primary tracking-tightish">
            Revenue. Cost. Risk. Time. Quality.
          </h3>
          <p className="mt-2 text-sm text-ink/75">
            Every engagement names value-impact OKRs at kickoff and a recap at termination.
          </p>
          <div className="mt-4 grid gap-3">
            {SAMPLE_OUTCOMES.slice(0, 3).map((o, idx) => (
              <OutcomeCard key={idx} outcome={o} />
            ))}
          </div>
          <Link
            href="/case-studies"
            className="mt-5 inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            See the full catalog
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
