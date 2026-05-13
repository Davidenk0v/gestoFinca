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
          en: "en-GB",
          de: "de-DE",
        },
      },
      changefreq: "weekly",
      priority: 0.8,
      lastmod: new Date(),
      customPages: [
        "https://gestofinca.com/es/",
        "https://gestofinca.com/en/",
        "https://gestofinca.com/de/",
        "https://gestofinca.com/es/administracion-fincas/",
        "https://gestofinca.com/en/administracion-fincas/",
        "https://gestofinca.com/de/administracion-fincas/",
        "https://gestofinca.com/es/alquileres-vacacionales/",
        "https://gestofinca.com/en/alquileres-vacacionales/",
        "https://gestofinca.com/de/alquileres-vacacionales/",
        "https://gestofinca.com/es/tramites-vehiculos/",
        "https://gestofinca.com/en/tramites-vehiculos/",
        "https://gestofinca.com/de/tramites-vehiculos/",
        "https://gestofinca.com/es/contacto/",
        "https://gestofinca.com/en/contacto/",
        "https://gestofinca.com/de/contacto/",
        "https://gestofinca.com/es/nosotros/",
        "https://gestofinca.com/en/nosotros/",
        "https://gestofinca.com/de/nosotros/",
        "https://gestofinca.com/es/presupuestos/",
        "https://gestofinca.com/en/presupuestos/",
        "https://gestofinca.com/de/presupuestos/",
      ],
    }),
  ],
});
