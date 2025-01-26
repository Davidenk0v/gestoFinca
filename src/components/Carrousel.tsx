"use client";
import { Carousel } from "flowbite-react";
import building from "../../public/building.webp";
import building2 from "../../public/edificio1.webp";
import vacation from "../../public/vacacional.webp";
import door from "../../public/puerta.webp";

const Carrousel = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        {/* Imagen 1 */}
        <div>
          <div className="z-10 absolute inset-0 flex flex-col items-center justify-center w-full h-full px-6 text-center">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Cuidados de tu propiedad, gestionamos tu tranquilidad
            </h1>
            <a
              href="/contacto"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-bold text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-300"
            >
              Contactar
            </a>
          </div>
          <img className="opacity-60" src={building.src} alt="edificio1" />
        </div>

        {/* Imagen 2 */}
        <div>
          <div className="z-10 absolute inset-0 flex flex-col items-center justify-center w-full h-full px-6 text-center">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Cuidamos de tu hogar, mimamos a tus huéspedes
            </h1>
            <a
              href="/alquileres-vacacionales"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-bold text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-300"
            >
              Ver más
            </a>
          </div>
          <img
            className="opacity-60 object-cover w-full h-full"
            src={building2.src}
            alt="edificio"
          />
        </div>
        {/* Imagen 3 */}
        <div>
          <div className="z-10 absolute inset-0 flex flex-col items-center justify-center w-full h-full px-6 text-center">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Tu tranquilidad, nuestra prioridad
            </h1>
            <a
              href="/administracion-fincas"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-bold text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-300"
            >
              Ver más
            </a>
          </div>
          <img
            className="opacity-60 object-cover w-full h-full"
            src={vacation.src}
            alt="edificio1"
          />
        </div>
        {/* Imagen 4 */}
        <div>
          <div className="z-10 absolute inset-0 flex flex-col items-center justify-center w-full h-full px-6 text-center">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Cuidamos de tus propiedades como si fueran nuestras
            </h1>
            <a
              href="/contacto"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-bold text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-300"
            >
              Contactar
            </a>
          </div>
          <img
            className="opacity-60 object-cover w-full h-full"
            src={door.src}
            alt="puerta"
          />
        </div>
      </Carousel>
    </div>
  );
};
export default Carrousel;
