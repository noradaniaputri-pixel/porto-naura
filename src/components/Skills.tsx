import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";
import { easeOut } from "../lib/motion";
import Reveal from "./Reveal";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <Section id="skills" tone="light">
      <SectionHeading id="skills" label="My skills" title="Technologies I work with" />

      <div className="space-y-12">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <Reveal>
              <h3 className="mb-5 text-xl font-semibold">{group.title}</h3>
            </Reveal>
            <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {group.skills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <li key={skill.name}>
                    <Reveal delay={(i % 3) * 0.07}>
                      <div className="card card-hover group p-5">
                        <div className="flex items-center gap-4">
                          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-soft text-accent transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                            <Icon size={24} aria-hidden="true" />
                          </span>
                          <div className="min-w-0">
                            <p className="truncate text-lg font-semibold">{skill.name}</p>
                            <p className="text-sm text-muted">{skill.level}</p>
                          </div>
                        </div>
                        <div className="mt-4 h-2 overflow-hidden rounded-full bg-soft" aria-hidden="true">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-brand to-brand-dark"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percent}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.15, ease: easeOut }}
                          />
                        </div>
                      </div>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
