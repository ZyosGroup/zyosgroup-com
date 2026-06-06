// Quick Answer block — the concise, lead-with-the-answer paragraph LLMs lift
// as the citation snippet (AEO). The "Quick answer" tag stays as an aria-label
// for semantics, but it is NOT shown: visually this reads as a confident lead
// statement, not a labeled box. (Paul 2026-06-03: the visible label looked bad.)

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
      className="border-l-2 border-accent pl-5 md:pl-6"
    >
      <p className="text-[17px] md:text-lg text-ink/90 leading-relaxed">
        {children}
      </p>
    </aside>
  );
}
