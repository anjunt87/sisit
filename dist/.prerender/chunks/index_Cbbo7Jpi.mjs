import { c as createComponent } from './astro-component_7ETOIUHv.mjs';
import 'piccolore';
import { b as addAttribute, r as renderTemplate, m as maybeRenderHead, d as defineScriptVars, a as renderComponent } from './prerender_CQg9tqRL.mjs';
import { $ as $$BaseLayout } from './BaseLayout_C1y3sP9t.mjs';
import 'clsx';
import { r as renderScript } from './script_BFjaBY8H.mjs';
import { p as programs, c as colorMap } from './programs_BejtubCD.mjs';
import { f as facilities } from './facilities_yt00pBpJ.mjs';
import { n as newsList } from './news_CGH7LfYe.mjs';

const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/laragon/www/sisit-niis/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/laragon/www/sisit-niis/node_modules/astro/components/ClientRouter.astro", void 0);

const $$PageSkeleton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="sk-wrap visible" id="page-skeleton" aria-hidden="true" data-astro-cid-gkxzkb2l> <!-- NAVBAR --> <div class="sk-navbar" data-astro-cid-gkxzkb2l> <div class="sk sk-logo" data-astro-cid-gkxzkb2l></div> <div class="sk sk-brand" data-astro-cid-gkxzkb2l></div> <div class="sk-nav-links" style="display:flex" data-astro-cid-gkxzkb2l> <div class="sk sk-nav-link" data-astro-cid-gkxzkb2l></div> <div class="sk sk-nav-link" data-astro-cid-gkxzkb2l></div> <div class="sk sk-nav-link" data-astro-cid-gkxzkb2l></div> <div class="sk sk-nav-link" data-astro-cid-gkxzkb2l></div> <div class="sk sk-nav-link" data-astro-cid-gkxzkb2l></div> </div> <div class="sk sk-nav-btn" data-astro-cid-gkxzkb2l></div> </div> <!-- HERO --> <div class="sk-hero" data-astro-cid-gkxzkb2l> <div data-astro-cid-gkxzkb2l> <div class="sk sk-hero-badge" data-astro-cid-gkxzkb2l></div> <div class="sk sk-hero-title1" data-astro-cid-gkxzkb2l></div> <div class="sk sk-hero-title2" data-astro-cid-gkxzkb2l></div> <div class="sk sk-hero-desc1" data-astro-cid-gkxzkb2l></div> <div class="sk sk-hero-desc2" data-astro-cid-gkxzkb2l></div> <div class="sk sk-hero-desc3" data-astro-cid-gkxzkb2l></div> <div style="display:flex; flex-wrap:wrap;" data-astro-cid-gkxzkb2l> <div class="sk sk-hero-btn1" data-astro-cid-gkxzkb2l></div> <div class="sk sk-hero-btn2" data-astro-cid-gkxzkb2l></div> </div> </div> <!-- right nav pills --> <div class="sk-hero-nav" style="display:flex" data-astro-cid-gkxzkb2l> <div class="sk sk-rnav-btn" data-astro-cid-gkxzkb2l></div> <div class="sk sk-rnav-btn" data-astro-cid-gkxzkb2l></div> <div class="sk sk-rnav-btn" data-astro-cid-gkxzkb2l></div> <div class="sk sk-rnav-btn" data-astro-cid-gkxzkb2l></div> </div> <!-- dot nav --> <div class="sk-hero-dots" data-astro-cid-gkxzkb2l> <div class="sk sk-dot wide" data-astro-cid-gkxzkb2l></div> <div class="sk sk-dot" data-astro-cid-gkxzkb2l></div> <div class="sk sk-dot" data-astro-cid-gkxzkb2l></div> <div class="sk sk-dot" data-astro-cid-gkxzkb2l></div> </div> </div> <!-- NEWS --> <div style="background:#f9fafb; padding:5rem 0;" data-astro-cid-gkxzkb2l> <div class="sk-section" style="padding-top:0; padding-bottom:0;" data-astro-cid-gkxzkb2l> <div class="sk sk-label" data-astro-cid-gkxzkb2l></div> <div class="sk sk-heading" data-astro-cid-gkxzkb2l></div> <div class="sk sk-subheading" data-astro-cid-gkxzkb2l></div> <div class="sk-news-grid" data-astro-cid-gkxzkb2l> ${Array(3).fill(null).map(() => renderTemplate`<div class="sk-news-card" data-astro-cid-gkxzkb2l> <div class="sk sk-news-img" data-astro-cid-gkxzkb2l></div> <div class="sk-news-body" data-astro-cid-gkxzkb2l> <div class="sk sk-news-tag" data-astro-cid-gkxzkb2l></div> <div class="sk sk-news-t1" data-astro-cid-gkxzkb2l></div> <div class="sk sk-news-t2" data-astro-cid-gkxzkb2l></div> <div class="sk sk-news-meta" data-astro-cid-gkxzkb2l></div> </div> </div>`)} </div> </div> </div> <!-- FACILITIES --> <div class="sk-fac-bg" data-astro-cid-gkxzkb2l> <div style="max-width:1200px; margin:0 auto; padding:0 1.5rem 2.5rem;" data-astro-cid-gkxzkb2l> <div class="sk sk-label" style="width:100px; height:11px; margin-bottom:12px; display:block;" data-astro-cid-gkxzkb2l></div> <div class="sk sk-heading" style="width:280px; height:32px; margin-bottom:8px; display:block;" data-astro-cid-gkxzkb2l></div> <div class="sk sk-subheading" style="width:380px; height:16px; margin-bottom:40px; display:block;" data-astro-cid-gkxzkb2l></div> </div> <div class="sk-fac-grid" data-astro-cid-gkxzkb2l> ${Array(6).fill(null).map(() => renderTemplate`<div class="sk sk-fac-card" data-astro-cid-gkxzkb2l></div>`)} </div> </div> <!-- TESTIMONIALS --> <div style="background:#f9fafb; padding:5rem 0;" data-astro-cid-gkxzkb2l> <div class="sk-section" style="padding-top:0; padding-bottom:0;" data-astro-cid-gkxzkb2l> <div class="sk sk-label" data-astro-cid-gkxzkb2l></div> <div class="sk sk-heading" data-astro-cid-gkxzkb2l></div> <div class="sk sk-subheading" data-astro-cid-gkxzkb2l></div> <div class="sk-testi-grid" data-astro-cid-gkxzkb2l> ${Array(3).fill(null).map(() => renderTemplate`<div class="sk-testi-card" data-astro-cid-gkxzkb2l> <div class="sk sk-stars" data-astro-cid-gkxzkb2l></div> <div class="sk sk-quote1" data-astro-cid-gkxzkb2l></div> <div class="sk sk-quote2" data-astro-cid-gkxzkb2l></div> <div class="sk sk-quote3" data-astro-cid-gkxzkb2l></div> <div style="display:flex; align-items:center;" data-astro-cid-gkxzkb2l> <div class="sk sk-avatar" data-astro-cid-gkxzkb2l></div> <div style="flex:1" data-astro-cid-gkxzkb2l> <div class="sk sk-tname" data-astro-cid-gkxzkb2l></div> <div class="sk sk-trole" data-astro-cid-gkxzkb2l></div> </div> </div> </div>`)} </div> </div> </div> <!-- SCHOOL CALENDAR --> <div style="background:#fff; padding:5rem 0;" data-astro-cid-gkxzkb2l> <div class="sk-section" style="padding-top:0; padding-bottom:0;" data-astro-cid-gkxzkb2l> <div class="sk sk-label" data-astro-cid-gkxzkb2l></div> <div class="sk sk-heading" data-astro-cid-gkxzkb2l></div> <div class="sk sk-subheading" data-astro-cid-gkxzkb2l></div> <div class="sk-cal-wrap" data-astro-cid-gkxzkb2l> <!-- mini calendar --> <div class="sk-cal-card" data-astro-cid-gkxzkb2l> <div class="sk sk-cal-header" data-astro-cid-gkxzkb2l></div> <div class="sk-cal-grid" data-astro-cid-gkxzkb2l> ${Array(35).fill(null).map(() => renderTemplate`<div class="sk sk-cal-day" data-astro-cid-gkxzkb2l></div>`)} </div> </div> <!-- event list --> <div class="sk-cal-card" data-astro-cid-gkxzkb2l> <div class="sk sk-cal-header" style="width:180px; margin-bottom:20px;" data-astro-cid-gkxzkb2l></div> ${Array(5).fill(null).map(() => renderTemplate`<div class="sk-event-row" data-astro-cid-gkxzkb2l> <div class="sk sk-event-dot" data-astro-cid-gkxzkb2l></div> <div class="sk sk-event-text" data-astro-cid-gkxzkb2l></div> </div>`)} </div> </div> </div> </div> <!-- FAQ --> <div style="background:#f9fafb; padding:5rem 0;" data-astro-cid-gkxzkb2l> <div class="sk-section" style="padding-top:0; padding-bottom:0;" data-astro-cid-gkxzkb2l> <div class="sk sk-label" data-astro-cid-gkxzkb2l></div> <div class="sk sk-heading" data-astro-cid-gkxzkb2l></div> <div class="sk sk-subheading" data-astro-cid-gkxzkb2l></div> <div class="sk-faq-list" data-astro-cid-gkxzkb2l> ${Array(6).fill(null).map(() => renderTemplate`<div class="sk-faq-item" data-astro-cid-gkxzkb2l> <div class="sk sk-faq-q" data-astro-cid-gkxzkb2l></div> <div class="sk sk-faq-ic" data-astro-cid-gkxzkb2l></div> </div>`)} </div> </div> </div> <!-- SCHOOL LOCATION --> <div style="background:#fff; padding:5rem 0;" data-astro-cid-gkxzkb2l> <div class="sk-section" style="padding-top:0; padding-bottom:0;" data-astro-cid-gkxzkb2l> <div class="sk sk-label" data-astro-cid-gkxzkb2l></div> <div class="sk sk-heading" data-astro-cid-gkxzkb2l></div> <div class="sk sk-subheading" data-astro-cid-gkxzkb2l></div> <div class="sk-loc-wrap" data-astro-cid-gkxzkb2l> <div data-astro-cid-gkxzkb2l> <div class="sk sk-loc-map" data-astro-cid-gkxzkb2l></div> </div> <div class="sk-loc-info" data-astro-cid-gkxzkb2l> ${Array(4).fill(null).map(() => renderTemplate`<div class="sk-loc-row" data-astro-cid-gkxzkb2l> <div class="sk sk-loc-icon" data-astro-cid-gkxzkb2l></div> <div data-astro-cid-gkxzkb2l> <div class="sk sk-loc-t1" data-astro-cid-gkxzkb2l></div> <div class="sk sk-loc-t2" data-astro-cid-gkxzkb2l></div> </div> </div>`)} <div class="sk" style="height:44px; width:160px; border-radius:10px; margin-top:8px;" data-astro-cid-gkxzkb2l></div> </div> </div> </div> </div> <!-- PARTNERSHIP --> <div class="sk-partner-bg" data-astro-cid-gkxzkb2l> <div class="sk sk-label" style="display:block; margin:0 auto 12px;" data-astro-cid-gkxzkb2l></div> <div class="sk sk-heading" style="display:block; margin:0 auto 8px;" data-astro-cid-gkxzkb2l></div> <div class="sk sk-subheading" style="display:block; margin:0 auto 36px;" data-astro-cid-gkxzkb2l></div> <div class="sk-partner-logos" data-astro-cid-gkxzkb2l> ${Array(8).fill(null).map(() => renderTemplate`<div class="sk sk-partner-logo" data-astro-cid-gkxzkb2l></div>`)} </div> </div> <!-- CONTACT --> <div style="background:#f9fafb; padding:5rem 0;" data-astro-cid-gkxzkb2l> <div class="sk-section" style="padding-top:0; padding-bottom:0;" data-astro-cid-gkxzkb2l> <div class="sk sk-label" data-astro-cid-gkxzkb2l></div> <div class="sk sk-heading" data-astro-cid-gkxzkb2l></div> <div class="sk sk-subheading" data-astro-cid-gkxzkb2l></div> <div class="sk-contact-wrap" data-astro-cid-gkxzkb2l> <!-- form side --> <div class="sk-contact-side" data-astro-cid-gkxzkb2l> <div class="sk sk-field" data-astro-cid-gkxzkb2l></div> <div class="sk sk-field" data-astro-cid-gkxzkb2l></div> <div class="sk sk-field" data-astro-cid-gkxzkb2l></div> <div class="sk sk-field-t" data-astro-cid-gkxzkb2l></div> <div class="sk" style="height:44px; width:140px; border-radius:10px;" data-astro-cid-gkxzkb2l></div> </div> <!-- info side --> <div class="sk-contact-side" data-astro-cid-gkxzkb2l> ${Array(4).fill(null).map(() => renderTemplate`<div class="sk-contact-info" data-astro-cid-gkxzkb2l> <div class="sk sk-ci-icon" data-astro-cid-gkxzkb2l></div> <div data-astro-cid-gkxzkb2l> <div class="sk sk-ci-t1" data-astro-cid-gkxzkb2l></div> <div class="sk sk-ci-t2" data-astro-cid-gkxzkb2l></div> </div> </div>`)} </div> </div> </div> </div> <!-- FOOTER --> <div class="sk-footer" data-astro-cid-gkxzkb2l> <div class="sk-footer-grid" data-astro-cid-gkxzkb2l> <!-- brand col --> <div class="sk-footer-col" data-astro-cid-gkxzkb2l> <div style="display:flex; gap:10px; align-items:center; margin-bottom:8px;" data-astro-cid-gkxzkb2l> <div class="sk" style="width:40px; height:40px; border-radius:8px;" data-astro-cid-gkxzkb2l></div> <div class="sk sk-ft1" style="width:140px;" data-astro-cid-gkxzkb2l></div> </div> <div class="sk sk-ft2" style="width:90%;" data-astro-cid-gkxzkb2l></div> <div class="sk sk-ft2" style="width:80%;" data-astro-cid-gkxzkb2l></div> <div class="sk sk-ft2" style="width:70%;" data-astro-cid-gkxzkb2l></div> <div style="display:flex; gap:8px; margin-top:12px;" data-astro-cid-gkxzkb2l> ${Array(4).fill(null).map(() => renderTemplate`<div class="sk" style="width:32px; height:32px; border-radius:8px;" data-astro-cid-gkxzkb2l></div>`)} </div> </div> <!-- link cols --> ${Array(3).fill(null).map(() => renderTemplate`<div class="sk-footer-col" data-astro-cid-gkxzkb2l> <div class="sk sk-ft1" style="width:100px; margin-bottom:8px;" data-astro-cid-gkxzkb2l></div> ${Array(5).fill(null).map(() => renderTemplate`<div class="sk sk-ft2"${addAttribute(`width:${60 + Math.random() * 40}%`, "style")} data-astro-cid-gkxzkb2l></div>`)} </div>`)} </div> <div class="sk-footer-bottom" data-astro-cid-gkxzkb2l> <div class="sk sk-fb-t" data-astro-cid-gkxzkb2l></div> <div class="sk sk-fb-t" style="width:120px;" data-astro-cid-gkxzkb2l></div> </div> </div> </div> ${renderScript($$result, "C:/laragon/www/sisit-niis/src/components/landing/PageSkeleton.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/laragon/www/sisit-niis/src/components/landing/PageSkeleton.astro", void 0);

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=2072&q=80",
      unit: "Playgroup & TK Islam",
      ageRange: "Usia 2–6 Tahun",
      title: "Fondasi Iman Sejak Dini",
      description: "Membangun karakter Islami dan kecintaan belajar sejak usia emas. Anak-anak tumbuh dalam lingkungan yang penuh kasih, aman, dan bernuansa Qurani.",
      color: "#D97706",
      // amber
      accentBg: "bg-amber-600/30",
      accentBorder: "border-amber-300",
      btnBg: "bg-amber-600 hover:bg-amber-700",
      dotActive: "bg-amber-400",
      icon: "🌱"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=2022&q=80",
      unit: "SDIT (SD Islam Terpadu)",
      ageRange: "Kelas 1–6 · Usia 6–12 Tahun",
      title: "Mengakar Ilmu, Mekar Akhlak",
      description: "Kurikulum nasional terintegrasi dengan pendidikan Al-Quran, tahfidz, dan akhlak Islami. Siswa dibekali literasi digital dan kecakapan abad 21.",
      color: "#16A34A",
      // green
      accentBg: "bg-green-600/30",
      accentBorder: "border-green-300",
      btnBg: "bg-green-600 hover:bg-green-700",
      dotActive: "bg-green-400",
      icon: "📖"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=2032&q=80",
      unit: "SMPIT (SMP Islam Terpadu)",
      ageRange: "Kelas 7–9 · Usia 12–15 Tahun",
      title: "Generasi Qur'ani Berprestasi",
      description: "Masa remaja yang penuh potensi diarahkan dengan bimbingan agama, program tahfidz intensif, olimpiade sains, dan pengembangan kepemimpinan Islami.",
      color: "#0284C7",
      // sky
      accentBg: "bg-sky-600/30",
      accentBorder: "border-sky-300",
      btnBg: "bg-sky-600 hover:bg-sky-700",
      dotActive: "bg-sky-400",
      icon: "🏆"
    },
    {
      id: 4,
      image: "",
      unit: "SMAIT (SMA Islam Terpadu)",
      ageRange: "Kelas 10–12 · Usia 15–18 Tahun",
      title: "Ulul Albab Siap Mendunia",
      description: "Disiapkan untuk perguruan tinggi terkemuka dalam dan luar negeri. Menggabungkan keunggulan akademik, hafalan Quran, dan jiwa entrepreneur Islami.",
      color: "#7C3AED",
      // violet
      accentBg: "bg-violet-600/30",
      accentBorder: "border-violet-300",
      btnBg: "bg-violet-600 hover:bg-violet-700",
      dotActive: "bg-violet-400",
      icon: "🎓"
    }
  ];
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", '<section id="hero" class="bg-[#f7f3ee]" data-astro-cid-7vszemnk> <!-- Slideshow wrapper --> <div class="relative h-screen overflow-hidden" data-astro-cid-7vszemnk> <!-- Slides --> ', ' <!-- Vertical unit navigation (right side) --> <div class="absolute right-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-2" data-astro-cid-7vszemnk> ', ' </div> <!-- Bottom controls --> <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-30" data-astro-cid-7vszemnk> <div class="flex items-center gap-3 rounded-2xl bg-black/30 backdrop-blur-md px-6 py-3 border border-white/15 shadow-xl" data-astro-cid-7vszemnk> <button id="prevBtn" class="text-white/70 hover:text-white transition text-lg w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10" data-astro-cid-7vszemnk>\n❮\n</button> <!-- Unit dots with labels --> <div id="dots" class="flex items-center gap-3" data-astro-cid-7vszemnk> ', ' </div> <button id="nextBtn" class="text-white/70 hover:text-white transition text-lg w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10" data-astro-cid-7vszemnk>\n❯\n</button> </div> </div> <!-- Unit stats bar (top) --> <!-- <div class="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/40 to-transparent pt-4 pb-8">\n      <div class="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between">\n        <div class="hidden md:flex items-center gap-2 text-xs text-white/70">\n          <span class="px-3 py-1 rounded-full bg-white/10 border border-white/15">4 Unit Pendidikan</span>\n          <span class="px-3 py-1 rounded-full bg-white/10 border border-white/15">Playgroup s/d SMAIT</span>\n          <span class="px-3 py-1 rounded-full bg-white/10 border border-white/15">Terakreditasi A</span>\n        </div>\n      </div>\n    </div> --> </div> </section> <script>(function(){', "\n  const panels = document.querySelectorAll('.slide-panel');\n  const dots = document.querySelectorAll('[data-dot]');\n  const dotBars = document.querySelectorAll('[data-dot-bar]');\n  const dotLabels = document.querySelectorAll('[data-dot-label]');\n  const bars = document.querySelectorAll('[data-bar]');\n  const navBtns = document.querySelectorAll('[data-goto]');\n\n  let current = 0;\n  let autoplayTimer;\n\n  const colors = slidesData.map(s => s.color);\n\n  function showSlide(index) {\n    // Panels\n    panels.forEach((p, i) => {\n      p.classList.toggle('active', i === index);\n    });\n\n    // Progress bars\n    bars.forEach((bar, i) => {\n      bar.classList.remove('running');\n      bar.style.width = '0%';\n      if (i === index) {\n        // Force reflow\n        void bar.offsetWidth;\n        bar.classList.add('running');\n      }\n    });\n\n    // Dot bars + labels\n    dotBars.forEach((db, i) => {\n      if (i === index) {\n        db.style.background = colors[i];\n        db.style.width = '24px';\n      } else {\n        db.style.background = '';\n        db.style.width = '8px';\n      }\n    });\n    dotLabels.forEach((dl, i) => {\n      dl.classList.toggle('text-white', i === index);\n      dl.classList.toggle('text-white/40', i !== index);\n    });\n\n    // Right nav\n    navBtns.forEach((btn, i) => {\n      btn.classList.toggle('text-white', i === index);\n      btn.classList.toggle('bg-white/15', i === index);\n      btn.classList.toggle('backdrop-blur-sm', i === index);\n      btn.classList.toggle('text-white/40', i !== index);\n    });\n\n    current = index;\n  }\n\n  function startAutoplay() {\n    autoplayTimer = setInterval(() => {\n      showSlide((current + 1) % panels.length);\n    }, 5000);\n  }\n\n  function resetAutoplay() {\n    clearInterval(autoplayTimer);\n    startAutoplay();\n  }\n\n  document.getElementById('prevBtn')?.addEventListener('click', () => {\n    showSlide((current - 1 + panels.length) % panels.length);\n    resetAutoplay();\n  });\n\n  document.getElementById('nextBtn')?.addEventListener('click', () => {\n    showSlide((current + 1) % panels.length);\n    resetAutoplay();\n  });\n\n  dots.forEach((dot, i) => {\n    dot.addEventListener('click', () => {\n      showSlide(i);\n      resetAutoplay();\n    });\n  });\n\n  navBtns.forEach((btn, i) => {\n    btn.addEventListener('click', () => {\n      showSlide(i);\n      resetAutoplay();\n    });\n  });\n\n  startAutoplay();\n})();<\/script>"])), maybeRenderHead(), slides.map((slide, i) => renderTemplate`<div${addAttribute(`slide-panel ${i === 0 ? "active" : ""}`, "class")}${addAttribute(i, "data-index")} data-astro-cid-7vszemnk> <!-- BG image --> <div class="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[8000ms]"${addAttribute(`background-image:url(${slide.image})`, "style")} data-astro-cid-7vszemnk></div> <!-- Dark + color overlay --> <div class="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/20" data-astro-cid-7vszemnk></div> <!-- Pattern texture --> <div class="pattern-overlay absolute inset-0" data-astro-cid-7vszemnk></div> <!-- Content --> <div class="relative z-10 h-full flex items-center" data-astro-cid-7vszemnk> <div class="max-w-7xl mx-auto px-6 lg:px-16 w-full" data-astro-cid-7vszemnk> <div class="max-w-2xl" data-astro-cid-7vszemnk> <div class="slide-content-inner space-y-6" data-astro-cid-7vszemnk> <!-- Top arabic text --> <p class="arabesque text-white/60" data-astro-cid-7vszemnk>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p> <!-- Unit badge --> <div class="flex items-center gap-3 flex-wrap" data-astro-cid-7vszemnk> <span${addAttribute(`unit-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold text-white ${slide.accentBg} border ${slide.accentBorder} backdrop-blur-sm`, "class")} data-astro-cid-7vszemnk> <span class="text-base" data-astro-cid-7vszemnk>${slide.icon}</span> ${slide.unit} </span> <span class="text-white/60 text-sm border border-white/20 px-3 py-1 rounded-full backdrop-blur-sm" data-astro-cid-7vszemnk> ${slide.ageRange} </span> </div> <!-- Title --> <h2 class="text-4xl lg:text-6xl font-bold text-white leading-tight" style="font-family:'Amiri',serif" data-astro-cid-7vszemnk> ${slide.title} </h2> <!-- Description --> <p class="text-base lg:text-lg text-gray-200 leading-relaxed max-w-xl" data-astro-cid-7vszemnk> ${slide.description} </p> <!-- CTA --> <div class="flex flex-wrap gap-4 pt-2" data-astro-cid-7vszemnk> <a href="#programs"${addAttribute(`inline-flex items-center gap-2 text-white ${slide.btnBg} px-6 py-3 rounded-xl font-semibold transition-all shadow-lg`, "class")} data-astro-cid-7vszemnk>
Lihat Program
<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-7vszemnk><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-7vszemnk></path></svg> </a> <a href="#contact" class="inline-flex items-center gap-2 text-white border border-white/30 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all" data-astro-cid-7vszemnk>
Daftar Sekarang
</a> </div> </div> </div> </div> </div> <!-- Progress bar --> <div class="absolute bottom-0 left-0 right-0 z-20 h-[3px] bg-white/10" data-astro-cid-7vszemnk> <div${addAttribute(`progress-bar ${i === 0 ? "running" : ""}`, "class")}${addAttribute(i, "data-bar")}${addAttribute(`background:${slide.color}`, "style")} data-astro-cid-7vszemnk></div> </div> </div>`), slides.map((slide, i) => renderTemplate`<button${addAttribute(`nav-unit-btn group relative px-2 py-4 text-xs font-semibold tracking-widest uppercase rounded-lg transition-all duration-300 ${i === 0 ? "text-white bg-white/15 backdrop-blur-sm" : "text-white/40 hover:text-white/80"}`, "class")}${addAttribute(i, "data-goto")}${addAttribute(slide.unit, "title")} data-astro-cid-7vszemnk> <span data-astro-cid-7vszemnk>${slide.icon}</span> </button>`), slides.map((slide, i) => renderTemplate`<button${addAttribute(`dot group flex flex-col items-center gap-1 transition-all duration-300`, "class")}${addAttribute(i, "data-dot")} data-astro-cid-7vszemnk> <div${addAttribute(`w-2 h-2 rounded-full transition-all duration-300 ${i === 0 ? "w-6" : "bg-white/30 hover:bg-white/60"}`, "class")}${addAttribute(i === 0 ? `background:${slide.color}` : "", "style")}${addAttribute(i, "data-dot-bar")} data-astro-cid-7vszemnk></div> <span${addAttribute(`text-[9px] font-semibold uppercase tracking-wider transition-all ${i === 0 ? "text-white" : "text-white/40"}`, "class")}${addAttribute(i, "data-dot-label")} data-astro-cid-7vszemnk> ${slide.unit.split(" ")[0]} </span> </button>`), defineScriptVars({ slidesData: slides }));
}, "C:/laragon/www/sisit-niis/src/components/landing/Hero.astro", void 0);

const $$Programs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="programs" class="bg-white py-12 px-6"> <div class="max-w-7xl mx-auto"> <div class="mb-10 text-center"> <span data-animate="fade-up" data-delay="100" class="mb-3 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
Program Unggulan
</span> <h2 data-animate="fade-up" data-delay="200" class="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
Keunggulan <span class="text-green-600">Nurul Imam Islamic School</span> </h2> <p data-animate="fade-up" data-delay="300" class="mx-auto max-w-2xl text-base text-gray-600">
Program-program inovatif yang dirancang untuk mengembangkan potensi
        siswa secara maksimal
</p> </div> <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3"> ${programs.map((program, i) => {
    const style = colorMap[program.color];
    return renderTemplate`<a data-animate="fade-up"${addAttribute(String((i + 1) * 100), "data-delay")}${addAttribute(`/programs/${program.slug}`, "href")}${addAttribute(`group rounded-xl border bg-gradient-to-br p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl ${style.bg} ${style.border}`, "class")}> <div${addAttribute(`mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-xl text-white transition group-hover:scale-110 ${style.icon}`, "class")}> <i${addAttribute(`fa-solid ${program.icon}`, "class")}></i> </div> <h3 class="mb-2 text-lg font-bold text-gray-800"> ${program.title} </h3> <p class="mb-4 text-sm text-gray-600">${program.desc}</p> <div${addAttribute(`text-sm font-semibold transition group-hover:translate-x-1 ${style.text}`, "class")}>
Pelajari Lebih Lanjut →
</div> </a>`;
  })} </div> </div> </section>`;
}, "C:/laragon/www/sisit-niis/src/components/landing/Programs.astro", void 0);

