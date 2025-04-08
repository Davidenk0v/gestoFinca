import React, { useState, useEffect } from "react";

const WhatsAppIcon = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);

  const handleClick = () => {
    const message = "¡Hola! Estoy interesado en recibir más información.";
    const phoneNumber = "+34689958931";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  // Mostrar el botón después de un breve retraso para mejor UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    // Animación de rebote cada 30 segundos para llamar la atención
    const bounceInterval = setInterval(() => {
      setIsBouncing(true);
      setTimeout(() => setIsBouncing(false), 1000);
    }, 30000);

    return () => {
      clearTimeout(timer);
      clearInterval(bounceInterval);
    };
  }, []);

  // Clases para la animación de rebote
  const bounceClass = isBouncing ? "animate-bounce" : "";

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
          {/* Tooltip que aparece al pasar el ratón */}
          {isHovered && (
            <div className="mb-2 px-4 py-2 bg-white text-gray-800 rounded-lg shadow-lg text-sm font-medium">
              ¡Contáctanos por WhatsApp!
            </div>
          )}

          <button
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 ${bounceClass}`}
            aria-label="Contactar por WhatsApp"
          >
            {/* Efecto de pulso moderado - punto medio entre ping y pulse */}
            <span className="absolute w-16 h-16 rounded-full bg-green-400 opacity-50">
              <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-50 duration-1000"></span>
            </span>

            {/* SVG mejorado */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-8 h-8 text-white relative z-10"
              fill="currentColor"
            >
              <path d="M16.001 0C7.163 0 0 7.163 0 16c0 2.957.803 5.736 2.324 8.204L0 32l8.107-2.303A15.977 15.977 0 0 0 16 32c8.837 0 16-7.163 16-16S24.838 0 16.001 0Zm8.228 22.373c-.344.967-1.707 1.786-2.772 2.025-.74.161-1.687.293-4.892-1.043-4.111-1.707-6.735-5.851-6.94-6.123-.202-.272-1.654-2.202-1.654-4.196 0-1.994 1.033-2.976 1.399-3.372.345-.368.74-.46.988-.46h.713c.232 0 .546-.048.84.637.321.72 1.086 2.664 1.181 2.859.096.193.16.416.032.674-.129.258-.193.416-.387.644-.193.225-.408.506-.582.678-.193.2-.39.419-.166.805.225.385 1.002 1.647 2.148 2.667 1.478 1.304 2.715 1.707 3.097 1.903.385.193.613.161.841-.097.225-.258.967-1.125 1.225-1.51.258-.386.483-.322.805-.193.322.128 2.032.957 2.382 1.13.353.161.582.258.672.403.097.144.097.835-.247 1.803Z" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default WhatsAppIcon;
