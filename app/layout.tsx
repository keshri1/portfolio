import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "../styles/globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

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
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="canonical" href="https://keshri-dev.vercel.app" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