const achievements = [
  // KEISLAMAN
  {
    cat: "islam",
    level: "internasional",
    icon: "fa-book-open",
    title: "Juara 2 Musabaqah Tilawatil Quran",
    desc: "MTQ Internasional Se-Asia Tenggara, Kuala Lumpur 2024"
  },
  {
    cat: "islam",
    level: "nasional",
    icon: "fa-moon",
    title: "Juara 1 Hifzil Quran 30 Juz",
    desc: "Kompetisi Nasional Tahfidz, Jakarta 2024"
  },
  {
    cat: "islam",
    level: "nasional",
    icon: "fa-mosque",
    title: "Juara 2 Pidato Dakwah",
    desc: "Festival Santri Nasional, Yogyakarta 2023"
  },
  {
    cat: "islam",
    level: "provinsi",
    icon: "fa-pen-nib",
    title: "Juara 1 Kaligrafi Naskah",
    desc: "MTQ Tingkat Provinsi Jawa Barat, 2024"
  },
  {
    cat: "islam",
    level: "provinsi",
    icon: "fa-microphone",
    title: "Juara 1 Pidato Bahasa Arab",
    desc: "Musabaqah Bahasa Arab, Bandung 2023"
  },
  {
    cat: "islam",
    level: "kabupaten",
    icon: "fa-book-quran",
    title: "Wisuda Hafizh 30 Juz Terbaik",
    desc: "12 santri hafizh baru tahun 2024"
  },
  {
    cat: "islam",
    level: "kabupaten",
    icon: "fa-scroll",
    title: "Juara 1 Fahmil Quran",
    desc: "MTQ Tingkat Kabupaten Karawang, 2023"
  },
  {
    cat: "islam",
    level: "kecamatan",
    icon: "fa-star-and-crescent",
    title: "Juara 1 Azan & Iqamat",
    desc: "Peringatan Hari Santri Nasional, 2024"
  },
  // AKADEMIK
  {
    cat: "akademik",
    level: "kabupaten",
    icon: "fa-square-root-variable",
    title: "Juara 1 Olimpiade Matematika",
    desc: "OSN Tingkat Kabupaten Karawang, 2024"
  },
  {
    cat: "akademik",
    level: "provinsi",
    icon: "fa-flask",
    title: "Juara 2 Olimpiade IPA",
    desc: "OSN Tingkat Provinsi Jawa Barat, 2023"
  },
  {
    cat: "akademik",
    level: "nasional",
    icon: "fa-earth-asia",
    title: "Juara 3 Debat Bahasa Inggris",
    desc: "National English Olympiad, Jakarta 2024"
  },
  {
    cat: "akademik",
    level: "nasional",
    icon: "fa-chart-line",
    title: "Juara 2 Olimpiade Ekonomi Islam",
    desc: "Kompetisi Nasional Ekonomi Islam, 2023"
  },
  // OLAHRAGA
  {
    cat: "olahraga",
    level: "internasional",
    icon: "fa-shield-halved",
    title: "Juara 3 Pencak Silat",
    desc: "Kejuaraan Internasional, Malaysia 2023"
  },
  {
    cat: "olahraga",
    level: "nasional",
    icon: "fa-shuttlecock",
    title: "Juara 2 Badminton Beregu",
    desc: "Kompetisi Olahraga Santri Nasional, 2024"
  },
  {
    cat: "olahraga",
    level: "provinsi",
    icon: "fa-futbol",
    title: "Juara 1 Turnamen Futsal",
    desc: "Turnamen Futsal Santri Jawa Barat, 2024"
  },
  {
    cat: "olahraga",
    level: "kabupaten",
    icon: "fa-table-tennis-paddle-ball",
    title: "Juara 1 Tenis Meja",
    desc: "O2SN Tingkat Kabupaten Karawang, 2024"
  },
  // SENI
  {
    cat: "seni",
    level: "internasional",
    icon: "fa-music",
    title: "Juara 1 Nasyid International",
    desc: "Asia Islamic Music Competition, Singapura 2023"
  },
  {
    cat: "seni",
    level: "nasional",
    icon: "fa-masks-theater",
    title: "Juara 1 Festival Teater Islami",
    desc: "Festival Seni Santri Nasional, Surabaya 2024"
  },
  {
    cat: "seni",
    level: "provinsi",
    icon: "fa-palette",
    title: "Juara 2 Kaligrafi Digital",
    desc: "Kompetisi Desain Islami Jawa Barat, 2024"
  },
  {
    cat: "seni",
    level: "kabupaten",
    icon: "fa-drum",
    title: "Juara 1 Hadroh & Marawis",
    desc: "Festival Seni Islami Kabupaten Karawang, 2024"
  },
  // TEKNOLOGI
  {
    cat: "teknologi",
    level: "nasional",
    icon: "fa-lightbulb",
    title: "Juara 2 Inovasi Teknologi Santri",
    desc: "Hackathon Santri Nasional, Bandung 2024"
  },
  {
    cat: "teknologi",
    level: "provinsi",
    icon: "fa-robot",
    title: "Juara 1 Lomba Robotika",
    desc: "Robotics Competition Jawa Barat, 2024"
  },
  {
    cat: "teknologi",
    level: "kabupaten",
    icon: "fa-code",
    title: "Juara 1 Web Development",
    desc: "Kompetisi IT Pelajar Karawang, 2023"
  }
];
const categories = [
  { key: "all", icon: "fa-layer-group", label: "Semua" },
  { key: "islam", icon: "fa-star-and-crescent", label: "Keislaman" },
  { key: "akademik", icon: "fa-graduation-cap", label: "Akademik" },
  { key: "olahraga", icon: "fa-medal", label: "Olahraga" },
  { key: "seni", icon: "fa-music", label: "Seni & Budaya" },
  { key: "teknologi", icon: "fa-microchip", label: "Teknologi" }
];
const levelIcon = {
  internasional: "fa-globe",
  nasional: "fa-flag",
  provinsi: "fa-map",
  kabupaten: "fa-location-dot",
  kecamatan: "fa-house"
};
const catColor = {
  islam: "bg-green-600",
  akademik: "bg-amber-500",
  olahraga: "bg-blue-600",
  seni: "bg-purple-600",
  teknologi: "bg-orange-500"
};
const levelStyle = {
  internasional: "bg-amber-100 text-amber-800",
  nasional: "bg-blue-100 text-blue-800",
  provinsi: "bg-purple-100 text-purple-800",
  kabupaten: "bg-green-100 text-green-800",
  kecamatan: "bg-gray-100 text-gray-600"
};
const statsCounts = {
  internasional: achievements.filter((a) => a.level === "internasional").length,
  nasional: achievements.filter((a) => a.level === "nasional").length,
  provinsi: achievements.filter((a) => a.level === "provinsi").length
};

