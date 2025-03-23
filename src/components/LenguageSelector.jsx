import { useEffect, useState, useCallback } from "react";

const LANGUAGES = [
  { code: "es", flag: "🇪🇸", name: "Español" },
  { code: "en", flag: "🇬🇧", name: "English" },
  { code: "de", flag: "🇩🇪", name: "Deutsch" },
];

const LanguageSelector = () => {
  const [language, setLanguage] = useState("es");
  const [isOpen, setIsOpen] = useState(false);

  // Cargar idioma del localStorage al iniciar
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Intentar obtener el idioma de la URL primero
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = urlParams.get("lang");

      // Si no está en la URL, intentar obtenerlo del localStorage
      const storedLang = localStorage.getItem("lang");

      // Usar el idioma que se encuentre, o el predeterminado "es"
      const initialLang = urlLang || storedLang || "es";

      // Solo establecer si es un idioma válido
      if (LANGUAGES.some((lang) => lang.code === initialLang)) {
        setLanguage(initialLang);
      }
    }
  }, []);

  // Manejar cambio de idioma
  const changeLanguage = useCallback(
    (langCode) => {
      if (langCode === language) {
        setIsOpen(false);
        return;
      }

      setLanguage(langCode);

      if (typeof window !== "undefined") {
        // Guardar en localStorage
        localStorage.setItem("lang", langCode);

        // Actualizar URL
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set("lang", langCode);
        window.location.href = currentUrl.toString();
      }

      setIsOpen(false);
    },
    [language]
  );

  // Cerrar el menú al hacer clic fuera
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e) => {
      if (!e.target.closest(".language-selector")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  // Obtener el idioma actual
  const currentLanguage =
    LANGUAGES.find((lang) => lang.code === language) || LANGUAGES[0];

  return (
    <div className="relative language-selector">
      <button
        type="button"
        className="flex items-center space-x-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-3 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-brand-greenFinca"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="text-lg" aria-hidden="true">
          {currentLanguage.flag}
        </span>
        <span className="sr-only">
          Seleccionar idioma: {currentLanguage.name}
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <ul
          className="absolute right-0 mt-1 w-auto bg-white shadow-lg rounded-md py-1 z-50"
          role="listbox"
          aria-label="Seleccionar idioma"
        >
          {LANGUAGES.map((lang) => (
            <li
              key={lang.code}
              role="option"
              aria-selected={language === lang.code}
            >
              <button
                className={`flex items-center w-full text-left px-4 py-2 hover:bg-gray-100 ${
                  language === lang.code ? "bg-gray-50 font-medium" : ""
                }`}
                onClick={() => changeLanguage(lang.code)}
              >
                <span className="mr-2 text-lg">{lang.flag}</span>
                <span className="text-sm">{lang.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
