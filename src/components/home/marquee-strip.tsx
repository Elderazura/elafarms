"use client";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const LINE =
  "Crispy leaves · Juicy berries · Less water · More flavour · Riyadh-grown · Same-day harvest · Vision 2030 (we read the memo) · ";

export function MarqueeStrip() {
  const reduce = usePrefersReducedMotion();

  if (reduce) {
    return (
      <div className="border-y border-ela-deep/25 bg-ela-deep py-4 text-center text-xs font-semibold uppercase tracking-[0.35em] text-ela-cream">
        {LINE}
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden border-y border-ela-deep/25 bg-ela-deep py-4">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className="inline-block px-8 text-xs font-semibold uppercase tracking-[0.35em] text-ela-cream/95">
            {LINE}
          </span>
        ))}
      </div>
    </div>
  );
}
