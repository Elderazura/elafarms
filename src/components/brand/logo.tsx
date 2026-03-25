import Image from "next/image";
import Link from "next/link";
import { BRAND_LOGO_WORDMARK } from "@/lib/site";
import { cn } from "@/lib/utils";

const variants = {
  header:
    "h-12 w-[10.5rem] min-h-[3rem] sm:h-14 sm:w-[12.5rem] sm:min-h-[3.5rem] md:h-16 md:w-[14rem] md:min-h-[4rem] lg:h-[5.25rem] lg:w-[18rem] lg:min-h-[5.25rem] xl:h-[5.75rem] xl:w-[20rem] xl:min-h-[5.75rem]",
  /** Centered above hero tagline — parent should use `lg:hidden` on mobile only */
  hero:
    "mx-auto h-[4.5rem] w-[min(88vw,17.5rem)] min-h-[4.5rem] sm:h-20 sm:w-[19rem] sm:min-h-[5rem]",
  footer: "h-14 w-[12rem] min-h-[3.5rem] sm:h-16 sm:w-[13.5rem] lg:h-[4.25rem] lg:w-[15rem]",
};

const objectPosition: Record<keyof typeof variants, string> = {
  header: "object-contain object-left",
  hero: "object-contain object-center",
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
        sizes="(max-width: 640px) 200px, (max-width: 768px) 240px, (max-width: 1024px) 260px, 320px"
        priority
      />
    </Link>
  );
}
