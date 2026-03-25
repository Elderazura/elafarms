import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { PageCrossLinks } from "@/components/layout/page-cross-links";
import { brandValues, saudiAgriSummary } from "@/lib/brand-content";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Farm",
  description:
    "Controlled-environment hydroponics in the Riyadh corridor — NFT systems, Dutch buckets for berries, IoT monitoring, and water recirculation aligned with Saudi food security goals.",
};

const gallery = [
  "/brand/farm-variation-1.png",
  "/brand/farm-variation-2.png",
  "/brand/farm-variation-3.png",
  "/brand/farm-variation-4.png",
  "/brand/farm-variation-5.png",
  "/brand/farm-variation-6.png",
  "/brand/farm-variation-7.png",
  "/brand/farm-variation-9.png",
  "/brand/farm-variation-10.png",
  "/brand/Generated Image March 24, 2026 - 6_51PM.jpg",
];

export default function FarmPage() {
  return (
    <div>
      <section className="border-b border-border bg-ela-deep py-20 text-ela-cream sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ela-light-green">The facility</p>
            <h1 className="mt-4 max-w-4xl font-heading text-4xl tracking-tight sm:text-5xl lg:text-6xl">
              Science vs Soul — in the same aisle.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ela-cream/85">
              Nutrient Film Technique for leafy crops and herbs. Dutch bucket systems for strawberries. Fully enclosed
              climate control, LED supplementation, and IoT telemetry on pH, EC, dissolved oxygen, temperature, and humidity
              — feeding a single operational picture. This is how we translate Saudi Arabia’s agricultural ambition into
              kilograms per square metre, without pretending the desert is something it is not.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-b border-border bg-banner-vision py-14 text-ela-cream">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ela-cream/90">Saudi context</p>
            <p className="mt-3 text-lg leading-relaxed text-ela-cream/95">
              {saudiAgriSummary}
            </p>
          </div>
          <Link
            href="/products"
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "shrink-0 bg-ela-cream text-ela-deep hover:bg-ela-warm-white",
            )}
          >
            See product lines
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <ScrollReveal>
            <h2 className="font-heading text-3xl tracking-tight">Water and place</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Water is sourced responsibly, with recirculation targets that match an arid climate. The pilot begins at one
              to two hectares of greenhouse footprint in the greater Riyadh area — close to hospitality, retail, and
              logistics lanes. In the Kingdom, every litre is a line item: our systems are designed to treat water as
              strategic infrastructure, not an afterthought.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Phase two introduces predictive yield models so B2B partners can plan menus and promotions with confidence —
              including peaks like Ramadan and high tourism seasons. The goal is not novelty — it is dependable supply when
              the country is hosting the world.
            </p>
          </ScrollReveal>
          <ScrollReveal className="relative aspect-video overflow-hidden rounded-2xl border border-border shadow-lg">
            <Image
              src="/brand/farm-variation-8.png"
              alt="Technician working among vertical hydroponic racks"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <ScrollReveal className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-xl">
              <Image
                src="/brand/1.png"
                alt="Controlled environment agriculture at Ela"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="font-heading text-3xl tracking-tight">Systems, not slogans</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                From NFT channels to Dutch buckets — one operating system for leafy crops, herbs, and the premium berry
                line. Alarms, logs, and standard operating procedures are written for scale: when we add hectares, we are
                not reinventing the playbook from scratch.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-foreground/90">
                <li className="flex gap-2">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-ela-deep" />
                  Climate zones tuned for cultivars — not one-size-fits-all recipes.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-ela-deep" />
                  Harvest and cooling workflows built for same-day delivery in the Riyadh corridor.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-ela-deep" />
                  Roadmap for AI-assisted planning as data volume and partner trust grow together.
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ela-mid-green">Values in the floor plan</p>
          <h2 className="mt-3 font-heading text-2xl tracking-tight sm:text-3xl">How the building expresses what we believe.</h2>
        </ScrollReveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {brandValues.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-heading text-xl text-ela-deep">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-2xl tracking-tight sm:text-3xl">Inside the greenhouse</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Cinematic symmetry, clinical lighting, and living colour — the photography direction the brand calls for.
              Scroll the grid: proof that “local” can look world-class.
            </p>
          </ScrollReveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((src, i) => (
              <ScrollReveal key={src} delay={i * 0.03}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-card shadow-md">
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 25vw, 50vw"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-ela-obsidian py-14 text-ela-cream">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
          <div className="relative min-h-[220px] overflow-hidden rounded-2xl border border-white/10">
            <Image src="/brand/ela-future-farms-brand-identity (14).png" alt="Ela product in lab setting" fill className="object-cover" sizes="50vw" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ela-light-green">Visit &amp; partnerships</p>
            <p className="mt-3 text-ela-cream/88 leading-relaxed">
              Farm tours and chef tables land on the calendar as we open — until then, start with a commercial conversation
              and we will share timelines, capacity, and how we co-brand with partners who want Saudi-grown on the menu.
            </p>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "mt-6 inline-flex w-fit bg-ela-cream text-ela-deep hover:bg-ela-warm-white",
              )}
            >
              Talk to the team
            </Link>
          </div>
        </div>
      </section>

      <PageCrossLinks excludeHref="/farm" title="Where to next" eyebrow="Discover" />
    </div>
  );
}
