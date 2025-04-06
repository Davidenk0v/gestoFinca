import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import fondoAzul from "@/assets/images/fondo-azul.webp";
import fondoCasa from "@/assets/images/fondo-casa.webp";
import logo from "@/assets/logos/imagen_logo_negativo.webp";

// Definir imágenes fuera del componente para evitar recreaciones
const IMAGES = [fondoCasa, fondoAzul];
const SLIDE_DURATION = 10000; // 10 segundos entre diapositivas
const TRANSITION_DURATION = 0.6;

const Carousel = ({ data, lang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const { title, description, buttons, phrases } = data || {};

  // Manejar la navegación del carrusel
  const goToSlide = useCallback(
    (index) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  const nextSlide = useCallback(() => {
    const newIndex = (currentIndex + 1) % IMAGES.length;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    const newIndex = (currentIndex - 1 + IMAGES.length) % IMAGES.length;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  // Configuración del intervalo automático
  useEffect(() => {
    const interval = setInterval(nextSlide, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative h-[40vh] md:h-[60vh] lg:h-[70vh] overflow-hidden flex items-center justify-center">
      {/* Contenedor de imágenes animadas */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-slate-100">
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.div
            key={`slide-${currentIndex}`}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${IMAGES[currentIndex].src})` }}
            initial={{ x: direction > 0 ? "100%" : "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: direction > 0 ? "-100%" : "100%" }}
            transition={{ duration: TRANSITION_DURATION, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Controles de navegación */}
      <button
        onClick={prevSlide}
        className="absolute left-4 z-20 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Diapositiva anterior"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 z-20 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Siguiente diapositiva"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Indicadores de posición */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
        {IMAGES.map((_, i) => (
          <button
            key={`dot-${i}`}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === currentIndex
                ? "bg-brand-greenFinca"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Ir a diapositiva ${i + 1}`}
          />
        ))}
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl text-center px-6 sm:px-10 lg:px-16">
        {/* Título */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-blueFinca">
          {title !== "GestoFinca" ? (
            <strong className="text-brand-blueFinca">{title}</strong>
          ) : (
            <>
              Gesto<strong className="text-brand-greenFinca">Finca.</strong>
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg md:text-xl sm:block text-white">
          {phrases[0]}
        </p>

        {/* Descripción */}
        {description && (
          <p className="mt-4 text-base font-bold sm:text-lg md:text-xl hidden sm:block text-white">
            {description}
          </p>
        )}

        {/* Botones */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href={`/contacto?lang=${lang}`}
            className="border-2 border-brand-greenFinca rounded-md bg-brand-greenFinca px-6 py-2 text-sm font-semibold text-black shadow-sm hover:bg-transparent hover:text-brand-greenFinca transition-colors duration-300 sm:w-auto"
          >
            {buttons?.contact_us || "Contacto"}
          </a>
          <a
            href={`/nosotros?lang=${lang}`}
            className="border-2 border-brand-greenFinca rounded-md px-6 py-2 text-sm font-semibold text-brand-greenFinca shadow-sm hover:text-black hover:bg-brand-greenFinca transition-colors duration-300 sm:w-auto"
          >
            {buttons?.about_us || "Sobre Nosotros"}
          </a>
        </div>

        {/* Logo */}
        <div className="mt-6 flex justify-center">
          <img
            src={logo.src}
            alt="Logo"
            className="w-36 h-auto sm:w-40 md:w-50 lg:w-60"
          />
        </div>
      </div>
    </section>
  );
};

export default Carousel;
