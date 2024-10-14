import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/modules/**/*.{js,ts,jsx,tsx,mdx}", "./src/shared/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)",
      },
      colors: {
        background: {
          100: "#222222",
          200: "#252525",
          300: "#2e2e2e",
        },
        amber: {
          gold: "#cca967",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#9f9f9f",
        },
      },
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
        serif: ['"Playfair Display"', "serif"],
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "-1px",
        xl: "1240px",
        "2xl": "-1px",
      },
      borderRadius: {
        default: "20px",
        circle: "50%",
      },
      variants: {
        fill: ["hover", "focus"],
      },
    },
    fontSize: {
      xs: ["12px", "1.6"],
      sm: ["14px", "1.6"],
      base: ["16px", "1.6"],
      lg: ["18px", "1.6"],
      xl: ["20px", "1.6"],
      "2xl": ["24px", "1.6"],
      "3xl": ["30px", "1.6"],
      "4xl": ["36px", "1.6"],
      "5xl": ["48px", "1.6"],
    },
  },
  plugins: [],
};

export default config;
