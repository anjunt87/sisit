import { c as createComponent } from './astro-component_7ETOIUHv.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderTemplate } from './prerender_CQg9tqRL.mjs';
import 'clsx';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- ╔══════════════════════════════════════╗ --><!-- ║            HERO SECTION              ║ --><!-- ╚══════════════════════════════════════╝ -->${maybeRenderHead()}<section class="relative bg-gradient-to-br from-violet-900 via-violet-700 to-violet-600 pt-24 pb-0 overflow-hidden"> <div class="absolute inset-0 pointer-events-none" style="background-image:
        radial-gradient(circle at 20% 50%, rgba(255,255,255,0.04) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(14,165,233,0.15) 0%, transparent 40%)"></div> <div class="max-w-5xl mx-auto px-6 relative"> <div class="flex items-center gap-12 flex-wrap"> <!-- Emblem --> <div class="relative w-36 h-36 flex-shrink-0 flex items-center justify-center"> <div class="absolute w-36 h-36 rounded-full border-2 border-dashed border-white/20 animate-spin" style="animation-duration:20s"></div> <div class="absolute w-28 h-28 rounded-full border-2 border-white/20 animate-spin" style="animation-duration:15s; animation-direction:reverse"></div> <div class="w-20 h-20 bg-white/10 backdrop-blur border-2 border-white/25 rounded-full flex items-center justify-center text-3xl text-amber-300"> <i class="fas fa-graduation-cap"></i> </div> </div> <!-- Text --> <div class="flex-1 min-w-[280px]"> <span class="inline-block bg-white/10 border border-white/20 text-violet-300 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
Profil Sekolah
</span> <h1 class="font-serif text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
SMAIT Bilingual <br> <span class="text-amber-300">Nurul Imam Karawang</span> </h1> <p class="text-white/75 text-base leading-relaxed max-w-lg mb-6">
Mendidik generasi Qurani yang beriman, bertaqwa, berakhlak mulia,
          cerdas, berprestasi, dan berwawasan global melalui pendidikan
          bilingual.
</p> <div class="flex flex-wrap gap-3"> <span class="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/90 text-sm font-medium px-3 py-1.5 rounded-full"> <i class="fas fa-book"></i> Kurikulum Merdeka
</span> <span class="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/90 text-sm font-medium px-3 py-1.5 rounded-full"> <i class="fas fa-globe"></i> Bilingual
</span> <span class="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/90 text-sm font-medium px-3 py-1.5 rounded-full"> <i class="fas fa-map-marker-alt"></i> Karawang
</span> </div> </div> </div> </div> <!-- Wave divider --> <div class="mt-8 leading-none"> <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full block"> <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f8fafc"></path> </svg> </div> </section>`;
}, "C:/laragon/www/sisit-niis/src/pages/unit/smait/Hero.astro", void 0);

const $$file = "C:/laragon/www/sisit-niis/src/pages/unit/smait/Hero.astro";
const $$url = "/unit/smait/Hero";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Hero,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Hero as $, _page as _ };
