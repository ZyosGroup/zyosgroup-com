import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { CtaButton } from "@/components/ui/Button";
import { PageSchema } from "@/components/seo/PageSchema";
import { Faq } from "@/components/seo/Faq";
import { PageHero } from "@/components/sections/PageHero";
import { HeroSoftwareData } from "@/components/brand/HeroSoftwareData";
import { TopologyDiagram } from "@/components/showcases/TopologyDiagram";
import { SystemBuildGrid } from "@/components/showcases/SystemBuildCard";
import { SITE } from "@/lib/site";

const SD_FAQS = [
  {
    q: "Does Zyos build custom software, or just integrate existing tools?",
    a: "Both, on the merits. Zyos builds when off-the-shelf can't do what the workflow needs, when the integration glue is the actual value, when your IP is the differentiator, or when compliance requires code you can audit and own. When a best-of-breed tool is the right answer, Zyos integrates cleanly instead of building for its own sake.",
  },
  {
    q: "What is AI agent development?",
    a: "Designing and building the agents, the runtime, orchestration, tool integrations, and observability, that operate real work in production, not a chatbot demo. Zyos's Foundational AI Layer runs agents under multi-tenant isolation today; AI agent development is building that capability into a customer's own stack.",
  },
  {
    q: "What's the proof that Zyos can actually build?",
    a: "The working software. ZyosApp, the operating system that runs every engagement, ships weekly. The Foundational AI Layer runs agents in production. The Astro + Tailwind customer-site template powers live Growth as a Service engagements. The proof is shipped software, not a slide deck.",
  },
  {
    q: "How do you decide build vs buy?",
    a: "Deliberately, documented in the Solution Architecture brief. Build when the workflow, IP, or compliance demands it; integrate when a tool covers 80% and the rest is connector work and speed-to-value matters more than ownership. Either way we avoid burying you in vendor lock-in.",
  },
];

// Primary KW: "software development services" (vol 2,900) + "ai agent development" (vol 590).
export const metadata: Metadata = {
  title: "Software & Data Consulting: Custom Builds + BI",
  description:
    "Custom software development, AI agent development, data platforms, integrations, BI dashboards. Built when off-the-shelf can't.",
  alternates: { canonical: "/consulting/software-and-data" },
};

const BUILD_VS_CONFIGURE = [
  {
    t: "We build when…",
    items: [
      "Off-the-shelf can't do what your workflow needs (custom intake-to-quote, custom agent runtime, custom member portal)",
      "Integration glue is the actual value, connecting systems that don't ship integrations",
      "Your IP is the differentiator and configuring someone else's tool would dilute it",
      "Compliance + ownership boundaries require code you can audit and own",
    ],
  },
  {
    t: "We integrate when…",
    items: [
      "A best-of-breed tool exists and the build-vs-buy math is clear",
      "Your stack already has 80% of what's needed and the remaining 20% is connector work",
      "Speed-to-value matters more than IP ownership for this surface",
      "We can integrate cleanly without burying you in vendor lock-in",
    ],
  },
];

export default function SoftwareDataPage() {
  return (
    <>
      <PageSchema
        path="/consulting/software-and-data"
        name="Software & Data: Zyos Group Consulting"
        description="Custom application development, data platforms, BI dashboards, integrations, and AI agent development."
        service={{ type: "Software development services" }}
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Consulting", url: `${SITE.url}/consulting` },
          { name: "Software & Data", url: `${SITE.url}/consulting/software-and-data` },
        ]}
      />

      <PageHero
        eyebrow="Consulting · Software & Data"
        title="We build software. We instrument data. We integrate the stack."
        subhead="The build practice: custom applications, AI agent development, data platforms, integrations, and BI, on two decades of IT, software, and business-intelligence lineage."
        primary={{ href: "/start", label: "Start with a measurement" }}
        secondary={{ href: "/solutions/agent-as-a-service", label: "See Agent as a Service" }}
        graphic={<HeroSoftwareData className="mx-auto w-full max-w-lg drop-shadow-[0_20px_60px_rgba(0,0,0,0.45)]" />}
      />

      <Section>
        <div className="max-w-3xl">
          <QuickAnswer>
            Zyos Group&apos;s Software & Data practice is the build practice.
            Custom application development, AI agent development, data
            platforms, integrations, BI dashboards, informed by two decades of
            IT managed services, software, and business intelligence lineage.
            ZyosApp itself is the working proof, shipped weekly. When
            off-the-shelf is the right answer, we say so and integrate cleanly.
            Engagement models: Fixed Price (defined builds) or Retainer.
          </QuickAnswer>
        </div>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="System topology"
          title="The fabric Zyos integrates and the layer Zyos OS adds on top."
          description="Most agentic-AI consulting firms are configurators, they assemble Salesforce + HubSpot + Snowflake + a vendor's agent platform. Zyos builds when building is the right answer."
        />
        <div className="mt-10">
          <TopologyDiagram />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Build vs configure"
          title="The call we make deliberately, on the merits."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {BUILD_VS_CONFIGURE.map((c) => (
            <article
              key={c.t}
              className="rounded-lg border border-border bg-surface p-6"
            >
              <h3 className="text-xl font-semibold text-primary tracking-tightish">
                {c.t}
              </h3>
              <ul className="mt-4 space-y-2 text-[15px] text-ink/80 leading-relaxed">
                {c.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span aria-hidden className="text-accent">·</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="System builds + implementations"
          title="Anonymized engagements across the Build / Implement / Both spectrum."
          description="Toggle each card between before-and-after architectures. Real engagement shapes; identifying data anonymized."
        />
        <div className="mt-10">
          <SystemBuildGrid />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Proof concrete"
          title="ZyosApp ships weekly. The Foundational AI Layer runs agents in production. The customer-site template powers live GaaS engagements."
          description="When we say we build, the proof is the working software, not the slide deck."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3 max-w-4xl">
          {[
            {
              t: "ZyosApp",
              b: "Internal operating system shipped weekly. Runs every customer engagement end-to-end.",
            },
            {
              t: "Foundational AI Layer",
              b: "Agent runtime + orchestration + observability + multi-tenant isolation. Powers AaaS + GaaS on the same platform.",
            },
            {
              t: "Customer-site template",
              b: "Astro + Tailwind v4. Config-driven. One file per customer. Auto-deployed.",
            },
          ].map((c) => (
            <article
              key={c.t}
              className="rounded-lg border border-border bg-surface p-5"
            >
              <h3 className="text-lg font-semibold text-primary tracking-tightish">
                {c.t}
              </h3>
              <p className="mt-2 text-sm text-ink/80 leading-relaxed">{c.b}</p>
            </article>
          ))}
        </div>
      </Section>

      <Faq
        eyebrow="Software & Data, FAQ"
        title="What buyers ask about custom builds + AI agent development."
        description="Straight answers to what buyers ask about custom builds and AI agent development."
        faqs={SD_FAQS}
      />

      <Section className="bg-primary text-white">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] items-end">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-accent">
              Build the right thing the right way
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tightish text-white">
              Start with a measurement.
            </h2>
            <p className="mt-4 text-white/80 max-w-prose">
              The Opportunity Engine intake tells you whether your project is
              Fixed Price or Retainer shape, and whether a Build & Operate
              wrapper is the right fit when discovery is going to happen IN
              the engagement.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <CtaButton href="/start">Start your intake</CtaButton>
          </div>
        </div>
      </Section>
    </>
  );
}
