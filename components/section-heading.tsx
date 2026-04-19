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
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent sm:text-xs sm:tracking-[0.28em]">
        {eyebrow.en}
      </p>
      {eyebrow.hi ? (
        <p className="font-hindi mt-2 text-xs text-foreground/65 sm:text-sm">{eyebrow.hi}</p>
      ) : null}
      <h2 className="font-display mt-4 text-3xl leading-tight text-pretty sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-foreground/70 sm:mt-5 sm:text-base sm:leading-8 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
