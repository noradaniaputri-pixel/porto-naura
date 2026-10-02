import { GraduationCap } from "lucide-react";
import { education } from "../data/experience";
import { Blob, Flower } from "./Decor";
import Reveal from "./Reveal";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <Section id="education" tone="page">
      <SectionHeading id="education" label="Education" title="Where I'm learning" />

      <div className="mx-auto max-w-2xl space-y-6">
        {education.map((e) => (
          <Reveal key={e.degree}>
            <article className="card relative overflow-hidden p-6 sm:p-8">
              <Blob className="absolute -right-10 -top-10 h-40 w-40 text-brand/20" />
              <Flower className="absolute bottom-4 right-5 h-8 w-8 animate-float-slow text-brand/50" />
              <div className="relative flex items-start gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-soft text-accent">
                  <GraduationCap size={28} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold sm:text-2xl">{e.degree}</h3>
                  <p className="mt-1 font-medium">{e.institution}</p>
                  <p className="mt-1 text-sm font-semibold text-accent">{e.period}</p>
                  <p className="mt-3 leading-relaxed text-muted">{e.details}</p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
