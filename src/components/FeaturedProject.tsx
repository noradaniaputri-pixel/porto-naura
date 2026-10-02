import { ArrowRight } from "lucide-react";
import { projectImage } from "../lib/placeholder";
import type { Project } from "../types";
import { Sparkle } from "./Decor";
import Reveal from "./Reveal";

interface Props {
  project: Project;
  onOpen: (project: Project) => void;
}

export default function FeaturedProject({ project, onOpen }: Props) {
  return (
    <Reveal className="mb-14">
      <div className="relative overflow-hidden rounded-xl2 border border-brand/25 bg-gradient-to-br from-light via-soft to-light p-5 shadow-soft sm:p-8 lg:p-10">
        <Sparkle className="absolute right-6 top-6 h-6 w-6 animate-pulse-soft text-brand-dark/60" />
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <img
            src={projectImage(project)}
            alt={`${project.title} preview`}
            width={960}
            height={600}
            loading="lazy"
            className="aspect-[16/10] w-full rounded-card border-4 border-white object-cover shadow-soft"
          />
          <div>
            <p className="inline-block rounded-full bg-surface px-4 py-1 text-sm font-semibold text-accent">
              Featured project
            </p>
            <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">{project.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{project.description}</p>
            <p className="mt-4 font-medium text-accent">{project.technologies.join(" | ")}</p>
            <button type="button" onClick={() => onOpen(project)} className="btn-primary mt-6 w-full sm:w-auto">
              View Project <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
