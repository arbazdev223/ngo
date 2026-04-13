import type { LocalizedText } from "@/content/config";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: LocalizedText;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={cn(centered ? "mx-auto max-w-3xl text-center" : "", className)}>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
        {eyebrow.en}
      </p>
      {eyebrow.hi ? (
        <p className="font-hindi mt-2 text-sm text-foreground/65">{eyebrow.hi}</p>
      ) : null}
      <h2 className="font-display mt-4 text-4xl leading-tight text-pretty sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-foreground/70 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
