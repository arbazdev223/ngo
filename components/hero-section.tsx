"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

import type { MediaAsset } from "@/content/config";

interface HeroSectionProps {
  media: {
    poster: MediaAsset;
    carouselImages?: MediaAsset[];
    videoSrc?: string;
  };
}

type NavigatorWithConnection = Navigator & {
  connection?: {
    saveData?: boolean;
  };
};

const CAROUSEL_INTERVAL_MS = 5500;

export function HeroSection({ media }: HeroSectionProps) {
  const reduceMotion = useReducedMotion();
  const [loadVideo, setLoadVideo] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const images =
    media.carouselImages && media.carouselImages.length > 0
      ? media.carouselImages
      : [media.poster];

  useEffect(() => {
    if (reduceMotion || !media.videoSrc) {
      return;
    }

    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const connection = (navigator as NavigatorWithConnection).connection;

    const update = () => {
      setLoadVideo(mediaQuery.matches && !connection?.saveData);
    };

    const timeout = window.setTimeout(update, 650);

    mediaQuery.addEventListener("change", update);

    return () => {
      window.clearTimeout(timeout);
      mediaQuery.removeEventListener("change", update);
    };
  }, [media.videoSrc, reduceMotion]);

  useEffect(() => {
    if (reduceMotion || images.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, CAROUSEL_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [images.length, reduceMotion]);

  const activeImage = images[activeIndex];

  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative h-[46svh] w-full sm:h-[58svh] md:h-[72svh]">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            animate={{ opacity: 1 }}
            className="absolute inset-0"
            exit={{ opacity: 0 }}
            initial={{ opacity: reduceMotion ? 1 : 0 }}
            key={activeImage.src}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          >
            <Image
              alt={activeImage.alt}
              className="object-cover object-top"
              fill
              priority={activeIndex === 0}
              sizes="100vw"
              src={activeImage.src}
            />
          </motion.div>
        </AnimatePresence>
        {loadVideo && media.videoSrc ? (
          <motion.video
            animate={{ opacity: 1 }}
            aria-hidden="true"
            autoPlay
            className="absolute inset-0 h-full w-full object-cover object-top"
            initial={{ opacity: 0 }}
            loop
            muted
            playsInline
            poster={media.poster.src}
            preload="none"
            src={media.videoSrc}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
        ) : null}

        {images.length > 1 ? (
          <>
            <button
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/45 sm:left-5 sm:h-10 sm:w-10"
              onClick={() =>
                setActiveIndex((current) => (current - 1 + images.length) % images.length)
              }
              type="button"
            >
              <span aria-hidden="true">&lt;</span>
            </button>
            <button
              aria-label="Next slide"
              className="absolute right-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/45 sm:right-5 sm:h-10 sm:w-10"
              onClick={() => setActiveIndex((current) => (current + 1) % images.length)}
              type="button"
            >
              <span aria-hidden="true">&gt;</span>
            </button>
            <div
              aria-label="Hero image slides"
              className="absolute inset-x-0 bottom-4 flex justify-center gap-2 sm:bottom-6"
              role="tablist"
            >
              {images.map((image, index) => (
                <button
                  aria-label={`Show slide ${index + 1}`}
                  aria-selected={index === activeIndex}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-8 bg-white" : "w-4 bg-white/45 hover:bg-white/70"
                  }`}
                  key={image.src}
                  onClick={() => setActiveIndex(index)}
                  role="tab"
                  type="button"
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
