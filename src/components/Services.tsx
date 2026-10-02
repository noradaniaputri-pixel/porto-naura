import { Globe, LayoutTemplate, Lightbulb, Palette, type LucideIcon } from "lucide-react";
import { profile } from "../data/profile";
import Reveal from "./Reveal";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

const icons: Record<string, LucideIcon> = {
  globe: Globe,
  palette: Palette,
  layout: LayoutTemplate,
  lightbulb: Lightbulb,
};

export default function Services() {
  return (
    <Section id="services" tone="soft" wave={1}>
      <SectionHeading id="services" label="What I can do" title="How I can help" />

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {profile.services.map((s, i) => {
          const Icon = icons[s.icon];
          return (
            <li key={s.title}>
              <Reveal delay={i * 0.07} className="h-full">
                <div className="card card-hover group h-full p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-soft text-accent transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
