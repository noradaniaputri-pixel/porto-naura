# Noura — Personal Portfolio

React + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide icons.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into /dist
```

## Make it yours (all content is data, no component edits needed)

| What                                   | Where                    |
| -------------------------------------- | ------------------------ |
| Name, role, bio, photo, CV, socials, stats, services | `src/data/profile.ts`    |
| Projects (and which one is featured)   | `src/data/projects.ts`   |
| Skills and levels                      | `src/data/skills.ts`     |
| Experience timeline and education      | `src/data/experience.ts` |
| Colours, fonts, shadows                | `tailwind.config.js`, `src/index.css` |

- **Photos / screenshots:** drop `.webp` files into `public/` (project shots in `public/projects/`) and set the path in the data files. Empty paths fall back to generated placeholders.
- **Contact form:** copy `.env.example` to `.env` and set `VITE_FORMSPREE_ID` (create a free form at formspree.io). Without it, the form opens the visitor's email app instead. To use EmailJS, edit `src/lib/sendMessage.ts`.
- **Social preview image:** add `public/og-image.png` (1200×630).
- **Dark mode** follows the visitor's system setting on first visit, then remembers their choice.
- **Reduced motion:** respected both by Framer Motion (`MotionConfig`) and CSS.

## Easter egg
Click the logo five times quickly.
