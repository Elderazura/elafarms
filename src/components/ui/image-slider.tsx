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
              <div className="flex flex-col">
                <div className={cn("relative w-full", aspectClassName)}>
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 80vw, 100vw"
                    priority={i === 0}
                  />
                </div>
                {slide.caption ? (
                  <p className="border-t border-border bg-muted/30 px-4 py-3 text-sm text-muted-foreground sm:px-5 sm:py-4">
                    {slide.caption}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 border-t border-border bg-card py-3">
        {slides.map((_, i) => (
          <motion.button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              "h-2 rounded-full transition-all",
              selected === i ? "w-8 bg-ela-deep" : "w-2 bg-ela-deep/25",
            )}
            onClick={() => emblaApi?.scrollTo(i)}
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </div>
      <button
        type="button"
        aria-label="Previous slide"
        className="absolute left-3 top-[min(45%,12rem)] z-10 -translate-y-1/2 rounded-full border border-border bg-background/90 p-2 text-ela-deep shadow-sm transition-colors hover:bg-background"
        onClick={scrollPrev}
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        className="absolute right-3 top-[min(45%,12rem)] z-10 -translate-y-1/2 rounded-full border border-border bg-background/90 p-2 text-ela-deep shadow-sm transition-colors hover:bg-background"
        onClick={scrollNext}
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  );
}
