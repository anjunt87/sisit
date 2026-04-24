// src\data\pages\facilities.ts
export interface Facility {
  title: string
  desc: string
  icon: string
  bg: string
  color: string

  image?: string         // fallback lama
  images?: string[]      // ✅ multi gambar (utama)

  detail?: string
  features?: string[]
}

export const facilities: Facility[] = [
  {
    title: "Ruang Kelas AC",
    desc: "Ruang kelas yang nyaman dengan AC dan smart board",
    icon: "fas fa-chalkboard-teacher",
    bg: "bg-green-100",
    color: "text-green-600",
    images: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1544531585-9847b68c8c86?auto=format&fit=crop&q=80&w=1000"
    ],
    detail: "Setiap ruang kelas dilengkapi dengan AC split, smart board interaktif, dan pencahayaan LED yang ramah mata. Kapasitas 25–30 siswa dengan tata letak yang mendukung diskusi kelompok maupun pembelajaran individual.",
    features: [
      "Smart board interaktif",
      "AC split 1,5 PK",
      "30 kursi ergonomis",
      "Proyektor HD"
    ],
  },
  {
    title: "Lab Sains",
    desc: "Laboratorium sains dengan peralatan modern",
    icon: "fas fa-flask",
    bg: "bg-green-100",
    color: "text-green-600",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    title: "Lab Komputer",
    desc: "Laboratorium komputer dengan koneksi internet cepat",
    icon: "fas fa-desktop",
    bg: "bg-purple-100",
    color: "text-purple-600",
    images: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    title: "Perpustakaan Digital",
    desc: "Koleksi buku fisik lengkap dan fasilitas yang nyaman",
    icon: "fas fa-book-reader",
    bg: "bg-yellow-100",
    color: "text-yellow-600",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Lapangan Olahraga",
    desc: "Lapangan multifungsi untuk kegiatan olahraga dan outdoor",
    icon: "fas fa-basketball-ball",
    bg: "bg-red-100",
    color: "text-red-600",
    images: [
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    title: "Mushola",
    desc: "Tempat ibadah yang nyaman dan bersih bagi siswa",
    icon: "fas fa-mosque",
    bg: "bg-pink-100",
    color: "text-pink-600",
    image: "https://images.unsplash.com/photo-1592838464221-a7268248a941?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Akses Internet",
    desc: "Jaringan Wi-Fi cepat di seluruh area sekolah",
    icon: "fas fa-wifi",
    bg: "bg-teal-100",
    color: "text-teal-600",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Keamanan 24 Jam",
    desc: "CCTV dan satpam menjaga keamanan lingkungan sekolah",
    icon: "fas fa-shield-alt",
    bg: "bg-indigo-100",
    color: "text-indigo-600",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Jemputan Sekolah",
    desc: "Layanan antar-jemput aman dan nyaman untuk siswa",
    icon: "fas fa-bus-alt",
    bg: "bg-green-50",
    color: "text-green-600",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Ekstrakurikuler",
    desc: "Beragam pilihan kegiatan sesuai minat dan bakat",
    icon: "fas fa-running",
    bg: "bg-green-50",
    color: "text-green-600",
    image: "https://images.unsplash.com/photo-1461896756670-f0739e731519?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Mess Hall",
    desc: "Tempat makan bersama yang bersih dan teratur",
    icon: "fas fa-utensils",
    bg: "bg-yellow-50",
    color: "text-yellow-600",
    image: "https://images.unsplash.com/photo-1567529684892-09290a1b2d05?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Ruang Konseling",
    desc: "Bimbingan konseling untuk mendampingi siswa",
    icon: "fas fa-user-friends",
    bg: "bg-pink-50",
    color: "text-pink-600",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Studio Seni & Musik",
    desc: "Fasilitas lengkap untuk seni rupa, teater & musik",
    icon: "fas fa-paint-brush",
    bg: "bg-indigo-50",
    color: "text-indigo-600",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Taman Bermain",
    desc: "Area bermain edukatif dan aman untuk siswa TK/SD",
    icon: "fas fa-tree",
    bg: "bg-lime-50",
    color: "text-green-600",
    image: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Daycare",
    desc: "Fasilitas aman dan edukatif bagi anak usia dini",
    icon: "fas fa-baby",
    bg: "bg-rose-50",
    color: "text-rose-600",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&q=80&w=1000"
  },
]