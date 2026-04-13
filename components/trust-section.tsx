import { ActionLink } from "@/components/action-link";
import { AnimatedCard } from "@/components/animated-card";
import { AnimatedInView } from "@/components/animated-in-view";
import { SectionHeading } from "@/components/section-heading";
import { SectionWrapper } from "@/components/section-wrapper";
import type { LocalizedText, TrustItem } from "@/content/config";

interface TrustSectionProps {
  eyebrow: LocalizedText;
  title: string;
  description: string;
  items: TrustItem[];
}

export function TrustSection({
  eyebrow,
  title,
  description,
  items,
}: TrustSectionProps) {
  return (
    <SectionWrapper id="trust" tone="muted">
      <AnimatedInView>
        <SectionHeading
          align="center"
          description={description}
          eyebrow={eyebrow}
          title={title}
        />
      </AnimatedInView>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {items.map((item, index) => (
          <AnimatedCard key={item.title}>
            <AnimatedInView delay={0.08 * index}>
              <article className="h-full rounded-[2rem] border border-line bg-white/90 p-7 shadow-[0_24px_60px_rgba(56,40,29,0.08)]">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                  Trust signal
                </p>
                <h3 className="font-display mt-4 text-3xl text-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-foreground/72">
                  {item.description}
                </p>
                {item.href && item.ctaLabel ? (
                  <div className="mt-6">
                    <ActionLink href={item.href} variant="ghost">
                      {item.ctaLabel}
                    </ActionLink>
                  </div>
                ) : null}
              </article>
            </AnimatedInView>
          </AnimatedCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
