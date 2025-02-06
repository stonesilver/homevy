import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        "gray-main": "#777777",
      },
      spacing: {
        13: "0.8125rem",
      },
      fontSize: {
        20: "1.25rem",
      },
      fontFamily: {
        manrope: ["var(--font-manrope)"],
        "open-sans": ["var(--font-open-sans)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
