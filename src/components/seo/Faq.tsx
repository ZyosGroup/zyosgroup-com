import { faqSchema, jsonLdScript, type FaqEntry } from "@/lib/schema";
import { Section, SectionHeading } from "@/components/ui/Section";

// Visible + schema FAQ block. Pair every entry with both a visible Q/A
// (so users + Google's snippet ranker see it) and the FAQPage JSON-LD
// (so AI Overviews + PAA can lift it cleanly).

export function Faq({
  eyebrow,
  title,
  description,
  faqs,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  faqs: FaqEntry[];
}) {
  return (
    <Section className="bg-surface border-y border-border">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqSchema(faqs))}
      />
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      <div className="mt-10 max-w-3xl space-y-4">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group rounded-lg border border-border bg-bg p-5 open:bg-bg"
          >
            <summary className="cursor-pointer list-none flex items-start justify-between gap-4 text-lg font-semibold text-primary tracking-tightish">
              <span>{f.q}</span>
              <span
                aria-hidden
                className="mono text-[18px] text-subtle leading-none mt-1 group-open:rotate-45 transition-transform"
              >
                +
              </span>
            </summary>
            <p className="mt-4 text-[15px] text-ink/80 leading-relaxed">
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
