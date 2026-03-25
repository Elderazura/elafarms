"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { BrandLogoPng } from "@/components/brand/logo";
import { MarqueeStrip } from "@/components/home/marquee-strip";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Less water vs open-field farming", value: "Up to 90%" },
  { label: "Kingdom land that is arid", value: "90%" },
  { label: "Import reliance we are built to reduce", value: "High" },
  { label: "Hydroponics market CAGR to 2034", value: "9.4%" },
];

type PillarCard =
  | { title: string; num: string; body: string; img: string }
  | { title: string; num: string; body: string; useLogoMark: true };

const pillars: PillarCard[] = [
  {
    title: "Science",
    num: "01",
    body: "Sensors on every channel — pH, EC, dissolved oxygen, temperature, humidity — feeding one operational picture.",
    img: "/brand/farm-variation-2.png",
  },
  {
    title: "Soul",
    num: "02",
    body: "Ela (എല) — leaf. Heritage shows up in how we harvest, pack, and show up for chefs and neighbours.",
    useLogoMark: true,
  },
  {
    title: "Future",
    num: "03",
    body: "Vision 2030 alignment: local produce, water-smart systems, and a brand that can travel from Riyadh outward.",
    img: "/brand/farm-variation-7.png",
  },
];

const productCards = [
  {
    title: "Ela Greens",
    copy: "Butterhead, romaine, kale, mesclun — the daily staple line.",
    img: "/brand/farm-variation-4.png",
    href: "/products",
  },
  {
    title: "Ela Herbs",
    copy: "Basil, mint, coriander, microgreens — flavour and margin in the same window.",
    img: "/brand/farm-variation-6.png",
    href: "/products",
  },
  {
    title: "Ela Berries",
    copy: "Premium strawberries — gifting and retail hero SKUs.",
    img: "/brand/hero-strawberry.jpg",
    href: "/products",
  },
  {
    title: "Ela Box",
    copy: "Weekly curated subscription — seasonal mixes, direct from the farm.",
    img: "/brand/stationery.png",
    href: "/products",
  },
];

const mosaic = [
  "/brand/farm-variation-3.png",
  "/brand/farm-variation-5.png",
  "/brand/farm-variation-9.png",
  "/brand/farm-variation-10.png",
  "/brand/product-bottle.png",
  "/brand/Generated Image March 24, 2026 - 6_51PM.jpg",
];

