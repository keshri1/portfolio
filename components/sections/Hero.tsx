"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, MapPin, Circle } from "lucide-react";
import { personalInfo } from "@/lib/data";
import SocialIcon from "@/components/ui/SocialIcon";

const ROLES = [
  "Full Stack Developer",
  "UI/UX Enthusiast",
  "Open Source Contributor",
  "Problem Solver",
];

export default function Hero() {
  const roleRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    function type() {
      const current = ROLES[roleIdx];
      if (!roleRef.current) return;

      if (!deleting) {
        roleRef.current.textContent = current.slice(0, charIdx + 1);
        charIdx++;
        if (charIdx === current.length) {
          deleting = true;
          timer = setTimeout(type, 1800);
          return;
        }
      } else {
        roleRef.current.textContent = current.slice(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          roleIdx = (roleIdx + 1) % ROLES.length;
        }
      }
      timer = setTimeout(type, deleting ? 50 : 80);
    }

    timer = setTimeout(type, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-6"
      aria-label="Hero section"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {/* Radial glow top-right */}
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Decorative number */}
        <span
          className="absolute right-12 bottom-24 font-display font-bold select-none opacity-[0.04] text-[18vw] leading-none"
          style={{ color: "var(--ink)" }}
        >
          01
        </span>
      </div>

      <div className="max-w-6xl mx-auto w-full pt-28 pb-16 relative z-10">
        {/* Availability badge */}
        {personalInfo.available && (
          <div
            className="reveal inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full mb-8 border"
            style={{
              background: "rgba(45,106,79,0.1)",
              borderColor: "rgba(45,106,79,0.25)",
              color: "#2D6A4F",
            }}
          >
            <Circle size={7} fill="#2D6A4F" className="animate-pulse" />
            Available for new opportunities
          </div>
        )}

        {/* Name */}
        <h1
          className="reveal reveal-delay-1 font-display text-6xl sm:text-7xl md:text-8xl font-bold leading-[1.0] tracking-tight mb-6"
          style={{ color: "var(--ink)" }}
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">{personalInfo.name}</span>
          <span style={{ color: "var(--accent)" }}>.</span>
        </h1>

        {/* Role typewriter */}
        <div
          className="reveal reveal-delay-2 font-mono text-lg md:text-2xl mb-6 flex items-center gap-1"
          style={{ color: "var(--ink-muted)" }}
          aria-live="polite"
          aria-label="Current role"
        >
          <span ref={roleRef} />
          <span
            ref={cursorRef}
            className="animate-cursor inline-block w-[2px] h-[1.1em] align-middle"
            style={{ background: "var(--accent)" }}
            aria-hidden="true"
          />
        </div>

        {/* Tagline */}
        <p
          className="reveal reveal-delay-3 max-w-xl text-lg leading-relaxed mb-3"
          style={{ color: "var(--ink-muted)" }}
        >
          {personalInfo.tagline}
        </p>

        {/* Location */}
        <div
          className="reveal flex items-center gap-1.5 text-sm mb-10"
          style={{ color: "var(--ink-faint)" }}
        >
          <MapPin size={13} aria-hidden="true" />
          {personalInfo.location}
        </div>

        {/* CTAs */}
        <div className="reveal flex flex-wrap gap-4 mb-14">
          <a href="#projects" className="btn-primary">
            View My Work
            <ArrowDown size={15} />
          </a>
          <a href="#contact" className="btn-ghost">
            Get in Touch
          </a>
          <a
            href="https://drive.google.com/file/d/12o_6i9AnACAnlm-pohpARMtuGVBWP9a5/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Download CV
          </a>
        </div>

        {/* Social links */}
        <div className="reveal flex items-center gap-5">
          {personalInfo.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.icon !== "mail" ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="transition-all duration-200 hover:-translate-y-0.5"
              style={{ color: "var(--ink-faint)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--ink-faint)")
              }
            >
              <SocialIcon type={s.icon} size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40 hover:opacity-80 transition-opacity"
        style={{ color: "var(--ink)" }}
      >
        <span className="text-xs font-mono tracking-widest">scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
