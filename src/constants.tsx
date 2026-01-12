import type { Skill, Project, ExperienceItem, EducationItem } from "./types";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaCss3Alt,
  FaLinkedin,
  FaEnvelope,
  FaHtml5,
  FaGitAlt,
  FaWhatsapp,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiCplusplus,
  SiTensorflow,
} from "react-icons/si";

import profile from "./assets/profile.jpeg";
import goloop from "./assets/goloop.png";
import luas from "./assets/lll.png";
import umn from "./assets/umn.png";
import seadex from "./assets/seadex.png";
import aircare from "./assets/aircare.png";

export const SOCIAL_LINKS = {
  whatsapp: "https://wa.me/6281386035980",
  linkedin: "https://www.linkedin.com/in/jansen-caesar-395003370/",
  email: "mailto:caesar.jansen.work@gmail.com",
  instagram: "https://www.instagram.com/jansen__caesar/",
};

export const PERSONAL_INFO = {
  name: "Jansen Caesar",
  description:
    "Driven by curiosity and a strong interest in technology, I focus on understanding systems, learning from experimentation, and steadily improving my skill.",
  profileImage: profile,
  cvUrl: "/cv/Jansen_Caesar_CV.pdf",
  ...SOCIAL_LINKS,
};

export const ICONS = {
  whatsapp: FaWhatsapp,
  linkedin: FaLinkedin,
  email: FaEnvelope,
};

export const SKILLS: Skill[] = [
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaNodeJs, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: FaReact, color: "#61DBFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
];

export const PROJECTS: Project[] = [
  {
    title: "GoLoop",
    description:
      "A platform that encourages community-driven environmental clean-up actions.",
    tags: ["React", "Tailwind", "TypeScript", "Firebase"],
    imageUrl: goloop,
    repoUrl: "https://github.com/MATYUS05/GoLoop",
  },
  {
    title: "PT. Luas Langgeng Lestari Website",
    description:
      "Corporate website focused on sustainability and biomass energy solutions.",
    tags: ["React", "Tailwind", "TypeScript", "Vite"],
    imageUrl: luas,
    liveUrl: "https://luasbiomass.com/",
  },
  {
    title: "Seadex",
    description:
      "Web application for managing e-commerce operations and company profile.",
    tags: ["Laravel", "PHP", "Bootstrap", "MySQL"],
    imageUrl: seadex,
    repoUrl: "https://github.com/hhoow0093/UAS-WEBPRO-IF330",
  },
  {
    title: "UMN Event",
    description:
      "Campus event management web application built for academic purposes.",
    tags: ["PHP", "MySQL"],
    imageUrl: umn,
    repoUrl: "https://github.com/hhoow0093/UTS-LECTURE-WEBPRO-IF330",
  },
  {
    title: "Air Care",
    description: "Application to monitor air quality in real-time.",
    tags: ["Kotlin", "Jetpack Compose", "Firebase"],
    imageUrl: aircare,
    repoUrl: "https://github.com/SebastianObert/AirCare",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Global Game Jam Crew",
    company: "Global Game Jam",
    period: "Jan 24 – 26, 2025",
    description:
      "Collaborated with multidisciplinary teams during the world’s largest annual game creation event.",
  },
  {
    role: "Garuda Hackathon 6.0 Participant",
    company: "Garuda Hackathon",
    period: "Jul 24 – 26, 2025",
    description:
      "International-scale hackathon focused on innovative technology solutions for sustainability.",
  },
];

export const EDUCATIONS: EducationItem[] = [
  {
    institution: "SMAK BPK PENABUR CIANJUR",
    degree: "Science (IPA)",
    period: "2020 – 2023",
    description: "",
  },
  {
    institution: "Universitas Multimedia Nusantara",
    degree: "Informatics",
    period: "2023 – Present",
    description:
      "Focused on software engineering, algorithms, data structures, and artificial intelligence.",
  },
];
