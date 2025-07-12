import { useEffect, useState, useCallback, memo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Importación optimizada de imágenes
import fondoAzul from "@/assets/images/fondo-azul.webp";
import fondoCasa from "@/assets/images/fondo-casa.webp";
import logo from "@/assets/logos/imagen_logo_negativo.webp";
import logoAdmin from "@/assets/logos/admin-logo.webp";
import { NavigationButton } from "./carousel/NavigationButton";
import { Indicators } from "./carousel/Indicators";
import { CarouselContent } from "./carousel/CarouselContent";

// Definir imágenes y constantes
const IMAGES = [
  { src: fondoCasa.src, alt: "Fondo Casa" },
  { src: fondoAzul.src, alt: "Fondo Azul" },
];
const SLIDE_DURATION = 10000; // 10 segundos entre diapositivas
const TRANSITION_DURATION = 0.6;

const Carousel = ({ data, lang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const { title, description, buttons, phrases = [] } = data || {};

  // Detectar dispositivo móvil con vanilla JS en lugar de hook personalizado
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Comprobar en el montaje
    checkIsMobile();

    // Comprobar en cambios de tamaño
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  // Optimización del control del carrusel
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

  // Configuración del intervalo automático optimizado
  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, SLIDE_DURATION);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [nextSlide]);

  // Pausar el carrusel cuando la página está en segundo plano
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      } else if (!intervalRef.current) {
        intervalRef.current = setInterval(nextSlide, SLIDE_DURATION);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [nextSlide]);

  // Manejador de eventos de teclado para accesibilidad
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextSlide, prevSlide]);

  // Implementación de gestos táctiles para dispositivos móviles
  const touchStartX = useRef(0);
  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX.current - touchEndX;

      if (Math.abs(diff) > 50) {
        // Umbral mínimo para considerar un deslizamiento
        if (diff > 0) {
          nextSlide(); // Deslizar a la izquierda -> Siguiente slide
        } else {
          prevSlide(); // Deslizar a la derecha -> Slide anterior
        }
      }
    },
    [nextSlide, prevSlide]
  );

  return (
    <section
      className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[70vh] overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Imágenes promocionales de GestoFinca"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
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
            role="group"
            aria-label={`Slide ${currentIndex + 1} de ${IMAGES.length}: ${
              IMAGES[currentIndex].alt
            }`}
          />
        </AnimatePresence>

        {/* Overlay oscuro con mejor contraste para legibilidad */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Controles de navegación solo visibles en pantallas más grandes, centrados verticalmente */}
      {!isMobile && (
        <>
          <NavigationButton
            direction="prev"
            onClick={prevSlide}
            ariaLabel="Diapositiva anterior"
          />
          <NavigationButton
            direction="next"
            onClick={nextSlide}
            ariaLabel="Siguiente diapositiva"
          />
        </>
      )}

      {/* Indicadores de posición optimizados */}
      <Indicators
        images={IMAGES}
        currentIndex={currentIndex}
        onChange={goToSlide}
      />

      {/* Contenido */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <CarouselContent
          title={title}
          phrase={phrases[0]}
          description={description}
          buttons={buttons}
          lang={lang}
          logoSrc={logo.src}
          logoSrc2={logoAdmin.src}
        />
      </div>
    </section>
  );
};

export default memo(Carousel);
