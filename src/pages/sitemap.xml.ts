// src/pages/sitemap.xml.ts
export const prerender = true;

export async function GET() {
  const baseUrl = 'https://www.gestofinca.com';

  // Rutas base
  const routes = [
    '',  // Para la página index
    'administracion-fincas',
    'alquileres-vacacionales',
    'contacto',
    'nosotros',
    'presupuestos',
    'cookie-policy',
    'privacy-policy',
    'terms-conditions',
  ];

  const languages = ['es', 'en', 'de'];
  const now = new Date().toISOString().split('T')[0];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">`;

  // Para cada ruta, generar las entradas para todos los idiomas
  for (const route of routes) {
    for (const lang of languages) {
      // Construir la URL con el formato /{lang}/{ruta}
      const path = route ? `${lang}/${route}` : `${lang}`;
      
      // Aseguramos que la URL es absoluta y válida
      const fullUrl = `${baseUrl}/${path}`;
      
      sitemap += `
  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${now}</lastmod>`;

      // Añadir enlaces alternativos para cada idioma
      for (const alternateLang of languages) {
        const alternatePath = route ? `${alternateLang}/${route}` : `${alternateLang}`;
        const alternateUrl = `${baseUrl}/${alternatePath}`;
        
        sitemap += `
    <xhtml:link 
      rel="alternate" 
      hreflang="${alternateLang}" 
      href="${alternateUrl}" />`;
      }

      // Añadir enlace para el idioma "x-default"
      const defaultPath = route ? `es/${route}` : `es`;
      sitemap += `
    <xhtml:link 
      rel="alternate" 
      hreflang="x-default" 
      href="${baseUrl}/${defaultPath}" />
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`;
    }
  }

  sitemap += `
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}