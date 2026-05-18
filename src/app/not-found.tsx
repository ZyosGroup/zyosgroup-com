import { Section } from "@/components/ui/Section";
import { CtaButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section>
      <p className="eyebrow mb-4">404</p>
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tightish text-primary leading-[1.05]">
        That page is not on the map.
      </h1>
      <p className="mt-6 text-lg text-ink/80 max-w-prose">
        It may be coming in pass 2, or it may have moved. Start with a
        measurement and we&apos;ll route you somewhere useful.
      </p>
      <div className="mt-8">
        <CtaButton href="/start">Start with a measurement</CtaButton>
      </div>
    </Section>
  );
}
