import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { PageCrossLinks } from "@/components/layout/page-cross-links";
import { brandValueTeasers } from "@/lib/brand-content";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Ela Greens, Ela Herbs, Ela Berries, and the Ela Box — grown in Saudi Arabia for B2B programmes, retail, and direct subscription.",
};

const lines = [
  {
    name: "Ela Greens",
    channel: "B2B + B2C",
    summary:
      "The high-frequency backbone for hotels, cloud kitchens, and households that want salad without the flight miles.",
    copy:
      "Butterhead, romaine, iceberg, spinach, kale, arugula, mesclun — harvested on schedule so chefs can plan menus and families can build habits. In Saudi Arabia, leafy demand keeps climbing with hospitality and health-conscious retail; we are positioned to close the gap between import calendars and same-day freshness.",
    bullets: [
      "Retail-ready bags and foodservice packs — consistent weights and shelf presence.",
      "Same-day corridor from the Riyadh-area greenhouse — fewer spoilage surprises.",
      "Seasonal rotations that respect what grows best in NFT under LED, without gimmicks.",
    ],
    images: {
      hero: "/brand/farm-variation-4.png",
      a: "/brand/farm-variation-3.png",
      b: "/brand/farm-variation-5.png",
    },
  },
  {
    name: "Ela Herbs",
    channel: "B2B + B2C",
    summary:
      "Aroma and margin in the same harvest window — from basil for Neapolitan pizzas to microgreens for tasting menus.",
    copy:
      "Basil, mint, coriander, parsley, dill, chives, microgreens — delicate crops that punish long supply chains. Growing them locally means flavour that survives the short trip to the plate, not the long trip from another continent. That is the Saudi opportunity: premium herbs without premium airfreight.",
    bullets: [
      "Chef-first SKUs — bunches, clamshells, and custom cuts for high-volume kitchens.",
      "Controlled environment reduces pesticide positioning tension — transparency wins trust.",
      "Expandable lines as we prove throughput and partner demand.",
    ],
    images: {
      hero: "/brand/farm-variation-6.png",
      a: "/brand/farm-variation-7.png",
      b: "/brand/ela-future-farms-brand-identity (18).png",
    },
  },
  {
    name: "Ela Berries",
    channel: "B2C + premium B2B",
    summary:
      "Strawberries as a hero SKU — gifting, retail theatre, and the emotional proof that local can be luxurious.",
    copy:
      "Dutch buckets let us chase berry quality in a climate that used to outsource the category. Premium positioning, limited drops, and packaging that feels as serious as the farm behind it — with room to extend the line as we master pollination, Brix, and pack-out.",
    bullets: [
      "Windowed punnets and gift experiences aligned with Ramadan, Eid, and hospitality peaks.",
      "B2B for dessert programmes and retail — timed harvests for predictable promotions.",
      "Future line extensions when agronomy and market pull justify the square metres.",
    ],
    images: {
      hero: "/brand/hero-strawberry.jpg",
      a: "/brand/product-bottle.png",
      b: "/brand/farm-variation-10.png",
    },
  },
  {
    name: "Ela Box",
    channel: "B2C",
    summary:
      "Weekly curated subscription — community, storytelling, and the habit of eating from the desert.",
    copy:
      "A curated box that rotates with what the farm does best: greens, herbs, and seasonal surprises — with less packaging noise and more narrative. It is the retail front door for the brand: neighbours, creators, and families who want to feel the farm in their kitchen.",
    bullets: [
      "Seasonal mixes and add-ons — built for repeatability, not one-off stunts.",
      "Direct line to feedback — what people eat next week shapes what we plant next month.",
      "Community drops and farm-story content — the soul side of Science vs Soul.",
    ],
    images: {
      hero: "/brand/stationery.png",
      a: "/brand/farm-variation-3.png",
      b: "/brand/Generated Image March 24, 2026 - 6_51PM.jpg",
    },
  },
];

