import { ActionLink } from "@/components/action-link";
import { AnimatedCard } from "@/components/animated-card";
import { AnimatedInView } from "@/components/animated-in-view";
import { CTASection } from "@/components/cta-section";
import { CtaTiles } from "@/components/cta-tiles";
import { GalleryMasonry } from "@/components/gallery-masonry";
import { HeroSection } from "@/components/hero-section";
import { SectionHeading } from "@/components/section-heading";
import { SectionWrapper } from "@/components/section-wrapper";
import { StorySection } from "@/components/story-section";
import { TrustSection } from "@/components/trust-section";
import { siteContent } from "@/content/config";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Home",
  siteContent.site.description,
);

const featuredWorkAreas = siteContent.workAreas.filter((area) =>
  [
    "worker-awareness",
    "group-formation",
    "education-and-health",
    "legal-aid",
  ].includes(area.slug),
);

export default function HomePage() {
  return (
    <>
      <HeroSection media={siteContent.hero.media} />

      <section className="relative bg-accent-strong text-white">
        <div className="mx-auto flex min-h-[430px] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center sm:min-h-[520px] sm:px-6 sm:py-20 lg:px-8">
          <AnimatedInView>
            <p className="text-[15px] font-semibold uppercase leading-6 tracking-[0.34em] text-[#f2c978] sm:text-sm sm:leading-7 sm:tracking-[0.42em]">
              {siteContent.hero.title}
            </p>
            <h1 className="font-display mx-auto mt-6 max-w-2xl text-4xl leading-[1.05] text-pretty sm:text-5xl md:text-[3.4rem]">
              {siteContent.hero.eyebrow.en}
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/90 sm:text-[1.35rem] sm:leading-9">
              {siteContent.hero.summary}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ActionLink
                className="!bg-black !px-6 !py-3 !text-white !shadow-none hover:!bg-black/85"
                href={siteContent.hero.primaryAction.href}
                variant={siteContent.hero.primaryAction.variant}
              >
                {siteContent.hero.primaryAction.label}
              </ActionLink>
              <ActionLink
                className="!border-black !bg-black !px-6 !py-3 !text-white !shadow-none hover:!bg-black/85"
                href={siteContent.hero.secondaryAction.href}
                variant="secondary"
              >
                {siteContent.hero.secondaryAction.label}
              </ActionLink>
            </div>
          </AnimatedInView>
        </div>
      </section>

      <SectionWrapper tone="warm">
        <AnimatedInView>
          <SectionHeading
            align="center"
            className="mx-auto max-w-2xl"
            description={siteContent.aboutPreview.description}
            eyebrow={siteContent.aboutPreview.eyebrow}
            title={siteContent.aboutPreview.title}
          />
          <div className="mx-auto mt-7 max-w-3xl space-y-6 text-center text-base leading-8 text-foreground/76 sm:text-lg sm:leading-9">
            {siteContent.aboutPreview.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {siteContent.aboutPreview.actions.map((action, index) => (
              <ActionLink
                className={
                  index === 0
                    ? "!border-black !bg-black !px-6 !py-3 !text-white !shadow-none hover:!bg-black/85"
                    : "!border-[#d6c6b7] !bg-white/95 !px-6 !py-3 !text-black !shadow-none hover:!border-accent/45 hover:!bg-white"
                }
                href={action.href}
                key={action.href}
                variant={action.variant}
              >
                {action.label}
              </ActionLink>
            ))}
          </div>
        </AnimatedInView>
      </SectionWrapper>

      <CtaTiles
        eyebrow={siteContent.homeCtaTiles.eyebrow}
        items={siteContent.homeCtaTiles.items}
        title={siteContent.homeCtaTiles.title}
      />

      <SectionWrapper id="our-work" tone="warm">
        <AnimatedInView>
          <SectionHeading
            align="center"
            description="The homepage highlights a few pillars, while the full work page expands on all of the NGO's current focus areas."
            eyebrow={{ en: "What we do" }}
            title="Support that starts locally and grows through trust."
          />
        </AnimatedInView>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {featuredWorkAreas.map((area, index) => (
            <AnimatedCard key={area.slug}>
              <AnimatedInView delay={0.06 * index}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-line bg-white/90 p-6 shadow-[0_20px_50px_rgba(56,39,27,0.07)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_65px_rgba(56,39,27,0.12)] sm:p-7">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-accent" />
                  <p className="font-hindi text-sm text-accent/90">{area.title.hi}</p>
                  <h3 className="font-display mt-3 text-[2.1rem] leading-[1.1] text-foreground">
                    {area.title.en}
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-foreground/80">{area.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {area.outcomes.map((outcome) => (
                      <span
                        className="rounded-full border border-line bg-[#f8efe5] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/80 transition group-hover:border-accent/35"
                        key={outcome}
                      >
                        {outcome}
                      </span>
                    ))}
                  </div>
                </article>
              </AnimatedInView>
            </AnimatedCard>
          ))}
        </div>
        <AnimatedInView className="mt-10 flex justify-center">
          <ActionLink
            className="!rounded-full !border-[#d6c6b7] !bg-white/95 !px-7 !py-3 !text-[13px] !tracking-[0.1em] !text-[#2f251d] hover:!border-[#be5d3f]/45 hover:!bg-white"
            href="/our-work"
            variant="ghost"
          >
            Explore All Work Areas
          </ActionLink>
        </AnimatedInView>
      </SectionWrapper>

      <TrustSection
        description={siteContent.trustSection.description}
        eyebrow={siteContent.trustSection.eyebrow}
        items={siteContent.trustSection.items}
        title={siteContent.trustSection.title}
      />

      <StorySection story={siteContent.humanStory} />

      <SectionWrapper tone="muted">
        <AnimatedInView>
          <SectionHeading
            align="center"
            description={siteContent.impactNarratives.description}
            eyebrow={siteContent.impactNarratives.eyebrow}
            title={siteContent.impactNarratives.title}
          />
        </AnimatedInView>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {siteContent.impactNarratives.cards.map((card, index) => (
            <AnimatedCard key={card.title}>
              <AnimatedInView delay={0.08 * index}>
                <article className="h-full rounded-[2rem] border border-line bg-white/90 p-6 shadow-[0_22px_55px_rgba(56,39,27,0.08)] sm:p-7">
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                    Step {index + 1}
                  </span>
                  <h3 className="font-display mt-4 text-2xl text-foreground sm:text-3xl">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-foreground/72">{card.body}</p>
                </article>
              </AnimatedInView>
            </AnimatedCard>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper tone="warm">
        <AnimatedInView>
          <SectionHeading
            align="center"
            description={siteContent.gallerySection.description}
            eyebrow={siteContent.gallerySection.eyebrow}
            title={siteContent.gallerySection.title}
          />
        </AnimatedInView>
        <div className="mt-12">
          <GalleryMasonry items={siteContent.gallerySection.items} />
        </div>
      </SectionWrapper>

      <CTASection
        actions={siteContent.ctaBand.actions}
        description={siteContent.ctaBand.description}
        eyebrow={siteContent.ctaBand.eyebrow}
        title={siteContent.ctaBand.title}
      />
    </>
  );
}
