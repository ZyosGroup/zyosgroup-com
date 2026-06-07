import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SITE } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

export function FounderBlock() {
  return (
    <Section className="bg-surface border-y border-border">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] items-start">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border bg-bg">
          <Image
            src="/img/paul-ruddy.jpg"
            alt="Paul Ruddy, founder and CEO of Zyos Group"
            fill
            sizes="(min-width: 1024px) 28rem, 100vw"
            className="object-cover object-top"
          />
        </div>

        <div>
          <p className="eyebrow mb-3">Founder</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tightish text-primary">
            Paul Ruddy
          </h2>
          <p className="mt-4 text-lg text-ink/85 leading-relaxed">
            Two decades building and scaling IT managed services, software, and
            business intelligence practices. Now focused on integrated marketing,
            digital transformation, and foundational agentic-AI solutions for B2B
            growth, and on the operating system that compounds it.
          </p>
          <p className="mt-4 text-[15px] text-ink/75 leading-relaxed">
            Zyos Group is the services company. Zyos OS is the operating system
            it builds on.
          </p>
          <a
            href={SITE.paulruddy}
            rel="noopener"
            className="mt-7 inline-flex items-center gap-2 text-primary hover:underline"
          >
            <span>Read more at paulruddy.com</span>
            <ArrowUpRight aria-hidden className="h-4 w-4" />
          </a>
        </div>
      </div>
    </Section>
  );
}
