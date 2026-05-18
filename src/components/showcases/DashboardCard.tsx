// TODO Pass 2: full implementation per zyosgroup-com-capability-showcases.md §4
// Real dashboard screenshot gallery captured from ZyosApp seeded with demo data.
// Stub: a labeled placeholder card so layout slots are real.

import { cn } from "@/lib/cn";

export function DashboardCard({
  title,
  description,
  status = "Live in Zyos OS",
  className,
}: {
  title: string;
  description: string;
  status?: "Live in Zyos OS" | "Concept · Q3 2026";
  className?: string;
}) {
  return (
    <article
      className={cn(
        "rounded-lg border border-border bg-surface overflow-hidden",
        className
      )}
    >
      <div className="aspect-[16/10] bg-bg border-b border-border flex items-center justify-center">
        <div className="text-center px-6">
          <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
            Dashboard preview
          </p>
          <p className="mt-2 text-sm text-ink/60">
            Screenshot captured pass 2 — ZyosApp seeded demo data
          </p>
        </div>
      </div>
      <div className="p-5">
        <p className="mono text-[11px] uppercase tracking-[0.16em] text-accent">
          {status}
        </p>
        <h3 className="mt-1 text-lg font-semibold text-primary tracking-tightish">
          {title}
        </h3>
        <p className="mt-2 text-sm text-ink/75 leading-relaxed">{description}</p>
      </div>
    </article>
  );
}
