import { c as createComponent } from './astro-component_7ETOIUHv.mjs';
import 'piccolore';
import { a as renderComponent, r as renderTemplate } from './prerender_CQg9tqRL.mjs';
import { $ as $$BaseLayout } from './BaseLayout_C1y3sP9t.mjs';
import { s as stats, p as pimpinan, c as categories, g as gallery, a as prosesPembelajaran, b as statistik, i as identitas } from './smait_CG-55rtf.mjs';
import { $ as $$Hero } from './Hero_MYBnokEt.mjs';
import { $ as $$Stats } from './Stats_Be6xWW02.mjs';
import { $ as $$Tentang } from './Tentang_Domr974y.mjs';
import { $ as $$Visimisi } from './Visimisi_Ccu_9jE-.mjs';
import { $ as $$Pimpinan } from './Pimpinan_CJMqcNnY.mjs';
import { $ as $$Keunggulan } from './Keunggulan_DuHi3iNO.mjs';
import { $ as $$Kompetensi } from './Kompetensi_D7O2lPTt.mjs';
import { $ as $$Ekskul } from './Ekskul_B9PQrFSU.mjs';
import { $ as $$Gallery } from './Gallery_CZ5nS2uc.mjs';
import { $ as $$Statistik } from './Statistik_GLXNi3mw.mjs';
import { $ as $$Identitas } from './Identitas_DX19rYmm.mjs';
import { $ as $$CTA } from './CTA_DXtMioEN.mjs';

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
