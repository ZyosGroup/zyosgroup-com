import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { CtaButton } from "@/components/ui/Button";
import { PageSchema } from "@/components/seo/PageSchema";
import { OutcomeCard, SAMPLE_OUTCOMES } from "@/components/showcases/OutcomeCard";
import { SITE } from "@/lib/site";

// Target: "ai automation for small business" (210/mo, $22 CPC) + "ai
// consulting for small business" niche per ZYOS-KEYWORD-MAP.md A2. SMB is the
// HIGHLIGHTED ICP among the three.
export const metadata: Metadata = {
  title: "AI Automation for Small Business: High-Growth SMBs",
  description:
    "AI automation for high-growth SMBs: one vendor across operations, technology, data, and software. Productize how you operate, without an enterprise budget.",
  alternates: { canonical: "/who-we-serve/high-growth-smbs" },
};

const PAIN_SHAPES = [
  "The founder's playbook lives in heads, not docs, and the next hire learns by osmosis.",
  "Marketing, sales, and operations talk past each other because nothing's instrumented end-to-end.",
  "Customer success is &quot;send Paul a Slack&quot;, no cadence, no QBR, no recurring proof.",
  "The next 10 customers can't be onboarded with the same effort as the first 10.",
  "Tech stack is duct-taped together, every new tool adds integration work nobody owns.",
];

const SMB_OUTCOMES = SAMPLE_OUTCOMES.filter(
  (o) => o.industry === "SMB services" || o.engagementModel === "GaaS"
);

export default function HighGrowthSmbsPage() {
  return (
    <>
      <PageSchema
        path="/who-we-serve/high-growth-smbs"
        name="Zyos Group for High-Growth SMBs"
        description="Productized operating model + agentic AI + growth-as-a-service for 10–200-employee B2B."
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Who we serve", url: `${SITE.url}/who-we-serve` },
          { name: "High-Growth SMBs", url: `${SITE.url}/who-we-serve/high-growth-smbs` },
        ]}
      />

      <Section>
        <p className="eyebrow mb-4">Who we serve · AI for High-Growth SMBs</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tightish text-primary leading-[1.05] max-w-4xl">
          You&apos;re scaling. The founder&apos;s playbook isn&apos;t keeping
          up.
        </h1>

        <div className="mt-10 max-w-3xl">
          <QuickAnswer>
            AI automation and consulting for high-growth SMBs, 10–200-employee
            B2B companies on a growth trajectory. We productize how you operate
            so the next hire and the next customer cost less than the last:
            operating-model design, integrated marketing, Growth as a Service,
            Agent as a Service. One vendor across operations, technology, data,
            and software, enterprise-grade structure, right-sized for an SMB,
            without an enterprise budget or a data-science team. Start with the
            Opportunity Engine intake.
          </QuickAnswer>
        </div>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="The pain shape"
          title="Five patterns we see in the first 30 days."
          description="If 3+ of these sound right, the Opportunity Engine will probably route you to GaaS, AaaS, or a Build & Operate Retainer."
        />
        <ul className="mt-10 grid gap-3 max-w-3xl">
          {PAIN_SHAPES.map((p, i) => (
            <li
              key={i}
              className="rounded-md border border-border bg-bg p-4 flex gap-4"
            >
              <span className="mono text-[11px] uppercase tracking-[0.16em] text-subtle pt-1">
                0{i + 1}
              </span>
              <span
                className="text-[15px] text-ink/85 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Primary offering"
          title="Growth as a Service first. Build & Operate Retainer when the operating model itself needs rebuilding."
          description="GaaS productizes the marketing + growth motion. Build & Operate Retainer is the build-then-run shape for deeper transformation work. AaaS layers on when specific agent workflows compound."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 max-w-4xl">
          <Link
            href="/solutions/growth-as-a-service"
            className="rounded-lg border border-border bg-surface p-6 hover:border-primary/40 transition-colors flex flex-col"
          >
            <p className="mono text-[11px] uppercase tracking-[0.16em] text-accent">
              Primary
            </p>
            <h3 className="mt-1 text-xl font-semibold text-primary tracking-tightish">
              Growth as a Service
            </h3>
            <p className="mt-3 text-[15px] text-ink/80 leading-relaxed flex-1">
              Continuous growth operations, website, GBP, ads + LSA, SEO
              content, GEO, operated on Zyos OS, measured against quarterly
              OKRs. McMahons and FSM are live on this motion.
            </p>
            <p className="mt-4 text-sm text-primary hover:underline">
              Read more →
            </p>
          </Link>
          <Link
            href="/consulting/digital-transformation"
            className="rounded-lg border border-border bg-surface p-6 hover:border-primary/40 transition-colors flex flex-col"
          >
            <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
              Secondary
            </p>
            <h3 className="mt-1 text-xl font-semibold text-primary tracking-tightish">
              Build & Operate Retainer
            </h3>
            <p className="mt-3 text-[15px] text-ink/80 leading-relaxed flex-1">
              For when the operating model itself needs rebuilding.
              Build-then-run, discovery happens IN the engagement, and you own
              the solution at exit.
            </p>
            <p className="mt-4 text-sm text-primary hover:underline">
              Read more →
            </p>
          </Link>
        </div>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="Proof"
          title="Two live GaaS customers · outcomes catalog anonymized where required."
          description="McMahon's Jersey Shore Powerwash and Fresh Start Movers are live GaaS engagements today. Full case studies are in production; permission-pending tags will clear as customer reviews land."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SMB_OUTCOMES.map((o, i) => (
            <OutcomeCard key={i} outcome={o} />
          ))}
        </div>
      </Section>

      <Section className="bg-primary text-white">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] items-end">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-accent">
              For high-growth B2B
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tightish text-white">
              Productize the playbook.
            </h2>
            <p className="mt-4 text-white/80 max-w-prose">
              You don&apos;t need more hands. You need a system that makes the
              hands you have go further, and onboards the next hire into
              something repeatable.
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
