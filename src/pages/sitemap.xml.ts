// src/pages/sitemap.xml.ts
export const prerender = true;

export async function GET() {
  const baseUrl = 'https://www.gestofinca.com';

  const basePaths = [
    '/',
    '/administracion-fincas',
    '/alquileres-vacacionales',
    '/contacto',
    '/nosotros',
    '/presupuestos',
  ];

  const languages = ['es', 'en', 'de'];
  const now = new Date().toISOString();

  // Generamos un bloque <url> por cada ruta y sus versiones multilingües
  const urls = basePaths.map((path) => {
    const alternates = languages.map((lang) => {
      const href = path === '/' ? `${baseUrl}/?lang=${lang}` : `${baseUrl}${path}?lang=${lang}`;
      return `<xhtml:link rel="alternate" hreflang="${lang}" href="${href}" />`;
    }).concat(
      `<xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${path}" />`
    ).join('\n      ');

    return languages.map((lang) => {
      const loc = path === '/' ? `${baseUrl}/?lang=${lang}` : `${baseUrl}${path}?lang=${lang}`;
      return `
    <url>
      <loc>${loc}</loc>
      <lastmod>${now}</lastmod>
      ${alternates}
    </url>`;
    }).join('');
  }).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${urls}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
