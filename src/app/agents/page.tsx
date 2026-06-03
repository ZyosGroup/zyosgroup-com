import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { CtaButton } from "@/components/ui/Button";
import { PageSchema } from "@/components/seo/PageSchema";
import { Faq } from "@/components/seo/Faq";
import { HeroAgentsMesh } from "@/components/brand/HeroAgentsMesh";
import { SITE } from "@/lib/site";

// Primary KW: "agentic ai" / "ai agents for business" — the agents-across-the-
// business story. Pairs the HeroAgentsMesh graphic (agents fanning across
// functions on a readied foundation) with copy that keeps agents as the show
// and the foundation as the thing that makes them work. Links to the
// productized service (/solutions/agent-as-a-service) and per-function examples.
export const metadata: Metadata = {
  title: "AI Agents Across Your Business",
  description:
    "AI agents running across every function: sales, operations, finance, support, and marketing. Orchestrated on a readied foundation, operated by a senior team.",
  alternates: { canonical: "/agents" },
};

const FUNCTIONS = [
  {
    title: "Sales",
    body: "Agents qualify and route inbound, keep the CRM clean, and draft follow-ups so reps spend their hours selling, not updating records.",
    href: "/by-function/sales",
  },
  {
    title: "Operations",
    body: "Agents watch throughput, surface bottlenecks, and trigger the next action before a delay becomes a missed commitment.",
    href: "/by-function/logistics",
  },
  {
    title: "Finance",
    body: "Agents reconcile transactions, flag anomalies, and assemble the monthly reporting pack for a human to review and sign off.",
    href: "/by-function/finance",
  },
  {
    title: "Support / IT",
    body: "Agents triage tickets, diagnose routine issues, and remediate, escalating only what genuinely needs a person.",
    href: "/by-function/information-technology",
  },
  {
    title: "Marketing",
    body: "A content engine drafts, optimizes, and schedules while agents run SEO, GEO, and reporting. Productized as Growth as a Service.",
    href: "/by-function/marketing",
  },
  {
    title: "Human Resources",
    body: "Agents handle candidate intake and screening, then run onboarding workflows end to end.",
    href: "/by-function/hr",
  },
];

const AGENT_FAQS = [
  {
    q: "What does it mean to run AI agents across the business?",
    a: "It means autonomous software workers operate and coordinate real work across functions, sales, operations, finance, support, marketing, rather than a single chatbot bolted onto one tool. At Zyos Group, agents pull your data signals, take actions in your systems, and hand off to each other and to people, all administered and improved on a continuous cadence by a senior team.",
  },
  {
    q: "Why do agents need a foundation first?",
    a: "An agent deployed on a process nobody has mapped automates chaos. An agent operating on data nobody has instrumented produces noise. Before agents orchestrate, Zyos builds the readied foundation they run on: documentation of how the work actually flows, the data and systems they act through, and the workflows they coordinate. Process Intelligence is where that foundation gets built, function by function.",
  },
  {
    q: "Are the agents autonomous, or is there a human in the loop?",
    a: "Both, by design. Routine, reversible, low-risk work runs autonomously. Anything customer-facing, irreversible, or high-stakes routes to a person. The autonomy level for each action is a deliberate decision recorded in the architecture, not a default, and it is tuned over time as trust and evidence accumulate.",
  },
  {
    q: "How is this different from Agent as a Service?",
    a: "Agent as a Service is the productized commercial model for having Zyos design, deploy, run, and continuously improve those agents for you. This page is the wider picture of what agents do once they are running across the business. If you want the operated service, Agent as a Service is the way to buy it.",
  },
];

