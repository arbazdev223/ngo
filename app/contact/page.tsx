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
  "Contact",
  "Reach Shehri Kamgar Samaj through a contact page designed around trust, clarity, and manual follow-up.",
);

export default function ContactPage() {
  const visibleChannels = siteContent.contactPage.channels.filter(
    (channel) => channel.isVisible,
  );

  return (
    <>
      <PageHero
        description={siteContent.contactPage.hero.description}
        eyebrow={siteContent.contactPage.hero.eyebrow}
        image={siteContent.contactPage.hero.image}
        title={siteContent.contactPage.hero.title}
      />

      <SectionWrapper tone="warm">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="space-y-5">
            <AnimatedInView>
              <SectionHeading
                description="Address, phone numbers, and email are listed for direct and trusted outreach."
                eyebrow={{ en: "Visit or write to us" }}
                title="Contact information that keeps trust visible."
              />
            </AnimatedInView>

            {visibleChannels.map((channel, index) => (
              <AnimatedCard key={channel.label}>
                <AnimatedInView delay={0.06 * index}>
                  <article className="rounded-[2rem] border border-line bg-white/92 p-6 shadow-[0_22px_60px_rgba(56,39,27,0.08)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                      {channel.label}
                    </p>
                    <p className="mt-4 text-base leading-8 text-foreground/78">
                      {channel.value}
                    </p>
                  </article>
                </AnimatedInView>
              </AnimatedCard>
            ))}

            <AnimatedInView delay={0.18}>
              <div className="rounded-[2rem] border border-line bg-[#fff6ee] p-6 text-sm leading-7 text-foreground/72 shadow-[0_22px_60px_rgba(56,39,27,0.08)]">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                  Trust reference
                </p>
                <p className="mt-4">
                  Registered under Society Act 1860.
                </p>
              </div>
            </AnimatedInView>
          </div>

          <FormComponent
            description="Share your question, request, or coordination need."
            interestLabel="Reason for contact"
            interestPlaceholder="Example: field visit, partnership, or general inquiry"
            interestSuggestions={[
              "General inquiry",
              "Field visit",
              "Partnership",
              "Media or documentation",
            ]}
            intent="general"
            sourcePage="contact"
            submitLabel="Send Inquiry"
            title="Contact form"
          />
        </div>
      </SectionWrapper>

      <SectionWrapper tone="muted">
        <AnimatedInView>
          <SectionHeading
            align="center"
            description="The contact page is intentionally simple: visible address, trust note, and one structured route for outreach."
            eyebrow={{ en: "Practical next steps" }}
            title="Need another route? The site keeps the next actions close by."
          />
        </AnimatedInView>
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <ActionLink href="/get-involved#volunteer" variant="ghost">
            Volunteer with SKS
          </ActionLink>
          <ActionLink href="/get-involved#donate" variant="ghost">
            Support the Work
          </ActionLink>
        </div>
      </SectionWrapper>
    </>
  );
}
