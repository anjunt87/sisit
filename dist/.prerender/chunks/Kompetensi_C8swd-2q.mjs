import { c as createComponent } from './astro-component_7ETOIUHv.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './prerender_CQg9tqRL.mjs';
import 'clsx';
import { d as kompetensi } from './smpit_Ufx7K2Sy.mjs';

const $$Kompetensi = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- ╔══════════════════════════════════════╗ --><!-- ║         KOMPETENSI LULUSAN          ║ --><!-- ╚══════════════════════════════════════╝ -->${maybeRenderHead()}<section class="py-20 bg-white"> <div class="max-w-5xl mx-auto px-6"> <div class="text-center mb-12"> <span data-animate="fade-up" data-delay="100" class="inline-block bg-sky-100 text-sky-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
Kompetensi
</span> <h2 data-animate="fade-up" data-delay="200" class="text-4xl md:text-5xl font-bold text-gray-800">
Kompetensi <span class="text-sky-500">Lulusan</span> </h2> <p data-animate="fade-up" data-delay="300" class="text-slate-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
Standar kompetensi lulusan SMPIT Bilingual Nurul Imam selama 3 (tiga)
        tahun pendidikan
</p> </div> <div data-animate="fade-up" data-delay="400" class="grid sm:grid-cols-2 gap-4"> ${kompetensi.map((item, i) => renderTemplate`<div class="flex items-start gap-4 bg-sky-50 border border-sky-100 rounded-2xl px-6 py-5 hover:border-sky-300 hover:shadow-sm transition"> <div class="w-10 h-10 flex-shrink-0 bg-sky-500 text-white rounded-xl flex items-center justify-center text-base"> <i${addAttribute(`fas ${item.icon}`, "class")}></i> </div> <div class="flex items-start gap-3"> <span class="w-5 h-5 rounded-full bg-sky-200 text-sky-800 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5"> ${i + 1} </span> <p class="text-sm text-slate-700 leading-relaxed font-medium"> ${item.text} </p> </div> </div>`)} </div> </div> </section>`;
}, "C:/laragon/www/sisit-niis/src/pages/unit/smpit/Kompetensi.astro", void 0);

const $$file = "C:/laragon/www/sisit-niis/src/pages/unit/smpit/Kompetensi.astro";
const $$url = "/unit/smpit/Kompetensi";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Kompetensi,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Kompetensi as $, _page as _ };
