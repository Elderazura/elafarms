import type { Metadata } from "next";
import Image from "next/image";
import { BrandLogoPng } from "@/components/brand/logo";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactMap } from "@/components/contact/contact-map";
import { SocialStrip } from "@/components/contact/social-strip";
import { PageCrossLinks } from "@/components/layout/page-cross-links";
import { ImageSlider } from "@/components/ui/image-slider";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & visit",
  description:
    `Say hi to ${SITE_NAME} — map, socials, and a form that opens your email. Riyadh-grown hydroponic greens, herbs, and berries. ${CONTACT_EMAIL}`,
  openGraph: {
    title: `Contact | ${SITE_NAME}`,
    description: "Map, DMs, and a very friendly form. We actually read these.",
  },
};

const contactSlides = [
  {
    src: "/brand/stationery.png",
    alt: "Ela branded stationery beside a hydroponic planter",
    caption: "Yes, we take aesthetics as seriously as pH levels.",
  },
  {
    src: "/brand/farm-variation-8.png",
    alt: "Team member in the vertical farm",
    caption: "Humans in lab coats. Plants in their happy place.",
  },
  {
    src: "/brand/hero-strawberry.jpg",
    alt: "Fresh strawberries",
    caption: "Berries that did not spend a week in a cargo hold.",
  },
  {
    src: "/brand/product-bottle-vertical.png",
    alt: "Ela bottle in the farm",
    caption: "Bottles optional. Obsession with freshness — mandatory.",
  },
];

export default function ContactPage() {
  return (
    <div>
      <section className="border-b border-border bg-mesh-hero py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ela-mid-green">Contact</p>
            <h1 className="mt-4 max-w-3xl font-heading text-4xl tracking-tight sm:text-5xl lg:text-6xl">
              Slide into our inbox — or our DMs. We are friendly.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Chefs, curious neighbours, journalists, or anyone who just wants to talk leaves: say hello at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-ela-deep underline-offset-4 hover:underline">
                {CONTACT_EMAIL}
              </a>
              . We promise fewer buzzwords than your average pitch deck.
            </p>
            <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
              Whether you are planning imports replacement for a hotel group or exploring how Saudi-grown produce fits your
              retail set, we will meet you with numbers, harvest calendars, and the same honesty we bring to the farm floor.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-b border-border bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-ela-mid-green">Moments from the farm</p>
          <ImageSlider slides={contactSlides} />
        </div>
      </section>

      <section className="border-b border-border bg-muted/30 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl tracking-tight sm:text-3xl">Stalk us online</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Reels, thought leadership, and the occasional time-lapse of a very enthusiastic basil plant.
          </p>
          <SocialStrip className="mt-8" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="font-heading text-2xl tracking-tight sm:text-3xl">Find us on the map</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We are in the greater Riyadh orbit — exact visitor pins land here when we open the doors for tours. Until
              then, zoom in and daydream responsibly.
            </p>
            <div className="mt-8">
              <ContactMap />
            </div>
          </div>
          <div>
            <h2 className="font-heading text-2xl tracking-tight sm:text-3xl">Write to us</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Pick a topic, tell us your favourite leaf, and hit send — your mail app does the rest.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-ela-obsidian py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
            <Image src="/brand/product-bottle.png" alt="" fill className="object-cover" sizes="33vw" />
          </div>
          <div className="flex min-h-[200px] items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-8 sm:col-span-2 lg:col-span-1">
            <BrandLogoPng
              variant="mark"
              heightClass="h-24 sm:h-32"
              imageClassName="brightness-0 invert"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 lg:col-span-3">
            <Image src="/brand/farm-variation-4.png" alt="Ela greenhouse" fill className="object-cover" sizes="100vw" />
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-ela-cream/70">
          Still reading? You are our kind of person.
        </p>
      </section>

      <PageCrossLinks excludeHref="/contact" title="Wander the site" eyebrow="More fun" />
    </div>
  );
}
