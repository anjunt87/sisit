import { c as createComponent } from './astro-component_D77M9rGE.mjs';
import 'piccolore';
import { n as renderComponent, r as renderTemplate } from './entrypoint_uw6GGwwS.mjs';
import { $ as $$BaseLayout } from './BaseLayout_-31gxKTm.mjs';
import { s as stats, p as pimpinan, c as categories, g as gallery, a as prosesPembelajaran, b as statistik, i as identitas } from './smpit_Ufx7K2Sy.mjs';
import { $ as $$Hero } from './Hero_Bsl3j3jn.mjs';
import { $ as $$Stats } from './Stats_DdyirWys.mjs';
import { $ as $$Tentang } from './Tentang_B60LPnI_.mjs';
import { $ as $$Pimpinan } from './Pimpinan_DNJeOKw4.mjs';
import { $ as $$Keunggulan } from './Keunggulan_BT7z936o.mjs';
import { $ as $$Visimisi } from './Visimisi_B5NF7GH2.mjs';
import { $ as $$Kompetensi } from './Kompetensi_CNW2gvax.mjs';
import { $ as $$Ekskul } from './Ekskul_BmWKvUMR.mjs';
import { $ as $$Gallery } from './Gallery_BiLYkKjB.mjs';
import { $ as $$Statistik } from './Statistik_CwISboot.mjs';
import { $ as $$Identitas } from './Identitas_C-F7_r0y.mjs';
import { $ as $$CTA } from './CTA_DyXgDfsV.mjs';

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
