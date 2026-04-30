import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  FileText,
} from "lucide-react";
import type { SocialLink } from "@/types";

interface SocialIconProps {
  type: SocialLink["icon"];
  size?: number;
}

const icons: Record<SocialLink["icon"], React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
  resume: FileText,
};

export default function SocialIcon({ type, size = 18 }: SocialIconProps) {
  const Icon = icons[type];
  return <Icon size={size} aria-hidden="true" />;
}
