import Link from "next/link";

import { ActionLink } from "@/components/action-link";
import { SiteLogo } from "@/components/site-logo";
import { siteContent } from "@/content/config";

export function Footer() {
  const hiddenChannelNotes = siteContent.contactPage.channels
    .filter((channel) => !channel.isVisible && channel.note)
    .map((channel) => channel.note as string);

  return (
    <footer className="border-t border-line bg-[#181512] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <SiteLogo className="[&_span:first-child]:shadow-[0_18px_35px_rgba(215,164,73,0.24)] [&_.font-display]:text-white [&_.font-hindi]:text-white/70" />
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/72">
            {siteContent.footer.description}
          </p>
          <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#f2c978]">
              Delhi Address
            </p>
            <p className="mt-3 text-base text-white/82">
              {siteContent.site.address}
            </p>
          </div>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f2c978] sm:text-xs sm:tracking-[0.24em]">
            Explore
          </p>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            {siteContent.footer.quickLinks.map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f2c978] sm:text-xs sm:tracking-[0.24em]">
            Trust Documents
          </p>
          <div className="mt-5 flex flex-col gap-3">
            {siteContent.footer.documents.map((document) => (
              <ActionLink
                className="w-full justify-between border-white/15 bg-white/5 text-white hover:bg-white/10"
                href={document.href}
                key={document.href}
                variant="ghost"
              >
                {document.label}
              </ActionLink>
            ))}
          </div>
          {hiddenChannelNotes.length ? (
            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-4 text-sm leading-7 text-white/70">
              {hiddenChannelNotes.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
