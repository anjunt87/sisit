import { c as createComponent } from './astro-component_D77M9rGE.mjs';
import 'piccolore';
import { n as renderComponent, r as renderTemplate } from './entrypoint_uw6GGwwS.mjs';
import { $ as $$BaseLayout } from './BaseLayout_-31gxKTm.mjs';
import { $ as $$Hero } from './Hero_DiQTQPiM.mjs';
import { $ as $$Stats } from './Stats_BP-uQM_B.mjs';
import { $ as $$Tentang } from './Tentang_0nA43HPC.mjs';
import { $ as $$Pimpinan } from './Pimpinan_DJJTa-FJ.mjs';
import { $ as $$Keunggulan } from './Keunggulan_Bg69A0Pk.mjs';
import { $ as $$Visimisi } from './Visimisi_ChsTJ8Ub.mjs';
import { $ as $$Kompetensi } from './Kompetensi_DU3oPAAo.mjs';
import { $ as $$Ekskul } from './Ekskul_CsqQjd46.mjs';
import { $ as $$Gallery } from './Gallery_CfaYaWoI.mjs';
import { $ as $$Statistik } from './Statistik_DKHoDI8a.mjs';
import { $ as $$Identitas } from './Identitas_DdHiklJi.mjs';
import { $ as $$CTA } from './CTA_BRca4Cte.mjs';

const stats = [
  { target: 869, suffix: "+", label: "Siswa Aktif" },
  { target: 41, suffix: "+", label: "Tenaga Pendidik" },
  { target: 29, suffix: "", label: "Rombel" },
  { target: 100, suffix: "%", label: "Kelas Layak" }
];
const pimpinan = [
  {
    name: "Nama Kepsek, S.Pd",
    role: "Kepala Sekolah",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Nama Wakasek, S.Pd",
    role: "Wakasek Kurikulum",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Nama Wakasek, S.Pd",
    role: "Wakasek Kesiswaan",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Nama Wakasek, S.Pd",
    role: "Waka Bid. TAHTA",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=400&q=80"
  }
];
const gallery = [
  {
    title: "Upacara Bendera & Pembentukan Karakter",
    image: "",
    category: "Kedisiplinan"
  },
  {
    title: "Active Learning di Kelas",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    category: "Akademik"
  },
  {
    title: "Tahfidz Al-Qur'an Harian",
    image: "https://images.unsplash.com/photo-1519817914152-22f90e4f5c77?auto=format&fit=crop&w=1200&q=80",
    category: "Keislaman"
  },
  // ======================
  // TAMBAHAN (lebih lengkap)
  // ======================
  {
    title: "Kegiatan Shalat Dhuha Bersama",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80",
    category: "Keislaman"
  },
  {
    title: "Pembelajaran Interaktif Berbasis Proyek",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    category: "Akademik"
  },
  {
    title: "English Fun Day - Speaking Activity",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    category: "Bilingual"
  },
  {
    title: "Outdoor Learning & Observasi Alam",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    category: "Akademik"
  },
  {
    title: "Praktik Coding Dasar di Lab Komputer",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&q=80",
    category: "Teknologi"
  },
  {
    title: "Ekstrakurikuler Pramuka Siaga",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80",
    category: "Kepramukaan"
  },
  {
    title: "Kegiatan Seni & Kreativitas Siswa",
    image: "https://images.unsplash.com/photo-1459908676235-d5f02a50184b?auto=format&fit=crop&w=1200&q=80",
    category: "Seni & Budaya"
  },
  {
    title: "Olahraga Futsal Antar Kelas",
    image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80",
    category: "Olahraga"
  },
  {
    title: "Panahan - Melatih Fokus & Ketepatan",
    image: "https://images.unsplash.com/photo-1602526212907-6c10a0b2b8c5?auto=format&fit=crop&w=1200&q=80",
    category: "Olahraga Sunnah"
  },
  {
    title: "Kegiatan Literasi & Membaca Pagi",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
    category: "Akademik"
  }
];
const categories = [
  "Semua",
  ...new Set(gallery.map((g) => g.category))
];
const statistik = [
  { icon: "fa-chalkboard-teacher", label: "Guru", value: "41" },
  { icon: "fa-male", label: "Siswa Laki-laki", value: "463" },
  { icon: "fa-female", label: "Siswa Perempuan", value: "406" },
  { icon: "fa-users", label: "Rombel", value: "29" },
  { icon: "fa-door-open", label: "Ruang Kelas", value: "24" },
  { icon: "fa-book", label: "Perpustakaan", value: "1" }
];
const prosesPembelajaran = [
  { label: "Rasio Siswa / Rombel", value: "30" },
  { label: "Rasio Siswa / Guru", value: "22" },
  { label: "Ruang Kelas Layak", value: "100%" }
];
const identitas = [
  { icon: "fa-school", label: "Nama Sekolah", value: "SDIT Nurul Imam" },
  { icon: "fa-id-card", label: "NPSN", value: "70006486" },
  { icon: "fa-star", label: "Akreditasi", value: "A" },
  { icon: "fa-check-circle", label: "Status", value: "Swasta" },
  { icon: "fa-book-open", label: "Bentuk Pendidikan", value: "SD" },
  { icon: "fa-user-tie", label: "Kepala Sekolah", value: "Agung Widiana" },
  { icon: "fa-map-marker-alt", label: "Alamat", value: "Karawang, Jawa Barat" }
];

const $$IndexSdit2 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Profil SDIT Nurul Imam Karawang 1", "description": "Profil lengkap SDIT Nurul Imam 2 Karawang, sekolah dasar Islam terpadu dengan akreditasi A, kurikulum merdeka dan pembelajaran full day school.", "theme": "green" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Stats", $$Stats, { "stats": stats })} ${renderComponent($$result2, "Tentang", $$Tentang, {})} ${renderComponent($$result2, "Pimpinan", $$Pimpinan, { "pimpinan": pimpinan })} ${renderComponent($$result2, "Keunggulan", $$Keunggulan, {})} ${renderComponent($$result2, "Visimisi", $$Visimisi, {})} ${renderComponent($$result2, "Kompetensi", $$Kompetensi, {})} ${renderComponent($$result2, "Ekskul", $$Ekskul, {})} ${renderComponent($$result2, "Gallery", $$Gallery, { "gallery": gallery, "categories": categories })} ${renderComponent($$result2, "Statistik", $$Statistik, { "statistik": statistik, "proses": prosesPembelajaran })} ${renderComponent($$result2, "Identitas", $$Identitas, { "identitas": identitas })} ${renderComponent($$result2, "CTA", $$CTA, {})} ` })}`;
}, "C:/laragon/www/sisit-niis/src/pages/unit/index-sdit2.astro", void 0);

const $$file = "C:/laragon/www/sisit-niis/src/pages/unit/index-sdit2.astro";
const $$url = "/unit/index-sdit2";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$IndexSdit2,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
