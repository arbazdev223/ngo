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
  "Our Work",
  "Explore Shehri Kamgar Samaj's work areas across worker rights, community support, legal aid, health, education, environment, and livelihood development.",
);

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        description={siteContent.workPage.hero.description}
        eyebrow={siteContent.workPage.hero.eyebrow}
        image={siteContent.workPage.hero.image}
        title={siteContent.workPage.hero.title}
      />

      <SectionWrapper tone="warm">
        <AnimatedInView>
          <SectionHeading
            align="center"
            description="Each work area below comes from the NGO&apos;s own program framing and has been translated into web-ready language without losing the original direction."
            eyebrow={{ en: "Detailed focus areas" }}
            title="From migrant workers to slum communities, the work stays practical and local."
          />
        </AnimatedInView>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {siteContent.workAreas.map((area, index) => (
            <AnimatedCard key={area.slug}>
              <AnimatedInView delay={0.05 * index}>
                <article className="flex h-full flex-col rounded-[2rem] border border-line bg-white/92 p-7 shadow-[0_24px_60px_rgba(56,39,27,0.08)]">
                  <p className="font-hindi text-sm text-accent">{area.title.hi}</p>
                  <h2 className="font-display mt-3 text-3xl text-foreground">{area.title.en}</h2>
                  <p className="mt-4 text-sm leading-7 text-foreground/72">{area.summary}</p>
                  <p className="mt-4 text-sm leading-7 text-foreground/68">{area.detail}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
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
      </SectionWrapper>

      <SectionWrapper tone="muted">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
          <AnimatedInView>
            <SectionHeading
              description="The work is designed to move from listening to organized response, which is why the site architecture makes it easy to see programs, trust signals, and participation pathways together."
              eyebrow={{ en: "How the work is approached" }}
              title="The goal is not visibility alone. The goal is dependable presence."
            />
            <div className="mt-6 space-y-5 text-base leading-8 text-foreground/72">
              <p>
                Whether the issue is wage insecurity, schooling gaps, access to health support, or a need for legal guidance, the NGO&apos;s role is positioned as a local connector and organizer rather than a distant voice.
              </p>
              <p>
                That is why the site highlights support for migrant workers, slum development, health and education, legal aid, environmental resilience, and livelihood-linked community strengthening all within one connected narrative.
              </p>
            </div>
          </AnimatedInView>

          <AnimatedInView delay={0.08}>
            <aside className="rounded-[2rem] border border-line bg-white/92 p-6 shadow-[0_22px_60px_rgba(56,39,27,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                Continue exploring
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <ActionLink href="/programs" variant="ghost">
                  View Programs
                </ActionLink>
                <ActionLink href="/get-involved#volunteer" variant="ghost">
                  Join as a Volunteer
                </ActionLink>
              </div>
            </aside>
          </AnimatedInView>
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
