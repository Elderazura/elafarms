import Image from "next/image";
import Link from "next/link";
import { BRAND_LOGO_WORDMARK } from "@/lib/site";
import { cn } from "@/lib/utils";

const variants = {
  header:
    "h-12 w-[10.5rem] min-h-[3rem] sm:h-14 sm:w-[12.5rem] sm:min-h-[3.5rem] md:h-16 md:w-[14rem] md:min-h-[4rem] lg:h-[4.25rem] lg:w-[15.5rem]",
  footer: "h-14 w-[12rem] min-h-[3.5rem] sm:h-16 sm:w-[13.5rem] lg:h-[4.25rem] lg:w-[15rem]",
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
        className="object-contain object-left"
        sizes="(max-width: 640px) 168px, (max-width: 768px) 200px, (max-width: 1024px) 224px, 248px"
        priority
      />
    </Link>
  );
}
