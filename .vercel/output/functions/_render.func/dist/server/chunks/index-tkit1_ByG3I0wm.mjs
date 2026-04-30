import { c as createComponent } from './astro-component_D77M9rGE.mjs';
import 'piccolore';
import { n as renderComponent, r as renderTemplate } from './entrypoint_uw6GGwwS.mjs';
import { $ as $$BaseLayout } from './BaseLayout_-31gxKTm.mjs';
import { s as stats, p as pimpinan, c as categories, g as gallery, a as prosesPembelajaran, b as statistik, i as identitas } from './tkit1_Di8AVOhR.mjs';
import { $ as $$Hero } from './Hero_BoWVIoHq.mjs';
import { $ as $$Stats } from './Stats_hpZM92Uo.mjs';
import { $ as $$Tentang } from './Tentang_CE4Tj78P.mjs';
import { $ as $$Pimpinan } from './Pimpinan_n_URdiGN.mjs';
import { $ as $$Keunggulan } from './Keunggulan_CekjbvkF.mjs';
import { $ as $$Visimisi } from './Visimisi_CQJS_Lcb.mjs';
import { $ as $$Kompetensi } from './Kompetensi_b8VBML0S.mjs';
import { $ as $$Gallery } from './Gallery_DQAD_VCP.mjs';
import { $ as $$Statistik } from './Statistik_BFTSixzm.mjs';
import { $ as $$Identitas } from './Identitas_Dk_h_91Y.mjs';
import { $ as $$CTA } from './CTA_CzUiKNiE.mjs';

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
