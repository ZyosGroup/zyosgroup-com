import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { CtaButton } from "@/components/ui/Button";
import { PageSchema } from "@/components/seo/PageSchema";
import { Faq } from "@/components/seo/Faq";
import { SITE } from "@/lib/site";

const FRAMEWORK_FAQS = [
  {
    q: "What is an AI readiness assessment?",
    a: "An AI readiness assessment scores a company across the dimensions that determine whether AI investment will yield value. The Zyos Readiness + Maturity Scorecard scores five dimensions, Process maturity, Technology and integration, Data quality and visibility, Process Automation and AI foundation, and People and knowledge risk, each rated 1 to 5. The composite Readiness Score (RS) drives the routing decision before any SOW is written.",
  },
  {
    q: "What does the Zyos Readiness Score mean?",
    a: "The Readiness Score (RS) routes the engagement decision in three honest shapes. RS ≥ 3.0: Engagement recommended, proceed to PI Implementation. RS 2.0 to 2.9: Conditions to address, specific gaps to close before engaging. RS < 2.0: Not yet, revisit, we disqualify honestly and name the conditions that would change the answer. Disqualification is the trust signal.",
  },
  {
    q: "How long does the assessment take?",
    a: "The Opportunity Engine intake takes about ninety seconds, four questions about your industry, size, and current bottleneck. An automated diagnostic snapshot lands in your inbox within sixty minutes. A human-reviewed scoped proposal with the routing decision and value-impact OKRs lands by the next business day.",
  },
  {
    q: "What are the five dimensions Zyos scores?",
    a: "Process maturity (how documented, repeatable, measured your processes are). Technology and integration (what's integrated vs siloed, modern vs legacy). Data quality and visibility (trustworthy, current, addressable data). Process Automation and AI foundation (prior wins, current pilots, internal literacy, change-tolerance). People and knowledge risk (how concentrated critical knowledge is, change-tolerance).",
  },
  {
    q: "Why does Zyos disqualify engagements?",
    a: "Firms desperate for revenue accept every engagement. Firms operating at quality refuse engagements that won't yield value. We publish the 'Not yet, revisit' routing decision because prospects who see we'll say no to bad-fit engagements trust us more on engagements we do accept. The published disqualification is the trust signal, and the scoped 'conditions that would change the answer' is the path back.",
  },
];

// Primary KW: "ai readiness assessment" (vol 590, KD 15) per research §6.2.
export const metadata: Metadata = {
  title: "Framework: AI Readiness + Maturity Assessment",
  description:
    "The Zyos Readiness and Maturity Scorecard: five dimensions scored before any SOW, producing a clear routing decision. AI readiness, quantified.",
  alternates: { canonical: "/framework" },
};

const DIMENSIONS = [
  {
    name: "Process maturity",
    body: "How documented, repeatable, and measured your operating processes are today. Low scores need process mapping before automation; high scores are ready for agent intervention.",
  },
  {
    name: "Technology and integration",
    body: "The shape of your stack, what's integrated vs siloed, what's modern vs legacy, what's documented vs tribal. Drives whether agents have systems to pull signals from + act on.",
  },
  {
    name: "Data quality and visibility",
    body: "Is your data trustworthy, current, and addressable? Agents amplify data discipline; they don't substitute for it. Low scores need instrumentation before agents.",
  },
  {
    name: "Process Automation and AI foundation",
    body: "Where you are on the automation-and-AI adoption curve. Includes prior wins, current pilots, internal AI literacy, and the change-tolerance for AI-driven workflows.",
  },
  {
    name: "People and knowledge risk",
    body: "How concentrated critical knowledge is in individuals, how much process lives in heads vs documents, and how change-tolerant the org culture is.",
  },
];

