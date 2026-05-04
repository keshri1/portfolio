import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import RevealObserver from "@/components/ui/RevealObserver";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sunny Keshri",
    alternateName: ["Sunny", "Keshri", "Keshri Dev"],
    jobTitle: "Full Stack Developer",
    url: "https://keshri-dev.vercel.app",
    email: "mailtokeshri1@gmail.com",
    image: "https://keshri-dev.vercel.app/og-image.png",
    description:
      "Full Stack Developer with 8+ years experience in building scalable applications. Expert in React, Next.js, TypeScript, Node.js. Specialist in Fintech, BFSI, and Healthcare domains.",
    sameAs: [
      "https://github.com/keshri1",
      "https://www.linkedin.com/in/keshri1/",
      "https://x.com/sunny_keshri1",
    ],
    location: {
      "@type": "Place",
      name: "Bengaluru, India",
    },
    knowsAbout: [
      "Full Stack Development",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "UI/UX Design",
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "PostgreSQL",
      "AWS",
      "GraphQL",
      "REST APIs",
    ],
    worksFor: [
      {
        "@type": "Organization",
        name: "Wipro Technologies",
      },
      {
        "@type": "Organization",
        name: "Cognizant",
      },
      {
        "@type": "Organization",
        name: "Tata Consultancy Services",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="relative overflow-x-hidden">
        <ScrollProgress />
        <RevealObserver />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
