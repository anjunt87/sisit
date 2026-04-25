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
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1000"
    ],
    detail: "Laboratorium sains kami dilengkapi dengan peralatan eksperimen lengkap untuk mata pelajaran Fisika, Kimia, dan Biologi. Setiap meja praktikum memiliki instalasi gas, air, dan listrik yang aman serta ventilasi udara yang memadai.",
    features: [
      "Peralatan eksperimen lengkap",
      "Instalasi gas & air per meja",
      "Lemari asap (fume hood)",
      "Pemadam api & P3K tersedia"
    ],
  },
  {
    title: "Lab Komputer",
    desc: "Laboratorium komputer dengan koneksi internet cepat",
    icon: "fas fa-desktop",
    bg: "bg-purple-100",
    color: "text-purple-600",
    images: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000"
    ],
    detail: "Laboratorium komputer menyediakan 40 unit PC dengan spesifikasi terkini, terhubung ke jaringan internet fiber optik berkecepatan tinggi. Ruangan ber-AC dan dilengkapi server lokal untuk kebutuhan belajar coding dan multimedia.",
    features: [
      "40 unit PC spesifikasi terkini",
      "Internet fiber optik 100 Mbps",
      "Server lokal & LAN",
      "Software desain & pemrograman"
    ],
  },
  {
    title: "Perpustakaan Digital",
    desc: "Koleksi buku fisik lengkap dan fasilitas yang nyaman",
    icon: "fas fa-book-reader",
    bg: "bg-yellow-100",
    color: "text-yellow-600",
    images: [
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1529158062015-d8a0bbb1a985?auto=format&fit=crop&q=80&w=1000"
    ],
    detail: "Perpustakaan kami memiliki koleksi lebih dari 10.000 judul buku fisik serta akses ke ribuan e-book dan jurnal digital. Ruang baca yang tenang dan nyaman mendukung budaya literasi siswa, dilengkapi area diskusi dan pojok baca anak.",
    features: [
      "10.000+ koleksi buku fisik",
      "Akses e-book & jurnal digital",
      "Area diskusi kelompok",
      "Sistem peminjaman digital"
    ],
  },
  {
    title: "Lapangan Olahraga",
    desc: "Lapangan multifungsi untuk kegiatan olahraga dan outdoor",
    icon: "fas fa-basketball-ball",
    bg: "bg-red-100",
    color: "text-red-600",
    images: [
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1000"
    ],
    detail: "Lapangan olahraga multifungsi seluas 2.000 m² dapat digunakan untuk basket, voli, futsal, dan badminton. Permukaan lapangan menggunakan material berkualitas yang aman dan nyaman, dilengkapi tribun penonton dan lampu sorot untuk kegiatan malam.",
    features: [
      "Lapangan basket & voli",
      "Lapangan futsal & badminton",
      "Tribun penonton 200 kursi",
      "Lampu sorot LED"
    ],
  },
  {
    title: "Mushola",
    desc: "Tempat ibadah yang nyaman dan bersih bagi siswa",
    icon: "fas fa-mosque",
    bg: "bg-pink-100",
    color: "text-pink-600",
    images: [
      "https://images.unsplash.com/photo-1592838464221-a7268248a941?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1563177978-4af5da3b7e1c?auto=format&fit=crop&q=80&w=1000"
    ],
    detail: "Mushola sekolah mampu menampung hingga 150 jamaah dengan fasilitas wudhu yang bersih dan terpisah antara putra dan putri. Ruangan ber-AC, tersedia Al-Qur'an dan sajadah, serta jadwal shalat berjamaah yang teratur untuk siswa dan guru.",
    features: [
      "Kapasitas 150 jamaah",
      "Tempat wudhu putra & putri",
      "AC & sound system",
      "Al-Qur'an & perlengkapan ibadah"
    ],
  },
  {
    title: "Akses Internet",
    desc: "Jaringan Wi-Fi cepat di seluruh area sekolah",
    icon: "fas fa-wifi",
    bg: "bg-teal-100",
    color: "text-teal-600",
    images: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1516996087931-5ae405802f9f?auto=format&fit=crop&q=80&w=1000"
    ],
    detail: "Jaringan Wi-Fi berkecepatan tinggi menjangkau seluruh area sekolah, mulai dari ruang kelas, perpustakaan, kantin, hingga lapangan olahraga. Koneksi stabil dengan bandwidth 500 Mbps dan sistem keamanan jaringan yang melindungi pengguna dari konten negatif.",
    features: [
      "Bandwidth 500 Mbps fiber optik",
      "Jangkauan seluruh area sekolah",
      "Filter konten negatif",
      "Login sistem per akun siswa"
    ],
  },
  {
    title: "Keamanan 24 Jam",
    desc: "CCTV dan satpam menjaga keamanan lingkungan sekolah",
    icon: "fas fa-shield-alt",
    bg: "bg-indigo-100",
    color: "text-indigo-600",
    images: [
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1000"
    ],
    detail: "Keamanan sekolah dijaga 24 jam oleh petugas satpam terlatih yang bertugas secara bergilir. Lebih dari 50 titik kamera CCTV terpasang di seluruh area sekolah dengan rekaman tersimpan selama 30 hari, didukung sistem akses pintu elektronik dan panic button.",
    features: [
      "50+ titik kamera CCTV",
      "Satpam berjaga 24 jam",
      "Akses pintu kartu elektronik",
      "Rekaman tersimpan 30 hari"
    ],
  },
  {
    title: "Jemputan Sekolah",
    desc: "Layanan antar-jemput aman dan nyaman untuk siswa",
    icon: "fas fa-bus-alt",
    bg: "bg-green-50",
    color: "text-green-600",
    images: [
      "https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1000"
    ],
    detail: "Layanan jemputan sekolah beroperasi dengan armada bus yang nyaman dan terawat, mencakup berbagai rute di sekitar wilayah sekolah. Setiap bus dilengkapi GPS tracking yang dapat dipantau orang tua secara real-time melalui aplikasi mobile.",
    features: [
      "Armada bus ber-AC & terawat",
      "GPS tracking real-time",
      "Pendamping di setiap bus",
      "Rute fleksibel & terjadwal"
    ],
  },
  {
    title: "Ekstrakurikuler",
    desc: "Beragam pilihan kegiatan sesuai minat dan bakat",
    icon: "fas fa-running",
    bg: "bg-green-50",
    color: "text-green-600",
    images: [
      "https://images.unsplash.com/photo-1461896756670-f0739e731519?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?auto=format&fit=crop&q=80&w=1000"
    ],
    detail: "Kami menyediakan lebih dari 20 pilihan kegiatan ekstrakurikuler yang dibimbing oleh pelatih dan pembina berpengalaman. Mulai dari olahraga, seni, robotika, hingga debat – semua dirancang untuk mengembangkan potensi terbaik setiap siswa.",
    features: [
      "20+ pilihan ekstrakurikuler",
      "Pelatih & pembina berpengalaman",
      "Kompetisi antar sekolah",
      "Sertifikat pencapaian resmi"
    ],
  },
  {
    title: "Mess Hall",
    desc: "Tempat makan bersama yang bersih dan teratur",
    icon: "fas fa-utensils",
    bg: "bg-yellow-50",
    color: "text-yellow-600",
    images: [
      "https://images.unsplash.com/photo-1567529684892-09290a1b2d05?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1000"
    ],
    detail: "Mess hall sekolah mampu menampung 300 siswa sekaligus dengan menyajikan menu bergizi seimbang yang disusun oleh ahli gizi. Dapur beroperasi dengan standar kebersihan tinggi dan semua bahan makanan dipilih dari sumber yang terpercaya dan segar.",
    features: [
      "Kapasitas 300 siswa",
      "Menu bergizi oleh ahli gizi",
      "Standar kebersihan HACCP",
      "Pilihan menu setiap hari"
    ],
  },
  {
    title: "Ruang Konseling",
    desc: "Bimbingan konseling untuk mendampingi siswa",
    icon: "fas fa-user-friends",
    bg: "bg-pink-50",
    color: "text-pink-600",
    images: [
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&q=80&w=1000"
    ],
    detail: "Ruang konseling dirancang sebagai ruang yang aman, nyaman, dan privat bagi siswa untuk berbagi permasalahan akademik maupun personal. Konselor kami bersertifikat dan siap membantu siswa mengembangkan potensi diri, mengelola emosi, dan merencanakan karier.",
    features: [
      "Konselor bersertifikat BK",
      "Ruang privat & nyaman",
      "Sesi individual & kelompok",
      "Program kesehatan mental"
    ],
  },
  {
    title: "Studio Seni & Musik",
    desc: "Fasilitas lengkap untuk seni rupa, teater & musik",
    icon: "fas fa-paint-brush",
    bg: "bg-indigo-50",
    color: "text-indigo-600",
    images: [
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=1000"
    ],
    detail: "Studio seni dan musik kami menyediakan ruang berkreasi yang inspiratif, dilengkapi peralatan musik lengkap mulai dari piano, gitar, drum, hingga studio rekaman mini. Area seni rupa tersedia dengan pencahayaan optimal dan perlengkapan melukis serta desain grafis.",
    features: [
      "Studio rekaman mini",
      "Peralatan musik lengkap",
      "Area seni rupa & melukis",
      "Ruang pameran karya siswa"
    ],
  },
  {
    title: "Taman Bermain",
    desc: "Area bermain edukatif dan aman untuk siswa TK/SD",
    icon: "fas fa-tree",
    bg: "bg-lime-50",
    color: "text-green-600",
    images: [
      "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1571948590998-6b62b1e21c71?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1575783970733-1aaedde1db74?auto=format&fit=crop&q=80&w=1000"
    ],
    detail: "Taman bermain kami dirancang khusus untuk mendukung tumbuh kembang anak usia TK dan SD melalui permainan edukatif yang menyenangkan. Semua wahana bermain terbuat dari material ramah lingkungan dan aman, dengan permukaan lantai empuk untuk mencegah cedera.",
    features: [
      "Wahana bermain edukatif",
      "Material ramah lingkungan",
      "Permukaan anti-cedera",
      "Area hijau & teduh"
    ],
  },
  {
    title: "Daycare",
    desc: "Fasilitas aman dan edukatif bagi anak usia dini",
    icon: "fas fa-baby",
    bg: "bg-rose-50",
    color: "text-rose-600",
    images: [
      "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=1000"
    ],
    detail: "Fasilitas daycare kami menyediakan lingkungan yang aman, hangat, dan stimulatif bagi anak usia 1–5 tahun. Pengasuh kami terlatih dalam perkembangan anak usia dini dan memberikan perhatian personal untuk setiap anak, dengan rasio pengasuh dan anak yang ideal.",
    features: [
      "Pengasuh bersertifikat PAUD",
      "Rasio 1:5 pengasuh & anak",
      "CCTV & akses terbatas orang tua",
      "Kurikulum stimulasi dini"
    ],
  },
]