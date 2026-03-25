import dynamic from "next/dynamic";
import { BlogTeaser } from "@/components/home/blog-teaser";
import { Hero } from "@/components/home/hero";
import { PageCrossLinks } from "@/components/layout/page-cross-links";

const HomeSections = dynamic(() => import("@/components/home/home-sections"), {
  loading: () => (
    <div className="min-h-[40vh] animate-pulse bg-gradient-to-b from-muted/50 to-background" aria-hidden />
  ),
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeSections />
      <BlogTeaser />
      <PageCrossLinks title="Still curious?" eyebrow="Navigate" />
    </>
  );
}
