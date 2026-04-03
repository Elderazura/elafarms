import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { PageCrossLinks } from "@/components/layout/page-cross-links";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Roles across agronomy, operations, commercial, and digital — building a recognised homegrown produce brand in Saudi Arabia.",
};

const roles = [
  {
    title: "Head Grower / Agronomist",
    body: "Hydroponic expertise across NFT and bucket systems — owns crop health, nutrient programmes, and harvest quality.",
  },
  {
    title: "Farm Technicians (3–4)",
    body: "Day-to-day monitoring, harvesting, packing, and system checks — the hands that keep every channel consistent.",
  },
  {
    title: "Sales / Account Manager",
    body: "B2B relationships with hospitality, retail, and catering — trials, SLAs, and seasonal planning with anchor accounts.",
  },
  {
    title: "Digital / Marketing",
    body: "Brand, social, and e-commerce — or partner agency coordination — so the story matches the science.",
  },
];

export default function CareersPage() {
  return (
    <div>
      <section className="border-b border-border bg-mesh-hero py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ela-mid-green">Careers</p>
            <h1 className="mt-4 max-w-4xl font-heading text-4xl tracking-tight sm:text-5xl lg:text-6xl">
              A small team, an outsized mission.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Launch phase structure mirrors the strategy: four co-founders — Mohamed Afsal (Managing Director), Mohamed
              Irfan (Chief Operations Officer), Salith Rashnad (Chief Technology Officer), and Tajudheen Backer (Scientific
              Lead, petroleum engineer) — plus key hires in growing, operations, and commercial. Saudisation is integrated
              from the start, with training pathways for Saudi technicians in partnership with agricultural institutes.
            </p>
            <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
              Saudi Arabia’s agricultural roadmap needs operators who respect data as much as plants: if you want to help
              build local supply chains that rival imports on quality, you are in the right place.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-b border-border bg-muted/30 py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ela-mid-green">Why this work matters in KSA</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Vision 2030 and the National Strategy for Agriculture emphasise private-sector participation, water-smart
            production, and skills for young Saudis. Ela is a hands-on place to learn controlled-environment agriculture —
            not theory on a slide, but pH, EC, harvest windows, and customer promises.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-ela-obsidian py-12">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10">
            <Image src="/brand/farm-variation-8.png" alt="Team in the greenhouse" fill className="object-cover" sizes="33vw" />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10">
            <Image src="/brand/farm-variation-1.png" alt="Vertical farm aisles" fill className="object-cover" sizes="33vw" />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 sm:col-span-2 lg:col-span-1">
            <Image src="/brand/farm-variation-10.png" alt="Produce close-up" fill className="object-cover" sizes="33vw" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-heading text-2xl tracking-tight sm:text-3xl">Open roles</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Descriptions are illustrative of the launch plan — send a note and we will route you to the right founder.
          </p>
        </ScrollReveal>
        <Accordion className="mt-8 w-full" defaultValue={[roles[0].title]}>
          {roles.map((role) => (
            <AccordionItem key={role.title} value={role.title}>
              <AccordionTrigger className="font-heading text-lg text-ela-deep">
                {role.title}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground leading-relaxed">{role.body}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <ScrollReveal className="mt-12">
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "inline-flex")}>
            Introduce yourself
          </Link>
        </ScrollReveal>
      </section>

      <PageCrossLinks excludeHref="/careers" title="While you are here" eyebrow="Discover" />
    </div>
  );
}
