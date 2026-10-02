import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { profile } from "../data/profile";
import Reveal from "./Reveal";

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <ul className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
      {profile.stats.map((s, i) => (
        <li key={s.label}>
          <Reveal delay={i * 0.08}>
            <div className="card px-4 py-6 text-center sm:py-8">
              <p className="font-heading text-4xl font-bold text-accent sm:text-5xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-sm font-medium text-muted sm:text-base">{s.label}</p>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
