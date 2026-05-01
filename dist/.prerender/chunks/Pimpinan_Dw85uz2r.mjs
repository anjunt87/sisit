import { c as createComponent } from './astro-component_7ETOIUHv.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './prerender_CQg9tqRL.mjs';
import 'clsx';
import { p as pimpinan } from './tkit1_Di8AVOhR.mjs';

const $$Pimpinan = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- ╔══════════════════════════════════════╗ --><!-- ║        3. PIMPINAN SEKOLAH           ║ --><!-- ╚══════════════════════════════════════╝ -->${maybeRenderHead()}<section class="py-20 bg-slate-50"> <div class="max-w-5xl mx-auto px-6"> <!-- Heading --> <div class="text-center mb-12"> <span data-animate="fade-up" data-delay="100" class="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
Pimpinan Sekolah
</span> <h2 data-animate="fade-up" data-delay="200" class="text-4xl md:text-5xl font-bold text-gray-800">
Tim <span class="text-orange-600">Pimpinan</span> </h2> <p data-animate="fade-up" data-delay="300" class="text-slate-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
Dipimpin oleh tenaga pendidik berpengalaman yang berkomitmen membimbing dan mengembangkan potensi terbaik setiap siswa.
</p> </div> <!-- Grid --> <div data-animate="fade-up" data-delay="400" class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8"> ${pimpinan.map((item) => renderTemplate`<div class="text-center group"> <!-- Foto --> <div class="relative w-36 h-36 mx-auto mb-4"> <img${addAttribute(item.image, "src")}${addAttribute(item.name, "alt")} class="w-full h-full object-cover rounded-full border-4 border-white shadow-md group-hover:scale-105 transition duration-300" loading="lazy"> </div> <!-- Nama --> <h3 class="text-base font-bold text-slate-800"> ${item.name} </h3> <!-- Jabatan --> <p class="text-sm text-orange-600 font-semibold mt-1"> ${item.role} </p> </div>`)} </div> </div> </section>`;
}, "C:/laragon/www/sisit-niis/src/pages/unit/tkit1/Pimpinan.astro", void 0);

const $$file = "C:/laragon/www/sisit-niis/src/pages/unit/tkit1/Pimpinan.astro";
const $$url = "/unit/tkit1/Pimpinan";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pimpinan,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Pimpinan as $, _page as _ };
