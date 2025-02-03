import { useState } from "react";
import LanguageSelector from "./LenguageSelector";
import PhoneMenu from "./PhoneMenu";
const Header = () => {
  const [isOpenPhone, setIsOpenPhone] = useState<boolean>(false);

  const togglePhoneMenu = (): void => {
    console.log("boton menu");
    setIsOpenPhone((prev) => !prev);
  };
  return (
    <header className="bg-slate-200 sticky top-0 z-50 bg-opacity-90">
      <nav
        className="mx-auto flex max-w-full items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a
            href="/"
            className="-m-1.5 p-1.5 text-3xl font-bold text-brand-blueFinca"
          >
            Gesto<span className="text-brand-greenFinca">Finca</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            onClick={togglePhoneMenu}
            type="button"
            className="-m-2.5 z-20 inline-flex items-center justify-center rounded-md  p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="size-6 z-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 items-center">
          <a
            href="/"
            className="whitespace-nowrap text-sm/6 border-b-2 border-transparent font-semibold text-gray-900 focus:border-b-2 focus:border-b-brand-blueFinca"
          >
            Inicio
          </a>
          <a
            href="/administracion-fincas"
            className="whitespace-nowrap text-sm/6 border-b-2 border-transparent font-semibold text-gray-900 focus:border-b-2 focus:border-b-brand-blueFinca"
          >
            Administración de fincas
          </a>

          <a
            href="/alquileres-vacacionales"
            className="whitespace-nowrap text-sm/6 border-b-2 border-transparent font-semibold text-gray-900 focus:border-b-2 focus:border-b-brand-blueFinca"
          >
            Alquileres vacacionales
          </a>

          <a
            href="/nosotros"
            className="text-sm/6 border-b-2 border-transparent font-semibold text-gray-900 focus:border-b-2 focus:border-b-brand-blueFinca"
          >
            Nosotros
          </a>
          <a
            href="/presupuestos"
            className="text-sm/6 font-semibold text-gray-900 border-b-2 border-transparent focus:border-b-2 focus:border-b-brand-blueFinca"
          >
            Presupuestos
          </a>
          <a
            href="/contacto"
            className="text-sm/6 font-semibold text-gray-900 border-b-2 border-transparent focus:border-b-2 focus:border-b-brand-blueFinca"
          >
            Contacto
          </a>
          <LanguageSelector />
        </div>
      </nav>
      {isOpenPhone && <PhoneMenu togglePhoneMenu={togglePhoneMenu} />}
    </header>
  );
};

export default Header;
