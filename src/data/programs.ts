export const colorMap = {
  green: {
    bg: "from-green-50 to-green-100",
    border: "border-green-200",
    icon: "bg-green-600",
    text: "text-green-600",
    badge: "bg-green-100 text-green-700",
  },
  blue: {
    bg: "from-blue-50 to-blue-100",
    border: "border-blue-200",
    icon: "bg-blue-600",
    text: "text-blue-600",
    badge: "bg-blue-100 text-blue-700",
  },
  purple: {
    bg: "from-purple-50 to-purple-100",
    border: "border-purple-200",
    icon: "bg-purple-600",
    text: "text-purple-600",
    badge: "bg-purple-100 text-purple-700",
  },
  orange: {
    bg: "from-orange-50 to-orange-100",
    border: "border-orange-200",
    icon: "bg-orange-600",
    text: "text-orange-600",
    badge: "bg-orange-100 text-orange-700",
  },
  teal: {
    bg: "from-teal-50 to-teal-100",
    border: "border-teal-200",
    icon: "bg-teal-600",
    text: "text-teal-600",
    badge: "bg-teal-100 text-teal-700",
  },
  pink: {
    bg: "from-pink-50 to-pink-100",
    border: "border-pink-200",
    icon: "bg-pink-600",
    text: "text-pink-600",
    badge: "bg-pink-100 text-pink-700",
  },
} as const

export type ColorKey = keyof typeof colorMap

export interface Program {
  slug: string        // ← tambah
  icon: string
  color: ColorKey
  title: string
  desc: string
  details: {          // ← tambah
    headline: string
    points: string[]
    highlights: { label: string; value: string }[]
  }
}

export const programs: Program[] = [
  {
    slug: "kurikulum-merdeka",
    icon: "fa-book-open",
    color: "green",
    title: "Kurikulum Merdeka",
    desc: "Mengadopsi kurikulum terkini yang mendorong kreativitas dan kemandirian siswa dalam belajar.",
    details: {
      headline: "Belajar Lebih Bermakna dengan Kurikulum Merdeka",
      points: [
        "Pembelajaran berbasis proyek (Project-Based Learning)",
        "Asesmen formatif yang berpusat pada peserta didik",
        "Profil Pelajar Pancasila sebagai fondasi karakter",
        "Fleksibilitas dalam memilih mata pelajaran pilihan",
        "Guru sebagai fasilitator, bukan sekadar pengajar",
      ],
      highlights: [
        { label: "Jenjang", value: "SD – SMA" },
        { label: "Metode", value: "Project-Based" },
        { label: "Asesmen", value: "Formatif & Sumatif" },
      ],
    },
  },
  {
    slug: "tahfidz-terprogram",
    icon: "fa-book-quran",
    color: "blue",
    title: "Tahfidz Terprogram",
    desc: "Program hafalan Al-Qur'an dari jenjang dasar hingga menengah dengan metode yang efektif.",
    details: {
      headline: "Menghafal Al-Qur'an dengan Metode Terstruktur",
      points: [
        "Target hafalan terprogram per jenjang kelas",
        "Metode Talaqqi bersama guru hafidz bersertifikat",
        "Muroja'ah rutin harian dan mingguan",
        "Tahsin tajwid terintegrasi dalam setiap sesi",
        "Sertifikat tahfidz resmi dari pondok mitra",
      ],
      highlights: [
        { label: "Target SD", value: "3 Juz" },
        { label: "Target SMP", value: "10 Juz" },
        { label: "Target SMA", value: "20 Juz" },
      ],
    },
  },
  {
    slug: "digital-terintegrasi",
    icon: "fa-mobile-screen",
    color: "purple",
    title: "Digital & Terintegrasi",
    desc: "Sistem informasi sekolah dan aplikasi mobile untuk memudahkan komunikasi.",
    details: {
      headline: "Sekolah Cerdas di Era Digital",
      points: [
        "Aplikasi mobile untuk orang tua dan siswa",
        "Absensi digital berbasis QR Code",
        "Laporan nilai dan perkembangan siswa real-time",
        "Notifikasi kehadiran otomatis ke orang tua",
        "Portal e-learning untuk tugas dan materi",
      ],
      highlights: [
        { label: "Platform", value: "iOS & Android" },
        { label: "Akses", value: "24/7 Online" },
        { label: "Pengguna", value: "Siswa & Ortu" },
      ],
    },
  },
  {
    slug: "bahasa-internasional",
    icon: "fa-language",
    color: "orange",
    title: "Bahasa Internasional",
    desc: "Program bilingual dengan penguasaan bahasa Arab dan Inggris yang mendalam.",
    details: {
      headline: "Fasih Dua Bahasa Sejak Dini",
      points: [
        "Kelas bilingual Bahasa Arab dan Inggris setiap hari",
        "Native speaker untuk kelas percakapan",
        "English/Arabic Day setiap minggu",
        "Persiapan ujian TOEFL, IELTS, dan TOAFL",
        "Pertukaran pelajar ke luar negeri",
      ],
      highlights: [
        { label: "Bahasa", value: "Arab & Inggris" },
        { label: "Sesi/Minggu", value: "6 Sesi" },
        { label: "Sertifikasi", value: "TOEFL / TOAFL" },
      ],
    },
  },
  {
    slug: "laboratorium-lengkap",
    icon: "fa-flask",
    color: "teal",
    title: "Laboratorium Lengkap",
    desc: "Fasilitas laboratorium sains, komputer, dan bahasa yang modern dan lengkap.",
    details: {
      headline: "Belajar Sains Langsung dari Praktik",
      points: [
        "Lab Fisika, Kimia, dan Biologi berstandar nasional",
        "Lab Komputer dengan 40 unit PC terbaru",
        "Lab Bahasa dengan headset dan software interaktif",
        "Praktikum terjadwal setiap minggu per mata pelajaran",
        "Peralatan lengkap dan terawat secara berkala",
      ],
      highlights: [
        { label: "Total Lab", value: "5 Laboratorium" },
        { label: "Kapasitas", value: "40 Siswa/Lab" },
        { label: "Standar", value: "Nasional" },
      ],
    },
  },
  {
    slug: "ekstrakurikuler",
    icon: "fa-trophy",
    color: "pink",
    title: "Ekstrakurikuler",
    desc: "Beragam kegiatan ekstrakurikuler untuk mengembangkan bakat dan minat siswa.",
    details: {
      headline: "Temukan dan Kembangkan Bakatmu",
      points: [
        "Lebih dari 15 pilihan ekstrakurikuler",
        "Olahraga: futsal, basket, bulu tangkis, renang",
        "Seni: tari, musik, kaligrafi, teater",
        "Akademik: olimpiade sains, debat, robotika",
        "Pramuka dan Paskibra wajib untuk pembentukan karakter",
      ],
      highlights: [
        { label: "Pilihan Ekskul", value: "15+" },
        { label: "Jadwal", value: "Setiap Jumat" },
        { label: "Prestasi", value: "Juara Nasional" },
      ],
    },
  },
]