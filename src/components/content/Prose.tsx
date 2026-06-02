// Renders a typed section array (BlogSection / case-study body) into branded
// prose. Keeps schema + structure consistent across blog posts and case studies.
import type { BlogSection } from "@/lib/blog";

export function Prose({ sections }: { sections: BlogSection[] }) {
  return (
    <div className="max-w-prose space-y-6">
      {sections.map((s, i) => {
        switch (s.kind) {
          case "h2":
            return (
              <h2
                key={i}
                id={s.id}
                className="scroll-mt-24 pt-4 text-2xl md:text-3xl font-semibold tracking-tightish text-primary"
              >
                {s.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="pt-2 text-xl font-semibold tracking-tightish text-primary"
              >
                {s.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className="text-[16px] leading-relaxed text-ink/85">
                {s.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="list-disc space-y-2 pl-6 text-[16px] leading-relaxed text-ink/85">
                {s.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="list-decimal space-y-2 pl-6 text-[16px] leading-relaxed text-ink/85">
                {s.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-2 border-accent pl-5 text-lg italic text-ink/80"
              >
                {s.text}
                {s.cite ? (
                  <cite className="mt-2 block text-sm not-italic text-subtle">
                    {s.cite}
                  </cite>
                ) : null}
              </blockquote>
            );
          case "callout":
            return (
              <aside
                key={i}
                className="rounded-md border border-border bg-surface px-5 py-4 md:px-6 md:py-5"
              >
                <p className="eyebrow mb-2">{s.label}</p>
                <p className="text-[15px] leading-relaxed text-ink/90">{s.text}</p>
              </aside>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
