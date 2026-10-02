import { motion, type Variants } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { profile } from "../data/profile";
import { avatarPlaceholder } from "../lib/placeholder";
import { easeOut } from "../lib/motion";
import { Blob, Flower, Sparkle } from "./Decor";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};
const up: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="home-title"
      className="relative bg-soft pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pb-32 lg:pt-40"
    >
      {/* Decorations: slow, offset in time so they never move together */}
      <Blob className="absolute -left-24 top-24 h-72 w-72 text-brand/20" />
      <Blob className="absolute -right-20 bottom-10 h-80 w-80 text-brand/25" />
      <Flower className="absolute left-[6%] top-28 hidden h-10 w-10 animate-spin-slow text-brand/60 sm:block" />
      <Flower
        className="absolute bottom-24 left-[44%] hidden h-7 w-7 animate-float-slow text-brand-dark/40 md:block"
        style={{ animationDelay: "1.2s" }}
      />
      <Sparkle className="absolute right-[10%] top-32 h-7 w-7 animate-pulse-soft text-brand-dark/70" />
      <Sparkle
        className="absolute left-[38%] top-24 hidden h-4 w-4 animate-pulse-soft text-brand-dark/60 md:block"
        style={{ animationDelay: "2s" }}
      />
      <span
        aria-hidden="true"
        className="absolute bottom-32 right-[6%] hidden h-5 w-5 animate-float-slow rounded-full bg-brand/60 sm:block"
        style={{ animationDelay: "0.6s" }}
      />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={up} className="text-lg font-medium text-accent">
            Hello, welcome to my portfolio
          </motion.p>
          <motion.h1
            variants={up}
            id="home-title"
            className="mt-2 text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            Hi, I'm {profile.name}<span className="text-brand-dark">.</span>
          </motion.h1>
          <motion.p variants={up} className="mt-4 font-heading text-xl font-medium sm:text-2xl">
            {profile.role}
          </motion.p>
          <motion.p variants={up} className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline} {profile.heroIntro}
          </motion.p>
          <motion.div variants={up} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="btn-primary w-full sm:w-auto">
              Explore My Work <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-ghost w-full sm:w-auto">
              <Mail size={18} aria-hidden="true" /> Let's Connect
            </a>
          </motion.div>
        </motion.div>

        {/* Outer div floats (CSS); inner motion.div scales in, so the two transforms never fight. */}
        <div className="mx-auto w-full max-w-[19rem] animate-float-y sm:max-w-sm lg:max-w-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: easeOut }}
            className="relative"
          >
            <div
              className="aspect-[6/7] overflow-hidden border-[6px] border-white bg-soft shadow-lift"
              style={{ borderRadius: "58% 42% 52% 48% / 46% 54% 46% 54%" }}
            >
              <img
                src={profile.photo || avatarPlaceholder()}
                alt={`Portrait of ${profile.fullName}`}
                width={600}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>
            <Sparkle className="absolute -right-2 top-6 h-8 w-8 text-brand-dark" />
            <Flower className="absolute -bottom-3 -left-4 h-12 w-12 text-brand" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
