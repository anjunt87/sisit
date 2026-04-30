import { c as createComponent } from './astro-component_D77M9rGE.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './entrypoint_uw6GGwwS.mjs';
import 'clsx';
import { c as categories, g as gallery } from './sdit1_FUpMQKzs.mjs';

const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- ╔══════════════════════════════════════╗ --><!-- ║        6. GALLERY + FILTER           ║ --><!-- ╚══════════════════════════════════════╝ -->${maybeRenderHead()}<section class="py-20 bg-slate-50"> <div class="max-w-7xl mx-auto px-6"> <div class="text-center mb-10"> <span data-animate="fade-up" data-delay="100" class="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
Gallery
</span> <h2 data-animate="fade-up" data-delay="200" class="text-4xl md:text-5xl font-bold text-gray-800">
Dokumentasi <span class="text-green-600">Kegiatan Sekolah</span> </h2> </div> <div data-animate="fade-up" data-delay="300" class="flex flex-wrap justify-center gap-2 mb-10" id="gallery-filters"> ${categories.map((cat) => renderTemplate`<button${addAttribute(cat === "Semua" ? "all" : cat, "data-filter")}${addAttribute(`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200
              ${cat === "Semua" ? "bg-emerald-600 text-white border-emerald-600" : "bg-white text-slate-600 border-slate-200 hover:border-emerald-400 hover:text-emerald-600"}`, "class")}> ${cat} </button>`)} </div> <div data-animate="fade-up" data-delay="400" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" id="gallery-grid"> ${gallery.map((item) => renderTemplate`<div class="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"${addAttribute(item.category, "data-category")}> <div class="overflow-hidden bg-slate-100"> <img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} loading="lazy" class="w-full h-64 object-cover group-hover:scale-110 transition duration-500"> </div> <div class="p-6"> <span class="inline-block text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mb-3"> ${item.category} </span> <h3 class="text-xl font-bold text-slate-900">${item.title}</h3> </div> </div>`)} </div> </div> </section>`;
}, "C:/laragon/www/sisit-niis/src/pages/unit/sdit1/Gallery.astro", void 0);

const $$file = "C:/laragon/www/sisit-niis/src/pages/unit/sdit1/Gallery.astro";
const $$url = "/unit/sdit1/Gallery";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Gallery,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Gallery as $, _page as _ };
