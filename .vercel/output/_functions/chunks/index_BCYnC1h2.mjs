import { c as createComponent } from './astro-component_D77M9rGE.mjs';
import 'piccolore';
import { n as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_uw6GGwwS.mjs';
import { r as renderScript } from './script_Dq8pU697.mjs';
import { $ as $$BaseLayout } from './BaseLayout_-31gxKTm.mjs';
import { n as newsList } from './news_CGH7LfYe.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const categories = ["Semua", "Kegiatan", "Prestasi", "Pengumuman"];
  const featured = newsList[0];
  const rest = newsList.slice(1);
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": "Berita & Kegiatan — Nurul Imam Islamic School", "data-astro-cid-izbrhzpm": true }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<section class="news-page" data-astro-cid-izbrhzpm> <div class="news-wrap" data-astro-cid-izbrhzpm> <!-- Masthead --> <div class="masthead" data-astro-cid-izbrhzpm> <div data-astro-cid-izbrhzpm> <div class="masthead-label" data-astro-cid-izbrhzpm>Nurul Imam Islamic School</div> <h1 class="masthead-title" data-astro-cid-izbrhzpm>Berita &amp; Kegiatan</h1> </div> <div class="masthead-sub" data-astro-cid-izbrhzpm>
Informasi seputar kegiatan, prestasi, dan perkembangan sekolah kami
<div class="masthead-date" data-astro-cid-izbrhzpm> ${(/* @__PURE__ */ new Date()).toLocaleDateString("id-ID", {
    month: "long",
    year: "numeric"
  })} </div> </div> </div> <!-- Filter --> <div class="filter-row" data-astro-cid-izbrhzpm> ${categories.map((cat) => renderTemplate`<button${addAttribute(`filter-btn${cat === "Semua" ? " active" : ""}`, "class")}${addAttribute(cat.toLowerCase(), "data-filter")} data-astro-cid-izbrhzpm> ${cat} </button>`)} </div> <!-- Featured --> ${featured && renderTemplate`<div class="featured news-card"${addAttribute(featured.category.toLowerCase(), "data-category")} data-astro-cid-izbrhzpm> <a${addAttribute(`/berita/${featured.id}`, "href")} class="featured-img-wrap" data-astro-cid-izbrhzpm> <img${addAttribute(featured.image, "src")}${addAttribute(featured.title, "alt")} loading="eager" class="featured-img" data-astro-cid-izbrhzpm> </a> <div class="featured-body" data-astro-cid-izbrhzpm> <div data-astro-cid-izbrhzpm> <div class="featured-kicker" data-astro-cid-izbrhzpm>Utama · ${featured.category}</div> <h2 class="featured-title" data-astro-cid-izbrhzpm> <a${addAttribute(`/berita/${featured.id}`, "href")} data-astro-cid-izbrhzpm>${featured.title}</a> </h2> <p class="featured-desc" data-astro-cid-izbrhzpm>${featured.description}</p> </div> <div class="featured-bottom" data-astro-cid-izbrhzpm> <span class="featured-meta" data-astro-cid-izbrhzpm> ${featured.date} · ${featured.readTime} menit baca
</span> <a${addAttribute(`/berita/${featured.id}`, "href")} class="card-link" data-astro-cid-izbrhzpm>
Baca selengkapnya
<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" data-astro-cid-izbrhzpm> <path d="M2 10L10 2M10 2H4M10 2v6" data-astro-cid-izbrhzpm></path> </svg> </a> </div> </div> </div>`} <!-- Grid --> <div class="card-grid" id="cardGrid" data-astro-cid-izbrhzpm> ${rest.map((item) => renderTemplate`<article class="card news-card"${addAttribute(item.category.toLowerCase(), "data-category")} data-astro-cid-izbrhzpm> <a${addAttribute(`/berita/${item.id}`, "href")} class="card-img-wrap" data-astro-cid-izbrhzpm> <img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} loading="lazy" class="card-img" data-astro-cid-izbrhzpm> </a> <span class="card-cat" data-astro-cid-izbrhzpm>${item.category}</span> <h2 class="card-title" data-astro-cid-izbrhzpm> <a${addAttribute(`/berita/${item.id}`, "href")} data-astro-cid-izbrhzpm>${item.title}</a> </h2> <p class="card-desc" data-astro-cid-izbrhzpm>${item.description}</p> <div class="card-meta" data-astro-cid-izbrhzpm> <span data-astro-cid-izbrhzpm>${item.date}</span> <span data-astro-cid-izbrhzpm>${item.readTime} mnt baca</span> </div> <a${addAttribute(`/berita/${item.id}`, "href")} class="card-link" data-astro-cid-izbrhzpm>
Baca selengkapnya
<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" data-astro-cid-izbrhzpm> <path d="M2 10L10 2M10 2H4M10 2v6" data-astro-cid-izbrhzpm></path> </svg> </a> </article>`)} </div> </div> </section> `, "head": ($$result2) => renderTemplate`<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">` })}  ${renderScript($$result, "C:/laragon/www/sisit-niis/src/pages/berita/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/laragon/www/sisit-niis/src/pages/berita/index.astro", void 0);

const $$file = "C:/laragon/www/sisit-niis/src/pages/berita/index.astro";
const $$url = "/berita";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
