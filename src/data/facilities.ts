export interface Facility {
  title: string
  desc: string
  icon: string
  bg: string
  color: string
  image?: string        // ← tambah ini
  detail?: string       // ← deskripsi panjang untuk halaman detail
  features?: string[]   // ← poin-poin fitur spesifik
}
export const facilities: Facility[] = [
 {
  title: "Ruang Kelas AC",
  desc: "Ruang kelas yang nyaman dengan AC dan smart board",
  icon: "fas fa-chalkboard-teacher",
  bg: "bg-green-100",
  color: "text-green-600",
  image: "/images/facilities/ruang-kelas.webp",   // ← opsional
  detail: "Setiap ruang kelas dilengkapi dengan AC split, smart board interaktif, dan pencahayaan LED yang ramah mata. Kapasitas 25–30 siswa dengan tata letak yang mendukung diskusi kelompok maupun pembelajaran individual.",
  features: ["Smart board interaktif", "AC split 1,5 PK", "30 kursi ergonomis", "Proyektor HD"],
},
  {
    title: "Lab Sains",
    desc: "Laboratorium sains dengan peralatan modern",
    icon: "fas fa-flask",
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    title: "Lab Komputer",
    desc: "Laboratorium komputer dengan koneksi internet cepat",
    icon: "fas fa-desktop",
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
  {
    title: "Perpustakaan Digital",
    desc: "Koleksi buku fisik lengkap dan fasilitas yang nyaman",
    icon: "fas fa-book-reader",
    bg: "bg-yellow-100",
    color: "text-yellow-600",
  },
  {
    title: "Lapangan Olahraga",
    desc: "Lapangan multifungsi untuk kegiatan olahraga dan outdoor",
    icon: "fas fa-basketball-ball",
    bg: "bg-red-100",
    color: "text-red-600",
  },
  {
    title: "Mushola",
    desc: "Tempat ibadah yang nyaman dan bersih bagi siswa",
    icon: "fas fa-mosque",
    bg: "bg-pink-100",
    color: "text-pink-600",
  },
  {
    title: "Akses Internet",
    desc: "Jaringan Wi-Fi cepat di seluruh area sekolah",
    icon: "fas fa-wifi",
    bg: "bg-teal-100",
    color: "text-teal-600",
  },
  {
    title: "Keamanan 24 Jam",
    desc: "CCTV dan satpam menjaga keamanan lingkungan sekolah",
    icon: "fas fa-shield-alt",
    bg: "bg-indigo-100",
    color: "text-indigo-600",
  },
  {
    title: "Jemputan Sekolah",
    desc: "Layanan antar-jemput aman dan nyaman untuk siswa",
    icon: "fas fa-bus-alt",
    bg: "bg-green-50",
    color: "text-green-600",
  },
  {
    title: "Ekstrakurikuler",
    desc: "Beragam pilihan kegiatan sesuai minat dan bakat",
    icon: "fas fa-running",
    bg: "bg-green-50",
    color: "text-green-600",
  },
  {
    title: "Mess Hall",
    desc: "Tempat makan bersama yang bersih dan teratur",
    icon: "fas fa-utensils",
    bg: "bg-yellow-50",
    color: "text-yellow-600",
  },
  {
    title: "Ruang Konseling",
    desc: "Bimbingan konseling untuk mendampingi siswa",
    icon: "fas fa-user-friends",
    bg: "bg-pink-50",
    color: "text-pink-600",
  },
  {
    title: "Studio Seni & Musik",
    desc: "Fasilitas lengkap untuk seni rupa, teater & musik",
    icon: "fas fa-paint-brush",
    bg: "bg-indigo-50",
    color: "text-indigo-600",
  },
  {
    title: "Taman Bermain",
    desc: "Area bermain edukatif dan aman untuk siswa TK/SD",
    icon: "fas fa-tree",
    bg: "bg-lime-50",
    color: "text-green-600",
  },
  {
    title: "Daycare",
    desc: "Fasilitas aman dan edukatif bagi anak usia dini",
    icon: "fas fa-baby",
    bg: "bg-rose-50",
    color: "text-rose-600",
  },
]