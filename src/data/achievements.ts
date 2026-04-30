// src/data/achievements.ts

export interface Achievement {
  cat: "islam" | "akademik" | "olahraga" | "seni" | "teknologi";
  level: "internasional" | "nasional" | "provinsi" | "kabupaten" | "kecamatan";
  icon: string;
  title: string;
  desc: string;
}

/* ================= DATA ================= */

export const achievements: Achievement[] = [
  // KEISLAMAN
  {
    cat: "islam",
    level: "internasional",
    icon: "fa-book-open",
    title: "Juara 2 Musabaqah Tilawatil Quran",
    desc: "MTQ Internasional Se-Asia Tenggara, Kuala Lumpur 2024",
  },
  {
    cat: "islam",
    level: "nasional",
    icon: "fa-moon",
    title: "Juara 1 Hifzil Quran 30 Juz",
    desc: "Kompetisi Nasional Tahfidz, Jakarta 2024",
  },
  {
    cat: "islam",
    level: "nasional",
    icon: "fa-mosque",
    title: "Juara 2 Pidato Dakwah",
    desc: "Festival Santri Nasional, Yogyakarta 2023",
  },
  {
    cat: "islam",
    level: "provinsi",
    icon: "fa-pen-nib",
    title: "Juara 1 Kaligrafi Naskah",
    desc: "MTQ Tingkat Provinsi Jawa Barat, 2024",
  },
  {
    cat: "islam",
    level: "provinsi",
    icon: "fa-microphone",
    title: "Juara 1 Pidato Bahasa Arab",
    desc: "Musabaqah Bahasa Arab, Bandung 2023",
  },
  {
    cat: "islam",
    level: "kabupaten",
    icon: "fa-book-quran",
    title: "Wisuda Hafizh 30 Juz Terbaik",
    desc: "12 santri hafizh baru tahun 2024",
  },
  {
    cat: "islam",
    level: "kabupaten",
    icon: "fa-scroll",
    title: "Juara 1 Fahmil Quran",
    desc: "MTQ Tingkat Kabupaten Karawang, 2023",
  },
  {
    cat: "islam",
    level: "kecamatan",
    icon: "fa-star-and-crescent",
    title: "Juara 1 Azan & Iqamat",
    desc: "Peringatan Hari Santri Nasional, 2024",
  },

  // AKADEMIK
  {
    cat: "akademik",
    level: "kabupaten",
    icon: "fa-square-root-variable",
    title: "Juara 1 Olimpiade Matematika",
    desc: "OSN Tingkat Kabupaten Karawang, 2024",
  },
  {
    cat: "akademik",
    level: "provinsi",
    icon: "fa-flask",
    title: "Juara 2 Olimpiade IPA",
    desc: "OSN Tingkat Provinsi Jawa Barat, 2023",
  },
  {
    cat: "akademik",
    level: "nasional",
    icon: "fa-earth-asia",
    title: "Juara 3 Debat Bahasa Inggris",
    desc: "National English Olympiad, Jakarta 2024",
  },
  {
    cat: "akademik",
    level: "nasional",
    icon: "fa-chart-line",
    title: "Juara 2 Olimpiade Ekonomi Islam",
    desc: "Kompetisi Nasional Ekonomi Islam, 2023",
  },

  // OLAHRAGA
  {
    cat: "olahraga",
    level: "internasional",
    icon: "fa-shield-halved",
    title: "Juara 3 Pencak Silat",
    desc: "Kejuaraan Internasional, Malaysia 2023",
  },
  {
    cat: "olahraga",
    level: "nasional",
    icon: "fa-shuttlecock",
    title: "Juara 2 Badminton Beregu",
    desc: "Kompetisi Olahraga Santri Nasional, 2024",
  },
  {
    cat: "olahraga",
    level: "provinsi",
    icon: "fa-futbol",
    title: "Juara 1 Turnamen Futsal",
    desc: "Turnamen Futsal Santri Jawa Barat, 2024",
  },
  {
    cat: "olahraga",
    level: "kabupaten",
    icon: "fa-table-tennis-paddle-ball",
    title: "Juara 1 Tenis Meja",
    desc: "O2SN Tingkat Kabupaten Karawang, 2024",
  },

  // SENI
  {
    cat: "seni",
    level: "internasional",
    icon: "fa-music",
    title: "Juara 1 Nasyid International",
    desc: "Asia Islamic Music Competition, Singapura 2023",
  },
  {
    cat: "seni",
    level: "nasional",
    icon: "fa-masks-theater",
    title: "Juara 1 Festival Teater Islami",
    desc: "Festival Seni Santri Nasional, Surabaya 2024",
  },
  {
    cat: "seni",
    level: "provinsi",
    icon: "fa-palette",
    title: "Juara 2 Kaligrafi Digital",
    desc: "Kompetisi Desain Islami Jawa Barat, 2024",
  },
  {
    cat: "seni",
    level: "kabupaten",
    icon: "fa-drum",
    title: "Juara 1 Hadroh & Marawis",
    desc: "Festival Seni Islami Kabupaten Karawang, 2024",
  },

  // TEKNOLOGI
  {
    cat: "teknologi",
    level: "nasional",
    icon: "fa-lightbulb",
    title: "Juara 2 Inovasi Teknologi Santri",
    desc: "Hackathon Santri Nasional, Bandung 2024",
  },
  {
    cat: "teknologi",
    level: "provinsi",
    icon: "fa-robot",
    title: "Juara 1 Lomba Robotika",
    desc: "Robotics Competition Jawa Barat, 2024",
  },
  {
    cat: "teknologi",
    level: "kabupaten",
    icon: "fa-code",
    title: "Juara 1 Web Development",
    desc: "Kompetisi IT Pelajar Karawang, 2023",
  },
];

/* ================= FILTER ================= */

export const categories = [
  { key: "all", icon: "fa-layer-group", label: "Semua" },
  { key: "islam", icon: "fa-star-and-crescent", label: "Keislaman" },
  { key: "akademik", icon: "fa-graduation-cap", label: "Akademik" },
  { key: "olahraga", icon: "fa-medal", label: "Olahraga" },
  { key: "seni", icon: "fa-music", label: "Seni & Budaya" },
  { key: "teknologi", icon: "fa-microchip", label: "Teknologi" },
];

/* ================= UI MAPPING ================= */

export const levelIcon: Record<string, string> = {
  internasional: "fa-globe",
  nasional: "fa-flag",
  provinsi: "fa-map",
  kabupaten: "fa-location-dot",
  kecamatan: "fa-house",
};

export const catColor: Record<string, string> = {
  islam: "bg-green-600",
  akademik: "bg-amber-500",
  olahraga: "bg-blue-600",
  seni: "bg-purple-600",
  teknologi: "bg-orange-500",
};

export const levelStyle: Record<string, string> = {
  internasional: "bg-amber-100 text-amber-800",
  nasional: "bg-blue-100 text-blue-800",
  provinsi: "bg-purple-100 text-purple-800",
  kabupaten: "bg-green-100 text-green-800",
  kecamatan: "bg-gray-100 text-gray-600",
};

/* ================= STATS ================= */

export const statsCounts = {
  internasional: achievements.filter((a) => a.level === "internasional").length,
  nasional: achievements.filter((a) => a.level === "nasional").length,
  provinsi: achievements.filter((a) => a.level === "provinsi").length,
};