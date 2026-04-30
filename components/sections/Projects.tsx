"use client";

import { useState } from "react";
import { Github, ExternalLink, Star } from "lucide-react";
import { projects } from "@/lib/data";
import Tag from "@/components/ui/Tag";
import type { Project } from "@/types";

const ALL = "All";

export default function Projects() {
  const categories = [ALL, ...Array.from(new Set(projects.map((p) => p.category)))];
  const [active, setActive] = useState<string>(ALL);

  const filtered: Project[] =
    active === ALL ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-pad" aria-labelledby="projects-heading">
      <div aria-hidden="true" className="relative">
        <span
          className="absolute -top-24 right-0 font-display font-bold select-none opacity-[0.04] text-[14vw] leading-none"
          style={{ color: "var(--ink)" }}
        >
          03
        </span>
      </div>

      <div className="relative z-10">
        <span className="section-label reveal">Selected work</span>
        <h2
          id="projects-heading"
          className="section-title reveal reveal-delay-1"
        >
          Things I&apos;ve built
        </h2>

        {/* Filter tabs */}
        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="reveal flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              onClick={() => setActive(cat)}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border"
              style={{
                background: active === cat ? "var(--accent)" : "transparent",
                color: active === cat ? "#fff" : "var(--ink-muted)",
                borderColor: active === cat ? "var(--accent)" : "var(--border-strong)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          role="list"
          aria-label="Projects"
        >
          {filtered.map((project, i) => (
            <article
              key={project.title}
              role="listitem"
              className={`reveal reveal-delay-${(i % 3) + 1} card p-5 flex flex-col group relative overflow-hidden`}
            >
              {/* Featured badge */}
              {project.featured && (
                <div
                  className="absolute top-4 right-4 flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full"
                  style={{
                    background: "rgba(200,135,58,0.12)",
                    color: "var(--accent)",
                    border: "1px solid rgba(200,135,58,0.25)",
                  }}
                >
                  <Star size={9} fill="currentColor" />
                  featured
                </div>
              )}

              {/* Category */}
              <span
                className="text-[10px] font-mono tracking-widest uppercase mb-3"
                style={{ color: "var(--ink-faint)" }}
              >
                {project.category}
              </span>

              {/* Title */}
              <h3
                className="font-display text-xl font-semibold mb-2 group-hover:text-accent transition-colors"
                style={{ color: "var(--ink)" }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed flex-1 mb-4"
                style={{ color: "var(--ink-muted)" }}
              >
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-1.5 mb-4" aria-label="Technologies">
                {project.tech.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 mt-auto pt-3 border-t" style={{ borderColor: "var(--border)" }}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                    className="flex items-center gap-1.5 text-xs font-mono transition-colors hover:text-accent"
                    style={{ color: "var(--ink-faint)" }}
                  >
                    <Github size={14} />
                    Source
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live demo`}
                    className="flex items-center gap-1.5 text-xs font-mono transition-colors hover:text-accent"
                    style={{ color: "var(--ink-faint)" }}
                  >
                    <ExternalLink size={14} />
                    Live
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="reveal mt-12 text-center">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex"
          >
            <Github size={16} />
            See more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
