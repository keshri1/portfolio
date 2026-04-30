# Deployment Guide

This portfolio uses **Vercel** for hosting and **GitHub Actions** for CI/CD.
The two work together: Actions runs quality checks, then triggers a Vercel deploy.

```
GitHub push → Actions: lint + typecheck + build → Vercel deploy
                                                  ├── preview  (non-main branches)
                                                  └── production (main branch)
```

---

## 1 — Push to GitHub

```bash
git init
git add .
git commit -m "feat: initial portfolio"
gh repo create portfolio --public --source=. --push
# or: git remote add origin https://github.com/YOU/portfolio.git && git push -u origin main
```

---

## 2 — Connect to Vercel

### 2a — Install Vercel CLI
```bash
npm i -g vercel
vercel login        # browser OAuth
```

### 2b — Link your project
```bash
vercel link         # follow prompts, creates .vercel/project.json
```

### 2c — Grab your IDs
```bash
cat .vercel/project.json
# → { "orgId": "team_xxx", "projectId": "prj_xxx" }
```

### 2d — Create a Vercel token
Go to **vercel.com → Account Settings → Tokens → Create** and copy the value.

---

## 3 — Add GitHub Secrets

In your GitHub repo: **Settings → Secrets and variables → Actions → New repository secret**

| Secret name | Where to get it |
|---|---|
| `VERCEL_TOKEN` | Step 2d above |
| `VERCEL_ORG_ID` | `orgId` from `.vercel/project.json` |
| `VERCEL_PROJECT_ID` | `projectId` from `.vercel/project.json` |

> **Do NOT commit `.vercel/project.json`** — it's already in `.gitignore`.

---

## 4 — Set environment variables on Vercel

In **vercel.com → Project → Settings → Environment Variables**, add:

| Key | Value | Environment |
|---|---|---|
| `RESEND_API_KEY` | your Resend key | Production, Preview |
| `CONTACT_TO_EMAIL` | hello@yourname.dev | Production, Preview |

Or, if using Formspree:

| Key | Value | Environment |
|---|---|---|
| `NEXT_PUBLIC_FORMSPREE_ID` | your form ID | Production, Preview |

---

## 5 — Custom domain (optional)

In **vercel.com → Project → Settings → Domains**, add `yourname.dev`.
Then add these DNS records at your registrar:

| Type | Name | Value |
|---|---|---|
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

Then update the production URL in `.github/workflows/ci-deploy.yml`:
```yaml
url: https://yourname.dev   # line ~70
```

---

## 6 — How the pipeline works

```
Every push / PR
│
├── quality job
│   ├── tsc --noEmit        (type errors = red X, no deploy)
│   ├── eslint              (lint errors = red X)
│   └── next build          (build failure = red X)
│
├── if branch != main → deploy-preview job
│   └── vercel deploy       → unique preview URL
│       └── posts URL as PR comment
│
└── if branch == main → deploy-production job
    └── vercel deploy --prod → yourname.dev
```

- **PRs** get a unique preview URL posted as a comment automatically.
- **Merging to main** deploys to production — zero manual steps.
- **Concurrent pushes** cancel previous runs (saves CI minutes).

---

## 7 — Wire up the contact form

Open `app/api/contact/route.ts` and uncomment either the **Resend** or **Formspree** block.

### Resend (recommended)
```bash
npm i resend
```
Sign up at [resend.com](https://resend.com), verify your domain, create an API key.

### Formspree
Sign up at [formspree.io](https://formspree.io), create a form, copy the ID.

---

## Troubleshooting

| Issue | Fix |
|---|---|
| `Error: VERCEL_TOKEN not set` | Add the secret in GitHub → Settings → Secrets |
| Build fails on `tsc` | Fix the TypeScript errors shown in the Actions log |
| Preview URL not posted on PR | Ensure the workflow has `pull_request` trigger and `GITHUB_TOKEN` permissions |
| Domain not resolving | DNS propagation takes up to 48h; check with `dig yourname.dev` |
