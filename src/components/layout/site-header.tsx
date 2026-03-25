"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { buttonVariants } from "@/lib/button-variants";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/farm", label: "Farm" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-ela-deep/10 bg-background/85 shadow-[0_1px_0_0_rgba(61,90,62,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-[4.75rem] items-center justify-between gap-3 px-4 py-2 sm:min-h-[5rem] sm:px-6 sm:py-2.5 lg:max-w-[90rem] lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-3 py-2 text-[13px] font-medium tracking-wide text-foreground/75 transition-colors hover:bg-ela-deep/5 hover:text-ela-deep",
                pathname === item.href && "bg-ela-deep/10 text-ela-deep",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "sm" }),
              "h-9 rounded-full px-5 text-xs font-semibold uppercase tracking-wider shadow-sm",
            )}
          >
            Enquire
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Sheet>
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" }),
                "shrink-0",
              )}
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100vw-2rem,20rem)]">
              <SheetHeader>
                <Logo className="mb-2" />
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-lg px-3 py-3 text-base font-medium",
                      pathname === item.href ? "bg-muted text-foreground" : "text-foreground/90",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className={cn(buttonVariants(), "mt-4 justify-center rounded-full")}
                >
                  Enquire
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
