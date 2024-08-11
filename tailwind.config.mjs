import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(0px)" },
          "50%": {
            transform: "translateY(-15dvh)",
            borderRadius: "50%",
            height: "200px",
            width: "200px",
          },
          "100%": {
            transform: "translateY(-45dvh)",
            borderRadius: "50%",
            width: "10px",
            height: "10px",
          },
        },
      },
      animation: {
        slideUp: "slideUp 1.5s ease-in-out",
      },
      colors: {
        "primary": `rgba(var(--primary-color), <alpha-value>)`,
        "primary-background": `rgba(var(--primary-background-color), <alpha-value>)`,
        "primary-background-dark": `rgba(var(--primary-background-dark), <alpha-value>)`,
        "surface-color": `rgba(var(--surface-color), <alpha-value>)`,
        "secondary": `rgba(var(--secondary-color), <alpha-value>)`,
        "accent": "var(--accent-color)",
        "background": "var(--background-color)",
      },
    },
  },
  plugins: [require("daisyui")],
};
