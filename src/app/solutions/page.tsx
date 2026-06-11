import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { CtaButton } from "@/components/ui/Button";
import { PageSchema } from "@/components/seo/PageSchema";
import { Faq } from "@/components/seo/Faq";
import { HeroSolutions } from "@/components/brand/HeroSolutions";
import { SITE } from "@/lib/site";

// Primary KW: "agentic ai solutions" / "ai agents for business" (720, KD 16) +
// "ai consulting services" supporting. The productized arm: AaaS + GaaS,
// continuously operated on Zyos OS. Problem-led per ICP, SEO/GEO-consistent.
export const metadata: Metadata = {
  title: "Agentic AI Solutions: Agent + Growth as a Service",
  description:
    "Two productized, continuously-operated services: Agent as a Service and Growth as a Service. We run AI agents and growth on a foundation we build first, measured to OKRs.",
  alternates: { canonical: "/solutions" },
};

const SOLUTIONS = [
  {
    abbr: "AaaS",
    title: "Agent as a Service",
    href: "/solutions/agent-as-a-service",
    keyword: "ai agent development · agentic AI",
    blurb:
      "We design, deploy, and run AI agents on your behalf across operations, sales, finance, support, HR, then keep them tuned. You don't manage prompts, infrastructure, or agent reliability. We do, as a service.",
    variants: ["Workflows", "Systems", "Middleware", "Lean", "Insights"],
  },
  {
    abbr: "GaaS",
    title: "Growth as a Service",
    href: "/solutions/growth-as-a-service",
    keyword: "growth as a service · local SEO",
    blurb:
      "Your entire growth function, operated for you: website, Google Business Profile, ads + LSA, SEO content, and GEO. The productized agentic-AI growth play, priced for the SMB tier, measured against quarterly OKRs.",
    variants: ["Website", "GBP", "Ads + LSA", "SEO content", "GEO"],
  },
];

const MARKETS = [
  {
    market: "Associations & nonprofits",
    href: "/who-we-serve/associations",
    problem:
      "A legacy AMS that doesn't talk to the CRM, renewals and event registration still run by hand, key-person risk everywhere, and a board asking about AI with no data foundation underneath.",
    solution:
      "GaaS runs member growth and content; AaaS puts agents across membership operations, both on the foundation Process Intelligence builds first.",
  },
  {
    market: "Private equity & portfolio companies",
    href: "/who-we-serve/private-equity",
    problem:
      "Revenue operations that don't connect, reporting that can't survive a diligence pull, and no operating leverage without adding headcount at the same rate as revenue.",
    solution:
      "AaaS deploys agents across portfolio operations with one operational signal underneath; the readied foundation is what makes the reporting defensible.",
  },
  {
    market: "Growth SMBs",
    href: "/who-we-serve/high-growth-smbs",
    problem:
      "Manual processes that grew with the company, data siloed across four systems, tools nobody had time to configure, and no enterprise budget for a transformation team. Regulated, service, and ops-heavy operators all share the pattern.",
    solution:
      "GaaS operates the growth function and AaaS operates the back office, productized at a monthly motion built for the SMB tier, not enterprise pricing.",
  },
];

const HOW = [
  {
    t: "Always As-A-Service",
    b: "Continuous, scoped by variant, with a defined SLA. No project-based work in Solutions, and support is baked into the fee, not billed on top.",
  },
  {
    t: "Process Intelligence first",
    b: "Every Solutions engagement begins with Process Intelligence as the first delivery cycle. Agents orchestrate a foundation that is actually in place, never a process nobody mapped.",
    href: "/foundation",
  },
  {
    t: "One platform, measured",
    b: "Both services run on the Zyos Operating System, with the same monthly-report and QBR cadence, measured against quarterly value-impact OKRs.",
    href: "/platform",
  },
];

