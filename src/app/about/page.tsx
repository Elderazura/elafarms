import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrandLogoPng } from "@/components/brand/logo";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { PageCrossLinks } from "@/components/layout/page-cross-links";
import { brandValues, leadershipTeam, saudiAgriSummary } from "@/lib/brand-content";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "Four friends, expert partners, and a Malayalam word for leaf — building a water-smart hydroponic farm in Saudi Arabia aligned with Vision 2030.",
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
              challenge — with science, soul, and a stubborn belief that the freshest food in the desert should come from
              the desert.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-b border-border bg-ela-obsidian py-16 text-ela-cream sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ela-light-green">Saudi Arabia &amp; the future of agriculture</p>
              <h2 className="mt-4 font-heading text-3xl tracking-tight sm:text-4xl">
                National ambition meets desert pragmatism.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ela-cream/88">{saudiAgriSummary}</p>
              <p className="mt-4 leading-relaxed text-ela-cream/78">
                Controlled-environment agriculture is not a trend here — it is infrastructure for food security, tourism,
                and healthier plates. Ela exists to be part of that story: premium produce, transparent operations, and
                partnerships that keep value in the Kingdom.
              </p>
            </ScrollReveal>
            <ScrollReveal className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-xl">
              <Image
                src="/brand/farm-variation-2.png"
                alt="Hydroponic rows under controlled lighting"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ela-mid-green">What we stand for</p>
          <h2 className="mt-4 font-heading text-3xl tracking-tight sm:text-4xl">Values you will feel in the leaf and in the contract.</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Every page of this site traces back to three ideas — they are not decoration; they are how we hire, grow, and
            partner.
          </p>
        </ScrollReveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {brandValues.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.06}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
                <p className="font-mono text-xs text-ela-mid-green">0{i + 1}</p>
                <h3 className="mt-3 font-heading text-xl text-ela-deep">{v.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ela-mid-green">The origin</p>
              <h2 className="mt-4 font-heading text-3xl tracking-tight sm:text-4xl">Four friends — and a word that travelled.</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Ela began as a conversation between four friends who shared roots in South India and a fascination with what
                Saudi Arabia is building in agritech — operations, technology, and the hard science of water and nutrients.
                We did not want another import story; we wanted a farm that could stand beside the Kingdom’s best hospitality
                and retail — with produce that is honest, traceable, and unmistakably fresh.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Alongside us sits a growing circle of agronomists, systems engineers, and local operators — experts who make
                the greenhouse reliable long after the ribbon is cut. The founders set the compass; the team steers the ship
                every day.
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
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ela-mid-green">Leadership</p>
          <h2 className="mt-4 font-heading text-3xl tracking-tight sm:text-4xl">Founders at the helm.</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Mohamed Afsal, Mohamed Irfan, and Salith Rashnad lead Ela as Managing Director, Chief Operations Officer, and
            Chief Technology Officer; Tajudheen Backer anchors the science as Scientific Lead — petroleum engineering applied
            to how we move water and nutrients — with support from specialists in crop science, automation, and commercial
            partnerships as we scale.
          </p>
        </ScrollReveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {leadershipTeam.map((person, i) => (
            <ScrollReveal key={person.name} delay={i * 0.06}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-md">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ela-deep/10 font-heading text-lg text-ela-deep">
                  {person.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="mt-5 font-heading text-xl text-ela-deep">{person.name}</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-ela-mid-green">{person.role}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{person.focus}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal className="mt-10 rounded-2xl border border-dashed border-border bg-muted/20 p-6 sm:p-8">
          <p className="text-sm font-semibold text-ela-deep">Experts &amp; partners</p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            We work with agronomists, climate-control specialists, and training partners aligned with Saudi agricultural
            institutes — so knowledge transfer and Saudisation are not afterthoughts; they are built into how the farm
            scales. As we grow, expect more names here: the people in lab coats and on the harvest floor who make Ela
            possible.
          </p>
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
          <h2 className="font-heading text-2xl tracking-tight sm:text-3xl">Heritage and horizon</h2>
          <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">
            The name carries Kerala roots. The farm carries Saudi innovation — NFT lines for greens and herbs, Dutch buckets
            for strawberries, and a roadmap toward AI-assisted crop planning as volumes scale. When we talk about
            technology, it is because it changes what you taste on the plate.
          </p>
        </ScrollReveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <ScrollReveal className="flex min-h-[240px] items-center justify-center rounded-2xl border border-border bg-muted/40 p-8 shadow-lg sm:min-h-[280px]">
            <BrandLogoPng variant="mark" heightClass="h-28 sm:h-36" />
          </ScrollReveal>
          <ScrollReveal className="flex min-h-[240px] items-center justify-center rounded-2xl border border-border bg-muted/40 p-8 shadow-lg sm:min-h-[280px]">
            <BrandLogoPng variant="wordmark" heightClass="h-24 sm:h-32" />
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
