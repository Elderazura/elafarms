"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function AppProviders({ children }: { children: React.ReactNode }) {
  const reduceMotion = usePrefersReducedMotion();

  if (reduceMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        lerp: 0.085,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
