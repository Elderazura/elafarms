import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const sizeClasses =
  "h-12 w-[10.5rem] min-h-[3rem] sm:h-14 sm:w-[12.5rem] sm:min-h-[3.5rem] md:h-16 md:w-[14rem] md:min-h-[4rem] lg:h-[4.25rem] lg:w-[15.5rem]";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("relative block shrink-0", sizeClasses, className)}
      aria-label="Ela Future Farms home"
    >
      <Image
        src="/brand/ela1-03.png"
        alt="Ela Future Farms"
        fill
        className="object-contain object-left"
        sizes="(max-width: 640px) 168px, (max-width: 768px) 200px, (max-width: 1024px) 224px, 248px"
        priority
      />
    </Link>
  );
}
