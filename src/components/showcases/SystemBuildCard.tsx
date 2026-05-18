// TODO Pass 2: full implementation per zyosgroup-com-capability-showcases.md §3
// Case-card grid with before/after Reactflow topology + Build/Implement/Both tag.
// Stub: labeled placeholder card matching the eventual shape.

import { cn } from "@/lib/cn";

export type SystemBuild = {
  industry: string;
  scale: string;
  oneLiner: string;
  tag: "Build" | "Implement" | "Both";
  outcome: string;
};

export function SystemBuildCard({
  build,
  className,
}: {
  build: SystemBuild;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "rounded-lg border border-border bg-surface p-5 flex flex-col",
        className
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
          {build.industry} · {build.scale}
        </p>
        <span className="mono text-[11px] px-2 py-0.5 rounded bg-primary/5 text-primary border border-primary/15">
          {build.tag}
        </span>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-primary tracking-tightish">
        {build.oneLiner}
      </h3>
      <p className="mt-3 text-sm text-ink/75 leading-relaxed flex-1">
        Before / after topology — pass 2 (Reactflow). Build / Implement / Both
        badge is real.
      </p>
      <p className="mt-4 mono text-sm text-accent">{build.outcome}</p>
    </article>
  );
}
