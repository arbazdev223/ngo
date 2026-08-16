import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionTone = "default" | "warm" | "ink" | "muted";

const toneStyles: Record<SectionTone, string> = {
  default: "bg-transparent text-foreground",
  warm:
    "bg-[linear-gradient(180deg,rgba(255,251,246,0.98),rgba(246,236,224,0.95))] text-foreground",
  ink: "bg-[#1d1916] text-white",
  muted:
    "bg-[linear-gradient(180deg,rgba(250,244,236,0.6),rgba(255,255,255,0.96))] text-foreground",
};

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  tone?: SectionTone;
  className?: string;
  as?: ElementType;
}

export function SectionWrapper({
  children,
  id,
  tone = "default",
  className,
  as: Component = "section",
}: SectionWrapperProps) {
  return (
    <Component
      className={cn(
        "relative isolate overflow-hidden py-10 sm:py-16 md:py-20 lg:py-28",
        toneStyles[tone],
        className,
      )}
      id={id}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(190,93,63,0.35),transparent)]" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </Component>
  );
}
