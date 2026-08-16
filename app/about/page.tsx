import { ActionLink } from "@/components/action-link";
import { AnimatedCard } from "@/components/animated-card";
import { AnimatedInView } from "@/components/animated-in-view";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { SectionWrapper } from "@/components/section-wrapper";
import { siteContent } from "@/content/config";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "About Us",
  "Learn about the mission, goals, objectives, and trust signals behind Shehri Kamgar Samaj.",
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        contentClassName="translate-y-12 sm:translate-y-16 lg:translate-y-20"
        actions={siteContent.aboutPage.hero.actions}
        description={siteContent.aboutPage.hero.description}
        eyebrow={siteContent.aboutPage.hero.eyebrow}
        image={siteContent.aboutPage.hero.image}
        title={siteContent.aboutPage.hero.title}
      />

      <SectionWrapper tone="warm">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:items-start">
          <AnimatedInView>
            <SectionHeading
              description={siteContent.aboutPage.mission.description}
              eyebrow={{ en: "Mission and orientation" }}
              title={siteContent.aboutPage.mission.title}
            />
            <p className="mt-6 max-w-3xl text-sm leading-7 text-foreground/74 sm:text-base sm:leading-8">
              The NGO&apos;s public web presence is designed around the same principles that make fieldwork meaningful: proximity, patience, and practical support. The website avoids inflated claims and instead makes the work, documents, and contact pathways easier to understand.
            </p>
          </AnimatedInView>

          <AnimatedInView delay={0.08}>
            <aside className="rounded-[2rem] border border-line bg-white/88 p-6 shadow-[0_24px_60px_rgba(56,39,27,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                Delhi roots
              </p>
              <h2 className="font-display mt-4 text-2xl text-foreground sm:text-3xl">
                {siteContent.site.address}
              </h2>
              <p className="mt-4 text-sm leading-7 text-foreground/72">
                The organization is represented online as a field-connected NGO rooted in Badarpur, New Delhi, with work focused on workers, women, and underserved settlements.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <ActionLink href="/contact" variant="ghost">
                  Contact the NGO
                </ActionLink>
              </div>
            </aside>
          </AnimatedInView>
        </div>
      </SectionWrapper>

      <SectionWrapper tone="muted">
        <div className="grid gap-5 sm:grid-cols-2">
          <AnimatedCard>
            <AnimatedInView>
              <article className="h-full rounded-[2rem] border border-line bg-white/92 p-6 shadow-[0_22px_60px_rgba(56,39,27,0.08)] sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-accent">
                  Vision
                </p>
                <div className="mt-5 space-y-4 text-sm leading-7 text-foreground/74">
                  {siteContent.aboutPage.goals.map((goal) => (
                    <p key={goal}>- {goal}</p>
                  ))}
                </div>
              </article>
            </AnimatedInView>
          </AnimatedCard>

          <AnimatedCard>
            <AnimatedInView delay={0.08}>
              <article className="h-full rounded-[2rem] border border-line bg-white/92 p-6 shadow-[0_22px_60px_rgba(56,39,27,0.08)] sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-accent">
                  Objectives
                </p>
                <div className="mt-5 space-y-4 text-sm leading-7 text-foreground/74">
                  {siteContent.aboutPage.objectives.map((objective) => (
                    <p key={objective}>- {objective}</p>
                  ))}
                </div>
              </article>
            </AnimatedInView>
          </AnimatedCard>
        </div>
      </SectionWrapper>

      {/* <SectionWrapper tone="warm">
        <AnimatedInView>
          <SectionHeading
            align="center"
            description="These notes are presented clearly so the website can build confidence without claiming more than what is already visible in the NGO's materials and location details."
            eyebrow={{ en: "Credibility markers", hi: "??????????? ?? ?????" }}
            title="Trust grows when documents, location, and purpose are easy to see."
          />
        </AnimatedInView>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {siteContent.aboutPage.trustNotes.map((note, index) => (
            <AnimatedCard key={note}>
              <AnimatedInView delay={0.08 * index}>
                <article className="rounded-[2rem] border border-line bg-white/90 p-6 shadow-[0_22px_60px_rgba(56,39,27,0.08)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                    Note {index + 1}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-foreground/74">{note}</p>
                </article>
              </AnimatedInView>
            </AnimatedCard>
          ))}
        </div>
      </SectionWrapper> */}

      {/* <TrustSection
        description={siteContent.trustSection.description}
        eyebrow={siteContent.trustSection.eyebrow}
        items={siteContent.trustSection.items}
        title={siteContent.trustSection.title}
      /> */}

      <CTASection
        actions={siteContent.ctaBand.actions}
        description={siteContent.ctaBand.description}
        eyebrow={siteContent.ctaBand.eyebrow}
        title={siteContent.ctaBand.title}
      />
    </>
  );
}