const $$Achievements = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="achievements" class="relative overflow-hidden bg-gray-50 py-20 px-6"> <svg class="absolute inset-0 h-full w-full opacity-10" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"> <defs> <pattern id="star" patternUnits="userSpaceOnUse" width="50" height="50"> <path d="M25 0 L30 20 L50 25 L30 30 L25 50 L20 30 L0 25 L20 20 Z" fill="none" stroke="#16610E" stroke-width="1"></path> </pattern> </defs> <rect width="100%" height="100%" fill="url(#star)"></rect> </svg> <div class="relative z-10 max-w-5xl mx-auto"> <!-- Header --> <div class="mb-10 text-center"> <span class="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700"> <i class="fa-solid fa-trophy text-xs"></i> Prestasi Unggulan
</span> <h2 class="mb-3 text-4xl font-bold text-gray-800 md:text-5xl">
Prestasi <span class="text-green-600">Sekolah</span> </h2> <p class="mx-auto max-w-xl text-base text-gray-600">
Berbagai prestasi membanggakan yang diraih santri dan lembaga kami
</p> </div> <!-- Tabs --> <div class="flex flex-wrap justify-center gap-2 mb-7"> ${categories.map((c) => renderTemplate`<button${addAttribute(c.key, "data-panel")}${addAttribute([
    "tab flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-colors duration-150",
    c.key === "all" ? "bg-green-600 text-white border-green-600" : "bg-white text-gray-500 border-gray-200 hover:border-green-400 hover:text-green-800"
  ], "class:list")}> <i${addAttribute(`fa-solid ${c.icon} text-xs`, "class")}></i> ${c.label} </button>`)} </div> <!-- Panels --> ${categories.map((c) => renderTemplate`<div${addAttribute(`panel-${c.key}`, "id")}${addAttribute([
    "panel grid gap-2.5 md:grid-cols-2",
    c.key !== "all" && "hidden"
  ], "class:list")}> ${(c.key === "all" ? achievements : achievements.filter((a) => a.cat === c.key)).map((item) => renderTemplate`<div class="achievement-row flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 transition-all duration-200 hover:border-gray-300 hover:translate-x-1"> <div${addAttribute([
    "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white",
    catColor[item.cat]
  ], "class:list")}> <i${addAttribute(`fa-solid ${item.icon} text-sm`, "class")}></i> </div> <div class="min-w-0 flex-1"> <div class="text-sm font-semibold text-gray-800 leading-snug"> ${item.title} </div> <div class="text-xs text-gray-500 mt-0.5">${item.desc}</div> </div> <span${addAttribute([
    "flex shrink-0 items-center gap-1 rounded-full px-2 py-1 text-[10px] font-semibold",
    levelStyle[item.level]
  ], "class:list")}> <i${addAttribute(`fa-solid ${levelIcon[item.level]}`, "class")} style="font-size:9px"></i> ${item.level.charAt(0).toUpperCase() + item.level.slice(1)} </span> </div>`)} </div>`)} <!-- Stats --> <div class="mt-10 grid grid-cols-4 divide-x divide-gray-200 rounded-2xl border border-gray-200 bg-white overflow-hidden max-w-lg mx-auto"> <div class="py-4 text-center"> <div class="text-2xl font-bold text-green-600"> ${achievements.length}+
