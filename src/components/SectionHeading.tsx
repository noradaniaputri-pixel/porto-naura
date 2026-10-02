import Reveal from "./Reveal";

interface Props {
  id: string; // section id; the h2 gets `${id}-title`
  label: string;
  title: string;
  align?: "left" | "center";
}

export default function SectionHeading({ id, label, title, align = "center" }: Props) {
  return (
    <Reveal className={`mb-12 md:mb-14 ${align === "center" ? "text-center" : ""}`}>
      <p className="inline-block rounded-full bg-brand/20 px-4 py-1 text-sm font-semibold text-accent">
        {label}
      </p>
      <h2 id={`${id}-title`} className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}
