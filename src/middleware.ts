// src/middleware.ts
import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  const { url, headers } = context.request;
  const pathname = new URL(url).pathname;
  
  // Si estamos en la ruta raíz
  if (pathname === '/') {
    // Obtener el idioma preferido del navegador
    const acceptLanguage = headers.get('accept-language') || '';
    
    // Lista de idiomas soportados
    const supportedLanguages = ['es', 'en', 'de'];
    
    // Intentar encontrar el mejor idioma
    let preferredLanguage = 'es'; // Español como predeterminado
    
    // Buscar coincidencias en el encabezado accept-language
    for (const lang of supportedLanguages) {
      if (acceptLanguage.includes(lang)) {
        preferredLanguage = lang;
        break;
      }
    }
    
    // Redirigir al idioma preferido
    return context.redirect(`/${preferredLanguage}/`);
  }
  
  return next();
});