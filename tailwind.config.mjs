/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(100px)"},
        },
      },
      animation: {
        slideUp: "slideUp 1s ease-out",
      },
    },
  },
  plugins: [require("daisyui")],
};
