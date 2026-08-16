import fs from "node:fs/promises";
import path from "node:path";
import Image from "next/image";

import { PageHero } from "@/components/page-hero";
import { SectionWrapper } from "@/components/section-wrapper";
import { siteContent } from "@/content/config";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Gallery",
  "Browse the full collection of images stored in the public folder for Shehri Kamgar Samaj.",
);

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
const excludedImages = new Set([
  "/imsge/WhatsApp%20Image%202026-07-05%20at%2011.50.39%20AM.jpeg",
  "/imsge/WhatsApp%20Image%202026-05-09%20at%2012.04.06%20PM.jpeg",
  "/imsge/WhatsApp%20Image%202026-04-06%20at%206.23.19%20PM%20(1).jpeg",
  "/imsge/IMG-20230816-WA0082.jpg.jpeg",
  "/imsge/pick4.jpg.jpeg",
  "/imsge/WhatsApp%20Image%202026-04-06%20at%206.23.15%20PM.jpeg",
  "/imsge/IMG-20230831-WA0020.jpg.jpeg",
  "/imsge/WhatsApp%20Image%202026-04-06%20at%206.23.18%20PM%20(1).jpeg",
  "/imsge/WhatsApp%20Image%202026-04-06%20at%206.23.17%20PM%20(2).jpeg",
  "/imsge/WhatsApp202026-04-06206.webp",
]);
const lastImagePath = "/imsge/WhatsApp%20Image%202026-04-06%20at%206.23.16%20PM%20(2).jpeg";

async function getGalleryImages() {
  const dir = path.join(process.cwd(), "public", "imsge");
  const entries = await fs.readdir(dir, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => imageExtensions.has(path.extname(name).toLowerCase()))
    .filter((name) => !excludedImages.has(`/imsge/${encodeURIComponent(name)}`))
    .sort((a, b) => {
      const aPath = `/imsge/${encodeURIComponent(a)}`;
      const bPath = `/imsge/${encodeURIComponent(b)}`;

      if (aPath === lastImagePath && bPath !== lastImagePath) {
        return 1;
      }

      if (bPath === lastImagePath && aPath !== lastImagePath) {
        return -1;
      }

      return a.localeCompare(b);
    })
    .map((name) => ({
      src: `/imsge/${encodeURIComponent(name)}`,
      name,
    }));
}

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <>
      <PageHero
        description={siteContent.gallerySection.description}
        eyebrow={siteContent.gallerySection.eyebrow}
        image={{
          src: "/imsge/pick2.jpg.jpeg",
          alt: "Community members gathered together during a local support activity.",
          width: 4080,
          height: 3072,
        }}
        title={siteContent.gallerySection.title}
      />

      <SectionWrapper tone="warm">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {images.map((image) => (
            <article
              className="overflow-hidden rounded-[1.9rem] border border-line bg-white shadow-[0_20px_55px_rgba(56,39,27,0.08)]"
              key={image.name}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  alt=""
                  className="object-cover"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  src={image.src}
                />
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
