import { useEffect, useState } from "react";
import edf1 from "@/assets/images/building.webp";
import edf2 from "@/assets/images/edificio1.webp";
import edf3 from "@/assets/images/puerta.webp";
import logo from "@/assets/logos/imagen_logo_negativo.png";
import Image from "astro/components/Image.astro";

const images = [edf1, edf2, edf3];

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
            <strong className="text-brand-greenFinca">{title}</strong>
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
            className="border-2 border-brand-blueFinca rounded-md bg-brand-blueFinca px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-transparent hover:text-brand-blueFinca sm:w-auto"
          >
            {buttons?.contact_us}
          </a>
          <a
            href={`/nosotros?lang=${lang}`}
            className="border-2 border-brand-blueFinca rounded-md px-6 py-2 text-sm font-semibold text-brand-blueFinca shadow-sm hover:text-black hover:bg-brand-blueFinca sm:w-auto"
          >
            {buttons?.about_us}
          </a>
        </div>
        <div className="mt-6 flex justify-center">
          <Image src={logo} alt="Logo" className="w-50 h-20" />
        </div>
      </div>
    </section>
  );
};

export default Carousel;
