import { c as createComponent } from './astro-component_7ETOIUHv.mjs';
import 'piccolore';
import { a as renderComponent, r as renderTemplate } from './prerender_CQg9tqRL.mjs';
import { $ as $$BaseLayout } from './BaseLayout_C1y3sP9t.mjs';
import { s as stats, p as pimpinan, c as categories, g as gallery, a as prosesPembelajaran, b as statistik, i as identitas } from './sdit1_FUpMQKzs.mjs';
import { $ as $$Hero } from './Hero_CYh_Exui.mjs';
import { $ as $$Stats } from './Stats_CT-0QE5O.mjs';
import { $ as $$Tentang } from './Tentang_C5G9Gbdt.mjs';
import { $ as $$Pimpinan } from './Pimpinan_NTlvz3M0.mjs';
import { $ as $$Keunggulan } from './Keunggulan_BcYkQGFZ.mjs';
import { $ as $$Visimisi } from './Visimisi_C16PUd6f.mjs';
import { $ as $$Kompetensi } from './Kompetensi_DRhPQACN.mjs';
import { $ as $$Ekskul } from './Ekskul_CS2W4LtT.mjs';
import { $ as $$Gallery } from './Gallery_DyvdAImW.mjs';
import { $ as $$Statistik } from './Statistik_-6cCpteL.mjs';
import { $ as $$Identitas } from './Identitas_BoWGyNXg.mjs';
import { $ as $$CTA } from './CTA_DpUJUrut.mjs';

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
