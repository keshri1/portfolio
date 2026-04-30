import { personalInfo } from "@/lib/data";
import SocialIcon from "@/components/ui/SocialIcon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 px-6 border-t"
      style={{ borderColor: "var(--border)", color: "var(--ink-muted)" }}
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm font-mono">
          © {year} {personalInfo.name}. Designed & built with care.
        </p>

        <div className="flex items-center gap-4">
          {personalInfo.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.icon !== "mail" ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="transition-colors hover:text-accent"
              style={{ color: "var(--ink-faint)" }}
            >
              <SocialIcon type={s.icon} size={16} />
            </a>
          ))}
        </div>

        <p className="text-xs font-mono opacity-50">
          Next.js · TypeScript · Tailwind
        </p>
      </div>
    </footer>
  );
}
