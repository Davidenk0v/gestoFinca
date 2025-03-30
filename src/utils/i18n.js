export async function loadTranslations(lang) {
  try {
    const translations = await import(`../locales/${lang}.json`);
    return translations.default;
  } catch (error) {
    console.error(`Error cargando traducciones para ${lang}:`, error);
    return {};
  }
}