const SOLUTIONS_FAQS = [
  {
    q: "What is the difference between Agent as a Service and Growth as a Service?",
    a: "Agent as a Service (AaaS) operates AI agents across your internal functions, sales, finance, support, operations, HR. Growth as a Service (GaaS) operates your external growth function, website, Google Business Profile, paid ads and Local Services Ads, SEO content, and generative engine optimization. Both are productized, continuous, and run on the Zyos Operating System; the difference is what the agents operate.",
  },
  {
    q: "How is a Zyos Solutions engagement structured?",
    a: "As-A-Service: continuous and scoped by variant, with support included in the fee and a defined SLA through the Zyos Service Desk. Every engagement begins with Process Intelligence Implementation as the first delivery cycle, and progress is measured against quarterly value-impact OKRs. You can take one variant, several, or the bundle.",
  },
  {
    q: "Which solution is right for my business?",
    a: "Start with the Opportunity Engine: a ninety-second intake produces a scored diagnostic and a routing decision that recommends AaaS, GaaS, a Consulting engagement, or a hybrid. The recommendation comes from what the measurement surfaces, not a generic pitch.",
  },
  {
    q: "What does 'productized' mean for these solutions?",
    a: "The same operating motion, cadence, and tooling are applied to every customer rather than reinvented per engagement. That is what makes continuous agentic-AI operations available at a predictable monthly price, including for SMB-tier customers that Big-4 firms and enterprise boutiques will not serve.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageSchema
        path="/solutions"
        name="Agentic AI Solutions: Zyos Group"
        description="Productized continuous services, Agent as a Service (AaaS) and Growth as a Service (GaaS), operated on the Zyos Operating System."
        service={{ type: "Agentic AI consulting" }}
        breadcrumbTrail={[
          { name: "Home", url: SITE.url },
          { name: "Solutions", url: `${SITE.url}/solutions` },
        ]}
      />

      {/* Dark hero band with the Solutions graphic */}
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
                Solutions · productized + continuous
              </p>
              <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white leading-[1.04] [text-shadow:0_2px_30px_rgba(0,0,0,0.35)]">
                Agentic AI solutions, operated for you.
              </h1>
              <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/75 leading-relaxed">
                Two productized services on one platform: agents across your
                operations, and growth across your market. We run them, on a
                foundation we build first, measured to your OKRs.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/start"
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-primary-deep transition-colors hover:bg-accent-vivid"
                >
                  Start with a measurement <ArrowRight aria-hidden className="h-4 w-4" />
                </Link>
                <Link
                  href="/platform"
                  className="inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-accent hover:text-accent"
                >
                  See the platform
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <HeroSolutions className="mx-auto w-full max-w-lg drop-shadow-[0_20px_60px_rgba(0,0,0,0.45)]" />
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl">
          <QuickAnswer>
            Zyos Group Solutions are two productized, continuously-operated
            services: Agent as a Service (AaaS), which runs AI agents across your
            internal operations, and Growth as a Service (GaaS), which runs your
            external growth function. Both are operated by a senior team on the
            Zyos Operating System, begin with Process Intelligence, and are
            measured against quarterly OKRs.
          </QuickAnswer>
        </div>
      </Section>

      {/* The two solutions */}
      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="Two productized services"
          title="Same operating system. Different productized motion."
          description="Both run on Zyos OS, both ship monthly delivery cycles, both use the same QBR and monthly-report cadence. The difference is what the agents operate."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {SOLUTIONS.map((s) => (
            <Link
              key={s.abbr}
              href={s.href}
              className="group flex flex-col rounded-lg border border-border bg-bg p-6 transition-colors hover:border-primary/40"
            >
              <p className="mono text-[11px] uppercase tracking-[0.16em] text-accent">
                {s.keyword}
              </p>
              <h3 className="mt-1 flex items-baseline gap-2 text-2xl font-semibold text-primary tracking-tightish">
                <span className="font-mono text-base text-subtle">{s.abbr}</span>
                {s.title}
              </h3>
              <p className="mt-3 flex-1 text-[15px] text-ink/80 leading-relaxed">
                {s.blurb}
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

      {/* Problems we solve, per market */}
      <Section>
        <SectionHeading
          eyebrow="Problems we solve"
          title="The same pattern shows up differently in each market."
          description="We serve three markets. The operational mess looks different in each one; the solution is the same two services, on a foundation built for your context."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {MARKETS.map((m) => (
            <article
              key={m.market}
              className="flex flex-col rounded-lg border border-border bg-surface p-6"
            >
              <h3 className="text-lg font-semibold text-primary tracking-tightish">
                {m.market}
              </h3>
              <p className="mono mt-3 text-[11px] uppercase tracking-[0.14em] text-subtle">
                The problem
              </p>
              <p className="mt-1.5 text-[14px] text-ink/80 leading-relaxed">
                {m.problem}
              </p>
              <p className="mono mt-4 text-[11px] uppercase tracking-[0.14em] text-accent">
                The Zyos solution
              </p>
              <p className="mt-1.5 flex-1 text-[14px] text-ink/85 leading-relaxed">
                {m.solution}
              </p>
              <Link
                href={m.href}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-ink"
              >
                How we serve {m.market.split(" ")[0].toLowerCase()}
                <ArrowUpRight aria-hidden className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section className="bg-surface border-y border-border">
        <SectionHeading
          eyebrow="How Solutions work"
          title="Productized, but never deployed on chaos."
          description="The motion is the same every time. What changes is the architecture, built to your context after Process Intelligence surfaces it."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3 max-w-4xl">
          {HOW.map((c) => (
            <article key={c.t} className="rounded-lg border border-border bg-bg p-6">
              <h3 className="text-lg font-semibold text-primary tracking-tightish">
                {c.t}
              </h3>
              <p className="mt-2 text-[14px] text-ink/80 leading-relaxed">{c.b}</p>
              {c.href ? (
                <Link
                  href={c.href}
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-ink"
                >
                  Learn more <ArrowUpRight aria-hidden className="h-4 w-4" />
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </Section>

      <Faq
        eyebrow="Solutions, FAQ"
        title="What buyers ask about Agent + Growth as a Service."
        description="Straight answers to what buyers ask about Agent and Growth as a Service."
        faqs={SOLUTIONS_FAQS}
      />

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
              The diagnostic might recommend AaaS, GaaS, a Consulting engagement,
              or a hybrid. The routing decision is the proposal.
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
