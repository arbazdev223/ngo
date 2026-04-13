"use client";

import Link from "next/link";

import { siteContent } from "@/content/config";
import { cn } from "@/lib/utils";

interface SiteLogoProps {
  className?: string;
  compact?: boolean;
}

export function SiteLogo({ className, compact = false }: SiteLogoProps) {
  return (
    <Link
      className={cn("inline-flex items-center gap-3 text-left", className)}
      href="/"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[radial-gradient(circle_at_top,_rgba(215,164,73,0.9),_rgba(190,93,63,1))] text-sm font-black tracking-[0.25em] text-white shadow-[0_16px_35px_rgba(143,63,41,0.32)]">
        SKS
      </span>
      <span className="flex flex-col">
        <span className="font-display text-lg leading-none tracking-[0.12em] text-foreground uppercase">
          {compact ? "Shehri Kamgar" : siteContent.site.name}
        </span>
        <span className="font-hindi text-xs text-foreground/70">
          {siteContent.site.tagline.hi}
        </span>
      </span>
    </Link>
  );
}
