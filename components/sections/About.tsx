import { personalInfo, stats } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-pad" aria-labelledby="about-heading">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left — bio */}
        <div>
          <span className="section-label reveal">About me</span>
          <h2
            id="about-heading"
            className="section-title reveal reveal-delay-1"
          >
            Crafting code with
            <br />
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
              intent & elegance
            </em>
          </h2>
          <p
            className="reveal reveal-delay-2 leading-relaxed mb-6"
            style={{ color: "var(--ink-muted)" }}
          >
            {personalInfo.bio}
          </p>
          <p
            className="reveal reveal-delay-3 leading-relaxed"
            style={{ color: "var(--ink-muted)" }}
          >
            I believe great software is the intersection of thoughtful engineering and
            human-centred design. I take pride in writing clean, tested, and well-documented
            code that my teammates enjoy maintaining.
          </p>
        </div>

        {/* Right — stats + decorative element */}
        <div className="relative">
          {/* Decorative box */}
          <div
            aria-hidden="true"
            className="absolute -top-6 -right-6 w-48 h-48 rounded-2xl opacity-10"
            style={{ background: "var(--accent)" }}
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl opacity-5"
            style={{ background: "var(--accent)" }}
          />

          {/* Stats grid */}
          <div
            className="reveal relative grid grid-cols-2 gap-4"
            role="list"
            aria-label="Career statistics"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                role="listitem"
                className={`card p-6 reveal reveal-delay-${i + 1}`}
              >
                <p
                  className="font-display text-4xl font-bold mb-1"
                  style={{ color: "var(--accent)" }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-sm"
                  style={{ color: "var(--ink-muted)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Currently learning badge */}
          <div
            className="reveal mt-4 card p-4 flex items-start gap-3"
            aria-label="Currently learning"
          >
            <span className="text-2xl" aria-hidden="true">🚀</span>
            <div>
              <p
                className="text-xs font-mono mb-1"
                style={{ color: "var(--ink-faint)" }}
              >
                Currently exploring
              </p>
              <p
                className="text-sm font-medium"
                style={{ color: "var(--ink)" }}
              >
                Agentic AI · LLM fine-tuning · MCP Servers · RAG · LangChain
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
