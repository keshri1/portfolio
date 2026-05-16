import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export default function Blogs() {
  return (
    <section id="blogs" aria-labelledby="blogs-heading" className="section-pad">
      {/* Background decoration */}
      <div aria-hidden="true" className="relative">
        <span
          className="absolute -top-24 right-0 font-display font-bold select-none opacity-[0.04] text-[14vw] leading-none"
          style={{ color: "var(--ink)" }}
        >
          06
        </span>
      </div>

      <div className="relative z-10">
        <span className="section-label reveal">Writing</span>
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <h2
            id="blogs-heading"
            className="section-title reveal reveal-delay-1 mb-0"
          >
            From the blog
          </h2>
          <Link
            href="/blog"
            className="reveal btn-ghost text-sm flex items-center gap-2"
            aria-label="View all blog posts"
          >
            All posts
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          role="list"
          aria-label="Blog posts"
        >
          {blogPosts.map((post, i) => (
            <article
              key={post.slug}
              role="listitem"
              className={`reveal reveal-delay-${i + 1} card p-6 flex flex-col group`}
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3
                className="font-display text-xl font-semibold leading-snug mb-3 flex-1 group-hover:text-accent transition-colors duration-200"
                style={{ color: "var(--ink)" }}
              >
                {post.title}
              </h3>

              {/* Excerpt */}
              <p
                className="text-sm leading-relaxed mb-5 line-clamp-3"
                style={{ color: "var(--ink-muted)" }}
              >
                {post.excerpt}
              </p>

              {/* Meta row */}
              <div
                className="flex items-center justify-between pt-4 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                <div
                  className="flex items-center gap-3 text-xs font-mono"
                  style={{ color: "var(--ink-faint)" }}
                >
                  <span className="flex items-center gap-1">
                    <Calendar size={11} aria-hidden="true" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} aria-hidden="true" />
                    {post.readTime}
                  </span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-medium flex items-center gap-1 transition-colors duration-200 hover:text-accent"
                  style={{ color: "var(--ink-muted)" }}
                  aria-label={`Read: ${post.title}`}
                >
                  Read
                  <ArrowRight size={12} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
