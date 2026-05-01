import { c as createComponent } from './astro-component_7ETOIUHv.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './prerender_CQg9tqRL.mjs';
import 'clsx';
import { k as keunggulan } from './sdit1_FUpMQKzs.mjs';

const $$Keunggulan = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- ╔══════════════════════════════════════╗ --><!-- ║        4. KEUNGGULAN SEKOLAH         ║ --><!-- ╚══════════════════════════════════════╝ -->${maybeRenderHead()}<section class="py-20 bg-slate-50"> <div class="max-w-5xl mx-auto px-6"> <div class="text-center mb-12"> <span data-animate="fade-up" data-delay="100" class="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
Keunggulan
</span> <h2 data-animate="fade-up" data-delay="200" class="text-4xl md:text-5xl font-bold text-gray-800">
Keunggulan <span class="text-green-600">Kami</span> </h2> </div> <div data-animate="fade-up" data-delay="300" class="grid sm:grid-cols-2 gap-6"> ${keunggulan.map((item, i) => renderTemplate`<div class="bg-white border border-slate-200 rounded-3xl p-7 flex gap-5 hover:border-emerald-300 hover:shadow-md transition"> <div class="w-12 h-12 flex-shrink-0 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-xl"> <i${addAttribute(`fas ${item.icon}`, "class")}></i> </div> <div> <div class="flex items-center gap-2 mb-2"> <span class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center"> ${i + 1} </span> <h3 class="text-base font-bold text-slate-800">${item.title}</h3> </div> <p class="text-sm text-slate-600 leading-relaxed">${item.desc}</p> </div> </div>`)} </div> </div> </section>`;
}, "C:/laragon/www/sisit-niis/src/pages/unit/sdit2/Keunggulan.astro", void 0);

const $$file = "C:/laragon/www/sisit-niis/src/pages/unit/sdit2/Keunggulan.astro";
const $$url = "/unit/sdit2/Keunggulan";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Keunggulan,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Keunggulan as $, _page as _ };
