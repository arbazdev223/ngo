"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedCard({ children, className }: AnimatedCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      transition={{ duration: 0.25, ease: "easeOut" }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -8,
              scale: 1.01,
            }
      }
    >
      {children}
    </motion.div>
  );
}
