const SUPPORTED_LANGS = ['es', 'en', 'de'];

export async function loadTranslations(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) {
    console.warn(`Idioma no soportado: ${lang}`);
    return {};
  }

  try {
    const translations = await import(`../locales/${lang}.json`);
    return translations.default;
  } catch (error) {
    console.error(`Error cargando traducciones para ${lang}:`, error);
    return {};
  }
}
