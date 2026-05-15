import { useEffect, useState, useCallback, memo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import fondoAzul from "@/assets/images/fondo-azul.webp";
import fondoCasa from "@/assets/images/fondo-casa.webp";
import logo from "@/assets/logos/imagen_logo_negativo.webp";
import logoAdmin from "@/assets/logos/admin-logo.webp";
import { NavigationButton } from "./carousel/NavigationButton";
import { Indicators } from "./carousel/Indicators";
import { CarouselContent } from "./carousel/CarouselContent";

const IMAGES = [
  { src: fondoCasa.src, alt: "Fondo Casa" },
  { src: fondoAzul.src, alt: "Fondo Azul" },
];
const SLIDE_DURATION = 10000;
const TRANSITION_DURATION = 0.7;

const Carousel = ({ data, lang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const { title, description, buttons, phrases = [] } = data || {};

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 640);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Preload next image for imperceptible transitions
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % IMAGES.length;
    const img = new Image();
    img.src = IMAGES[nextIndex].src;
  }, [currentIndex]);

  const goToSlide = useCallback(
    (index) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentIndex + 1) % IMAGES.length);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentIndex - 1 + IMAGES.length) % IMAGES.length);
  }, [currentIndex, goToSlide]);

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, SLIDE_DURATION);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [nextSlide]);

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
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const touchStartX = useRef(0);
  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e) => {
      const diff = touchStartX.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextSlide();
        else prevSlide();
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
      {/* Animated background slides with Ken Burns zoom */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-slate-900">
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.div
            key={`slide-${currentIndex}`}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${IMAGES[currentIndex].src})` }}
            initial={{ x: direction > 0 ? "100%" : "-100%", scale: 1.04 }}
            animate={{ x: 0, scale: 1.12 }}
            exit={{
              x: direction > 0 ? "-100%" : "100%",
              transition: { duration: TRANSITION_DURATION * 0.85, ease: [0.55, 0, 1, 0.45] },
            }}
            transition={{
              x: { duration: TRANSITION_DURATION, ease: [0.22, 1, 0.36, 1] },
              scale: { duration: SLIDE_DURATION / 1000, ease: "linear" },
            }}
            role="group"
            aria-label={`Slide ${currentIndex + 1} de ${IMAGES.length}: ${IMAGES[currentIndex].alt}`}
          />
        </AnimatePresence>

        {/* Layered gradient overlays for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20" />
      </div>

      {/* Navigation buttons — desktop only */}
      {!isMobile && (
        <>
          <NavigationButton direction="prev" onClick={prevSlide} ariaLabel="Diapositiva anterior" />
          <NavigationButton direction="next" onClick={nextSlide} ariaLabel="Siguiente diapositiva" />
        </>
      )}

      {/* Progress bar indicators */}
      <Indicators
        images={IMAGES}
        currentIndex={currentIndex}
        onChange={goToSlide}
        slideDuration={SLIDE_DURATION}
      />

      {/* Content overlay */}
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
