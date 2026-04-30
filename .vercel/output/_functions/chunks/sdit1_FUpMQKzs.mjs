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
const keunggulan = [
  {
    icon: "fa-mosque",
    title: "Kurikulum Islami Terintegrasi",
    desc: "Kurikulum Nasional yang terintegrasi dengan nilai-nilai Islam."
  },
  {
    icon: "fa-project-diagram",
    title: "Project Based Learning",
    desc: "Pembelajaran berbasis proyek dengan pendekatan deep learning."
  },
  {
    icon: "fa-quran",
    title: "Tahsin & Tahfidz UMMI",
    desc: "Program hafalan Al-Qur’an hingga 2 juz."
  },
  {
    icon: "fa-language",
    title: "Bahasa Arab & Inggris",
    desc: "Mempersiapkan siswa berwawasan global."
  }
];
const kompetensi = [
  {
    icon: "fa-quran",
    text: "Mampu membaca Al-Qur'an dengan tartil sesuai kaidah tajwid dasar"
  },
  {
    icon: "fa-book-open",
    text: "Menghafal Juz 30 sebagai dasar hafalan Qur’an SD"
  },
  {
    icon: "fa-hands-praying",
    text: "Terbiasa ibadah harian (shalat, doa, adab Islami)"
  },
  {
    icon: "fa-language",
    text: "Mampu berkomunikasi dasar Bahasa Inggris (daily conversation)"
  },
  {
    icon: "fa-comments",
    text: "Menggunakan kosakata bilingual sederhana (Indonesia–Inggris)"
  },
  {
    icon: "fa-lightbulb",
    text: "Berpikir kritis, kreatif, dan problem solving sederhana"
  },
  {
    icon: "fa-laptop",
    text: "Dasar literasi digital dan teknologi pembelajaran"
  },
  {
    icon: "fa-users",
    text: "Disiplin, mandiri, jujur, dan mampu bekerja sama"
  },
  {
    icon: "fa-heart",
    text: "Menunjukkan akhlak mulia dalam kehidupan sehari-hari"
  },
  {
    icon: "fa-running",
    text: "Aktif dalam olahraga dan kegiatan ekstrakurikuler"
  }
];
const ekstrakurikuler = [
  // Keislaman
  {
    icon: "fa-quran",
    category: "Keislaman",
    name: "Tahta",
    desc: "Program Tahsin & Tahfidz untuk membentuk generasi Qur’ani yang mencintai Al-Qur’an sejak dini dengan pembiasaan harian yang terarah."
  },
  // Seni & Budaya
  {
    icon: "fa-drum",
    category: "Seni & Budaya",
    name: "Hadroh",
    desc: "Seni Islami yang menumbuhkan kecintaan shalawat, memperkuat nilai spiritual, serta melatih kekompakan dan ekspresi seni siswa."
  },
  {
    icon: "fa-music",
    category: "Seni & Budaya",
    name: "Angklung",
    desc: "Musik tradisional yang melatih kerja sama, harmoni, dan apresiasi budaya Indonesia dalam kegiatan yang kreatif dan menyenangkan."
  },
  // Akademik
  {
    icon: "fa-comments",
    category: "Akademik",
    name: "Bahasa Inggris",
    desc: "Pembelajaran Bahasa Inggris aktif untuk membangun keberanian berbicara dan komunikasi global sejak usia sekolah dasar."
  },
  // Teknologi
  {
    icon: "fa-code",
    category: "Teknologi",
    name: "Coding",
    desc: "Pengenalan dasar pemrograman untuk melatih logika, kreativitas, dan kemampuan problem solving siswa."
  },
  {
    icon: "fa-robot",
    category: "Teknologi",
    name: "Robotic",
    desc: "Pembelajaran STEM melalui robotika sederhana untuk menumbuhkan kreativitas dan inovasi teknologi."
  },
  {
    icon: "fa-paint-brush",
    category: "Teknologi & Kreatif",
    name: "Desain Grafis & Videografi",
    desc: "Pengembangan kreativitas digital melalui desain grafis, fotografi, dan videografi untuk produksi konten edukatif dan kreatif."
  },
  // Bela Diri
  {
    icon: "fa-fist-raised",
    category: "Bela Diri",
    name: "Silat Merpati Putih",
    desc: "Seni bela diri yang membentuk karakter disiplin, tangguh, dan percaya diri dalam menghadapi tantangan."
  },
  {
    icon: "fa-person-falling",
    category: "Bela Diri",
    name: "Taekwondo",
    desc: "Olahraga bela diri yang melatih fisik, mental, dan sportivitas siswa."
  },
  // Olahraga
  {
    icon: "fa-futbol",
    category: "Olahraga",
    name: "Futsal",
    desc: "Olahraga tim untuk melatih kerja sama, strategi, dan kebugaran jasmani."
  },
  {
    icon: "fa-bullseye",
    category: "Olahraga Sunnah",
    name: "Panahan",
    desc: "Olahraga sunnah yang melatih fokus, ketenangan, dan ketepatan."
  },
  // Kepramukaan
  {
    icon: "fa-campground",
    category: "Kepramukaan",
    name: "Pramuka",
    desc: "Pembentukan karakter melalui kegiatan alam yang menumbuhkan kemandirian, kepemimpinan, dan kerja sama."
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

export { prosesPembelajaran as a, statistik as b, categories as c, kompetensi as d, ekstrakurikuler as e, gallery as g, identitas as i, keunggulan as k, pimpinan as p, stats as s };
