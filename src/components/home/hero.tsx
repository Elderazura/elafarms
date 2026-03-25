"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SITE_TAGLINE } from "@/lib/site";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "12%"]);

  return (
    <section ref={ref} className="relative -mt-px min-h-[calc(100dvh-4rem)] overflow-hidden bg-ela-obsidian">
      <motion.div style={{ y: yBg }} className="absolute inset-0 scale-[1.02]">
        <Image
          src="/brand/farm-variation-1.png"
          alt="Rows of hydroponic crops under LED lighting in a controlled indoor farm"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Single light bottom scrim so the line stays readable — image stays visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-4rem)] max-w-5xl flex-col items-center justify-end px-4 pb-[max(4rem,12vh)] pt-28 text-center sm:px-6 lg:px-8">
        <p className="max-w-xl font-heading text-[clamp(1.35rem,3.5vw,2rem)] font-medium leading-snug tracking-tight text-ela-cream drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]">
          {SITE_TAGLINE}
        </p>
      </div>
    </section>
  );
}
