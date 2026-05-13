// sitemap.xml.ts
export const prerender = true;

type RouteConfig = { path: string; priority: string; changefreq: string };

export async function GET() {
  const baseUrl = "https://gestofinca.com";

  const routes: RouteConfig[] = [
    { path: "", priority: "1.0", changefreq: "weekly" },
    { path: "administracion-fincas", priority: "0.9", changefreq: "weekly" },
    { path: "alquileres-vacacionales", priority: "0.9", changefreq: "weekly" },
    { path: "tramites-vehiculos", priority: "0.9", changefreq: "weekly" },
    { path: "nosotros", priority: "0.7", changefreq: "monthly" },
    { path: "presupuestos", priority: "0.7", changefreq: "monthly" },
    { path: "contacto", priority: "0.6", changefreq: "monthly" },
    { path: "cookie-policy", priority: "0.2", changefreq: "yearly" },
    { path: "privacy-policy", priority: "0.2", changefreq: "yearly" },
    { path: "terms-conditions", priority: "0.2", changefreq: "yearly" },
  ];

  const languages = ["es", "en", "de"];
  const today = new Date().toISOString().split("T")[0];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  sitemap += `        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

  for (const route of routes) {
    for (const lang of languages) {
      const path = route.path ? `${lang}/${route.path}` : `${lang}`;
      const fullUrl = `${baseUrl}/${path}`;

      sitemap += `  <url>\n`;
      sitemap += `    <loc>${fullUrl}</loc>\n`;
      sitemap += `    <lastmod>${today}</lastmod>\n`;

      for (const altLang of languages) {
        const altPath = route.path ? `${altLang}/${route.path}` : `${altLang}`;
        sitemap += `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${baseUrl}/${altPath}" />\n`;
      }

      const defaultPath = route.path ? `es/${route.path}` : `es`;
      sitemap += `    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/${defaultPath}" />\n`;

      sitemap += `    <changefreq>${route.changefreq}</changefreq>\n`;
      sitemap += `    <priority>${route.priority}</priority>\n`;
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
