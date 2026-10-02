/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#F48BC3", // Primary Pink
          dark: "#D83F91", // Dark Pink (decor, large text)
          deep: "#C93584", // Dark Pink tuned for AA contrast with white text
        },
        // Theme-aware tokens (values live in index.css, light + dark)
        page: "rgb(var(--page) / <alpha-value>)",
        light: "rgb(var(--light) / <alpha-value>)",
        soft: "rgb(var(--soft) / <alpha-value>)",
        contact: "rgb(var(--contact) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
      },
      fontFamily: {
        heading: ['"Fredoka"', '"Baloo 2"', "Quicksand", "ui-rounded", "system-ui", "sans-serif"],
        body: ['"Poppins"', "Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        card: "1.5rem",
        xl2: "2rem",
      },
      boxShadow: {
        soft: "0 10px 30px rgb(var(--shadow) / 0.12)",
        lift: "0 18px 40px rgb(var(--shadow) / 0.22)",
      },
      keyframes: {
        floatY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(8deg)" },
        },
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.9" },
          "50%": { transform: "scale(1.18)", opacity: "0.55" },
        },
        spinSlow: {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "float-y": "floatY 3.8s ease-in-out infinite",
        "float-slow": "floatSlow 9s ease-in-out infinite",
        "pulse-soft": "pulseSoft 4.5s ease-in-out infinite",
        "spin-slow": "spinSlow 40s linear infinite",
      },
    },
  },
  plugins: [],
};
