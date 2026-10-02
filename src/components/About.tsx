import { Download } from "lucide-react";
import { profile } from "../data/profile";
import { avatarPlaceholder } from "../lib/placeholder";
import { Flower } from "./Decor";
import Reveal from "./Reveal";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import Stats from "./Stats";

export default function About() {
  return (
    <Section id="about" tone="page" wave={1}>
      <SectionHeading id="about" label="About me" title="A little about myself" />

      <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <Reveal x={-24} className="relative mx-auto w-full max-w-xs sm:max-w-sm">
          <div className="aspect-[4/5] overflow-hidden rounded-xl2 border-[6px] border-white bg-soft shadow-lift">
            <img
              src={profile.aboutPhoto || profile.photo || avatarPlaceholder()}
              alt={`${profile.fullName} smiling`}
              width={600}
              height={700}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <Flower className="absolute -right-5 -top-5 h-14 w-14 animate-float-slow text-brand" />
        </Reveal>

        <Reveal x={24}>
          <div className="card p-6 sm:p-8">
            <h3 className="text-2xl font-semibold">Hello! I'm {profile.name}...</h3>
            {profile.about.paragraphs.map((p) => (
              <p key={p} className="mt-4 leading-relaxed text-muted">
                {p}
              </p>
            ))}

            <dl className="mt-6 grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {profile.about.facts.map((f) => (
                <div key={f.label} className="rounded-2xl bg-light px-4 py-3">
                  <dt className="text-sm font-semibold text-accent">{f.label}</dt>
                  <dd className="mt-0.5 text-[0.95rem]">{f.value}</dd>
                </div>
              ))}
            </dl>

            <a href={profile.cvUrl} download className="btn-primary mt-7 w-full sm:w-auto">
              <Download size={18} aria-hidden="true" /> Download CV
            </a>
          </div>
        </Reveal>
      </div>

      <Stats />
    </Section>
  );
}
