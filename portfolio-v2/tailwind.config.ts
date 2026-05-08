import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#ffffff",
        "accent-green": "#00ffa3",
        "accent-orange": "#ff5c00",
        "accent-cyan": "#00e0ff",
        surface: "#111111",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        space: ["var(--font-space)", "mono"],
      },
    },
  },
  plugins: [],
};
export default config;
