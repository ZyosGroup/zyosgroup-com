import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SITE } from "@/lib/site";

// S — The positioning spine. The fear (agentic AI is moving faster than the
// internet did) + the contrarian thesis (it is NOT about who buys the most
// tokens or licenses; that is chaos without governance or ROI) + the six
// differentiators that are the actual answer. Each pillar carries a crafted,
// on-brand graphic in the same family as the page hero graphics. Cross-links
// reach the deep pages here, plus zyos.io (the OS) and paulruddy.com (origin).
// (Paul 2026-06-03: "these are the real deal.")

const NAVY = "#1569ac";
const CYAN = "#48c1eb";

function IconTile({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-16 w-16 shrink-0 rounded-xl border border-primary/15 bg-gradient-to-br from-primary/[0.06] to-accent/[0.06]">
      <svg viewBox="0 0 64 64" className="absolute inset-0 h-full w-full p-3" fill="none" aria-hidden>
        {children}
      </svg>
    </div>
  );
}

// 1. Opportunity Engine — a readiness gauge with a needle.
const GaugeIcon = (
  <>
    <path d="M8 42 A24 24 0 0 1 56 42" stroke={NAVY} strokeWidth="3" strokeLinecap="round" />
    {[0, 1, 2, 3, 4].map((i) => {
      const a = Math.PI - (i * Math.PI) / 4;
      const x1 = 32 + Math.cos(a) * 24, y1 = 42 - Math.sin(a) * 24;
      const x2 = 32 + Math.cos(a) * 19, y2 = 42 - Math.sin(a) * 19;
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={NAVY} strokeWidth="2" strokeLinecap="round" opacity="0.55" />;
    })}
    <line x1="32" y1="42" x2="45" y2="25" stroke={CYAN} strokeWidth="3.5" strokeLinecap="round" />
    <circle cx="32" cy="42" r="4" fill={NAVY} />
  </>
);

// 2. Transformation Framework — phased, rising steps.
const StepsIcon = (
  <>
    <path d="M12 48 L28 36 L44 26 L54 14" stroke={NAVY} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    {[[12, 48], [28, 36], [44, 26]].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r="3.5" fill="#fff" stroke={NAVY} strokeWidth="2.5" />
    ))}
    <circle cx="54" cy="14" r="4.5" fill={CYAN} />
  </>
);

// 3. Process Intelligence — instrument the flow before automating it.
const ProcessIcon = (
  <>
    <line x1="10" y1="40" x2="54" y2="40" stroke={NAVY} strokeWidth="2.5" strokeLinecap="round" />
    {[12, 32, 52].map((x, i) => (
      <circle key={i} cx={x} cy="40" r="3.5" fill={i === 1 ? "#fff" : NAVY} stroke={i === 1 ? CYAN : "none"} strokeWidth="2.5" />
    ))}
    <circle cx="32" cy="40" r="11" stroke={CYAN} strokeWidth="3" />
    <line x1="40" y1="48" x2="48" y2="56" stroke={CYAN} strokeWidth="3" strokeLinecap="round" />
  </>
);

// 4. Partnered Approach — alongside you, the whole way.
const PartnerIcon = (
  <>
    <path d="M12 20 C 28 20, 36 44, 52 44" stroke={NAVY} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M12 44 C 28 44, 36 20, 52 20" stroke={CYAN} strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="12" cy="20" r="3.5" fill={NAVY} />
    <circle cx="12" cy="44" r="3.5" fill={CYAN} />
    <circle cx="52" cy="44" r="3.5" fill={NAVY} />
    <circle cx="52" cy="20" r="3.5" fill={CYAN} />
    <circle cx="32" cy="32" r="4.5" fill="#fff" stroke={NAVY} strokeWidth="2.5" />
  </>
);

// 5. Flexible Engagement Model — three models, one operating loop.
const FlexIcon = (
  <>
    <rect x="9" y="13" width="9" height="9" rx="1.5" stroke={NAVY} strokeWidth="2.5" />
    <circle cx="13.5" cy="32" r="4.5" stroke={NAVY} strokeWidth="2.5" />
    <path d="M13.5 43 l5 9 l-10 0 Z" stroke={NAVY} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M22 17 H38 M22 32 H40 M22 47 H38" stroke={NAVY} strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    <circle cx="46" cy="32" r="10" stroke={CYAN} strokeWidth="3" />
    <path d="M46 26 a6 6 0 1 1 -5 3" stroke={CYAN} strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </>
);

