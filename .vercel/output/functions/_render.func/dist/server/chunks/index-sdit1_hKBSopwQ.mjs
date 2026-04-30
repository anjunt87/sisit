import { c as createComponent } from './astro-component_D77M9rGE.mjs';
import 'piccolore';
import { n as renderComponent, r as renderTemplate } from './entrypoint_uw6GGwwS.mjs';
import { $ as $$BaseLayout } from './BaseLayout_-31gxKTm.mjs';
import { s as stats, p as pimpinan, c as categories, g as gallery, a as prosesPembelajaran, b as statistik, i as identitas } from './sdit1_FUpMQKzs.mjs';
import { $ as $$Hero } from './Hero_BZ-tw-6V.mjs';
import { $ as $$Stats } from './Stats_DQwVp02m.mjs';
import { $ as $$Tentang } from './Tentang_CXEIE_t3.mjs';
import { $ as $$Pimpinan } from './Pimpinan_B5SrYzVj.mjs';
import { $ as $$Keunggulan } from './Keunggulan_m52n_zdM.mjs';
import { $ as $$Visimisi } from './Visimisi_C0cF8z3p.mjs';
import { $ as $$Kompetensi } from './Kompetensi_BenyfB_L.mjs';
import { $ as $$Ekskul } from './Ekskul_DHte8j1J.mjs';
import { $ as $$Gallery } from './Gallery_rl7zo7wV.mjs';
import { $ as $$Statistik } from './Statistik_DdS3P0Q5.mjs';
import { $ as $$Identitas } from './Identitas_Uce9Owk2.mjs';
import { $ as $$CTA } from './CTA_COyLznly.mjs';

const $$IndexSdit1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Profil SDIT Nurul Imam Karawang 1", "description": "Profil lengkap SDIT Nurul Imam Karawang, sekolah dasar Islam terpadu dengan akreditasi A, kurikulum merdeka dan pembelajaran full day school.", "theme": "green" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Stats", $$Stats, { "stats": stats })} ${renderComponent($$result2, "Tentang", $$Tentang, {})} ${renderComponent($$result2, "Pimpinan", $$Pimpinan, { "pimpinan": pimpinan })} ${renderComponent($$result2, "Keunggulan", $$Keunggulan, {})} ${renderComponent($$result2, "Visimisi", $$Visimisi, {})} ${renderComponent($$result2, "Kompetensi", $$Kompetensi, {})} ${renderComponent($$result2, "Ekskul", $$Ekskul, {})} ${renderComponent($$result2, "Gallery", $$Gallery, { "gallery": gallery, "categories": categories })} ${renderComponent($$result2, "Statistik", $$Statistik, { "statistik": statistik, "proses": prosesPembelajaran })} ${renderComponent($$result2, "Identitas", $$Identitas, { "identitas": identitas })} ${renderComponent($$result2, "CTA", $$CTA, {})} ` })}`;
}, "C:/laragon/www/sisit-niis/src/pages/unit/index-sdit1.astro", void 0);

const $$file = "C:/laragon/www/sisit-niis/src/pages/unit/index-sdit1.astro";
const $$url = "/unit/index-sdit1";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$IndexSdit1,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
