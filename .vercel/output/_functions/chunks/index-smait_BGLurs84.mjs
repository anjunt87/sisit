import { c as createComponent } from './astro-component_D77M9rGE.mjs';
import 'piccolore';
import { n as renderComponent, r as renderTemplate } from './entrypoint_uw6GGwwS.mjs';
import { $ as $$BaseLayout } from './BaseLayout_-31gxKTm.mjs';
import { s as stats, p as pimpinan, c as categories, g as gallery, a as prosesPembelajaran, b as statistik, i as identitas } from './smait_CG-55rtf.mjs';
import { $ as $$Hero } from './Hero_sRVvzZ3A.mjs';
import { $ as $$Stats } from './Stats_Blle9yC3.mjs';
import { $ as $$Tentang } from './Tentang_D4RXb5FU.mjs';
import { $ as $$Visimisi } from './Visimisi_Dyv1PMSd.mjs';
import { $ as $$Pimpinan } from './Pimpinan_ByO2_nYi.mjs';
import { $ as $$Keunggulan } from './Keunggulan_C6KGdCbN.mjs';
import { $ as $$Kompetensi } from './Kompetensi_DzR0E_cy.mjs';
import { $ as $$Ekskul } from './Ekskul_D07i5nVE.mjs';
import { $ as $$Gallery } from './Gallery_CWrJXtGn.mjs';
import { $ as $$Statistik } from './Statistik_D3SxBiJc.mjs';
import { $ as $$Identitas } from './Identitas_CJTyAMOf.mjs';
import { $ as $$CTA } from './CTA_mB24XwAy.mjs';

const $$IndexSmait = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Profil SMAIT Bilingual Nurul Imam Karawang", "description": "Profil SMAIT Bilingual Nurul Imam Karawang, sekolah menengah atas Islam terpadu bilingual dengan kurikulum merdeka dan pembelajaran full day school.", "theme": "violet" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Stats", $$Stats, { "stats": stats })} ${renderComponent($$result2, "Tentang", $$Tentang, {})} ${renderComponent($$result2, "Pimpinan", $$Pimpinan, { "pimpinan": pimpinan })} ${renderComponent($$result2, "Keunggulan", $$Keunggulan, {})} ${renderComponent($$result2, "Visimisi", $$Visimisi, {})} ${renderComponent($$result2, "Kompetensi", $$Kompetensi, {})} ${renderComponent($$result2, "Ekskul", $$Ekskul, {})} ${renderComponent($$result2, "Gallery", $$Gallery, { "gallery": gallery, "categories": categories })} ${renderComponent($$result2, "Statistik", $$Statistik, { "statistik": statistik, "proses": prosesPembelajaran })} ${renderComponent($$result2, "Identitas", $$Identitas, { "identitas": identitas })} ${renderComponent($$result2, "CTA", $$CTA, {})} ` })}`;
}, "C:/laragon/www/sisit-niis/src/pages/unit/index-smait.astro", void 0);

const $$file = "C:/laragon/www/sisit-niis/src/pages/unit/index-smait.astro";
const $$url = "/unit/index-smait";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$IndexSmait,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