// 6. Single Vendor — one container, every discipline, direct ownership.
const HexIcon = (
  <>
    <path d="M32 8 L52 20 L52 44 L32 56 L12 44 L12 20 Z" stroke={NAVY} strokeWidth="2.5" strokeLinejoin="round" />
    {[[32, 22], [24, 32], [40, 32], [27, 42], [37, 42]].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r="2.6" fill={i % 2 ? CYAN : NAVY} />
    ))}
    <line x1="32" y1="22" x2="24" y2="32" stroke={NAVY} strokeWidth="1.4" opacity="0.5" />
    <line x1="32" y1="22" x2="40" y2="32" stroke={NAVY} strokeWidth="1.4" opacity="0.5" />
    <line x1="24" y1="32" x2="37" y2="42" stroke={NAVY} strokeWidth="1.4" opacity="0.5" />
    <line x1="40" y1="32" x2="27" y2="42" stroke={NAVY} strokeWidth="1.4" opacity="0.5" />
  </>
);

const PILLARS: { icon: React.ReactNode; name: string; claim: string; href: string }[] = [
  {
    icon: GaugeIcon,
    name: "Opportunity Engine",
    claim:
      "Every engagement starts with a measurement. A focused diagnostic scores your readiness and maturity, then routes you to the right next move, not a generic pitch.",
    href: "/start",
  },
  {
    icon: StepsIcon,
    name: "Transformation Framework",
    claim:
      "From the survey to a phased Business Transformation Roadmap. Crawl, walk, run, sequenced to value-impact, so the work compounds instead of stalling.",
    href: "/framework",
  },
  {
    icon: ProcessIcon,
    name: "Process Intelligence",
    claim:
      "We build the foundation agents need before we deploy them: documented processes, integrated data, instrumented workflows. The step everyone else skips.",
    href: "/foundation",
  },
  {
    icon: PartnerIcon,
    name: "Partnered approach",
    claim:
      "Senior people on every engagement, a limited number at a time, on purpose. We go the whole way with you, from the first survey to agents in production.",
    href: "/how-we-deliver",
  },
  {
    icon: FlexIcon,
    name: "Flexible engagement model",
    claim:
      "Fixed Price, Retainer, or As-A-Service. Pick the commercial model that fits. The way we operate, measure, and improve never changes.",
    href: "/how-we-deliver",
  },
  {
    icon: HexIcon,
    name: "Single vendor, direct ownership",
    claim:
      "One vendor owns the whole arc: business intelligence, software, operations, agents, and growth. You own the outcome, without the integration risk of ten point solutions.",
    href: "/about",
  },
];

export function PositioningPillars() {
  return (
    <Section className="bg-surface border-y border-border">
      <SectionHeading
        eyebrow="Why a foundation, first"
        title="Agentic AI is moving faster than the internet did. The winners won't be whoever buys the most."
        description="More tokens and more licenses don't create value, they create chaos: no governance, no ownership, no ROI. The difference is an operating model, and a team with the range to build the foundation before the agents run. Six things set Zyos Group apart."
      />

      <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {PILLARS.map((p) => (
          <Link
            key={p.name}
            href={p.href}
            className="group flex flex-col"
          >
            <IconTile>{p.icon}</IconTile>
            <h3 className="mt-5 flex items-center gap-1.5 text-lg font-semibold tracking-tightish text-primary">
              {p.name}
              <ArrowUpRight
                aria-hidden
                className="h-4 w-4 text-subtle transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </h3>
            <p className="mt-2 text-[15px] text-ink/80 leading-relaxed">{p.claim}</p>
          </Link>
        ))}
      </div>

      <p className="mt-12 max-w-prose text-sm text-subtle leading-relaxed">
        The operating model is the product. It runs on{" "}
        <a href={SITE.zyosIo} rel="noopener" className="text-primary underline-offset-2 hover:underline">
          the Zyos Operating System
        </a>
        , and it's the compounding of two decades in IT, software, and business
        intelligence,{" "}
        <a href={SITE.paulruddy} rel="noopener" className="text-primary underline-offset-2 hover:underline">
          the founder's origin story
        </a>
        .
      </p>
    </Section>
  );
}
