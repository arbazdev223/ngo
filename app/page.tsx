import { ActionLink } from "@/components/action-link";
import { AnimatedCard } from "@/components/animated-card";
import { AnimatedInView } from "@/components/animated-in-view";
import { CTASection } from "@/components/cta-section";
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
      <HeroSection
        eyebrow={siteContent.hero.eyebrow}
        floatingCard={siteContent.hero.floatingCard}
        media={siteContent.hero.media}
        primaryAction={siteContent.hero.primaryAction}
        quickNotes={siteContent.hero.quickNotes}
        secondaryAction={siteContent.hero.secondaryAction}
        summary={siteContent.hero.summary}
        title={siteContent.hero.title}
        trustPills={siteContent.hero.trustPills}
      />

      <SectionWrapper tone="warm">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-end">
          <AnimatedInView>
            <SectionHeading
              description={siteContent.aboutPreview.description}
              eyebrow={siteContent.aboutPreview.eyebrow}
              title={siteContent.aboutPreview.title}
            />
          </AnimatedInView>
          <AnimatedInView delay={0.08}>
            <div className="rounded-[2rem] border border-line bg-white/88 p-6 shadow-[0_24px_60px_rgba(56,39,27,0.08)] sm:p-7">
              <div className="space-y-5 text-sm leading-7 text-foreground/74 sm:text-base sm:leading-8">
                {siteContent.aboutPreview.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                {siteContent.aboutPreview.actions.map((action) => (
                  <ActionLink href={action.href} key={action.href} variant={action.variant}>
                    {action.label}
                  </ActionLink>
                ))}
              </div>
            </div>
          </AnimatedInView>
        </div>
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

      <SectionWrapper id="our-work" tone="warm">
        <AnimatedInView>
          <SectionHeading
            align="center"
            description="The homepage highlights a few pillars, while the full work page expands on all of the NGO's current focus areas."
            eyebrow={{ en: "Featured work areas" }}
            title="Support that starts locally and grows through trust."
          />
        </AnimatedInView>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {featuredWorkAreas.map((area, index) => (
            <AnimatedCard key={area.slug}>
              <AnimatedInView delay={0.06 * index}>
                <article className="flex h-full flex-col rounded-[2rem] border border-line bg-white/90 p-6 shadow-[0_22px_60px_rgba(56,39,27,0.08)]">
                  <p className="font-hindi text-sm text-accent">{area.title.hi}</p>
                  <h3 className="font-display mt-3 text-2xl text-foreground sm:text-3xl">
                    {area.title.en}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-foreground/72">{area.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {area.outcomes.map((outcome) => (
                      <span
                        className="rounded-full bg-[#f8efe5] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/72"
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
        <AnimatedInView className="mt-8 flex justify-center">
          <ActionLink href="/our-work" variant="ghost">
            Explore All Work Areas
          </ActionLink>
        </AnimatedInView>
      </SectionWrapper>

      <SectionWrapper tone="muted">
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
