import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { CtaButton } from "@/components/ui/Button";
import { PageSchema } from "@/components/seo/PageSchema";
import { SITE } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions: Agent + Growth as a Service | Zyos Group",
  description:
    "Zyos Group Solutions: productized continuous services. Agent as a Service and Growth as a Service. Continuous, scoped variants, platform-led.",
  alternates: { canonical: "/solutions" },
};

const SOLUTIONS = [
  {
    title: "Agent as a Service, AaaS",
    href: "/solutions/agent-as-a-service",
    quick:
      "We design, deploy, and run AI agents on your behalf, across sales, marketing, support, operations, finance, HR. You don't manage prompts, infrastructure, or agent reliability. We do, as a service.",
    variants: ["Workflows", "Systems", "Middleware", "Lean", "Insights"],
    keyword: "agentic ai consulting · KD 5",
  },
  {
    title: "Growth as a Service, GaaS",
    href: "/solutions/growth-as-a-service",
    quick:
      "Continuous growth operations for SMB B2B, website, GBP, ads + LSA, SEO content, GEO. The only productized agentic-AI play visible at SMB-tier monthly pricing. Powered by Zyos OS.",
    variants: ["Website", "GBP", "Ads + LSA", "SEO content", "GEO"],
    keyword: "growth as a service · KD 0, own the category",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageSchema
        path="/solutions"
        name="Zyos Group Solutions"
        description="Productized continuous services, Agent as a Service (AaaS) and Growth as a Service (GaaS)."
        service={{ type: "Agentic AI consulting" }}
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Solutions", url: `${SITE.url}/solutions` },
        ]}
      />

      <Section>
        <p className="eyebrow mb-4">Solutions arm</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tightish text-primary leading-[1.05] max-w-4xl">
          Productized continuous services. Platform-led. Measured.
        </h1>

        <div className="mt-10 max-w-3xl">
          <QuickAnswer>
            Zyos Group Solutions is our productized continuous-service arm. Two
            parent offerings: Agent as a Service (AaaS: Workflows, Systems,
            Middleware, Lean, Insights variants) and Growth as a Service (GaaS:
            Website, GBP, Ads + LSA, SEO content, GEO variants). Always
            As-A-Service: continuous, defined SLA, support included. Every
            engagement begins with Process Intelligence Implementation as the
            first delivery cycle.
          </QuickAnswer>
        </div>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="Two parent offerings"
          title="Same operating system. Different productized motion."
          description="Both run on Zyos OS, both ship monthly delivery cycles, both use the same QBR + monthly-report cadence. The difference is what the agents operate."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {SOLUTIONS.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group rounded-lg border border-border bg-bg p-6 hover:border-primary/40 transition-colors flex flex-col"
            >
              <p className="mono text-[11px] uppercase tracking-[0.16em] text-accent">
                {s.keyword}
              </p>
              <h3 className="mt-1 text-2xl font-semibold text-primary tracking-tightish">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] text-ink/80 leading-relaxed flex-1">
                {s.quick}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {s.variants.map((v) => (
                  <span
                    key={v}
                    className="mono text-[11px] rounded bg-surface text-ink/75 px-2 py-0.5 border border-border"
                  >
                    {v}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2 text-sm text-primary/85 group-hover:text-primary">
                <span>Read more</span>
                <ArrowUpRight aria-hidden className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="How Solutions buy"
          title="Always As-A-Service. Support baked in. PI Implementation always Sprint 1."
          description="Solutions is the productized arm. The Consulting arm (Software & Data, Digital Transformation, Operations & Scaling, Integrated Marketing) is the human-led, scoped, expert work. They run on the same operating system."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3 max-w-4xl">
          {[
            {
              t: "Engagement model",
              b: "As-A-Service, continuous, scoped by variant. No project-based work in Solutions.",
            },
            {
              t: "Support",
              b: "Included in the service. The Zyos Service Desk handles ticketing + SLA + escalation routing.",
            },
            {
              t: "First delivery cycle",
              b: "Process Intelligence Implementation, always. Customers who refuse PI are customers we politely decline.",
            },
          ].map((c) => (
            <article
              key={c.t}
              className="rounded-lg border border-border bg-surface p-5"
            >
              <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
                {c.t}
              </p>
              <p className="mt-2 text-[15px] text-ink/85 leading-relaxed">
                {c.b}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-primary text-white">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] items-end">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-accent">
              Pick your starting motion
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tightish text-white">
              Or run the Opportunity Engine and we&apos;ll recommend.
            </h2>
            <p className="mt-4 text-white/80 max-w-prose">
              The diagnostic might recommend AaaS, GaaS, a Consulting
              engagement, or a hybrid. The routing decision is the proposal.
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
