import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const { url, headers } = context.request;
  const pathname = new URL(url).pathname;
  console.log(`Request URL: ${url}`);
  console.log(`Pathname: ${pathname}`);

  if (pathname === '/') {
    const acceptLanguage = headers.get('accept-language') || '';
    console.log(`Accept-Language: ${acceptLanguage}`);

    const supportedLanguages = ['es', 'en', 'de'];
    let preferredLanguage = 'es';

    for (const lang of supportedLanguages) {
      if (acceptLanguage.includes(lang)) {
        preferredLanguage = lang;
        break;
      }
    }

    console.log(`Redirecting to: /${preferredLanguage}/`);
    return context.redirect(`/${preferredLanguage}/`);
  }

  return next();
});