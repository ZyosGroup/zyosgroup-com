import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { CtaButton } from "@/components/ui/Button";
import { PageSchema } from "@/components/seo/PageSchema";
import { SITE } from "@/lib/site";

// Target: "ai for private equity" (140/mo, KD 0, $22 CPC) + "portfolio
// operations" niche per ZYOS-KEYWORD-MAP.md A2.
export const metadata: Metadata = {
  title: "AI for Private Equity: Portfolio Value Creation | Zyos Group",
  description:
    "AI for private equity: maturity assessment per holding, operating-model rollout, and agentic AI across the portfolio. One vendor, operations, technology, data, software, on one OS.",
  alternates: { canonical: "/who-we-serve/private-equity" },
};

const PE_PATTERNS = [
  {
    t: "Per-holding maturity assessment",
    b: "The five-dimension scorecard run against each portfolio company gives the PE team a comparable readiness map across the portfolio, and routes investment into the holdings with the biggest unlock.",
  },
  {
    t: "Standardized operating model",
    b: "Same OS, different architectures. The operating model, Measure → Deliver → Continuously Improve, rolls out consistently across holdings while the architecture stays context-specific.",
  },
  {
    t: "Cross-portfolio agent deployments",
    b: "Agents productized at one portco compound when redeployed to the next. The platform IP retained on Zyos OS makes engagement-N faster than N–1.",
  },
  {
    t: "QBR cadence with the deal team",
    b: "Per-portco QBR + a roll-up review with the PE team. Value-impact recap + variance vs target + re-prioritization, the artifact the IC can defend.",
  },
];

export default function PrivateEquityPage() {
  return (
    <>
      <PageSchema
        path="/who-we-serve/private-equity"
        name="Zyos Group for Private Equity"
        description="Repeatable value creation across PE portfolios via maturity assessment, operating-model rollout, and agentic AI."
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Who we serve", url: `${SITE.url}/who-we-serve` },
          { name: "Private Equity", url: `${SITE.url}/who-we-serve/private-equity` },
        ]}
      />

      <Section>
        <p className="eyebrow mb-4">Who we serve · AI for Private Equity</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tightish text-primary leading-[1.05] max-w-4xl">
          AI for private equity: repeatable value creation across the portfolio.
        </h1>

        <div className="mt-10 max-w-3xl">
          <QuickAnswer>
            Zyos Group brings AI to private equity firms and their portfolio
            companies. We assess operational maturity per holding, architect the
            right solution per context (regulated, complex, or growth-stage),
            and roll out the operating model that compounds value-impact across
            the portfolio. As one vendor across operations, technology, data,
            and software, on one Zyos OS, engagement-N is faster and
            better-measured than N–1. Flexible engagement: Build & Operate
            Retainer (primary), Standard Retainer, or As-A-Service per motion.
          </QuickAnswer>
        </div>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="Four patterns"
          title="How agentic transformation actually compounds across a PE portfolio."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {PE_PATTERNS.map((p, i) => (
            <article
              key={p.t}
              className="rounded-lg border border-border bg-bg p-6"
            >
              <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
                Pattern 0{i + 1}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-primary tracking-tightish">
                {p.t}
              </h3>
              <p className="mt-3 text-[15px] text-ink/80 leading-relaxed">
                {p.b}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Primary offering"
          title="Build & Operate Retainer for rapid transformation per portco."
          description="Productized for build+ops engagements where the spec is intentionally incomplete at signing. The discovery happens IN the engagement, exactly the shape PE value-creation work usually needs."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 max-w-4xl">
          <Link
            href="/consulting/digital-transformation"
            className="rounded-lg border border-border bg-surface p-6 hover:border-primary/40 transition-colors flex flex-col"
          >
            <p className="mono text-[11px] uppercase tracking-[0.16em] text-accent">
              Primary
            </p>
            <h3 className="mt-1 text-xl font-semibold text-primary tracking-tightish">
              Build & Operate Retainer
            </h3>
            <p className="mt-3 text-[15px] text-ink/80 leading-relaxed flex-1">
              Build the transformation, then run it. Customer owns the
              solution at exit. Scoped per portfolio company, discovery
              happens in the engagement.
            </p>
            <p className="mt-4 text-sm text-primary hover:underline">
              Read more →
            </p>
          </Link>
          <Link
            href="/solutions/agent-as-a-service"
            className="rounded-lg border border-border bg-surface p-6 hover:border-primary/40 transition-colors flex flex-col"
          >
            <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
              Secondary
            </p>
            <h3 className="mt-1 text-xl font-semibold text-primary tracking-tightish">
              Agent as a Service
            </h3>
            <p className="mt-3 text-[15px] text-ink/80 leading-relaxed flex-1">
              Productized agent workflows for specific portco-level motions , 
              outbound, content, support, finance reconciliation. Same agents
              redeployable across holdings.
            </p>
            <p className="mt-4 text-sm text-primary hover:underline">
              Read more →
            </p>
          </Link>
        </div>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="Exit readiness"
          title="The portfolio company owns what we build."
          description="Every Architecture Brief addresses ownership, portability, vendor-lock-in mitigation, and the customer's ability to take the solution independent if the Zyos relationship ends. Retention through value, not through capture."
        />
      </Section>

      <Section className="bg-primary text-white">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] items-end">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-accent">
              For PE deal teams + operating partners
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tightish text-white">
              One conversation per portco. One operating model across all.
            </h2>
            <p className="mt-4 text-white/80 max-w-prose">
              Start with the holding that has the biggest readiness-vs-upside
              gap. The Opportunity Engine identifies it.
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
