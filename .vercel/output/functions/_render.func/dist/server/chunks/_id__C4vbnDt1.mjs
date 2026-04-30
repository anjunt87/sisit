import { c as createComponent } from './astro-component_D77M9rGE.mjs';
import 'piccolore';
import { n as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_uw6GGwwS.mjs';
import { r as renderScript } from './script_Dq8pU697.mjs';
import { $ as $$BaseLayout } from './BaseLayout_-31gxKTm.mjs';
import { n as newsList } from './news_CGH7LfYe.mjs';

function getStaticPaths() {
  return newsList.map((item) => ({
    params: { id: item.id },
    props: { item }
  }));
}
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$id;
  const { item } = Astro2.props;
  const related = newsList.filter((n) => n.id !== item.id).slice(0, 3);
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": `${item.title} — Nurul Imam Islamic School`, "data-astro-cid-7xykwxen": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<article class="article-wrap" data-astro-cid-7xykwxen> <!-- ── HERO ── --> <div class="hero" data-astro-cid-7xykwxen> <img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} class="hero__img" data-astro-cid-7xykwxen> <div class="hero__vignette" data-astro-cid-7xykwxen></div> <!-- 
      <a
        href="/berita"
        class="hero__back"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M13 8H3M7 4l-4 4 4 4"></path>
        </svg>
        Semua Berita
      </a> --> <div class="hero__content" data-astro-cid-7xykwxen> <span class="hero__cat" data-astro-cid-7xykwxen>${item.category}</span> <h1 class="hero__title" data-astro-cid-7xykwxen>${item.title}</h1> <div class="hero__meta" data-astro-cid-7xykwxen> <span data-astro-cid-7xykwxen>${item.date}</span> <span class="hero__meta-dot" data-astro-cid-7xykwxen></span> <span data-astro-cid-7xykwxen>${item.readTime} menit baca</span> <span class="hero__meta-dot" data-astro-cid-7xykwxen></span> <span data-astro-cid-7xykwxen>Nurul Imam Islamic School</span> </div> </div> </div> <!-- ── CONTENT ── --> <div class="content-wrap" data-astro-cid-7xykwxen> <!-- Main --> <main data-astro-cid-7xykwxen> <p class="article-lead" data-astro-cid-7xykwxen>${item.description}</p> <hr class="article-rule" data-astro-cid-7xykwxen> <div class="article-body" data-astro-cid-7xykwxen>${item.content}</div> <!-- Share --> <div class="share-block" data-astro-cid-7xykwxen> <span class="share-label" data-astro-cid-7xykwxen>Bagikan</span> <a${addAttribute(`https://wa.me/?text=${encodeURIComponent(item.title + " — " + Astro2.url.href)}`, "href")} target="_blank" rel="noopener noreferrer" class="share-btn share-btn--wa" data-astro-cid-7xykwxen> <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-7xykwxen> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" data-astro-cid-7xykwxen></path> </svg>
WhatsApp
</a> <button id="copyLink" class="share-btn share-btn--copy" data-astro-cid-7xykwxen> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-7xykwxen> <rect x="9" y="9" width="13" height="13" rx="2" data-astro-cid-7xykwxen></rect> <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" data-astro-cid-7xykwxen></path> </svg>
Salin Tautan
</button> </div> </main> <!-- Sidebar --> <aside class="sidebar" data-astro-cid-7xykwxen> <div class="sidebar-sticky" data-astro-cid-7xykwxen> <!-- Info --> <div class="sidebar-info" data-astro-cid-7xykwxen> <p class="sidebar-section-label" data-astro-cid-7xykwxen>Detail Berita</p> <p data-astro-cid-7xykwxen> <strong data-astro-cid-7xykwxen>Tanggal</strong> ${item.date} </p> <p data-astro-cid-7xykwxen> <strong data-astro-cid-7xykwxen>Kategori</strong> ${item.category} </p> <p data-astro-cid-7xykwxen> <strong data-astro-cid-7xykwxen>Estimasi Baca</strong> ${item.readTime} menit
</p> <p data-astro-cid-7xykwxen> <strong data-astro-cid-7xykwxen>Sumber</strong>
Nurul Imam Islamic School
</p> </div> <!-- Pull quote --> <div class="sidebar-quote" data-astro-cid-7xykwxen> <p class="sidebar-section-label" data-astro-cid-7xykwxen>Sorotan</p> <blockquote data-astro-cid-7xykwxen>"${item.description}"</blockquote> <cite data-astro-cid-7xykwxen>— Tim Redaksi</cite> </div> </div> </aside> </div> <!-- ── RELATED ── --> ${related.length > 0 && renderTemplate`<section class="related-section" data-astro-cid-7xykwxen> <div class="related-inner" data-astro-cid-7xykwxen> <div class="related-header" data-astro-cid-7xykwxen> <span class="related-label" data-astro-cid-7xykwxen>Baca Juga</span> <h2 class="related-title" data-astro-cid-7xykwxen>Berita Lainnya</h2> </div> <div class="related-grid" data-astro-cid-7xykwxen> ${related.map((rel) => renderTemplate`<a${addAttribute(`/berita/${rel.id}`, "href")} class="related-card" data-astro-cid-7xykwxen> <img${addAttribute(rel.image, "src")}${addAttribute(rel.title, "alt")} loading="lazy" data-astro-cid-7xykwxen> <div class="related-card-body" data-astro-cid-7xykwxen> <span class="related-card-cat" data-astro-cid-7xykwxen>${rel.category}</span> <p class="related-card-title" data-astro-cid-7xykwxen>${rel.title}</p> <span class="related-card-date" data-astro-cid-7xykwxen>${rel.date}</span> </div> </a>`)} </div> </div> </section>`} </article> ${renderScript($$result2, "C:/laragon/www/sisit-niis/src/pages/berita/[id].astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/laragon/www/sisit-niis/src/pages/berita/[id].astro", void 0);

const $$file = "C:/laragon/www/sisit-niis/src/pages/berita/[id].astro";
const $$url = "/berita/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
