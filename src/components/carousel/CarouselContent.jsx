import { memo } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const CarouselContent = memo(
  ({ title, phrase, description, buttons, lang, logoSrc, logoSrc2 }) => (
    <motion.div
      className="relative z-10 max-w-4xl w-full text-center px-4 sm:px-6 lg:px-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Decorative accent line */}
      <motion.div
        variants={itemVariants}
        className="mx-auto mb-4 sm:mb-5 h-[2px] w-10 sm:w-12 bg-brand-greenFinca rounded-full"
      />

      {/* Title */}
      <motion.h1
        variants={itemVariants}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none"
      >
        {title !== "GestoFinca" ? (
          <span className="text-brand-blueFinca">{title}</span>
        ) : (
          <>
            <span className="text-brand-blueFinca">Gesto</span>
            <span className="text-brand-greenFinca">Finca.</span>
          </>
        )}
      </motion.h1>

      {/* Phrase */}
      <motion.p
        variants={itemVariants}
        className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-white/90 font-light tracking-wide"
      >
        {phrase}
      </motion.p>

      {/* Description */}
      {description && (
        <motion.p
          variants={itemVariants}
          className="hidden sm:block mt-2 sm:mt-3 text-xs sm:text-sm md:text-base font-medium text-white/70"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}

      {/* Buttons */}
      <motion.div
        variants={itemVariants}
        className="mt-5 sm:mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
      >
        <a
          href={`/${lang}/contacto`}
          className="border-2 border-brand-greenFinca rounded-md bg-brand-greenFinca px-5 sm:px-7 py-2.5 text-xs sm:text-sm font-semibold text-black shadow-md hover:bg-transparent hover:text-brand-greenFinca transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-greenFinca focus:ring-offset-1 focus:ring-offset-transparent"
          aria-label="Contactar con nosotros"
        >
          {buttons?.contact_us || "Contacto"}
        </a>
        <a
          href={`/${lang}/nosotros`}
          className="border-2 border-white/40 rounded-md px-5 sm:px-7 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md hover:border-brand-greenFinca hover:text-brand-greenFinca transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-greenFinca focus:ring-offset-1 focus:ring-offset-transparent"
          aria-label="Conocer más sobre nosotros"
        >
          {buttons?.about_us || "Sobre Nosotros"}
        </a>
      </motion.div>

      {/* Partner logos */}
      <motion.div
        variants={itemVariants}
        className="mt-5 sm:mt-6 flex justify-center items-center gap-4 sm:gap-6"
      >
        <a
          href="https://caftenerife.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-75 hover:opacity-100 transition-opacity duration-300"
        >
          <img
            src={logoSrc}
            alt="Colegio de Administradores de Fincas de Santa Cruz de Tenerife"
            className="h-10 w-auto sm:h-14 md:h-16 lg:h-20"
            loading="eager"
            width={192}
            height={48}
          />
        </a>
        <a
          href="https://www.consejogestores.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-75 hover:opacity-100 transition-opacity duration-300 flex items-center"
        >
          <img
            src={logoSrc2}
            alt="Logo de consejo de gestores administrativos"
            className="h-10 w-auto sm:h-14 md:h-16 lg:h-20"
            loading="eager"
            width={92}
            height={48}
          />
        </a>
      </motion.div>
    </motion.div>
  )
);
