"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";

const STAGES = [
  {
    label: "Measure",
    blurb:
      "Process Intelligence Implementation, Readiness & Maturity scorecard, Opportunity Engine diagnostic, value-impact OKRs.",
    artifact: "PI scorecard + opportunity backlog",
  },
  {
    label: "Delivery",
    blurb:
      "Monthly cycles, prioritized to value-impact, cross-component execution, measured outcomes per cycle, visible Kanban.",
    artifact: "Engagement Kanban + delivery review",
  },
  {
    label: "Continuous Improvement",
    blurb:
      "Quarterly business reviews, monthly reports, OKR / KPI tracking, customer support and service desk, re-prioritization based on what data is telling us.",
    artifact: "QBR scorecard + monthly report",
  },
];

export function OperatingModelFlow() {
  return (
    <Section className="relative overflow-hidden bg-primary-deep text-white">
      {/* dark-section ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(40rem 30rem at 80% -10%, rgba(72,193,235,0.18), transparent 60%)",
        }}
      />
      <div className="relative">
        <p className="eyebrow mb-3 text-accent">The operating model</p>
        <h2 className="max-w-prose text-3xl md:text-4xl font-semibold tracking-tightish text-white">
          Measure. Deliver. Continuously improve.
        </h2>
        <p className="mt-4 max-w-prose text-lg text-white/75 leading-relaxed">
          Every engagement runs through three phases, regardless of arm,
          practice, or variant. The Customer Success function lives inside
          Continuous Improvement.
        </p>

        <ol className="mt-12 grid gap-4 md:grid-cols-3">
          {STAGES.map((s, idx) => (
            <motion.li
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="relative rounded-lg border border-white/12 bg-white/[0.04] p-6"
            >
              <div className="flex items-center gap-3">
                <span className="mono text-xs text-white/60">0{idx + 1}</span>
                <span aria-hidden className="h-px flex-1 bg-white/15" />
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white tracking-tightish">
                {s.label}
              </h3>
              <p className="mt-3 text-[15px] text-white/75 leading-relaxed">
                {s.blurb}
              </p>
              <p className="mt-5 mono text-[11px] uppercase tracking-[0.16em] text-accent">
                Artifact · {s.artifact}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
