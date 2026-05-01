import { c as createComponent } from './astro-component_7ETOIUHv.mjs';
import 'piccolore';
import { a as renderComponent, r as renderTemplate } from './prerender_CQg9tqRL.mjs';
import { $ as $$BaseLayout } from './BaseLayout_C1y3sP9t.mjs';
import { s as stats, p as pimpinan, c as categories, g as gallery, a as prosesPembelajaran, b as statistik, i as identitas } from './smpit_Ufx7K2Sy.mjs';
import { $ as $$Hero } from './Hero_BJ1cEZCA.mjs';
import { $ as $$Stats } from './Stats_DHHXEmMe.mjs';
import { $ as $$Tentang } from './Tentang_DdMPG_mE.mjs';
import { $ as $$Pimpinan } from './Pimpinan_CdR0H8Yi.mjs';
import { $ as $$Keunggulan } from './Keunggulan_VD1MxfzI.mjs';
import { $ as $$Visimisi } from './Visimisi_BALKuQYV.mjs';
import { $ as $$Kompetensi } from './Kompetensi_C8swd-2q.mjs';
import { $ as $$Ekskul } from './Ekskul_CGJuNrSc.mjs';
import { $ as $$Gallery } from './Gallery_DVepHoez.mjs';
import { $ as $$Statistik } from './Statistik_rSOlCqvW.mjs';
import { $ as $$Identitas } from './Identitas_CrreHzeP.mjs';
import { $ as $$CTA } from './CTA_D9uEqWlm.mjs';

const $$IndexSmpit = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Profil SMPIT Bilingual Nurul Imam", "description": "Profil lengkap SMPIT Bilingual Nurul Imam dengan program unggulan dan sistem pembelajaran modern.", "theme": "sky" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Stats", $$Stats, { "stats": stats })} ${renderComponent($$result2, "Tentang", $$Tentang, {})} ${renderComponent($$result2, "Pimpinan", $$Pimpinan, { "pimpinan": pimpinan })} ${renderComponent($$result2, "Keunggulan", $$Keunggulan, {})} ${renderComponent($$result2, "Visimisi", $$Visimisi, {})} ${renderComponent($$result2, "Kompetensi", $$Kompetensi, {})} ${renderComponent($$result2, "Ekskul", $$Ekskul, {})} ${renderComponent($$result2, "Gallery", $$Gallery, { "gallery": gallery, "categories": categories })} ${renderComponent($$result2, "Statistik", $$Statistik, { "statistik": statistik, "proses": prosesPembelajaran })} ${renderComponent($$result2, "Identitas", $$Identitas, { "identitas": identitas })} ${renderComponent($$result2, "CTA", $$CTA, {})} ` })}`;
}, "C:/laragon/www/sisit-niis/src/pages/unit/index-smpit.astro", void 0);

const $$file = "C:/laragon/www/sisit-niis/src/pages/unit/index-smpit.astro";
const $$url = "/unit/index-smpit";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$IndexSmpit,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
