import { c as createComponent } from './astro-component_D77M9rGE.mjs';
import 'piccolore';
import { n as renderComponent, r as renderTemplate } from './entrypoint_uw6GGwwS.mjs';
import { $ as $$BaseLayout } from './BaseLayout_-31gxKTm.mjs';
import { $ as $$Hero } from './hero_D2WuCBPf.mjs';
import { $ as $$Identitas } from './identitas_Cbb19kU5.mjs';
import { $ as $$Sejarah } from './sejarah_DGOf2E9p.mjs';
import { $ as $$Visimisi } from './visimisi_DZstaWae.mjs';
import { $ as $$Struktur } from './struktur_CUe2AKaj.mjs';
import { $ as $$Tujuan } from './tujuan_G1sJmz3p.mjs';
import { $ as $$Cta } from './cta_C0XU4REW.mjs';

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
