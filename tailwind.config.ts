import { Config } from "tailwindcss";

const config: Config = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
