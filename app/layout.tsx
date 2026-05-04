import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://keshri-dev.vercel.app"),
  title: "Sunny Keshri — Full Stack Developer | UI/UX Enthusiast",
  description:
    "Full Stack Developer with 8+ years building fast, accessible & memorable digital experiences. Expert in React, Next.js, TypeScript, Node.js. Healthcare & Fintech specialist.",
  keywords: [
    "Sunny Keshri",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Frontend Engineer",
    "Backend Developer",
    "Node.js",
    "Web Developer",
    "Keshri Dev",
    "Portfolio",
    "Bengaluru Developer",
  ],
  authors: [{ name: "Sunny Keshri", url: "https://keshri-dev.vercel.app" }],
  creator: "Sunny Keshri",
  colorScheme: "dark light",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://keshri-dev.vercel.app",
    title: "Sunny Keshri — Full Stack Developer",
    description:
      "8+ years building enterprise-grade applications. Fintech, Healthcare, BFSI expertise. React, Next.js, Node.js specialist.",
    siteName: "Sunny Keshri Portfolio",
    images: [
      {
        url: "https://keshri-dev.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sunny Keshri - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunny Keshri — Full Stack Developer",
    description:
      "8+ years building enterprise applications. Fintech, Healthcare, BFSI specialist.",
    creator: "@keshri1_dev",
    images: ["https://keshri-dev.vercel.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "add-your-google-site-verification-code-here",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://keshri-dev.vercel.app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
