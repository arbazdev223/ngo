"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { ActionLink } from "@/components/action-link";
import type { ActionItem, LocalizedText, MediaAsset } from "@/content/config";

interface HeroSectionProps {
  eyebrow: LocalizedText;
  title: string;
  summary: string;
  quickNotes: string[];
  trustPills: string[];
  primaryAction: ActionItem;
  secondaryAction: ActionItem;
  floatingCard: {
    title: string;
    items: string[];
  };
  media: {
    poster: MediaAsset;
    videoSrc?: string;
    heavyVideoNotice?: string;
  };
}

type NavigatorWithConnection = Navigator & {
  connection?: {
    saveData?: boolean;
  };
};

export function HeroSection({
  eyebrow,
  title,
  summary,
  quickNotes,
  trustPills,
  primaryAction,
  secondaryAction,
  floatingCard,
  media,
}: HeroSectionProps) {
  const reduceMotion = useReducedMotion();
  const [loadVideo, setLoadVideo] = useState(false);

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

  const noteCards = useMemo(
    () =>
      quickNotes.map((note, index) => ({
        id: `${note}-${index}`,
        note,
      })),
    [quickNotes],
  );

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <Image
          alt={media.poster.alt}
          className="object-cover"
          fill
          priority
          sizes="100vw"
          src={media.poster.src}
        />
        {loadVideo && media.videoSrc ? (
          <motion.video
            animate={{ opacity: 1 }}
            aria-hidden="true"
            autoPlay
            className="absolute inset-0 h-full w-full object-cover"
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
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(22,17,14,0.9),rgba(22,17,14,0.56),rgba(22,17,14,0.82))]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(180deg,transparent,rgba(247,239,230,0.98))]" />
        <div className="absolute -left-12 top-12 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(215,164,73,0.42),transparent_68%)] blur-2xl" />
        <div className="absolute bottom-16 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(190,93,63,0.34),transparent_70%)] blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-[96svh] max-w-7xl items-center gap-10 px-5 pb-20 pt-28 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:px-8 lg:pb-24">
        <div>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold uppercase tracking-[0.34em] text-[#f2c978]"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            transition={{ duration: 0.55 }}
          >
            {eyebrow.en}
          </motion.p>
          {eyebrow.hi ? (
            <motion.p
              animate={{ opacity: 1, y: 0 }}
              className="font-hindi mt-3 text-sm text-white/78"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              {eyebrow.hi}
            </motion.p>
          ) : null}
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="font-display mt-6 max-w-4xl text-5xl leading-[0.92] text-white text-pretty sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            {title}
          </motion.h1>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {summary}
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.28 }}
          >
            <ActionLink href={primaryAction.href} variant={primaryAction.variant}>
              {primaryAction.label}
            </ActionLink>
            <ActionLink href={secondaryAction.href} variant={secondaryAction.variant}>
              {secondaryAction.label}
            </ActionLink>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            transition={{ duration: 0.6, delay: 0.34 }}
          >
            {trustPills.map((pill) => (
              <span
                className="rounded-full border border-white/16 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.14em] uppercase text-white/84 backdrop-blur-sm"
                key={pill}
              >
                {pill}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.aside
          animate={{ opacity: 1, x: 0 }}
          className="relative lg:justify-self-end"
          initial={{ opacity: 0, x: reduceMotion ? 0 : 30 }}
          transition={{ duration: 0.75, delay: 0.24 }}
        >
          <div className="rounded-[2rem] border border-white/14 bg-white/10 p-6 shadow-[0_28px_70px_rgba(15,10,8,0.28)] backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f2c978]">
              Human-centered fieldwork
            </p>
            <h2 className="font-display mt-4 text-3xl leading-tight text-white">
              {floatingCard.title}
            </h2>
            <div className="mt-6 space-y-4">
              {noteCards.map((item, index) => (
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-[1.5rem] border border-white/10 bg-black/18 p-4"
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
                  key={item.id}
                  transition={{ duration: 0.45, delay: 0.36 + index * 0.08 }}
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#f2c978] text-xs font-black text-[#3b2517]">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-7 text-white/80">{item.note}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {media.heavyVideoNotice ? (
              <p className="mt-5 text-xs leading-6 text-white/58">
                {media.heavyVideoNotice}
              </p>
            ) : null}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
