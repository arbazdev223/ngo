import Image from "next/image";
import Link from "next/link";

import { AnimatedInView } from "@/components/animated-in-view";
import { SectionHeading } from "@/components/section-heading";
import { SectionWrapper } from "@/components/section-wrapper";
import type { LocalizedText, MediaAsset } from "@/content/config";

interface CtaTileItem {
  label: string;
  description: string;
  href: string;
  image: MediaAsset;
}

interface CtaTilesProps {
  eyebrow: LocalizedText;
  title: string;
  items: CtaTileItem[];
}

export function CtaTiles({ eyebrow, title, items }: CtaTilesProps) {
  return (
    <SectionWrapper tone="default">
      <AnimatedInView>
        <SectionHeading align="center" eyebrow={eyebrow} title={title} />
      </AnimatedInView>
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {items.map((item, index) => (
          <AnimatedInView delay={0.08 * index} key={item.href}>
            <Link
              className="group relative block aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] border border-line"
              href={item.href}
            >
              <Image
                alt={item.image.alt}
                className="object-cover transition duration-500 group-hover:scale-[1.04]"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                src={item.image.src}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,15,11,0.05),rgba(20,15,11,0.75))]" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <h3 className="font-display text-xl text-white sm:text-2xl">{item.label}</h3>
                <p className="mt-2 text-sm leading-6 text-white/78">{item.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f2c978]">
                  Explore <span aria-hidden="true">{"->"}</span>
                </span>
              </div>
            </Link>
          </AnimatedInView>
        ))}
      </div>
    </SectionWrapper>
  );
}
