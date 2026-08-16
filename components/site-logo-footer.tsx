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
      className={cn("inline-flex min-w-0 items-center gap-2 text-left sm:gap-3", className)}
      href="/"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[radial-gradient(circle_at_top,_rgba(215,164,73,0.9),_rgba(190,93,63,1))] text-xs font-black tracking-[0.18em] text-white shadow-[0_16px_35px_rgba(143,63,41,0.32)] sm:h-12 sm:w-12 sm:text-sm sm:tracking-[0.25em]">
        SKS
      </span>
      <span className="flex min-w-0 flex-col">
        <b>
        <span className="font-inherit truncate text-sm leading-none tracking-[0.08em] uppercase sm:text-lg sm:tracking-[0.12em]">
          {compact ? "Shehri Kamgar Samaj" : siteContent.site.name}
        </span>

        <span className="font-hindi hidden text-[18px] text-foreground/70 sm:block  ">
          {siteContent.site.tagline.hi}
        </span>
        </b>
      </span>
    </Link>
  );
}
