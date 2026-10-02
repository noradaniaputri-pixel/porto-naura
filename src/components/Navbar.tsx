import { AnimatePresence, motion } from "framer-motion";
import { Menu, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useActiveSection } from "../lib/useActiveSection";
import ThemeToggle from "./ThemeToggle";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
];
const ids = links.map((l) => l.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [secret, setSecret] = useState(false);
  const clicks = useRef(0);
  const clickTimer = useRef<number>();
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu with Escape or when the viewport becomes desktop-sized.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  useEffect(() => {
    if (!secret) return;
    const t = window.setTimeout(() => setSecret(false), 3500);
    return () => window.clearTimeout(t);
  }, [secret]);

  const onLogo = () => {
    window.scrollTo({ top: 0 });
    clicks.current += 1;
    window.clearTimeout(clickTimer.current);
    if (clicks.current >= 5) {
      clicks.current = 0;
      setSecret(true);
    } else {
      clickTimer.current = window.setTimeout(() => (clicks.current = 0), 1500);
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "bg-page/80 shadow-[0_1px_12px_rgb(var(--shadow)/0.12)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav aria-label="Main" className="container-x flex h-16 items-center justify-between">
          <button
            type="button"
            onClick={onLogo}
            aria-label="Noura, back to top"
            className="font-heading text-2xl font-bold tracking-tight text-ink"
          >
            Noura<span className="text-brand-dark">.</span>
          </button>

          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  aria-current={active === l.id ? "true" : undefined}
                  className="link-underline py-1 text-[0.95rem] font-medium text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href="#contact" className="btn-primary hidden !px-5 !py-2 text-sm lg:inline-flex">
              Contact
            </a>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-brand/40 bg-surface/70 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden lg:hidden"
            >
              <ul className="container-x flex flex-col gap-1 pb-5 pt-1">
                {links.map((l) => (
                  <li key={l.id}>
                    <a
                      href={`#${l.id}`}
                      onClick={() => setOpen(false)}
                      aria-current={active === l.id ? "true" : undefined}
                      className={`block rounded-2xl px-4 py-3 text-lg font-medium hover:bg-soft ${
                        active === l.id ? "bg-soft text-accent" : "text-ink"
                      }`}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                    Contact me
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {secret && (
          <motion.div
            role="status"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 left-1/2 z-[75] flex max-w-[90vw] -translate-x-1/2 items-center gap-2 rounded-full bg-brand-deep px-5 py-3 text-center text-sm font-semibold text-white shadow-lift"
          >
            <Sparkles size={16} aria-hidden="true" /> You found a little secret!{" "}
            <Sparkles size={16} aria-hidden="true" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
