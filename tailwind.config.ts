import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        background: {
          DEFAULT: "var(--foreground-color)", // CSS variable for dynamic updates
          light: "#723c3c", // Light mode color
          dark: "red", // Dark mode color
        },
        black: {
          100: "#000319",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
