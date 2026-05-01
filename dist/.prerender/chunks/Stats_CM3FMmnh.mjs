import { c as createComponent } from './astro-component_7ETOIUHv.mjs';
import 'piccolore';
import { m as maybeRenderHead, a as renderComponent, F as Fragment, r as renderTemplate, b as addAttribute } from './prerender_CQg9tqRL.mjs';
import { r as renderScript } from './script_BFjaBY8H.mjs';
import { s as stats } from './sdit1_FUpMQKzs.mjs';

const $$Stats = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Stats Bar -->${maybeRenderHead()}<section class="bg-slate-50 border-b border-slate-200 py-8"> <div class="max-w-5xl mx-auto px-6"> <div class="flex flex-wrap items-center justify-center"> ${stats.map((stat, i) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="flex flex-col items-center px-10 py-2"> <span class="stat-counter font-serif text-4xl font-bold text-emerald-700 leading-none"${addAttribute(stat.target, "data-target")}${addAttribute(stat.suffix, "data-suffix")}>
0
</span> <span class="text-sm text-slate-600 font-medium mt-1"> ${stat.label} </span> </div> ${i < stats.length - 1 && renderTemplate`<div class="w-px h-10 bg-slate-200 hidden sm:block"></div>`}` })}`)} </div> </div> </section> ${renderScript($$result, "C:/laragon/www/sisit-niis/src/pages/unit/sdit3/Stats.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/laragon/www/sisit-niis/src/pages/unit/sdit3/Stats.astro", void 0);

const $$file = "C:/laragon/www/sisit-niis/src/pages/unit/sdit3/Stats.astro";
const $$url = "/unit/sdit3/Stats";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Stats,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Stats as $, _page as _ };
