// sitemap.xml.ts
export const prerender = true;

export async function GET() {
  const baseUrl = "https://www.gestofinca.com";

  const routes = [
    "", // Página principal
    "administracion-fincas",
    "tramites-vehiculos",
    "alquileres-vacacionales",
    "contacto",
    "nosotros",
    "presupuestos",
    "cookie-policy",
    "privacy-policy",
    "terms-conditions",
  ];

  const languages = ["es", "en", "de"];
  const today = new Date().toISOString().split("T")[0];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  sitemap += `        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

  for (const route of routes) {
    for (const lang of languages) {
      const path = route ? `${lang}/${route}` : `${lang}`;
      const fullUrl = `${baseUrl}/${path}`;

      sitemap += `  <url>\n`;
      sitemap += `    <loc>${fullUrl}</loc>\n`;
      sitemap += `    <lastmod>${today}</lastmod>\n`;

      // Alternate language links
      for (const altLang of languages) {
        const altPath = route ? `${altLang}/${route}` : `${altLang}`;
        sitemap += `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${baseUrl}/${altPath}" />\n`;
      }

      // x-default (fallback to Spanish)
      const defaultPath = route ? `es/${route}` : `es`;
      sitemap += `    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/${defaultPath}" />\n`;

      // Prioridad según tipo de página
      sitemap += `    <changefreq>weekly</changefreq>\n`;
      sitemap += `    <priority>${route === "" ? "1.0" : "0.8"}</priority>\n`;
      sitemap += `  </url>\n`;
    }
  }

  sitemap += `</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
