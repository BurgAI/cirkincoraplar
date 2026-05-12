import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#18201f",
        cotton: "#f7f5f0",
        thread: "#d44637",
        eucalyptus: "#2f6f5e",
        flax: "#d8b36a",
        mist: "#eef2ef",
      },
      boxShadow: {
        soft: "0 18px 55px rgba(24, 32, 31, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
