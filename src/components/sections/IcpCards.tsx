import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";

const ICPS = [
  {
    title: "High-Growth SMBs",
    range: "10–200 employees · growth trajectory",
    blurb:
      "You're scaling fast and the founder's playbook isn't keeping up. We productize how you operate so the next hire and the next customer cost less than the last.",
    href: "/who-we-serve/high-growth-smbs",
  },
  {
    title: "Private Equity",
    range: "PE firms + portfolio companies",
    blurb:
      "Repeatable value-creation across the portfolio. We assess maturity, architect the right solution per company context, and roll out the operating system that compounds across holdings.",
    href: "/who-we-serve/private-equity",
  },
  {
    title: "Associations",
    range: "Non-profit + member organizations",
    blurb:
      "Member experience, content operations, and AMS-aware architectures. We build for the regulated, multi-stakeholder reality associations actually live in.",
    href: "/who-we-serve/associations",
  },
];

export function IcpCards() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Who we serve"
        title="Three ICPs. One operating model. Context-specific architecture."
        description="The architecture changes by context (regulated, complex, growth-stage). The operating model — Measure → Delivery → Continuous Improvement — does not."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {ICPS.map((i) => (
          <Link
            key={i.href}
            href={i.href}
            className="group rounded-lg border border-border bg-surface p-6 hover:border-primary/40 transition-colors flex flex-col"
          >
            <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
              {i.range}
            </p>
            <h3 className="mt-3 text-xl font-semibold text-primary tracking-tightish">
              {i.title}
            </h3>
            <p className="mt-3 text-[15px] text-ink/80 leading-relaxed flex-1">
              {i.blurb}
            </p>
            <span className="mt-5 text-sm text-primary group-hover:underline">
              How we serve {i.title.toLowerCase()} →
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