</div> <div class="text-xs text-gray-500 mt-0.5">Total</div> </div> <div class="py-4 text-center"> <div class="text-2xl font-bold text-amber-600"> ${statsCounts.internasional} </div> <div class="text-xs text-gray-500 mt-0.5">Internasional</div> </div> <div class="py-4 text-center"> <div class="text-2xl font-bold text-blue-600"> ${statsCounts.nasional} </div> <div class="text-xs text-gray-500 mt-0.5">Nasional</div> </div> <div class="py-4 text-center"> <div class="text-2xl font-bold text-purple-600"> ${statsCounts.provinsi} </div> <div class="text-xs text-gray-500 mt-0.5">Provinsi</div> </div> </div> </div> </section> ${renderScript($$result, "C:/laragon/www/sisit-niis/src/components/landing/Achievements.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/laragon/www/sisit-niis/src/components/landing/Achievements.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Facilities = createComponent(($$result, $$props, $$slots) => {
  const featured = facilities.slice(0, 6);
  const supporting = facilities.slice(6);
  const hasSupporting = supporting.length > 0;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<section id="facilities" class="fac-section"> <div class="fac-bg" aria-hidden="true"></div> <div class="fac-orb fac-orb--1" aria-hidden="true"></div> <div class="fac-orb fac-orb--2" aria-hidden="true"></div> <div class="fac-container"> <!-- Header --> <div class="fac-header"> <span data-animate="fade-up" data-delay="100" class="fac-badge"> <span class="fac-badge-dot"></span>\nFasilitas\n</span> <h2 data-animate="fade-up" data-delay="200" class="fac-title">\nFasilitas <em>Unggulan</em> </h2> <p data-animate="fade-up" data-delay="300" class="fac-subtitle">\nSarana dan prasarana modern untuk mendukung proses belajar mengajar yang\n        optimal dan menyenangkan.\n</p> </div> <!-- Grid Utama --> <div class="fac-grid"> ', " </div> <!-- Fasilitas Pendukung --> ", ' <!-- CTA --> <div class="fac-cta" data-animate="fade-up" data-delay="200"> <a href="/facilities" class="fac-cta-btn">\nLihat Detail Lengkap\n<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"> <path d="M3 8h10M9 4l4 4-4 4"></path> </svg> </a> </div> </div> </section> <!-- ══ Modal Detail Fasilitas ══ --> <div class="fac-overlay" id="facOverlay" role="dialog" aria-modal="true" aria-labelledby="facModalTitle"> <div class="fac-modal" id="facModal"> <div class="fac-modal-top"> <div class="fac-modal-icon" id="facModalIcon"></div> <div class="fac-modal-header"> <h3 class="fac-modal-title" id="facModalTitle"></h3> <p class="fac-modal-desc" id="facModalDesc"></p> </div> <button class="fac-modal-close" id="facModalClose" aria-label="Tutup detail">\n✕\n</button> </div> <div class="fac-modal-body"> <div id="facModalImg"></div> <div id="facModalDetail"></div> <div id="facModalFeatures"></div> </div> </div> </div> <script>(function(){', '\n  const featuredData = JSON.parse(featuredJSON);\n\n  const bgMap = {\n    "bg-green-100": "background:#dcfce7",\n    "bg-purple-100": "background:#ede9fe",\n    "bg-yellow-100": "background:#fef9c3",\n    "bg-red-100": "background:#fee2e2",\n    "bg-pink-100": "background:#fce7f3",\n  };\n  const colorMap = {\n    "text-green-600": "color:#16a34a",\n    "text-purple-600": "color:#7c3aed",\n    "text-yellow-600": "color:#ca8a04",\n    "text-red-600": "color:#dc2626",\n    "text-pink-600": "color:#db2777",\n  };\n\n  const overlay = document.getElementById("facOverlay");\n  const modal = document.getElementById("facModal");\n\n  function openModal(idx) {\n    const f = featuredData[idx];\n    if (!f) return;\n\n    // Icon\n    const iconEl = document.getElementById("facModalIcon");\n    iconEl.setAttribute(\n      "style",\n      `${bgMap[f.bg] ?? ""};width:56px;height:56px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0`,\n    );\n    iconEl.innerHTML = `<i class="${f.icon}" style="${colorMap[f.color] ?? ""}"></i>`;\n\n    document.getElementById("facModalTitle").textContent = f.title;\n    document.getElementById("facModalDesc").textContent = f.desc;\n\n    // Image — support images[] dan fallback ke image\n    const imgEl = document.getElementById("facModalImg");\n    const allImages = f.images?.length ? f.images : f.image ? [f.image] : [];\n\n    if (allImages.length > 0) {\n      imgEl.innerHTML = allImages\n        .map(\n          (src) =>\n            `<img src="${src}" alt="${f.title}" class="fac-modal-img" loading="lazy"\n          onerror="this.style.display=\'none\'">`,\n        )\n        .join("");\n    } else {\n      imgEl.innerHTML = `<div class="fac-modal-img-placeholder">\n        <i class="${f.icon}" style="${colorMap[f.color] ?? ""}"></i>\n        <span>Foto segera hadir</span>\n      </div>`;\n    }\n\n    // Detail\n    document.getElementById("facModalDetail").innerHTML = f.detail\n      ? `<p class="fac-modal-section-label">Deskripsi lengkap</p>\n         <p class="fac-modal-detail-text">${f.detail}</p>`\n      : "";\n\n    // Features\n    document.getElementById("facModalFeatures").innerHTML = f.features?.length\n      ? `<p class="fac-modal-section-label">Fitur utama</p>\n         <div class="fac-modal-features">\n           ${f.features\n             .map(\n               (ft) => `\n             <div class="fac-modal-feature">\n               <span class="fac-modal-feature-check">✓</span>${ft}\n             </div>`,\n             )\n             .join("")}\n         </div>`\n      : "";\n\n    overlay.classList.add("open");\n    document.body.style.overflow = "hidden";\n  }\n\n  function closeModal() {\n    overlay.classList.remove("open");\n    document.body.style.overflow = "";\n  }\n\n  document.querySelectorAll(".fac-card[data-facility]").forEach((card) => {\n    const idx = Number(card.dataset.facility);\n    card.addEventListener("click", () => openModal(idx));\n    card.addEventListener("keydown", (e) => {\n      if (e.key === "Enter" || e.key === " ") {\n        e.preventDefault();\n        openModal(idx);\n      }\n    });\n  });\n\n  document\n    .getElementById("facModalClose")\n    .addEventListener("click", closeModal);\n  overlay.addEventListener("click", (e) => {\n    if (e.target === overlay) closeModal();\n  });\n  document.addEventListener("keydown", (e) => {\n    if (e.key === "Escape") closeModal();\n  });\n})();<\/script>'], ["", '<section id="facilities" class="fac-section"> <div class="fac-bg" aria-hidden="true"></div> <div class="fac-orb fac-orb--1" aria-hidden="true"></div> <div class="fac-orb fac-orb--2" aria-hidden="true"></div> <div class="fac-container"> <!-- Header --> <div class="fac-header"> <span data-animate="fade-up" data-delay="100" class="fac-badge"> <span class="fac-badge-dot"></span>\nFasilitas\n</span> <h2 data-animate="fade-up" data-delay="200" class="fac-title">\nFasilitas <em>Unggulan</em> </h2> <p data-animate="fade-up" data-delay="300" class="fac-subtitle">\nSarana dan prasarana modern untuk mendukung proses belajar mengajar yang\n        optimal dan menyenangkan.\n</p> </div> <!-- Grid Utama --> <div class="fac-grid"> ', " </div> <!-- Fasilitas Pendukung --> ", ' <!-- CTA --> <div class="fac-cta" data-animate="fade-up" data-delay="200"> <a href="/facilities" class="fac-cta-btn">\nLihat Detail Lengkap\n<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"> <path d="M3 8h10M9 4l4 4-4 4"></path> </svg> </a> </div> </div> </section> <!-- ══ Modal Detail Fasilitas ══ --> <div class="fac-overlay" id="facOverlay" role="dialog" aria-modal="true" aria-labelledby="facModalTitle"> <div class="fac-modal" id="facModal"> <div class="fac-modal-top"> <div class="fac-modal-icon" id="facModalIcon"></div> <div class="fac-modal-header"> <h3 class="fac-modal-title" id="facModalTitle"></h3> <p class="fac-modal-desc" id="facModalDesc"></p> </div> <button class="fac-modal-close" id="facModalClose" aria-label="Tutup detail">\n✕\n</button> </div> <div class="fac-modal-body"> <div id="facModalImg"></div> <div id="facModalDetail"></div> <div id="facModalFeatures"></div> </div> </div> </div> <script>(function(){', '\n  const featuredData = JSON.parse(featuredJSON);\n\n  const bgMap = {\n    "bg-green-100": "background:#dcfce7",\n    "bg-purple-100": "background:#ede9fe",\n    "bg-yellow-100": "background:#fef9c3",\n    "bg-red-100": "background:#fee2e2",\n    "bg-pink-100": "background:#fce7f3",\n  };\n  const colorMap = {\n    "text-green-600": "color:#16a34a",\n    "text-purple-600": "color:#7c3aed",\n    "text-yellow-600": "color:#ca8a04",\n    "text-red-600": "color:#dc2626",\n    "text-pink-600": "color:#db2777",\n  };\n\n  const overlay = document.getElementById("facOverlay");\n  const modal = document.getElementById("facModal");\n\n  function openModal(idx) {\n    const f = featuredData[idx];\n    if (!f) return;\n\n    // Icon\n    const iconEl = document.getElementById("facModalIcon");\n    iconEl.setAttribute(\n      "style",\n      \\`\\${bgMap[f.bg] ?? ""};width:56px;height:56px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0\\`,\n    );\n    iconEl.innerHTML = \\`<i class="\\${f.icon}" style="\\${colorMap[f.color] ?? ""}"></i>\\`;\n\n    document.getElementById("facModalTitle").textContent = f.title;\n    document.getElementById("facModalDesc").textContent = f.desc;\n\n    // Image — support images[] dan fallback ke image\n    const imgEl = document.getElementById("facModalImg");\n    const allImages = f.images?.length ? f.images : f.image ? [f.image] : [];\n\n    if (allImages.length > 0) {\n      imgEl.innerHTML = allImages\n        .map(\n          (src) =>\n            \\`<img src="\\${src}" alt="\\${f.title}" class="fac-modal-img" loading="lazy"\n          onerror="this.style.display=\'none\'">\\`,\n        )\n        .join("");\n    } else {\n      imgEl.innerHTML = \\`<div class="fac-modal-img-placeholder">\n        <i class="\\${f.icon}" style="\\${colorMap[f.color] ?? ""}"></i>\n        <span>Foto segera hadir</span>\n      </div>\\`;\n    }\n\n    // Detail\n    document.getElementById("facModalDetail").innerHTML = f.detail\n      ? \\`<p class="fac-modal-section-label">Deskripsi lengkap</p>\n         <p class="fac-modal-detail-text">\\${f.detail}</p>\\`\n      : "";\n\n    // Features\n    document.getElementById("facModalFeatures").innerHTML = f.features?.length\n      ? \\`<p class="fac-modal-section-label">Fitur utama</p>\n         <div class="fac-modal-features">\n           \\${f.features\n             .map(\n               (ft) => \\`\n             <div class="fac-modal-feature">\n               <span class="fac-modal-feature-check">✓</span>\\${ft}\n             </div>\\`,\n             )\n             .join("")}\n         </div>\\`\n      : "";\n\n    overlay.classList.add("open");\n    document.body.style.overflow = "hidden";\n  }\n\n  function closeModal() {\n    overlay.classList.remove("open");\n    document.body.style.overflow = "";\n  }\n\n  document.querySelectorAll(".fac-card[data-facility]").forEach((card) => {\n    const idx = Number(card.dataset.facility);\n    card.addEventListener("click", () => openModal(idx));\n    card.addEventListener("keydown", (e) => {\n      if (e.key === "Enter" || e.key === " ") {\n        e.preventDefault();\n        openModal(idx);\n      }\n    });\n  });\n\n  document\n    .getElementById("facModalClose")\n    .addEventListener("click", closeModal);\n  overlay.addEventListener("click", (e) => {\n    if (e.target === overlay) closeModal();\n  });\n  document.addEventListener("keydown", (e) => {\n    if (e.key === "Escape") closeModal();\n  });\n})();<\/script>'])), maybeRenderHead(), featured.map((item, i) => renderTemplate`<article class="fac-card" data-animate="fade-up"${addAttribute(String((i % 3 + 1) * 100), "data-delay")}${addAttribute(i, "data-facility")} role="button" tabindex="0"${addAttribute(`Lihat detail ${item.title}`, "aria-label")}> <div${addAttribute(`fac-icon-wrap ${item.bg}`, "class")}> <i${addAttribute(`${item.icon} fac-icon ${item.color}`, "class")} aria-hidden="true"></i> </div> <div class="fac-card-body"> <h3 class="fac-card-title">${item.title}</h3> <p class="fac-card-desc">${item.desc}</p> <p class="fac-card-hint">Lihat detail →</p> </div> <div class="fac-card-corner" aria-hidden="true"></div> </article>`), hasSupporting && renderTemplate`<div class="fac-supporting" data-animate="fade-up" data-delay="200"> <p class="fac-supporting-label">Fasilitas Pendukung</p> <div class="fac-pill-grid"> ${supporting.map((item, i) => renderTemplate`<div class="fac-pill" data-animate="fade-up"${addAttribute(String((i % 4 + 1) * 80), "data-delay")}> <i${addAttribute(`${item.icon} fac-pill-icon ${item.color}`, "class")} aria-hidden="true"></i> <span>${item.title}</span> </div>`)} </div> </div>`, defineScriptVars({ featuredJSON: JSON.stringify(featured) }));
}, "C:/laragon/www/sisit-niis/src/components/landing/Facilities.astro", void 0);

const testimonials = [
  {
    initial: "S",
    name: "Siti Nurhaliza",
    role: "Orang Tua Siswa",
    message: "SISIT memberikan pendidikan yang seimbang antara akademik dan spiritual. Anak saya berkembang pesat dalam hafalan Quran dan nilai akademiknya.",
    rating: 5
  },
  {
    initial: "A",
    name: "Ahmad Ridwan",
    role: "Alumni SISIT",
    message: "Pengalaman di SISIT membentuk karakter saya. Sekarang saya berhasil diterima di PTN favorit dengan bekal yang kuat dari sekolah.",
    rating: 5
  },
  {
    initial: "F",
    name: "Fatimah Azzahra",
    role: "Orang Tua Siswa",
    message: "Guru-guru di SISIT sangat dedicated dan caring. Mereka tidak hanya mengajar tapi juga mendidik dengan penuh kasih sayang.",
    rating: 5
  },
  {
    initial: "R",
    name: "Rizky Ramadhan",
    role: "Wali Murid",
    message: "Sekolah ini sangat disiplin dan memberikan nilai-nilai Islami yang kuat. Saya sangat puas dengan perkembangan karakter anak saya.",
    rating: 5
  },
  {
    initial: "L",
    name: "Linda Maharani",
    role: "Guru",
    message: "Lingkungan kerja yang sangat kondusif dan mendukung pengembangan profesional guru. Saya bangga menjadi bagian dari SISIT.",
    rating: 5
  }
];

