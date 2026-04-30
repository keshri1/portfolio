"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Briefcase } from "lucide-react";
import { experiences } from "@/lib/data";
import Tag from "@/components/ui/Tag";

export default function Experience() {
  const [openIdx, setOpenIdx] = useState<number>(0);

  return (
    <section
      id="experience"
      className="section-pad"
      aria-labelledby="experience-heading"
      style={{ background: "var(--surface-2)" }}
    >
      {/* Bg number decoration */}
      <div aria-hidden="true" className="relative">
        <span
          className="absolute -top-24 right-0 font-display font-bold select-none opacity-[0.04] text-[14vw] leading-none"
          style={{ color: "var(--ink)" }}
        >
          02
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-0 relative z-10">
        <span className="section-label reveal">Work history</span>
        <h2
          id="experience-heading"
          className="section-title reveal reveal-delay-1"
        >
          Where I&apos;ve worked
        </h2>

        {/* Timeline */}
        <div
          className="mt-12 relative"
          role="list"
          aria-label="Work experience timeline"
        >
          {/* Vertical line */}
          <div
            aria-hidden="true"
            className="absolute left-[5px] top-2 bottom-2 w-px"
            style={{ background: "var(--border-strong)" }}
          />

          <div className="flex flex-col gap-8 pl-8">
            {experiences.map((exp, i) => {
              const isOpen = openIdx === i;
              return (
                <article
                  key={exp.company}
                  role="listitem"
                  className={`reveal reveal-delay-${i + 1} relative`}
                >
                  {/* Timeline dot */}
                  <div
                    aria-hidden="true"
                    className="timeline-dot absolute -left-[27px]"
                    style={{
                      background: isOpen ? "var(--accent)" : "var(--ink-faint)",
                      boxShadow: isOpen ? "0 0 0 2px var(--accent)" : "0 0 0 2px var(--ink-faint)",
                    }}
                  />

                  <button
                    onClick={() => setOpenIdx(isOpen ? -1 : i)}
                    className="w-full text-left card p-5 md:p-6 cursor-pointer group"
                    aria-expanded={isOpen}
                    aria-controls={`exp-detail-${i}`}
                    style={{ transition: "all 0.25s ease" }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        {/* Company icon */}
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
                        >
                          <Briefcase size={16} style={{ color: "var(--accent)" }} />
                        </div>

                        <div>
                          <h3
                            className="font-display text-lg font-semibold mb-0.5"
                            style={{ color: "var(--ink)" }}
                          >
                            {exp.role}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2">
                            <span
                              className="text-sm font-medium"
                              style={{ color: "var(--accent)" }}
                            >
                              {exp.company}
                            </span>
                            <span
                              className="text-xs"
                              style={{ color: "var(--ink-faint)" }}
                            >
                              ·
                            </span>
                            <span
                              className="text-xs font-mono"
                              style={{ color: "var(--ink-faint)" }}
                            >
                              {exp.period}
                            </span>
                            <span
                              className="text-xs"
                              style={{ color: "var(--ink-faint)" }}
                            >
                              ·
                            </span>
                            <span
                              className="text-xs font-mono"
                              style={{ color: "var(--ink-faint)" }}
                            >
                              {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div style={{ color: "var(--ink-faint)" }}>
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </div>
                    </div>

                    {/* Expanded detail */}
                    <div
                      id={`exp-detail-${i}`}
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-[600px] mt-5 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p
                        className="text-sm leading-relaxed mb-4"
                        style={{ color: "var(--ink-muted)" }}
                      >
                        {exp.description}
                      </p>

                      <ul
                        className="space-y-2 mb-5"
                        aria-label="Key highlights"
                      >
                        {exp.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2 text-sm"
                            style={{ color: "var(--ink-muted)" }}
                          >
                            <span
                              className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ background: "var(--accent)" }}
                              aria-hidden="true"
                            />
                            {h}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2" aria-label="Technologies used">
                        {exp.tech.map((t) => (
                          <Tag key={t} label={t} />
                        ))}
                      </div>
                    </div>
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
