"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Water savings vs traditional farming", value: "Up to 90%" },
  { label: "Saudi land that is arid", value: "90%" },
  { label: "Food still imported (context)", value: "Majority" },
  { label: "Hydroponics market CAGR to 2034", value: "9.4%" },
];

const pillars = [
  {
    title: "Science",
    body: "Sensor-driven channels, real-time pH and EC, and data-optimised yields — precision agriculture built for the desert.",
  },
  {
    title: "Soul",
    body: "Ela means leaf in Malayalam. Heritage and human care show up in every harvest, not just in dashboards.",
  },
  {
    title: "Future",
    body: "Aligned with Vision 2030 — local greens, herbs, and berries that travel hours, not weeks.",
  },
];

const productCards = [
  {
    title: "Ela Greens",
    copy: "Butterhead, romaine, kale, mesclun — the daily staple line for retail and kitchens.",
    img: "/brand/farm-variation-4.png",
  },
  {
    title: "Ela Herbs",
    copy: "Basil, mint, coriander, microgreens — high-turnover flavour for chefs and home cooks.",
    img: "/brand/farm-variation-6.png",
  },
  {
    title: "Ela Berries",
    copy: "Premium strawberries from controlled environments — gifting and retail hero SKUs.",
    img: "/brand/hero-strawberry.jpg",
  },
  {
    title: "Ela Box",
    copy: "Weekly curated subscription — seasonal mixes that build a direct relationship with the farm.",
    img: "/brand/stationery.png",
  },
];

function HomeSections() {
  const reduce = useReducedMotion();

  return (
    <>
      <section className="border-b border-border bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ela-mid-green">Why now</p>
            <h2 className="mt-3 max-w-3xl font-heading text-3xl tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              A bet on a future where the leaf is intelligent enough to grow anywhere.
            </h2>
          </ScrollReveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.06}>
                <Card className="border-border/80 bg-card/80 shadow-sm backdrop-blur-sm">
                  <CardContent className="p-6">
                    <p className="font-heading text-3xl text-ela-deep md:text-4xl">{s.value}</p>
                    <p className="mt-2 text-sm leading-snug text-muted-foreground">{s.label}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-ela-cream/50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl tracking-tight text-foreground sm:text-4xl">Science, Soul, Future</h2>
            <p className="mt-3 max-w-2xl font-sans text-muted-foreground">
              A sophisticated fusion of clinical precision and organic vitality — the cold clarity of data meeting the
              warmth of living harvests.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.08}>
                <motion.div
                  whileHover={reduce ? undefined : { y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                >
                  <Card className="h-full overflow-hidden border-border/80 bg-background/90 shadow-md">
                    <div className="h-1.5 bg-gradient-to-r from-ela-deep via-ela-olive to-ela-light-green" />
                    <CardContent className="space-y-3 p-6">
                      <h3 className="font-heading text-xl text-ela-deep">{p.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-b border-border bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-heading text-3xl tracking-tight sm:text-4xl">Product lines</h2>
              <p className="mt-2 max-w-xl text-muted-foreground">
                B2B reliability and B2C subscriptions — one farm, multiple ways to taste the difference.
              </p>
            </div>
            <Link
              href="/products"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "inline-flex items-center gap-2 self-start text-ela-deep sm:self-auto",
              )}
            >
              Full catalogue
              <ArrowRight className="size-4" />
            </Link>
          </ScrollReveal>
        </div>
        <div className="mt-10 flex gap-6 overflow-x-auto pb-4 pl-4 pr-4 pt-2 [scrollbar-width:thin] sm:pl-6 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
          {productCards.map((p) => (
            <motion.article
              key={p.title}
              whileHover={reduce ? undefined : { scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="relative w-[min(85vw,320px)] shrink-0 overflow-hidden rounded-2xl border border-border bg-card shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image src={p.img} alt="" fill className="object-cover" sizes="320px" />
                <div className="absolute inset-0 bg-gradient-to-t from-ela-obsidian/90 via-ela-obsidian/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-ela-cream">
                  <h3 className="font-heading text-xl">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ela-cream/85">{p.copy}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-0">
          <Image
            src="/brand/product-bottle-vertical.png"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ela-obsidian/82" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-2xl">
            <h2 className="font-heading text-3xl tracking-tight text-ela-cream sm:text-4xl lg:text-5xl">
              Farm tours, chef programmes, and co-branded menus.
            </h2>
            <p className="mt-4 text-lg text-ela-cream/85">
              Let the produce speak for itself — then we talk about supply, SLAs, and seasonal planning.
            </p>
            <p className="mt-4 text-sm text-ela-cream/80">
              hello@theela.farm · theela.farm
            </p>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-8 inline-flex h-11 border-0 bg-ela-cream px-8 text-base text-ela-deep hover:bg-ela-warm-white",
              )}
            >
              Start a conversation
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export { HomeSections };
export default HomeSections;
