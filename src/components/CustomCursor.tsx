import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/** Small pink follower. Only on devices with a precise pointer and hover, never with reduced motion. */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 520, damping: 38, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 520, damping: 38, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(fine && !reduce);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 10);
      y.set(e.clientY - 10);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      setActive(!!t?.closest("a, button, input, textarea, [role='button']"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;
  return (
    <motion.div
      aria-hidden="true"
      style={{ x: sx, y: sy }}
      animate={{ scale: active ? 2 : 1 }}
      transition={{ duration: 0.18 }}
      className="pointer-events-none fixed left-0 top-0 z-[80] h-5 w-5 rounded-full border-2 border-brand-dark bg-brand/50"
    />
  );
}
