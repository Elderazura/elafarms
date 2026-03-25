"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HeroParticles } from "@/components/motion/hero-particles";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

const heroStats = [
  { label: "Water we do not waste (ballpark)", value: "−90%" },
  { label: "Greenhouse mood (pilot)", value: "1–2 ha" },
  { label: "How we show up", value: "B2B + B2C" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "22%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0.35]);

  return (
    <section ref={ref} className="relative -mt-px min-h-[calc(100dvh-4rem)] overflow-hidden bg-ela-obsidian">
      <motion.div style={{ y: yBg }} className="absolute inset-0 scale-[1.08]">
        <Image
          src="/brand/farm-variation-1.png"
          alt="Rows of hydroponic crops under LED lighting in a controlled indoor farm"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ela-obsidian via-ela-obsidian/50 to-ela-obsidian/25" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,#1a1a1a_20%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(26,26,26,0.4)_45%,transparent_60%)]" />
        <HeroParticles />
      </motion.div>

      <motion.div
        style={{ y: yContent, opacity }}
        className="relative z-10 mx-auto flex min-h-[calc(100dvh-4rem)] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-24 lg:px-8"
      >
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-ela-deep/40 bg-ela-deep/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-ela-light-green backdrop-blur-md">
            Riyadh · yes, we grow that here
          </span>
          <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-ela-cream/90 backdrop-blur-md">
            Hydroponic · same-day harvest (no jet lag)
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="max-w-xl font-sans text-xs font-semibold uppercase tracking-[0.35em] text-ela-light-green">
              Rooted in Science. Grown with Soul. (We had stickers made.)
            </p>
            <h1 className="mt-4 max-w-[20ch] font-heading text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[1.08] tracking-tight text-ela-cream">
              Salad weather, minus the guilt trip.
            </h1>
            <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-ela-cream/85">
              Zero soil, silly amounts less water, and leaves that did not fly business class from another continent. If
              your fridge wants drama, give it strawberries that were still blushing this morning.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/products"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 px-8 text-base shadow-lg shadow-black/20",
                )}
              >
                Show me the greens
              </Link>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 border-ela-cream/45 bg-transparent px-8 text-base text-ela-cream hover:bg-ela-cream/12 hover:text-ela-cream",
                )}
              >
                Feed my kitchen
              </Link>
              <Link
                href="/farm"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "h-12 px-6 text-ela-cream/95 hover:bg-white/10 hover:text-ela-cream",
                )}
              >
                Peek at the farm
              </Link>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3 lg:w-[min(100%,280px)] lg:max-w-none lg:grid-cols-1 lg:pb-1">
            {heroStats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-ela-obsidian/55 px-4 py-4 backdrop-blur-md sm:px-5"
              >
                <p className="font-heading text-2xl font-semibold text-ela-cream lg:text-3xl">{s.value}</p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-ela-cream/65">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
