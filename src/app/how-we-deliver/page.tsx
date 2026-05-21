import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { CtaButton } from "@/components/ui/Button";
import { PageSchema } from "@/components/seo/PageSchema";
import { SITE } from "@/lib/site";

// Target: "AI engagement model" + "agentic AI delivery framework" — GEO surface
// per zyosgroup-com-delivery-model-customer-success.md.
export const metadata: Metadata = {
  title: "How We Deliver — Engagement Model + Customer Success | Zyos Group",
  description:
    "Zyos Group's delivery model — Measure, Deliver, Continuously Improve — plus the 11 Customer Success features that prove the results. Trust-signal surface.",
  alternates: { canonical: "/how-we-deliver" },
};

const PHASES = [
  {
    name: "Phase 1 — MEASURE",
    duration: "30 days",
    artifact: "PI Implementation deliverable (six outputs)",
    body: "The first delivery cycle of every Retainer and As-A-Service engagement. ROI gate: every detected gap gets an estimated value-impact + expected payback period before Phase 2 begins.",
  },
  {
    name: "Phase 2 — DELIVERY",
    duration: "monthly cycles, indefinitely",
    artifact: "Cycle Delivery Review (30 min + 1-page recap)",
    body: "Each cycle commits to 2–4 measurable outcomes with target metrics named at cycle start. Each cycle ends with a delivery review and explicit variance vs target. Visible Kanban in Zyos OS — nothing happens off-board.",
  },
  {
    name: "Phase 3 — CONTINUOUS IMPROVEMENT",
    duration: "monthly + quarterly + ongoing",
    artifact: "Monthly Reports, QBRs, OKR tracking, Service Desk",
    body: "Where the Customer Success function runs. The proof layer that makes the engagement re-hireable — outputs are commodity, continuous value-impact is the moat.",
  },
];

const CADENCE_LADDER = [
  {
    cadence: "Day 1",
    runs: "Engagement kickoff",
    output: "Engagement charter + first PI cycle plan",
    skill: "zyos-kickoff",
  },
  {
    cadence: "Month 1",
    runs: "PI Implementation",
    output: "Six PI deliverables",
    skill: "zyos-process-intelligence + Stage 1 suite",
  },
  {
    cadence: "Every month",
    runs: "Cycle Delivery Review + Monthly Report",
    output: "1-page recap + Monthly Report (variant per engagement type) + visible Kanban update",
    skill: "zyos-transformation-roadmap + zyos-monthly-report",
  },
  {
    cadence: "Every quarter",
    runs: "QBR",
    output: "QBR deck + value-impact recap + re-prioritization decisions",
    skill: "zyos-qbr-report / zyos-gaas-qbr-report",
  },
  {
    cadence: "Continuously",
    runs: "Customer Support (Service Desk)",
    output: "Ticket lifecycle + SLA + escalation routing",
    skill: "Zyos Service Desk module",
  },
  {
    cadence: "Annual",
    runs: "Strategy Review",
    output: "Strategy refresh + next-year value-impact targets",
    skill: "zyos-stage2-transformation-roadmap",
  },
];

