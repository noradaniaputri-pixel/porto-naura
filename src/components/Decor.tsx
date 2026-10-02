import type { CSSProperties } from "react";

interface DecorProps {
  className?: string;
  style?: CSSProperties;
}

/** Five-petal flower. Colour comes from `text-*` classes. */
export function Flower({ className = "", style }: DecorProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} style={style} aria-hidden="true" focusable="false">
      <g fill="currentColor">
        <circle cx="32" cy="15" r="11" />
        <circle cx="48" cy="27" r="11" />
        <circle cx="42" cy="46" r="11" />
        <circle cx="22" cy="46" r="11" />
        <circle cx="16" cy="27" r="11" />
      </g>
      <circle cx="32" cy="32" r="8" fill="#fff" fillOpacity="0.9" />
    </svg>
  );
}

/** Four-point sparkle. */
export function Sparkle({ className = "", style }: DecorProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 0c.6 6.3 5.7 11.4 12 12-6.3.6-11.4 5.7-12 12-.6-6.3-5.7-11.4-12-12C6.3 11.4 11.4 6.3 12 0Z"
      />
    </svg>
  );
}

/** Soft organic blob. */
export function Blob({ className = "", style }: DecorProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} style={style} aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M44.7,-56.4C58.5,-47.2,70.5,-34,75.4,-18.2C80.2,-2.4,77.9,15.9,69.3,30.5C60.7,45.2,45.8,56.2,29.6,63.1C13.5,70,-4,72.8,-20.6,68.7C-37.2,64.6,-52.9,53.6,-62.7,38.9C-72.5,24.2,-76.4,5.8,-72.3,-10.4C-68.2,-26.6,-56.1,-40.6,-42.2,-49.8C-28.3,-59,-14.2,-63.4,0.6,-64.1C15.3,-64.8,30.9,-65.6,44.7,-56.4Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}
