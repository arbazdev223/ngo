import { ActionLink } from "@/components/action-link";
import { AnimatedInView } from "@/components/animated-in-view";
import { SectionWrapper } from "@/components/section-wrapper";
import type { ActionItem, LocalizedText } from "@/content/config";

interface CTASectionProps {
  eyebrow: LocalizedText;
  title: string;
  description: string;
  actions: ActionItem[];
}

export function CTASection({
  eyebrow,
  title,
  description,
  actions,
}: CTASectionProps) {
  return (
    <SectionWrapper tone="ink">
      <AnimatedInView>
        <div className="rounded-[2.25rem] border border-white/10 bg-[linear-gradient(120deg,rgba(217,164,73,0.16),rgba(190,93,63,0.22),rgba(14,59,59,0.32))] px-5 py-8 shadow-[0_32px_80px_rgba(4,4,4,0.24)] sm:px-8 sm:py-10 lg:px-14 lg:py-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f2c978] sm:text-xs sm:tracking-[0.32em]">
            {eyebrow.en}
          </p>
          {eyebrow.hi ? (
            <p className="font-hindi mt-3 text-xs text-white/74 sm:text-sm">{eyebrow.hi}</p>
          ) : null}
          <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <h2 className="font-display max-w-4xl text-3xl leading-tight text-white text-pretty sm:text-4xl md:text-5xl">
                {title}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/78 sm:mt-5 sm:text-base sm:leading-8">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
              {actions.map((action) => (
                <ActionLink
                  className={
                    action.variant === "secondary"
                      ? "border-white/20 bg-white/10 text-white hover:bg-white/16"
                      : undefined
                  }
                  href={action.href}
                  key={action.href}
                  variant={action.variant}
                >
                  {action.label}
                </ActionLink>
              ))}
            </div>
          </div>
        </div>
      </AnimatedInView>
    </SectionWrapper>
  );
}
