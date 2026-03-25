import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("relative block h-10 w-36 shrink-0 sm:h-11 sm:w-40", className)}
      aria-label="Ela Future Farms home"
    >
      <Image
        src="/brand/ela1-03.png"
        alt="Ela Future Farms"
        fill
        className="object-contain object-left"
        sizes="160px"
        priority
      />
    </Link>
  );
}
