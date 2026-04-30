# Portfolio — Next.js + TypeScript

A production-ready, accessible, responsive developer portfolio built with:
- **Next.js 14** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS** (custom design system)
- **Framer Motion** (scroll animations)
- **next-themes** (dark/light mode)

Inspired by and merging the best ideas from top GitHub portfolio repositories:
- `brittanychiang/v4` — clean nav, side layout philosophy
- `cobiwave/simplefolio` — section structure & minimal clarity
- `soumyajit4419/Portfolio` — React patterns & component architecture
- `hrishikeshpaul/portfolio-template` — timeline UX
- `nicktarnold/devfolio` — filter tabs on projects

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:3000
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout + metadata + ThemeProvider
│   └── page.tsx            # Main page — assembles all sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky nav, active link, theme toggle, mobile drawer
│   │   └── Footer.tsx      # Social links, credit line
│   ├── sections/
│   │   ├── Hero.tsx        # Typewriter, CTAs, availability badge
│   │   ├── About.tsx       # Bio + animated stats grid
│   │   ├── Experience.tsx  # Accordion timeline
│   │   ├── Projects.tsx    # Filterable card grid
│   │   ├── Skills.tsx      # Categorised skill chips
│   │   └── Contact.tsx     # Validated form + social links
│   └── ui/
│       ├── ScrollProgress.tsx  # Thin accent bar at top
│       ├── RevealObserver.tsx  # IntersectionObserver for .reveal elements
│       ├── SocialIcon.tsx      # Typed icon switcher
│       └── Tag.tsx             # Tech chip
├── lib/
│   ├── data.ts             # ✏️  ALL your content lives here — edit this!
│   └── utils.ts            # cn() helper
├── styles/
│   └── globals.css         # CSS variables, animations, utility classes
├── types/
│   └── index.ts            # Shared TypeScript interfaces
├── public/
│   └── resume.pdf          # Add your CV here
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## ✏️ Customisation

**All content is in one file:** `lib/data.ts`

Edit:
- `personalInfo` — name, title, bio, email, socials
- `experiences` — work history
- `projects` — your projects
- `skillCategories` — your tech stack
- `stats` — headline numbers

**Design tokens** (colours, fonts) are in `styles/globals.css` as CSS variables.

## 🌐 Deployment

### Vercel (recommended)
```bash
npm i -g vercel
vercel
```

### Self-hosted
```bash
npm run build
npm start
```

## ♿ Accessibility

- WCAG AA compliant colour contrast
- All interactive elements keyboard-navigable
- ARIA labels on icons, form fields, and sections
- `aria-live` regions for dynamic content (typewriter, form state)
- Focus rings visible in both light and dark modes

## 📝 Adding a contact form backend

Replace the `await new Promise(...)` mock in `Contact.tsx` with a real endpoint:

```ts
// Example: Formspree
const res = await fetch("https://formspree.io/f/YOUR_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
if (!res.ok) throw new Error("Failed");
```

Other options: Resend, EmailJS, AWS SES, your own API route at `app/api/contact/route.ts`.
