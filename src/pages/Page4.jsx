import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

/* ===== ANIMATION ===== */
export const FadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
      duration: 0.6,
      delay,
    },
  },
});

const Page4 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalStep, setModalStep] = useState(1);

  // State form lengkap (satuan_waktu dipatenkan "Bulan")
  const [formData, setFormData] = useState({
    id_nasabah: "Diisi oleh CS",
    nama_lengkap: "",
    alamat_tempat_tinggal: "",
    kode_pos: "",
    nomor_telepon: "",
    handphone: "",
    jenis_kelamin: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    jenis_identitas: "",
    nomor_identitas: "",
    pekerjaan: "",
    perusahaan: "",
    bidang_usaha: "",
    alamat_usaha: "",
    kode_pos_usaha: "",
    nama_pasangan: "",
    jumlah_pembiayaan: "",
    jumlah_pembiayaan_terbilang: "",
    kegunaan: [],
    obyek_pembiayaan: "",
    jenis_pembiayaan: "",
    jangka_waktu: "",
    satuan_waktu: "Bulan",
    sistem_pembayaran: "",
    sumber_dana_lain: "",
    sumber_dana_keterangan: "",
    sisa_waktu_angsuran: "",
    jumlah_angsuran: "",
    jenis_jaminan: "",
    dokumen_jaminan: "",
    nomor_dokumen_jaminan: "",
    lokasi_jaminan: "",
    nilai_jaminan: "",
    nilai_jaminan_terbilang: "",
    nama_pemilik_jaminan: "",
  });

  // Ganti dengan URL Google Apps Script kamu
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyoCLkO6KtxoirlVr7Qksf-ldQUiXpRbWyONrNFEMBZCVi2JUaxK_f6cBxURqaQY0iwtg/exec";

  // ===== HANDLER INPUT & VALIDASI ANGKA =====
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const numericFields = [
      "kode_pos", "kode_pos_usaha", "nomor_telepon", "handphone",
      "jumlah_pembiayaan", "jangka_waktu", "sisa_waktu_angsuran",
      "jumlah_angsuran", "nilai_jaminan"
    ];

    if (numericFields.includes(name)) {
      const numericValue = value.replace(/\D/g, "");
      if ((name === "kode_pos" || name === "kode_pos_usaha") && numericValue.length > 5) return;
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      if (checked) {
        return { ...prev, kegunaan: [...prev.kegunaan, value] };
      } else {
        return { ...prev, kegunaan: prev.kegunaan.filter((item) => item !== value) };
      }
    });
  };

  // ===== LOGIKA WAJIB ISI SEMUA (STRICT VALIDATION) =====
  const handleNextStep = (step) => {
    if (step === 1) {
      const requiredStep1 = [
        "nama_lengkap", "alamat_tempat_tinggal", "kode_pos", "nomor_telepon", 
        "handphone", "jenis_kelamin", "tempat_lahir", "tanggal_lahir", 
        "jenis_identitas", "nomor_identitas", "pekerjaan", "perusahaan", 
        "bidang_usaha", "alamat_usaha", "kode_pos_usaha", "nama_pasangan"
      ];
      const hasEmpty = requiredStep1.some((field) => !formData[field]);
      
      if (hasEmpty) return alert("Harap isi SEMUA kolom Data Pemohon. (Isi '-' jika tidak ada / belum menikah).");
      if (formData.handphone.length < 10) return alert("Nomor Handphone WA minimal 10 angka.");
    }
    
    if (step === 2) {
      const requiredStep2 = [
        "jumlah_pembiayaan", "jumlah_pembiayaan_terbilang", "obyek_pembiayaan", 
        "jenis_pembiayaan", "sistem_pembayaran", "jangka_waktu"
      ];
      const hasEmpty = requiredStep2.some((field) => !formData[field]);

      if (hasEmpty || formData.kegunaan.length === 0) {
        return alert("Harap isi SEMUA kolom Data Pembiayaan dan pilih minimal 1 Kegunaan.");
      }
    }

    if (step === 3) {
      const requiredStep3 = ["sumber_dana_lain", "sumber_dana_keterangan", "jumlah_angsuran", "sisa_waktu_angsuran"];
      const hasEmpty = requiredStep3.some((field) => !formData[field]);

      if (hasEmpty) {
        return alert("Harap isi SEMUA kolom Pihak Lain. (Pilih 'Tidak Ada' dan isi '0' atau '-' jika tidak punya).");
      }
    }

    setModalStep(step + 1);
  };

  const handlePrevStep = (step) => {
    setModalStep(step - 1);
  };

  // ===== HANDLER SUBMIT & FORMATTING KE SPREADSHEET =====
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi final Step 4
    const requiredStep4 = [
      "jenis_jaminan", "nama_pemilik_jaminan", "dokumen_jaminan", 
      "nomor_dokumen_jaminan", "lokasi_jaminan", "nilai_jaminan", "nilai_jaminan_terbilang"
    ];
    const hasEmpty = requiredStep4.some((field) => !formData[field]);

    if (hasEmpty) {
      return alert("Harap isi SEMUA kolom Data Jaminan sebelum mengirim. (Isi '-' atau '0' jika tidak relevan).");
    }

    setIsLoading(true);

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      let val = formData[key];
      if (key === "kegunaan") val = val.join(", ");
      
      // Trik Google Sheets: Tambahkan kutip tunggal agar angka tak berubah jadi rumus
      if (key === "handphone" || key === "nomor_telepon" || key === "nomor_identitas") {
        val = val ? `'${val}` : "";
      }
      data.append(key, val);
    });

    fetch(SCRIPT_URL, { method: "POST", body: data })
      .then((response) => response.json())
      .then((result) => {
        setIsLoading(false);
        if (result.result === "success") {
            setModalStep(5);
        } else {
            alert("Terjadi kesalahan di server spreadsheet. Silakan coba lagi.");
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error.message);
        alert("Terjadi kesalahan jaringan. Silakan pastikan koneksi internet Anda stabil.");
        setIsLoading(false);
      });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setModalStep(1);
      setFormData((prev) => Object.keys(prev).reduce((acc, key) => {
        // Jangan reset id_nasabah dan satuan_waktu
        acc[key] = key === "kegunaan" ? [] : 
                   key === "id_nasabah" ? "Diisi oleh CS" : 
                   key === "satuan_waktu" ? "Bulan" : "";
        return acc;
      }, {}));
    }, 300);
  };

  return (
    <section className="bg-[url('/src/assets/navbar-bg.svg')] bg-cover bg-fixed bg-center min-h-screen flex flex-col text-white">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative min-h-[80vh] pt-32 md:pt-40 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none" />
        <motion.div variants={FadeUp(0.2)} initial="initial" animate="animate" className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Konsultasi & Pembiayaan
            <span className="block text-lime-400 mt-2 drop-shadow-lg">Syariah yang Amanah</span>
          </h1>
          <p className="mt-8 text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
            Kami hadir untuk membantu kebutuhan usaha dan ibadah Anda dengan proses yang <span className="font-semibold text-white">cepat</span>, <span className="font-semibold text-white">transparan</span>, dan <span className="font-semibold text-white">sesuai prinsip syariah</span>.
          </p>
          <motion.div variants={FadeUp(0.4)} className="flex flex-wrap justify-center gap-4 mt-10 text-sm md:text-base font-medium">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 shadow-xl"><span className="text-lime-300">⚡</span> Proses Cepat</div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 shadow-xl"><span className="text-lime-300">🕌</span> Sesuai Syariah</div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 shadow-xl"><span className="text-lime-300">📞</span> Konsultasi Gratis</div>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= CONTENT & CTA ================= */}
      <main className="container mx-auto px-4 pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          <motion.div variants={FadeUp(0.3)} initial="initial" whileInView="animate" viewport={{ once: true }} className="bg-[#cae4c3] rounded-3xl p-8 shadow-xl transition duration-300 text-gray-900">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3"><span>💡</span> Pertanyaan Umum</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-900/10 pb-5 group">
                <h3 className="font-semibold text-xl group-hover:text-green-700 transition">Produk apa saja yang tersedia?</h3>
                <p className="text-gray-700 mt-2 text-base leading-relaxed">Pembiayaan Modal Usaha, Haji & Umroh, serta Multiguna berbasis syariah.</p>
              </div>
              <div className="border-b border-gray-900/10 pb-5 group">
                <h3 className="font-semibold text-xl group-hover:text-green-700 transition">Apa syarat pengajuan?</h3>
                <p className="text-gray-700 mt-2 text-base leading-relaxed">Cukup melampirkan KTP, KK, dan pendaftaran anggota koperasi (Rp 200.000).</p>
              </div>
              <div className="group">
                <h3 className="font-semibold text-xl group-hover:text-green-700 transition">Siapa saja yang bisa mengajukan?</h3>
                <p className="text-gray-700 mt-2 text-base leading-relaxed">ASN, karyawan swasta, pelaku UMKM, dan masyarakat umum yang memenuhi kriteria.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={FadeUp(0.4)} initial="initial" whileInView="animate" viewport={{ once: true }} className="bg-[#cae4c3] rounded-3xl p-8 flex flex-col shadow-xl text-gray-900">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3"><span>🏢</span> Kantor Pusat</h2>
            <div className="space-y-4 text-gray-700 text-base mb-8 flex-grow font-medium">
              <p className="flex items-start gap-3"><span className="text-green-700 text-xl">📍</span> <span>Jl. Panglima Aim No. 74, Pontianak Timur, Kalimantan Barat</span></p>
              <p className="flex items-center gap-3"><span className="text-green-700 text-xl">📞</span> <span>+62 851-9552-2202</span></p>
              <p className="flex items-center gap-3"><span className="text-green-700 text-xl">✉️</span> <span className="break-all">ptfirmansyahkhatulistiwagroup@gmail.com</span></p>
            </div>
            <div className="h-[250px] rounded-2xl overflow-hidden border border-gray-900/10 shadow-lg">
              <iframe src="https://maps.google.com/maps?q=Jl.+Panglima+Aim+No.+74,+Pontianak+Timur&t=&z=15&ie=UTF8&iwloc=&output=embed" className="w-full h-full grayscale hover:grayscale-0 transition duration-500" loading="lazy" title="Lokasi Kantor" />
            </div>
          </motion.div>
        </div>

        <motion.div variants={FadeUp(0.5)} initial="initial" whileInView="animate" viewport={{ once: true }} className="relative bg-gradient-to-br from-lime-200 to-[#cae4c3] rounded-[2.5rem] p-12 md:p-16 text-center shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 relative z-10">Mulai Langkah Nyata Anda Hari Ini</h2>
          <p className="text-gray-800 mt-4 max-w-2xl mx-auto font-medium text-lg relative z-10">Konsultasikan kebutuhan pembiayaan Anda bersama tim kami. <br/> Insyaallah prosesnya mudah, aman, dan berkah.</p>
          <button onClick={() => setIsModalOpen(true)} className="relative z-10 mt-10 px-10 py-4 bg-gray-900 text-lime-400 rounded-full font-bold text-lg hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
            Isi Formulir Pendaftaran
          </button>
        </motion.div>
      </main>

      <Footer />

      {/* ================= MODAL FULL FORM ================= */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center px-4 py-8">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={handleCloseModal} className="absolute inset-0 bg-black/80 backdrop-blur-md" />

            <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} className="relative bg-[#1a1a1a]/95 backdrop-blur-xl border border-lime-400/30 rounded-3xl p-6 md:p-10 w-full max-w-4xl shadow-2xl overflow-y-auto max-h-[90vh] custom-scrollbar">
              <button onClick={handleCloseModal} className="absolute top-5 right-5 text-gray-400 hover:text-white transition text-2xl">✕</button>

              <div className="flex gap-2 mb-8 mt-2">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className={`h-2 flex-1 rounded-full transition-colors duration-500 ${modalStep >= step ? 'bg-lime-400' : 'bg-white/10'}`}></div>
                ))}
              </div>

              {/* ===== STEP 1: DATA PEMOHON ===== */}
              {modalStep === 1 && (
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                  <h3 className="text-2xl font-bold text-lime-400 mb-2">Data Pemohon (1/4)</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">ID Nasabah</label>
                      <input name="id_nasabah" value={formData.id_nasabah} readOnly className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-gray-500 cursor-not-allowed outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Nama Lengkap <span className="text-red-400">*</span></label>
                      <input name="nama_lengkap" value={formData.nama_lengkap} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:ring-2 focus:ring-lime-400 outline-none" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-300 mb-1">Alamat Tempat Tinggal <span className="text-red-400">*</span></label>
                      <textarea name="alamat_tempat_tinggal" rows="2" value={formData.alamat_tempat_tinggal} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:ring-2 focus:ring-lime-400 outline-none resize-none"></textarea>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Kode Pos <span className="text-red-400">*</span></label>
                        <input name="kode_pos" inputMode="numeric" value={formData.kode_pos} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:ring-2 focus:ring-lime-400 outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Jenis Kelamin <span className="text-red-400">*</span></label>
                        <select name="jenis_kelamin" value={formData.jenis_kelamin} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:ring-2 focus:ring-lime-400 outline-none [&>option]:bg-[#1a1a1a]">
                            <option value="">Pilih</option>
                            <option value="Laki-laki">Laki-laki</option>
                            <option value="Perempuan">Perempuan</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">No. Telepon <span className="text-red-400">*</span></label>
                            <input name="nomor_telepon" inputMode="numeric" placeholder="Isi '0' jika tidak ada" value={formData.nomor_telepon} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:ring-2 focus:ring-lime-400 outline-none placeholder:text-gray-600" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">Handphone (WA) <span className="text-red-400">*</span></label>
                            <input name="handphone" inputMode="numeric" value={formData.handphone} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:ring-2 focus:ring-lime-400 outline-none" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">Tempat Lahir <span className="text-red-400">*</span></label>
                            <input name="tempat_lahir" value={formData.tempat_lahir} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:ring-2 focus:ring-lime-400 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">Tanggal Lahir <span className="text-red-400">*</span></label>
                            <input type="date" name="tanggal_lahir" value={formData.tanggal_lahir} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:ring-2 focus:ring-lime-400 outline-none" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">Jenis Identitas <span className="text-red-400">*</span></label>
                            <select name="jenis_identitas" value={formData.jenis_identitas} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:ring-2 focus:ring-lime-400 outline-none [&>option]:bg-[#1a1a1a]">
                                <option value="">Pilih</option>
                                <option value="KTP">KTP</option>
                                <option value="SIM">SIM</option>
                                <option value="Paspor">Paspor</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">Nomor Identitas <span className="text-red-400">*</span></label>
                            <input name="nomor_identitas" inputMode="numeric" value={formData.nomor_identitas} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:ring-2 focus:ring-lime-400 outline-none" />
                        </div>
                    </div>

                    <div className="md:col-span-2 mt-4 border-t border-white/10 pt-4">
                        <h4 className="font-semibold text-lime-300 mb-3">Pekerjaan & Usaha</h4>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Pekerjaan <span className="text-red-400">*</span></label>
                      <input name="pekerjaan" value={formData.pekerjaan} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:ring-2 focus:ring-lime-400 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Perusahaan <span className="text-red-400">*</span></label>
                      <input name="perusahaan" placeholder="Isi '-' jika tidak ada" value={formData.perusahaan} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:ring-2 focus:ring-lime-400 outline-none placeholder:text-gray-600" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Bidang Usaha <span className="text-red-400">*</span></label>
                      <input name="bidang_usaha" placeholder="Isi '-' jika tidak ada" value={formData.bidang_usaha} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:ring-2 focus:ring-lime-400 outline-none placeholder:text-gray-600" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Nama Pasangan <span className="text-red-400">*</span></label>
                      <input name="nama_pasangan" placeholder="Isi '-' jika belum menikah" value={formData.nama_pasangan} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:ring-2 focus:ring-lime-400 outline-none placeholder:text-gray-600" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-300 mb-1">Alamat Usaha <span className="text-red-400">*</span></label>
                      <textarea name="alamat_usaha" rows="2" placeholder="Isi '-' jika tidak ada" value={formData.alamat_usaha} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:ring-2 focus:ring-lime-400 outline-none resize-none placeholder:text-gray-600"></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Kode Pos Usaha <span className="text-red-400">*</span></label>
                      <input name="kode_pos_usaha" inputMode="numeric" placeholder="Isi '0' jika tidak ada" value={formData.kode_pos_usaha} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:ring-2 focus:ring-lime-400 outline-none placeholder:text-gray-600" />
                    </div>
                  </div>

                  <button onClick={() => handleNextStep(1)} className="w-full bg-lime-400 hover:bg-lime-500 text-black font-extrabold py-4 rounded-xl mt-8 transition-all">Lanjut</button>
                </motion.div>
              )}

              {/* ===== STEP 2: DATA PEMBIAYAAN ===== */}
              {modalStep === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <h3 className="text-2xl font-bold text-lime-400 mb-2">Data Pembiayaan (2/4)</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Jumlah Pembiayaan <span className="text-red-400">*</span></label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">Rp</span>
                        <input name="jumlah_pembiayaan" inputMode="numeric" value={formData.jumlah_pembiayaan} onChange={handleInputChange} className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:ring-2 focus:ring-lime-400 outline-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Terbilang (Teks) <span className="text-red-400">*</span></label>
                      <input name="jumlah_pembiayaan_terbilang" value={formData.jumlah_pembiayaan_terbilang} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:ring-2 focus:ring-lime-400 outline-none" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-300 mb-2">Kegunaan <span className="text-red-400">*</span></label>
                      <div className="flex flex-wrap gap-4">
                        {["Modal Kerja", "Investasi", "Konsumtif", "Umrah/Haji"].map((item) => (
                          <label key={item} className="flex items-center gap-2 cursor-pointer bg-white/5 px-4 py-2 rounded-lg hover:bg-white/10 transition border border-white/10">
                            <input type="checkbox" name="kegunaan" value={item} checked={formData.kegunaan.includes(item)} onChange={handleCheckboxChange} className="accent-lime-400" />
                            <span className="text-sm">{item}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-300 mb-1">Obyek Pembiayaan <span className="text-red-400">*</span></label>
                      <textarea name="obyek_pembiayaan" rows="2" value={formData.obyek_pembiayaan} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:ring-2 focus:ring-lime-400 outline-none resize-none"></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Jenis Pembiayaan <span className="text-red-400">*</span></label>
                      <select name="jenis_pembiayaan" value={formData.jenis_pembiayaan} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:ring-2 focus:ring-lime-400 outline-none [&>option]:bg-[#1a1a1a]">
                        <option value="">Pilih</option>
                        <option value="Murabahah">Murabahah</option>
                        <option value="Ijarah">Ijarah</option>
                        <option value="Mudharabah">Mudharabah</option>
                        <option value="Musyarakah">Musyarakah</option>
                        <option value="Al Qardh">Al Qardh</option>
                        <option value="Qardhul Hasan">Qardhul Hasan</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Sistem Pembayaran <span className="text-red-400">*</span></label>
                      <select name="sistem_pembayaran" value={formData.sistem_pembayaran} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:ring-2 focus:ring-lime-400 outline-none [&>option]:bg-[#1a1a1a]">
                        <option value="">Pilih</option>
                        <option value="Tunai">Tunai</option>
                        <option value="Harian">Harian</option>
                        <option value="Mingguan">Mingguan</option>
                        <option value="Bulanan">Bulanan</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-300 mb-1">Jangka Waktu <span className="text-red-400">*</span></label>
                        <div className="relative">
                          <input name="jangka_waktu" inputMode="numeric" value={formData.jangka_waktu} onChange={handleInputChange} className="w-full pl-4 pr-16 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:ring-2 focus:ring-lime-400 outline-none" />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">Bulan</span>
                        </div>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-8">
                    <button onClick={() => handlePrevStep(2)} className="w-1/3 bg-transparent border border-white/20 text-white hover:bg-white/10 font-bold py-4 rounded-xl transition-all">Kembali</button>
                    <button onClick={() => handleNextStep(2)} className="w-2/3 bg-lime-400 hover:bg-lime-500 text-black font-extrabold py-4 rounded-xl transition-all">Lanjut</button>
                  </div>
                </motion.div>
              )}

              {/* ===== STEP 3: PIHAK LAIN ===== */}
              {modalStep === 3 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <h3 className="text-2xl font-bold text-lime-400 mb-2">Pembiayaan Pihak Lain (3/4)</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Sumber Dana Lain <span className="text-red-400">*</span></label>
                      <select name="sumber_dana_lain" value={formData.sumber_dana_lain} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:ring-2 focus:ring-lime-400 outline-none [&>option]:bg-[#1a1a1a]">
                        <option value="">Pilih</option>
                        <option value="Tidak Ada">Tidak Ada</option>
                        <option value="BMT/Koperasi">BMT/Koperasi</option>
                        <option value="Bank">Bank</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Keterangan Sumber <span className="text-red-400">*</span></label>
                      <input name="sumber_dana_keterangan" placeholder="Isi '-' jika tidak ada" value={formData.sumber_dana_keterangan} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:ring-2 focus:ring-lime-400 outline-none placeholder:text-gray-600" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Jumlah Angsuran <span className="text-red-400">*</span></label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">Rp</span>
                        <input name="jumlah_angsuran" inputMode="numeric" placeholder="Isi '0' jika tidak ada" value={formData.jumlah_angsuran} onChange={handleInputChange} className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:ring-2 focus:ring-lime-400 outline-none placeholder:text-gray-600" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Sisa Waktu Angsuran <span className="text-red-400">*</span></label>
                      <div className="relative">
                        <input name="sisa_waktu_angsuran" inputMode="numeric" placeholder="Isi '0' jika tidak ada" value={formData.sisa_waktu_angsuran} onChange={handleInputChange} className="w-full pl-4 pr-16 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:ring-2 focus:ring-lime-400 outline-none placeholder:text-gray-600" />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">Bulan</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-8">
                    <button onClick={() => handlePrevStep(3)} className="w-1/3 bg-transparent border border-white/20 text-white hover:bg-white/10 font-bold py-4 rounded-xl transition-all">Kembali</button>
                    <button onClick={() => handleNextStep(3)} className="w-2/3 bg-lime-400 hover:bg-lime-500 text-black font-extrabold py-4 rounded-xl transition-all">Lanjut</button>
                  </div>
                </motion.div>
              )}

              {/* ===== STEP 4: DATA JAMINAN ===== */}
              {modalStep === 4 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <h3 className="text-2xl font-bold text-lime-400 mb-2">Data Jaminan (4/4)</h3>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Jenis Jaminan <span className="text-red-400">*</span></label>
                        <select name="jenis_jaminan" value={formData.jenis_jaminan} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:ring-2 focus:ring-lime-400 outline-none [&>option]:bg-[#1a1a1a]">
                          <option value="">Pilih</option>
                          <option value="Tanah/Bangunan">Tanah/Bangunan</option>
                          <option value="Kios/Toko">Kios/Toko</option>
                          <option value="Kendaraan">Kendaraan</option>
                          <option value="Lainnya">Lainnya</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Nama Pemilik Jaminan <span className="text-red-400">*</span></label>
                        <input name="nama_pemilik_jaminan" placeholder="Isi '-' jika tidak ada" value={formData.nama_pemilik_jaminan} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:ring-2 focus:ring-lime-400 outline-none placeholder:text-gray-600" />
                      </div>
                      <div className="grid grid-cols-2 gap-3 md:col-span-2">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">Dokumen Jaminan <span className="text-red-400">*</span></label>
                            <input name="dokumen_jaminan" placeholder="Isi '-' jika tidak ada" value={formData.dokumen_jaminan} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:ring-2 focus:ring-lime-400 outline-none placeholder:text-gray-600" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">Nomor Dokumen <span className="text-red-400">*</span></label>
                            <input name="nomor_dokumen_jaminan" placeholder="Isi '-' jika tidak ada" value={formData.nomor_dokumen_jaminan} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:ring-2 focus:ring-lime-400 outline-none placeholder:text-gray-600" />
                          </div>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-300 mb-1">Lokasi Jaminan <span className="text-red-400">*</span></label>
                        <textarea name="lokasi_jaminan" rows="2" placeholder="Isi '-' jika tidak ada" value={formData.lokasi_jaminan} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:ring-2 focus:ring-lime-400 outline-none resize-none placeholder:text-gray-600"></textarea>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Nilai Jaminan <span className="text-red-400">*</span></label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">Rp</span>
                          <input name="nilai_jaminan" inputMode="numeric" placeholder="Isi '0' jika tidak ada" value={formData.nilai_jaminan} onChange={handleInputChange} className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:ring-2 focus:ring-lime-400 outline-none placeholder:text-gray-600" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Terbilang (Teks) <span className="text-red-400">*</span></label>
                        <input name="nilai_jaminan_terbilang" placeholder="Isi '-' jika tidak ada" value={formData.nilai_jaminan_terbilang} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:ring-2 focus:ring-lime-400 outline-none placeholder:text-gray-600" />
                      </div>
                    </div>

                    <div className="flex gap-3 mt-8">
                      <button type="button" onClick={() => handlePrevStep(4)} className="w-1/3 bg-transparent border border-white/20 text-white hover:bg-white/10 font-bold py-4 rounded-xl transition-all">Kembali</button>
                      <button type="submit" disabled={isLoading} className="w-2/3 bg-lime-400 hover:bg-lime-500 text-black font-extrabold py-4 rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed">
                        {isLoading ? "Mengirim..." : "Kirim Pengajuan"}
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* ===== STEP 5: SUCCESS ===== */}
              {modalStep === 5 && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                  <div className="w-16 h-16 bg-lime-400/20 text-lime-400 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">✓</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Data Berhasil Terkirim!</h3>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5 mt-6 text-left">
                    <p className="text-lime-300 font-semibold mb-3">Tata Cara Selanjutnya:</p>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300">
                      <li>Tim kami akan segera memproses data pengajuan Anda.</li>
                      <li><span className="text-white">Unduh Formulir</span> melalui tombol di bawah jika dibutuhkan pengesahan fisik.</li>
                      <li>Kirimkan file scan ke email: <br/><span className="text-lime-300 font-medium mt-1 inline-block">ptfirmansyahkhatulistiwagroup@gmail.com</span></li>
                    </ol>
                  </div>
                  <div className="flex flex-col gap-3 mt-8">
                    <a href="https://drive.google.com/uc?export=download&id=16RxdGNe-UJM61D2cU85NcsZtc38FOtCc" target="_blank" rel="noopener noreferrer" className="w-full bg-lime-400 hover:bg-lime-500 text-black font-extrabold py-4 rounded-xl transition-all text-center flex items-center justify-center gap-2">
                      <span className="text-xl">📥</span> Download Formulir
                    </a>
                    <button onClick={handleCloseModal} className="w-full bg-transparent border border-white/20 text-white hover:bg-white/10 font-bold py-4 rounded-xl transition-all">
                      Selesai & Tutup
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Page4;