"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { navItems, personalInfo } from "@/lib/data";

// Navbar specifically for blog pages — links point back to homepage sections
// e.g. /#about instead of #about, so they work from any URL
export default function BlogNavbar() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3 backdrop-blur-xl border-b" : "py-5"
        }`}
        style={{
          background: scrolled ? "rgba(var(--bg-rgb, 253,250,244), 0.85)" : "transparent",
          borderColor: "var(--border)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo — links back to homepage */}
          <Link
            href="/"
            className="font-display text-xl font-semibold tracking-tight transition-opacity hover:opacity-70"
            aria-label="Back to portfolio home"
            style={{ color: "var(--ink)" }}
          >
            {personalInfo.name.split(" ")[0]}
            <span style={{ color: "var(--accent)" }}>.</span>
          </Link>

          {/* Desktop nav — all links go to /#section */}
          <nav
            role="navigation"
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-8"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={`/${item.href}`}   /* e.g. /#about, /#experience */
                className="nav-link text-sm font-medium transition-colors duration-200"
                style={{ color: "var(--ink-muted)" }}
              >
                {item.label}
              </Link>
            ))}

            {/* Blog — active state since we're on it */}
            <Link
              href="/blog"
              className="nav-link text-sm font-medium"
              style={{ color: "var(--accent)" }}
              aria-current="page"
            >
              Blog
            </Link>

            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
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
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
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
              <Link
                key={item.href}
                href={`/${item.href}`}
                onClick={() => setMobileOpen(false)}
                className="font-display text-3xl font-semibold transition-colors"
                style={{ color: "var(--ink)" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/blog"
              onClick={() => setMobileOpen(false)}
              className="font-display text-3xl font-semibold"
              style={{ color: "var(--accent)" }}
            >
              Blog
            </Link>
          </nav>
          <a
            href="mailto:mailtokeshri1@gmail.com"
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
