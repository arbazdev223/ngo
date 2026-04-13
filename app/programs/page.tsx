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
  "Programs",
  "Browse the programs and initiatives through which Shehri Kamgar Samaj supports communities in Delhi.",
);

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        description={siteContent.programsSection.description}
        eyebrow={siteContent.programsSection.eyebrow}
        image={siteContent.humanStory.image}
        title={siteContent.programsSection.title}
      />

      <SectionWrapper tone="warm">
        <AnimatedInView>
          <SectionHeading
            align="center"
            description="Programs are shown as clear, modular initiatives so the site can scale later without rewriting page structure."
            eyebrow={{ en: "Config-driven program cards" }}
            title="A future-ready content system for evolving NGO initiatives."
          />
        </AnimatedInView>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {siteContent.programsSection.items.map((program, index) => (
            <AnimatedCard key={program.title}>
              <AnimatedInView delay={0.05 * index}>
                <article className="flex h-full flex-col rounded-[2rem] border border-line bg-white/92 p-7 shadow-[0_24px_60px_rgba(56,39,27,0.08)]">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-[#f7ede4] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                      {program.theme}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/45">
                      {program.format}
                    </span>
                  </div>
                  <h2 className="font-display mt-5 text-3xl text-foreground">{program.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-foreground/72">
                    {program.description}
                  </p>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
                    Audience
                  </p>
                  <p className="mt-2 text-sm leading-7 text-foreground/68">
                    {program.audience}
                  </p>
                </article>
              </AnimatedInView>
            </AnimatedCard>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper tone="muted">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <AnimatedInView>
            <SectionHeading
              description="Because the copy now lives in a central config file, each program card can expand later into richer stories, multilingual content, or deeper program pages without changing the site shell."
              eyebrow={{ en: "Scalability built in" }}
              title="The website is ready for more initiatives, more language layers, and richer documentation."
            />
          </AnimatedInView>
          <AnimatedInView delay={0.08}>
            <aside className="rounded-[2rem] border border-line bg-white/92 p-6 shadow-[0_22px_60px_rgba(56,39,27,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                Next step
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <ActionLink href="/contact" variant="ghost">
                  Contact the NGO
                </ActionLink>
                <ActionLink href="/get-involved#donate" variant="ghost">
                  Support a Program
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
