"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const variantStyles = {
  primary:
    "bg-accent text-white shadow-[0_20px_45px_rgba(190,93,63,0.32)] hover:-translate-y-0.5 hover:bg-accent-strong",
  secondary:
    "border border-white/35 bg-white/12 text-white backdrop-blur-sm hover:-translate-y-0.5 hover:bg-white/18",
  ghost:
    "border border-line bg-white/75 text-foreground hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white",
} as const;

interface ActionLinkProps {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variantStyles;
  className?: string;
}

export function ActionLink({
  href,
  children,
  variant = "primary",
  className,
}: ActionLinkProps) {
  const baseClassName = cn(
    "inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-sm font-semibold tracking-[0.08em] uppercase transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:w-auto",
    variantStyles[variant],
    className,
  );

  const isDocument = href.endsWith(".pdf");
  const isExternal = href.startsWith("http");

  if (isDocument || isExternal) {
    return (
      <a
        className={baseClassName}
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
      >
        <span>{children}</span>
        <span aria-hidden="true">{"->"}</span>
      </a>
    );
  }

  return (
    <Link className={baseClassName} href={href}>
      <span>{children}</span>
      <span aria-hidden="true">{"->"}</span>
    </Link>
  );
}
