import { useState } from "react";
import LanguageSelector from "./LenguageSelector";
import PhoneMenu from "./PhoneMenu";

const Header = ({ lang = "es", data }) => {
  const [isOpenPhone, setIsOpenPhone] = useState(false);
  const { header } = data || {};

  const togglePhoneMenu = () => setIsOpenPhone((prev) => !prev);

  return (
    <header className="bg-slate-200 sticky top-0 z-50 bg-opacity-90">
      <nav
        className="mx-auto flex max-w-full items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a
            href={`/?lang=${lang}`}
            className="-m-1.5 p-1.5 text-3xl font-bold text-brand-blueFinca"
          >
            Gesto<span className="text-brand-greenFinca">Finca</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            onClick={togglePhoneMenu}
            type="button"
            className="-m-2.5 z-20 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="size-6 z-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-12 items-center">
          {header &&
            [
              { href: `/?lang=${lang}`, label: header.home },
              {
                href: `/administracion-fincas?lang=${lang}`,
                label: header.property_management,
              },
              {
                href: `/alquileres-vacacionales?lang=${lang}`,
                label: header.vacation_rentals,
              },
              { href: `/nosotros?lang=${lang}`, label: header.about_us },
              { href: `/presupuestos?lang=${lang}`, label: header.quotes },
              { href: `/contacto?lang=${lang}`, label: header.contact },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="whitespace-nowrap text-sm font-semibold text-gray-900 border-b-2 border-transparent focus:border-brand-blueFinca"
              >
                {label}
              </a>
            ))}
          <LanguageSelector />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpenPhone && (
        <PhoneMenu
          togglePhoneMenu={togglePhoneMenu}
          lang={lang}
          data={header}
        />
      )}
    </header>
  );
};

export default Header;
