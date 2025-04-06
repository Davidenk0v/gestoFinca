import { memo } from "react";

export const NavigationButton = memo(({ direction, onClick, ariaLabel }) => (
  <button
    onClick={onClick}
    className="absolute z-20 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors focus:outline-none focus:ring-2 focus:ring-white top-1/2 transform -translate-y-1/2"
    style={{ [direction === "prev" ? "left" : "right"]: "1rem" }}
    aria-label={ariaLabel}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 md:h-6 md:w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={direction === "prev" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
      />
    </svg>
  </button>
));
