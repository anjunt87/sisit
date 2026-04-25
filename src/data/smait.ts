// ================================
// 1. STATS (Hero → Stats)
// ================================
export const stats = [
  { target: 7, suffix: "+", label: "Siswa Aktif" },
  { target: 10, suffix: "+", label: "Tenaga Pendidik" },
  { target: 1, suffix: "", label: "Rombel" },
  { target: 100, suffix: "%", label: "Kelas Layak" },
];

// ================================
// 2. PIMPINAN
// ================================
export const pimpinan = [
  {
    name: "Nama Kepsek, S.Pd",
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
  {
    name: "Nama Wakasek, S.Pd",
    role: "Waka Bid. TAHTA",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=400&q=80",
  },
];

// ================================
// 3. KEUNGGULAN
// ================================
export const keunggulan = [
  {
    icon: "fa-mosque",
    title: "Kurikulum Islami Terintegrasi",
    desc: "Kurikulum Nasional yang terintegrasi penuh dengan nilai-nilai Islam.",
  },
  {
    icon: "fa-language",
    title: "Bilingual Study",
    desc: "Pembelajaran dua bahasa untuk kompetensi global.",
  },
  {
    icon: "fa-laptop",
    title: "Technology Based Learning",
    desc: "Pembelajaran berbasis teknologi modern.",
  },
  {
    icon: "fa-university",
    title: "Persiapan Masuk Kuliah",
    desc: "Persiapan masuk PTN & PTS terbaik.",
  },
];

// ================================
// 4. Kompetensi
// ================================
export const kompetensi = [
  {
    icon: "fa-quran",
    text: 'Hafal Al-Qur\'an minimal 4 juz dengan standar metode "UMMI"',
  },
  {
    icon: "fa-book-open",
    text: "Hafal Hadits Arba'in",
  },
  {
    icon: "fa-comments",
    text: "Mampu berbicara Inggris aktif dengan target poin TOEFL 500",
  },
  {
    icon: "fa-certificate",
    text: 'Sertifikasi Metode UMMI, mampu mengajar metode "UMMI"',
  },
  {
    icon: "fa-photo-video",
    text: "Mampu menggunakan software editing video & photo (Photoshop, Corel Draw, Adobe Premiere)",
  },
  {
    icon: "fa-briefcase",
    text: "Memiliki soft skill dan hard skill yang dibutuhkan saat berkuliah dan bekerja",
  },
  {
    icon: "fa-crown",
    text: "Memiliki jiwa Leadership dan Entrepreneurship",
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
    desc: "Musik Islami.",
  },
  {
    icon: "fa-music",
    category: "Seni & Budaya",
    name: "Angklung",
    desc: "Musik tradisional.",
  },
  {
    icon: "fa-comments",
    category: "Bilingual",
    name: "English Club",
    desc: "Latihan komunikasi Inggris.",
  },
  {
    icon: "fa-quran",
    category: "Keislaman",
    name: "TAHTA",
    desc: "Tahsin & tahfidz Al-Qur’an.",
  },
  {
    icon: "fa-futbol",
    category: "Olahraga",
    name: "Futsal",
    desc: "Olahraga tim.",
  },
  {
    icon: "fa-robot",
    category: "Teknologi",
    name: "Robotic",
    desc: "STEM learning.",
  },
  {
    icon: "fa-campground",
    category: "Pramuka",
    name: "Pramuka",
    desc: "Kemandirian siswa.",
  },
];

// ================================
// 6. GALERI
// ================================
export const gallery = [
  {
    title: "Upacara Bendera",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    category: "Kedisiplinan",
  },
  {
    title: "Kegiatan Belajar Kelas",
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
  { icon: "fa-chalkboard-teacher", label: "Guru", value: "—" },
  { icon: "fa-male", label: "Siswa Laki-laki", value: "—" },
  { icon: "fa-female", label: "Siswa Perempuan", value: "—" },
  { icon: "fa-users", label: "Rombel", value: "—" },
  { icon: "fa-door-open", label: "Ruang Kelas", value: "—" },
  { icon: "fa-book", label: "Perpustakaan", value: "—" },
];

export const prosesPembelajaran = [
  { label: "Rasio Siswa / Rombel", value: "—" },
  { label: "Rasio Siswa / Guru", value: "—" },
  { label: "Ruang Kelas Layak", value: "100%" },
];

// ================================
// 8. IDENTITAS (PALING BAWAH)
// ================================
export const identitas = [
  {
    icon: "fa-school",
    label: "Nama Sekolah",
    value: "SMAIT Bilingual Nurul Imam",
  },
  { icon: "fa-id-card", label: "NPSN", value: "—" },
  { icon: "fa-star", label: "Akreditasi", value: "—" },
  { icon: "fa-check-circle", label: "Status", value: "Swasta" },
  { icon: "fa-book-open", label: "Bentuk Pendidikan", value: "SMA" },
  {
    icon: "fa-layer-group",
    label: "Kurikulum",
    value: "Kurikulum SMA Merdeka",
  },
  {
    icon: "fa-map-marker-alt",
    label: "Alamat",
    value: "Kab. Karawang, Jawa Barat",
  },
];