export default function AgentsPage() {
  return (
    <>
      <PageSchema
        path="/agents"
        name="AI Agents Across Your Business: Zyos Group"
        description="AI agents running and coordinating work across every business function, orchestrated on a readied foundation and operated by a senior team."
        service={{ type: "Agentic AI consulting" }}
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Agents", url: `${SITE.url}/agents` },
        ]}
      />

      {/* Dark hero band, the graphic was built for this context */}
      <section className="relative overflow-hidden bg-primary-deep text-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="aurora-a absolute -top-1/3 right-[-10%] h-[40rem] w-[40rem] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(72,193,235,0.30), transparent 60%)" }}
          />
          <div
            className="aurora-b absolute bottom-[-30%] left-[-10%] h-[34rem] w-[34rem] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(21,105,172,0.45), transparent 62%)" }}
          />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage: "radial-gradient(ellipse at 60% 40%, #000 40%, transparent 80%)",
              WebkitMaskImage: "radial-gradient(ellipse at 60% 40%, #000 40%, transparent 80%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white" />
        </div>

        <div className="container-content pt-20 pb-24 md:pt-24 md:pb-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6">
                Agents are the show
              </p>
              <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white leading-[1.04] [text-shadow:0_2px_30px_rgba(0,0,0,0.35)]">
                Agents running across your whole business.
              </h1>
              <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/75 leading-relaxed">
                Not one chatbot in one tool. A coordinated layer of agents that
                operate and scale real work, function by function, on a
                foundation that is actually ready for them.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/start"
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-primary-deep transition-colors hover:bg-accent-vivid"
                >
                  Start with a measurement <ArrowRight aria-hidden className="h-4 w-4" />
                </Link>
                <Link
                  href="/solutions/agent-as-a-service"
                  className="inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-accent hover:text-accent"
                >
                  See Agent as a Service
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <HeroAgentsMesh className="mx-auto w-full max-w-lg drop-shadow-[0_20px_60px_rgba(0,0,0,0.45)]" />
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl">
          <QuickAnswer>
            Running AI agents across the business means autonomous software
            workers operate and coordinate real work across functions, sales,
            operations, finance, support, marketing, rather than a single
            chatbot in a single tool. Zyos Group designs, deploys, and runs
            these agents on a readied foundation of documentation, data,
            systems, and workflows, with a senior team administering and
            improving them every cycle.
          </QuickAnswer>
        </div>

        <p className="mt-10 max-w-prose text-[15px] text-ink/85 leading-relaxed">
          Agents are the show. But a show needs a stage. An agent deployed on a
          process nobody has mapped automates chaos. An agent operating on data
          nobody has instrumented produces noise. So we build the foundation
          first, then the agents fan out across it, each one grounded in the
          same documentation, data, and workflows, coordinating instead of
          colliding.
        </p>
      </Section>

      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="Across every function"
          title="Where agents earn their keep."
          description="The same readied foundation underneath, a different surface in each function. These are the patterns; full case studies arrive through the Zyos content engine."
        />
        <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {FUNCTIONS.map((f) => (
            <Link
              key={f.title}
              href={f.href}
              className="group flex flex-col rounded-lg border border-border bg-bg p-5 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-[15px] font-semibold tracking-tightish text-primary">
                  {f.title}
                </h3>
                <ArrowUpRight aria-hidden className="h-4 w-4 text-subtle group-hover:text-primary" />
              </div>
              <p className="mt-2 flex-1 text-[14px] text-ink/80 leading-relaxed">
                {f.body}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="The foundation underneath"
          title="Agents orchestrate a foundation that is actually in place."
          description="Documentation, data, systems, and workflows. The four things agents stand on. Building them is the work most AI firms skip, and the reason their agents stall."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaButton href="/foundation" variant="secondary">
            How we build the foundation
          </CtaButton>
          <CtaButton href="/platform" variant="ghost">
            The platform agents run on
          </CtaButton>
        </div>
      </Section>

      <Faq
        eyebrow="Agents across the business, FAQ"
        title="What buyers ask about running agents."
        description="Lifted from prospect calls. Published as FAQPage schema for AI Overview and answer-engine citation."
        faqs={AGENT_FAQS}
      />

      <Section className="bg-primary text-white">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] items-end">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-accent">
              Ready when you are
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tightish text-white">
              See where agents fit in your business.
            </h2>
            <p className="mt-4 text-white/80 max-w-prose">
              Start with a measurement. The diagnostic surfaces where agents earn
              their keep first, and what foundation has to be in place before they
              can.
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
