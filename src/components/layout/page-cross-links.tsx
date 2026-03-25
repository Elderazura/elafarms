import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type LinkItem = {
  href: string;
  title: string;
  subtitle: string;
  image: string;
};

const LINKS: LinkItem[] = [
  {
    href: "/farm",
    title: "The farm",
    subtitle: "NFT lines, climate, IoT — see how we grow.",
    image: "/brand/farm-variation-3.png",
  },
  {
    href: "/products",
    title: "Products",
    subtitle: "Greens, herbs, berries, Ela Box.",
    image: "/brand/farm-variation-6.png",
  },
  {
    href: "/about",
    title: "Our story",
    subtitle: "Ela — leaf in Malayalam. Heritage meets desert.",
    image: "/brand/farm-variation-5.png",
  },
  {
    href: "/blog",
    title: "Journal",
    subtitle: "Vision 2030, water, and life in the aisles.",
    image: "/brand/farm-variation-2.png",
  },
  {
    href: "/careers",
    title: "Careers",
    subtitle: "Grow with the team building the brand.",
    image: "/brand/farm-variation-8.png",
  },
  {
    href: "/contact",
    title: "Contact",
    subtitle: "B2B, press, partnerships — hello@theela.farm",
    image: "/brand/product-bottle.png",
  },
];

type Props = {
  /** Hide the card that points to the current page (match pathname e.g. "/about") */
  excludeHref?: string;
  title?: string;
  eyebrow?: string;
};

export function PageCrossLinks({
  excludeHref,
  title = "Explore more",
  eyebrow = "Elsewhere on the site",
}: Props) {
  const items = excludeHref ? LINKS.filter((l) => l.href !== excludeHref) : LINKS;

  return (
    <section className="border-t border-border bg-gradient-to-b from-muted/40 to-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ela-mid-green">{eyebrow}</p>
        <h2 className="mt-3 font-heading text-3xl tracking-tight text-foreground sm:text-4xl lg:text-5xl">{title}</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-ela-deep/30 hover:shadow-xl"
            >
              <div className="relative aspect-[16/11] w-full shrink-0 overflow-hidden">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, 50vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-ela-mid-green">
                  View
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <h3 className="mt-2 font-heading text-xl tracking-tight text-ela-deep">{item.title}</h3>
                <p className="mt-1 text-sm leading-snug text-muted-foreground">{item.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