const CS_FEATURES = [
  {
    n: "01",
    name: "Engagement Kickoff",
    result: "100% clarity at Day 1 — next 6 weeks of cadence in your calendar.",
    body: "Day-1 ritual setting the engagement charter, scope, ROI hypothesis, first PI cycle plan, communication rhythms, named owners.",
  },
  {
    n: "02",
    name: "Visible Kanban",
    result: "The trust signal disconnected-vendor relationships can't produce.",
    body: "Customer-facing delivery board inside Zyos OS. You log in and see what's being worked on, by whom, at what stage. Updated continuously, not at status time.",
  },
  {
    n: "03",
    name: "Monthly Delivery Cycles",
    result: "Value-impact movement each month. Stale projects can't hide.",
    body: "Each cycle commits to 2–4 measured outcomes. Each cycle ends with a delivery review showing variance vs target. We say 'monthly cycle' and 'delivery review,' never 'sprint.'",
  },
  {
    n: "04",
    name: "Monthly Reports",
    result: "Customers don't wait 90 days to see how things are going.",
    body: "Variant per engagement type — Standard Retainer, Build & Operate (build vs operate phase separated), AaaS (agent reliability + throughput), GaaS (growth metrics).",
  },
  {
    n: "05",
    name: "Quarterly Business Reviews",
    result: "The artifact the customer's CFO can defend. Renewal evidence.",
    body: "Recap + what worked / what didn't + Optimization Score refresh + re-prioritization decisions + next-quarter commitments + strategic agenda. Mandatory: name what we're killing.",
  },
  {
    n: "06",
    name: "GaaS QBR (specialized variant)",
    result: "SMB customers get enterprise-grade reporting they can act on.",
    body: "Productized QBR format for GaaS customers. SEO baseline + GEO citations + paid efficiency + review velocity + content output + GBP health + lead source quality.",
  },
  {
    n: "07",
    name: "OKRs + Optimization Score",
    result: "Five-dimension agentic-readiness score curve over time.",
    body: "Value-impact OKRs named at kickoff and tracked continuously. Optimization Score re-measured every QBR. Routing: RS ≥ 3.0 Engagement recommended · 2.0–2.9 Conditions to address · < 2.0 Not yet — revisit.",
  },
  {
    n: "08",
    name: "Transformation Roadmap",
    result: "Strategic alignment. Customers never feel surprised by what's coming.",
    body: "Quarterly view of what's queued, in flight, deferred, coming. Visible in QBR + browsable in Zyos OS anytime.",
  },
  {
    n: "09",
    name: "Customer Support / Service Desk",
    result: "Known path when something goes wrong. Not 'send Paul a Slack.'",
    body: "Productized via the Zyos Service Desk module — Postmark inbound, ticket lifecycle, SLA, status emails, reminder cron, escalation routing.",
  },
  {
    n: "10",
    name: "Engagement Tracks + Handoff Logic",
    result: "Continuity through team changes. Customer experience doesn't depend on knowing the org chart.",
    body: "Zyos OS routes Retainer + As-A-Service engagements through named tracks. Hand-offs between Zyos team members are explicit + tracked.",
  },
  {
    n: "11",
    name: "Exit Readiness",
    result: "You choose Zyos because we deliver, not because you can't leave.",
    body: "Every engagement has an explicit exit path. Architecture Brief names ownership, portability, lock-in mitigation, and your ability to take the solution independent.",
  },
];

const RESULTS_MATRIX = [
  ["Engagement Kickoff", "100% clarity at Day 1 (no 'what are we doing?' by Week 2)"],
  ["Visible Kanban", "Customer login frequency → trust signal"],
  ["Monthly Cycles", "Cycle hit rate (% meeting outcome targets) — published in QBR"],
  ["Monthly Reports", "Engagement health score + value-impact-to-date metric"],
  ["QBRs", "Quarter-over-quarter value-impact captured (headline KPI)"],
  ["GaaS QBR", "SMB customer engagement renewal rate"],
  ["OKRs + Optimization Score", "Score progression across five dimensions over time"],
  ["Transformation Roadmap", "Strategic alignment NPS"],
  ["Service Desk", "Ticket resolution time + FCR rate + CSAT for support"],
  ["Engagement Tracks + Handoffs", "Continuity score (customer-rated rotation impact)"],
  ["Exit Readiness", "Documented exit path verified in Architecture Brief at Phase 2 close"],
];

