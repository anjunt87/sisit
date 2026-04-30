import { c as createComponent } from './astro-component_D77M9rGE.mjs';
import 'piccolore';
import { n as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_uw6GGwwS.mjs';
import { r as renderScript } from './script_Dq8pU697.mjs';
import { $ as $$BaseLayout } from './BaseLayout_-31gxKTm.mjs';
/* empty css               */

const $$PpdbDaftar = createComponent(($$result, $$props, $$slots) => {
  const TAHUN = "2025/2026";
  const jenjang = [
    {
      id: "pg",
      label: "PG",
      nama: "Play Group",
      usia: "2–3 tahun",
      kuota: 20,
      terisi: 11,
      biaya_pendaftaran: "Rp 150.000",
      biaya_spp: "Rp 400.000/bln",
      icon: "🌱",
      color: "#f8bb54",
      syarat: [
        "Akta Kelahiran",
        "KK / KTP Orang Tua",
        "Pas Foto 3×4 (2 lembar)",
        "Surat Keterangan Sehat"
      ],
      keunggulan: [
        "Stimulasi tumbuh kembang holistik",
        "Sentra bermain berbasis Islam",
        "Rasio guru 1:5",
        "Laporan perkembangan mingguan"
      ]
    },
    {
      id: "tk",
      label: "TK",
      nama: "Taman Kanak-kanak",
      usia: "4–6 tahun",
      kuota: 40,
      terisi: 29,
      biaya_pendaftaran: "Rp 200.000",
      biaya_spp: "Rp 500.000/bln",
      icon: "🌿",
      color: "#f59e0b",
      syarat: [
        "Akta Kelahiran",
        "KK / KTP Orang Tua",
        "Ijazah / Surat Keterangan PG (jika ada)",
        "Pas Foto 3×4 (2 lembar)",
        "Surat Keterangan Sehat"
      ],
      keunggulan: [
        "Hafalan Al-Qur'an Juz 30",
        "Bahasa Arab & Inggris dasar",
        "Kelas seni dan motorik",
        "Persiapan masuk SD"
      ]
    },
    {
      id: "sd",
      label: "SD",
      nama: "Sekolah Dasar Islam",
      usia: "6–12 tahun",
      kuota: 120,
      terisi: 87,
      biaya_pendaftaran: "Rp 350.000",
      biaya_spp: "Rp 750.000/bln",
      icon: "📖",
      color: "#10b981",
      syarat: [
        "Akta Kelahiran",
        "KK / KTP Orang Tua",
        "Ijazah / Sertifikat TK",
        "Pas Foto 3×4 (3 lembar)",
        "Surat Keterangan Sehat",
        "Raport Semester Terakhir"
      ],
      keunggulan: [
        "Kurikulum Merdeka + Islami",
        "Tahfidz 3 juz",
        "Lab sains & komputer",
        "Ekstrakulikuler 12 bidang",
        "Full day school"
      ]
    },
    {
      id: "smp",
      label: "SMP",
      nama: "SMP Islam",
      usia: "12–15 tahun",
      kuota: 80,
      terisi: 52,
      biaya_pendaftaran: "Rp 400.000",
      biaya_spp: "Rp 850.000/bln",
      icon: "🔬",
      color: "#3b82f6",
      syarat: [
        "Akta Kelahiran",
        "KK / KTP Orang Tua",
        "Ijazah SD / STTB",
        "SHUN / SKL",
        "Pas Foto 3×4 (3 lembar)",
        "Surat Keterangan Sehat",
        "Raport Semester 5 & 6"
      ],
      keunggulan: [
        "Akreditasi A",
        "Tahfidz 5 juz",
        "Olimpiade sains & agama",
        "Bimbel gratis kelas 9",
        "Program pesantren kilat"
      ]
    },
    {
      id: "sma",
      label: "SMA",
      nama: "SMA Islam",
      usia: "15–18 tahun",
      kuota: 80,
      terisi: 43,
      biaya_pendaftaran: "Rp 500.000",
      biaya_spp: "Rp 950.000/bln",
      icon: "🎓",
      color: "#8b5cf6",
      syarat: [
        "Akta Kelahiran",
        "KK / KTP Orang Tua",
        "Ijazah SMP / STTB",
        "SHUN / SKL SMP",
        "Pas Foto 3×4 (4 lembar)",
        "Surat Keterangan Sehat",
        "Raport Semester 5 & 6 SMP"
      ],
      keunggulan: [
        "Jurusan IPA & IPS",
        "Tahfidz 7 juz",
        "Persiapan SNBT/SBMPTN",
        "Beasiswa prestasi",
        "Kerja sama 20+ universitas"
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Daftar PPDB – NIIS", "data-astro-cid-vkphoifk": true }, { "default": ($$result2) => renderTemplate` <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Tajawal:wght@300;400;500;700&display=swap" rel="stylesheet"> ${maybeRenderHead()}<div id="ppdb-daftar-page" data-astro-cid-vkphoifk> <!-- ── Hero strip ── --> <div class="daftar-hero" data-astro-cid-vkphoifk> <div class="daftar-hero__bg" data-astro-cid-vkphoifk></div> <div class="daftar-hero__inner" data-astro-cid-vkphoifk> <!-- <a
          href="/ppdb"
          class="back-link"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
          >
            <path d="M19 12H5M12 19l-7-7 7-7"></path>
          </svg>
          Kembali ke PPDB
        </a> --> <div class="daftar-hero__text mt-7" data-astro-cid-vkphoifk> <span class="daftar-eyebrow" data-astro-cid-vkphoifk>
Pendaftaran Peserta Didik Baru ${TAHUN} </span> <h1 class="daftar-title" data-astro-cid-vkphoifk>Pilih Jenjang<br data-astro-cid-vkphoifk><em data-astro-cid-vkphoifk>Pendidikan</em></h1> <p class="daftar-sub" data-astro-cid-vkphoifk>
Pilih jenjang yang sesuai, lengkapi formulir, dan amankan tempat<br class="d-none d-md-block" data-astro-cid-vkphoifk> sebelum kuota habis.
</p> </div> <!-- Steps indicator --> <div class="steps-row" data-astro-cid-vkphoifk> <div class="step step--active" data-astro-cid-vkphoifk> <span class="step__num" data-astro-cid-vkphoifk>1</span><span class="step__label" data-astro-cid-vkphoifk>
Pilih Jenjang
</span> </div> <div class="step-line" data-astro-cid-vkphoifk></div> <div class="step" data-astro-cid-vkphoifk> <span class="step__num" data-astro-cid-vkphoifk>2</span><span class="step__label" data-astro-cid-vkphoifk>
Isi Formulir
</span> </div> <div class="step-line" data-astro-cid-vkphoifk></div> <div class="step" data-astro-cid-vkphoifk> <span class="step__num" data-astro-cid-vkphoifk>3</span><span class="step__label" data-astro-cid-vkphoifk>
Upload Dokumen
</span> </div> <div class="step-line" data-astro-cid-vkphoifk></div> <div class="step" data-astro-cid-vkphoifk> <span class="step__num" data-astro-cid-vkphoifk>4</span><span class="step__label" data-astro-cid-vkphoifk>
Konfirmasi
</span> </div> </div> </div> </div> <!-- ── Filter Tabs ── --> <div class="tabs-wrap" data-astro-cid-vkphoifk> <div class="tabs-scroll" data-astro-cid-vkphoifk> <div class="tabs" id="jenjang-tabs" role="tablist" data-astro-cid-vkphoifk> ${jenjang.map((j, i) => renderTemplate`<button${addAttribute(`tab-btn${i === 0 ? " tab-btn--active" : ""}`, "class")} role="tab"${addAttribute(j.id, "data-target")}${addAttribute(i === 0 ? "true" : "false", "aria-selected")}${addAttribute(`--tab-color:${j.color}`, "style")} data-astro-cid-vkphoifk> <span class="tab-icon" data-astro-cid-vkphoifk>${j.icon}</span> <span class="tab-label" data-astro-cid-vkphoifk>${j.label}</span> <span class="tab-sub" data-astro-cid-vkphoifk>${j.nama}</span> <span class="tab-kuota"${addAttribute(j.id, "data-id")} data-astro-cid-vkphoifk> ${j.kuota - j.terisi} sisa
</span> </button>`)} </div> </div> </div> <div class="cards-area" id="cards-area" data-astro-cid-vkphoifk> ${jenjang.map((j, i) => {
    const pct = Math.round(j.terisi / j.kuota * 100);
    const sisa = j.kuota - j.terisi;
    return renderTemplate`<div${addAttribute(`jenjang-card ${i === 0 ? "jenjang-card--visible" : ""}`, "class")}${addAttribute(`card-${j.id}`, "id")}${addAttribute(j.id, "data-jenjang")}${addAttribute(`--card-color: ${j.color}`, "style")} data-astro-cid-vkphoifk> <div class="card-grid" data-astro-cid-vkphoifk>  <div class="card-left" data-astro-cid-vkphoifk> <div class="card-header" data-astro-cid-vkphoifk> <div class="card-icon-wrap"${addAttribute(`background:${j.color}18; border-color:${j.color}30`, "style")} data-astro-cid-vkphoifk> <span style="font-size:2rem;" data-astro-cid-vkphoifk>${j.icon}</span> </div> <div data-astro-cid-vkphoifk> <div class="card-label"${addAttribute(`color:${j.color}`, "style")} data-astro-cid-vkphoifk> ${j.label} · ${j.usia} </div> <h2 class="card-nama" data-astro-cid-vkphoifk>${j.nama}</h2> </div> ${renderTemplate`<div class="urgent-badge" data-astro-cid-vkphoifk> <span class="urgent-pulse" data-astro-cid-vkphoifk></span>
Kuota hampir habis!
</div>`} </div>  <div class="kuota-block" data-astro-cid-vkphoifk> <div class="kuota-row" data-astro-cid-vkphoifk> <span class="kuota-label" data-astro-cid-vkphoifk>Kuota terisi</span> <span class="kuota-pct"${addAttribute(`color:${j.color}`, "style")} data-astro-cid-vkphoifk> ${pct}%
</span> </div> <div class="kuota-bar-bg" data-astro-cid-vkphoifk> <div class="kuota-bar-fill"${addAttribute(`width:${pct}%; background:${j.color}`, "style")} data-astro-cid-vkphoifk></div> </div> <div class="kuota-detail" data-astro-cid-vkphoifk> <span data-astro-cid-vkphoifk>${j.terisi} pendaftar</span> <span data-astro-cid-vkphoifk> ${sisa} kursi tersisa dari ${j.kuota} </span> </div> </div>  <div class="biaya-row" data-astro-cid-vkphoifk> <div class="biaya-item" data-astro-cid-vkphoifk> <span class="biaya-icon" data-astro-cid-vkphoifk>📋</span> <div data-astro-cid-vkphoifk> <div class="biaya-label" data-astro-cid-vkphoifk>Biaya Pendaftaran</div> <div class="biaya-val" data-astro-cid-vkphoifk>${j.biaya_pendaftaran}</div> </div> </div> <div class="biaya-sep" data-astro-cid-vkphoifk></div> <div class="biaya-item" data-astro-cid-vkphoifk> <span class="biaya-icon" data-astro-cid-vkphoifk>📅</span> <div data-astro-cid-vkphoifk> <div class="biaya-label" data-astro-cid-vkphoifk>SPP Bulanan</div> <div class="biaya-val" data-astro-cid-vkphoifk>${j.biaya_spp}</div> </div> </div> </div>  <div class="card-cta" data-astro-cid-vkphoifk> <a${addAttribute(`/ppdb/formulir?jenjang=${j.id}`, "href")} class="btn-daftar"${addAttribute(`background:${j.color}`, "style")} data-astro-cid-vkphoifk>
Daftar ${j.label} Sekarang
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-vkphoifk> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-vkphoifk></path> </svg> </a> <a${addAttribute(`/ppdb/info?jenjang=${j.id}`, "href")} class="btn-info" data-astro-cid-vkphoifk>
Lihat Detail
</a> </div> </div>  <div class="card-right" data-astro-cid-vkphoifk> <div class="card-right-block" data-astro-cid-vkphoifk> <div class="block-title" data-astro-cid-vkphoifk> <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" data-astro-cid-vkphoifk> <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-vkphoifk></path> </svg>
Syarat Dokumen
</div> <ul class="checklist" data-astro-cid-vkphoifk> ${j.syarat.map((s) => renderTemplate`<li class="checklist__item" data-astro-cid-vkphoifk> <svg width="13" height="13" viewBox="0 0 24 24" fill="none"${addAttribute(j.color, "stroke")} stroke-width="2.8" data-astro-cid-vkphoifk> <polyline points="20 6 9 17 4 12" data-astro-cid-vkphoifk></polyline> </svg> ${s} </li>`)} </ul> </div> <div class="card-right-block" data-astro-cid-vkphoifk> <div class="block-title" data-astro-cid-vkphoifk> <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" data-astro-cid-vkphoifk> <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" data-astro-cid-vkphoifk></path> </svg>
Keunggulan Program
</div> <ul class="checklist" data-astro-cid-vkphoifk> ${j.keunggulan.map((k) => renderTemplate`<li class="checklist__item" data-astro-cid-vkphoifk> <svg width="13" height="13" viewBox="0 0 24 24" fill="none"${addAttribute(j.color, "stroke")} stroke-width="2.8" data-astro-cid-vkphoifk> <polyline points="20 6 9 17 4 12" data-astro-cid-vkphoifk></polyline> </svg> ${k} </li>`)} </ul> </div> <div class="trust-strip" data-astro-cid-vkphoifk> <div class="trust-item" data-astro-cid-vkphoifk> <span class="trust-num"${addAttribute(`color:${j.color}`, "style")} data-astro-cid-vkphoifk>
A
</span> <span class="trust-label" data-astro-cid-vkphoifk>Akreditasi</span> </div> <div class="trust-item" data-astro-cid-vkphoifk> <span class="trust-num"${addAttribute(`color:${j.color}`, "style")} data-astro-cid-vkphoifk>
15+
</span> <span class="trust-label" data-astro-cid-vkphoifk>Tahun</span> </div> </div> </div> </div> </div>`;
  })} </div> <!-- ── Bottom CTA strip ── --> <div class="bottom-strip" data-astro-cid-vkphoifk> <div class="bottom-strip__inner" data-astro-cid-vkphoifk> <div data-astro-cid-vkphoifk> <p class="bottom-strip__title" data-astro-cid-vkphoifk>Masih ada pertanyaan?</p> <p class="bottom-strip__sub" data-astro-cid-vkphoifk>
Tim kami siap membantu Anda memilih jenjang yang tepat.
</p> </div> <div class="bottom-strip__actions" data-astro-cid-vkphoifk> <a href="https://wa.me/6281234567890" class="btn-wa" target="_blank" data-astro-cid-vkphoifk> <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-vkphoifk> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-vkphoifk></path> </svg>
WhatsApp Kami
</a> <a href="/ppdb/konsultasi" class="btn-konsultasi" data-astro-cid-vkphoifk>
Jadwalkan Konsultasi
</a> </div> </div> </div> </div>  ${renderScript($$result2, "C:/laragon/www/sisit-niis/src/pages/ppdb/ppdb-daftar.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/laragon/www/sisit-niis/src/pages/ppdb/ppdb-daftar.astro", void 0);

const $$file = "C:/laragon/www/sisit-niis/src/pages/ppdb/ppdb-daftar.astro";
const $$url = "/ppdb/ppdb-daftar";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PpdbDaftar,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
