/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#123234",
        cocoa: "#5B7476",
        rose: "#87D1E4",
        sage: "#00B8BA",
        sageDark: "#007F82",
        sageDeep: "#005F61",
        cream: "#F9FFFA",
        shell: "#E8F8FC",
        borderc: "#CBEFF2",
        lavender: "#00B8BA"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(23, 50, 70, 0.12)"
      }
    }
  },
  plugins: []
};
