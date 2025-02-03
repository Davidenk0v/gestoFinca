import { useEffect, useState } from "react";
import "../styles/animations.css";
import edf1 from "../assets/images/building.webp";
import edf2 from "../assets/images/edificio1.webp";
import edf3 from "../assets/images/puerta.webp";
import logo from "../assets/logos/imagen_logo_negativo.png";

const Carrousel = () => {
  const images = [edf1.src, edf2.src, edf3.src];
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [animations, setAnimations] = useState("slideIn");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimations("slideOut");

      setTimeout(() => {
        setCurrentImage((prevImage) => {
          const currentIndex = images.indexOf(prevImage);
          const nextIndex = (currentIndex + 1) % images.length;
          setAnimations("slideIn");
          return images[nextIndex];
        });
      }, 500); // 500 ms for slideOut animation duration
    }, 10000); // 10000 ms = 10 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <section className="relative h-[50vh] overflow-hidden">
      <div
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 ${animations}`}
        style={{ backgroundImage: `url(${currentImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-80 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
      </div>

      <div className="relative flex justify-center mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-6xl font-extrabold text-brand-blueFinca sm:text-5xl">
            Gesto
            <strong className="font-extrabold text-brand-greenFinca">
              Finca.
            </strong>
          </h1>
          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-center justify-center">
            <a
              href="/contacto"
              className="block border-2 border-brand-blueFinca rounded-md bg-brand-blueFinca px-12 py-3 text-sm font-semibold shadow-sm hover:bg-transparent hover:text-brand-blueFinca hover:border-2 focus:ring-3 focus:outline-hidden sm:w-auto"
            >
              Contáctanos
            </a>

            <a
              href="/nosotros"
              className="block border-2 border-brand-blueFinca rounded-md px-12 py-3 text-sm font-semibold text-brand-blueFinca shadow-sm hover:text-black hover:bg-brand-blueFinca focus:ring-3 focus:outline-hidden sm:w-auto"
            >
              Descubre más
            </a>
          </div>
          <div className="flex justify-center m-4">
            <img src={logo.src} alt="" className="h-20" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Carrousel;
