// src/data/smpit.ts
// ================================
// 1. STATS (Hero → Stats)
// ================================
export const stats = [
  { target: 244, suffix: "+", label: "Siswa Aktif" },
  { target: 13, suffix: "+", label: "Tenaga Pendidik" },
  { target: 9, suffix: "", label: "Rombel" },
  { target: 100, suffix: "%", label: "Kelas Layak" },
];

// ================================
// 2. PIMPINAN
// ================================
export const pimpinan = [
  {
    name: "Nama KepSek, S.Pd",
    role: "Kepala Sekolah",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Nama Wakasek, S.Pd",
    role: "Wakasek Kurikulum",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Nama Wakasek, S.Pd",
    role: "Wakasek Kesiswaan",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?auto=format&fit=crop&w=400&q=80",
  },
];

// ================================
// 3. VISI MISI (buat component Visimisi)
// ================================
export const visimisi = {
  visi: "Terwujudnya lembaga pendidikan rujukan yang mampu mengembangkan potensi peserta didik dan menghasilkan Generasi Rabbani.",
  misi: [
    "Menanamkan keyakinan kepada Allah melalui penguatan tauhid, akhlak, qudwah dan nilai-nilai Quran.",
    "Meningkatkan motivasi dan kemampuan peserta didik melalui pembelajaran berbasis project.",
    "Menumbuhkan kemandirian dan jiwa kepemimpinan.",
    "Meningkatkan kompetensi SDM secara komprehensif.",
    "Menyelenggarakan pendidikan berkualitas dengan biaya terjangkau.",
    "Integrasi kurikulum nasional dengan nilai keislaman.",
  ],
};

// ================================
// 4. KEUNGGULAN
// ================================
export const keunggulan = [
  {
    icon: "fa-mosque",
    title: "Kurikulum Islami",
    desc: "Kurikulum Nasional terintegrasi dengan nilai-nilai Islam untuk membentuk akhlak dan akademik.",
  },
  {
    icon: "fa-cubes",
    title: "Metode Sentra & Moving Class",
    desc: "Pembelajaran aktif dan eksploratif melalui metode sentra dan moving class.",
  },
  {
    icon: "fa-quran",
    title: "Program Al-Qur'an",
    desc: "Tahsin dan tahfidz dengan metode UMMI yang terstruktur.",
  },
  {
    icon: "fa-star-and-crescent",
    title: "Pembentukan Karakter",
    desc: "Penanaman nilai islami untuk membentuk pribadi disiplin.",
  },
  {
    icon: "fa-book-open",
    title: "Hafalan Surat",
    desc: "Program hafalan bertahap sesuai kemampuan siswa.",
  },
  {
    icon: "fa-hands-praying",
    title: "Doa & Hadits",
    desc: "Pembiasaan doa harian dan hadits.",
  },
];

// ================================
// 5. EKSTRAKURIKULER
// ================================
export const ekstrakurikuler = [
  {
    icon: "fa-drum",
    category: "Seni & Budaya",
    name: "Hadroh",
    desc: "Musik Islami dan shalawat.",
  },
  {
    icon: "fa-comments",
    category: "Bilingual",
    name: "English Club",
    desc: "Latihan komunikasi aktif.",
  },
  {
    icon: "fa-futbol",
    category: "Olahraga",
    name: "Futsal",
    desc: "Melatih teamwork dan fisik.",
  },
  {
    icon: "fa-robot",
    category: "Teknologi",
    name: "Robotic",
    desc: "Pengembangan STEM.",
  },
  {
    icon: "fa-campground",
    category: "Pramuka",
    name: "Pramuka",
    desc: "Kemandirian dan leadership.",
  },
];

// ================================
// 6. GALLERY
// ================================
export const gallery = [
  {
    title: "Upacara Bendera",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    category: "Kedisiplinan",
  },
  {
    title: "Kegiatan Belajar",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    category: "Akademik",
  },
];

export const categories = [
  "Semua",
  ...new Set(gallery.map((g) => g.category)),
];

// ================================
// 7. STATISTIK
// ================================
export const statistik = [
  { icon: "fa-chalkboard-teacher", label: "Guru", value: "13" },
  { icon: "fa-male", label: "Siswa Laki-laki", value: "124" },
  { icon: "fa-female", label: "Siswa Perempuan", value: "120" },
];

export const prosesPembelajaran = [
  { label: "Rasio Siswa / Rombel", value: "28" },
  { label: "Rasio Siswa / Guru", value: "19" },
];

// ================================
// 8. IDENTITAS (paling bawah)
// ================================
export const identitas = [
  {
    icon: "fa-school",
    label: "Nama Sekolah",
    value: "SMPIT Bilingual Nurul Imam",
  },
  { icon: "fa-id-card", label: "NPSN", value: "70049183" },
  { icon: "fa-star", label: "Akreditasi", value: "A" },
  { icon: "fa-check-circle", label: "Status", value: "Swasta" },
  { icon: "fa-book-open", label: "Bentuk Pendidikan", value: "SMP" },
  {
    icon: "fa-user-tie",
    label: "Kepala Sekolah",
    value: "Nadia Sofia Fitri Dahlia",
  },
  {
    icon: "fa-map-marker-alt",
    label: "Alamat",
    value: "Karawang, Jawa Barat",
  },
];