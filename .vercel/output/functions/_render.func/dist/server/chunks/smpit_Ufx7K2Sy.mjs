const stats = [
  { target: 244, suffix: "+", label: "Siswa Aktif" },
  { target: 13, suffix: "+", label: "Tenaga Pendidik" },
  { target: 9, suffix: "", label: "Rombel" },
  { target: 100, suffix: "%", label: "Kelas Layak" }
];
const pimpinan = [
  {
    name: "Nama KepSek, S.Pd",
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
  }
];
const keunggulan = [
  {
    icon: "fa-mosque",
    title: "Kurikulum Islami",
    desc: "Kurikulum Nasional terintegrasi dengan nilai-nilai Islam untuk membentuk akhlak dan akademik."
  },
  {
    icon: "fa-cubes",
    title: "Metode Sentra & Moving Class",
    desc: "Pembelajaran aktif dan eksploratif melalui metode sentra dan moving class."
  },
  {
    icon: "fa-quran",
    title: "Program Al-Qur'an",
    desc: "Tahsin dan tahfidz dengan metode UMMI yang terstruktur."
  },
  {
    icon: "fa-star-and-crescent",
    title: "Pembentukan Karakter",
    desc: "Penanaman nilai islami untuk membentuk pribadi disiplin."
  },
  {
    icon: "fa-book-open",
    title: "Hafalan Surat",
    desc: "Program hafalan bertahap sesuai kemampuan siswa."
  },
  {
    icon: "fa-hands-praying",
    title: "Doa & Hadits",
    desc: "Pembiasaan doa harian dan hadits."
  }
];
const kompetensi = [
  {
    icon: "fa-quran",
    text: "Hafal Al-Qur'an minimal 4–6 juz dengan standar metode UMMI dan tartil yang baik"
  },
  {
    icon: "fa-book-open",
    text: "Menguasai Hadits Arba'in dan memahami makna dasar dalam kehidupan sehari-hari"
  },
  {
    icon: "fa-comments",
    text: "Aktif berkomunikasi dalam Bahasa Inggris (speaking & conversation) dengan target TOEFL ≥ 500"
  },
  {
    icon: "fa-language",
    text: "Mampu menggunakan bilingual (Bahasa Indonesia & Inggris) dalam pembelajaran dan presentasi"
  },
  {
    icon: "fa-certificate",
    text: "Memiliki sertifikasi tahsin & tahfidz metode UMMI sebagai standar kompetensi Al-Qur'an"
  },
  {
    icon: "fa-laptop-code",
    text: "Menguasai dasar digital skill (office, desain, editing, dan teknologi pembelajaran)"
  },
  {
    icon: "fa-photo-video",
    text: "Mampu membuat konten digital sederhana (foto, video, presentasi) untuk proyek pembelajaran"
  },
  {
    icon: "fa-briefcase",
    text: "Memiliki soft skill unggul: komunikasi, kolaborasi, dan problem solving untuk dunia lanjut"
  },
  {
    icon: "fa-crown",
    text: "Memiliki jiwa leadership, disiplin, dan tanggung jawab dalam organisasi dan kegiatan sekolah"
  },
  {
    icon: "fa-globe",
    text: "Berwawasan global dengan karakter Islami dan siap bersaing di era internasional"
  }
];
const ekstrakurikuler = [
  // =========================
  // Keislaman
  // =========================
  {
    icon: "fa-quran",
    category: "Keislaman",
    name: "TAHTA",
    desc: "Program tahsin dan tahfidz intensif untuk memperkuat hafalan, memperbaiki bacaan Al-Qur’an, serta membentuk kedekatan siswa dengan Al-Qur’an sejak dini."
  },
  // =========================
  // Bilingual Program
  // =========================
  {
    icon: "fa-comments",
    category: "Bilingual Program",
    name: "English Club & Conversation",
    desc: "Pembiasaan komunikasi aktif dalam bahasa Inggris melalui percakapan sehari-hari, diskusi kelompok, presentasi, dan public speaking untuk meningkatkan kepercayaan diri siswa."
  },
  // =========================
  // Seni & Budaya
  // =========================
  {
    icon: "fa-drum",
    category: "Seni & Budaya",
    name: "Hadroh",
    desc: "Kesenian musik Islami yang menumbuhkan kecintaan terhadap shalawat, nilai-nilai religius, dan kebersamaan dalam budaya Islam."
  },
  {
    icon: "fa-music",
    category: "Seni & Budaya",
    name: "Angklung",
    desc: "Kegiatan musik tradisional yang melatih kekompakan, ritme, kerja sama tim, serta kecintaan terhadap budaya lokal Indonesia."
  },
  // =========================
  // Teknologi
  // =========================
  {
    icon: "fa-code",
    category: "Teknologi",
    name: "Coding",
    desc: "Pengenalan dasar pemrograman untuk melatih logika berpikir, kreativitas, serta kemampuan problem solving sejak dini."
  },
  {
    icon: "fa-robot",
    category: "Teknologi",
    name: "Robotic",
    desc: "Pembelajaran STEM melalui perakitan dan pemrograman robot untuk mengembangkan kreativitas, teknologi, dan inovasi siswa."
  },
  {
    icon: "fa-paint-brush",
    category: "Teknologi & Kreatif",
    name: "Desain Grafis & Videografi",
    desc: "Pengembangan keterampilan kreatif dalam desain grafis, fotografi, dan videografi, termasuk pembuatan konten visual dan editing video untuk media digital pembelajaran."
  },
  // =========================
  // Bela Diri
  // =========================
  {
    icon: "fa-fist-raised",
    category: "Bela Diri",
    name: "Silat Merpati Putih",
    desc: "Seni bela diri tradisional yang melatih disiplin, ketahanan fisik, mental, serta pembentukan karakter yang kuat dan percaya diri."
  },
  {
    icon: "fa-person-falling",
    category: "Bela Diri",
    name: "Taekwondo",
    desc: "Olahraga bela diri yang mengembangkan kekuatan fisik, kedisiplinan, fokus, serta sportivitas dalam kompetisi dan kehidupan sehari-hari."
  },
  // =========================
  // Olahraga
  // =========================
  {
    icon: "fa-futbol",
    category: "Olahraga",
    name: "Futsal",
    desc: "Olahraga tim yang melatih kerja sama, komunikasi, strategi, serta meningkatkan kebugaran jasmani dan jiwa sportivitas siswa."
  },
  // =========================
  // Kepramukaan
  // =========================
  {
    icon: "fa-campground",
    category: "Kepramukaan",
    name: "Pramuka",
    desc: "Kegiatan pembentukan karakter yang menumbuhkan kemandirian, kepemimpinan, kerja sama, serta kepedulian terhadap lingkungan dan sosial."
  },
  // =========================
  // Olahraga Sunnah
  // =========================
  {
    icon: "fa-bullseye",
    category: "Olahraga Sunnah",
    name: "Panahan",
    desc: "Olahraga sunnah yang melatih fokus, ketenangan, konsentrasi, serta mengajarkan nilai-nilai ketepatan dan kesabaran."
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
  { icon: "fa-chalkboard-teacher", label: "Guru", value: "13" },
  { icon: "fa-male", label: "Siswa Laki-laki", value: "124" },
  { icon: "fa-female", label: "Siswa Perempuan", value: "120" }
];
const prosesPembelajaran = [
  { label: "Rasio Siswa / Rombel", value: "28" },
  { label: "Rasio Siswa / Guru", value: "19" }
];
const identitas = [
  {
    icon: "fa-school",
    label: "Nama Sekolah",
    value: "SMPIT Bilingual Nurul Imam"
  },
  { icon: "fa-id-card", label: "NPSN", value: "70049183" },
  { icon: "fa-star", label: "Akreditasi", value: "A" },
  { icon: "fa-check-circle", label: "Status", value: "Swasta" },
  { icon: "fa-book-open", label: "Bentuk Pendidikan", value: "SMP" },
  {
    icon: "fa-user-tie",
    label: "Kepala Sekolah",
    value: "Nadia Sofia Fitri Dahlia"
  },
  {
    icon: "fa-map-marker-alt",
    label: "Alamat",
    value: "Karawang, Jawa Barat"
  }
];

export { prosesPembelajaran as a, statistik as b, categories as c, kompetensi as d, ekstrakurikuler as e, gallery as g, identitas as i, keunggulan as k, pimpinan as p, stats as s };
