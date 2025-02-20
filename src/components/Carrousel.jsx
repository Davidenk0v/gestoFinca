import { useEffect, useState } from "react";
import image1 from "@/assets/images/fondo-azul.webp";
import edf1 from "@/assets/images/building.webp";
import edf2 from "@/assets/images/house.webp";
import logo from "@/assets/logos/imagen_logo_negativo.png";

const images = [edf2, image1];

const Carousel = ({ data, lang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState("slideIn");

  const { title, description, text, buttons } = data || {};

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation("slideOut");
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setAnimation("slideIn");
      }, 500);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[40vh] md:h-[60vh] lg:h-[70vh] overflow-hidden flex items-center justify-center">
      {/* Imagen de fondo responsiva */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 ${animation}`}
        style={{ backgroundImage: `url(${images[currentIndex].src})` }}
      >
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
        <p className="mt-4 text-base sm:text-lg md:text-xl text-white">
          {description}
        </p>
        {/* Texto adicional, solo visible en pantallas medianas y grandes */}
        <p className="mt-2 text-base sm:text-lg md:text-xl text-white hidden sm:block">
          {text}
        </p>

        {/* Botones responsivos */}
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

        {/* Logo responsivo */}
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
