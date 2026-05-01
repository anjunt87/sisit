import { c as createComponent } from './astro-component_7ETOIUHv.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './prerender_CQg9tqRL.mjs';
import 'clsx';
import { e as ekstrakurikuler } from './sdit1_FUpMQKzs.mjs';

const $$Ekskul = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- ╔══════════════════════════════════════╗ --><!-- ║        5. EKSTRAKURIKULER            ║ --><!-- ╚══════════════════════════════════════╝ -->${maybeRenderHead()}<section class="py-20 bg-white"> <div class="max-w-5xl mx-auto px-6"> <!-- Header --> <div class="text-center mb-12"> <span data-animate="fade-up" data-delay="100" class="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
Ekstrakurikuler
</span> <h2 data-animate="fade-up" data-delay="200" class="text-4xl md:text-5xl font-bold text-gray-800">
Kegiatan <span class="text-green-600">Ekstrakurikuler</span> </h2> <p data-animate="fade-up" data-delay="300" class="text-slate-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
Pengembangan bakat dan minat siswa melalui berbagai kegiatan ekstra yang
        beragam dan berkualitas
</p> </div> <!-- Grid --> <div data-animate="fade-up" data-delay="300" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${ekstrakurikuler.map((item) => renderTemplate`<div class="bg-white border border-slate-200 rounded-3xl p-6 hover:border-green-300 hover:shadow-lg transition duration-300 flex flex-col gap-4">  <div class="flex items-start gap-4"> <div class="w-12 h-12 flex-shrink-0 bg-green-600 text-white rounded-2xl flex items-center justify-center text-xl"> <i${addAttribute(`fas ${item.icon}`, "class")}></i> </div> <div> <span class="inline-block text-xs font-bold uppercase tracking-wider text-green-600 bg-green-50 px-2.5 py-1 rounded-full mb-1"> ${item.category} </span> <h3 class="text-lg font-bold text-slate-800">${item.name}</h3> </div> </div>  <p class="text-sm text-slate-600 leading-relaxed">${item.desc}</p> </div>`)} </div> </div> </section>`;
}, "C:/laragon/www/sisit-niis/src/pages/unit/sdit1/Ekskul.astro", void 0);

const $$file = "C:/laragon/www/sisit-niis/src/pages/unit/sdit1/Ekskul.astro";
const $$url = "/unit/sdit1/Ekskul";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Ekskul,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Ekskul as $, _page as _ };
