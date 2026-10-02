import { Github, Instagram, Linkedin } from "lucide-react";
import { profile } from "../data/profile";
import Wave from "./Wave";

const links = [
  { label: "GitHub", href: profile.socials.github, icon: Github },
  { label: "Instagram", href: profile.socials.instagram, icon: Instagram },
  { label: "LinkedIn", href: profile.socials.linkedin, icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="relative bg-soft pb-8 pt-10 md:pt-14">
      <Wave className="absolute inset-x-0 bottom-full -mb-px text-soft" />
      <div className="container-x flex flex-col items-center gap-5 text-center">
        <p className="font-heading text-3xl font-bold">
          Noura<span className="text-brand-dark">.</span>
        </p>
        <p className="text-muted">Building things with code &amp; creativity.</p>
        <ul className="flex gap-3">
          {links.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full bg-surface text-accent shadow-soft transition hover:-translate-y-1"
              >
                <Icon size={20} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted">© {new Date().getFullYear()} Noura. All rights reserved.</p>
      </div>
    </footer>
  );
}
