import type { LucideIcon } from "lucide-react";

export type Category = "Web" | "Mobile" | "UI/UX" | "Other";

export interface Project {
  id: number;
  title: string;
  description: string;
  /** Path under /public (e.g. "/projects/portfolio.webp"). Leave empty to use a generated placeholder. */
  image?: string;
  category: Category;
  technologies: string[];
  github: string;
  demo: string;
  featured?: boolean;
  problem: string;
  solution: string;
  features: string[];
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  level: "Beginner" | "Intermediate" | "Advanced";
  /** 0–100, drives the progress bar */
  percent: number;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string;
}