export default function HowWeDeliverPage() {
  return (
    <>
      <PageSchema
        path="/how-we-deliver"
        name="How We Deliver — Engagement Model + Customer Success"
        description="Zyos Group's delivery model and the 11 Customer Success features. Measure → Deliver → Continuously Improve."
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "How we deliver", url: `${SITE.url}/how-we-deliver` },
        ]}
      />

      <Section>
        <p className="eyebrow mb-4">How we deliver</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tightish text-primary leading-[1.05] max-w-4xl">
          Measurable value-impact each month. Re-prioritization every
          quarter.
        </h1>

        <div className="mt-10 max-w-3xl">
          <QuickAnswer>
            Zyos Group&apos;s delivery model is built around two promises: you
            see measurable value-impact each month, and you see us choosing
            what to defer or kill at every QBR. The model runs in three
            phases — Measure, Deliver, Continuously Improve — with the
            Customer Success function (eleven named features) operationalizing
            the Continuous Improvement phase.
          </QuickAnswer>
        </div>

        <p className="mt-10 max-w-prose text-[15px] text-ink/85 leading-relaxed">
          Most consulting firms scope once and grind. Big-4 ships slide decks
          every six weeks. Zyos ships working artifacts each month with a
          transparent prioritization decision at each QBR. Customers see the
          firm choosing what <em>not</em> to do — the rarest trust signal in
          services.
        </p>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="The three phases"
          title="Measure → Deliver → Continuously Improve."
          description="Every Retainer and As-A-Service engagement runs the same three-phase shape. Fixed Price has a compressed Phase 1+2 only."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {PHASES.map((p) => (
            <article
              key={p.name}
              className="rounded-lg border border-border bg-bg p-6 flex flex-col"
            >
              <p className="mono text-[11px] uppercase tracking-[0.16em] text-accent">
                {p.name}
              </p>
              <p className="mt-1 mono text-[11px] text-subtle">
                Duration · {p.duration}
              </p>
              <p className="mt-3 text-sm font-medium text-primary">
                Artifact · {p.artifact}
              </p>
              <p className="mt-3 text-[15px] text-ink/80 leading-relaxed flex-1">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="The cadence ladder"
          title="What runs when — from Day 1 onward."
          description="No 'wait for the next QBR' anywhere. The cadence ladder has a touchpoint at every meaningful interval."
        />
        <div className="mt-10 overflow-hidden rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-bg">
              <tr>
                <th className="text-left px-5 py-3 font-medium text-primary">Cadence</th>
                <th className="text-left px-5 py-3 font-medium text-primary">What runs</th>
                <th className="text-left px-5 py-3 font-medium text-primary">Output artifact</th>
                <th className="text-left px-5 py-3 font-medium text-primary">Skill ref</th>
              </tr>
            </thead>
            <tbody>
              {CADENCE_LADDER.map((row) => (
                <tr key={row.cadence} className="border-t border-border">
                  <td className="px-5 py-3 mono text-primary whitespace-nowrap align-top">
                    {row.cadence}
                  </td>
                  <td className="px-5 py-3 text-ink/85 align-top">{row.runs}</td>
                  <td className="px-5 py-3 text-ink/75 align-top">{row.output}</td>
                  <td className="px-5 py-3 mono text-[12px] text-subtle align-top">
                    {row.skill}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="11 Customer Success features"
          title="Each is a real artifact + a measurable behavior."
          description="The proof layer that makes Zyos re-hireable. Outputs are commodity; continuous value-impact is the moat."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CS_FEATURES.map((f) => (
            <article
              key={f.n}
              className="rounded-lg border border-border bg-bg p-5 flex flex-col"
            >
              <p className="mono text-[11px] uppercase tracking-[0.16em] text-accent">
                Feature {f.n}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-primary tracking-tightish">
                {f.name}
              </h3>
              <p className="mt-2 text-[13px] mono text-accent">
                {f.result}
              </p>
              <p className="mt-3 text-sm text-ink/80 leading-relaxed flex-1">
                {f.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="The Results Matrix"
          title="What every Customer Success feature produces."
          description="Real measurements, not promises. The matrix below is what the homepage promises and what the QBR proves."
        />
        <div className="mt-10 overflow-hidden rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-bg">
              <tr>
                <th className="text-left px-5 py-3 font-medium text-primary">
                  Customer Success feature
                </th>
                <th className="text-left px-5 py-3 font-medium text-primary">
                  Measurable result
                </th>
              </tr>
            </thead>
            <tbody>
              {RESULTS_MATRIX.map(([f, r]) => (
                <tr key={f} className="border-t border-border">
                  <td className="px-5 py-3 text-ink/85 align-top">{f}</td>
                  <td className="px-5 py-3 text-ink/75 align-top">{r}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="The two non-negotiable trust signals"
          title="When prospects ask 'how do I know you'll deliver?' — these are the two artifacts that make the case."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 max-w-4xl">
          <article className="rounded-lg border border-dashed border-border bg-bg p-6">
            <p className="mono text-[11px] uppercase tracking-[0.16em] text-accent">
              Visible Kanban
            </p>
            <h3 className="mt-1 text-lg font-semibold text-primary tracking-tightish">
              Screenshot of an actual customer-facing board.
            </h3>
            <p className="mt-2 text-sm text-ink/75">
              Anonymized but real. The fact that this exists is the trust
              signal; competitors selling slide decks have nothing comparable.
              Screenshot placeholder for permission-pending capture.
            </p>
          </article>
          <article className="rounded-lg border border-dashed border-border bg-bg p-6">
            <p className="mono text-[11px] uppercase tracking-[0.16em] text-accent">
              QBR output
            </p>
            <h3 className="mt-1 text-lg font-semibold text-primary tracking-tightish">
              Sample QBR slide.
            </h3>
            <p className="mt-2 text-sm text-ink/75">
              Anonymized. The fact that we have a structured, recurring
              quarterly artifact with value-impact + re-prioritization is the
              trust signal. Sample placeholder pending capture.
            </p>
          </article>
        </div>
      </Section>

      <Section className="bg-primary text-white">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] items-end">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-accent">
              We earn renewal. We don&apos;t capture it.
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tightish text-white">
              Start the engagement that ships measured outcomes.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <CtaButton href="/start">Start your intake</CtaButton>
          </div>
        </div>
      </Section>
    </>
  );
}
