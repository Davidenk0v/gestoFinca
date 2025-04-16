import { useState, useEffect } from "react";
import LanguageSelector from "./LenguageSelector";
import PhoneMenu from "./PhoneMenu";

const Header = ({ lang = "es", data }) => {
  const [isOpenPhone, setIsOpenPhone] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { header } = data || {};

  const togglePhoneMenu = () => setIsOpenPhone((prev) => !prev);

  // Detectar scroll para cambiar estilos del header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Definir rutas de navegación
  const navigationLinks = [
    { href: `/${lang}/`, label: header?.home || "Inicio" },
    {
      href: `/${lang}/administracion-fincas`,
      label: header?.property_management || "Administración de Fincas",
    },
    {
      href: `/${lang}/alquileres-vacacionales`,
      label: header?.vacation_rentals || "Alquileres Vacacionales",
    },
    { href: `/${lang}/nosotros`, label: header?.about_us || "Nosotros" },
    {
      href: `/${lang}/presupuestos`,
      label: header?.quotes || "Presupuestos",
    },
    { href: `/${lang}/contacto`, label: header?.contact || "Contacto" },
  ];

  // Manejar bloqueo de scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isOpenPhone) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpenPhone]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-200 bg-opacity-95 shadow-md py-2"
          : "bg-slate-200 bg-opacity-90 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center justify-between"
          aria-label="Navegación principal"
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href={`/${lang}/`}
              className="flex items-center text-3xl font-bold text-brand-blueFinca hover:opacity-80 transition-opacity"
            >
              Gesto<span className="text-brand-greenFinca">Finca</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigationLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="whitespace-nowrap text-sm font-semibold text-gray-900 hover:text-brand-blueFinca relative group py-2"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-greenFinca transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button - Ahora siempre visible */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={togglePhoneMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-blueFinca hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-greenFinca transition-colors z-50"
              aria-expanded={isOpenPhone}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">
                {isOpenPhone ? "Cerrar menú principal" : "Abrir menú principal"}
              </span>
              {isOpenPhone ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu con transición */}
      <div
        className={`lg:hidden fixed inset-0 bg-slate-200 transition-transform duration-300 ease-in-out z-40 transform ${
          isOpenPhone ? "translate-x-0" : "translate-x-full"
        }`}
        id="mobile-menu"
      >
        <div className="pt-20 pb-3 px-4 sm:px-6">
          <div className="flex flex-col space-y-4">
            {navigationLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-base font-medium text-gray-900 hover:text-brand-blueFinca hover:bg-gray-100 px-3 py-2 rounded-md transition-colors"
                onClick={togglePhoneMenu}
              >
                {label}
              </a>
            ))}
            <div className="pt-4">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
