// src/data/smpit.ts

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
  { icon: "fa-user-cog", label: "Operator", value: "Meri Villiani" },
  {
    icon: "fa-layer-group",
    label: "Kurikulum",
    value: "Kurikulum SMP Merdeka",
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
      "Dusun 2 Ciranggon Raya RT.008/004, Kec. Majalaya, Kab. Karawang, Jawa Barat",
  },
  { icon: "fa-phone", label: "Telepon", value: "081282159719" },
  { icon: "fa-envelope", label: "Email", value: "smpitbilingual@gmail.com" },
  {
    icon: "fa-building",
    label: "Yayasan",
    value: "Yayasan Pendidikan Alam Jaya",
  },
  { icon: "fa-expand-arrows-alt", label: "Luas Tanah", value: "2.775 m²" },
];

export const stats = [
  { target: 244, suffix: "+", label: "Siswa Aktif" },
  { target: 13, suffix: "+", label: "Tenaga Pendidik" },
  { target: 9, suffix: "", label: "Rombel" },
  { target: 100, suffix: "%", label: "Kelas Layak" },
];

export const statistik = [
  { icon: "fa-chalkboard-teacher", label: "Guru", value: "13" },
  { icon: "fa-male", label: "Siswa Laki-laki", value: "124" },
  { icon: "fa-female", label: "Siswa Perempuan", value: "120" },
  { icon: "fa-users", label: "Rombongan Belajar", value: "9" },
  { icon: "fa-door-open", label: "Ruang Kelas", value: "8" },
  { icon: "fa-flask", label: "Laboratorium", value: "1" },
  { icon: "fa-book", label: "Perpustakaan", value: "1" },
];

export const prosesPembelajaran = [
  { label: "Rasio Siswa / Rombel", value: "28" },
  { label: "Rasio Rombel / Ruang Kelas", value: "1" },
  { label: "Rasio Siswa / Guru", value: "19" },
  { label: "Guru Kualifikasi S1/D4", value: "92,31%" },
  { label: "Guru Bersertifikasi", value: "46,15%" },
  { label: "Ruang Kelas Layak", value: "100%" },
];

export const pimpinan = [
  {
    name: "Nadia Sofia Fitri Dahlia, S.Pd",
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

export const ekstrakurikuler = [
  {
    icon: "fa-drum",
    category: "Seni & Budaya",
    name: "Hadroh",
    desc: "Kesenian musik Islami yang menumbuhkan kecintaan terhadap shalawat dan budaya Islam.",
  },
  {
    icon: "fa-music",
    category: "Seni & Budaya",
    name: "Angklung",
    desc: "Melatih kekompakan, ritme, dan kecintaan terhadap budaya lokal melalui musik tradisional.",
  },
  {
    icon: "fa-comments",
    category: "Bilingual Program",
    name: "English Club & Conversation",
    desc: "Pembiasaan komunikasi aktif dalam bahasa Inggris melalui diskusi, presentasi, dan public speaking.",
  },
  {
    icon: "fa-quran",
    category: "Keislaman",
    name: "TAHTA",
    desc: "Program tahsin dan tahfidz intensif untuk memperkuat hafalan dan kualitas bacaan Al-Qur’an.",
  },
  {
    icon: "fa-fist-raised",
    category: "Bela Diri",
    name: "Silat Merpati Putih",
    desc: "Melatih disiplin, ketahanan fisik, dan karakter melalui seni bela diri tradisional.",
  },
  {
    icon: "fa-person-falling",
    category: "Bela Diri",
    name: "Taekwondo",
    desc: "Mengembangkan kekuatan fisik, mental, serta sportivitas dalam kompetisi.",
  },
  {
    icon: "fa-futbol",
    category: "Olahraga",
    name: "Futsal",
    desc: "Melatih kerja sama tim, kepemimpinan, dan kebugaran jasmani siswa.",
  },
  {
    icon: "fa-code",
    category: "Teknologi",
    name: "Coding",
    desc: "Pengenalan logika pemrograman untuk membangun kreativitas dan problem solving.",
  },
  {
    icon: "fa-robot",
    category: "Teknologi",
    name: "Robotic",
    desc: "Mengembangkan kemampuan STEM melalui perakitan dan pemrograman robot.",
  },
  {
    icon: "fa-campground",
    category: "Kepramukaan",
    name: "Pramuka",
    desc: "Membentuk karakter, kemandirian, dan jiwa kepemimpinan siswa.",
  },
  {
    icon: "fa-bullseye",
    category: "Olahraga Sunnah",
    name: "Panahan",
    desc: "Melatih fokus, ketenangan, dan konsentrasi sesuai sunnah Rasulullah SAW.",
  },
];

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