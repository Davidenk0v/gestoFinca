/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          greenFinca: "#7EDA55",
          blueFinca: "#25C0D8",
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
