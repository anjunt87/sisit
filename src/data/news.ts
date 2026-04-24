// src\data\news.ts

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
}

export const newsList: NewsItem[] = [
  {
    id: "wisuda-tahfidz-akhirussanah",
    title: "Wisuda Tahfidz & Akhirussanah",
    description:
      "Acara khidmat untuk siswa-siswi penghafal Quran, menandai akhir tahun ajaran dengan penuh makna spiritual.",
    content: `
      Alhamdulillah, acara Wisuda Tahfidz & Akhirussanah tahun ini berjalan dengan khidmat dan penuh haru. 
      Sebanyak 45 siswa-siswi berhasil menyelesaikan hafalan Al-Quran mereka, mulai dari 1 juz hingga 30 juz.

      Acara yang berlangsung di aula utama sekolah ini dihadiri oleh para orang tua, wali murid, dan tamu undangan. 
      Setiap wisudawan tampil membanggakan dalam balutan busana islami yang anggun.

      Kepala sekolah dalam sambutannya menyampaikan bahwa program tahfidz adalah pondasi utama pendidikan di Nurul Imam Islamic School. 
      "Anak-anak kita tidak hanya cerdas secara akademik, tetapi juga memiliki bekal Al-Quran untuk kehidupan mereka," ujarnya.

      Selain prosesi wisuda, acara juga diisi dengan penampilan tilawah, nasyid, dan tausiyah dari ustadz tamu. 
      Momen ini menjadi pengingat bagi seluruh civitas akademika akan pentingnya menjaga dan mengamalkan Al-Quran dalam kehidupan sehari-hari.
    `,
    image:
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=1200&h=600&fit=crop&auto=format",
    category: "Kegiatan",
    date: "15 Apr 2025",
    readTime: "3",
  },
  {
    id: "juara-osn-tingkat-provinsi",
    title: "Juara OSN Tingkat Provinsi",
    description:
      "Siswa SMPIT meraih medali emas di Olimpiade Sains Nasional bidang Matematika tingkat provinsi.",
    content: `
      Prestasi membanggakan kembali ditorehkan oleh siswa Nurul Imam Islamic School. 
      Muhammad Farhan Rizki, siswa kelas IX SMPIT, berhasil meraih medali emas dalam Olimpiade Sains Nasional (OSN) 
      bidang Matematika tingkat provinsi yang diselenggarakan bulan lalu.

      Farhan mengaku mempersiapkan diri selama lebih dari enam bulan dengan bimbingan intensif dari guru-guru matematika sekolah. 
      "Alhamdulillah, kerja keras tidak mengkhianati hasil. Semoga ini bisa menjadi inspirasi bagi teman-teman," ujar Farhan.

      Kepala sekolah menyampaikan kebanggaannya atas pencapaian ini. Menurutnya, prestasi Farhan adalah bukti nyata bahwa 
      sekolah berbasis Islam pun mampu bersaing di bidang sains dan teknologi.

      Farhan akan mewakili provinsi di tingkat nasional yang akan diadakan pada bulan Juli mendatang. 
      Seluruh keluarga besar Nurul Imam Islamic School mendoakan yang terbaik untuk perjuangannya.
    `,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop&auto=format",
    category: "Prestasi",
    date: "10 Apr 2025",
    readTime: "2",
  },
  {
    id: "gebyar-muharram-1447h",
    title: "Gebyar Muharram 1447 H",
    description:
      "Lomba adzan, MTQ, kaligrafi, dan tausiyah menyemarakkan semangat hijrah siswa.",
    content: `
      Menyambut Tahun Baru Islam 1447 H, Nurul Imam Islamic School menggelar Gebyar Muharram yang meriah 
      dan penuh semangat. Berbagai lomba keislaman digelar selama tiga hari berturut-turut.

      Kegiatan dibuka dengan lomba adzan yang diikuti oleh siswa SD, SMP, dan SMA. Kemudian dilanjutkan dengan 
      Musabaqah Tilawatil Quran (MTQ), lomba kaligrafi, dan ditutup dengan kompetisi tausiyah.

      Antusias siswa sangat tinggi. Ratusan peserta mendaftar dan bersaing secara sportif. 
      Panitia juga mengadakan bazar makanan halal dan pameran karya islami yang menambah semarak suasana.

      Acara ditutup dengan tausiyah dari ustadz undangan yang menyampaikan makna hijrah dalam konteks kehidupan modern. 
      Pesan utamanya: hijrah bukan hanya perpindahan tempat, tetapi perubahan menuju kebaikan yang nyata.
    `,
    image:
      "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=1200&h=600&fit=crop&auto=format",
    category: "Kegiatan",
    date: "5 Apr 2025",
    readTime: "3",
  },
  {
    id: "workshop-pengembangan-guru",
    title: "Workshop Pengembangan Guru",
    description:
      "Guru-guru mendapatkan pelatihan strategi pembelajaran interaktif dan kurikulum berbasis nilai Islam.",
    content: `
      Sebagai wujud komitmen terhadap kualitas pendidikan, Nurul Imam Islamic School mengadakan Workshop 
      Pengembangan Kompetensi Guru yang berlangsung selama dua hari penuh.

      Workshop ini menghadirkan narasumber dari Universitas Islam terkemuka dan praktisi pendidikan berpengalaman. 
      Materi yang disampaikan meliputi strategi pembelajaran aktif, integrasi nilai-nilai Islam dalam setiap mata pelajaran, 
      serta pemanfaatan teknologi dalam proses belajar mengajar.

      Seluruh guru dari jenjang SD hingga SMA berpartisipasi aktif. Mereka terlibat dalam simulasi mengajar, 
      diskusi kelompok, dan penyusunan modul pembelajaran yang relevan dengan kebutuhan siswa masa kini.

      "Guru yang terus belajar adalah guru yang akan menghasilkan murid-murid terbaik," ungkap kepala sekolah 
      dalam pembukaan acara. Workshop ini diharapkan menjadi agenda rutin setiap semester.
    `,
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?w=1200&h=600&fit=crop&auto=format",
    category: "Kegiatan",
    date: "28 Mar 2025",
    readTime: "2",
  },
  {
    id: "pameran-karya-siswa",
    title: "Pameran Karya Siswa",
    description:
      "Siswa memamerkan hasil karya seni, kerajinan, dan proyek sains dalam acara tahunan sekolah.",
    content: `
      Pameran Karya Siswa Tahunan kembali digelar dengan tema "Kreasi Islami, Inovasi Tanpa Batas". 
      Acara ini menampilkan ratusan karya dari siswa seluruh jenjang, mulai dari SD hingga SMA.

      Berbagai karya dipamerkan, mulai dari lukisan kaligrafi, kerajinan tangan dari bahan daur ulang, 
      hingga proyek sains seperti panel surya mini dan sistem filtrasi air sederhana. Setiap karya mencerminkan 
      kreativitas siswa yang dilandasi nilai-nilai islami.

      Pengunjung yang hadir tidak hanya dari kalangan orang tua siswa, tetapi juga dari sekolah-sekolah lain 
      dan masyarakat umum. Beberapa karya bahkan mendapat apresiasi dari dinas pendidikan setempat.

      Tiga karya terbaik dari masing-masing jenjang mendapatkan penghargaan khusus. Seluruh siswa peserta 
      mendapatkan sertifikat partisipasi sebagai bentuk apresiasi atas kerja keras mereka.
    `,
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&h=600&fit=crop&auto=format",
    category: "Kegiatan",
    date: "20 Mar 2025",
    readTime: "2",
  },
  {
    id: "turnamen-olahraga-antar-sekolah",
    title: "Turnamen Olahraga Antar Sekolah",
    description:
      "Tim olahraga sekolah meraih juara umum dalam kompetisi sepak bola dan bulu tangkis tingkat kota.",
    content: `
      Tim olahraga Nurul Imam Islamic School kembali mengukir prestasi gemilang. Dalam Turnamen Olahraga 
      Antar Sekolah tingkat kota yang berlangsung selama satu minggu, sekolah kami berhasil meraih gelar Juara Umum.

      Tim sepak bola SMPIT berhasil menjuarai turnamen setelah mengalahkan 12 sekolah peserta. Di final, 
      mereka menang 3-1 atas tim tuan rumah. Sementara itu, tim bulu tangkis ganda putra juga meraih medali emas.

      Para pemain berlatih intensif selama dua bulan sebelum turnamen. Pelatih tim, Pak Rudi, mengatakan 
      bahwa kunci keberhasilan adalah kedisiplinan, kekompakan tim, dan doa yang tidak pernah putus.

      Piala dan trofi kemenangan disambut meriah oleh seluruh warga sekolah saat pawai kecil mengelilingi 
      lingkungan sekolah. Ini adalah juara umum ketiga berturut-turut yang diraih sekolah dalam turnamen yang sama.
    `,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=600&fit=crop&auto=format",
    category: "Prestasi",
    date: "12 Mar 2025",
    readTime: "3",
  },
];