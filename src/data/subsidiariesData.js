// src/data/subsidiariesData.js

export const subsidiariesData = [
  // =========================================================
  // 1. PT. Win Global Solusitama (HOLDING / UTAMA)
  // =========================================================
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
    products: [
        { 
            image: "/slideshow/gmbr3.jpg", 
            title: "Ekosistem Bisnis Terintegrasi" 
        },
        { 
            image: "/wgs_housing.jpg", 
            title: "Proyek Perumahan Subsidi & Komersil" 
        },
        { 
            image: "/wgs_travel.jpg", 
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
    commissionersPhotoBg: 'url(/AFG.jpeg)', 
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
    tagline: "Solusi Minyak Goreng Higienis & Ramah Lingkungan", 
    logo: "/pnk.png",
    description: "PT. Palm Nusa Khatulistiwa adalah perusahaan distribusi minyak goreng yang mengusung konsep modern melalui sistem POMIGOR (POM Mini Minyak Goreng). Kami berkomitmen menyediakan minyak goreng berkualitas yang higienis dan terjangkau, serta mendukung kelestarian lingkungan dengan mengurangi penggunaan plastik sekali pakai.",
    items: [
      "Layanan Isi Ulang (Refill) POMIGOR Modern",
      "Distribusi Grosir untuk UMKM & Warung",
      "Suplai Minyak Goreng Skala Industri",
      "Kemitraan Usaha & Franchise"
    ],
    products: [
        { 
            image: "/pomigor_machine.jpg", 
            title: "Teknologi POMIGOR Higienis" 
        },
        { 
            image: "/retail_refill.jpg", 
            title: "Layanan Isi Ulang Praktis" 
        },
        { 
            image: "/grosir_supply.jpg", 
            title: "Suplai Grosir & Industri" 
        }
    ],
    legal: {
        aktaPendirian: 'Akta No. 55, 12 Agustus 2025 oleh Notaris Reno Rizaldi Nalaprana, S.H., M.Kn.',
        skKemenkumham: 'Nomor AHU-0068269.AH.01.01.TAHUN 2025 (13 Agustus 2025)',
        nib: '2908250090444',
        npwp: '1000 0000 0499 4991',
    },
    activityPhotoBg: 'url(/pnkarmin.jpeg)', 
    commissionersPhotoBg: 'url(/AFG.jpeg)', 
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
    tagline: "Membangun Masa Depan yang Berkelanjutan, Satu Panen pada Satu Waktu", 
    logo: "/agri_logo.png",
    description: "PT. Agrikultur Global Khatulistiwa adalah perusahaan agribisnis terpadu yang mencakup peternakan, perikanan, pertanian, dan perkebunan. Kami hadir mendukung ketahanan pangan nasional dengan menyediakan produk unggulan hasil budidaya ayam petelur, ikan, hingga komoditas pertanian berkualitas tinggi.",
    items: [
      "Peternakan Ayam Petelur (Layer) Terintegrasi",
      "Produksi Telur Ayam Berkualitas Tinggi",
      "Budidaya Perikanan & Pertanian Berkelanjutan",
      "Pengelolaan Kandang Modern (Open & Close House)"
    ],
    products: [
        { 
            image: "/ayam_petelur.jpg", 
            title: "Budidaya Ayam Petelur" 
        },
        { 
            image: "/telur_segar.jpg", 
            title: "Produksi Telur Segar" 
        },
        { 
            image: "/kandang_modern.jpg", 
            title: "Fasilitas Kandang" 
        }
    ],
    legal: {
        aktaPendirian: 'Akta No. 239, 29 September 2025 oleh Notaris Reno Rizaldi Nalaprana, S.H., M.Kn.',
        skKemenkumham: 'Nomor AHU-0084404.AH.01.01.TAHUN 2025 (01 Oktober 2025)',
        npwp: '1000 0000 0652 8321',
    },
    activityPhotoBg: 'url(/agri.jpg)', 
    commissionersPhotoBg: 'url(/AFG.jpeg)', 
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
    tagline: "Event Management, Advertising & Production", 
    logo: "/entertaint.png",
    description: "PT. Alfarizi Media Nusantara adalah perusahaan kreatif yang berspesialisasi dalam media entertainment dan produksi. Kami hadir sebagai mitra terdepan dalam menciptakan hiburan berkualitas tinggi, event organizer profesional, serta solusi branding dan digital kreatif yang inovatif.",
    items: [
      "Event Management & Music Promotor",
      "Advertising & Media Placement (Billboard/Online)",
      "Production House (TVC, Konten Digital)",
      "Rental Studio (Podcast & Photography)",
      "Branding Identity & Digital Design"
    ],
    products: [
        { 
            image: "/concert_event.jpg", 
            title: "Promotor Konser & Event" 
        },
        { 
            image: "/creative_studio.jpg", 
            title: "Creative Studio & Production" 
        },
        { 
            image: "/food_media_app.jpg", 
            title: "Pengembangan Platform Digital" 
        }
    ],
    legal: {
        aktaPendirian: 'Akta No. 240, 29 September 2025 oleh Notaris Reno Rizaldi Nalaprana, S.H., M.Kn.',
        skKemenkumham: 'Nomor AHU-0084407.AH.01.01.TAHUN 2025 (01 Oktober 2025)',
        npwp: '1000 0000 0655 8696',
    },
    activityPhotoBg: 'url(/slideshow/borneo_f.jpg)', 
    commissionersPhotoBg: 'url(/AFG.jpeg)', 
    commissioners: [ 
        { name: "Dhani Firdy (Director)", photo: "/photos/dhani_firdy.jpg" } 
    ]
  },

  // =========================================================
  // 5. PT. Energi Komoditi Lintas Benua (EKLB)
  // =========================================================
  { 
    id: "eklb", 
    name: "PT. Energi Komoditi Lintas Benua (EKLB)", 
    tagline: "Integrated Agricultural Commodity Solution", 
    logo: "/eklb_text.png",
    description: "Perusahaan yang bergerak di sektor industri komoditas hulu-hilir, mulai dari pabrikasi pupuk, pembinaan petani, hingga pengelolaan pascapanen dan bursa perdagangan internasional.",
    items: [
        "Pemberdayaan Koperasi Tani & Mentoring",
        "Integrasi Industri Hulu-Hilir Komoditas",
        "Ekspor Komoditas ke Pasar Global"
    ],
    products: [
        { 
            image: "/ppuk.jpg", 
            title: "Komoditas Utama" 
        },
        { 
            image: "/kop_tani.jpg", 
            title: "Sistem Koperasi Tani Terpadu" 
        },
        { 
            image: "/pabrikasi.jpeg", 
            title: "Pabrikasi Teknologi" 
        }
    ],
    legal: {
        aktaPendirian: 'Akta No. 18 Notaris Kokoh (24 April 2019)', 
        skKemenkumham: 'Tersedia',
        nib: 'Tersedia',
        npwp: 'Tersedia',
    },
    activityPhotoBg: 'url(/kmdi.jpg)', 
    commissionersPhotoBg: 'url(/AFG.jpeg)', 
    commissioners: [ 
        { 
            name: "Dr. H. Hendra Firmansyah, S.E., M.M.", 
            role: "CEO & Founder",
            photo: "/photos/hendra_firmansyah.jpg"
        }
    ]
  },

  // =========================================================
  // 6. PT. Energi Komoditi Internasional (EKI)
  // =========================================================
  { 
    id: "eki", 
    name: "PT. Energi Komoditi Internasional (EKI)", 
    tagline: "Global Trading & Energy Commodity Solutions", 
    logo: "/eki_logo.png",
    description: "PT. Energi Komoditi Internasional (EKI) berfokus pada perdagangan komoditas energi di pasar internasional. Kami menjembatani sumber daya energi lokal dengan permintaan global melalui manajemen rantai pasok yang efisien dan kemitraan strategis lintas negara.", 
    items: [
      "Perdagangan Komoditas Energi Internasional",
      "Manajemen Rantai Pasok (Supply Chain) Global",
      "Kemitraan Strategis Ekspor-Impor",
      "Konsultasi Investasi Sektor Energi"
    ],
    legal: {
        aktaPendirian: 'Tersedia', 
        skKemenkumham: 'Tersedia',
        nib: 'Tersedia',
        npwp: 'Tersedia',
    },
    activityPhotoBg: 'url(/eki_bg.png)', 
    commissionersPhotoBg: 'url(/AFG.jpeg)', 
    commissioners: [ 
        { 
            name: "Nama Komisaris EKI", 
            role: "Board of Directors",
            photo: "/photos/placeholder_eki.jpg" 
        }
    ]
  },

  // =========================================================
  // 7. PT. Energi Komoditi Indonesia (EK Indo)
  // =========================================================
  { 
    id: "ek_indo", 
    name: "PT. Energi Komoditi Indonesia", 
    tagline: "National Trading & Energy Commodity Solutions", 
    logo: "/EKIndonesia_2.png",
    description: "PT. Energi Komoditi Indonesia berfokus pada perdagangan komoditas energi di pasar nasional. Kami mendistribusikan sumber daya energi lokal untuk memenuhi kebutuhan domestik melalui manajemen rantai pasok yang efisien dan kemitraan strategis di seluruh penjuru Nusantara.", 
    items: [
      "Perdagangan Komoditas Energi Nasional",
      "Manajemen Rantai Pasok (Supply Chain) Domestik",
      "Distribusi Energi Terpadu Antar Pulau",
      "Kemitraan Strategis Sektor Energi Domestik"
    ],
    legal: {
        aktaPendirian: 'Tersedia', 
        skKemenkumham: 'Tersedia',
        nib: 'Tersedia',
        npwp: 'Tersedia',
    },
    activityPhotoBg: 'url(/ekindo.jfif)', // Silakan sesuaikan jika ada background khusus
    commissionersPhotoBg: 'url(/AFG.jpeg)', 
    commissioners: [ 
        { 
            name: "Nama Komisaris EK Indonesia", 
            role: "Board of Directors",
            photo: "/photos/placeholder_ek_indo.jpg" 
        }
    ]
  },

  // =========================================================
  // 8. PT. Khatulistiwa Konstruksi Indonesia (KKI)
  // =========================================================
  { 
    id: "kki", 
    name: "PT. Khatulistiwa Konstruksi Indonesia", 
    tagline: "Solusi Konstruksi & Infrastruktur Terpercaya", 
    logo: "/KKI.png", 
    description: "PT. Khatulistiwa Konstruksi Indonesia bergerak di bidang konstruksi dan pengembangan infrastruktur dengan komitmen pada kualitas, keselamatan, dan ketepatan waktu.", 
    items: [
      "Konstruksi Bangunan Komersial & Residensial",
      "Pengembangan Infrastruktur",
      "Manajemen Proyek Konstruksi"
    ],
    legal: {
        aktaPendirian: 'Tersedia', 
        skKemenkumham: 'Tersedia',
        nib: 'Tersedia',
        npwp: 'Tersedia',
    },
    activityPhotoBg: 'url(/kntrksi.png)', 
    commissionersPhotoBg: 'url(/AFG.jpeg)', 
    commissioners: [ 
        { 
            name: "Nama Komisaris KKI", 
            role: "Board of Directors",
            photo: "/photos/placeholder_kki.jpg" 
        }
    ]
  },

  // =========================================================
  // 9. PT. Alfa Abadi Nusantara (AAN)
  // =========================================================
  { 
    id: "aan", 
    name: "PT. Alfa Abadi Nusantara", 
    tagline: "Penyedia Layanan Outsourcing & SDM Profesional", 
    logo: "/AAN.png", 
    description: "PT. Alfa Abadi Nusantara adalah perusahaan penyedia layanan tenaga kerja (outsourcing) terpadu. Kami berkomitmen untuk menyalurkan sumber daya manusia yang terampil, terlatih, dan profesional guna mendukung efisiensi operasional bisnis mitra kami di berbagai sektor.", 
    items: [
      "Penyediaan Tenaga Ahli Profesional",
      "Manajemen Kebersihan Fasilitas",
      "Dukungan Administrasi & Operasional"
    ],
    legal: {
        aktaPendirian: 'Tersedia', 
        skKemenkumham: 'Tersedia',
        nib: 'Tersedia',
        npwp: 'Tersedia',
    },
    activityPhotoBg: 'url(/os.png)', 
    commissionersPhotoBg: 'url(/AFG.jpeg)', 
    commissioners: [ 
        { 
            name: "Nama Komisaris AAN", 
            role: "Board of Directors",
            photo: "/photos/placeholder_aan.jpg" 
        }
    ]
  },

  // =========================================================
  // 10. PT. Borneo Nusantara Indonesia (BNI)
  // =========================================================
  { 
    id: "bni", 
    name: "PT. Borneo Nusantara Indonesia", 
    tagline: "Solusi Logistik & Ekspedisi Terpercaya", 
    logo: "/BNI.png", 
    description: "PT. Borneo Nusantara Indonesia bergerak di bidang layanan ekspedisi dan logistik. Kami menyediakan solusi pengiriman barang yang cepat, aman, dan efisien dengan jangkauan luas untuk memenuhi kebutuhan distribusi komoditas dan barang ke seluruh penjuru Nusantara.", 
    items: [
      "Layanan Pengiriman Kargo & Ekspedisi Terpadu",
      "Manajemen Logistik & Rantai Pasok (Supply Chain)",
      "Distribusi Darat, Laut, dan Udara Skala Nasional"
    ],
    legal: {
        aktaPendirian: 'Tersedia', 
        skKemenkumham: 'Tersedia',
        nib: 'Tersedia',
        npwp: 'Tersedia',
    },
    activityPhotoBg: 'url(/armd.jpg)', 
    commissionersPhotoBg: 'url(/AFG.jpeg)', 
    commissioners: [ 
        { 
            name: "Nama Komisaris BNI", 
            role: "Board of Directors",
            photo: "/photos/placeholder_bni.jpg" 
        }
    ]
  },

  // =========================================================
  // 11. Koperasi Jasa Syariah Bhumi Pasundan Sejahtera
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
    products: [
        { 
            image: "/umkmsingkawang.jpg", 
            title: "Pemberdayaan Anggota UMKM" 
        },
        { 
            image: "/slideshow/akad_syariah.jpg", 
            title: "Akad & Pembiayaan Syariah" 
        },
        { 
            image: "/slideshow/gmbr2.jpg", 
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
    commissionersPhotoBg: 'url(/AFG.jpeg)', 
    commissioners: [ 
        { name: "Nama Komisaris A KJSBPS", photo: "/photos/placeholder_kjsbps.jpg" }
    ]
  }
];