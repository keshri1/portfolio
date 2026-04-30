import type {
  PersonalInfo,
  Experience,
  Project,
  SkillCategory,
  NavItem,
  Stat,
} from "@/types";

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const personalInfo: PersonalInfo = {
  name: "Sunny Keshri",
  title: "Full Stack Developer",
  tagline: "I build fast, accessible & memorable digital experiences.",
  bio: "I'm a full-stack developer with a passion for crafting elegant solutions to complex problems. With expertise spanning React, Node.js, and cloud infrastructure, I bring ideas from wireframe to production with care and precision. When I'm not writing code, you'll find me exploring the latest in AI/ML.",
  location: "Bengaluru, India",
  available: true,
  email: "mailtokeshri1@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/keshri1", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/keshri1/", icon: "linkedin" },
    { label: "Twitter", href: "https://twitter.com/yourusername", icon: "twitter" },
    { label: "Email", href: "mailto:mailtokeshri1@gmail.com", icon: "mail" },
  ],
};

export const stats: Stat[] = [
  { value: "8+", label: "Years Experience" },
  { value: "10+", label: "Production Systems Delivered" },
  { value: "1M+", label: "Users Impacted Globally" },
  { value: "3+", label: "Domains (Fintech, BFSI, Healthcare)" },
];

export const experiences: Experience[] = [
  {
    company: "Wipro Technologies (Client: Optum)",
    role: "Senior Full Stack Engineer",
    period: "March 2025 - Present",
    location: "Bengaluru, IN",
    description:
      "Leading frontend development for ECDH (External Clinical Data Hub), an Optum Data Exchange Platform processing millions of clinical records in real-time.",
    highlights: [
      "Designed and built a rule-based visual engine for Kafka-driven data routing pipelines, reducing manual cohort identification from 40 minutes to near real-time",
        "Architected a no-code clinical data discovery UI enabling non-technical users to query complex healthcare datasets with FHIR abstractions",
        "Integrated Airflow pipelines with Snowflake data warehouses for automated data processing across enterprise systems",
        "Collaborated with backend and data teams on REST APIs for rule execution and event-driven workflows"
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Snowflake", "AWS", "Airflow", "Figma", "React-Testing-Library"],
  },
  {
    company: "Cognizant (Client: American Express)",
    role: "Associate Software Engineer",
    period: "Jan 2022 - Feb 2025",
    location: "Bengaluru, IN",
    description:
      "Developed scalable frontend systems for global credit card application platforms across multiple regions. Collaborated closely with design and product to ship pixel-perfect interfaces.",
    highlights: [
      "Built reusable UI components and frameworks adopted across international markets",
        "Improved customer onboarding experience, contributing to 20% increase in new registrations",
        "Integrated analytics tools (Adobe Analytics, ContentSquare) for behavioral tracking and UX optimization",
        "Implemented A/B testing strategies to improve conversion rates and user retention",
        "Established Selenium and Cucumber automation frameworks integrated with Jenkins CI/CD pipelines"
    ],
    tech: ["Next.js", "React", "Node.js", "TypeScript", "GraphQL", "Storybook", "Figma"],
  },
  {
    company: "Tata Consultancy Services (Client: PayPal)",
    role: "Programmer Analyst",
    period: "Oct 2020 - Jan 2022",
    location: "Remote, IN",
    description:
      "Developed UI for PayPal's internal virtual credit card platform using design system frameworks.",
    highlights: [
      "Implemented responsive UI components for multi-region support using its Inhouse design system libraries",
      "Improved application security by identifying and fixing vulnerabilities",
      "Contributed to automation testing and cross-team debugging initiatives",
    ],
    tech: ["React", "Express", "MongoDB", "Node.js", "GraphQL", "Jest"],
  },
  {
    company: "Tata Consultancy Services (Client: United Services Automobile Association)",
    role: "Programmer Analyst Trainee",
    period: "Oct 2018 - Jan 2020",
    location: "Chennai, IN",
    description:
      "Web UI Automation & QA Collaboration for USAA's insurance claims management system. Developed test scripts and frameworks to ensure high-quality releases.",
    highlights: [
      "Developed Selenium WebDriver scripts for automated regression testing of insurance claims workflows",
      "Collaborated with QA teams to identify and resolve critical bugs pre-release",
      "Implemented CI/CD pipelines for automated test execution integrated with Jenkins",
    ],
    tech: ["Java", "Selenium", "TestNG", "Jenkins", "Git", "Maven"],
  },
];

export const projects: Project[] = [
  {
    title: "DevPulse Analytics",
    description:
      "A real-time developer productivity dashboard. Aggregates GitHub, Jira, and Slack activity into a unified timeline with AI-generated insights.",
    tech: ["Next.js", "TypeScript", "tRPC", "Prisma", "OpenAI API"],
    github: "https://github.com/yourusername/devpulse",
    live: "https://devpulse.app",
    featured: true,
    category: "SaaS",
  },
  {
    title: "OpenShelf",
    description:
      "An open-source e-book library and reader with annotation support, reading progress sync, and offline capability via Service Workers.",
    tech: ["React", "TypeScript", "IndexedDB", "Rust (WASM)"],
    github: "https://github.com/yourusername/openshelf",
    live: "https://openshelf.dev",
    featured: true,
    category: "Open Source",
  },
  {
    title: "Briefcast",
    description:
      "AI-powered daily newsletter generator. Scrapes curated sources, summarises with GPT-4, and delivers a beautiful email digest every morning.",
    tech: ["Python", "FastAPI", "Next.js", "OpenAI", "SendGrid"],
    github: "https://github.com/yourusername/briefcast",
    featured: true,
    category: "AI / ML",
  },
  {
    title: "TerminalUI",
    description:
      "A headless, accessible terminal emulator component for React. Supports themes, history, autocomplete, and custom command handlers.",
    tech: ["React", "TypeScript", "xterm.js"],
    github: "https://github.com/yourusername/terminalui",
    featured: false,
    category: "Open Source",
  },
  {
    title: "Cartographer",
    description:
      "Interactive map builder with drag-and-drop custom layers, GeoJSON import/export, and shareable embed codes.",
    tech: ["Next.js", "MapLibre GL", "Supabase"],
    github: "https://github.com/yourusername/cartographer",
    live: "https://cartographer.app",
    featured: false,
    category: "Tool",
  },
  {
    title: "Invoke",
    description:
      "A minimal CLI toolkit for scaffolding projects, running parallel tasks, and managing environment configs — inspired by Just and Taskfile.",
    tech: ["Go", "Cobra", "YAML"],
    github: "https://github.com/yourusername/invoke",
    featured: false,
    category: "CLI",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "🖥️",
    skills: [
      "React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL", "Yup", "React Testing Library", "Storybook",
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      "Java", "Node.js", "Express", "FastAPI",
      "PostgreSQL", "MongoDB",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "☁️",
    skills: [
      "AWS", "Docker", "GitHub Actions", "Vercel"
    ],
  },
  {
    title: "Design & Tools",
    icon: "🎨",
    skills: [
      "Figma", "Storybook", "Playwright",
      "Git", "Postman", "Insomnia",
    ],
  },
];
