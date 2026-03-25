import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
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
      <section className="border-b border-border bg-ela-cream/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ela-mid-green">About</p>
            <h1 className="mt-4 max-w-4xl font-heading text-4xl tracking-tight sm:text-5xl lg:text-6xl">
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
          <Link href="/farm" className={cn(buttonVariants(), "mt-8 inline-flex")}>
            See the farm
          </Link>
        </ScrollReveal>
        <ScrollReveal className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border shadow-xl">
          <Image src="/brand/stationery.png" alt="Ela Future Farms branded stationery beside a hydroponic planter" fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
        </ScrollReveal>
      </section>
    </div>
  );
}
