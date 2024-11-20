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
        "first-color" : "#FFE5CB",
        "second-color": "#B5A38F",
        "third-color" : "#875424",
        "fourth-color" : "#58362F"
      },
      backgroundImage: {
        'gradient-monochrome': 'linear-gradient(to right, #875424, #6e4a1f)',
      },
    },
  },
  plugins: [],
};
export default config;