export default function ProductsPage() {
  return (
    <div>
      <section className="border-b border-border bg-mesh-hero py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ela-mid-green">Products</p>
            <h1 className="mt-4 max-w-4xl font-heading text-4xl tracking-tight sm:text-5xl lg:text-6xl">
              Lines shaped for import gaps, chef demand, and Saudi tables.
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed">
              Dual-channel from day one: roughly sixty percent B2B and forty percent B2C in early years, with room to
              rebalance as retail scales. Pricing targets a modest premium over imports — justified by same-day freshness,
              transparent growing, and local provenance. Every line below maps to how we actually grow, pack, and deliver.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-b border-border bg-ela-obsidian py-14 text-ela-cream">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ela-light-green">Why local matters here</p>
              <h2 className="mt-3 font-heading text-2xl tracking-tight sm:text-3xl">
                Saudi Arabia is investing in the future of food — not just more volume, but smarter volume.
              </h2>
              <p className="mt-4 max-w-xl text-ela-cream/85 leading-relaxed">
                National programmes emphasise water efficiency, greenhouse tech, and private-sector participation. Ela
                lines are designed for that reality: SKUs that hotels already search for, berries that used to feel
                imported, and subscription retail that builds loyalty around a homegrown story.
              </p>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
              <Image src="/brand/farm-variation-1.png" alt="Indoor hydroponic production" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/20 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-ela-mid-green">Aligned with</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {brandValueTeasers.map((v) => (
              <div key={v.title} className="rounded-xl border border-border bg-card px-4 py-4 text-center shadow-sm">
                <p className="font-heading text-lg text-ela-deep">{v.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{v.line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-24 px-4 py-20 sm:px-6 lg:px-8">
        {lines.map((line, i) => (
          <ScrollReveal key={line.name}>
            <div
              className={cn(
                "grid gap-10 lg:grid-cols-12 lg:gap-8 lg:items-start",
                i % 2 === 1 && "lg:[&>div:first-child]:order-2",
              )}
            >
              <div className="lg:col-span-7">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-xl sm:col-span-2 sm:row-span-2 sm:aspect-auto lg:col-span-2 lg:row-span-2">
                    <Image src={line.images.hero} alt={`${line.name} hero`} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-xl border border-border shadow-md sm:aspect-auto lg:min-h-[140px]">
                    <Image src={line.images.a} alt="" fill className="object-cover" sizes="(min-width: 1024px) 20vw, 50vw" />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-xl border border-border shadow-md sm:aspect-auto lg:min-h-[140px]">
                    <Image src={line.images.b} alt="" fill className="object-cover" sizes="(min-width: 1024px) 20vw, 50vw" />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <Badge variant="secondary" className="mb-3 text-ela-deep">
                  {line.channel}
                </Badge>
                <h2 className="font-heading text-3xl tracking-tight text-ela-deep sm:text-4xl">{line.name}</h2>
                <p className="mt-3 text-base font-medium text-foreground/90">{line.summary}</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">{line.copy}</p>
                <ul className="mt-6 space-y-3 text-sm text-foreground/90">
                  {line.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-ela-deep" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Card className="mt-6 border-border/80 bg-card/80">
                  <CardContent className="p-5 text-sm text-muted-foreground">
                    Packaging follows the biotech-atelier direction — premium olive greens, windowed berry packs, and gift
                    experiences that feel as serious as the farm behind them.
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </section>

      <section className="border-t border-border bg-ela-deep py-16 text-ela-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 lg:col-span-2">
              <Image src="/brand/product-bottle-vertical.png" alt="Ela branded bottle in vertical farm" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ela-light-green">Commercial</p>
              <p className="mt-3 text-lg text-ela-cream/90 leading-relaxed">
                Ready to brief our team on volumes, SLAs, and SKU mix? We will walk you through harvest calendars, lead
                times, and how each line fits Saudi retail and hospitality peaks.
              </p>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "mt-6 inline-flex w-fit bg-ela-cream text-ela-deep hover:bg-ela-warm-white",
                )}
              >
                Contact commercial
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PageCrossLinks excludeHref="/products" title="More to see" eyebrow="Navigate" />
    </div>
  );
}
