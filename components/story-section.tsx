import Image from "next/image";

import { AnimatedInView } from "@/components/animated-in-view";
import { SectionHeading } from "@/components/section-heading";
import { SectionWrapper } from "@/components/section-wrapper";
import type { StoryBlock } from "@/content/config";
import { cn } from "@/lib/utils";

interface StorySectionProps {
  story: StoryBlock;
  reverse?: boolean;
}

export function StorySection({ story, reverse = false }: StorySectionProps) {
  return (
    <SectionWrapper tone="warm">
      <div
        className={cn(
          "grid items-center gap-8 md:gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]",
          reverse ? "lg:[&>*:first-child]:order-2" : "",
        )}
      >
        <AnimatedInView>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#ead8c7] p-2 sm:p-3 shadow-[0_28px_70px_rgba(52,34,25,0.12)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
              <Image
                alt={story.image.alt}
                className="object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                src={story.image.src}
              />
            </div>
          </div>
        </AnimatedInView>

        <AnimatedInView delay={0.08}>
          <SectionHeading
            className="max-w-2xl"
            description={story.summary}
            eyebrow={story.eyebrow}
            title={story.title}
          />
          <div className="mt-6 space-y-5 text-sm leading-7 text-foreground/74 sm:text-base sm:leading-8">
            {story.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <blockquote className="mt-8 rounded-[1.75rem] border border-line bg-white/85 p-5 text-base leading-7 text-foreground shadow-[0_22px_60px_rgba(55,37,27,0.08)] sm:p-6 sm:text-lg sm:leading-8">
            &ldquo;{story.accentQuote}&rdquo;
          </blockquote>
        </AnimatedInView>
      </div>
    </SectionWrapper>
  );
}
