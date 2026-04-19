"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import type { GalleryItem } from "@/content/config";

interface GalleryMasonryProps {
  items: GalleryItem[];
}

export function GalleryMasonry({ items }: GalleryMasonryProps) {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const activeItem = activeIndex === null ? null : items[activeIndex];

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? current : (current + 1) % items.length,
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null ? current : (current - 1 + items.length) % items.length,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, items.length]);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {items.map((item, index) => (
          <motion.button
            className="group relative block w-full overflow-hidden rounded-[1.9rem] border border-line bg-white text-left shadow-[0_20px_55px_rgba(56,39,27,0.08)]"
            key={item.id}
            onClick={() => setActiveIndex(index)}
            transition={{ duration: 0.25, ease: "easeOut" }}
            type="button"
            whileHover={reduceMotion ? undefined : { y: -6 }}
          >
            <div className="relative">
              <Image
                alt={item.alt}
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                height={item.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                src={item.kind === "video" && item.posterSrc ? item.posterSrc : item.src}
                width={item.width}
              />
              <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(15,10,8,0.8))] px-5 pb-5 pt-16 text-white">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/84">
                    {item.tag}
                  </span>
                  {item.kind === "video" && item.durationLabel ? (
                    <span className="rounded-full bg-[#f2c978] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2f1d14]">
                      {item.durationLabel}
                    </span>
                  ) : null}
                </div>
                <p className="mt-3 text-sm leading-7 text-white/82">{item.caption}</p>
              </div>
              {item.kind === "video" ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-black/45 text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                    Play
                  </span>
                </div>
              ) : null}
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[80] bg-black/82 px-3 py-4 backdrop-blur-md sm:px-4 sm:py-5"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <div
              aria-describedby="gallery-lightbox-caption"
              aria-modal="true"
              className="mx-auto flex h-full max-w-6xl min-w-0 flex-col"
              onClick={(event) => event.stopPropagation()}
              role="dialog"
            >
              <div className="mb-4 flex flex-col gap-3 text-white sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f2c978] sm:text-xs sm:tracking-[0.24em]">
                    {activeItem.tag}
                  </p>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-white/74 sm:leading-7">
                    {activeItem.alt}
                  </p>
                </div>
                <button
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 sm:h-11 sm:w-11"
                  onClick={() => setActiveIndex(null)}
                  ref={closeButtonRef}
                  type="button"
                >
                  <span className="sr-only">Close gallery preview</span>
                  <span aria-hidden="true">X</span>
                </button>
              </div>

              <div className="relative flex-1 overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 p-2 sm:p-3">
                <div className="flex h-full items-center justify-center overflow-hidden rounded-[1.5rem] bg-black/60">
                  {activeItem.kind === "image" ? (
                    <Image
                      alt={activeItem.alt}
                      className="max-h-[60vh] w-auto object-contain sm:max-h-[78vh]"
                      height={activeItem.height}
                      sizes="90vw"
                      src={activeItem.src}
                      width={activeItem.width}
                    />
                  ) : (
                    <video
                      className="max-h-[60vh] w-full rounded-[1.25rem] bg-black object-contain sm:max-h-[78vh]"
                      controls
                      playsInline
                      preload="metadata"
                      src={activeItem.src}
                    />
                  )}
                </div>

                <button
                  className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-sm sm:left-6 sm:h-12 sm:w-12"
                  onClick={() =>
                    setActiveIndex((current) =>
                      current === null ? current : (current - 1 + items.length) % items.length,
                    )
                  }
                  type="button"
                >
                  <span className="sr-only">Previous gallery item</span>
                  <span aria-hidden="true">&lt;</span>
                </button>
                <button
                  className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-sm sm:right-6 sm:h-12 sm:w-12"
                  onClick={() =>
                    setActiveIndex((current) =>
                      current === null ? current : (current + 1) % items.length,
                    )
                  }
                  type="button"
                >
                  <span className="sr-only">Next gallery item</span>
                  <span aria-hidden="true">&gt;</span>
                </button>
              </div>

              <div
                className="mt-4 rounded-[1.5rem] border border-white/10 bg-white/10 p-4 text-white"
                id="gallery-lightbox-caption"
              >
                <p className="text-sm leading-7 text-white/82 sm:text-base sm:leading-8">
                  {activeItem.caption}
                </p>
                {activeItem.kind === "video" && activeItem.durationLabel ? (
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f2c978] sm:text-xs sm:tracking-[0.24em]">
                    Duration: {activeItem.durationLabel}
                  </p>
                ) : null}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
