// Quick Answer block — research §7.2.
// 40–80 words, plain text, near the top of every page.
// LLMs lift this as the citation snippet. Do not decorate.

export function QuickAnswer({
  children,
  label = "Quick answer",
}: {
  children: React.ReactNode;
  label?: string;
}) {
  return (
    <aside
      aria-label={label}
      className="rounded-md border border-border bg-surface px-5 py-4 md:px-6 md:py-5"
    >
      <p className="eyebrow mb-2">{label}</p>
      <p className="text-ink/90 text-[15px] leading-relaxed">{children}</p>
    </aside>
  );
}
