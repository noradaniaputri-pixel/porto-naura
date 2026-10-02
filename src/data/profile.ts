/**
 * Everything personal lives here. Replace the placeholder values and the whole site updates.
 */
export const profile = {
  name: "Noura",
  fullName: "Noura Daniya Putri",
  role: "Informatics Engineering Student & Full Stack Developer",
  tagline:
    "An Informatics Engineering student who loves turning ideas into beautiful digital experiences.",
  heroIntro:
    "I design and build responsive web apps from the interface to the database, with a soft spot for clean code and friendly UI.",

  // Put your photo in /public (e.g. /noura.webp) and set the path here. Empty = placeholder portrait.
  photo: "../../src/assets/WhatsApp Image 2026-10-02 at 12.39.20.jpeg",
  aboutPhoto: "",

  location: "Indonesia",
  email: "hello@example.com",
  cvUrl: "#", // e.g. "/Noura-Daniya-Putri-CV.pdf" (file in /public)

  socials: {
    github: "https://github.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },

  about: {
    paragraphs: [
      "Hello! I'm Noura, an Informatics Engineering student who enjoys building things for the web, from the pixels people see to the data behind them.",
      "I'm most interested in full stack development, user-friendly interfaces, and solving real problems with code. I learn best by shipping small projects, and I'm always curious about the next one.",
    ],
    facts: [
      { label: "Name", value: "Noura Daniya Putri" },
      { label: "Education", value: "Informatics Engineering" },
      { label: "Location", value: "Indonesia" },
      { label: "Interests", value: "Web development, UI design, problem solving" },
      { label: "Career goal", value: "Full stack developer building products people enjoy using" },
    ],
  },

  stats: [
    { value: 10, suffix: "+", label: "Projects" },
    { value: 5, suffix: "+", label: "Technologies" },
    { value: 2, suffix: "+", label: "Years learning" },
    { value: 100, suffix: "%", label: "Curious" },
  ],

  services: [
    {
      title: "Web Development",
      text: "Building responsive, modern websites that work on any screen.",
      icon: "globe",
    },
    {
      title: "UI Design",
      text: "Designing clean, user-friendly interfaces in Figma before writing code.",
      icon: "palette",
    },
    {
      title: "Frontend Development",
      text: "Crafting interfaces with React, TypeScript and modern frontend tools.",
      icon: "layout",
    },
    {
      title: "Problem Solving",
      text: "Breaking problems down and turning them into working solutions.",
      icon: "lightbulb",
    },
  ],
} as const;
