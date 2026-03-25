"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/brand/logo";
import { SITE_TAGLINE } from "@/lib/site";

const HERO_SLIDES = [
  {
    src: "/brand/farm-variation-1.png",
    alt: "Hydroponic crops under LED lighting in a controlled indoor farm",
  },
  {
    src: "/brand/farm-variation-4.png",
    alt: "Leafy greens growing in NFT channels",
  },
  {
    src: "/brand/farm-variation-8.png",
    alt: "Team member among vertical hydroponic racks",
  },
  {
    src: "/brand/hero-strawberry.jpg",
    alt: "Fresh strawberries from the greenhouse",
  },
  {
    src: "/brand/product-bottle-vertical.png",
    alt: "Ela branded bottle in the vertical farm",
  },
  {
    src: "/brand/farm-variation-3.png",
    alt: "Symmetrical rows of produce under grow lights",
  },
  {
    src: "/brand/ela-future-farms-brand-identity (18).png",
    alt: "Ela Future Farms brand identity and hydroponic planter",
  },
] as const;

const SLIDE_INTERVAL_MS = 5500;
const CROSSFADE_DURATION_S = 1.35;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "12%"]);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <section ref={ref} className="relative -mt-px min-h-[calc(100dvh-4rem)] overflow-hidden bg-ela-obsidian">
      <motion.div style={{ y: yBg }} className="absolute inset-0 scale-[1.02]">
        <div className="absolute inset-0">
          {HERO_SLIDES.map((slide, i) => (
            <motion.div
              key={slide.src}
              className="absolute inset-0"
              initial={false}
              animate={{
                opacity: reduce ? (i === 0 ? 1 : 0) : i === index ? 1 : 0,
              }}
              transition={{
                duration: reduce ? 0 : CROSSFADE_DURATION_S,
                ease: [0.45, 0, 0.55, 1],
              }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-4rem)] max-w-5xl flex-col items-center justify-end gap-6 px-4 pb-[max(4rem,12vh)] pt-28 text-center sm:px-6 lg:gap-0 lg:px-8">
        <div className="flex w-full justify-center lg:hidden">
          <Logo variant="hero" />
        </div>
        <p className="max-w-xl font-heading text-[clamp(1.35rem,3.5vw,2rem)] font-medium leading-snug tracking-tight text-ela-cream drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]">
          {SITE_TAGLINE}
        </p>
      </div>
    </section>
  );
}
