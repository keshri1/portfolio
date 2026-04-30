"use client";

import { useEffect, useRef } from "react";
import { skillCategories } from "@/lib/data";

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const bars = sectionRef.current?.querySelectorAll(".skill-bar-fill");
    if (!bars) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("animated");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    bars.forEach((bar) => observer.observe(bar));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      aria-labelledby="skills-heading"
      style={{ background: "var(--surface-2)" }}
    >
      <div className="section-pad">
        <div aria-hidden="true" className="relative">
          <span
            className="absolute -top-24 right-0 font-display font-bold select-none opacity-[0.04] text-[14vw] leading-none"
            style={{ color: "var(--ink)" }}
          >
            04
          </span>
        </div>

        <div className="relative z-10">
          <span className="section-label reveal">What I know</span>
          <h2
            id="skills-heading"
            className="section-title reveal reveal-delay-1"
          >
            Skills & tools
          </h2>

          <div
            className="mt-12 grid sm:grid-cols-2 gap-6"
            role="list"
            aria-label="Skill categories"
          >
            {skillCategories.map((cat, i) => (
              <div
                key={cat.title}
                role="listitem"
                className={`reveal reveal-delay-${i + 1} card p-6`}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl" aria-hidden="true">
                    {cat.icon}
                  </span>
                  <h3
                    className="font-display text-lg font-semibold"
                    style={{ color: "var(--ink)" }}
                  >
                    {cat.title}
                  </h3>
                </div>

                {/* Skill chips */}
                <div
                  className="flex flex-wrap gap-2"
                  aria-label={`${cat.title} skills`}
                >
                  {cat.skills.map((skill, si) => (
                    <span
                      key={skill}
                      className="tag transition-all duration-200 cursor-default"
                      style={{ animationDelay: `${si * 50}ms` }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background =
                          "rgba(200,135,58,0.12)";
                        (e.currentTarget as HTMLElement).style.color =
                          "var(--accent)";
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "rgba(200,135,58,0.3)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "";
                        (e.currentTarget as HTMLElement).style.color = "";
                        (e.currentTarget as HTMLElement).style.borderColor = "";
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Proficiency note */}
          <p
            className="reveal mt-8 text-sm text-center"
            style={{ color: "var(--ink-faint)" }}
          >
            Always learning — this list grows every week.
          </p>
        </div>
      </div>
    </section>
  );
}
