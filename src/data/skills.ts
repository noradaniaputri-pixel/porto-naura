import {
  Atom,
  Braces,
  Code2,
  Database,
  FileCode2,
  FileType2,
  Figma,
  Flame,
  GitBranch,
  Github,
  Layers,
  Paintbrush,
  Server,
  Terminal,
  Wind,
} from "lucide-react";
import type { SkillGroup } from "../types";

/** Levels and percentages are placeholders: set them to what feels honest. */
export const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    skills: [
      { name: "HTML", icon: FileCode2, level: "Advanced", percent: 90 },
      { name: "CSS", icon: Paintbrush, level: "Advanced", percent: 85 },
      { name: "JavaScript", icon: Braces, level: "Intermediate", percent: 75 },
      { name: "TypeScript", icon: FileType2, level: "Intermediate", percent: 65 },
      { name: "Python", icon: Terminal, level: "Intermediate", percent: 65 },
      { name: "PHP", icon: Server, level: "Intermediate", percent: 60 },
    ],
  },
  {
    title: "Frameworks & Database",
    skills: [
      { name: "React", icon: Atom, level: "Intermediate", percent: 75 },
      { name: "Next.js", icon: Layers, level: "Beginner", percent: 45 },
      { name: "Laravel", icon: Flame, level: "Intermediate", percent: 60 },
      { name: "Tailwind CSS", icon: Wind, level: "Advanced", percent: 85 },
      { name: "MySQL", icon: Database, level: "Intermediate", percent: 65 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: GitBranch, level: "Intermediate", percent: 70 },
      { name: "GitHub", icon: Github, level: "Intermediate", percent: 75 },
      { name: "VS Code", icon: Code2, level: "Advanced", percent: 90 },
      { name: "Figma", icon: Figma, level: "Intermediate", percent: 70 },
    ],
  },
];
