import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getPostBySlug, getPostSlugs } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article>
      <header className="border-b border-border bg-ela-cream/40 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-sm font-medium text-ela-deep underline-offset-4 hover:underline">
            Back to blog
          </Link>
          <time className="mt-6 block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {post.date}
          </time>
          <h1 className="mt-4 font-heading text-4xl tracking-tight sm:text-5xl">{post.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{post.excerpt}</p>
        </div>
      </header>
      {post.cover && (
        <div className="relative mx-auto aspect-[21/9] max-w-5xl overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="relative mt-4 h-full min-h-[200px] overflow-hidden rounded-2xl border border-border shadow-lg">
            <Image src={post.cover} alt="" fill className="object-cover" sizes="(min-width: 1024px) 80vw, 100vw" priority />
          </div>
        </div>
      )}
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose-ela text-base leading-relaxed">
          <ReactMarkdown
            components={{
              p: ({ children }) => <p className="mb-4 text-muted-foreground last:mb-0">{children}</p>,
            }}
          >
            {post.content.trim()}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
