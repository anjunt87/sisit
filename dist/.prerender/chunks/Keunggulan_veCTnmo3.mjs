import { c as createComponent } from './astro-component_7ETOIUHv.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './prerender_CQg9tqRL.mjs';
import 'clsx';
import { k as keunggulan } from './tkit1_Di8AVOhR.mjs';

const $$Keunggulan = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-slate-50"> <div class="max-w-5xl mx-auto px-6"> <!-- HEADER --> <div class="text-center mb-12"> <span data-animate="fade-up" data-delay="100" class="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
Keunggulan
</span> <h2 data-animate="fade-up" data-delay="200" class="text-4xl md:text-5xl font-bold text-gray-800">
Keunggulan <span class="text-orange-600">Kami</span> </h2> </div> <!-- GRID --> <div data-animate="fade-up" data-delay="300" class="grid sm:grid-cols-2 gap-6"> ${keunggulan.map((item, i) => renderTemplate`<div class="bg-white border border-slate-200 rounded-3xl p-7 flex gap-5 hover:border-orange-300 hover:shadow-md transition"> <!-- ICON --> <div class="w-12 h-12 flex-shrink-0 bg-orange-600 text-white rounded-2xl flex items-center justify-center text-xl"> <i${addAttribute(`fas ${item.icon}`, "class")}></i> </div> <!-- CONTENT --> <div> <div class="flex items-center gap-2 mb-2"> <span class="w-6 h-6 rounded-full bg-orange-100 text-orange-700 text-xs font-bold flex items-center justify-center"> ${i + 1} </span> <h3 class="text-base font-bold text-slate-800"> ${item.title} </h3> </div> <p class="text-sm text-slate-600 leading-relaxed"> ${item.desc} </p> </div> </div>`)} </div> </div> </section>`;
}, "C:/laragon/www/sisit-niis/src/pages/unit/tkit1/Keunggulan.astro", void 0);

const $$file = "C:/laragon/www/sisit-niis/src/pages/unit/tkit1/Keunggulan.astro";
const $$url = "/unit/tkit1/Keunggulan";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Keunggulan,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Keunggulan as $, _page as _ };