function HomeSections() {
  const reduce = useReducedMotion();

  return (
    <>
      <MarqueeStrip />

      <section className="border-b border-border bg-ela-deep py-12 text-ela-cream sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ela-light-green">Saudi Arabia · agriculture</p>
              <h2 className="mt-3 max-w-3xl font-heading text-2xl tracking-tight sm:text-3xl">
                The Kingdom is building the future of food — we are growing part of it in Riyadh.
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ela-cream/82 sm:text-base">
                Vision 2030 and national agricultural strategy mean real investment in greenhouses, water discipline, and
                local supply. Ela pairs that macro story with micro precision: NFT lines, Dutch buckets, and harvest rhythms
                designed for Saudi hospitality, retail, and families who want produce that did not circle the globe.
              </p>
            </div>
            <Link
              href="/about"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "h-12 shrink-0 bg-ela-cream px-6 text-ela-deep hover:bg-ela-warm-white lg:self-center",
              )}
            >
              Our story &amp; team
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-mesh-hero relative border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-start lg:gap-10">
            <div className="lg:col-span-5">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-ela-deep/15 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-ela-deep shadow-sm backdrop-blur">
                  <Sparkles className="size-3.5 text-ela-gold" aria-hidden />
                  Oasis 2.0
                </div>
                <h2 className="mt-8 font-heading text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] tracking-tight text-ela-obsidian">
                  A biotech-atelier in the desert — not a postcard farm.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  We pair Malayalam roots with Saudi ambition: LED spectra, recirculating water, and zero compromise on
                  taste. The brand should feel premium without being sterile — alive, precise, and unmistakably local.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/about" className={cn(buttonVariants({ size: "lg" }), "h-12 px-8")}>
                    Read our story
                  </Link>
                  <Link
                    href="/farm"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "h-12 border-ela-deep/25 px-8 text-ela-deep",
                    )}
                  >
                    Tour the facility
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <ScrollReveal className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border shadow-xl sm:row-span-2">
                  <Image
                    src="/brand/farm-variation-4.png"
                    alt="Hydroponic greens in the greenhouse"
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) 35vw, 50vw"
                  />
                </ScrollReveal>
                <ScrollReveal delay={0.08} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-lg">
                  <Image src="/brand/ela-future-farms-brand-identity (18).png" alt="Desk with hydroponic planter and branded stationery" fill className="object-cover" sizes="(min-width: 1024px) 25vw, 50vw" />
                </ScrollReveal>
                <ScrollReveal delay={0.12} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-lg">
                  <Image src="/brand/product-bottle.png" alt="Branded bottle in vertical farm setting" fill className="object-cover" sizes="(min-width: 1024px) 25vw, 50vw" />
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-ela-obsidian py-20 text-ela-cream sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ela-light-green">The numbers</p>
            <h2 className="mt-4 font-heading text-3xl tracking-tight sm:text-4xl lg:text-5xl">
              Why hydroponics is not a novelty here — it is infrastructure.
            </h2>
          </ScrollReveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.06}>
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-ela-light-green/15 blur-2xl" />
                  <p className="font-heading text-4xl font-semibold leading-none text-ela-cream md:text-5xl">{s.value}</p>
                  <p className="mt-4 text-sm leading-snug text-ela-cream/75">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ela-mid-green">Three pillars</p>
            <h2 className="mt-4 font-heading text-3xl tracking-tight sm:text-4xl lg:text-5xl">
              Science, Soul, Future — held in tension on purpose.
            </h2>
          </ScrollReveal>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.08}>
                <motion.div
                  whileHover={reduce ? undefined : { y: -6 }}
                  transition={{ type: "spring", stiffness: 380, damping: 26 }}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/90 bg-card shadow-lg"
                >
                  {"useLogoMark" in p && p.useLogoMark ? (
                    <div className="flex aspect-[16/11] items-center justify-center bg-muted/45 p-8">
                      <BrandLogoPng variant="mark" heightClass="h-28 sm:h-36" />
                    </div>
                  ) : (
                    <div className="relative aspect-[16/11] overflow-hidden">
                      <Image
                        src={"img" in p ? p.img : ""}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(min-width: 1024px) 33vw, 100vw"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-mono text-xs font-medium text-ela-mid-green">{p.num}</p>
                    <h3 className="mt-1 font-heading text-2xl text-ela-deep">{p.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                    <Link href="/farm" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-ela-deep">
                      See operations
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-banner-vision relative overflow-hidden border-b border-border py-16 sm:py-20">
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ela-cream/95">Vision 2030</p>
            <h2 className="mt-3 font-heading text-3xl tracking-tight text-ela-cream sm:text-4xl lg:text-5xl">
              The freshest food in the desert should come from the desert.
            </h2>
            <p className="mt-4 text-ela-cream/90 leading-relaxed">
              B2B programmes for hotels and kitchens — plus direct-to-consumer Ela Box subscriptions when you want the
              story on your table every week.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/products" className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "h-12 bg-ela-cream px-8 text-ela-deep hover:bg-ela-warm-white")}>
              View catalogue
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 border-ela-cream/40 bg-transparent px-8 text-ela-cream hover:bg-ela-cream/10 hover:text-ela-cream",
              )}
            >
              Talk to sales
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-ela-cream/35 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-background shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[320px] lg:min-h-[420px]">
                <Image src="/brand/farm-variation-8.png" alt="Technician in a vertical farm" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ela-mid-green">Inside the farm</p>
                <h2 className="mt-4 font-heading text-3xl tracking-tight sm:text-4xl">Rows of light. Rows of data.</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Tiered NFT lines, LED supplementation, and harvest workflows designed for same-day delivery — so the
                  last mile is measured in hours, not flight hours.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-foreground/90">
                  <li className="flex gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-ela-deep" />
                    Dutch buckets for strawberries — premium line with room to extend.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-ela-deep" />
                    Phase-two roadmap: AI-assisted crop planning and yield forecasting.
                  </li>
                </ul>
                <Link href="/farm" className={cn(buttonVariants(), "mt-8 inline-flex h-11 w-fit px-8")}>
                  Explore the farm
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-b border-border bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ela-mid-green">Product universe</p>
              <h2 className="mt-3 font-heading text-3xl tracking-tight sm:text-4xl lg:text-5xl">Lines built for kitchens and doorsteps.</h2>
              <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
                Swipe — or scroll — through the core SKUs. Every line connects back to the same farm discipline.
              </p>
            </div>
            <Link href="/products" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 shrink-0 border-ela-deep/25 px-6 text-ela-deep")}>
              Full catalogue
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </ScrollReveal>
        </div>
        <div className="mt-12 flex gap-6 overflow-x-auto pb-6 pl-4 pr-4 pt-2 [scrollbar-width:thin] sm:pl-6 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
          {productCards.map((p) => (
            <motion.article
              key={p.title}
              whileHover={reduce ? undefined : { scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="relative w-[min(88vw,340px)] shrink-0 overflow-hidden rounded-2xl border border-border bg-card shadow-xl"
            >
              <Link href={p.href} className="flex h-full flex-col">
                <div className="relative aspect-[4/3] w-full shrink-0">
                  <Image src={p.img} alt="" fill className="object-cover" sizes="340px" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-xl text-ela-deep">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-ela-mid-green">
                    Open line
                    <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="border-b border-border bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ela-mid-green">Gallery</p>
            <h2 className="mt-3 max-w-2xl font-heading text-3xl tracking-tight sm:text-4xl">Colour, steel, chlorophyll.</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              A living grid of moments from the farm — the “Science vs Soul” aesthetic in frames.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:gap-4">
            {mosaic.map((src, i) => (
              <ScrollReveal key={src} delay={i * 0.04}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card shadow-md sm:aspect-square">
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 33vw, 50vw"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-border/80 bg-background shadow-xl">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[280px] lg:min-h-[420px]">
                <Image
                  src="/brand/product-bottle-vertical.png"
                  alt="Ela branded bottle in the vertical farm"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ela-mid-green">Partnerships</p>
                <h2 className="mt-4 font-heading text-3xl tracking-tight sm:text-4xl lg:text-5xl">
                  Farm tours, chef tables, and co-branded menus.
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Let the produce speak first — then we align on supply, SLAs, and seasonal planning.
                </p>
                <p className="mt-4 text-sm text-muted-foreground">hello@theela.farm · theela.farm</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "h-12 px-8")}>
                    Start a conversation
                  </Link>
                  <Link href="/blog" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 px-8")}>
                    Read the journal
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-ela-deep py-16 text-ela-cream sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ela-light-green">Careers</p>
            <h2 className="mt-3 font-heading text-2xl tracking-tight sm:text-3xl">We are hiring growers, operators, and closers.</h2>
            <p className="mt-3 text-sm text-ela-cream/80 leading-relaxed">
              Agronomists, farm technicians, sales — help build one of the Kingdom’s most recognised homegrown produce brands.
            </p>
          </div>
          <Link href="/careers" className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "h-12 shrink-0 bg-ela-cream px-8 text-ela-deep hover:bg-ela-warm-white")}>
            View roles
          </Link>
        </div>
      </section>
    </>
  );
}

export { HomeSections };
export default HomeSections;
