import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { forwardRef } from "react";
import { projectImage } from "../lib/placeholder";
import type { Project } from "../types";

interface Props {
  project: Project;
  onOpen: (project: Project) => void;
}

const ProjectCard = forwardRef<HTMLElement, Props>(function ProjectCard({ project, onOpen }, ref) {
  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.3 }}
      className="card card-hover group flex h-full flex-col overflow-hidden"
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`View details for ${project.title}`}
        className="flex flex-1 flex-col text-left"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-soft">
          <img
            src={projectImage(project)}
            alt={`${project.title} preview`}
            width={960}
            height={600}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full bg-surface/90 px-3 py-1 text-xs font-semibold text-accent shadow-soft">
            {project.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-muted">{project.description}</p>
          <p className="mt-4 text-sm font-medium text-accent">{project.technologies.join(" • ")}</p>
        </div>
      </button>

      <div className="flex gap-3 px-5 pb-5">
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex-1 !px-4 !py-2 text-sm"
          aria-label={`${project.title} live demo`}
        >
          <ExternalLink size={16} aria-hidden="true" /> Live Demo
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost flex-1 !px-4 !py-2 text-sm"
          aria-label={`${project.title} source code on GitHub`}
        >
          <Github size={16} aria-hidden="true" /> GitHub
        </a>
      </div>
    </motion.article>
  );
});

export default ProjectCard;
