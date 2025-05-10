import { memo } from "react";

export const CarouselContent = memo(
  ({ title, phrase, description, buttons, lang, logoSrc }) => (
    <div className="relative z-10 max-w-4xl w-full text-center px-4 sm:px-6 lg:px-16">
      {/* Título optimizado con mejor estructura semántica */}
      <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
        {title !== "GestoFinca" ? (
          <span className="text-brand-blueFinca">{title}</span>
        ) : (
          <>
            <span className="text-brand-blueFinca">Gesto</span>
            <span className="text-brand-greenFinca">Finca.</span>
          </>
        )}
      </h1>

      {/* Frase principal */}
      <p className="mt-3 md:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-white">
        {phrase}
      </p>

      {/* Descripción con mejor visibilidad en móviles */}
      {description && (
        <p className="hidden sm:block mt-3 md:mt-4 text-sm sm:text-base md:text-lg font-medium text-white">
          {description}
        </p>
      )}

      {/* Botones con mejor accesibilidad */}
      <div className="mt-4 md:mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
        <a
          href={`/${lang}/contacto`}
          className="border-2 border-brand-greenFinca rounded-md bg-brand-greenFinca px-4 sm:px-6 py-2 text-sm font-semibold text-black shadow-sm hover:bg-transparent hover:text-brand-greenFinca transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-greenFinca"
          aria-label="Contactar con nosotros"
        >
          {buttons?.contact_us || "Contacto"}
        </a>
        <a
          href={`/${lang}/nosotros`}
          className="border-2 border-brand-greenFinca rounded-md px-4 sm:px-6 py-2 text-sm font-semibold text-brand-greenFinca shadow-sm hover:text-black hover:bg-brand-greenFinca transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-greenFinca"
          aria-label="Conocer más sobre nosotros"
        >
          {buttons?.about_us || "Sobre Nosotros"}
        </a>
      </div>

      {/* Logo optimizado */}
      <div className="mt-4 md:mt-6 flex justify-center">
        <a href="https://caftenerife.org/">
        <img
          src={logoSrc}
          alt="Colegio de Administradores de Fincas de Santa Cruz de Tenerife"
          className="w-28 h-auto sm:w-32 md:w-40 lg:w-48"
          loading="eager"
          width={192} // Ancho real de la imagen para evitar CLS
          height={48} // Alto real de la imagen para evitar CLS
          />
        </a>
      </div>
    </div>
  )
);