const $$Testimonial = createComponent(($$result, $$props, $$slots) => {
  const preview = testimonials.slice(0, 6);
  return renderTemplate`${maybeRenderHead()}<section class="testi-section" id="testimonials"> <div class="testi-bg" aria-hidden="true"></div> <div class="testi-container"> <!-- Header --> <div class="text-center mb-12"> <span data-animate="fade-up" data-delay="100" class="inline-block bg-green-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-4 shadow-md">
Testimoni
</span> <h2 data-animate="fade-up" data-delay="200" class="text-4xl font-bold text-gray-900 mb-4">
Apa Kata <span class="text-green-700">Mereka</span> </h2> <p data-animate="fade-up" data-delay="300" class="text-gray-700 text-lg max-w-2xl mx-auto">
Cerita nyata dari orang tua dan siswa yang telah mempercayai Nurul Imam
        Islamic School.
</p> </div> <!-- Swiper (preview 6 item) --> <div class="swiper testi-swiper" data-animate="fade-up" data-delay="150"> <div class="swiper-wrapper pb-12"> ${preview.map((item) => renderTemplate`<div class="swiper-slide"> <div class="testi-card"> <div class="testi-quote-icon" aria-hidden="true"> <svg viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0L16 2.88C11.84 3.84 9.28 6.24 8.32 10.08H14.4V24H0ZM17.6 24V14.4C17.6 6.4 22.4 1.6 32 0L33.6 2.88C29.44 3.84 26.88 6.24 25.92 10.08H32V24H17.6Z" fill="currentColor"></path> </svg> </div> <p class="testi-message">${item.message}</p> <div class="testi-stars"${addAttribute(`Rating: ${item.rating} dari 5`, "aria-label")}> ${Array.from({ length: 5 }).map((_, i) => renderTemplate`<svg${addAttribute(`testi-star${i < item.rating ? " testi-star--filled" : ""}`, "class")} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"> <path d="M8 1L9.85 5.72L15 6.18L11.25 9.47L12.42 14.5L8 11.77L3.58 14.5L4.75 9.47L1 6.18L6.15 5.72L8 1Z"></path> </svg>`)} </div> <div class="testi-divider"></div> <div class="testi-author"> <div class="testi-avatar">${item.initial}</div> <div class="testi-author-info"> <span class="testi-author-name">${item.name}</span> <span class="testi-author-role">${item.role}</span> </div> </div> </div> </div>`)} </div> <div class="swiper-pagination testi-pagination"></div> </div> <!-- Tombol buka modal --> <div data-animate="fade-up" data-delay="250" class="testi-cta"> <button class="testi-cta-btn" id="testiOpenBtn" aria-haspopup="dialog"> <span>Lihat Semua Testimoni</span> <span class="testi-cta-count">(${testimonials.length})</span> <svg class="testi-cta-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"> <path d="M3 8h10M9 4l4 4-4 4"></path> </svg> </button> </div> </div> </section> <!-- ══════════════════════════════════════
     MODAL — "Halaman" Semua Testimoni
