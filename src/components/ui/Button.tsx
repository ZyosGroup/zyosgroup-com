import Link from "next/link";
import { cn } from "@/lib/cn";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";

export function CtaButton({
  href,
  children,
  variant = "primary",
  className,
  withArrow = true,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-colors";
  const styles: Record<Variant, string> = {
    primary: "bg-primary text-white hover:bg-ink",
    secondary: "bg-surface text-primary border border-border hover:border-primary/40",
    ghost: "text-primary hover:text-ink",
  };
  return (
    <Link href={href} className={cn(base, styles[variant], className)}>
      <span>{children}</span>
      {withArrow && <ArrowRight aria-hidden className="h-4 w-4" />}
    </Link>
  );
}
