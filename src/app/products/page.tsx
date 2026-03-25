import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { PageCrossLinks } from "@/components/layout/page-cross-links";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Ela Greens, Ela Herbs, Ela Berries, and the Ela Box — B2B programmes and direct subscription retail.",
};

const lines = [
  {
    name: "Ela Greens",
    channel: "B2B + B2C",
    copy: "Butterhead, romaine, iceberg, spinach, kale, arugula, mesclun — the high-frequency core for retail and kitchens.",
    image: "/brand/farm-variation-4.png",
  },
  {
    name: "Ela Herbs",
    channel: "B2B + B2C",
    copy: "Basil, mint, coriander, parsley, dill, chives, microgreens — flavour and margin in the same harvest window.",
    image: "/brand/farm-variation-6.png",
  },
  {
    name: "Ela Berries",
    channel: "B2C + premium B2B",
    copy: "Strawberries first — premium positioning, gifting-ready packs, and room to extend the line over time.",
    image: "/brand/product-bottle.png",
  },
  {
    name: "Ela Box",
    channel: "B2C",
    copy: "Weekly curated subscription — seasonal mixes that build habit and community around the farm story.",
    image: "/brand/stationery.png",
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
              Lines shaped for import gaps and chef demand.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Dual-channel from day one: roughly sixty percent B2B and forty percent B2C in early years, with room to
              rebalance as retail scales. Pricing targets a modest premium over imports — justified by same-day freshness,
              zero pesticides in positioning, and local provenance.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
        {lines.map((line, i) => (
          <ScrollReveal key={line.name}>
            <div
              className={cn(
                "grid gap-10 lg:grid-cols-2 lg:items-center",
                i % 2 === 1 && "lg:[&>div:first-child]:order-2",
              )}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-xl">
                <Image src={line.image} alt="" fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
              </div>
              <div>
                <Badge variant="secondary" className="mb-3 text-ela-deep">
                  {line.channel}
                </Badge>
                <h2 className="font-heading text-3xl tracking-tight text-ela-deep sm:text-4xl">{line.name}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{line.copy}</p>
                <Card className="mt-6 border-border/80 bg-card/80">
                  <CardContent className="p-5 text-sm text-muted-foreground">
                    Packaging follows the biotech-atelier direction — premium olive greens, windowed berry packs, and
                    gift experiences that feel as serious as the farm behind them.
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </section>

      <section className="border-t border-border bg-ela-deep py-16 text-ela-cream">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p className="mt-4 text-lg text-ela-cream/90">
            Ready to brief our team on volumes, SLAs, and SKU mix?
          </p>
          <Link href="/contact" className={cn(buttonVariants({ variant: "secondary" }), "mt-4 sm:mt-0 shrink-0 bg-ela-cream text-ela-deep hover:bg-ela-warm-white")}>
            Contact commercial
          </Link>
        </div>
      </section>

      <PageCrossLinks excludeHref="/products" title="More to see" eyebrow="Navigate" />
    </div>
  );
}
