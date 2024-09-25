// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/modules/**/*.{js,ts,jsx,tsx,mdx}", "./src/shared/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: {
          100: "#222222",
          200: "#252525",
          300: "#2e2e2e",
        },
        amber: {
          gold: "#cca967",
        },
        white: "#FFFFFF",
      },
      fontFamily: {
        openSans: "OpenSans",
        playfairDisplay: "PlayfairDisplay",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "-1px",
        xl: "1440px",
        "2xl": "-1px",
      },
      borderRadius: {
        default: "20px",
        circle: "50%",
      },
      // boxShadow: {
      //   default: '2px 2px 12px 0px rgba(186, 186, 186, 0.12)',
      // },
      // keyframes: {
      //   jump: {
      //     '0%': { transform: 'translateY(0)' },
      //     '8%': { transform: 'translateY(1px)' },
      //     '19%': { transform: 'translateY(1.5px)' },
      //     '50%': { transform: 'translateY(1.7px)' },
      //     '100%': { transform: 'translateY(1.8px)' },
      //   },
      // },
      // animation: {
      //   jump: 'jump 2s cubic-bezier(0.42, 0, 0.58, 1) 1',
      //   rotateAndTranslate:
      //     'rotateAndTranslate 2s cubic-bezier(0.42, 0, 0.58, 1) forwards',
      // },
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
