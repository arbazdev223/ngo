import Link from "next/link";

import { ActionLink } from "@/components/action-link";
import { SiteLogo } from "@/components/site-logo-footer";
import { siteContent } from "@/content/config";

export function Footer() {
  const visibleContactChannels = siteContent.contactPage.channels.filter(
    (channel) => channel.isVisible && channel.value,
  );

  return (
    <footer className="border-t border-[#2e2823] bg-[#14110f] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-14 md:grid-cols-2 lg:grid-cols-[1.35fr_0.9fr_1fr] lg:gap-12 lg:px-8">
        <div className="lg:pr-6">
          <SiteLogo className="[&_span:first-child]:shadow-[0_18px_35px_rgba(215,164,73,0.24)] [&_.font-display]:text-white [&_.font-hindi]:text-white/70" />
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/76">
            {siteContent.footer.description}
          </p>
          <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-gradient-to-r from-white/[0.08] to-white/[0.03] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#f2c978]">
              Delhi Address
            </p>
            <p className="mt-3 text-base leading-7 text-white/90">
              {siteContent.site.address}
            </p>
          </div>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f2c978] sm:text-xs sm:tracking-[0.24em]">
            Explore
          </p>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            {siteContent.footer.quickLinks.map((item) => (
              <li key={item.href}>
                <Link className="inline-flex items-center transition hover:translate-x-1 hover:text-[#f2c978]" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f2c978] sm:text-xs sm:tracking-[0.24em]">
            Contact & Documents
          </p>
          <div className="mt-5 space-y-2.5 text-sm text-white/85">
            {visibleContactChannels.map((channel) => (
              <p key={channel.label}>
                <span className="text-white/55">{channel.label}: </span>
                {channel.value}
              </p>
            ))}
          </div>
          <div className="mt-5 flex flex-col gap-3">
            {siteContent.footer.documents.map((document) => (
              <ActionLink
                className="w-full justify-between rounded-2xl !border-[#f2c978]/35 !bg-gradient-to-r !from-[#3a2c22] !to-[#2c221b] px-5 py-3 text-sm font-semibold tracking-[0.04em] !text-[#fff4dd] shadow-[0_10px_28px_rgba(0,0,0,0.28)] transition hover:-translate-y-0.5 hover:!border-[#f2c978]/70 hover:!from-[#463428] hover:!to-[#342820] hover:!text-white"
                href={document.href}
                key={document.href}
                variant="ghost"
              >
                {document.label}
              </ActionLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
