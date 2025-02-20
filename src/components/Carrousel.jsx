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
    <section className="relative h-[50vh] overflow-hidden flex items-center justify-center">
      <div
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 ${animation}`}
        style={{ backgroundImage: `url(${images[currentIndex].src})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-4xl text-center px-6 sm:px-10 lg:px-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-blueFinca">
          {title !== "GestoFinca" ? (
            <strong className="text-brand-blueFinca">{title}</strong>
          ) : (
            <>
              Gesto<strong className="text-brand-greenFinca">Finca.</strong>
            </>
          )}
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-white">{description}</p>
        <p className="mt-2 text-lg sm:text-xl text-white">{text}</p>
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
        <div className="mt-6 flex justify-center">
          <img src={logo.src} alt="Logo" className="w-50 h-20" />
        </div>
      </div>
    </section>
  );
};

export default Carousel;
