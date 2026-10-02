import { experience } from "../data/experience";
import Reveal from "./Reveal";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <Section id="experience" tone="light">
      <SectionHeading id="experience" label="Experience" title="My journey so far" />

      <ol className="relative ml-3 max-w-2xl space-y-10 border-l-2 border-brand/50 pl-8 sm:mx-auto">
        {experience.map((item, i) => (
          <li key={item.year} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-light bg-brand-dark"
            />
            <Reveal x={-20} delay={i * 0.05}>
              <p className="font-heading text-lg font-semibold text-accent">{item.year}</p>
              <div className="card mt-2 p-5">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{item.description}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
