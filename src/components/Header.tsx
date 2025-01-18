import { useState } from "react";
import LanguageSelector from "./LenguageSelector";
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
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=green&shade=600"
              alt="property admin"
            />
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
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a
            href="/administracion-fincas"
            className="whitespace-nowrap text-sm/6 border-b-2 border-transparent font-semibold text-gray-900 focus:border-b-2 focus:border-b-green-700"
          >
            Administración de fincas
          </a>

          <a
            href="/alquileres-vacacionales"
            className="whitespace-nowrap text-sm/6 border-b-2 border-transparent font-semibold text-gray-900 focus:border-b-2 focus:border-b-green-700"
          >
            Alquileres vacacionales
          </a>

          <a
            href="/nosotros"
            className="text-sm/6 border-b-2 border-transparent font-semibold text-gray-900 focus:border-b-2 focus:border-b-green-700"
          >
            Nosotros
          </a>
          <a
            href="/presupuestos"
            className="text-sm/6 font-semibold text-gray-900 border-b-2 border-transparent focus:border-b-2 focus:border-b-green-700"
          >
            Presupuestos
          </a>
          <a
            href="/contacto"
            className="text-sm/6 font-semibold text-gray-900 border-b-2 border-transparent focus:border-b-2 focus:border-b-green-700"
          >
            Contacto
          </a>
          <LanguageSelector />
        </div>
      </nav>
      <div className="lg:hidden" role="dialog" aria-modal="true">
        <div className="fixed inset-0 z-10"></div>
        <div
          className={`fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ${
            isOpenPhone ? "hidden" : ""
          }`}
        >
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              onClick={togglePhoneMenu}
              className="-m-2.5 z-10 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="size-6 bg-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <div className="-mx-3">
                  <button
                    type="button"
                    className="peer focus:outline-none flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    aria-controls="disclosure-1"
                    aria-expanded="false"
                  >
                    Servicios
                    <svg
                      className="size-5 flex-none"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                  <div
                    className="mt-2 space-y-2 hidden peer-focus:block"
                    id="disclosure-1"
                  >
                    <a
                      href="#"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Administración de fincas
                    </a>
                    <a
                      href="#"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Gestión de alquileres vacacionales
                    </a>
                  </div>
                </div>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Nosotros
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Presupuestos
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Contacto
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
