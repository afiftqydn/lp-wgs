// src/data/subsidiariesData.js

export const subsidiariesData = [
  // =========================================================
  // 1. PT. Win Global Solusitama (HOLDING / UTAMA)
  // =========================================================
  { 
    id: "wgs", 
    name: "PT. Win Global Solusitama", 
    tagline: "Sinergi Bisnis & Pemberdayaan Ekonomi", 
    logo: "/wgs_karousel.png", // Pastikan file ini ada
    description: "PT. Win Global Solusitama (WGS) membangun ekosistem bisnis terintegrasi yang berfokus pada pertumbuhan berkelanjutan dan pemberdayaan ekonomi kerakyatan berbasis syariah di setiap unit usahanya.", 
    items: [
      "Pembiayaan Umroh & Haji",
      "Pembiayaan UMKM",
      "Pembiayaan Perumahan",
      "Pembiayaan Pertanian",
      "Pembiayaan Pendidikan"
    ],
    // --- DATA SLIDER CAROUSEL (Diisi sesuai layanan WGS) ---
    products: [
        { 
            image: "/slideshow/gmbr3.jpg", // Gambar kegiatan/umum
            title: "Ekosistem Bisnis Terintegrasi" 
        },
        { 
            image: "/wgs_housing.jpg", // Siapkan gambar perumahan
            title: "Proyek Perumahan Subsidi & Komersil" 
        },
        { 
            image: "/wgs_travel.jpg", // Siapkan gambar travel/umroh
            title: "Layanan Travel Umroh & Haji" 
        }
    ],
    legal: {
        aktaPendirian: 'Akta No. 9, 07 Februari 2023 oleh Notaris Jihan Khoirini, S.H., M.Kn.',
        skKemenkumham: 'Nomor AHU-0010292.AH.01.01.Tahun 2023 (08 Februari 2023)',
        nib: '2111220112493',
        npwp: '61.815.042.9-017.000',
    },
    activityPhotoBg: 'url(/slideshow/gmbr3.jpg)', 
    commissionersPhotoBg: 'url(/WGS_Kom.jpeg)', 
    commissioners: [ 
        { name: "Nama Komisaris A WGS", photo: "/photos/placeholder_wgs.jpg" }
    ]
  },

  // =========================================================
  // 2. PT. Palm Nusa Khatulistiwa (DISTRIBUSI MINYAK GORENG)
  // =========================================================
  { 
    id: "pnk", 
    name: "PT. Palm Nusa Khatulistiwa", 
    tagline: "Solusi Minyak Goreng Higienis & Ramah Lingkungan", // [cite: 121, 122]
    logo: "/pnk.png",
    // Deskripsi dirangkum dari Slide 1 & 2 
    description: "PT. Palm Nusa Khatulistiwa adalah perusahaan distribusi minyak goreng yang mengusung konsep modern melalui sistem POMIGOR (POM Mini Minyak Goreng). Kami berkomitmen menyediakan minyak goreng berkualitas yang higienis dan terjangkau, serta mendukung kelestarian lingkungan dengan mengurangi penggunaan plastik sekali pakai.",
    items: [
      "Layanan Isi Ulang (Refill) POMIGOR Modern", // Slide 5 (Retail)
      "Distribusi Grosir untuk UMKM & Warung",     // Slide 5 (Grosir)
      "Suplai Minyak Goreng Skala Industri",       // Slide 5 (Industri)
      "Kemitraan Usaha & Franchise"                // Slide 5 [cite: 163]
    ],
    // --- DATA SLIDER CAROUSEL (Disesuaikan dengan Slide 5 & 6) ---
    products: [
        { 
            image: "/pomigor_machine.jpg", // Siapkan foto mesin POMIGOR (Slide 6)
            title: "Teknologi POMIGOR Higienis" 
        },
        { 
            image: "/retail_refill.jpg", // Siapkan foto proses isi ulang (Slide 5 Retail)
            title: "Layanan Isi Ulang Praktis" 
        },
        { 
            image: "/grosir_supply.jpg", // Siapkan foto jerigen/tangki (Slide 5 Industri)
            title: "Suplai Grosir & Industri" 
        }
    ],
    legal: {
        // Data legalitas dari input sebelumnya (karena di PPT hanya berupa header)
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

  // =========================================================
  // 3. PT. Agrikultur Global Khatulistiwa (PERTANIAN & PETERNAKAN)
  // =========================================================
  { 
    id: "agk", 
    name: "PT. Agrikultur Global Khatulistiwa", 
    // Tagline diambil dari slide 5
    tagline: "Membangun Masa Depan yang Berkelanjutan, Satu Panen pada Satu Waktu", 
    logo: "/agri_logo.png",
    // Deskripsi diambil dari slide 6 & 7
    description: "PT. Agrikultur Global Khatulistiwa adalah perusahaan agribisnis terpadu yang mencakup peternakan, perikanan, pertanian, dan perkebunan. Kami hadir mendukung ketahanan pangan nasional dengan menyediakan produk unggulan hasil budidaya ayam petelur, ikan, hingga komoditas pertanian berkualitas tinggi.",
    items: [
      "Peternakan Ayam Petelur (Layer) Terintegrasi", // Fokus utama di slide 49
      "Produksi Telur Ayam Berkualitas Tinggi",      // Slide 57
      "Budidaya Perikanan & Pertanian Berkelanjutan", // Slide 34, 36
      "Pengelolaan Kandang Modern (Open & Close House)" // Slide 84-87
    ],
    // --- DATA SLIDER CAROUSEL (Disesuaikan dengan konten PPT) ---
    products: [
        { 
            image: "/ayam_petelur.jpg", // Ganti dengan foto ayam dari slide 46/63
            title: "Budidaya Ayam Petelur" 
        },
        { 
            image: "/telur_segar.jpg", // Ganti dengan foto telur dari slide 45
            title: "Produksi Telur Segar" 
        },
        { 
            image: "/kandang_modern.jpg", // Ganti dengan foto kandang dari slide 81-87
            title: "Fasilitas Kandang" 
        }
    ],
    legal: {
        aktaPendirian: 'Akta No. 239, 29 September 2025 oleh Notaris Reno Rizaldi Nalaprana, S.H., M.Kn.',
        skKemenkumham: 'Nomor AHU-0084404.AH.01.01.TAHUN 2025 (01 Oktober 2025)',
        // nib: '—',
        npwp: '1000 0000 0652 8321',
    },
    activityPhotoBg: 'url(/agri.jpg)', 
    commissionersPhotoBg: 'url(/AGK_Kom.jpeg)', 
    commissioners: [ 
        { name: "Nama Komisaris A AGK", photo: "/photos/placeholder_agk.jpg" }
    ]
  },

  // =========================================================
  // 4. PT. Alfarizi Media Nusantara (MEDIA, EVENT & KREATIF)
  // =========================================================
  { 
    id: "amn", 
    name: "PT. Alfarizi Media Nusantara", 
    tagline: "Event Management, Advertising & Production", // Diambil dari Header Cover [cite: 106]
    logo: "/entertaint.png",
    // Deskripsi dirangkum dari Slide 2 (About Us) [cite: 111-112]
    description: "PT. Alfarizi Media Nusantara adalah perusahaan kreatif yang berspesialisasi dalam media entertainment dan produksi. Kami hadir sebagai mitra terdepan dalam menciptakan hiburan berkualitas tinggi, event organizer profesional, serta solusi branding dan digital kreatif yang inovatif.",
    items: [
      "Event Management & Music Promotor", // Slide 8 (WGS Mediatainment) [cite: 188]
      "Advertising & Media Placement (Billboard/Online)", // Slide 8 (WGS Advertising) [cite: 191]
      "Production House (TVC, Konten Digital)", // Slide 8 (Digimax Picture) [cite: 196]
      "Rental Studio (Podcast & Photography)", // Slide 8 (WGS Studios) [cite: 197]
      "Branding Identity & Digital Design" // Slide 3 [cite: 115]
    ],
    // --- DATA SLIDER CAROUSEL (Disesuaikan Portfolio Slide 7 & 9) ---
    products: [
        { 
            image: "/concert_event.jpg", // Ganti dengan foto konser dari Slide 7/9 [cite: 165]
            title: "Promotor Konser & Event" 
        },
        { 
            image: "/creative_studio.jpg", // Ganti dengan foto studio/branding Slide 3 [cite: 121]
            title: "Creative Studio & Production" 
        },
        { 
            image: "/food_media_app.jpg", // Ganti dengan foto aplikasi Food Media Slide 10 [cite: 202]
            title: "Pengembangan Platform Digital" 
        }
    ],
    legal: {
        // Data legalitas tetap menggunakan data sebelumnya (karena tidak tercantum di PDF)
        aktaPendirian: 'Akta No. 240, 29 September 2025 oleh Notaris Reno Rizaldi Nalaprana, S.H., M.Kn.',
        skKemenkumham: 'Nomor AHU-0084407.AH.01.01.TAHUN 2025 (01 Oktober 2025)',
        // nib: '—',
        npwp: '1000 0000 0655 8696',
    },
    activityPhotoBg: 'url(/slideshow/borneo_f.jpg)', 
    commissionersPhotoBg: 'url(/AMN_Kom.jpeg)', 
    commissioners: [ 
        // Diupdate sesuai Slide 5 
        { name: "Dhani Firdy (Director)", photo: "/photos/dhani_firdy.jpg" } 
    ]
  },

  // =========================================================
  // 5. Koperasi Jasa Syariah Bhumi Pasundan Sejahtera
  // =========================================================
  { 
    id: "bps", 
    name: "Koperasi Jasa Syariah Bhumi Pasundan Sejahtera", 
    tagline: "Pembiayaan & Koperasi Syariah", 
    logo: "/koperasi.png",
    description: "Berfokus pada layanan pembiayaan syariah yang adil. Melalui program mitra guna, pembiayaan haji & umroh, serta CSR untuk mendukung pertumbuhan UMKM.",
    items: [
      "Program Mitra Guna berbasis syariah",
      "Pembiayaan haji & umroh",
      "Pemberdayaan UMKM"
    ],
    // --- DATA SLIDER CAROUSEL ---
    products: [
        { 
            image: "/umkmsingkawang.jpg", // Gambar kegiatan koperasi
            title: "Pemberdayaan Anggota UMKM" 
        },
        { 
            image: "/slideshow/akad_syariah.jpg", // Siapkan gambar jabat tangan/akad
            title: "Akad & Pembiayaan Syariah" 
        },
        { 
            image: "/slideshow/gmbr2.jpg", // Siapkan gambar rapat anggota
            title: "Rapat Anggota & Gathering" 
        }
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

  // =========================================================
  // 6. EKLB (EKLB)
  // =========================================================
  { 
    id: "eklb", 
    name: "PT. Energi Komoditi Lintas Benua (EKLB)", 
    tagline: "Integrated Agricultural Commodity Solution", 
    logo: "/eklb_text.png", // Ambil dari Hal 1
    description: "Perusahaan yang bergerak di sektor industri komoditas hulu-hilir, mulai dari pabrikasi pupuk, pembinaan petani, hingga pengelolaan pascapanen dan bursa perdagangan internasional.",
    items: [
        "Pemberdayaan Koperasi Tani & Mentoring",
        "Integrasi Industri Hulu-Hilir Komoditas",
        "Ekspor Komoditas ke Pasar Global"
    ],
    // --- DATA SLIDER CAROUSEL ---
    products: [
        { 
            image: "/ppuk.jpg", // Referensi Hal 13 (GreenGrow/A-GRO)
            title: "Komoditas Utama" 
        },
        { 
            image: "/kop_tani.jpg", // Referensi Hal 12 (Peran Koperasi)
            title: "Sistem Koperasi Tani Terpadu" 
        },
        { 
            image: "/pabrikasi.jpeg", // Referensi Hal 11 (Proses Mentoring)
            title: "Pabrikasi Teknologi" 
        }
    ],
    legal: {
        aktaPendirian: 'Akta No. 18 Notaris Kokoh (24 April 2019)', 
        skKemenkumham: 'Tersedia',
        nib: 'Tersedia',
        npwp: 'Tersedia',
    },
    activityPhotoBg: 'url(/slideshow/gmbr5.jpg)', // Referensi Hal 4 (Peta Operasional)
    commissionersPhotoBg: 'url(/eklb_notext.png)', 
    commissioners: [ 
        { 
            name: "Dr. H. Hendra Firmansyah, S.E., M.M.", 
            role: "CEO & Founder",
            photo: "/photos/hendra_firmansyah.jpg" // Referensi Hal 2
        }
    ]
  },
];