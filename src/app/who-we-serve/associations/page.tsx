import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { CtaButton } from "@/components/ui/Button";
import { PageSchema } from "@/components/seo/PageSchema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "For Associations — Member Experience + AMS-aware AI | Zyos Group",
  description:
    "Zyos Group for non-profit and member organizations. AMS-aware architecture, member content operations, audit-trail discipline, regulated multi-stakeholder reality.",
  alternates: { canonical: "/who-we-serve/associations" },
};

const ASSOCIATION_REALITIES = [
  {
    t: "AMS as system of record",
    b: "iMIS, NetForum, Personify, or YourMembership sits at the center. Architecture treats the AMS as authoritative and layers integrations + agents on top without disrupting governance.",
  },
  {
    t: "Multi-stakeholder governance",
    b: "Volunteer leadership + staff + members + sponsors all have decision rights. Operating-model rollouts respect this — Visible Kanban exposes the work to volunteer leadership in plain language.",
  },
  {
    t: "Regulated context",
    b: "Member privacy, financial controls, FERPA-adjacent education content, healthcare-adjacent CE tracking — architecture is conservative by default. Audit trails on, human-in-loop defaults on.",
  },
  {
    t: "Content operations at scale",
    b: "Members want fresh content. Content engine + GEO ensures the association's expertise is the cited source — not displaced by AI-only competitors.",
  },
];

export default function AssociationsPage() {
  return (
    <>
      <PageSchema
        path="/who-we-serve/associations"
        name="Zyos Group for Associations"
        description="Member experience, content operations, and AMS-aware architectures for non-profit and member organizations."
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Who we serve", url: `${SITE.url}/who-we-serve` },
          { name: "Associations", url: `${SITE.url}/who-we-serve/associations` },
        ]}
      />

      <Section>
        <p className="eyebrow mb-4">Who we serve · Associations</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tightish text-primary leading-[1.05] max-w-4xl">
          Built for the multi-stakeholder, regulated reality associations live
          in.
        </h1>

        <div className="mt-10 max-w-3xl">
          <QuickAnswer>
            Zyos Group serves non-profit and member organizations. Member
            experience, content operations, and AMS-aware architectures (iMIS,
            NetForum, Personify in scoping context). Architecture is
            conservative where regulation demands — audit trails, human-in-loop
            defaults, clear ownership matrices. Engagement models: Build &
            Operate Retainer (primary, for tech rebuilds + member engagement
            programs), Fixed Price for defined builds, or As-A-Service for
            ongoing growth operations.
          </QuickAnswer>
        </div>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="The four realities"
          title="What makes association engagements different from corporate ones."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {ASSOCIATION_REALITIES.map((r, i) => (
            <article
              key={r.t}
              className="rounded-lg border border-border bg-bg p-6"
            >
              <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
                Reality 0{i + 1}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-primary tracking-tightish">
                {r.t}
              </h3>
              <p className="mt-3 text-[15px] text-ink/80 leading-relaxed">
                {r.b}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Primary offering"
          title="Build & Operate Retainer for tech rebuilds + member engagement."
          description="Most association engagements are a hybrid — there's a build phase (the new portal, the AMS migration, the CE-tracking rebuild) and an ongoing operate phase (member engagement, content cadence, agent operations)."
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
              Build the new surface (portal / migration / rebuild), then
              operate it. The build phase and operate phase are explicitly
              separated in monthly reports.
            </p>
            <p className="mt-4 text-sm text-primary hover:underline">
              Read more →
            </p>
          </Link>
          <Link
            href="/consulting/integrated-marketing"
            className="rounded-lg border border-border bg-surface p-6 hover:border-primary/40 transition-colors flex flex-col"
          >
            <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
              Secondary
            </p>
            <h3 className="mt-1 text-xl font-semibold text-primary tracking-tightish">
              Integrated Marketing
            </h3>
            <p className="mt-3 text-[15px] text-ink/80 leading-relaxed flex-1">
              Content engine + GEO to make sure the association&apos;s
              expertise is the cited source. Member engagement programs run on
              the same cadence.
            </p>
            <p className="mt-4 text-sm text-primary hover:underline">
              Read more →
            </p>
          </Link>
        </div>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="AMS-aware architecture"
          title="iMIS · NetForum · Personify — used in scoping context only."
          description="Per CLAUDE.md, vendor names appear in scoping context (so we can talk fluently about your stack) but not in client-facing marketing. The Architecture Brief addresses ownership, portability, and audit trails for the AMS-integrated layer."
        />
      </Section>

      <Section className="bg-primary text-white">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] items-end">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-accent">
              For executive directors + member experience leads
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tightish text-white">
              The builder doesn&apos;t disappear when the build ships.
            </h2>
            <p className="mt-4 text-white/80 max-w-prose">
              Most association tech projects are abandoned the day the contract
              ends. Build & Operate Retainer keeps the partner on the
              engagement — measured, reported, re-prioritized each quarter.
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
