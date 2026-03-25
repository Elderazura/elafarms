import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { Separator } from "@/components/ui/separator";

const links = [
  { href: "/about", label: "About" },
  { href: "/farm", label: "Farm" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-ela-olive/25 bg-ela-deep text-ela-cream">
      <div className="border-b border-white/5 bg-gradient-to-r from-ela-deep via-ela-mid-green/30 to-ela-deep py-3 text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-ela-cream/90">
        Rooted in Science · Grown with Soul
      </div>
      <div className="mx-auto max-w-[90rem] px-4 py-16 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <Logo variant="footer" className="[&_img]:brightness-0 [&_img]:invert" />
            <p className="mt-6 text-sm leading-relaxed text-ela-cream/90">
              We grow loud flavours in quiet greenhouses. Hydroponic greens, herbs, and berries — Riyadh-born, chef-approved,
              and weirdly photogenic.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Footer">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-ela-cream/90 transition-colors hover:text-ela-cream">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <Separator className="my-10 bg-ela-olive/40" />
        <div className="flex flex-col gap-4 text-sm text-ela-cream/80 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ela Future Farms. All rights reserved.</p>
          <p>
            <a href="mailto:hello@theela.farm" className="underline-offset-4 hover:underline">
              hello@theela.farm
            </a>
            <span className="mx-2 text-ela-olive/60">|</span>
            <a href="https://www.theela.farm" className="underline-offset-4 hover:underline" rel="noreferrer">
              theela.farm
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
