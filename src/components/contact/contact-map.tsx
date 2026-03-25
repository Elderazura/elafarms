"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { MAP_EMBED_SRC } from "@/lib/site";

export function ContactMap() {
  return (
    <motion.div
      className="overflow-hidden rounded-2xl border border-border shadow-lg"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3 text-sm text-muted-foreground">
        <MapPin className="size-4 shrink-0 text-ela-deep" aria-hidden />
        <span>Greater Riyadh area — pin updates when our doors open to visitors.</span>
      </div>
      <div className="relative aspect-[16/10] min-h-[240px] w-full bg-muted">
        <iframe
          title="Map — Riyadh, Saudi Arabia"
          src={MAP_EMBED_SRC}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </motion.div>
  );
}
