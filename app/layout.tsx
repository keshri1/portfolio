import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Your Name — Full Stack Developer",
  description:
    "Portfolio of [Your Name] — Full Stack Developer building fast, accessible & memorable digital experiences.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://yourname.dev",
    title: "Your Name — Full Stack Developer",
    description: "Building fast, accessible & memorable digital experiences.",
    siteName: "Your Name Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name — Full Stack Developer",
    description: "Building fast, accessible & memorable digital experiences.",
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
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
