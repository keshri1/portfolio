"use client";

import { useState } from "react";
import { Send, Mail, MapPin, Loader2 } from "lucide-react";
import { personalInfo } from "@/lib/data";
import SocialIcon from "@/components/ui/SocialIcon";

type FormState = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const validate = () => {
    const errs: Partial<typeof form> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      errs.email = "Valid email required";
    if (form.message.trim().length < 10)
      errs.message = "Message must be at least 10 characters";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Send failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: "var(--radius-sm)",
    background: "var(--surface)",
    border: "1px solid var(--border-strong)",
    color: "var(--ink)",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
  } as React.CSSProperties;

  return (
    <section id="contact" className="section-pad" aria-labelledby="contact-heading">
      <div aria-hidden="true" className="relative">
        <span
          className="absolute -top-24 right-0 font-display font-bold select-none opacity-[0.04] text-[14vw] leading-none"
          style={{ color: "var(--ink)" }}
        >
          05
        </span>
      </div>

      <div className="relative z-10 grid md:grid-cols-2 gap-16 items-start">
        {/* Left — copy */}
        <div>
          <span className="section-label reveal">Get in touch</span>
          <h2
            id="contact-heading"
            className="section-title reveal reveal-delay-1"
          >
            Let&apos;s work together
          </h2>
          <p
            className="reveal reveal-delay-2 leading-relaxed mb-8"
            style={{ color: "var(--ink-muted)" }}
          >
            Whether you have a project in mind, a role to fill, or just want to say
            hello — my inbox is always open. I&apos;ll do my best to respond within
            24 hours.
          </p>

          <div className="reveal space-y-4 mb-8" aria-label="Contact information">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 text-sm group"
              style={{ color: "var(--ink-muted)" }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
              >
                <Mail size={15} style={{ color: "var(--accent)" }} />
              </div>
              <span className="group-hover:text-accent transition-colors">
                {personalInfo.email}
              </span>
            </a>
            <div
              className="flex items-center gap-3 text-sm"
              style={{ color: "var(--ink-muted)" }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
              >
                <MapPin size={15} style={{ color: "var(--accent)" }} />
              </div>
              {personalInfo.location}
            </div>
          </div>

          {/* Social links */}
          <div className="reveal flex items-center gap-4">
            {personalInfo.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.icon !== "mail" ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  color: "var(--ink-muted)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "var(--accent)";
                  el.style.borderColor = "rgba(200,135,58,0.4)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "";
                  el.style.borderColor = "";
                }}
              >
                <SocialIcon type={s.icon} size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="reveal card p-6 md:p-8">
          {status === "sent" ? (
            <div
              className="flex flex-col items-center justify-center py-12 text-center"
              role="status"
              aria-live="polite"
            >
              <span className="text-5xl mb-4" aria-hidden="true">🎉</span>
              <h3
                className="font-display text-xl font-semibold mb-2"
                style={{ color: "var(--ink)" }}
              >
                Message sent!
              </h3>
              <p style={{ color: "var(--ink-muted)" }} className="text-sm">
                Thanks for reaching out. I&apos;ll reply within 24 hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="btn-ghost mt-6 text-sm"
              >
                Send another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1.5"
                  style={{ color: "var(--ink)" }}
                >
                  Name <span aria-hidden="true" style={{ color: "var(--accent)" }}>*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  required
                  style={inputStyle}
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border-strong)")}
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="mt-1 text-xs" style={{ color: "#E24B4A" }}>
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1.5"
                  style={{ color: "var(--ink)" }}
                >
                  Email <span aria-hidden="true" style={{ color: "var(--accent)" }}>*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  style={inputStyle}
                  placeholder="jane@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border-strong)")}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="mt-1 text-xs" style={{ color: "#E24B4A" }}>
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1.5"
                  style={{ color: "var(--ink)" }}
                >
                  Message <span aria-hidden="true" style={{ color: "var(--accent)" }}>*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  style={{ ...inputStyle, resize: "vertical" }}
                  placeholder="Tell me about your project or idea…"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "msg-error" : undefined}
                  onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border-strong)")}
                />
                {errors.message && (
                  <p id="msg-error" role="alert" className="mt-1 text-xs" style={{ color: "#E24B4A" }}>
                    {errors.message}
                  </p>
                )}
              </div>

              {status === "error" && (
                <p role="alert" className="text-sm" style={{ color: "#E24B4A" }}>
                  Something went wrong. Please try again or email me directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full justify-center"
                aria-busy={status === "sending"}
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
