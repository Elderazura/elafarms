"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

const COUNT = 28;

export function HeroParticles() {
  const reduce = useReducedMotion();

  const particles = useMemo(
    () =>
      Array.from({ length: COUNT }, (_, i) => ({
        id: i,
        x: `${(i * 7 + 13) % 100}%`,
        y: `${(i * 11 + 17) % 100}%`,
        s: 0.4 + (i % 5) * 0.35,
        d: 12 + (i % 8) * 2,
      })),
    [],
  );

  if (reduce) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-ela-light-green/25 blur-[0.5px]"
          style={{
            left: p.x,
            top: p.y,
            width: p.d,
            height: p.d,
          }}
          initial={{ opacity: 0.15, scale: p.s }}
          animate={{
            opacity: [0.12, 0.45, 0.2],
            y: [0, -18, 6],
            x: [0, 10, -6],
            scale: [p.s, p.s * 1.15, p.s],
          }}
          transition={{
            duration: 8 + (p.id % 5) * 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: p.id * 0.15,
          }}
        />
      ))}
    </div>
  );
}
