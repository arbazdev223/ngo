import { ActionLink } from "@/components/action-link";
import { AnimatedCard } from "@/components/animated-card";
import { AnimatedInView } from "@/components/animated-in-view";
import { FormComponent } from "@/components/form-component";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { SectionWrapper } from "@/components/section-wrapper";
import { siteContent } from "@/content/config";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Get Involved",
  "Volunteer with or support Shehri Kamgar Samaj through a clear, conversion-focused involvement flow.",
);

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        description={siteContent.getInvolvedPage.hero.description}
        eyebrow={siteContent.getInvolvedPage.hero.eyebrow}
        image={siteContent.getInvolvedPage.hero.image}
        title={siteContent.getInvolvedPage.hero.title}
      />

      <SectionWrapper tone="warm">
        <AnimatedInView>
          <SectionHeading
            align="center"
            description="Choose the path that fits your intention right now. Both routes flow into the NGO's internal lead process so the next response can stay personal and contextual."
            eyebrow={{ en: "Two clear pathways" }}
            title="Volunteer energy and donor support are both essential to sustained fieldwork."
          />
        </AnimatedInView>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <AnimatedCard>
            <AnimatedInView>
              <article className="rounded-[2rem] border border-line bg-white/92 p-6 shadow-[0_24px_60px_rgba(56,39,27,0.08)] sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                  Volunteer
                </p>
                <h2 className="font-display mt-4 text-2xl text-foreground sm:text-3xl">
                  {siteContent.getInvolvedPage.volunteerPanel.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-foreground/72">
                  {siteContent.getInvolvedPage.volunteerPanel.summary}
                </p>
                <div className="mt-5 space-y-3 text-sm leading-7 text-foreground/70">
                  {siteContent.getInvolvedPage.volunteerPanel.bulletPoints.map((point) => (
                    <p key={point}>- {point}</p>
                  ))}
                </div>
                <div className="mt-6">
                  <ActionLink href="#volunteer" variant="ghost">
                    Go to Volunteer Form
                  </ActionLink>
                </div>
              </article>
            </AnimatedInView>
          </AnimatedCard>

          <AnimatedCard>
            <AnimatedInView delay={0.08}>
              <article className="rounded-[2rem] border border-line bg-white/92 p-6 shadow-[0_24px_60px_rgba(56,39,27,0.08)] sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                  Donate
                </p>
                <h2 className="font-display mt-4 text-2xl text-foreground sm:text-3xl">
                  {siteContent.getInvolvedPage.donatePanel.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-foreground/72">
                  {siteContent.getInvolvedPage.donatePanel.summary}
                </p>
                <div className="mt-5 space-y-3 text-sm leading-7 text-foreground/70">
                  {siteContent.getInvolvedPage.donatePanel.bulletPoints.map((point) => (
                    <p key={point}>- {point}</p>
                  ))}
                </div>
                <div className="mt-6">
                  <ActionLink href="#donate" variant="ghost">
                    Go to Donation Form
                  </ActionLink>
                </div>
              </article>
            </AnimatedInView>
          </AnimatedCard>
        </div>
      </SectionWrapper>

      <SectionWrapper className="scroll-mt-28" id="volunteer" tone="muted">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <AnimatedInView>
            <SectionHeading
              description={siteContent.getInvolvedPage.volunteerPanel.summary}
              eyebrow={{ en: "Volunteer with us" }}
              title="Bring your time, skills, empathy, or documentation support to the field."
            />
            <div className="mt-6 space-y-4 text-sm leading-7 text-foreground/72">
              {siteContent.getInvolvedPage.volunteerPanel.bulletPoints.map((point) => (
                <p key={point}>- {point}</p>
              ))}
            </div>
          </AnimatedInView>

          <FormComponent
            description="Tell us how you would like to volunteer."
            interestLabel="Area of interest"
            interestPlaceholder="Example: education support or documentation"
            interestSuggestions={siteContent.getInvolvedPage.volunteerPanel.suggestions}
            intent="volunteer"
            sourcePage="get-involved"
            submitLabel="Send Volunteer Interest"
            title="Volunteer form"
          />
        </div>
      </SectionWrapper>

      <SectionWrapper className="scroll-mt-28" id="donate" tone="warm">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <AnimatedInView>
            <SectionHeading
              description={siteContent.getInvolvedPage.donatePanel.summary}
              eyebrow={{ en: "Support the work" }}
              title="Share how you would like to contribute and we will follow up personally."
            />
            <div className="mt-6 space-y-4 text-sm leading-7 text-foreground/72">
              {siteContent.getInvolvedPage.donatePanel.bulletPoints.map((point) => (
                <p key={point}>- {point}</p>
              ))}
            </div>
            <div className="mt-6 rounded-[1.75rem] border border-line bg-white/80 p-5 text-sm leading-7 text-foreground/72">
              This version intentionally uses a structured manual follow-up flow instead of a live payment gateway so the site can launch cleanly while financial integration is still being confirmed.
            </div>
          </AnimatedInView>

          <FormComponent
            description="Let us know the kind of support you want to offer."
            interestLabel="Contribution interest"
            interestPlaceholder="Example: one-time support or monthly contribution"
            interestSuggestions={siteContent.getInvolvedPage.donatePanel.suggestions}
            intent="donation"
            sourcePage="get-involved"
            submitLabel="Send Donation Interest"
            title="Donation form"
          />
        </div>
      </SectionWrapper>
    </>
  );
}
