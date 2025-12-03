// src/data/subsidiariesData.js

export const subsidiariesData = [
  // 1. PT. Win Global Solusitama
  { 
    id: "wgs", 
    name: "PT. Win Global Solusitama", 
    tagline: "Sinergi Bisnis & Pemberdayaan Ekonomi", 
    logo: "/wgs_karousel.png",
    description: "PT. Win Global Solusitama (WGS) membangun ekosistem bisnis terintegrasi yang berfokus pada pertumbuhan berkelanjutan dan pemberdayaan ekonomi kerakyatan berbasis syariah di setiap unit usahanya.", 
    items: [
      "Pembiayaan Umroh & Haji",
      "Pembiayaan UMKM",
      "Pembiayaan Perumahan",
      "Pembiayaan Pertanian",
      "Pembiayaan Pendidikan"
    ],
    legal: {
        aktaPendirian: 'Akta No. 9, 07 Februari 2023 oleh Notaris Jihan Khoirini, S.H., M.Kn.',
        skKemenkumham: 'Nomor AHU-0010292.AH.01.01.Tahun 2023 (08 Februari 2023)',
        nib: '2111220112493',
        npwp: '61.815.042.9-017.000',
    },
    // ➡️ FOTO KEGIATAN (untuk background card di Page2)
    activityPhotoBg: 'url(/slideshow/gmbr3.jpg)', 
    // ➡️ FOTO KOMISARIS BG (untuk background di SubsidiaryDetailPage)
    commissionersPhotoBg: 'url(/WGS_Kom.jpeg)', 
    // Data detail komisaris (untuk rendering di atas background)
    commissioners: [ 
        { name: "Nama Komisaris A WGS", photo: "/photos/placeholder_wgs.jpg" }
    ]
  },
  // 2. PT. Palm Nusa Khatulistiwa
  { 
    id: "pnk", 
    name: "PT. Palm Nusa Khatulistiwa", 
    tagline: "Industri, Grosir & Ritel", 
    logo: "/pnk.png",
    description: "PT. Palm Nusa Khatulistiwa berfokus pada industri hilir kelapa sawit dengan produk grosir dan ritel. Melalui unit usahanya, perusahaan mendukung pengolahan dan distribusi produk turunan kelapa sawit untuk memenuhi kebutuhan domestik maupun internasional.",
    items: [
      "Produk grosir dan ritel berbasis kelapa sawit",
      "Distribusi minyak goreng kemasan",
      "Penyediaan fasilitas peminjaman mesin POM Minyak Goreng (POMIGOR) bagi UMKM"
    ],
    legal: {
        aktaPendirian: 'Akta No. 55, 12 Agustus 2025 oleh Notaris Reno Rizaldi Nalaprana, S.H., M.Kn.',
        skKemenkumham: 'Nomor AHU-0068269.AH.01.01.TAHUN 2025 (13 Agustus 2025)',
        nib: '2908250090444',
        npwp: '1000 0000 0499 4991',
    },
    activityPhotoBg: 'url(/pnkarmin.jpeg)', 
    commissionersPhotoBg: 'url(/PALM_Kom.jpeg)', 
    commissioners: [ 
        { name: "Nama Komisaris A PNK", photo: "/photos/placeholder_pnk.jpg" }
    ]
  },
  // 3. PT. Agrikultur Global Khatulistiwa
  { 
    id: "agk", 
    name: "PT. Agrikultur Global Khatulistiwa", 
    tagline: "Pertanian, Perkebunan, Peternakan & Perikanan", 
    logo: "/agri_logo.png",
    description: "PT. Agrikultur Global Khatulistiwa bergerak di sektor pertanian, perkebunan, peternakan, dan perikanan. Perusahaan ini mengembangkan model usaha yang berorientasi pada keberlanjutan, pemberdayaan petani lokal, serta menjaga ketahanan pangan nasional.",
    items: [
      "Pengelolaan lahan pertanian dan perkebunan",
      "Peternakan skala kecil hingga besar",
      "Pengembangan sektor perikanan berbasis masyarakat"
    ],
    legal: {
        aktaPendirian: 'Akta No. 239, 29 September 2025 oleh Notaris Reno Rizaldi Nalaprana, S.H., M.Kn.',
        skKemenkumham: 'Nomor AHU-0084404.AH.01.01.TAHUN 2025 (01 Oktober 2025)',
        nib: '—',
        npwp: '1000 0000 0652 8321',
    },
    activityPhotoBg: 'url(/agri.jpg)', 
    commissionersPhotoBg: 'url(/AGK_Kom.jpeg)', 
    commissioners: [ 
        { name: "Nama Komisaris A AGK", photo: "/photos/placeholder_agk.jpg" }
    ]
  },
  // 4. PT. Alfarizi Media Nusantara
  { 
    id: "amn", 
    name: "PT. Alfarizi Media Nusantara", 
    tagline: "Media, Event Organizer & Digital Marketing", 
    logo: "/entertaint.png",
    description: "PT. Alfarizi Media Nusantara merupakan perusahaan yang bergerak di bidang media online, penyelenggaraan event, dan digital marketing. Perusahaan ini juga mengembangkan podcast serta program kreatif untuk mendukung transformasi digital di Indonesia.",
    items: [
      "Media online dengan berbagai konten informatif",
      "Event organizer untuk kegiatan korporasi dan publik",
      "Layanan digital marketing & podcast kreatif"
    ],
    legal: {
        aktaPendirian: 'Akta No. 240, 29 September 2025 oleh Notaris Reno Rizaldi Nalaprana, S.H., M.Kn.',
        skKemenkumham: 'Nomor AHU-0084407.AH.01.01.TAHUN 2025 (01 Oktober 2025)',
        nib: '—',
        npwp: '1000 0000 0655 8696',
    },
    activityPhotoBg: 'url(/slideshow/borneo_f.jpg)', 
    commissionersPhotoBg: 'url(/AMN_Kom.jpeg)', 
    commissioners: [ 
        { name: "Nama Komisaris A AMN", photo: "/photos/placeholder_amn.jpg" }
    ]
  },
  // 5. Koperasi Jasa Syariah Bhumi Pasundan Sejahtera
  { 
    id: "bps", 
    name: "Koperasi Jasa Syariah Bhumi Pasundan Sejahtera", 
    tagline: "Pembiayaan & Koperasi Syariah", 
    logo: "/koperasi.png",
    description: "Koperasi Jasa Syariah Bhumi Pasundan Sejahtera berfokus pada layanan pembiayaan syariah yang adil, ringan, dan fleksibel. Melalui program mitra guna, pembiayaan haji & umroh, serta program CSR, koperasi ini mendukung pertumbuhan UMKM dan kesejahteraan anggota.",
    items: [
      "Program Mitra Guna berbasis syariah",
      "Pembiayaan haji & umroh",
    ],
    legal: {
        aktaPendirian: 'Akta No. 21, 10 Maret 2025 oleh Notaris BUDI PERASETIYONO, S.H.',
        skKemenkumham: 'Nomor AHU-0001719.AH.01.29.TAHUN 2025 (21 Maret 2025)',
        nib: '1905250093184',
        npwp: '10.000.000.0-204.3353',
    },
    activityPhotoBg: 'url(/umkmsingkawang.jpg)', 
    commissionersPhotoBg: 'url(/BPS_Kom.jpeg)', 
    commissioners: [ 
        { name: "Nama Komisaris A KJSBPS", photo: "/photos/placeholder_kjsbps.jpg" }
    ]
  },
  // 6. Foodmedia
  { 
    id: "fmedia", 
    name: "Foodmedia", 
    tagline: "Platform Online Food Delivery", 
    logo: "/foodmedia_logo.png", 
    description: "Foodmedia adalah aplikasi pesan makanan (online food delivery) yang menghubungkan restoran, driver, dan pelanggan dengan layanan cepat, mudah, dan terpercaya. Foodmedia menghadirkan kemudahan reservasi meja, layanan pesan-antar, hingga opsi pick up dengan harga transparan sesuai restoran, tanpa biaya tambahan.", 
    items: [
        "Reservasi Meja Langsung dari Aplikasi",
        "Pesan & Antar (Delivery) dengan Driver Foodmedia",
        "Layanan Pick Up (Ambil Sendiri di Restoran)",
        "Harga Transparan Sesuai Resto, Tanpa Biaya Tersembunyi",
        "Aplikasi Terintegrasi untuk Merchant, Driver, dan Tim Sales"
    ],
    activityPhotoBg: 'url(/slideshow/fdmedia.jpg)', 
    commissionersPhotoBg: 'url(/FOODMEDIA_Kom.jpeg)', 
    commissioners: [ 
        { name: "Nama Komisaris A Foodmedia", photo: "/photos/placeholder_foodmedia.jpg" }
    ]
    },
];