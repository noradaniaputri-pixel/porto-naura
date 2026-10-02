import type { Project } from "../types";

/**
 * Add or edit projects here. To use a real screenshot, drop a .webp into /public/projects
 * and set `image: "/projects/your-file.webp"`. Leave `image` out to keep the placeholder.
 */
export const projects: Project[] = [
  {
    id: 1,
    title: "Student Management System",
    description:
      "A modern web app for managing students, classes and grades, with role-based dashboards.",
    category: "Web",
    technologies: ["React", "Laravel", "MySQL"],
    github: "#",
    demo: "#",
    featured: true,
    problem:
      "Class data was scattered across spreadsheets, so updating grades and finding a student's history was slow and error-prone.",
    solution:
      "A single web app with separate views for admins, teachers and students, backed by a relational database and a clean REST API.",
    features: [
      "Role-based login and dashboards",
      "Student, class and grade management",
      "Search, filter and export to CSV",
      "Responsive layout for phones and tablets",
    ],
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description: "A modern, responsive personal portfolio with dark mode and smooth animations.",
    category: "Web",
    technologies: ["React", "TypeScript", "Tailwind"],
    github: "#",
    demo: "#",
    problem: "I needed one place to show my skills and projects to recruiters and collaborators.",
    solution:
      "A fast single-page site with a data-driven project list, built from reusable components.",
    features: ["Dark mode", "Filterable projects", "Contact form with validation", "Accessible and responsive"],
  },
  {
    id: 3,
    title: "To-Do Application",
    description: "A simple task manager with categories, due dates and local persistence.",
    category: "Web",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "#",
    demo: "#",
    problem: "Most to-do apps felt heavy for quick daily planning.",
    solution: "A lightweight app that saves tasks in the browser and works offline.",
    features: ["Add, edit and complete tasks", "Categories and due dates", "Saved in localStorage"],
  },
  {
    id: 4,
    title: "Habit Tracker App",
    description: "A mobile app for building daily habits with streaks and gentle reminders.",
    category: "Mobile",
    technologies: ["React Native", "TypeScript"],
    github: "#",
    demo: "#",
    problem: "It's hard to stay consistent with new habits without visible progress.",
    solution: "Daily check-ins, streak tracking and weekly summaries that make progress easy to see.",
    features: ["Daily check-ins", "Streaks and weekly summary", "Local notifications"],
  },
  {
    id: 5,
    title: "Campus Event App Design",
    description: "UI/UX case study for an app that helps students discover campus events.",
    category: "UI/UX",
    technologies: ["Figma", "Prototyping"],
    github: "#",
    demo: "#",
    problem: "Students missed events because announcements were spread across many chat groups.",
    solution: "A clean event feed with filters, saved events and calendar reminders, tested with classmates.",
    features: ["User flow and wireframes", "Design system in Figma", "Clickable prototype"],
  },
  {
    id: 6,
    title: "Expense Tracker CLI",
    description: "A command-line tool that logs expenses and prints monthly summaries.",
    category: "Other",
    technologies: ["Python", "SQLite"],
    github: "#",
    demo: "#",
    problem: "I wanted a fast way to log spending without opening a spreadsheet.",
    solution: "A small CLI that stores entries in SQLite and prints per-category reports.",
    features: ["Add and list expenses", "Monthly category report", "Export to CSV"],
  },
];
