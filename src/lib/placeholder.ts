import type { Project } from "../types";

const palettes: [string, string][] = [
  ["#FCE4F1", "#F48BC3"],
  ["#FFF4FA", "#E86DAE"],
  ["#FDE9F4", "#D83F91"],
  ["#FFF0F8", "#F48BC3"],
];

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const toUri = (svg: string) => `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

/** Soft pink "browser window" placeholder, so cards look finished before real screenshots exist. */
export function placeholderImage(label: string, seed = 0, w = 960, h = 600): string {
  const [a, b] = palettes[seed % palettes.length];
  const inner = w - 320;
  return toUri(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${w} ${h}'>
  <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${a}'/><stop offset='1' stop-color='${b}'/></linearGradient></defs>
  <rect width='100%' height='100%' fill='url(#g)'/>
  <rect x='120' y='80' width='${w - 240}' height='${h - 160}' rx='28' fill='#fff' fill-opacity='.92'/>
  <circle cx='164' cy='122' r='8' fill='#F48BC3'/><circle cx='192' cy='122' r='8' fill='#FCE4F1'/><circle cx='220' cy='122' r='8' fill='#FCE4F1'/>
  <rect x='160' y='168' width='${inner * 0.5}' height='24' rx='12' fill='#D83F91' fill-opacity='.85'/>
  <rect x='160' y='212' width='${inner * 0.8}' height='14' rx='7' fill='#F48BC3' fill-opacity='.45'/>
  <rect x='160' y='238' width='${inner * 0.62}' height='14' rx='7' fill='#F48BC3' fill-opacity='.35'/>
  <rect x='160' y='286' width='${inner / 2 - 12}' height='${h - 420}' rx='20' fill='#FCE4F1'/>
  <rect x='${160 + inner / 2 + 12}' y='286' width='${inner / 2 - 12}' height='${h - 420}' rx='20' fill='#FFF4FA'/>
  <text x='${w / 2}' y='${h - 108}' text-anchor='middle' font-family='sans-serif' font-size='24' font-weight='600' fill='#806F7B'>${esc(label)}</text>
</svg>`);
}

export function projectImage(p: Project): string {
  return p.image || placeholderImage(p.title, p.id);
}

/** Friendly placeholder portrait. Replace via `photo` in data/profile.ts. */
export function avatarPlaceholder(): string {
  return toUri(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 700'>
  <defs><linearGradient id='bg' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#FCE4F1'/><stop offset='1' stop-color='#F9B6D8'/></linearGradient></defs>
  <rect width='600' height='700' fill='url(#bg)'/>
  <circle cx='110' cy='120' r='60' fill='#fff' fill-opacity='.35'/>
  <circle cx='520' cy='560' r='90' fill='#fff' fill-opacity='.3'/>
  <path d='M110 700 C110 560 210 500 300 500 C390 500 490 560 490 700 Z' fill='#D83F91'/>
  <rect x='265' y='430' width='70' height='90' rx='30' fill='#F6C9A8'/>
  <ellipse cx='300' cy='330' rx='118' ry='128' fill='#2D2430'/>
  <ellipse cx='300' cy='345' rx='96' ry='108' fill='#F9D3B8'/>
  <path d='M196 330 C200 240 290 215 340 240 C380 255 404 290 404 330 C380 290 330 280 290 285 C250 290 215 305 196 330 Z' fill='#2D2430'/>
  <circle cx='262' cy='350' r='9' fill='#2D2430'/><circle cx='338' cy='350' r='9' fill='#2D2430'/>
  <ellipse cx='240' cy='385' rx='17' ry='10' fill='#F48BC3' fill-opacity='.55'/><ellipse cx='360' cy='385' rx='17' ry='10' fill='#F48BC3' fill-opacity='.55'/>
  <path d='M272 394 Q300 418 328 394' stroke='#2D2430' stroke-width='6' fill='none' stroke-linecap='round'/>
</svg>`);
}
