import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import Navbar from "@/components/layout/BlogNavbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { HydrationPost } from "@/components/blog/HydrationPost";

// Map slug → component (add new posts here as you write them)
const POST_COMPONENTS: Record<string, React.ComponentType> = {
  "understanding-hydration-react-nextjs": HydrationPost,
};

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Sunny Keshri`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: "Sunny Keshri" }],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: ["Sunny Keshri"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `https://keshri-dev.vercel.app/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const PostContent = POST_COMPONENTS[params.slug];
  if (!PostContent) notFound();

  // JSON-LD structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: "Sunny Keshri",
      url: "https://keshri-dev.vercel.app",
    },
    datePublished: post.date,
    keywords: post.tags.join(", "),
    publisher: {
      "@type": "Person",
      name: "Sunny Keshri",
    },
  };

  return (
    <main className="relative overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ScrollProgress />
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm mb-10 transition-colors hover:text-accent"
          style={{ color: "var(--ink-muted)" }}
        >
          <ArrowLeft size={14} aria-hidden="true" />
          All posts
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1
          className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-6"
          style={{ color: "var(--ink)" }}
        >
          {post.title}
        </h1>

        {/* Meta */}
        <div
          className="flex items-center gap-4 text-sm font-mono pb-8 mb-10 border-b"
          style={{ color: "var(--ink-faint)", borderColor: "var(--border)" }}
        >
          <span className="flex items-center gap-1.5">
            <Calendar size={13} aria-hidden="true" />
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} aria-hidden="true" />
            {post.readTime}
          </span>
          <span>by Sunny Keshri</span>
        </div>

        {/* Post content */}
        <PostContent />

        {/* Footer CTA */}
        <div
          className="mt-16 pt-10 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ borderColor: "var(--border)" }}
        >
          <div>
            <p className="text-sm font-medium mb-1" style={{ color: "var(--ink)" }}>
              Written by Sunny Keshri
            </p>
            <p className="text-xs" style={{ color: "var(--ink-muted)" }}>
              Senior Software Engineer · React · Next.js · Data Platforms
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/blog" className="btn-ghost text-sm">
              More posts
            </Link>
            <Link href="/#contact" className="btn-primary text-sm">
              Get in touch
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
