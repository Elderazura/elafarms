"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

type Slide = { src: string; alt: string; caption?: string };

type Props = {
  slides: Slide[];
  className?: string;
  aspectClassName?: string;
};

export function ImageSlider({ slides, className, aspectClassName = "aspect-[16/10]" }: Props) {
  const reduce = usePrefersReducedMotion();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    reduce ? [] : [Autoplay({ delay: 4200, stopOnInteraction: true })],
  );
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className={cn("relative overflow-hidden rounded-2xl border border-border/80 bg-card shadow-xl", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {slides.map((slide, i) => (
            <div key={slide.src} className="min-w-0 flex-[0_0_100%]">
              <div className={cn("relative w-full", aspectClassName)}>
                <Image src={slide.src} alt={slide.alt} fill className="object-cover" sizes="(min-width: 1024px) 80vw, 100vw" priority={i === 0} />
                <div className="absolute inset-0 bg-gradient-to-t from-ela-obsidian/70 via-transparent to-transparent" />
                {slide.caption && (
                  <p className="absolute bottom-4 left-4 right-4 font-heading text-lg text-ela-cream sm:text-xl">{slide.caption}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 left-0 right-0 z-10 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <motion.button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              "h-2 rounded-full transition-all",
              selected === i ? "w-8 bg-ela-cream" : "w-2 bg-ela-cream/40",
            )}
            onClick={() => emblaApi?.scrollTo(i)}
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </div>
      <button
        type="button"
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-ela-obsidian/50 p-2 text-ela-cream backdrop-blur-sm transition-colors hover:bg-ela-obsidian/70"
        onClick={scrollPrev}
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-ela-obsidian/50 p-2 text-ela-cream backdrop-blur-sm transition-colors hover:bg-ela-obsidian/70"
        onClick={scrollNext}
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  );
}