const JOURNEY_STAGES = [
  {
    label: "Stage 1, Assess",
    title: "Where are we on the agentic-readiness curve?",
    body: "Opportunity Engine intake (90 seconds) + automated diagnostic (within 60 minutes) + scoped proposal (next business day). The five-dimension scorecard surfaces here.",
    href: "/framework",
    current: true,
  },
  {
    label: "Stage 2, Foundation",
    title: "Build the integrated foundation.",
    body: "PI Implementation (the first delivery cycle) + Solution Architecture brief. Security, ownership, maintenance, evolution articulated in writing.",
    href: "/foundation",
  },
  {
    label: "Stage 3, Roadmap",
    title: "Execute the prioritized backlog in monthly cycles.",
    body: "Each cycle ships a measurable outcome. Quarterly re-prioritization is transparent, what's being killed, promoted, and deferred is visible.",
    href: "/how-we-deliver",
  },
  {
    label: "Stage 4, Agentic-driven",
    title: "Operate as an agentic-driven company.",
    body: "Agents handle the work that should be agents. Humans handle the work that should be humans. BI tells you what's working. Operations adjusts continuously.",
    href: "/platform",
  },
];

const ROUTING_OUTCOMES = [
  {
    score: "RS ≥ 3.0",
    label: "Engagement recommended",
    body: "Partnered approach fits. Proceed to PI Implementation + the first delivery cycle. The scoped proposal lands by next business day with named owners and value-impact OKRs.",
    tone: "go" as const,
  },
  {
    score: "RS 2.0–2.9",
    label: "Conditions to address",
    body: "Partnered approach can work, but specific gaps need to close first. We articulate the gaps. You address them. Then we engage. The proposal names exactly what to fix and how long it typically takes.",
    tone: "hold" as const,
  },
  {
    score: "RS < 2.0",
    label: "Not yet, revisit",
    body: "Partnered approach won't yield value yet. We disqualify the engagement honestly, name the conditions that would change the answer, and tell you when to come back. Disqualification is the trust signal.",
    tone: "stop" as const,
  },
];

const toneStyles: Record<"go" | "hold" | "stop", string> = {
  go: "border-accent/30 bg-accent/5",
  hold: "border-primary/15 bg-surface",
  stop: "border-border bg-bg",
};

