import Image from "next/image";
import Link from "next/link";
import { BRAND_LOGO_MARK, BRAND_LOGO_WORDMARK } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Matches ela1-01.png & ela1-03.png canvas (1755×1241) — static class for Tailwind */
const LOGO_ASPECT = "aspect-[1755/1241]";

const variants = {
  /** Navbar — height drives width via aspect ratio; tuned large on desktop */
  header: cn(
    LOGO_ASPECT,
    "h-14 w-auto sm:h-16 md:h-[4.5rem] lg:h-[6rem] xl:h-[6.75rem] 2xl:h-[7.25rem]",
  ),
  footer: cn(LOGO_ASPECT, "h-14 w-auto sm:h-16 lg:h-[4.25rem] max-h-[4.25rem]"),
};

const objectPosition: Record<keyof typeof variants, string> = {
  header: "object-contain object-left",
  footer: "object-contain object-left",
};

type LogoProps = {
  className?: string;
  variant?: keyof typeof variants;
};

export function Logo({ className, variant = "header" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("relative block shrink-0", variants[variant], className)}
      aria-label="Ela Future Farms home"
    >
      <Image
        src={BRAND_LOGO_WORDMARK}
        alt="Ela Future Farms"
        fill
        className={objectPosition[variant]}
        sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, (max-width: 1024px) 320px, (max-width: 1536px) 380px, 420px"
        priority
      />
    </Link>
  );
}

type BrandLogoPngProps = {
  variant: "mark" | "wordmark";
  className?: string;
  /** Applied to the inner &lt;Image&gt; (e.g. invert on dark backgrounds) */
  imageClassName?: string;
  /** Height drives width via native aspect ratio, e.g. h-28 sm:h-36 */
  heightClass: string;
};

/**
 * Inline PNG logo (mark or wordmark) with correct proportion — use in grids, not `object-cover`.
 */
export function BrandLogoPng({ variant, className, imageClassName, heightClass }: BrandLogoPngProps) {
  const src = variant === "mark" ? BRAND_LOGO_MARK : BRAND_LOGO_WORDMARK;
  const alt = variant === "mark" ? "Ela logo mark" : "Ela Future Farms wordmark";
  return (
    <div className={cn("relative w-auto shrink-0", LOGO_ASPECT, heightClass, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className={cn("object-contain object-center", imageClassName)}
        sizes="(max-width: 768px) 45vw, 400px"
      />
    </div>
  );
}
