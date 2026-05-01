import { c as createComponent } from './astro-component_7ETOIUHv.mjs';
import 'piccolore';
import { a as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender_CQg9tqRL.mjs';
import { r as renderScript } from './script_BFjaBY8H.mjs';
import { $ as $$BaseLayout } from './BaseLayout_C1y3sP9t.mjs';
import { f as facilities } from './facilities_yt00pBpJ.mjs';

const $$Facilities = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": "Fasilitas Sekolah", "description": "Sarana dan prasarana lengkap untuk mendukung proses belajar mengajar yang optimal." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <section class="facpage-section"> <!-- Dekorasi --> <div class="fac-bg" aria-hidden="true"></div> <div class="fac-orb fac-orb--1" aria-hidden="true"></div> <div class="fac-orb fac-orb--2" aria-hidden="true"></div> <div class="facpage-container"> <!-- Header --> <div class="facpage-header"> <a href="/" class="facpage-back"> <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"> <path d="M13 8H3M7 4L3 8l4 4"></path> </svg>
Kembali ke Beranda
</a> <span class="fac-badge" style="margin-top:1.5rem"> <span class="fac-badge-dot"></span>
Fasilitas Lengkap
</span> <h1 class="facpage-title">
Semua <em>Fasilitas</em> </h1> <p class="facpage-subtitle">
Klik salah satu fasilitas untuk melihat detail, foto, dan fitur lengkapnya.
</p> </div> <!-- Filter Tabs --> <div class="facpage-tabs" role="tablist" aria-label="Filter fasilitas"> <button class="facpage-tab active" data-filter="all" role="tab" aria-selected="true">
Semua
<span class="facpage-tab-count">${facilities.length}</span> </button> <button class="facpage-tab" data-filter="unggulan" role="tab" aria-selected="false">
Unggulan
<span class="facpage-tab-count">6</span> </button> <button class="facpage-tab" data-filter="pendukung" role="tab" aria-selected="false">
Pendukung
<span class="facpage-tab-count">${facilities.length - 6}</span> </button> </div> <!-- Grid --> <div class="facpage-grid" id="facpageGrid"> ${facilities.map((item, i) => renderTemplate`<article class="facpage-card"${addAttribute(`fac-card-${i}`, "id")}${addAttribute(i, "data-index")}${addAttribute(i < 6 ? "unggulan" : "pendukung", "data-type")} aria-expanded="false"> <!-- Card Header (selalu tampil) --> <div class="facpage-card-header"${addAttribute(`toggleCard(${i})`, "onclick")}> <div${addAttribute(`fac-icon-box ${item.bg}`, "class")}> <i${addAttribute(`${item.icon} ${item.color}`, "class")}></i> </div> <div class="facpage-card-info"> <h2 class="facpage-card-title">${item.title}</h2> <p class="facpage-card-desc">${item.desc}</p> </div> ${i < 6 && renderTemplate`<span class="facpage-badge-unggulan">Unggulan</span>`} <button class="facpage-toggle"${addAttribute(`Lihat detail ${item.title}`, "aria-label")} aria-expanded="false"${addAttribute(`fac-detail-${i}`, "aria-controls")}> <svg class="facpage-chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"> <path d="M4 6l4 4 4-4"></path> </svg> </button> </div> <!-- Detail Panel (expand) --> <div class="facpage-detail"${addAttribute(`fac-detail-${i}`, "id")} role="region"${addAttribute(`fac-card-${i}`, "aria-labelledby")} hidden> <!-- Gambar --> ${item.images && item.images.length > 0 ? renderTemplate`<div class="swiper fac-swiper"> <div class="swiper-wrapper"> ${item.images.map((img, idx) => renderTemplate`<div class="swiper-slide"> <img${addAttribute(img, "src")}${addAttribute(`Foto ${item.title}`, "alt")}${addAttribute(JSON.stringify(item.images), "data-gallery")}${addAttribute(idx, "data-index")} class="fac-img-click"> </div>`)} </div> <div class="swiper-button-prev"></div> <div class="swiper-button-next"></div> <div class="swiper-pagination"></div> </div>` : item.image ? renderTemplate`<img${addAttribute(item.image, "src")}${addAttribute(`Foto ${item.title}`, "alt")} class="facpage-detail-img fac-img-click"${addAttribute(JSON.stringify([item.image]), "data-gallery")} data-index="0">` : renderTemplate`<div class="facpage-detail-img-placeholder"> <i${addAttribute(`${item.icon} ${item.color}`, "class")}></i> <span>Foto segera hadir</span> </div>`} <!-- Deskripsi panjang --> ${item.detail && renderTemplate`<div class="facpage-detail-body"> <p class="facpage-detail-label">Deskripsi lengkap</p> <p class="facpage-detail-text">${item.detail}</p> </div>`} <!-- Fitur --> ${item.features && item.features.length > 0 && renderTemplate`<div class="facpage-detail-body"> <p class="facpage-detail-label">Fitur utama</p> <ul class="facpage-features"> ${item.features.map((ft) => renderTemplate`<li class="facpage-feature"> <span class="facpage-feature-check" aria-hidden="true">✓</span> ${ft} </li>`)} </ul> </div>`} <!-- Jika tidak ada detail sama sekali --> ${!item.detail && (!item.features || item.features.length === 0) && renderTemplate`<div class="facpage-detail-body"> <p class="facpage-detail-text" style="color:#9ca3af;font-style:italic">
Detail fasilitas ini sedang dalam penyusunan.
</p> </div>`} </div> </article>`)} </div> <!-- Empty state (tampil saat filter kosong) --> <div class="facpage-empty" id="facpageEmpty" hidden> <p>Tidak ada fasilitas dalam kategori ini.</p> </div> </div> <div id="galleryOverlay" class="fac-gallery-overlay"> <div class="fac-gallery-modal"> <button class="fac-gallery-close" id="galleryClose">✕</button> <div class="swiper fac-gallery-swiper"> <div class="swiper-wrapper" id="galleryWrapper"></div> <div class="swiper-button-prev"></div> <div class="swiper-button-next"></div> <div class="swiper-pagination"></div> </div> </div> </div> </section> </main> ` })}  ${renderScript($$result, "C:/laragon/www/sisit-niis/src/pages/facilities.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/laragon/www/sisit-niis/src/pages/facilities.astro", void 0);

const $$file = "C:/laragon/www/sisit-niis/src/pages/facilities.astro";
const $$url = "/facilities";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Facilities,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
