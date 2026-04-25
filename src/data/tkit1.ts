// src/data/tkit1.ts

// === STATS (dipakai di awal) ===
export const stats = [
  { target: 869, suffix: "+", label: "Siswa Aktif" },
  { target: 41, suffix: "+", label: "Tenaga Pendidik" },
  { target: 29, suffix: "", label: "Rombel" },
  { target: 100, suffix: "%", label: "Kelas Layak" },
];

// === TENTANG (optional, biar konsisten) ===
export const tentang = {
  title: "Tentang Sekolah",
  desc: "TK Nurul Imam Islamic School merupakan lembaga pendidikan yang berfokus pada pembentukan karakter islami sejak usia dini dengan pendekatan pembelajaran yang menyenangkan dan bermakna.",
};

// === PIMPINAN ===
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

// === KEUNGGULAN (biar gak kosong di layout) ===
export const keunggulan = [
  {
    icon: "fa-mosque",
    title: "Kurikulum Islami",
    desc: "Menggabungkan Kurikulum Nasional dengan nilai-nilai Islam, sehingga anak tidak hanya cerdas secara akademik, tetapi juga tumbuh dengan akhlak mulia sejak dini.",
  },
  {
    icon: "fa-cubes",
    title: "Metode Sentra",
    desc: "Belajar jadi lebih seru melalui metode sentra dan sistem moving class, membuat anak aktif, eksploratif, dan tidak mudah bosan saat belajar.",
  },
  {
    icon: "fa-quran",
    title: "Program Al-Qur'an",
    desc: "Anak dibimbing membaca dan menghafal Al-Qur’an dengan metode UMMI yang terstruktur, menyenangkan, dan mudah dipahami sesuai usia mereka.",
  },
  {
    icon: "fa-star-and-crescent",
    title: "Pembentukan Karakter",
    desc: "Setiap kegiatan dirancang untuk menanamkan nilai-nilai kebaikan, membentuk pribadi yang mandiri, disiplin, dan berakhlak islami.",
  },
  {
    icon: "fa-book-open",
    title: "Hafalan Surat",
    desc: "Program hafalan surat pendek yang disusun bertahap, membantu anak mencintai Al-Qur’an sejak dini dengan cara yang ringan dan menyenangkan.",
  },
  {
    icon: "fa-hands-praying",
    title: "Doa & Hadits",
    desc: "Membiasakan anak menghafal doa harian dan hadits pendek sebagai bekal ibadah serta pembentukan akhlak dalam kehidupan sehari-hari.",
  },
];

// === VISI MISI ===
export const visi = 
  "Terwujudnya generasi muslim yang beriman, bertaqwa, berakhlak mulia, cerdas, kreatif, dan mandiri sejak usia dini.";

export const misi = [
  "Mengenalkan Al-Qur'an dan nilai-nilai Islam sejak dini.",
  "Mengembangkan potensi anak melalui pembelajaran yang menyenangkan.",
  "Membangun karakter islami melalui pembiasaan akhlak mulia.",
  "Menyiapkan anak didik untuk jenjang pendidikan berikutnya.",
];

// === GALLERY ===
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
  {
    title: "Tahfidz Al-Qur'an",
    image:
      "https://images.unsplash.com/photo-1519817914152-22f90e4f5c77?auto=format&fit=crop&w=1200&q=80",
    category: "Keislaman",
  },
  {
    title: "Pramuka",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80",
    category: "Ekstrakurikuler",
  },
  {
    title: "Olahraga Bersama",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80",
    category: "Kesehatan",
  },
  {
    title: "Wisuda & Pentas Seni",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80",
    category: "Event Sekolah",
  },
];

export const categories = [
  "Semua",
  ...new Set(gallery.map((g) => g.category)),
];

// === STATISTIK (di bawah gallery) ===
export const statistik = [
  { icon: "fa-chalkboard-teacher", label: "Guru", value: "19" },
  { icon: "fa-male", label: "Siswa Laki-laki", value: "142" },
  { icon: "fa-female", label: "Siswa Perempuan", value: "145" },
  { icon: "fa-users", label: "Rombongan Belajar", value: "15" },
  { icon: "fa-door-open", label: "Ruang Kelas", value: "15" },
  { icon: "fa-flask", label: "Laboratorium", value: "0" },
  { icon: "fa-book", label: "Perpustakaan", value: "0" },
];

export const prosesPembelajaran = [
  { label: "Rasio Siswa / Rombel", value: "20" },
  { label: "Rasio Rombel / Ruang Kelas", value: "1" },
  { label: "Rasio Siswa / Guru", value: "16" },
  { label: "Guru Kualifikasi S1/D4", value: "63,16%" },
  { label: "Guru Bersertifikasi", value: "42,11%" },
  { label: "Ruang Kelas Layak", value: "100%" },
];

// === IDENTITAS (paling bawah) ===
export const identitas = [
  {
    icon: "fa-school",
    label: "Nama Sekolah",
    value: "TK Nurul Imam Islamic School",
  },
  { icon: "fa-id-card", label: "NPSN", value: "70027490" },
  { icon: "fa-star", label: "Akreditasi", value: "A" },
  { icon: "fa-check-circle", label: "Status", value: "Swasta" },
  { icon: "fa-book-open", label: "Bentuk Pendidikan", value: "TK" },
  { icon: "fa-user-tie", label: "Kepala Sekolah", value: "Irma Oktavia Sari" },
  { icon: "fa-user-cog", label: "Operator", value: "Dea Luckita Solihawa" },
  {
    icon: "fa-layer-group",
    label: "Kurikulum",
    value: "Kurikulum PAUD Merdeka",
  },
  {
    icon: "fa-clock",
    label: "Penyelenggaraan",
    value: "Sehari Penuh / 5 Hari",
  },
  {
    icon: "fa-map-marker-alt",
    label: "Alamat",
    value:
      "Dusun 2 Ciranggon Raya RT.007/RW.004, Kec. Majalaya, Kab. Karawang, Prov. Jawa Barat",
  },
  { icon: "fa-phone", label: "Telepon", value: "085693151402" },
  { icon: "fa-envelope", label: "Email", value: "irmaaqibit2330@gmail.com" },
  {
    icon: "fa-building",
    label: "Yayasan",
    value: "Yayasan Pendidikan Alam Jaya",
  },
  { icon: "fa-expand-arrows-alt", label: "Luas Tanah", value: "4.831 m²" },
];