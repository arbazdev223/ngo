"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ActionLink } from "@/components/action-link";
import { SiteLogo } from "@/components/site-logo";
import { siteContent } from "@/content/config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-2 pt-2 sm:px-4 sm:pt-3 lg:px-5">
      <nav
        aria-label="Main navigation"
        className={cn(
          "mx-auto flex w-full max-w-7xl items-center justify-between gap-3 rounded-full border px-3 py-2.5 transition duration-300 sm:px-5 sm:py-3",
          isScrolled
            ? "border-white/70 bg-white/88 shadow-[0_20px_60px_rgba(31,24,20,0.12)] backdrop-blur-xl"
            : "border-white/50 bg-white/72 backdrop-blur-lg",
        )}
      >
        <SiteLogo compact className="shrink-0" />

        <div className="hidden items-center gap-3 md:flex lg:gap-5 xl:gap-7">
          {siteContent.navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                className={cn(
                  "text-[11px] font-semibold tracking-[0.08em] uppercase transition lg:text-xs lg:tracking-[0.12em] xl:text-sm xl:tracking-[0.14em]",
                  isActive ? "text-accent" : "text-foreground/70 hover:text-foreground",
                )}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ActionLink className="px-4 py-2 text-xs" href="/get-involved#donate">
            Donate
          </ActionLink>
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-white/85 text-foreground md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          <span className="sr-only">Toggle navigation</span>
          <span aria-hidden="true" className="space-y-1.5">
            <span
              className={cn(
                "block h-0.5 w-5 bg-current transition",
                isOpen ? "translate-y-2 rotate-45" : "",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-current transition",
                isOpen ? "opacity-0" : "",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-current transition",
                isOpen ? "-translate-y-2 -rotate-45" : "",
              )}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-3 w-full max-w-7xl overflow-hidden rounded-[2rem] border border-white/70 bg-white/94 p-4 shadow-[0_28px_70px_rgba(31,24,20,0.18)] backdrop-blur-xl md:hidden sm:p-5"
            exit={{ opacity: 0, y: reduceMotion ? 0 : -12 }}
            id="mobile-navigation"
            initial={{ opacity: 0, y: reduceMotion ? 0 : -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-2">
              {siteContent.navigation.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    className={cn(
                      "rounded-2xl px-4 py-3 text-sm font-semibold tracking-[0.12em] uppercase transition",
                      isActive
                        ? "bg-accent text-white"
                        : "bg-[#fbf6ee] text-foreground/75 hover:bg-[#f4eadf] hover:text-foreground",
                    )}
                    href={item.href}
                    key={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <ActionLink className="mt-5 w-full" href="/get-involved#donate">
              Donate
            </ActionLink>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
