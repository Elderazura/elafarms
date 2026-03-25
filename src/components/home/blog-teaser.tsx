import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

export async function BlogTeaser() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="relative overflow-hidden border-t border-border bg-ela-warm-white py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-ela-light-green/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-ela-sand/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ela-mid-green">Journal</p>
            <h2 className="mt-3 max-w-xl font-heading text-3xl tracking-tight sm:text-4xl lg:text-5xl">
              Field notes, not filler posts.
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground leading-relaxed">
              Honest writing on agritech, Vision 2030, and what it takes to run a modern farm in the desert.
            </p>
          </div>
          <Link
            href="/blog"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "inline-flex h-12 shrink-0 items-center gap-2 border-ela-deep/25 px-6 text-ela-deep",
            )}
          >
            All articles
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {posts.map((post, i) => (
            <article
              key={post.slug}
              className={cn(
                "group flex flex-col overflow-hidden rounded-2xl border border-border/90 bg-card shadow-md transition-all hover:shadow-xl",
                i === 0 && "lg:row-span-1 lg:border-ela-deep/20",
              )}
            >
              <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] block overflow-hidden">
                {post.cover ? (
                  <Image
                    src={post.cover}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                ) : (
                  <div className="h-full bg-ela-deep/10" />
                )}
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <time className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{post.date}</time>
                <h3 className="mt-2 font-heading text-xl leading-snug text-ela-deep">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ela-deep"
                >
                  Read
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
