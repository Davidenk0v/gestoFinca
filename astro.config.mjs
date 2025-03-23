// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import dotenv from "dotenv";
import vercelAdapter from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

dotenv.config();

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
      },
    },
  },
  output: "server",
  adapter: vercelAdapter(),
  site: "https://gestofinca.com",
  integrations: [
    tailwind(),
    react(),
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-ES",
          en: "en-GB", // Corregido de "em" a "en" y valor de "en-EN" a "en-GB"
          de: "de-DE", // Corregido de "en" a "de" para alemán
        },
      },
      changefreq: "weekly",
      priority: 0.8,
      lastmod: new Date(),
      // Estas configuraciones son opcionales pero recomendadas
      customPages: [
        // Añadir páginas dinámicas que no son detectadas automáticamente
        "/administracion-fincas?lang=es",
        "/administracion-fincas?lang=en",
        "/administracion-fincas?lang=de",
        "/alquileres-vacacionales?lang=es",
        "/alquileres-vacacionales?lang=en",
        "/alquileres-vacacionales?lang=de",
        "/contacto?lang=es",
        "/contacto?lang=en",
        "/contacto?lang=de",
        "/nosotros?lang=es",
        "/nosotros?lang=en",
        "/nosotros?lang=de",
        "/presupuestos?lang=es",
        "/presupuestos?lang=en",
        "/presupuestos?lang=de",
      ],
    }),
  ],
});
