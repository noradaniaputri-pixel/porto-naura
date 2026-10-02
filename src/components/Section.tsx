import type { ReactNode } from "react";
import Wave from "./Wave";

type Tone = "page" | "light" | "soft" | "contact";

const bg: Record<Tone, string> = {
  page: "bg-page",
  light: "bg-light",
  soft: "bg-soft",
  contact: "bg-contact",
};
const waveColor: Record<Tone, string> = {
  page: "text-page",
  light: "text-light",
  soft: "text-soft",
  contact: "text-contact",
};

interface SectionProps {
  id: string;
  tone: Tone;
  /** Draws a wave on the top edge, in this section's colour. */
  wave?: 1 | 2;
  className?: string;
  children: ReactNode;
}

export default function Section({ id, tone, wave, className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`relative scroll-mt-16 ${bg[tone]} py-20 md:py-28 ${className}`}
    >
      {wave && <Wave variant={wave} className={`absolute inset-x-0 bottom-full -mb-px ${waveColor[tone]}`} />}
      <div className="container-x">{children}</div>
    </section>
  );
}
