import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
      "neutral-black": "var(--neutral-black)",
      "neutral-white": "var(--neutral-white)",
      "primary-green": "var(--primary-green)",
      "primary-black": "var(--primary-black)",
      "primary-white": "var(--primary-white)",
      "secondary-green": "var(--secondary-green)",
      "secondary-gray": "var(--secondary-gray)",
      "muted-green": "var(--muted-green)",
      "hover-primary-green": "var(--hover-primary-green)",
      "hover-primary-white": "var(--hover-primary-white)",
    },
  },
  plugins: [],
};
export default config;
