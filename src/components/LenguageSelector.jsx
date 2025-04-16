import { useEffect, useState, useCallback } from "react";

const LANGUAGES = [
  { code: "es", flag: "🇪🇸", name: "Español" },
  { code: "en", flag: "🇬🇧", name: "English" },
  { code: "de", flag: "🇩🇪", name: "Deutsch" },
];

const DEFAULT_LANGUAGE = "es";

const LanguageSelector = () => {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
  const [isOpen, setIsOpen] = useState(false);

  // Detectar idioma desde el pathname
  useEffect(() => {
    if (typeof window !== "undefined") {
      const pathParts = window.location.pathname.split("/").filter(Boolean);
      const urlLang = pathParts[0];

      if (LANGUAGES.some((lang) => lang.code === urlLang)) {
        setLanguage(urlLang);
        localStorage.setItem("lang", urlLang);
      } else {
        setLanguage(DEFAULT_LANGUAGE);
        localStorage.setItem("lang", DEFAULT_LANGUAGE);
      }
    }
  }, []);

  const changeLanguage = useCallback(
    (langCode) => {
      if (langCode === language) {
        setIsOpen(false);
        return;
      }

      if (!LANGUAGES.some((lang) => lang.code === langCode)) {
        langCode = DEFAULT_LANGUAGE;
      }

      setLanguage(langCode);

      if (typeof window !== "undefined") {
        try {
          const currentPath = window.location.pathname;
          const pathParts = currentPath.split("/").filter(Boolean);
          pathParts[0] = langCode; // sustituye el primer segmento con el nuevo idioma
          const newPath = "/" + pathParts.join("/");
          window.location.pathname = newPath;
        } catch (error) {
          console.error("Error al cambiar el idioma:", error);
        }
      }

      setIsOpen(false);
    },
    [language]
  );

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

  const currentLanguage =
    LANGUAGES.find((lang) => lang.code === language) ||
    LANGUAGES.find((lang) => lang.code === DEFAULT_LANGUAGE);

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
          className="absolute left-0 sm:left-auto sm:right-0 mt-1 w-32 bg-white shadow-lg rounded-md py-1 z-50"
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
