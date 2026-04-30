import { NextRequest, NextResponse } from "next/server";

// Rate limiting — simple in-memory store (use Redis/Upstash in production)
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const LIMIT = 3; // requests per window
const WINDOW_MS = 60_000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (entry.count >= LIMIT) return true;

  entry.count++;
  return false;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a minute and try again." },
      { status: 429 }
    );
  }

  const body = await req.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, message } = body as Record<string, unknown>;

  // Validate
  if (
    typeof name !== "string" ||
    name.trim().length < 2 ||
    typeof email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof message !== "string" ||
    message.trim().length < 10
  ) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 422 });
  }

  // ── Option A: Resend ─────────────────────────────────────
  // Uncomment and install: npm i resend
  //
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "Portfolio Contact <noreply@yourname.dev>",
  //   to: process.env.CONTACT_TO_EMAIL!,
  //   subject: `New message from ${name}`,
  //   text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  // });

  // ── Option B: Formspree ──────────────────────────────────
  // const res = await fetch(
  //   `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`,
  //   {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ name, email, message }),
  //   }
  // );
  // if (!res.ok) throw new Error("Formspree error");

  // ── Placeholder (remove when wired up) ───────────────────
  console.log("Contact form submission:", { name, email, message });

  return NextResponse.json({ ok: true }, { status: 200 });
}
