import type { Metadata } from "next";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach Ela Future Farms for commercial partnerships, press, and careers — hello@theela.farm.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="border-b border-border bg-ela-cream/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ela-mid-green">Contact</p>
            <h1 className="mt-4 max-w-3xl font-heading text-4xl tracking-tight sm:text-5xl lg:text-6xl">
              Let the produce speak for itself — then we talk supply.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              For B2B programmes, retail listings, media, and investor inquiries:{" "}
              <a href="mailto:hello@theela.farm" className="font-medium text-ela-deep underline-offset-4 hover:underline">
                hello@theela.farm
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-2 lg:px-8">
        <ScrollReveal>
          <h2 className="font-heading text-2xl tracking-tight">Send a message</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            This form opens a draft in your email client — we do not store messages on the site. For urgent B2B
            requests, include your expected weekly volumes and delivery windows.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Web:{" "}
            <a href="https://www.theela.farm" className="text-ela-deep underline-offset-4 hover:underline" rel="noreferrer">
              theela.farm
            </a>
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <ContactForm />
        </ScrollReveal>
      </section>
    </div>
  );
}
