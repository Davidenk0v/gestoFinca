import { memo } from "react";
import { motion } from "framer-motion";

export const NavigationButton = memo(({ direction, onClick, ariaLabel }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.08, backgroundColor: "rgba(126, 218, 85, 0.12)", borderColor: "rgba(126, 218, 85, 0.6)" }}
    whileTap={{ scale: 0.93 }}
    className="absolute z-20 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/25 bg-white/8 backdrop-blur-md text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-brand-greenFinca top-1/2 -translate-y-1/2"
    style={{
      [direction === "prev" ? "left" : "right"]: "1.25rem",
      backgroundColor: "rgba(255,255,255,0.06)",
    }}
    aria-label={ariaLabel}
    transition={{ duration: 0.18 }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 md:h-5 md:w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={direction === "prev" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
      />
    </svg>
  </motion.button>
));
