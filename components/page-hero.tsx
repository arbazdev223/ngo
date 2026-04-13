import Image from "next/image";

import type { ActionItem, LocalizedText, MediaAsset } from "@/content/config";
import { ActionLink } from "@/components/action-link";
import { AnimatedInView } from "@/components/animated-in-view";

interface PageHeroProps {
  eyebrow: LocalizedText;
  title: string;
  description: string;
  image: MediaAsset;
  actions?: ActionItem[];
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  actions = [],
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <Image
          alt={image.alt}
          className="object-cover"
          fill
          priority
          sizes="100vw"
          src={image.src}
        />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(19,16,13,0.88),rgba(19,16,13,0.48),rgba(19,16,13,0.65))]" />
      </div>

      <div className="relative mx-auto flex min-h-[58svh] max-w-7xl items-end px-5 py-28 sm:px-6 lg:px-8 lg:py-32">
        <AnimatedInView className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#f2c978]">
            {eyebrow.en}
          </p>
          {eyebrow.hi ? (
            <p className="font-hindi mt-3 text-sm text-white/80">{eyebrow.hi}</p>
          ) : null}
          <h1 className="font-display mt-5 text-5xl leading-[0.92] text-white text-pretty sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/78 sm:text-lg">
            {description}
          </p>
          {actions.length ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {actions.map((action) => (
                <ActionLink
                  className={
                    action.variant === "ghost"
                      ? "border-white/25 bg-white/12 text-white hover:bg-white/18"
                      : undefined
                  }
                  href={action.href}
                  key={action.label}
                  variant={action.variant}
                >
                  {action.label}
                </ActionLink>
              ))}
            </div>
          ) : null}
        </AnimatedInView>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(247,239,230,0.98))]" />
    </section>
  );
}
