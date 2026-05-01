import { c as createComponent } from './astro-component_7ETOIUHv.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './prerender_CQg9tqRL.mjs';
import 'clsx';
import { b as statistik, a as prosesPembelajaran } from './smait_CG-55rtf.mjs';

const $$Statistik = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- ╔══════════════════════════════════════╗ --><!-- ║         STATISTIK SEKOLAH           ║ --><!-- ╚══════════════════════════════════════╝ -->${maybeRenderHead()}<section class="py-20 bg-white"> <div class="max-w-5xl mx-auto px-6"> <div class="text-center mb-12"> <span data-animate="fade-up" data-delay="100" class="inline-block bg-violet-100 text-violet-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
Statistik
</span> <h2 data-animate="fade-up" data-delay="200" class="text-4xl md:text-5xl font-bold text-gray-800">
Statistik <span class="text-violet-600">Sekolah</span> </h2> </div> <div data-animate="fade-up" data-delay="300" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12"> ${statistik.map((item) => renderTemplate`<div class="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center hover:border-violet-300 hover:bg-violet-50 transition"> <div class="w-10 h-10 bg-violet-100 text-violet-700 rounded-xl flex items-center justify-center mx-auto mb-3 text-lg"> <i${addAttribute(`fas ${item.icon}`, "class")}></i> </div> <div class="font-serif text-3xl font-bold text-violet-700 leading-none mb-1"> ${item.value} </div> <div class="text-xs text-slate-500 font-medium">${item.label}</div> </div>`)} </div> <div data-animate="fade-up" data-delay="400" class="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden"> <div class="bg-violet-700 px-8 py-4"> <h3 class="text-white font-bold text-lg flex items-center gap-2"> <i class="fas fa-chart-bar"></i> Proses Pembelajaran
</h3> </div> <div class="divide-y divide-slate-100"> ${prosesPembelajaran.map((row) => renderTemplate`<div class="grid grid-cols-2 px-8 py-3.5 hover:bg-violet-50 transition"> <span class="text-sm text-slate-500 font-medium"> ${row.label} </span> <span class="text-sm text-slate-800 font-bold">${row.value}</span> </div>`)} </div> </div> </div> </section>`;
}, "C:/laragon/www/sisit-niis/src/pages/unit/smait/Statistik.astro", void 0);

const $$file = "C:/laragon/www/sisit-niis/src/pages/unit/smait/Statistik.astro";
const $$url = "/unit/smait/Statistik";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Statistik,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Statistik as $, _page as _ };
