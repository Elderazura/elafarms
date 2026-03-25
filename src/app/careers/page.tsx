import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
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
      <section className="border-b border-border bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ela-mid-green">Careers</p>
            <h1 className="mt-4 max-w-4xl font-heading text-4xl tracking-tight sm:text-5xl lg:text-6xl">
              A small team, an outsized mission.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Launch phase structure mirrors the strategy: three co-founders plus key hires in growing, operations, and
              commercial. Saudisation is integrated from the start, with training pathways for Saudi technicians in
              partnership with agricultural institutes.
            </p>
          </ScrollReveal>
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
    </div>
  );
}
