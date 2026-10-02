import { motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { projectImage } from "../lib/placeholder";
import type { Project } from "../types";

interface Props {
  project: Project;
  onClose: () => void;
}

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function ProjectModal({ project, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbar}px`;
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const items = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      previous?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 bg-ink/50 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ duration: 0.25 }}
        className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-xl2 bg-surface shadow-lift sm:rounded-xl2"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-surface/90 text-ink shadow-soft transition hover:scale-105"
        >
          <X size={20} aria-hidden="true" />
        </button>

        <img
          src={projectImage(project)}
          alt={`${project.title} preview`}
          width={960}
          height={600}
          className="aspect-[16/10] w-full object-cover"
        />

        <div className="p-5 sm:p-8">
          <p className="text-sm font-semibold text-accent">{project.category}</p>
          <h3 id="modal-title" className="mt-1 text-2xl font-semibold sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-3 leading-relaxed text-muted">{project.description}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-light p-4">
              <h4 className="font-semibold text-accent">Problem</h4>
              <p className="mt-1 text-[0.95rem] leading-relaxed">{project.problem}</p>
            </div>
            <div className="rounded-2xl bg-light p-4">
              <h4 className="font-semibold text-accent">Solution</h4>
              <p className="mt-1 text-[0.95rem] leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <h4 className="mt-6 font-semibold">Features</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-[0.95rem] marker:text-brand-dark">
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>

          <h4 className="mt-6 font-semibold">Technologies</h4>
          <ul className="mt-2 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <li key={t} className="rounded-full bg-soft px-3 py-1 text-sm font-medium">
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
              <ExternalLink size={18} aria-hidden="true" /> Live Demo
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full sm:w-auto">
              <Github size={18} aria-hidden="true" /> GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
