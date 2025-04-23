"use client"

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
        secundary: "rgb(43, 69, 102)",
        darkBg: "rgb(93, 183, 222)",
        navColor:"rgb(251,80,18)"
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(90deg, rgba(93, 211, 158, 0.7) 5%, rgba(39, 158, 184, 0.7) 38%, rgba(93, 183, 222, 0.7) 70%)",
      },
    },
  },
  plugins: [],
};
export default config;
