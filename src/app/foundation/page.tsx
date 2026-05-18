import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { PiDeliverableScrollthrough } from "@/components/showcases/PiDeliverableScrollthrough";
import { CtaButton } from "@/components/ui/Button";
import { PageSchema } from "@/components/seo/PageSchema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Foundation — PI Implementation + Solution Architecture | Zyos Group",
  description:
    "The Zyos Foundation: Process Intelligence Implementation, the six deliverables, and the Solution Architecture brief addressing security, ownership, maintenance, evolution.",
  alternates: { canonical: "/foundation" },
};

export default function FoundationPage() {
  return (
    <>
      <PageSchema
        path="/foundation"
        name="Foundation — PI Implementation + Solution Architecture"
        description="Stage 2 of the customer journey: build the integrated foundation with PI Implementation and a context-specific architecture brief."
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Foundation", url: `${SITE.url}/foundation` },
        ]}
      />

      <Section>
        <p className="eyebrow mb-4">Foundation · Stage 2 — Build</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tightish text-primary leading-[1.05] max-w-4xl">
          Foundational builders. Process Intelligence first. Agents second.
        </h1>

        <div className="mt-10 max-w-3xl">
          <QuickAnswer>
            The Zyos Foundation is Stage 2 of the customer journey. Every
            Retainer and As-A-Service engagement starts with Process
            Intelligence Implementation — two weeks, six deliverables — and a
            context-specific Solution Architecture brief that addresses
            security, ownership, maintenance, and evolution as first-class
            concerns. Without this foundation, AI deployments stay disconnected,
            agents automate chaos, and value-impact stays trapped in pilots.
          </QuickAnswer>
        </div>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="Process Intelligence Implementation"
          title="Six deliverables. Two weeks. The truth-finding pass."
          description="Stub preview — full Reactflow + Recharts gap-analysis scrollthrough lands pass 2."
        />
        <div className="mt-10">
          <PiDeliverableScrollthrough />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Solution Architecture"
          title="Security · Ownership · Maintenance · Evolution."
          description="Beyond functional design, every Zyos architecture explicitly addresses four non-negotiables — articulated in the Architecture Brief before construction begins."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            {
              t: "Security",
              b: "IAM, encryption, secret management, audit trails, incident response, certifications. Designed in, not bolted on. Posture matches your regulatory and risk context.",
            },
            {
              t: "Ownership",
              b: "Who owns the code, data, model artifacts, agent prompts, and decisions agents make. Default: you own everything we produce for you; Zyos owns the platform IP.",
            },
            {
              t: "Maintenance",
              b: "Operational responsibility, update responsibility, SLA + escalation paths — articulated in writing before the foundation is built.",
            },
            {
              t: "Evolution",
              b: "How the solution adapts as the AI category evolves, the business changes, and platforms come and go. Portability and lock-in mitigation included.",
            },
          ].map((c) => (
            <article key={c.t} className="rounded-lg border border-border bg-surface p-6">
              <h3 className="text-xl font-semibold text-primary tracking-tightish">
                {c.t}
              </h3>
              <p className="mt-3 text-[15px] text-ink/80 leading-relaxed">{c.b}</p>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <CtaButton href="/start">Start your PI Implementation</CtaButton>
        </div>
      </Section>
    </>
  );
}
