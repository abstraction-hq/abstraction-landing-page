import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  variants: {
    extend: {
      textColor: ['dark', 'dark:hover', 'dark:active'],
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "abstraction-gradient": 'linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)',
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
