import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { CtaButton } from "@/components/ui/Button";
import { PageSchema } from "@/components/seo/PageSchema";
import { SystemBuildGrid } from "@/components/showcases/SystemBuildCard";
import { SITE } from "@/lib/site";

// Primary KW: "digital transformation consulting" (vol 1,900, KD 1) — winnable head term.
export const metadata: Metadata = {
  title: "Digital Transformation Consulting | Zyos Group",
  description:
    "End-to-end digital transformation programs. Readiness + maturity assessment, CRM/ERP modernization, process redesign, AI-native operating model. Build & Operate Retainer.",
  alternates: { canonical: "/consulting/digital-transformation" },
};

const TRANSFORMATION_LANES = [
  {
    t: "CRM + revenue stack modernization",
    b: "From spreadsheets and disconnected sequencers to an integrated revenue operating system with agents running across pipeline, outbound, and customer success.",
  },
  {
    t: "ERP + operations modernization",
    b: "Replacing legacy ERPs or implementing modern ones; instrumenting the operations stack; rebuilding the data model so reporting + planning aren't manual scrambles.",
  },
  {
    t: "Service-desk + support transformation",
    b: "From ad-hoc ticketing to a productized Service Desk discipline with SLA, escalation, and a Tier-1 agent layer. Built on the Zyos Service Desk module.",
  },
  {
    t: "Marketing + growth transformation",
    b: "Integrated marketing: SEO + GEO + content + paid + analytics. For SMB customers this is GaaS; for mid-market it's a Retainer with the marketing operating model baked in.",
  },
  {
    t: "AI-native operating-model rollout",
    b: "The big one. Process Intelligence on every function; agents deployed against the highest-value processes; the operating model — Measure → Deliver → Continuously Improve — rolled out organization-wide.",
  },
  {
    t: "Cloud + security modernization",
    b: "Cloud migration, IAM modernization, data residency + audit trails, security posture matched to regulatory context. Often the prerequisite for AI-native rollout.",
  },
];

export default function DigitalTransformationPage() {
  return (
    <>
      <PageSchema
        path="/consulting/digital-transformation"
        name="Digital Transformation Consulting — Zyos Group"
        description="End-to-end transformation from legacy operations to AI-augmented workflows. Assessment-first, architecture-first, ROI-gated."
        service={{ type: "Digital transformation consulting" }}
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Consulting", url: `${SITE.url}/consulting` },
          { name: "Digital Transformation", url: `${SITE.url}/consulting/digital-transformation` },
        ]}
      />

      <Section>
        <p className="eyebrow mb-4">Consulting · Digital Transformation</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tightish text-primary leading-[1.05] max-w-4xl">
          From legacy operations to AI-augmented workflows — measured every
          cycle.
        </h1>

        <div className="mt-10 max-w-3xl">
          <QuickAnswer>
            Zyos Group&apos;s Digital Transformation practice runs end-to-end
            programs that move a company from legacy operations to modern,
            AI-augmented workflows. CRM/ERP modernization, process redesign,
            cloud migration, AI-native operating-model rollout. Every program
            starts with a Readiness & Maturity scorecard and Process
            Intelligence Implementation. Flexible engagement: Fixed Price,
            Retainer, or Build & Operate Retainer — we meet you where you are.
          </QuickAnswer>
        </div>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="Six transformation lanes"
          title="What we actually do under the 'digital transformation' label."
          description="Most digital-transformation pitches are abstract. These are the concrete lanes we deliver — pick one, or run the Opportunity Engine and we'll route."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {TRANSFORMATION_LANES.map((l, i) => (
            <article
              key={l.t}
              className="rounded-lg border border-border bg-bg p-6"
            >
              <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
                Lane 0{i + 1}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-primary tracking-tightish">
                {l.t}
              </h3>
              <p className="mt-3 text-[15px] text-ink/80 leading-relaxed">
                {l.b}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Architecture-first"
          title="Regulated, complex, or growth-stage — each context gets a different architecture."
          description="Solution Architecture is a first-class deliverable. The Architecture Brief addresses security, ownership, maintenance, and evolution before construction begins."
        />
        <div className="mt-8">
          <Link
            href="/foundation"
            className="text-sm text-primary hover:underline"
          >
            Read the Foundation page — what the Architecture Brief contains →
          </Link>
        </div>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="Before / after"
          title="Anonymized transformation engagements."
          description="Toggle between before and after architectures. Each card includes the Build / Implement / Both badge."
        />
        <div className="mt-10">
          <SystemBuildGrid />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Build & Operate Retainer"
          title="When discovery is going to happen IN the engagement."
          description="Productized Retainer for build+ops engagements where the spec is intentionally incomplete at signing. Most digital-transformation engagements fit this shape."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 max-w-4xl">
          <article className="rounded-lg border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold text-primary tracking-tightish">
              Why Build & Operate
            </h3>
            <ul className="mt-3 space-y-2 text-[15px] text-ink/80 leading-relaxed">
              <li>· Spec is incomplete — we discover the answer with you</li>
              <li>· Build phase and operate phase are explicitly separated in reporting</li>
              <li>· Architecture Brief at end of week 2 sets the construction contract</li>
              <li>· Customer owns the solution at exit (key feature of this variant)</li>
            </ul>
          </article>
          <article className="rounded-lg border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold text-primary tracking-tightish">
              How it runs
            </h3>
            <ul className="mt-3 space-y-2 text-[15px] text-ink/80 leading-relaxed">
              <li>· Build-then-run — the spec can be incomplete at signing; discovery happens in the engagement</li>
              <li>· Scales with the work as scope becomes clear</li>
              <li>· One vendor across operations, technology, data, and software</li>
              <li>· Solution Architecture brief is the first deliverable</li>
              <li>· Customer owns the solution at exit</li>
            </ul>
          </article>
        </div>
      </Section>

      <Section className="bg-primary text-white">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] items-end">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-accent">
              Transformation is multi-year work
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tightish text-white">
              We don&apos;t do one-off projects.
            </h2>
            <p className="mt-4 text-white/80 max-w-prose">
              A 6-week proof of concept is a deck. Transformation is the
              operating-model shift that takes 12–36 months. Partners who want
              a deck shouldn&apos;t hire us. Partners who want measured cycles
              and quarterly re-prioritization should.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <CtaButton href="/start">Start with a measurement</CtaButton>
          </div>
        </div>
      </Section>
    </>
  );
}
