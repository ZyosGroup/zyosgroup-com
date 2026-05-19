import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { CtaButton } from "@/components/ui/Button";
import { PageSchema } from "@/components/seo/PageSchema";
import { SITE } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Who we serve — SMBs, Private Equity, Associations | Zyos Group",
  description:
    "Zyos Group targets three ICPs: High-Growth SMBs, Private Equity firms + portfolio companies, and Associations. Same operating model. Context-specific architecture.",
  alternates: { canonical: "/who-we-serve" },
};

const ICPS = [
  {
    title: "High-Growth SMBs",
    href: "/who-we-serve/high-growth-smbs",
    pain: "The founder's playbook isn't keeping up.",
    primary: "Primarily GaaS · also Build & Operate Retainer for transformation work.",
    body: "10–200-employee B2B on a growth trajectory. We productize how you operate so the next hire and the next customer cost less than the last.",
  },
  {
    title: "Private Equity",
    href: "/who-we-serve/private-equity",
    pain: "Repeatable value-creation across the portfolio.",
    primary: "Primarily Build & Operate Retainer · also AaaS for portco-specific motions.",
    body: "PE firms + portfolio companies. Same Zyos OS underneath every engagement — so engagement-N is faster, cheaper, and better-measured than N–1.",
  },
  {
    title: "Associations",
    href: "/who-we-serve/associations",
    pain: "Member experience in a regulated, multi-stakeholder reality.",
    primary: "Primarily Build & Operate Retainer · AMS-aware architecture.",
    body: "Non-profit + member organizations. AMS-aware architecture (iMIS, NetForum, Personify in scoping). Audit trails, human-in-loop defaults, ownership matrices.",
  },
];

export default function WhoWeServePage() {
  return (
    <>
      <PageSchema
        path="/who-we-serve"
        name="Who Zyos Group serves"
        description="Three ICPs: High-Growth SMBs, Private Equity, and Associations."
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Who we serve", url: `${SITE.url}/who-we-serve` },
        ]}
      />

      <Section>
        <p className="eyebrow mb-4">Who we serve</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tightish text-primary leading-[1.05] max-w-4xl">
          Three ICPs. Same operating model. Architecture tuned to context.
        </h1>

        <div className="mt-10 max-w-3xl">
          <QuickAnswer>
            Zyos Group targets three ICPs: High-Growth SMBs (10–200 employees,
            scaling fast), Private Equity (firms plus portfolio companies
            needing repeatable value-creation), and Associations (non-profit
            and member organizations with AMS-aware, multi-stakeholder
            reality). The operating model — Measure, Deliver, Continuously
            Improve — is the same across all three. The architecture —
            regulated, complex, or growth-stage — is context-specific.
          </QuickAnswer>
        </div>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="Pick your ICP"
          title="Each page leads with the specific pain shape and the primary engagement model."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {ICPS.map((i) => (
            <Link
              key={i.title}
              href={i.href}
              className="group rounded-lg border border-border bg-bg p-6 hover:border-primary/40 transition-colors flex flex-col"
            >
              <h3 className="text-xl font-semibold text-primary tracking-tightish">
                {i.title}
              </h3>
              <p className="mt-3 text-sm mono text-accent">{i.pain}</p>
              <p className="mt-4 text-[15px] text-ink/80 leading-relaxed flex-1">
                {i.body}
              </p>
              <p className="mt-4 mono text-[11px] uppercase tracking-[0.16em] text-subtle">
                {i.primary}
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-primary/85 group-hover:text-primary">
                <span>Read more</span>
                <ArrowUpRight aria-hidden className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-primary text-white">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] items-end">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-accent">
              Not sure which ICP fits?
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tightish text-white">
              Run the Opportunity Engine intake.
            </h2>
            <p className="mt-4 text-white/80 max-w-prose">
              The diagnostic identifies your fit and recommends the engagement
              shape — including whether your shape is one we don&apos;t serve
              well (in which case we&apos;ll tell you who would).
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
