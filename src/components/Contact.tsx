import { CheckCircle2, Github, Instagram, Linkedin, Mail, Send } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { profile } from "../data/profile";
import { sendMessage } from "../lib/sendMessage";
import { Flower, Sparkle } from "./Decor";
import Reveal from "./Reveal";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

type Values = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;
type Status = "idle" | "sending" | "sent" | "mailto" | "error";

const empty: Values = { name: "", email: "", subject: "", message: "" };

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!v.email.trim()) e.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Enter a valid email, like name@example.com.";
  if (v.subject.trim().length < 3) e.subject = "Subject needs at least 3 characters.";
  if (v.message.trim().length < 10) e.message = "Message needs at least 10 characters.";
  return e;
}

const socials = [
  { label: "GitHub", href: profile.socials.github, icon: Github },
  { label: "Instagram", href: profile.socials.instagram, icon: Instagram },
  { label: "LinkedIn", href: profile.socials.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

const fieldClass =
  "mt-1.5 w-full rounded-2xl border-2 bg-page px-4 py-3 text-base text-ink placeholder:text-muted/70 transition focus:border-brand-dark";

export default function Contact() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const next = { ...values, [e.target.name]: e.target.value };
    setValues(next);
    if (submitted) setErrors(validate(next)); // live feedback once they've tried to submit
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const found = validate(values);
    setErrors(found);
    const firstBad = (Object.keys(found) as (keyof Values)[])[0];
    if (firstBad) {
      document.getElementById(`field-${firstBad}`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const result = await sendMessage(values);
      setStatus(result);
      setValues(empty);
      setSubmitted(false);
    } catch {
      setStatus("error");
    }
  };

  const field = (name: keyof Values, label: string, type = "text", autoComplete?: string) => (
    <div>
      <label htmlFor={`field-${name}`} className="text-sm font-semibold">
        {label}
      </label>
      <input
        id={`field-${name}`}
        name={name}
        type={type}
        value={values[name]}
        onChange={onChange}
        autoComplete={autoComplete}
        aria-invalid={!!errors[name]}
        aria-describedby={errors[name] ? `error-${name}` : undefined}
        className={`${fieldClass} ${errors[name] ? "border-red-500" : "border-brand/40"}`}
      />
      {errors[name] && (
        <p id={`error-${name}`} className="mt-1.5 text-sm font-medium text-red-700 dark:text-red-300">
          {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <Section id="contact" tone="contact" wave={2}>
      <Flower className="absolute left-[5%] top-12 hidden h-10 w-10 animate-spin-slow text-white/60 md:block" />
      <Sparkle className="absolute right-[8%] top-16 h-7 w-7 animate-pulse-soft text-brand-deep/70" />

      <SectionHeading id="contact" label="Let's work together" title="Have a project in mind?" />
      <Reveal>
        <p className="-mt-6 mb-10 text-center text-lg">Let's create something amazing.</p>
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
        <Reveal>
          <form onSubmit={onSubmit} noValidate className="card space-y-5 p-5 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {field("name", "Name", "text", "name")}
              {field("email", "Email", "email", "email")}
            </div>
            {field("subject", "Subject")}
            <div>
              <label htmlFor="field-message" className="text-sm font-semibold">
                Message
              </label>
              <textarea
                id="field-message"
                name="message"
                rows={5}
                value={values.message}
                onChange={onChange}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "error-message" : undefined}
                className={`${fieldClass} resize-y ${errors.message ? "border-red-500" : "border-brand/40"}`}
              />
              {errors.message && (
                <p id="error-message" className="mt-1.5 text-sm font-medium text-red-700 dark:text-red-300">
                  {errors.message}
                </p>
              )}
            </div>

            <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-70 sm:w-auto">
              <Send size={18} aria-hidden="true" /> {status === "sending" ? "Sending…" : "Send Message"}
            </button>

            <div role="status" aria-live="polite" className="min-h-[1.5rem] text-sm font-medium">
              {status === "sent" && (
                <p className="flex items-center gap-2 text-green-800 dark:text-green-300">
                  <CheckCircle2 size={18} aria-hidden="true" /> Message sent. Thank you, I'll reply soon!
                </p>
              )}
              {status === "mailto" && (
                <p>Your email app should open with the message ready to send.</p>
              )}
              {status === "error" && (
                <p className="text-red-700 dark:text-red-300">
                  The message didn't send. Check your connection and try again, or email me directly.
                </p>
              )}
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card p-5 sm:p-8">
            <h3 className="text-xl font-semibold">Find me online</h3>
            <p className="mt-2 text-muted">Prefer a quick hello? Reach out on any of these.</p>
            <ul className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-1">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={label === "Email" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-2xl bg-light px-4 py-3 font-medium transition hover:-translate-y-0.5 hover:bg-soft"
                  >
                    <Icon size={20} aria-hidden="true" className="text-accent transition group-hover:-translate-y-0.5" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
