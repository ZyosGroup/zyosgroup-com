import { Section } from "@/components/ui/Section";
import { QuickAnswer } from "@/components/ui/QuickAnswer";
import { CtaButton } from "@/components/ui/Button";

export function StubPage({
  eyebrow,
  title,
  quickAnswer,
  notes,
}: {
  eyebrow: string;
  title: string;
  quickAnswer: string;
  notes?: string[];
}) {
  return (
    <>
      <Section>
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tightish text-primary leading-[1.05] max-w-4xl">
          {title}
        </h1>

        <div className="mt-10 max-w-3xl">
          <QuickAnswer>{quickAnswer}</QuickAnswer>
        </div>

        {notes && notes.length ? (
          <ul className="mt-10 grid gap-3 max-w-prose">
            {notes.map((n, i) => (
              <li
                key={i}
                className="text-[15px] text-ink/80 leading-relaxed border-l-2 border-border pl-4"
              >
                {n}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-12 rounded-lg border border-border bg-surface p-6 md:p-8 max-w-3xl">
          <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
            Full content · coming pass 2
          </p>
          <p className="mt-3 text-[15px] text-ink/80 leading-relaxed">
            This page is scaffolded with the locked positioning. Detailed
            showcases, case studies, and pricing detail land in the next
            content pass. Until then, start with a measurement.
          </p>
          <div className="mt-5">
            <CtaButton href="/start">Start with a measurement</CtaButton>
          </div>
        </div>
      </Section>
    </>
  );
}
