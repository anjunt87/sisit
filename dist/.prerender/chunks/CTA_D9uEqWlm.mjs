import { c as createComponent } from './astro-component_7ETOIUHv.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderTemplate } from './prerender_CQg9tqRL.mjs';
import 'clsx';
import { r as renderScript } from './script_BFjaBY8H.mjs';

const $$CTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- ╔══════════════════════════════════════╗ --><!-- ║              CTA SECTION            ║ --><!-- ╚══════════════════════════════════════╝ -->${maybeRenderHead()}<section data-animate="fade-up" data-delay="300" class="py-20 pb-24 bg-slate-50"> <div class="max-w-5xl mx-auto px-6"> <div class="relative bg-gradient-to-br from-sky-800 to-sky-900 rounded-3xl p-12 text-center overflow-hidden"> <div class="absolute inset-0 pointer-events-none" style="background-image:
            radial-gradient(circle at 10% 90%, rgba(255,255,255,0.04) 0%, transparent 50%),
            radial-gradient(circle at 90% 10%, rgba(14,165,233,0.1) 0%, transparent 40%)"></div> <div class="relative"> <i class="fas fa-envelope-open-text text-4xl text-amber-300 block mb-5"></i> <h3 class="font-serif text-3xl font-bold text-white mb-3">
Tertarik Bergabung?
</h3> <p class="text-white/75 text-base leading-relaxed max-w-md mx-auto mb-8">
Daftarkan putra-putri Anda di SMPIT Bilingual Nurul Imam Karawang dan
          wujudkan impian bersama kami.
</p> <div class="flex flex-wrap justify-center gap-4"> <a href="/pendaftaran" class="inline-flex items-center gap-2
              bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm px-8
              py-3.5 rounded-full transition-all duration-300
              hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-600/30"> <i class="fas fa-pen-to-square"></i> Daftar Sekarang
</a> <a href="/kontak" class="inline-flex items-center gap-2 bg-transparent
              border-2 border-white/30 hover:bg-white/10 hover:border-white/60
              text-white/90 font-semibold text-sm px-8 py-3.5 rounded-full
              transition-all duration-300 hover:-translate-y-0.5"> <i class="fas fa-phone-volume"></i> Hubungi Kami
</a> </div> </div> </div> </div> ${renderScript($$result, "C:/laragon/www/sisit-niis/src/pages/unit/smpit/CTA.astro?astro&type=script&index=0&lang.ts")} </section>`;
}, "C:/laragon/www/sisit-niis/src/pages/unit/smpit/CTA.astro", void 0);

const $$file = "C:/laragon/www/sisit-niis/src/pages/unit/smpit/CTA.astro";
const $$url = "/unit/smpit/CTA";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CTA,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$CTA as $, _page as _ };
