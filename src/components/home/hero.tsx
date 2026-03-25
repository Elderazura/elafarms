"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

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
      <motion.div style={{ y: yBg }} className="absolute inset-0 scale-105">
        <Image
          src="/brand/farm-variation-1.png"
          alt="Rows of hydroponic crops under LED lighting in a controlled indoor farm"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ela-obsidian via-ela-obsidian/55 to-ela-obsidian/25" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#1a1a1a_85%)] opacity-60" />
      </motion.div>

      <motion.div
        style={{ y: yContent, opacity }}
        className="relative z-10 mx-auto flex min-h-[calc(100dvh-4rem)] max-w-7xl flex-col justify-end px-4 pb-20 pt-28 sm:px-6 sm:pb-28 lg:px-8"
      >
        <p className="max-w-xl font-sans text-xs font-semibold uppercase tracking-[0.35em] text-ela-light-green">
          Kingdom of Saudi Arabia
        </p>
        <h1 className="mt-4 max-w-4xl font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-ela-cream sm:text-5xl md:text-6xl lg:text-7xl">
          The freshest food in the desert should come from the desert.
        </h1>
        <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-ela-cream/85">
          Rooted in Science. Grown with Soul. AI-assisted hydroponic farming — zero soil, up to 90% less water, same-day
          harvest for homes and kitchens across Riyadh.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/products"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-11 px-8 text-base shadow-lg shadow-black/20",
            )}
          >
            Explore products
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 border-ela-cream/45 bg-transparent px-8 text-base text-ela-cream hover:bg-ela-cream/12 hover:text-ela-cream",
            )}
          >
            Partner with us
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
