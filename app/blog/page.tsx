import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import Navbar from "@/components/layout/BlogNavbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Sunny Keshri",
  description:
    "Technical articles on React, Next.js, TypeScript, system design, and full-stack engineering by Sunny Keshri.",
  alternates: { canonical: "https://keshri-dev.vercel.app/blog" },
};

export default function BlogListPage() {
  return (
    <main className="relative overflow-x-hidden">
      <ScrollProgress />
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Back */}
        <Link
          href="/#blogs"
          className="inline-flex items-center gap-2 text-sm mb-10 transition-colors hover:text-accent"
          style={{ color: "var(--ink-muted)" }}
        >
          <ArrowLeft size={14} aria-hidden="true" />
          Back to portfolio
        </Link>

        {/* Header */}
        <div className="mb-14">
          <span className="section-label">Writing</span>
          <h1 className="section-title">All posts</h1>
          <p style={{ color: "var(--ink-muted)" }}>
            Thoughts on React, Next.js, system design, and building things that scale.
          </p>
        </div>

        {/* Post list */}
        <div
          className="space-y-5"
          role="list"
          aria-label="All blog posts"
        >
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              role="listitem"
              className="card p-6 group flex flex-col sm:flex-row sm:items-center gap-5"
            >
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2
                  className="font-display text-2xl font-semibold mb-2 group-hover:text-accent transition-colors"
                  style={{ color: "var(--ink)" }}
                >
                  {post.title}
                </h2>
                <p
                  className="text-sm leading-relaxed line-clamp-2"
                  style={{ color: "var(--ink-muted)" }}
                >
                  {post.excerpt}
                </p>
                <div
                  className="flex items-center gap-4 mt-3 text-xs font-mono"
                  style={{ color: "var(--ink-faint)" }}
                >
                  <span className="flex items-center gap-1">
                    <Calendar size={11} />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} />
                    {post.readTime}
                  </span>
                </div>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="btn-ghost flex-shrink-0 flex items-center gap-2 self-start sm:self-center"
                aria-label={`Read ${post.title}`}
              >
                Read post
                <ArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
