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
    <div className={cn(centered ? "mx-auto max-w-4xl text-center" : "max-w-4xl", className)}>
      <p className="text-[12px] font-semibold uppercase leading-6 tracking-[0.34em] text-accent sm:text-[1.05rem] sm:leading-7 sm:tracking-[0.42em]">
        {eyebrow.en}
      </p>
      {eyebrow.hi ? (
        <p className="font-hindi mt-2 text-xs text-foreground/65 sm:text-sm">{eyebrow.hi}</p>
      ) : null}
      <h2 className="mt-5 text-4xl leading-[1.12] text-pretty sm:text-5xl md:text-[3.4rem]">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-foreground/76 sm:text-lg sm:leading-9">
          {description}
        </p>
      ) : null}
    </div>
  );
}
