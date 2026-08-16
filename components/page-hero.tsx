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
  contentClassName?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  actions = [],
  contentClassName,
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
      </div>

      <div className="relative mx-auto flex min-h-[48svh] max-w-7xl items-end px-4 pb-10 pt-52 sm:min-h-[58svh] sm:px-6 sm:pb-20 sm:pt-44 md:min-h-[68svh] lg:px-8 lg:pb-24 lg:pt-56">
        <AnimatedInView
  className={`relative z-10 max-w-2xl px-6 sm:px-10 lg:px-16 ${contentClassName ?? ""}`}
>
  {/* Eyebrow */}
  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f2c978] md:text-base">
    {eyebrow.en}
  </p>

  {/* Hindi */}
  {eyebrow.hi && (
    <p className="mt-2 font-hindi text-base text-white/90">
      {eyebrow.hi}
    </p>
  )}

  {/* Title */}
  <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
    {title}
  </h1>

  {/* Description */}
  <p className="mt-6 max-w-xl text-lg leading-9 text-white/90">
    {description}
  </p>

  {/* Buttons */}
  {actions.length > 0 && (
    <div className="mt-10 flex flex-wrap gap-4">
      {actions.map((action) => (
        <ActionLink
          key={action.label}
          href={action.href}
          variant={action.variant}
          className={
            action.variant === "ghost"
              ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
              : ""
          }
        >
          {action.label}
        </ActionLink>
      ))}
    </div>
  )}
</AnimatedInView>
      </div>

    </section>
  );
}
