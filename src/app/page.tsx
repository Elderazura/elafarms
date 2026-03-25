import dynamic from "next/dynamic";
import { Hero } from "@/components/home/hero";

const HomeSections = dynamic(() => import("@/components/home/home-sections"), {
  loading: () => (
    <div className="min-h-[30vh] animate-pulse bg-muted/40" aria-hidden />
  ),
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeSections />
    </>
  );
}
