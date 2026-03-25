import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { PageCrossLinks } from "@/components/layout/page-cross-links";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ela (എല) means leaf in Malayalam — the smallest, most powerful symbol of growth. Three friends, one word, planted in the Arabian desert.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-border bg-mesh-hero py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ela-mid-green">About</p>
            <h1 className="mt-4 max-w-4xl font-heading text-[clamp(2rem,5vw,3.75rem)] leading-[1.08] tracking-tight">
              A Malayalam word for leaf — now growing where nothing was supposed to grow.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We did not come to Saudi Arabia because it was easy. We came because ninety percent of this land is desert,
              most fresh produce is still imported, and Vision 2030 asks for solutions that match the scale of the
              challenge.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-2 lg:items-center lg:px-8">
        <ScrollReveal>
          <h2 className="font-heading text-3xl tracking-tight sm:text-4xl">Heritage and horizon</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The name carries Kerala roots. The farm carries Saudi innovation — NFT lines for greens and herbs, Dutch
            buckets for strawberries, and a roadmap toward AI-assisted crop planning as volumes scale.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We speak warmly and honestly: no vague wellness claims, no jargon for its own sake. When we talk about
            technology, it is because it changes what you taste on the plate.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/farm" className={cn(buttonVariants(), "inline-flex")}>
              See the farm
            </Link>
            <Link
              href="/products"
              className={cn(buttonVariants({ variant: "outline" }), "inline-flex border-ela-deep/25 text-ela-deep")}
            >
              Product lines
            </Link>
          </div>
        </ScrollReveal>
        <ScrollReveal className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border shadow-xl">
          <Image
            src="/brand/stationery.png"
            alt="Ela Future Farms branded stationery beside a hydroponic planter"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </ScrollReveal>
      </section>

      <section className="border-y border-border bg-ela-obsidian py-16 text-ela-cream sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-heading text-2xl italic leading-snug text-ela-cream sm:text-3xl">
            “We carry our roots — Malayalam, South Indian, the ancient wisdom of cultivation — into every conversation,
            without nostalgia.”
          </p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-ela-light-green">Brand voice</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-heading text-2xl tracking-tight sm:text-3xl">On the visual wall</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Identity, packaging, and the controlled environment — the same story told three ways.
          </p>
        </ScrollReveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <ScrollReveal className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border shadow-lg">
            <Image src="/brand/ela1-01.png" alt="Ela logo on deep green" fill className="object-cover" sizes="33vw" />
          </ScrollReveal>
          <ScrollReveal className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border shadow-lg">
            <Image src="/brand/ela1-03.png" alt="Ela wordmark" fill className="object-cover" sizes="33vw" />
          </ScrollReveal>
          <ScrollReveal className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border shadow-lg">
            <Image src="/brand/product-bottle-vertical.png" alt="Branded bottle in vertical farm" fill className="object-cover" sizes="33vw" />
          </ScrollReveal>
        </div>
      </section>

      <PageCrossLinks excludeHref="/about" title="Continue exploring" eyebrow="More Ela" />
    </div>
  );
}
