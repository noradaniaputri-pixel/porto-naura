interface WaveProps {
  className?: string;
  variant?: 1 | 2;
}

/** Decorative divider. Fill uses currentColor, so pass the colour of the section it belongs to. */
export default function Wave({ className = "", variant = 1 }: WaveProps) {
  const d =
    variant === 1
      ? "M0,44 C180,86 360,0 600,34 C840,68 1100,6 1440,46 L1440,80 L0,80 Z"
      : "M0,30 C220,0 420,70 720,42 C1000,16 1220,66 1440,28 L1440,80 L0,80 Z";
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={`block h-8 w-full md:h-14 ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <path d={d} fill="currentColor" />
    </svg>
  );
}
