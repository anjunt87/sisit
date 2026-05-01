import { c as createComponent } from './astro-component_7ETOIUHv.mjs';
import 'piccolore';
import { a as renderComponent, r as renderTemplate } from './prerender_CQg9tqRL.mjs';
import { $ as $$BaseLayout } from './BaseLayout_C1y3sP9t.mjs';
import { $ as $$Hero } from './hero_CvfzAMzz.mjs';
import { $ as $$Identitas } from './identitas_iP7J9aqw.mjs';
import { $ as $$Sejarah } from './sejarah_BLXmD6Qp.mjs';
import { $ as $$Visimisi } from './visimisi_r8UiTgXx.mjs';
import { $ as $$Struktur } from './struktur_mInMhaUX.mjs';
import { $ as $$Tujuan } from './tujuan_jkDQrrPt.mjs';
import { $ as $$Cta } from './cta_ClVsEbsI.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Profil Yayasan - Nurul Imam Islamic School", "description": "Profil lengkap Yayasan Pendidikan Alam Jaya sebagai pengelola Nurul Imam Islamic School" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Sejarah", $$Sejarah, {})} ${renderComponent($$result2, "VisiMisi", $$Visimisi, {})} ${renderComponent($$result2, "Tujuan", $$Tujuan, {})} ${renderComponent($$result2, "Struktur", $$Struktur, {})} ${renderComponent($$result2, "Identitas", $$Identitas, {})}  ${renderComponent($$result2, "CTA", $$Cta, {})} ` })}`;
}, "C:/laragon/www/sisit-niis/src/pages/about.astro", void 0);

const $$file = "C:/laragon/www/sisit-niis/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
