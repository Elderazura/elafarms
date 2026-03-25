import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { PageCrossLinks } from "@/components/layout/page-cross-links";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Stories on agritech, brand, and operating a modern hydroponic farm in Saudi Arabia.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div>
      <section className="border-b border-border bg-mesh-hero py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ela-mid-green">Blog</p>
            <h1 className="mt-4 max-w-3xl font-heading text-4xl tracking-tight sm:text-5xl lg:text-6xl">
              Notes from the greenhouse and the boardroom.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Transparent updates on how we farm, how we partner, and why local matters in the desert.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.05}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-md transition-shadow hover:shadow-lg">
                <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] block overflow-hidden">
                  {post.cover ? (
                    <Image
                      src={post.cover}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(min-width: 1024px) 33vw, 100vw"
                    />
                  ) : (
                    <div className="h-full bg-muted" />
                  )}
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <time className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {post.date}
                  </time>
                  <h2 className="mt-2 font-heading text-xl leading-snug text-ela-deep">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 text-sm font-medium text-ela-deep underline-offset-4 hover:underline"
                  >
                    Read article
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="relative border-b border-border py-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-border shadow-lg">
          <div className="relative aspect-[21/7] min-h-[140px]">
            <Image src="/brand/farm-variation-2.png" alt="" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-ela-obsidian/55" />
            <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
              <p className="max-w-2xl font-heading text-xl text-ela-cream sm:text-2xl">
                Writing you can forward to a chef, an investor, or a neighbour — no fluff.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PageCrossLinks excludeHref="/blog" title="Beyond the journal" eyebrow="Explore" />
    </div>
  );
}
