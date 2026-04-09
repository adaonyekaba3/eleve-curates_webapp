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
        ivory: "#f8f2e8",
        champagne: "#e8dcc9",
        beige: "#efe5d8",
        ink: "#181614",
        muted: "#6b6258",
        gold: "#b69c78",
      },
      boxShadow: {
        soft: "0 10px 35px rgba(37, 30, 24, 0.12)",
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(180deg, rgba(25,18,13,0.28) 0%, rgba(25,18,13,0.56) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
