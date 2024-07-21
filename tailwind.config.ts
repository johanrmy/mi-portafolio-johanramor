import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "pr-color": {
          DEFAULT: "#DCE1DE",
          50: "#F5F6F5",
          100: "#F2F4F3",
          200: "#ECEFEE",
          300: "#E7EAE8",
          400: "#E1E6E3",
          500: "#DCE1DE",
          600: "#BEC7C2",
          700: "#A0ADA5",
          800: "#819389",
          900: "#66776D",
          950: "#59685F",
        },
        "sc-color": {
          DEFAULT: "#BEE7B8",
          50: "#EDF8EB",
          100: "#E8F6E6",
          200: "#DDF3DA",
          300: "#D3EFCF",
          400: "#C8EBC3",
          500: "#BEE7B8",
          600: "#A6DE9D",
          700: "#8DD583",
          800: "#75CC68",
          900: "#5CC34D",
          950: "#50BE40",
        },
        "tr-color": {
          DEFAULT: "#1C404A",
          50: "#6DB4C8",
          100: "#5CABC1",
          200: "#4296AE",
          300: "#357A8D",
          400: "#295D6B",
          500: "#1C404A",
          600: "#18363F",
          700: "#142D34",
          800: "#0F2329",
          900: "#0B1A1E",
          950: "#091518",
        },
        "hp-color": {
          DEFAULT: "#F59F00",
          50: "#FFE2AE",
          100: "#FFDB99",
          200: "#FFCD70",
          300: "#FFBF48",
          400: "#FFB01F",
          500: "#F59F00",
          600: "#C78100",
          700: "#996300",
          800: "#6B4600",
          900: "#3D2800",
          950: "#261900",
        },
      },
    },
  },
  plugins: [],
};
export default config;
