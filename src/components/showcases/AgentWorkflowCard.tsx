"use client";

// Full implementation per zyosgroup-com-capability-showcases.md §2.
// One of the load-bearing components on the site — the agent workflows
// showcase is the visual edge of the integration thesis.

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export type AgentWorkflowStep = {
  label: string;
  // A line that could plausibly appear in the visible task log inside
  // the Foundational AI Layer — "the agent's reasoning trace".
  trace: string;
};

export type AgentWorkflowCardProps = {
  area: string;            // "Sales", "Marketing", ...
  title: string;           // "Outbound + ABM Agent Workflow"
  outcome: string;         // "Discovery → enrichment → ..."
  steps: AgentWorkflowStep[];
  metric: { value: string; label: string };
  variant: "Workflows" | "Systems" | "Middleware" | "Lean" | "Insights";
  className?: string;
};

export function AgentWorkflowCard({
  area,
  title,
  outcome,
  steps,
  metric,
  variant,
  className,
}: AgentWorkflowCardProps) {
  return (
    <article
      className={cn(
        "rounded-lg border border-border bg-surface overflow-hidden",
        className
      )}
    >
      <header className="px-6 py-5 border-b border-border flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
            {area} · AaaS — {variant}
          </p>
          <h3 className="mt-1 text-xl font-semibold text-primary tracking-tightish">
            {title}
          </h3>
        </div>
        <p className="text-sm text-ink/80 max-w-prose">{outcome}</p>
      </header>

      <div className="grid md:grid-cols-[1.1fr_1fr]">
        {/* Animated workflow nodes (Framer Motion stagger on scroll-into-view) */}
        <ol
          className="border-b md:border-b-0 md:border-r border-border p-6 space-y-3"
          aria-label={`${title} — workflow steps`}
        >
          {steps.map((step, idx) => (
            <motion.li
              key={step.label}
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.32, delay: idx * 0.08 }}
              className="flex items-start gap-3"
            >
              <span
                aria-hidden
                className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent shrink-0"
              />
              <div>
                <p className="text-[14px] font-medium text-primary">
                  <span className="mono text-[11px] text-subtle mr-2">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  {step.label}
                </p>
                <p className="mt-0.5 text-[13px] text-ink/70 leading-relaxed">
                  {step.trace}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>

        {/* Sample task log + outcome metric */}
        <div className="p-6 bg-ink text-white/85 mono text-[12px] leading-relaxed">
          <p className="text-accent mb-3 uppercase tracking-[0.18em] text-[10px]">
            Visible task log · Foundational AI Layer
          </p>
          {steps.slice(0, 4).map((s, idx) => (
            <p key={idx} className="text-white/80">
              <span className="text-accent">step {idx + 1}/{steps.length}</span>{" "}
              · {s.trace.replace(/\.$/, "")}
              <span className="text-white/40"> ...done in {(1.6 + idx * 0.7).toFixed(1)}s</span>
            </p>
          ))}
          <div className="mt-6 pt-4 border-t border-white/15">
            <p className="text-[11px] uppercase tracking-[0.16em] text-accent">
              Outcome metric
            </p>
            <p className="mt-2 text-xl font-semibold text-white tracking-tightish font-sans">
              {metric.value}
            </p>
            <p className="text-[12px] text-white/70 font-sans">{metric.label}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
