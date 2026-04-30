import { c as createComponent } from './astro-component_D77M9rGE.mjs';
import 'piccolore';
import { m as maybeRenderHead, n as renderComponent, o as Fragment, r as renderTemplate, h as addAttribute } from './entrypoint_uw6GGwwS.mjs';
import { r as renderScript } from './script_Dq8pU697.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const stats = [
    { target: 1200, suffix: "+", label: "Siswa Aktif" },
    { target: 80, suffix: "+", label: "Tenaga Pendidik" },
    { target: 7, suffix: "", label: "Tahun Berdiri" },
    { target: 500, suffix: "+", label: "Alumni Berprestasi" }
  ];
  return renderTemplate`<!-- Hero Section -->${maybeRenderHead()}<section class="relative bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-600 pt-24 pb-0 overflow-hidden"> <div class="absolute inset-0 pointer-events-none" style="background-image: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.04) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(16,185,129,0.15) 0%, transparent 40%)"></div> <div class="max-w-5xl mx-auto px-6 relative"> <div class="flex items-center gap-12 flex-wrap"> <!-- Emblem --> <div class="relative w-36 h-36 flex-shrink-0 flex items-center justify-center"> <div class="absolute w-36 h-36 rounded-full border-2 border-dashed border-white/20 animate-spin" style="animation-duration:20s"></div> <div class="absolute w-28 h-28 rounded-full border-2 border-white/20 animate-spin" style="animation-duration:15s; animation-direction:reverse"></div> <div class="w-20 h-20 bg-white/10 backdrop-blur border-2 border-white/25 rounded-full flex items-center justify-center text-3xl text-amber-300"> <i class="fas fa-mosque"></i> </div> </div> <!-- Text --> <div class="flex-1 min-w-[280px]"> <span class="inline-block bg-white/10 border border-white/20 text-emerald-300 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
Profil Sekolah
</span> <h1 class="font-serif text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
Nurul Imam<br> <span class="text-amber-300">Islamic School</span> </h1> <p class="text-white/75 text-base leading-relaxed max-w-lg mb-6">
Mendidik Generasi Qurani yang Berakhlak Mulia, Berprestasi, dan
          Berdaya Saing Global
</p> <div class="flex flex-wrap gap-3"> <span class="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/90 text-sm font-medium px-3 py-1.5 rounded-full"> <i class="fas fa-award"></i> Terakreditasi A
</span> <span class="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/90 text-sm font-medium px-3 py-1.5 rounded-full"> <i class="fas fa-calendar"></i> Est. 2019
</span> <span class="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/90 text-sm font-medium px-3 py-1.5 rounded-full"> <i class="fas fa-map-marker-alt"></i> Karawang
</span> </div> </div> </div> </div> <!-- Wave --> <div class="mt-8 leading-none"> <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full block"> <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f8fafc"></path> </svg> </div> </section> <!-- Stats Bar --> <section class="bg-slate-50 border-b border-slate-200 py-8"> <div class="max-w-5xl mx-auto px-6"> <div class="flex flex-wrap items-center justify-center"> ${stats.map((stat, i) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="flex flex-col items-center px-10 py-2"> <span class="stat-counter font-serif text-4xl font-bold text-emerald-700 leading-none"${addAttribute(stat.target, "data-target")}${addAttribute(stat.suffix, "data-suffix")}>
0
</span> <span class="text-sm text-slate-600 font-medium mt-1"> ${stat.label} </span> </div> ${i < stats.length - 1 && renderTemplate`<div class="w-px h-10 bg-slate-200 hidden sm:block"></div>`}` })}`)} </div> </div> </section> ${renderScript($$result, "C:/laragon/www/sisit-niis/src/pages/about/hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/laragon/www/sisit-niis/src/pages/about/hero.astro", void 0);

const $$file = "C:/laragon/www/sisit-niis/src/pages/about/hero.astro";
const $$url = "/about/hero";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Hero,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Hero as $, _page as _ };
