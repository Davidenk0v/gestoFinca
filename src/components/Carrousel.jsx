import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "@/assets/images/fondo-azul.webp";
import edf2 from "@/assets/images/house.webp";
import logo from "@/assets/logos/imagen_logo_negativo.png";

const images = [edf2, image1];

const Carousel = ({ data, lang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const { title, description, text, buttons } = data || {};

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[40vh] md:h-[60vh] lg:h-[70vh] overflow-hidden flex items-center justify-center">
      {/* Contenedor de imágenes animadas */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-slate-100">
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentIndex].src})` }}
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </motion.div>
        </AnimatePresence>
        <motion.div
          key={`new-${currentIndex}`}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${
              images[(currentIndex + 1) % images.length].src
            })`,
          }}
          initial={{ x: "100%" }} // Empieza fuera de la pantalla (derecha)
          animate={{ x: 0 }} // Se mueve hacia la posición correcta
          exit={{ x: 0 }} // Se mantiene ahí
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

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
        {/* Descripción */}
        <p className="mt-4 text-base font-bold sm:text-lg md:text-xl hidden sm:block text-white">
          {" "}
          {/* Cuando la pantalla sea menor a sm, no se mostrará el texto */}{" "}
          {description}
        </p>
        {/* Texto adicional */}
        <p className="mt-2 text-base sm:text-lg md:text-xl text-white hidden sm:block">
          {text}
        </p>

        {/* Botones */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href={`/contacto?lang=${lang}`}
            className="border-2 border-brand-greenFinca rounded-md bg-brand-greenFinca px-6 py-2 text-sm font-semibold text-black shadow-sm hover:bg-transparent hover:text-brand-greenFinca sm:w-auto"
          >
            {buttons?.contact_us}
          </a>
          <a
            href={`/nosotros?lang=${lang}`}
            className="border-2 border-brand-greenFinca rounded-md px-6 py-2 text-sm font-semibold text-brand-greenFinca shadow-sm hover:text-black hover:bg-brand-greenFinca sm:w-auto"
          >
            {buttons?.about_us}
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
