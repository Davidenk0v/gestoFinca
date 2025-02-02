import LanguageSelector from "./LenguageSelector";

const PhoneMenu = ({ togglePhoneMenu }) => {
  return (
    <div className="lg:hidden" role="dialog" aria-modal="true">
      <div className="fixed inset-0 z-10"></div>
      <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a
            href="/"
            onClick={togglePhoneMenu}
            className="-m-1.5 p-1.5 text-brand-blueFinca font-bold text-3xl"
          >
            Gesto
            <span className="text-brand-greenFinca">Finca</span>
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
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <a
                href="/administracion-fincas"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                onClick={togglePhoneMenu}
              >
                Administración de fincas
              </a>
              <a
                href="/alquileres-vacacionales"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                onClick={togglePhoneMenu}
              >
                Alquileres vacacionales
              </a>
              <a
                href="/nosotros"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                onClick={togglePhoneMenu}
              >
                Nosotros
              </a>
              <a
                href="presupuestos"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                onClick={togglePhoneMenu}
              >
                Presupuestos
              </a>
              <a
                href="/contacto"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                onClick={togglePhoneMenu}
              >
                Contacto
              </a>
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PhoneMenu;
