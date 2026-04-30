"use client";

import { useState, useEffect, useCallback } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems, personalInfo } from "@/lib/data";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);

    // Determine active section
    const sectionIds = navItems.map((n) => n.href.replace("#", ""));
    for (const id of [...sectionIds].reverse()) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 120) {
        setActiveSection(id);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      <header
        role="banner"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "py-3 backdrop-blur-xl border-b"
            : "py-5"
        )}
        style={{
          background: scrolled ? "rgba(var(--bg-rgb, 253,250,244), 0.85)" : "transparent",
          borderColor: "var(--border)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-display text-xl font-semibold tracking-tight transition-opacity hover:opacity-70"
            aria-label="Home"
            style={{ color: "var(--ink)" }}
          >
            {personalInfo.name.split(" ")[0]}
            <span style={{ color: "var(--accent)" }}>.</span>
          </a>

          {/* Desktop nav */}
          <nav role="navigation" aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn("nav-link text-sm font-medium transition-colors duration-200", {
                    active: activeSection === id,
                  })}
                  style={{ color: activeSection === id ? "var(--accent)" : "var(--ink-muted)" }}
                  aria-current={activeSection === id ? "page" : undefined}
                >
                  {item.label}
                </a>
              );
            })}

            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200"
                style={{
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  color: "var(--ink-muted)",
                }}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              </button>
            )}

            <a href="mailto:mailtokeshri1@gmail.com" className="btn-primary text-xs py-2 px-5">
              Hire Me
            </a>
          </nav>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-3">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="w-9 h-9 flex items-center justify-center rounded-full"
                style={{ background: "var(--surface-2)", color: "var(--ink-muted)" }}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              </button>
            )}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-full"
              style={{ background: "var(--surface-2)", color: "var(--ink)" }}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-20 px-6 pb-8"
          style={{ background: "var(--bg)" }}
          role="dialog"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col gap-6 mt-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-3xl font-semibold transition-colors"
                style={{ color: "var(--ink)" }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="mailto:hello@yourname.dev"
            className="btn-primary mt-10 self-start"
            onClick={() => setMobileOpen(false)}
          >
            Hire Me
          </a>
        </div>
      )}
    </>
  );
}