export default function FrameworkPage() {
  return (
    <>
      <PageSchema
        path="/framework"
        name="The Zyos Framework: Stage 1, Assess"
        description="Readiness & Maturity scorecard, five-dimension scoring model, and Opportunity Engine diagnostic. Routing decisions use the canonical Zyos language."
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Framework", url: `${SITE.url}/framework` },
        ]}
      />

      <Section>
        <p className="eyebrow mb-4">Framework · Stage 1, Assess</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tightish text-primary leading-[1.05] max-w-4xl">
          Measure the opportunity before we promise the outcome.
        </h1>

        <div className="mt-10 max-w-3xl">
          <QuickAnswer>
            The Zyos Readiness + Maturity Scorecard rates a company across five
            dimensions before any SOW: Process Maturity, Tech + Integration,
            Data Quality, Automation + AI Readiness, People + Knowledge Risk.
            Score 1–5 per dimension. Routing decision: Engagement recommended
            (RS ≥ 3.0), Conditions to address (2.0–2.9), or Not yet, revisit
            (&lt; 2.0). Stage 1 of the four-stage Customer Journey.
          </QuickAnswer>
        </div>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="The five dimensions"
          title="What we score before we scope."
          description="Each dimension is rated 1–5 based on the four-question intake + the diagnostic pass. The composite Readiness Score (RS) routes the engagement decision."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {DIMENSIONS.map((d, i) => (
            <article
              key={d.name}
              className="rounded-lg border border-border bg-bg p-6"
            >
              <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
                Dimension 0{i + 1}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-primary tracking-tightish">
                {d.name}
              </h3>
              <p className="mt-3 text-[15px] text-ink/80 leading-relaxed">
                {d.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Routing, the predict-the-fit filter"
          title="The honest answer comes back in three shapes."
          description="Firms desperate for revenue accept every engagement. Firms operating at quality refuse the engagements that won't yield value. The 'Not yet, revisit' outcome is published, not buried."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {ROUTING_OUTCOMES.map((o) => (
            <article
              key={o.score}
              className={`rounded-lg border p-6 ${toneStyles[o.tone]}`}
            >
              <p className="mono text-[11px] uppercase tracking-[0.16em] text-accent">
                {o.score}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-primary tracking-tightish">
                {o.label}
              </h3>
              <p className="mt-3 text-[15px] text-ink/80 leading-relaxed">
                {o.body}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-prose text-[15px] text-ink/85 leading-relaxed">
          Prospects who see we&apos;ll say no to bad-fit engagements trust us
          more on the engagements we do accept. That&apos;s why disqualification
          is featured here, not hidden.
        </p>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="The four-stage Customer Journey"
          title="From traditional to agentic-driven, in four measurable stages."
          description="Each stage has an ROI gate. Each stage has a named artifact. Each stage is a page on this site."
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-2">
          {JOURNEY_STAGES.map((s) => (
            <li
              key={s.label}
              className={`rounded-lg border ${
                s.current ? "border-accent/30 bg-accent/5" : "border-border bg-bg"
              } p-6 flex flex-col`}
            >
              <p className="mono text-[11px] uppercase tracking-[0.16em] text-accent">
                {s.label}
                {s.current ? " · you are here" : ""}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-primary tracking-tightish">
                {s.title}
              </h3>
              <p className="mt-2 text-[15px] text-ink/80 leading-relaxed flex-1">
                {s.body}
              </p>
              {!s.current ? (
                <Link
                  href={s.href}
                  className="mt-4 text-sm text-primary hover:underline"
                >
                  Read more →
                </Link>
              ) : null}
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="ROI gate"
          title="Every detected gap gets an estimated value-impact and an expected payback period."
          description="Engagements that can't articulate ROI within reasonable confidence don't proceed. Engagements that can are rank-ordered by quantified upside, not by political preference."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 max-w-4xl">
          <article className="rounded-lg border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold text-primary tracking-tightish">
              The intake → diagnostic → proposal flow
            </h3>
            <ul className="mt-3 space-y-2 text-[15px] text-ink/80 leading-relaxed">
              <li>· Four-question intake on /start (90 seconds)</li>
              <li>· Automated diagnostic snapshot in your inbox within 60 minutes</li>
              <li>· Human-reviewed scoped proposal by next business day</li>
              <li>· Proposal names the routing decision + value-impact OKRs</li>
            </ul>
          </article>
          <article className="rounded-lg border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold text-primary tracking-tightish">
              What you walk away with, even if we don&apos;t engage
            </h3>
            <ul className="mt-3 space-y-2 text-[15px] text-ink/80 leading-relaxed">
              <li>· Your composite Readiness Score across five dimensions</li>
              <li>· Named gaps with rough value-impact estimates</li>
              <li>· The honest routing decision in writing</li>
              <li>· If &quot;Not yet, revisit,&quot; the conditions that would change the answer</li>
            </ul>
          </article>
        </div>
      </Section>

      <Faq
        eyebrow="AI readiness assessment, FAQ"
        title="What buyers ask about the Zyos Framework."
        description="Direct from prospect calls. Each answer is published as FAQPage schema so AI Overviews and answer engines can lift it cleanly."
        faqs={FRAMEWORK_FAQS}
      />

      <Section className="bg-primary text-white">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] items-end">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-accent">
              Ready when you are
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tightish text-white">
              Run the Opportunity Engine intake.
            </h2>
            <p className="mt-4 text-white/80 max-w-prose">
              Four questions. Ninety seconds. Diagnostic in your inbox within
              60 minutes. Scoped proposal by next business day. The routing
              decision will be honest.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <CtaButton href="/start">Start your intake</CtaButton>
            <Link
              href="/foundation"
              className="inline-flex items-center gap-2 text-white/85 hover:text-white text-sm"
            >
              Stage 2, Foundation →
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
