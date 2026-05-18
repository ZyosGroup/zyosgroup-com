import { cn } from "@/lib/cn";

export function Section({
  children,
  className,
  as: As = "section",
  id,
  bleed = false,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div" | "article";
  id?: string;
  bleed?: boolean;
}) {
  return (
    <As id={id} className={cn("py-16 md:py-24", className)}>
      <div className={cn(bleed ? "" : "container-content")}>{children}</div>
    </As>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  level = 2,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  level?: 2 | 3;
}) {
  const Heading: "h2" | "h3" = level === 2 ? "h2" : "h3";
  return (
    <div
      className={cn(
        "max-w-prose",
        align === "center" && "mx-auto text-center"
      )}
    >
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <Heading className="text-3xl md:text-4xl font-semibold tracking-tightish">
        {title}
      </Heading>
      {description ? (
        <p className="mt-4 text-lg text-subtle leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}
