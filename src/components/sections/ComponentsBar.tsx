import { Section, SectionHeading } from "@/components/ui/Section";

// S3 — The Zyos journey: the full engagement arc as a connected, dimensional flow.
// Starts at the front door (Opportunity Engine survey) through the Business
// Transformation Roadmap, into Process Intelligence (tactical, department by
// department and functional area by functional area), then agent orchestration
// and the software to monitor / administer it. The three disciplines moved to
// their own minimal section (Disciplines.tsx). (Paul 2026-06-02.)

const JOURNEY = [
  {
    step: "01",
    title: "Opportunity Engine survey",
    blurb:
      "Where it starts. A focused diagnostic that surfaces and ranks the highest-value opportunities across your business.",
  },
  {
    step: "02",
    title: "Business Transformation Roadmap",
    blurb:
      "A phased, crawl-walk-run plan built from the survey: what to do, in what order, tied to value-impact.",
  },
  {
    step: "03",
    title: "Process Intelligence",
    blurb:
      "We go deep, department by department and functional area by functional area: foundational documentation, the gaps, and the systems, data, and workflows agents will need.",
  },
  {
    step: "04",
    title: "Agent orchestration",
    blurb:
      "Agents orchestrate across the readied foundation, running and coordinating work function by function.",
  },
  {
    step: "05",
    title: "Monitoring & administration",
    blurb:
      "Software for exceptional oversight: monitor every agent, administer the system, and keep improving against business performance.",
  },
];

export function ComponentsBar() {
  return (
    <Section>
      <SectionHeading
        eyebrow="The Zyos journey"
        title="We go the whole way with you, from the first survey to agents running your business."
        description="It starts with the Opportunity Engine survey and a Business Transformation Roadmap. Process Intelligence then takes it tactical, department by department, building the foundation agents orchestrate against. You get the software to monitor and administer all of it."
      />

      <ol className="relative mt-14 grid gap-y-10 gap-x-4 sm:grid-cols-2 lg:grid-cols-5">
        {/* connector line behind the node row (desktop only) */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 right-0 top-5 hidden h-px lg:block"
          style={{
            background:
              "linear-gradient(to right, transparent, #48c1eb 12%, #1569ac 88%, transparent)",
            opacity: 0.5,
          }}
        />
        {JOURNEY.map((j) => (
          <li key={j.step} className="relative flex flex-col">
            <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-mono text-[13px] font-semibold text-white shadow-[0_0_0_4px_#fff,0_8px_20px_rgba(21,105,172,0.35)]">
              {j.step}
            </span>
            <h3 className="mt-4 text-[15px] font-semibold tracking-tightish text-primary">
              {j.title}
            </h3>
            <p className="mt-2 text-[13.5px] text-ink/80 leading-relaxed">
              {j.blurb}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
