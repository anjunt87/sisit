// src/data/sdit1.ts

export const stats = [
  { target: 869, suffix: "+", label: "Siswa Aktif" },
  { target: 41, suffix: "+", label: "Tenaga Pendidik" },
  { target: 29, suffix: "", label: "Rombel" },
  { target: 100, suffix: "%", label: "Kelas Layak" },
];

// (Tentang kalau nanti mau dijadikan data, sekarang masih component)

export const pimpinan = [
  {
    name: "Nama Kepsek, S.Pd",
    role: "Kepala Sekolah",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Nama Wakasek, S.Pd",
    role: "Wakasek Kurikulum",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Nama Wakasek, S.Pd",
    role: "Wakasek Kesiswaan",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Nama Wakasek, S.Pd",
    role: "Waka Bid. TAHTA",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=400&q=80",
  },
];

export const keunggulan = [
  {
    icon: "fa-mosque",
    title: "Kurikulum Islami Terintegrasi",
    desc: "Kurikulum Nasional terintegrasi dengan nilai-nilai Islam.",
  },
  {
    icon: "fa-project-diagram",
    title: "Project Based Learning",
    desc: "Pembelajaran berbasis proyek dengan pendekatan deep learning.",
  },
  {
    icon: "fa-quran",
    title: "Tahsin & Tahfidz UMMI",
    desc: "Program hafalan Al-Qur’an hingga 2 juz.",
  },
  {
    icon: "fa-language",
    title: "Bahasa Arab & Inggris",
    desc: "Mempersiapkan siswa berwawasan global.",
  },
];

export const visi = `Terwujudnya lembaga pendidikan rujukan yang mampu mengembangkan potensi peserta didik dan menghasilkan Generasi Rabbani.`;

export const misi = [
  "Menanamkan keyakinan kepada Allah melalui penguatan tauhid dan akhlak.",
  "Meningkatkan kemampuan melalui pembelajaran berbasis project.",
  "Menumbuhkan kemandirian dan jiwa kepemimpinan.",
  "Meningkatkan kompetensi SDM secara komprehensif.",
  "Menyelenggarakan pendidikan berkualitas dan terjangkau.",
  "Mengintegrasikan Kurikulum Nasional dengan nilai keislaman.",
];

export const ekstrakurikuler = [
  {
    icon: "fa-drum",
    name: "Hadroh",
    desc: "Kesenian musik Islami.",
  },
  {
    icon: "fa-futbol",
    name: "Futsal",
    desc: "Melatih kerja sama tim dan kebugaran.",
  },
  {
    icon: "fa-code",
    name: "Coding",
    desc: "Melatih logika dan problem solving.",
  },
  {
    icon: "fa-campground",
    name: "Pramuka",
    desc: "Membentuk karakter dan kemandirian.",
  },
];

export const gallery = [
  {
    title: "Upacara Bendera",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    category: "Kedisiplinan",
  },
  {
    title: "Kegiatan Belajar",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    category: "Akademik",
  },
  {
    title: "Tahfidz",
    image: "https://images.unsplash.com/photo-1519817914152-22f90e4f5c77?auto=format&fit=crop&w=1200&q=80",
    category: "Keislaman",
  },
];

export const categories = [
  "Semua",
  ...new Set(gallery.map((g) => g.category)),
];

export const statistik = [
  { icon: "fa-chalkboard-teacher", label: "Guru", value: "41" },
  { icon: "fa-male", label: "Siswa Laki-laki", value: "463" },
  { icon: "fa-female", label: "Siswa Perempuan", value: "406" },
  { icon: "fa-users", label: "Rombel", value: "29" },
];

export const prosesPembelajaran = [
  { label: "Rasio Siswa / Rombel", value: "30" },
  { label: "Rasio Siswa / Guru", value: "22" },
];

export const identitas = [
  { icon: "fa-school", label: "Nama Sekolah", value: "SDIT Nurul Imam" },
  { icon: "fa-id-card", label: "NPSN", value: "70006486" },
  { icon: "fa-star", label: "Akreditasi", value: "A" },
  { icon: "fa-check-circle", label: "Status", value: "Swasta" },
  { icon: "fa-book-open", label: "Bentuk Pendidikan", value: "SD" },
  { icon: "fa-user-tie", label: "Kepala Sekolah", value: "Agung Widiana" },
  { icon: "fa-map-marker-alt", label: "Alamat", value: "Karawang, Jawa Barat" },
];