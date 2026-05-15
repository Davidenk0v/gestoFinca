import { memo } from "react";
import { motion } from "framer-motion";

export const Indicators = memo(({ images, currentIndex, onChange, slideDuration }) => (
  <div
    className="absolute bottom-5 sm:bottom-6 left-0 right-0 z-20 flex justify-center items-center gap-2"
    role="tablist"
  >
    {images.map((_, i) => (
      <button
        key={`indicator-${i}`}
        onClick={() => onChange(i)}
        role="tab"
        aria-label={`Ir a diapositiva ${i + 1}`}
        aria-selected={i === currentIndex}
        className="group relative flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-greenFinca focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-full"
        style={{
          width: i === currentIndex ? "2.75rem" : "1.25rem",
          transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          height: "1rem",
          padding: "0.25rem 0",
        }}
      >
        <div className="relative w-full h-[3px] rounded-full overflow-hidden bg-white/25">
          {i === currentIndex && (
            <motion.div
              key={`fill-${currentIndex}`}
              className="absolute inset-y-0 left-0 bg-brand-greenFinca rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: slideDuration / 1000, ease: "linear" }}
            />
          )}
          {i < currentIndex && (
            <div className="absolute inset-0 bg-brand-greenFinca/65 rounded-full" />
          )}
        </div>
      </button>
    ))}
  </div>
));
