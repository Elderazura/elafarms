import type { Metadata } from "next";
import Image from "next/image";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

export const metadata: Metadata = {
  title: "Farm",
  description:
    "Controlled-environment hydroponics in the Riyadh corridor — NFT systems, Dutch buckets for berries, IoT monitoring, and water recirculation.",
};

const gallery = [
  "/brand/farm-variation-1.png",
  "/brand/farm-variation-2.png",
  "/brand/farm-variation-3.png",
  "/brand/farm-variation-5.png",
  "/brand/farm-variation-7.png",
  "/brand/farm-variation-9.png",
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
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ela-cream/85">
              Nutrient Film Technique for leafy crops and herbs. Dutch bucket systems for strawberries. Fully enclosed
              climate control, LED supplementation, and IoT telemetry on pH, EC, dissolved oxygen, temperature, and
              humidity — feeding a single operational picture.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <ScrollReveal>
            <h2 className="font-heading text-3xl tracking-tight">Water and place</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Water is sourced responsibly, with recirculation targets that match an arid climate. The pilot begins at
              one to two hectares of greenhouse footprint in the greater Riyadh area — close to hospitality, retail, and
              logistics lanes.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Phase two introduces predictive yield models so B2B partners can plan menus and promotions with confidence —
              including peaks like Ramadan and high tourism seasons.
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

      <section className="border-t border-border bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-2xl tracking-tight sm:text-3xl">Inside the greenhouse</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Cinematic symmetry, clinical lighting, and living colour — the photography direction the brand calls for.
            </p>
          </ScrollReveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((src, i) => (
              <ScrollReveal key={src} delay={i * 0.04}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-card shadow-md">
                  <Image src={src} alt="" fill className="object-cover transition-transform duration-500 hover:scale-[1.03]" sizes="(min-width: 1024px) 30vw, 50vw" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
