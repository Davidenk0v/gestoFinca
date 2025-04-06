import { memo } from "react";

export const Indicators = memo(({ images, currentIndex, onChange }) => (
  <div
    className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2"
    role="tablist"
  >
    {images.map((_, i) => (
      <button
        key={`dot-${i}`}
        onClick={() => onChange(i)}
        className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
          i === currentIndex
            ? "bg-brand-greenFinca"
            : "bg-white/50 hover:bg-white/80"
        }`}
        aria-label={`Ir a diapositiva ${i + 1}`}
        aria-selected={i === currentIndex}
        role="tab"
      />
    ))}
  </div>
));
