import { c as createComponent } from './astro-component_D77M9rGE.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './entrypoint_uw6GGwwS.mjs';
import 'clsx';
import { i as identitas } from './tkit1_Di8AVOhR.mjs';

const $$Identitas = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- ╔══════════════════════════════════════╗ --><!-- ║          IDENTITAS SEKOLAH          ║ --><!-- ╚══════════════════════════════════════╝ -->${maybeRenderHead()}<section class="py-20 bg-slate-50"> <div class="max-w-5xl mx-auto px-6"> <div class="text-center mb-12"> <span class="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
Identitas
</span> <h2 class="text-4xl md:text-5xl font-bold text-gray-800">
Identitas <span class="text-orange-600">TK Nurul Imam</span> </h2> </div> <div class="relative bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm"> <div class="absolute top-0 right-0 w-48 h-48 pointer-events-none overflow-hidden"> <div class="absolute w-36 h-36 -top-14 -right-14 bg-orange-50 rounded-full"></div> <div class="absolute w-20 h-20 top-5 right-5 bg-orange-100 rounded-full"></div> </div> <div class="relative divide-y divide-slate-100"> ${identitas.map((row) => renderTemplate`<div class="grid grid-cols-[180px_1fr] sm:grid-cols-[220px_1fr] px-6 sm:px-8 py-4 hover:bg-orange-50 transition"> <div class="flex items-center gap-2.5 text-sm font-semibold text-slate-500"> <i${addAttribute(`fas ${row.icon} text-orange-600 w-4`, "class")}></i> ${row.label} </div> <div class="text-sm text-slate-700 font-medium leading-relaxed"> ${row.value} </div> </div>`)} </div> </div> </div> </section>`;
}, "C:/laragon/www/sisit-niis/src/pages/unit/tkit1/Identitas.astro", void 0);

const $$file = "C:/laragon/www/sisit-niis/src/pages/unit/tkit1/Identitas.astro";
const $$url = "/unit/tkit1/Identitas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Identitas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Identitas as $, _page as _ };
