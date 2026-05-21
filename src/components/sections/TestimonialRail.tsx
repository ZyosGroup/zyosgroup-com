import { Section, SectionHeading } from "@/components/ui/Section";

// Placeholder testimonials only. NO real customer attribution for zyosgroup.com
// use without separate permission (see customer-video-pipeline.md §6 +
// feedback_customer_video_scope.md). Replace these with permissioned text + photo
// when sign-off lands.

const TESTIMONIALS = [
  {
    quote:
      "The PI Implementation surfaced three opportunities we'd been arguing about for a year. Within two cycles we were measuring instead of arguing.",
    name: "Customer #1 · permission pending",
    context: "Mid-market services · Operations engagement",
  },
  {
    quote:
      "The diagnostic email arrived in 40 minutes. The proposal next morning. We've never been scoped that fast — or that honestly.",
    name: "Customer #2 · permission pending",
    context: "Growth-stage SMB · GaaS onboarding",
  },
  {
    quote:
      "Other firms shipped slide decks. Zyos shipped working artifacts each month — and told us what they were choosing not to do.",
    name: "Customer #3 · permission pending",
    context: "Association · Digital Transformation",
  },
];

export function TestimonialRail() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Customer love"
        title="Working artifacts, not slide decks."
        description="Text + photo today. Customer video where separately permissioned."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {TESTIMONIALS.map((t, idx) => (
          <figure
            key={idx}
            className="rounded-lg border border-border bg-surface p-6 flex flex-col"
          >
            <blockquote className="text-[15px] text-ink/85 leading-relaxed flex-1">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 pt-5 border-t border-border">
              <p className="mono text-[11px] uppercase tracking-[0.16em] text-subtle">
                {t.context}
              </p>
              <p className="mt-1 text-sm text-primary font-medium">{t.name}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