══════════════════════════════════════ --> <div class="testi-modal" id="testiModal" role="dialog" aria-modal="true" aria-label="Semua Testimoni" aria-hidden="true"> <!-- Backdrop --> <div class="testi-modal-backdrop" id="testiBackdrop"></div> <!-- Panel --> <div class="testi-modal-panel" id="testiPanel"> <!-- Modal Header --> <div class="testi-modal-header"> <div class="testi-modal-header-left"> <button class="testi-modal-back" id="testiCloseBtn" aria-label="Kembali"> <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"> <path d="M12 4l-6 6 6 6"></path> </svg> <span>Kembali</span> </button> <div class="testi-modal-title-block"> <h2 class="testi-modal-title">Semua Testimoni</h2> <span class="testi-modal-count" id="testiCountLabel"> ${testimonials.length} ulasan
</span> </div> </div> <!-- Search --> <div class="testi-modal-search-wrap"> <svg class="testi-search-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"> <circle cx="9" cy="9" r="5.5"></circle> <path d="M14 14l3.5 3.5"></path> </svg> <input class="testi-search-input" id="testiSearch" type="search" placeholder="Cari nama atau pesan…" aria-label="Cari testimoni"> </div> </div> <!-- Filter Rating --> <div class="testi-modal-filters"> <span class="testi-filter-label">Filter:</span> ${[0, 5, 4, 3].map((r) => renderTemplate`<button${addAttribute(`testi-filter-btn${r === 0 ? " active" : ""}`, "class")}${addAttribute(r, "data-rating")}${addAttribute(r === 0 ? "true" : "false", "aria-pressed")}> ${r === 0 ? "Semua" : `${r} ★`} </button>`)} </div> <!-- Grid --> <div class="testi-modal-body"> <div class="testi-modal-grid" id="testiModalGrid"> ${testimonials.map((item) => renderTemplate`<div class="testi-card testi-modal-card"${addAttribute(item.name.toLowerCase(), "data-name")}${addAttribute(item.message.toLowerCase(), "data-message")}${addAttribute(item.rating, "data-rating")}> <div class="testi-quote-icon" aria-hidden="true"> <svg viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0L16 2.88C11.84 3.84 9.28 6.24 8.32 10.08H14.4V24H0ZM17.6 24V14.4C17.6 6.4 22.4 1.6 32 0L33.6 2.88C29.44 3.84 26.88 6.24 25.92 10.08H32V24H17.6Z" fill="currentColor"></path> </svg> </div> <p class="testi-message">${item.message}</p> <div class="testi-stars"${addAttribute(`Rating: ${item.rating} dari 5`, "aria-label")}> ${Array.from({ length: 5 }).map((_, i) => renderTemplate`<svg${addAttribute(`testi-star${i < item.rating ? " testi-star--filled" : ""}`, "class")} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"> <path d="M8 1L9.85 5.72L15 6.18L11.25 9.47L12.42 14.5L8 11.77L3.58 14.5L4.75 9.47L1 6.18L6.15 5.72L8 1Z"></path> </svg>`)} </div> <div class="testi-divider"></div> <div class="testi-author"> <div class="testi-avatar">${item.initial}</div> <div class="testi-author-info"> <span class="testi-author-name">${item.name}</span> <span class="testi-author-role">${item.role}</span> </div> </div> </div>`)} </div> <!-- Empty state --> <div class="testi-empty" id="testiEmpty" aria-live="polite"> <svg viewBox="0 0 48 48" fill="none" aria-hidden="true"> <circle cx="24" cy="24" r="20" stroke="#bbf7d0" stroke-width="2"></circle> <path d="M16 24h16M24 16v16" stroke="#16a34a" stroke-width="2" stroke-linecap="round"></path> </svg> <p>Tidak ada testimoni yang cocok.</p> </div> </div> </div> </div> ${renderScript($$result, "C:/laragon/www/sisit-niis/src/components/landing/Testimonial.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/laragon/www/sisit-niis/src/components/landing/Testimonial.astro", void 0);

const $$News = createComponent(($$result, $$props, $$slots) => {
  const categories = ["Semua", "Kegiatan", "Prestasi", "Pengumuman"];
  return renderTemplate`${maybeRenderHead()}<section id="news" class="news-section"> <div class="news-container"> <!-- Header --> <div class="text-center mb-12"> <span data-animate="fade-up" data-delay="100" class="inline-block bg-green-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-4 shadow-md">
Kabar Terbaru
</span> <h2 data-animate="fade-up" data-delay="200" class="text-4xl font-bold text-gray-900 mb-4">
Berita & <span class="text-green-700">Kegiatan</span> </h2> <p data-animate="fade-up" data-delay="300" class="text-gray-700 text-lg max-w-2xl mx-auto">
Informasi seputar kegiatan, prestasi, dan perkembangan di Nurul Imam
        Islamic School.
</p> </div> <!-- Filter Tabs --> <div data-animate="fade-up" data-delay="150" class="news-tabs"> ${categories.map((cat) => renderTemplate`<button${addAttribute(`news-tab${cat === "Semua" ? " active" : ""}`, "class")}${addAttribute(cat.toLowerCase(), "data-filter")}> ${cat} </button>`)} </div> <!-- Grid --> <div class="news-grid" id="newsGrid"> ${newsList.map((item, i) => renderTemplate`<article${addAttribute(`news-card${i === 0 ? " news-card--featured" : ""}`, "class")}${addAttribute(item.category?.toLowerCase() ?? "kegiatan", "data-category")} data-animate="fade-up"${addAttribute(String((i % 3 + 1) * 100), "data-delay")}> <div class="news-card-image"> <img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} loading="lazy"> <div class="news-card-overlay"></div> ${item.category && renderTemplate`<span class="news-card-cat">${item.category}</span>`} </div> <div class="news-card-body"> <div class="news-card-meta"> <span>${item.date ?? "Apr 2025"}</span> <span class="news-meta-sep"></span> <span>${item.readTime ?? "2 menit"} baca</span> </div> <h3 class="news-card-title">${item.title}</h3> <p class="news-card-desc">${item.description}</p> <a${addAttribute(`/berita/${item.id}`, "href")} class="news-card-link">
Baca selengkapnya
<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"> <path d="M2 10L10 2M10 2H4M10 2v6"></path> </svg> </a> </div> </article>`)} </div> <!-- CTA --> <div data-animate="fade-up" data-delay="200" class="news-cta"> <a href="/berita" class="news-cta-btn">
Lihat Semua Berita
<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"> <path d="M3 8h10M9 4l4 4-4 4"></path> </svg> </a> </div> </div> ${renderScript($$result, "C:/laragon/www/sisit-niis/src/components/landing/News.astro?astro&type=script&index=0&lang.ts")} </section>`;
}, "C:/laragon/www/sisit-niis/src/components/landing/News.astro", void 0);

const schoolCalendar = [
  {
    day: "12",
    month: "May",
    title: "Mid Semester Exam",
    time: "07.30 AM",
    description: "Mid semester examinations begin simultaneously for all grade levels."
  },
  {
    day: "18",
    month: "May",
    title: "Quran Memorization Contest",
    time: "08.00 AM",
    description: "Student Quran memorization competition to encourage learning spirit."
  },
  {
    day: "25",
    month: "May",
    title: "Educational Field Trip",
    time: "06.30 AM",
    description: "Outdoor learning activity visiting museums and science centers."
  },
  {
    day: "02",
    month: "Jun",
    title: "Report Card Distribution",
    time: "09.00 AM",
    description: "Parents attend school to receive semester academic reports."
  },
  {
    day: "10",
    month: "Jun",
    title: "Tahfidz Graduation",
    time: "08.00 AM",
    description: "Graduation ceremony for Quran memorizers and academic achievers."
  },
  {
    day: "15",
    month: "Jun",
    title: "Semester Holiday Begins",
    time: "Starting Today",
    description: "Beginning of semester break for all students."
  }
];

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$SchoolCalendar = createComponent(($$result, $$props, $$slots) => {
  const eventsJson = JSON.stringify(schoolCalendar);
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<section id="calendar" class="relative py-20 bg-gradient-to-b from-green-50 via-white to-green-100 px-6 overflow-hidden"> <div class="relative max-w-7xl mx-auto z-10"> <!-- Header --> <div class="text-center mb-12"> <span data-animate="fade-up" data-delay="100" class="inline-block bg-green-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-4 shadow-md">\nCalendar\n</span> <h2 data-animate="fade-up" data-delay="200" class="text-4xl md:text-5xl font-bold mb-4 text-gray-900">\nSchool <span class="text-green-700">Events</span> </h2> <p data-animate="fade-up" data-delay="300" class="text-gray-700 max-w-2xl mx-auto text-sm md:text-base">\nImportant schedules, activities, and special student moments throughout\n        the academic year.\n</p> </div> <!-- Calendar Box --> <div class="border border-green-200 rounded-3xl overflow-hidden shadow-xl bg-white" data-animate="fade-up" data-delay="300"> <!-- Top Bar --> <div class="flex items-center justify-between px-5 py-4 border-b border-green-100 bg-white"> <div class="flex items-center gap-3 flex-wrap"> <button id="cal-prev" class="cal-nav-btn bg-green-100 hover:bg-green-200 text-green-700 w-10 h-10 rounded-xl transition">\n&#8249;\n</button> <h3 id="cal-title" class="text-base font-semibold text-gray-800 min-w-[140px]"></h3> <button id="cal-next" class="cal-nav-btn bg-green-100 hover:bg-green-200 text-green-700 w-10 h-10 rounded-xl transition">\n&#8250;\n</button> <button id="cal-today" class="cal-today-btn bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition">\nToday\n</button> </div> </div> <!-- Body --> <div class="flex"> <!-- Sidebar --> <div class="hidden md:block cal-sidebar bg-green-50 border-r border-green-100"> <div class="flex items-center justify-between mb-2"> <span id="mini-title" class="mini-month-title text-gray-800 font-semibold"></span> </div> <div class="mini-day-labels"> ', ' </div> <div id="mini-grid" class="mini-grid"></div> <div class="mt-4"> <p class="upcoming-label text-green-700 font-semibold">Upcoming</p> <div id="sidebar-upcoming"></div> </div> </div> <!-- Main Grid --> <div class="flex-1 min-w-0 bg-white"> <div class="grid grid-cols-7 border-b border-green-100"> ', ' </div> <div class="grid grid-cols-7" id="cal-grid"></div> </div> </div> <!-- Event Detail --> <div id="event-detail" class="event-detail-panel bg-green-50 border-t border-green-100"> <p class="event-detail-empty text-gray-700">\nClick an event to see details.\n</p> </div> </div> </div> </section>  <script>(function(){', '\n  function initCalendar() {\n    // Cek elemen ada dulu\n    if (!document.getElementById("cal-grid")) return;\n\n    const rawEvents = JSON.parse(eventsJson);\n\n    const monthMap = {\n      Jan: 0,\n      Feb: 1,\n      Mar: 2,\n      Apr: 3,\n      May: 4,\n      Jun: 5,\n      Jul: 6,\n      Aug: 7,\n      Sep: 8,\n      Oct: 9,\n      Nov: 10,\n      Dec: 11,\n    };\n\n    const events = rawEvents.map((e) => ({\n      ...e,\n      monthIndex: monthMap[e.month.slice(0, 3)],\n      dayNum: parseInt(e.day),\n      year: 2026,\n    }));\n\n    const monthNames = [\n      "January",\n      "February",\n      "March",\n      "April",\n      "May",\n      "June",\n      "July",\n      "August",\n      "September",\n      "October",\n      "November",\n      "December",\n    ];\n\n    const today = new Date();\n    let cur = { year: today.getFullYear(), month: today.getMonth() };\n\n    function getEvents(d, m, y) {\n      return events.filter(\n        (e) => e.dayNum === d && e.monthIndex === m && e.year === y,\n      );\n    }\n\n    function renderMain() {\n      document.getElementById("cal-title").textContent =\n        monthNames[cur.month] + " " + cur.year;\n\n      const first = new Date(cur.year, cur.month, 1).getDay();\n      const days = new Date(cur.year, cur.month + 1, 0).getDate();\n      const prevDays = new Date(cur.year, cur.month, 0).getDate();\n      const grid = document.getElementById("cal-grid");\n      let html = "";\n\n      for (let i = 0; i < first; i++) {\n        const d = prevDays - first + 1 + i;\n        html += `<div class="cal-cell other-month"><div class="cell-date">${d}</div></div>`;\n      }\n\n      for (let d = 1; d <= days; d++) {\n        const isToday =\n          d === today.getDate() &&\n          cur.month === today.getMonth() &&\n          cur.year === today.getFullYear();\n        const evs = getEvents(d, cur.month, cur.year);\n        const chips = evs\n          .map(\n            (e) =>\n              `<span class="event-chip" data-day="${e.dayNum}" data-month="${e.monthIndex}" data-year="${e.year}">${e.title}</span>`,\n          )\n          .join("");\n        html += `<div class="cal-cell${isToday ? " today" : ""}"><div class="cell-date">${d}</div>${chips}</div>`;\n      }\n\n      const rem = (7 - ((first + days) % 7)) % 7;\n      for (let i = 1; i <= rem; i++) {\n        html += `<div class="cal-cell other-month"><div class="cell-date">${i}</div></div>`;\n      }\n\n      grid.innerHTML = html;\n\n      grid.querySelectorAll(".event-chip").forEach((chip) => {\n        chip.addEventListener("click", (e) => {\n          e.stopPropagation();\n          showEvent(\n            parseInt(chip.dataset.day),\n            parseInt(chip.dataset.month),\n            parseInt(chip.dataset.year),\n          );\n        });\n      });\n    }\n\n    function renderMini() {\n      document.getElementById("mini-title").textContent =\n        monthNames[cur.month].slice(0, 3) + " " + cur.year;\n\n      const first = new Date(cur.year, cur.month, 1).getDay();\n      const days = new Date(cur.year, cur.month + 1, 0).getDate();\n      const prevDays = new Date(cur.year, cur.month, 0).getDate();\n      const grid = document.getElementById("mini-grid");\n      let html = "";\n\n      for (let i = 0; i < first; i++) {\n        html += `<div class="mini-day other-month">${prevDays - first + 1 + i}</div>`;\n      }\n\n      for (let d = 1; d <= days; d++) {\n        const isToday =\n          d === today.getDate() &&\n          cur.month === today.getMonth() &&\n          cur.year === today.getFullYear();\n        const hasEv = getEvents(d, cur.month, cur.year).length > 0;\n        const cls = isToday ? "today" : hasEv ? "has-event" : "";\n        html += `<div class="mini-day ${cls}">${d}</div>`;\n      }\n\n      const rem = (7 - ((first + days) % 7)) % 7;\n      for (let i = 1; i <= rem; i++) {\n        html += `<div class="mini-day other-month">${i}</div>`;\n      }\n\n      grid.innerHTML = html;\n    }\n\n    function renderSidebar() {\n      const upcoming = events\n        .filter((e) => new Date(e.year, e.monthIndex, e.dayNum) >= today)\n        .slice(0, 4);\n\n      document.getElementById("sidebar-upcoming").innerHTML = upcoming\n        .map(\n          (e) => `\n        <div class="event-row" data-day="${e.dayNum}" data-month="${e.monthIndex}" data-year="${e.year}">\n          <span class="event-row-dot"></span>\n          <div>\n            <p class="event-row-title">${e.title}</p>\n            <p class="event-row-date">${e.month} ${e.day}</p>\n          </div>\n        </div>\n      `,\n        )\n        .join("");\n\n      document\n        .getElementById("sidebar-upcoming")\n        .querySelectorAll(".event-row")\n        .forEach((el) => {\n          el.addEventListener("click", () =>\n            showEvent(\n              parseInt(el.dataset.day),\n              parseInt(el.dataset.month),\n              parseInt(el.dataset.year),\n            ),\n          );\n        });\n    }\n\n    function showEvent(d, m, y) {\n      const ev = getEvents(d, m, y)[0];\n      if (!ev) return;\n      document.getElementById("event-detail").innerHTML = `\n        <div>\n          <p class="event-detail-title">${ev.title}</p>\n          <p class="event-detail-meta">${monthNames[m]} ${d}, ${y} &nbsp;·&nbsp; ${ev.time}</p>\n          <p class="event-detail-desc">${ev.description}</p>\n        </div>\n      `;\n    }\n\n    // Tombol navigasi — clone untuk remove listener lama\n    const prevBtn = document.getElementById("cal-prev");\n    const nextBtn = document.getElementById("cal-next");\n    const todayBtn = document.getElementById("cal-today");\n\n    prevBtn.replaceWith(prevBtn.cloneNode(true));\n    nextBtn.replaceWith(nextBtn.cloneNode(true));\n    todayBtn.replaceWith(todayBtn.cloneNode(true));\n\n    document.getElementById("cal-prev").addEventListener("click", () => {\n      cur.month--;\n      if (cur.month < 0) {\n        cur.month = 11;\n        cur.year--;\n      }\n      renderMain();\n      renderMini();\n    });\n\n    document.getElementById("cal-next").addEventListener("click", () => {\n      cur.month++;\n      if (cur.month > 11) {\n        cur.month = 0;\n        cur.year++;\n      }\n      renderMain();\n      renderMini();\n    });\n\n    document.getElementById("cal-today").addEventListener("click", () => {\n      cur = { year: today.getFullYear(), month: today.getMonth() };\n      renderMain();\n      renderMini();\n    });\n\n    renderMain();\n    renderMini();\n    renderSidebar();\n  }\n\n  // Init saat load pertama & setelah View Transition\n  initCalendar();\n  document.addEventListener("astro:after-swap", initCalendar);\n})();<\/script>'], ["", '<section id="calendar" class="relative py-20 bg-gradient-to-b from-green-50 via-white to-green-100 px-6 overflow-hidden"> <div class="relative max-w-7xl mx-auto z-10"> <!-- Header --> <div class="text-center mb-12"> <span data-animate="fade-up" data-delay="100" class="inline-block bg-green-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-4 shadow-md">\nCalendar\n</span> <h2 data-animate="fade-up" data-delay="200" class="text-4xl md:text-5xl font-bold mb-4 text-gray-900">\nSchool <span class="text-green-700">Events</span> </h2> <p data-animate="fade-up" data-delay="300" class="text-gray-700 max-w-2xl mx-auto text-sm md:text-base">\nImportant schedules, activities, and special student moments throughout\n        the academic year.\n</p> </div> <!-- Calendar Box --> <div class="border border-green-200 rounded-3xl overflow-hidden shadow-xl bg-white" data-animate="fade-up" data-delay="300"> <!-- Top Bar --> <div class="flex items-center justify-between px-5 py-4 border-b border-green-100 bg-white"> <div class="flex items-center gap-3 flex-wrap"> <button id="cal-prev" class="cal-nav-btn bg-green-100 hover:bg-green-200 text-green-700 w-10 h-10 rounded-xl transition">\n&#8249;\n</button> <h3 id="cal-title" class="text-base font-semibold text-gray-800 min-w-[140px]"></h3> <button id="cal-next" class="cal-nav-btn bg-green-100 hover:bg-green-200 text-green-700 w-10 h-10 rounded-xl transition">\n&#8250;\n</button> <button id="cal-today" class="cal-today-btn bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition">\nToday\n</button> </div> </div> <!-- Body --> <div class="flex"> <!-- Sidebar --> <div class="hidden md:block cal-sidebar bg-green-50 border-r border-green-100"> <div class="flex items-center justify-between mb-2"> <span id="mini-title" class="mini-month-title text-gray-800 font-semibold"></span> </div> <div class="mini-day-labels"> ', ' </div> <div id="mini-grid" class="mini-grid"></div> <div class="mt-4"> <p class="upcoming-label text-green-700 font-semibold">Upcoming</p> <div id="sidebar-upcoming"></div> </div> </div> <!-- Main Grid --> <div class="flex-1 min-w-0 bg-white"> <div class="grid grid-cols-7 border-b border-green-100"> ', ' </div> <div class="grid grid-cols-7" id="cal-grid"></div> </div> </div> <!-- Event Detail --> <div id="event-detail" class="event-detail-panel bg-green-50 border-t border-green-100"> <p class="event-detail-empty text-gray-700">\nClick an event to see details.\n</p> </div> </div> </div> </section>  <script>(function(){', '\n  function initCalendar() {\n    // Cek elemen ada dulu\n    if (!document.getElementById("cal-grid")) return;\n\n    const rawEvents = JSON.parse(eventsJson);\n\n    const monthMap = {\n      Jan: 0,\n      Feb: 1,\n      Mar: 2,\n      Apr: 3,\n      May: 4,\n      Jun: 5,\n      Jul: 6,\n      Aug: 7,\n      Sep: 8,\n      Oct: 9,\n      Nov: 10,\n      Dec: 11,\n    };\n\n    const events = rawEvents.map((e) => ({\n      ...e,\n      monthIndex: monthMap[e.month.slice(0, 3)],\n      dayNum: parseInt(e.day),\n      year: 2026,\n    }));\n\n    const monthNames = [\n      "January",\n      "February",\n      "March",\n      "April",\n      "May",\n      "June",\n      "July",\n      "August",\n      "September",\n      "October",\n      "November",\n      "December",\n    ];\n\n    const today = new Date();\n    let cur = { year: today.getFullYear(), month: today.getMonth() };\n\n    function getEvents(d, m, y) {\n      return events.filter(\n        (e) => e.dayNum === d && e.monthIndex === m && e.year === y,\n      );\n    }\n\n    function renderMain() {\n      document.getElementById("cal-title").textContent =\n        monthNames[cur.month] + " " + cur.year;\n\n      const first = new Date(cur.year, cur.month, 1).getDay();\n      const days = new Date(cur.year, cur.month + 1, 0).getDate();\n      const prevDays = new Date(cur.year, cur.month, 0).getDate();\n      const grid = document.getElementById("cal-grid");\n      let html = "";\n\n      for (let i = 0; i < first; i++) {\n        const d = prevDays - first + 1 + i;\n        html += \\`<div class="cal-cell other-month"><div class="cell-date">\\${d}</div></div>\\`;\n      }\n\n      for (let d = 1; d <= days; d++) {\n        const isToday =\n          d === today.getDate() &&\n          cur.month === today.getMonth() &&\n          cur.year === today.getFullYear();\n        const evs = getEvents(d, cur.month, cur.year);\n        const chips = evs\n          .map(\n            (e) =>\n              \\`<span class="event-chip" data-day="\\${e.dayNum}" data-month="\\${e.monthIndex}" data-year="\\${e.year}">\\${e.title}</span>\\`,\n          )\n          .join("");\n        html += \\`<div class="cal-cell\\${isToday ? " today" : ""}"><div class="cell-date">\\${d}</div>\\${chips}</div>\\`;\n      }\n\n      const rem = (7 - ((first + days) % 7)) % 7;\n      for (let i = 1; i <= rem; i++) {\n        html += \\`<div class="cal-cell other-month"><div class="cell-date">\\${i}</div></div>\\`;\n      }\n\n      grid.innerHTML = html;\n\n      grid.querySelectorAll(".event-chip").forEach((chip) => {\n        chip.addEventListener("click", (e) => {\n          e.stopPropagation();\n          showEvent(\n            parseInt(chip.dataset.day),\n            parseInt(chip.dataset.month),\n            parseInt(chip.dataset.year),\n          );\n        });\n      });\n    }\n\n    function renderMini() {\n      document.getElementById("mini-title").textContent =\n        monthNames[cur.month].slice(0, 3) + " " + cur.year;\n\n      const first = new Date(cur.year, cur.month, 1).getDay();\n      const days = new Date(cur.year, cur.month + 1, 0).getDate();\n      const prevDays = new Date(cur.year, cur.month, 0).getDate();\n      const grid = document.getElementById("mini-grid");\n      let html = "";\n\n      for (let i = 0; i < first; i++) {\n        html += \\`<div class="mini-day other-month">\\${prevDays - first + 1 + i}</div>\\`;\n      }\n\n      for (let d = 1; d <= days; d++) {\n        const isToday =\n          d === today.getDate() &&\n          cur.month === today.getMonth() &&\n          cur.year === today.getFullYear();\n        const hasEv = getEvents(d, cur.month, cur.year).length > 0;\n        const cls = isToday ? "today" : hasEv ? "has-event" : "";\n        html += \\`<div class="mini-day \\${cls}">\\${d}</div>\\`;\n      }\n\n      const rem = (7 - ((first + days) % 7)) % 7;\n      for (let i = 1; i <= rem; i++) {\n        html += \\`<div class="mini-day other-month">\\${i}</div>\\`;\n      }\n\n      grid.innerHTML = html;\n    }\n\n    function renderSidebar() {\n      const upcoming = events\n        .filter((e) => new Date(e.year, e.monthIndex, e.dayNum) >= today)\n        .slice(0, 4);\n\n      document.getElementById("sidebar-upcoming").innerHTML = upcoming\n        .map(\n          (e) => \\`\n        <div class="event-row" data-day="\\${e.dayNum}" data-month="\\${e.monthIndex}" data-year="\\${e.year}">\n          <span class="event-row-dot"></span>\n          <div>\n            <p class="event-row-title">\\${e.title}</p>\n            <p class="event-row-date">\\${e.month} \\${e.day}</p>\n          </div>\n        </div>\n      \\`,\n        )\n        .join("");\n\n      document\n        .getElementById("sidebar-upcoming")\n        .querySelectorAll(".event-row")\n        .forEach((el) => {\n          el.addEventListener("click", () =>\n            showEvent(\n              parseInt(el.dataset.day),\n              parseInt(el.dataset.month),\n              parseInt(el.dataset.year),\n            ),\n          );\n        });\n    }\n\n    function showEvent(d, m, y) {\n      const ev = getEvents(d, m, y)[0];\n      if (!ev) return;\n      document.getElementById("event-detail").innerHTML = \\`\n        <div>\n          <p class="event-detail-title">\\${ev.title}</p>\n          <p class="event-detail-meta">\\${monthNames[m]} \\${d}, \\${y} &nbsp;·&nbsp; \\${ev.time}</p>\n          <p class="event-detail-desc">\\${ev.description}</p>\n        </div>\n      \\`;\n    }\n\n    // Tombol navigasi — clone untuk remove listener lama\n    const prevBtn = document.getElementById("cal-prev");\n    const nextBtn = document.getElementById("cal-next");\n    const todayBtn = document.getElementById("cal-today");\n\n    prevBtn.replaceWith(prevBtn.cloneNode(true));\n    nextBtn.replaceWith(nextBtn.cloneNode(true));\n    todayBtn.replaceWith(todayBtn.cloneNode(true));\n\n    document.getElementById("cal-prev").addEventListener("click", () => {\n      cur.month--;\n      if (cur.month < 0) {\n        cur.month = 11;\n        cur.year--;\n      }\n      renderMain();\n      renderMini();\n    });\n\n    document.getElementById("cal-next").addEventListener("click", () => {\n      cur.month++;\n      if (cur.month > 11) {\n        cur.month = 0;\n        cur.year++;\n      }\n      renderMain();\n      renderMini();\n    });\n\n    document.getElementById("cal-today").addEventListener("click", () => {\n      cur = { year: today.getFullYear(), month: today.getMonth() };\n      renderMain();\n      renderMini();\n    });\n\n    renderMain();\n    renderMini();\n    renderSidebar();\n  }\n\n  // Init saat load pertama & setelah View Transition\n  initCalendar();\n  document.addEventListener("astro:after-swap", initCalendar);\n})();<\/script>'])), maybeRenderHead(), ["S", "M", "T", "W", "T", "F", "S"].map((l) => renderTemplate`<div class="mini-day-label text-green-700">${l}</div>`), ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => renderTemplate`<div class="day-header-label bg-green-50 text-green-700 font-semibold"> ${d} </div>`), defineScriptVars({ eventsJson }));
}, "C:/laragon/www/sisit-niis/src/components/landing/SchoolCalendar.astro", void 0);

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    {
      q: "Bagaimana sistem tahfidz di sekolah ini?",
      a: "Kami menggunakan metode talaqqi dengan target hafalan per pekan, evaluasi rutin, serta laporan perkembangan ke orang tua melalui aplikasi."
    },
    {
      q: "Bagaimana sistem pembayaran SPP dan pendaftaran?",
      a: "Pembayaran bisa dilakukan melalui transfer bank. Detail biaya akan diinformasikan saat pendaftaran atau melalui brosur resmi sekolah."
    },
    {
      q: "Apakah sekolah memiliki sistem full day?",
      a: "Ya, sistem full day diberlakukan mulai dari pagi hingga sore dengan pembelajaran akademik, diniyah, tahfidz, dan kegiatan karakter."
    },
    {
      q: "Apakah orang tua bisa memantau perkembangan anak secara online?",
      a: "Tentu. Kami memiliki sistem informasi sekolah berbasis web (SISIT-App) yang memungkinkan wali murid memantau nilai, hafalan, absensi, dan pengumuman."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="pertanyaan" class="relative py-20 bg-gradient-to-b from-green-50 via-white to-green-100 overflow-hidden" data-astro-cid-bykv3gyu> <!-- Background Pattern --> <svg class="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" data-astro-cid-bykv3gyu> <defs data-astro-cid-bykv3gyu> <pattern id="star" patternUnits="userSpaceOnUse" width="50" height="50" data-astro-cid-bykv3gyu> <path d="M25 0 L30 20 L50 25 L30 30 L25 50 L20 30 L0 25 L20 20 Z" fill="none" stroke="#16610E" stroke-width="1" data-astro-cid-bykv3gyu></path> </pattern> </defs> <rect width="100%" height="100%" fill="url(#star)" data-astro-cid-bykv3gyu></rect> </svg> <div class="relative max-w-4xl mx-auto px-4 z-10" data-astro-cid-bykv3gyu> <!-- Header --> <div data-animate="fade-up" data-delay="100" class="text-center mb-12" data-astro-cid-bykv3gyu> <span class="inline-block bg-green-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-4 shadow-md" data-astro-cid-bykv3gyu>
Pertanyaan
</span> <h2 data-animate="fade-up" data-delay="200" class="text-4xl font-bold text-gray-900 mb-4" data-astro-cid-bykv3gyu>
Pertanyaan <span class="text-green-700" data-astro-cid-bykv3gyu>Umum</span> </h2> <p data-animate="fade-up" data-delay="300" class="text-gray-700 text-lg max-w-2xl mx-auto" data-astro-cid-bykv3gyu>
Temukan jawaban dari pertanyaan yang sering diajukan oleh orang tua
        calon siswa
</p> </div> <!-- Accordion --> <div class="space-y-4" data-astro-cid-bykv3gyu> ${faqs.map((faq, i) => renderTemplate`<div class="faq-item bg-white border border-green-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300" data-animate="fade-up"${addAttribute(String((i + 1) * 100), "data-delay")} data-astro-cid-bykv3gyu> <button class="faq-toggle w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-green-50 transition-colors duration-200" aria-expanded="false" data-astro-cid-bykv3gyu> <span class="font-semibold text-gray-800 text-base md:text-lg" data-astro-cid-bykv3gyu> ${faq.q} </span> <svg class="faq-icon w-5 h-5 text-green-700 transition-transform duration-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-bykv3gyu> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-bykv3gyu></path> </svg> </button> <div class="faq-answer grid grid-rows-[0fr] transition-all duration-300 ease-in-out bg-green-50" data-astro-cid-bykv3gyu> <div class="overflow-hidden" data-astro-cid-bykv3gyu> <p class="px-6 py-4 text-gray-700 leading-relaxed" data-astro-cid-bykv3gyu>${faq.a}</p> </div> </div> </div>`)} </div> </div> </section>  ${renderScript($$result, "C:/laragon/www/sisit-niis/src/components/landing/Faq.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/laragon/www/sisit-niis/src/components/landing/Faq.astro", void 0);

const $$SchoolLocation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-gray-50"> <div class="max-w-7xl mx-auto px-6"> <!-- Header --> <div class="text-center mb-10" data-aos="fade-down"> <span data-animate="fade-up" data-delay="100" class="inline-block bg-green-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-4 shadow-md">
Lokasi
</span> <h2 data-animate="fade-up" data-delay="200" class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
Lokasi <span class="text-green-600">Sekolah</span> </h2> <p data-animate="fade-up" data-delay="300" class="text-gray-600 text-sm max-w-2xl mx-auto">
Temukan lokasi unit sekolah Nurul Imam Islamic School di Karawang.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <!-- NIIS 1 & 2 --> <div data-animate="fade-right" data-delay="200" class="slide-in-left"> <div class="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-lg"> <div class="bg-gradient-to-br from-green-100 to-blue-100 px-4 py-5"> <div class="text-center text-sm"> <iframe class="w-full h-[250px] mb-3 rounded-md border border-white/40" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4962.222322405658!2d107.34351147593001!3d-6.310008261753081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6977106fbc0627%3A0x700f5b1e30d6e5c6!2sNurul%20Imam%20Islamic%20School!5e1!3m2!1sid!2sid!4v1731302605539!5m2!1sid!2sid">
              </iframe> <h4 class="text-base font-bold text-gray-800 mb-1">NIIS 1 & 2</h4> <p class="text-gray-600 text-xs mb-1 leading-relaxed">
Jl. Manunggal XIX, Pasirjengkol,<br>
Kec. Majalaya, Karawang 41371
</p> <p class="text-gray-600 text-xs mb-1">📞 0812-8215-9719</p> <p class="text-gray-600 text-xs">📧 info@nurulimam.sch.id</p> <div class="mt-3 flex items-center justify-center gap-2"> <a href="https://www.google.com/maps/dir/?api=1&destination=-6.3100083,107.3435115" target="_blank" rel="noopener" class="text-xs bg-green-600 text-white px-4 py-1.5 rounded hover:bg-green-700 transition-all"> <i class="fas fa-route mr-1"></i>Rute Langsung
</a> </div> </div> </div> </div> </div> <!-- NIIS 3 --> <div data-animate="fade-left" data-delay="200" class="slide-in-right"> <div class="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-lg"> <div class="bg-gradient-to-br from-green-100 to-blue-100 px-4 py-5"> <div class="text-center text-sm"> <iframe class="w-full h-[250px] mb-3 rounded-md border border-white/40" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.978982295567!2d107.3551641!3d-6.3527211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x670d444a74ccf03b%3A0x288fae0ef7dbca5c!2sNurul%20Imam%20Islamic%20School%203%20Klari!5e0!3m2!1sid!2sid!4v1719902717000!5m2!1sid!2sid">
              </iframe> <h4 class="text-base font-bold text-gray-800 mb-1">NIIS 3</h4> <p class="text-gray-600 text-xs mb-1 leading-relaxed">
Jl. Trisakti, Perum Klari Indah Permata,<br>
Kec. Klari, Karawang 41371
</p> <p class="text-gray-600 text-xs mb-1">📞 0812-8215-9719</p> <p class="text-gray-600 text-xs">📧 info@nurulimam.sch.id</p> <div class="mt-3 flex items-center justify-center gap-2"> <a href="https://www.google.com/maps/dir/?api=1&destination=-6.3527211,107.3551641" target="_blank" rel="noopener" class="text-xs bg-green-600 text-white px-4 py-1.5 rounded hover:bg-green-700 transition-all"> <i class="fas fa-route mr-1"></i>Rute Langsung
</a> </div> </div> </div> </div> </div> </div> </div> </section>`;
}, "C:/laragon/www/sisit-niis/src/components/landing/SchoolLocation.astro", void 0);

const logoUIN = new Proxy({"src":"/_astro/logo-UIN.W1je5JLt.png","width":1597,"height":1574,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/laragon/www/sisit-niis/src/assets/images/partnership/logo-UIN.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("C:/laragon/www/sisit-niis/src/assets/images/partnership/logo-UIN.png");
							return target[name];
						}
					});

const logoUI = new Proxy({"src":"/_astro/logo-UI.txpnKoJx.png","width":937,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/laragon/www/sisit-niis/src/assets/images/partnership/logo-UI.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("C:/laragon/www/sisit-niis/src/assets/images/partnership/logo-UI.png");
							return target[name];
						}
					});

const logoMUI = new Proxy({"src":"/_astro/logo-MUI.Jpkenhs6.png","width":1202,"height":1199,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/laragon/www/sisit-niis/src/assets/images/partnership/logo-MUI.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("C:/laragon/www/sisit-niis/src/assets/images/partnership/logo-MUI.png");
							return target[name];
						}
					});

const logoBaznas = new Proxy({"src":"/_astro/logo-baznas.C9vPQz2x.png","width":1167,"height":899,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/laragon/www/sisit-niis/src/assets/images/partnership/logo-baznas.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("C:/laragon/www/sisit-niis/src/assets/images/partnership/logo-baznas.png");
							return target[name];
						}
					});

const logoRumahTahfidz = new Proxy({"src":"/_astro/logo-rumah-tahfidz.Cm0kSkXY.png","width":1122,"height":572,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/laragon/www/sisit-niis/src/assets/images/partnership/logo-rumah-tahfidz.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("C:/laragon/www/sisit-niis/src/assets/images/partnership/logo-rumah-tahfidz.png");
							return target[name];
						}
					});

const logoODOJ = new Proxy({"src":"/_astro/logo-odoj-karawang.Dbtcf6qn.png","width":2048,"height":1784,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/laragon/www/sisit-niis/src/assets/images/partnership/logo-odoj-karawang.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("C:/laragon/www/sisit-niis/src/assets/images/partnership/logo-odoj-karawang.png");
							return target[name];
						}
					});

const logoUMMI = new Proxy({"src":"/_astro/logo-UMMI.BmfiqkvA.png","width":509,"height":490,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/laragon/www/sisit-niis/src/assets/images/partnership/logo-UMMI.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("C:/laragon/www/sisit-niis/src/assets/images/partnership/logo-UMMI.png");
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Partnership = createComponent(($$result, $$props, $$slots) => {
  const partners = [
    { name: "UIN SGD Bandung", logo: logoUIN },
    { name: "Universitas Islam Indonesia", logo: logoUI },
    { name: "Majelis Ulama Indonesia", logo: logoMUI },
    { name: "BAZNAS", logo: logoBaznas },
    { name: "Rumah Tahfidz", logo: logoRumahTahfidz },
    { name: "ODOJ Karawang", logo: logoODOJ },
    { name: "UMMI", logo: logoUMMI }
  ];
  return renderTemplate(_a || (_a = __template(["<!-- Ganti bagian Swiper dengan ini -->", '<section class="py-14 bg-gradient-to-br from-blue-50 to-green-50 px-6" data-astro-cid-einawbo3> <div class="max-w-5xl mx-auto" data-astro-cid-einawbo3> <!-- Header --> <div class="text-center mb-12" data-astro-cid-einawbo3> <span data-animate="fade-up" data-delay="100" class="inline-block bg-green-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-4 shadow-md" data-astro-cid-einawbo3>\nKerja Sama\n</span> <h2 data-animate="fade-up" data-delay="200" class="text-4xl md:text-5xl font-bold mb-6 text-gray-800" data-astro-cid-einawbo3>\nPartnership <span class="text-green-600" data-astro-cid-einawbo3>Strategis</span> </h2> <p data-animate="fade-up" data-delay="300" class="text-gray-600 max-w-xl mx-auto" data-astro-cid-einawbo3>\nKami menjalin kemitraan dengan lembaga keislaman dan universitas\n        terkemuka untuk mendukung pengembangan pendidikan Islami berkualitas.\n</p> </div> <!-- Marquee Track --> <div class="marquee-wrapper overflow-hidden relative" data-astro-cid-einawbo3> <!-- Fade edges --> <div class="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-blue-50/80 to-transparent" data-astro-cid-einawbo3></div> <div class="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-green-50/80 to-transparent" data-astro-cid-einawbo3></div> <div class="marquee-track flex gap-5" style="width: max-content;" data-astro-cid-einawbo3> <!-- Render 2x untuk loop seamless --> ', ' </div> </div> </div> </section>  <!-- Import Swiper CSS & JS dari CDN --> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"> <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js">\n<\/script> ', ""])), maybeRenderHead(), [...partners, ...partners].map((item, i) => renderTemplate`<div class="partner-card bg-white border border-green-100 rounded-2xl px-7 py-5 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md hover:border-green-300 transition-all duration-300 group" style="min-width: 160px; height: 120px;" data-astro-cid-einawbo3> <img${addAttribute(item.logo.src, "src")}${addAttribute(item.name, "alt")} class="h-10 object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" data-astro-cid-einawbo3> <span class="text-[11px] font-medium text-gray-400 group-hover:text-green-600 transition-colors duration-300 text-center leading-tight" data-astro-cid-einawbo3> ${item.name} </span> </div>`), renderScript($$result, "C:/laragon/www/sisit-niis/src/components/landing/Partnership.astro?astro&type=script&index=0&lang.ts"));
}, "C:/laragon/www/sisit-niis/src/components/landing/Partnership.astro", void 0);

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="py-20 bg-white" data-astro-cid-zkx2brgl> <div class="max-w-7xl mx-auto px-6" data-astro-cid-zkx2brgl> <!-- Heading --> <div class="text-center mb-16" data-astro-cid-zkx2brgl> <span data-animate="fade-up" data-delay="100" class="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4" data-astro-cid-zkx2brgl>
Kontak
</span> <h2 data-animate="fade-up" data-delay="200" class="text-4xl md:text-5xl font-bold mb-6 text-gray-800" data-astro-cid-zkx2brgl>
Hubungi <span class="text-green-600" data-astro-cid-zkx2brgl>Kami</span> </h2> </div> <!-- Content --> <div class="grid lg:grid-cols-2 gap-16" data-astro-cid-zkx2brgl> <!-- Left --> <div data-animate="fade-right" data-delay="200" class="slide-in-left" data-astro-cid-zkx2brgl> <h3 class="text-2xl font-bold text-gray-800 mb-6" data-astro-cid-zkx2brgl>Informasi Kontak</h3> <div class="space-y-6" data-astro-cid-zkx2brgl> <!-- Alamat NIIS 1 & 2 --> <div class="flex items-start space-x-4" data-astro-cid-zkx2brgl> <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0" data-astro-cid-zkx2brgl> <i class="fas fa-map-marker-alt text-green-600" data-astro-cid-zkx2brgl></i> </div> <div data-astro-cid-zkx2brgl> <h4 class="text-lg font-semibold text-gray-800 mb-1" data-astro-cid-zkx2brgl>
Alamat NIIS 1 & 2
</h4> <p class="text-gray-600" data-astro-cid-zkx2brgl>
Jl. Manunggal XIX, Pasirjengkol, Kec. Majalaya, Karawang, Jawa
                Barat 41371
</p> </div> </div> <!-- Alamat NIIS 3 --> <div class="flex items-start space-x-4" data-astro-cid-zkx2brgl> <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0" data-astro-cid-zkx2brgl> <i class="fas fa-map-marker-alt text-green-600" data-astro-cid-zkx2brgl></i> </div> <div data-astro-cid-zkx2brgl> <h4 class="text-lg font-semibold text-gray-800 mb-1" data-astro-cid-zkx2brgl>
Alamat NIIS 3
</h4> <p class="text-gray-600" data-astro-cid-zkx2brgl>
Jalan Trisakti Perumahan Klari Indah Permata, RT 028 RW 008,
                Dusun Kopo, Desa Klari, Kecamatan Klari, Kabupaten Karawang
                41371
</p> </div> </div> <!-- Telepon --> <div class="flex items-start space-x-4" data-astro-cid-zkx2brgl> <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0" data-astro-cid-zkx2brgl> <i class="fas fa-phone text-blue-600" data-astro-cid-zkx2brgl></i> </div> <div data-astro-cid-zkx2brgl> <h4 class="text-lg font-semibold text-gray-800 mb-1" data-astro-cid-zkx2brgl>Telepon</h4> <a href="tel:+6281282159719" class="text-gray-600 hover:text-green-600 transition-colors" data-astro-cid-zkx2brgl>
0812-8215-9719
</a> </div> </div> <!-- Email --> <div class="flex items-start space-x-4" data-astro-cid-zkx2brgl> <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0" data-astro-cid-zkx2brgl> <i class="fas fa-envelope text-purple-600" data-astro-cid-zkx2brgl></i> </div> <div data-astro-cid-zkx2brgl> <h4 class="text-lg font-semibold text-gray-800 mb-1" data-astro-cid-zkx2brgl>Email</h4> <a href="mailto:info@nurulimam.sch.id" class="text-gray-600 hover:text-green-600 transition-colors" data-astro-cid-zkx2brgl>
info@nurulimam.sch.id
</a> </div> </div> <!-- Website --> <div class="flex items-start space-x-4" data-astro-cid-zkx2brgl> <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0" data-astro-cid-zkx2brgl> <i class="fas fa-globe text-yellow-600" data-astro-cid-zkx2brgl></i> </div> <div data-astro-cid-zkx2brgl> <h4 class="text-lg font-semibold text-gray-800 mb-1" data-astro-cid-zkx2brgl>Website</h4> <a href="https://www.nurulimamkarawang.sch.id/" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-green-600 transition-colors" data-astro-cid-zkx2brgl>
www.nurulimamkarawang.sch.id
</a> </div> </div> </div> </div> <!-- Right --> <div data-animate="fade-left" data-delay="200" class="slide-in-right" data-astro-cid-zkx2brgl> <h3 class="text-2xl font-bold text-gray-800 mb-6" data-astro-cid-zkx2brgl>Kirim Pesan</h3> <form id="contact-form" class="space-y-6" data-astro-cid-zkx2brgl> <!-- Web3Forms Access Key (hidden) --> <input type="hidden" name="access_key" value="bbbc9c27-fe89-4d04-b92c-810e2256db82" data-astro-cid-zkx2brgl> <input type="hidden" name="redirect" value="false" data-astro-cid-zkx2brgl> <input type="hidden" name="subject" id="hidden-subject" value="Pesan Baru dari Website NIIS" data-astro-cid-zkx2brgl> <input type="hidden" name="from_name" value="Website Nurul Imam Islamic School" data-astro-cid-zkx2brgl> <!-- Honeypot anti-spam --> <input type="checkbox" name="botcheck" class="hidden" style="display:none" data-astro-cid-zkx2brgl> <div class="grid md:grid-cols-2 gap-4" data-astro-cid-zkx2brgl> <!-- Nama --> <div data-astro-cid-zkx2brgl> <label for="field-name" class="block text-sm font-semibold text-gray-700 mb-2" data-astro-cid-zkx2brgl>
Nama Lengkap <span class="text-red-500" data-astro-cid-zkx2brgl>*</span> </label> <input type="text" id="field-name" name="name" required autocomplete="name" placeholder="Masukkan nama lengkap" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" data-astro-cid-zkx2brgl> </div> <!-- Telepon --> <div data-astro-cid-zkx2brgl> <label for="field-phone" class="block text-sm font-semibold text-gray-700 mb-2" data-astro-cid-zkx2brgl>
Nomor Telepon
</label> <input type="tel" id="field-phone" name="phone" autocomplete="tel" placeholder="Masukkan nomor telepon" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" data-astro-cid-zkx2brgl> </div> </div> <!-- Email --> <div data-astro-cid-zkx2brgl> <label for="field-email" class="block text-sm font-semibold text-gray-700 mb-2" data-astro-cid-zkx2brgl>
Email <span class="text-red-500" data-astro-cid-zkx2brgl>*</span> </label> <input type="email" id="field-email" name="email" required autocomplete="email" placeholder="Masukkan alamat email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" data-astro-cid-zkx2brgl> </div> <!-- Subjek --> <div data-astro-cid-zkx2brgl> <label for="category-select" class="block text-sm font-semibold text-gray-700 mb-2" data-astro-cid-zkx2brgl>
Subjek
</label> <select name="category" id="category-select" autocomplete="off" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" data-astro-cid-zkx2brgl> <option data-astro-cid-zkx2brgl>Informasi Pendaftaran</option> <option data-astro-cid-zkx2brgl>Konsultasi Program</option> <option data-astro-cid-zkx2brgl>Jadwal Kunjungan</option> <option data-astro-cid-zkx2brgl>Biaya Pendidikan</option> <option data-astro-cid-zkx2brgl>Lainnya</option> </select> </div> <!-- Pesan --> <div data-astro-cid-zkx2brgl> <label for="field-message" class="block text-sm font-semibold text-gray-700 mb-2" data-astro-cid-zkx2brgl>
Pesan <span class="text-red-500" data-astro-cid-zkx2brgl>*</span> </label> <textarea rows="4" id="field-message" name="message" required autocomplete="off" placeholder="Tulis pesan Anda di sini..." class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" data-astro-cid-zkx2brgl>            </textarea> </div> <!-- Button --> <button type="submit" id="submit-btn" class="w-full bg-green-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-700 transition-all hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2" data-astro-cid-zkx2brgl> <i class="fas fa-paper-plane" id="btn-icon" data-astro-cid-zkx2brgl></i> <span id="btn-text" data-astro-cid-zkx2brgl>Kirim Pesan</span> </button> </form> </div> </div> </div> </section>  <!-- Toast Container --> <div id="toast" class="toast" role="alert" data-astro-cid-zkx2brgl> <div class="toast-icon" data-astro-cid-zkx2brgl> <i id="toast-icon" class="fas fa-check" data-astro-cid-zkx2brgl></i> </div> <div data-astro-cid-zkx2brgl> <p id="toast-title" class="font-semibold text-gray-800 text-sm" data-astro-cid-zkx2brgl></p> <p id="toast-desc" class="text-gray-500 text-xs mt-0.5" data-astro-cid-zkx2brgl></p> </div> <button class="toast-close" id="toast-close" aria-label="Tutup" data-astro-cid-zkx2brgl> <i class="fas fa-times" data-astro-cid-zkx2brgl></i> </button> <div class="toast-progress" id="toast-progress" data-astro-cid-zkx2brgl></div> </div> ${renderScript($$result, "C:/laragon/www/sisit-niis/src/components/landing/Contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/laragon/www/sisit-niis/src/components/landing/Contact.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": " — Sekolah Islam Terpadu" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "ClientRouter", $$ClientRouter, {})}  ${renderComponent($$result2, "PageSkeleton", $$PageSkeleton, {})}       ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Programs", $$Programs, {})} ${renderComponent($$result2, "Achievements", $$Achievements, {})} ${renderComponent($$result2, "Facilities", $$Facilities, {})} ${renderComponent($$result2, "Testimonial", $$Testimonial, {})} ${renderComponent($$result2, "Partnership", $$Partnership, {})} ${renderComponent($$result2, "SchoolCalendar", $$SchoolCalendar, {})} ${renderComponent($$result2, "News", $$News, {})} ${renderComponent($$result2, "Faq", $$Faq, {})} ${renderComponent($$result2, "SchoolLocation", $$SchoolLocation, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} </main>  ` })}`;
}, "C:/laragon/www/sisit-niis/src/pages/index.astro", void 0);

const $$file = "C:/laragon/www/sisit-niis/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
