import { useState, useEffect, useRef } from "react";
import LanguageSelector from "./LenguageSelector";
import PhoneMenu from "./PhoneMenu";

const Header = ({ lang = "es", data }) => {
  const [isOpenPhone, setIsOpenPhone] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { header } = data || {};

  const togglePhoneMenu = () => setIsOpenPhone((prev) => !prev);

  // Cerrar el dropdown si se hace clic fuera de él
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  // Definir rutas de navegación principal
  const navigationLinks = [
    { href: `/${lang}/`, label: header?.home || "Inicio" },
    {
      type: "dropdown",
      label: header?.services || "Servicios",
      dropdownItems: [
        {
          href: `/${lang}/administracion-fincas`,
          label: header?.property_management || "Administración de Fincas",
        },
        {
          href: `/${lang}/alquileres-vacacionales`,
          label: header?.vacation_rentals || "Alquileres Vacacionales",
        },
        {
          href: `/${lang}/tramites-vehiculos`,
          label: header?.vehicle_procedures || "Trámites de vehículos",
        },
      ]
    },
    { href: `/${lang}/nosotros`, label: header?.about_us || "Nosotros" },
    {
      href: `/${lang}/presupuestos`,
      label: header?.quotes || "Presupuestos",
    },
    { href: `/${lang}/contacto`, label: header?.contact || "Contacto" },
  ];

  // Definir servicios para el menú móvil
  const servicesLinks = [
    {
      href: `/${lang}/administracion-fincas`,
      label: header?.property_management || "Administración de Fincas",
    },
    {
      href: `/${lang}/alquileres-vacacionales`,
      label: header?.vacation_rentals || "Alquileres Vacacionales",
    },
    {
      href: `/${lang}/tramites-vehiculos`,
      label: "Trámites de vehículos",
    },
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
            {navigationLinks.map((item, index) => 
              item.type === "dropdown" ? (
                <div 
                  key={`dropdown-${index}`} 
                  ref={dropdownRef}
                  className="relative group"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <button 
                    className="whitespace-nowrap text-sm font-semibold text-gray-900 hover:text-brand-blueFinca relative group py-2 flex items-center"
                    aria-expanded={servicesDropdownOpen}
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  >
                    {item.label}
                    <svg 
                      className={`ml-1 h-4 w-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-greenFinca transition-all duration-300 group-hover:w-full"></span>
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div 
                    className={`absolute left-0 top-full mt-1 w-64 rounded-md shadow-lg bg-slate-200 ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                      servicesDropdownOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
                    }`}
                  >
                    <div className="py-1">
                      {item.dropdownItems.map((subItem) => (
                        <a
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 font-bold hover:bg-gray-100 hover:text-brand-blueFinca transition-colors"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap text-sm font-semibold text-gray-900 hover:text-brand-blueFinca relative group py-2"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-greenFinca transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            )}
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
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
            {/* Elementos fijos del menú móvil */}
            <a
              href={`/${lang}/`}
              className="text-base font-medium text-gray-900 hover:text-brand-blueFinca hover:bg-gray-100 px-3 py-2 rounded-md transition-colors"
              onClick={togglePhoneMenu}
            >
              {header?.home || "Inicio"}
            </a>
            
            {/* Servicios con submenú */}
            <div className="flex flex-col">
              <div className="text-base font-medium text-gray-900 px-3 py-2">
                {header?.services || "Servicios"}
              </div>
              <div className="pl-6 flex flex-col space-y-2">
                {servicesLinks.map((service) => (
                  <a
                    key={service.href}
                    href={service.href}
                    className="text-base font-bold text-gray-900 hover:text-brand-blueFinca hover:bg-gray-100 px-3 py-2 rounded-md transition-colors"
                    onClick={togglePhoneMenu}
                  >
                    {service.label}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Resto de enlaces fijos */}
            <a
              href={`/${lang}/nosotros`}
              className="text-base font-medium text-gray-900 hover:text-brand-blueFinca hover:bg-gray-100 px-3 py-2 rounded-md transition-colors"
              onClick={togglePhoneMenu}
            >
              {header?.about_us || "Nosotros"}
            </a>
            <a
              href={`/${lang}/presupuestos`}
              className="text-base font-medium text-gray-900 hover:text-brand-blueFinca hover:bg-gray-100 px-3 py-2 rounded-md transition-colors"
              onClick={togglePhoneMenu}
            >
              {header?.quotes || "Presupuestos"}
            </a>
            <a
              href={`/${lang}/contacto`}
              className="text-base font-medium text-gray-900 hover:text-brand-blueFinca hover:bg-gray-100 px-3 py-2 rounded-md transition-colors"
              onClick={togglePhoneMenu}
            >
              {header?.contact || "Contacto"}
            </a>
            
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