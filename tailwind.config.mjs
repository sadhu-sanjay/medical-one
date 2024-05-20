/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(0px)"},
          "50%": { borderRadius: "20%", height: "200px" },
          "100%": {
            transform: "translateY(-50dvh)",
            borderRadius: "50%",
            width: "100px",
            height: "100px",
          },
        },
      },
      animation: {
        slideUp: "slideUp 1.5s ease-in-out",
      },
    },
  },
  plugins: [require("daisyui")],
};
