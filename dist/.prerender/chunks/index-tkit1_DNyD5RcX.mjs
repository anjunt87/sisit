import { c as createComponent } from './astro-component_7ETOIUHv.mjs';
import 'piccolore';
import { a as renderComponent, r as renderTemplate } from './prerender_CQg9tqRL.mjs';
import { $ as $$BaseLayout } from './BaseLayout_C1y3sP9t.mjs';
import { s as stats, p as pimpinan, c as categories, g as gallery, a as prosesPembelajaran, b as statistik, i as identitas } from './tkit1_Di8AVOhR.mjs';
import { $ as $$Hero } from './Hero_SCVVU0Ix.mjs';
import { $ as $$Stats } from './Stats_BCSO9j65.mjs';
import { $ as $$Tentang } from './Tentang_B-0Bx4Eg.mjs';
import { $ as $$Pimpinan } from './Pimpinan_Dw85uz2r.mjs';
import { $ as $$Keunggulan } from './Keunggulan_veCTnmo3.mjs';
import { $ as $$Visimisi } from './Visimisi_DlOM4LUD.mjs';
import { $ as $$Kompetensi } from './Kompetensi_CbjQSQzO.mjs';
import { $ as $$Gallery } from './Gallery_DObXUpap.mjs';
import { $ as $$Statistik } from './Statistik_BrdQUBP4.mjs';
import { $ as $$Identitas } from './Identitas_BpP9lKly.mjs';
import { $ as $$CTA } from './CTA_fckx1ZVc.mjs';

const $$IndexTkit1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Profil TKIT Nurul Imam Karawang 1", "description": "Profil lengkap TKIT Nurul Imam Karawang, sekolah dasar Islam terpadu dengan akreditasi A, kurikulum merdeka dan pembelajaran full day school.", "theme": "orange" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Stats", $$Stats, { "stats": stats })} ${renderComponent($$result2, "Tentang", $$Tentang, {})} ${renderComponent($$result2, "Pimpinan", $$Pimpinan, { "pimpinan": pimpinan })} ${renderComponent($$result2, "Keunggulan", $$Keunggulan, {})} ${renderComponent($$result2, "Visimisi", $$Visimisi, {})} ${renderComponent($$result2, "Kompetensi", $$Kompetensi, {})} ${renderComponent($$result2, "Gallery", $$Gallery, { "gallery": gallery, "categories": categories })} ${renderComponent($$result2, "Statistik", $$Statistik, { "statistik": statistik, "proses": prosesPembelajaran })} ${renderComponent($$result2, "Identitas", $$Identitas, { "identitas": identitas })} ${renderComponent($$result2, "CTA", $$CTA, {})} ` })}`;
}, "C:/laragon/www/sisit-niis/src/pages/unit/index-tkit1.astro", void 0);

const $$file = "C:/laragon/www/sisit-niis/src/pages/unit/index-tkit1.astro";
const $$url = "/unit/index-tkit1";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$IndexTkit1,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
