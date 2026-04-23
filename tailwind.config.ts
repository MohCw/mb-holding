import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#565b87",
        background: "#f0f1f8",
        foreground: "#1c1d2e",
        accent: "#60613d",
      },
      fontFamily: {
        headline: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-work-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
