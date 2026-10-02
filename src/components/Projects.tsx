import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useMemo, useState } from "react";
import { projects } from "../data/projects";
import type { Category, Project } from "../types";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import Reveal from "./Reveal";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

const filters: ("All" | Category)[] = ["All", "Web", "Mobile", "UI/UX", "Other"];

export default function Projects() {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const featured = projects.find((p) => p.featured);
  const visible = useMemo(
    () => projects.filter((p) => filter === "All" || p.category === filter),
    [filter],
  );
  const close = useCallback(() => setSelected(null), []);

  return (
    <Section id="projects" tone="page" wave={2}>
      <SectionHeading id="projects" label="My projects" title="Things I've built" />

      {featured && <FeaturedProject project={featured} onOpen={setSelected} />}

      <Reveal>
        <div role="group" aria-label="Filter projects by category" className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={`rounded-full border-2 px-5 py-2 text-sm font-semibold transition hover:-translate-y-0.5 ${
                filter === f
                  ? "border-brand-deep bg-brand-deep text-white"
                  : "border-brand/40 bg-surface text-ink hover:border-brand-deep"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
        {filter === "All" ? "" : ` in ${filter}`}
      </p>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setSelected} />
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>{selected && <ProjectModal project={selected} onClose={close} />}</AnimatePresence>
    </Section>
  );
}
