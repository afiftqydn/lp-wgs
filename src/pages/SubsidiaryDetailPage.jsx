import React, { useEffect } from 'react'; // Tambahkan useEffect
import { useParams, Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { subsidiariesData } from "../data/subsidiariesData";

// Fungsi utilitas FadeUp
const FadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      duration: 0.8,
      delay,
      ease: "easeInOut",
    },
  },
  viewport: { once: true },
});

const SubsidiaryDetailPage = () => {
    const { id } = useParams();
    const subsidiary = subsidiariesData.find(sub => sub.id === id);

    // ====== LOGIKA SCROLL TO TOP ======
    // Setiap kali halaman ini dibuka atau ID berubah, layar akan kembali ke atas
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]); 
    // ==================================


    // --- Handling 404 (Not Found) ---
    if (!subsidiary) {
        return (
            // Background SVG diterapkan di sini juga untuk konsistensi
            <section className="bg-[url('/src/assets/navbar-bg.svg')] bg-repeat bg-cover min-h-screen flex flex-col justify-between relative">
                <Navbar />
                <div className="container mx-auto py-20 text-center flex-grow flex flex-col items-center justify-center relative z-10">
                    <div className="bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-[#cae2c0]">
                        <h1 className="text-4xl font-bold text-[#174b1d]">404</h1>
                        <p className="text-gray-600 mt-2">Detail Perusahaan Tidak Ditemukan.</p>
                        <Link to="/About Us" className="mt-4 inline-block text-[#174b1d] font-bold hover:underline">
                            Kembali ke Ekosistem Bisnis
                        </Link>
                    </div>
                </div>
                <Footer />
            </section>
        );
    }
    
    const detail = subsidiary;
    const legal = detail.legal;

    return (
        // 1. MAIN WRAPPER: Background SVG Utama
        <section className="bg-[url('/src/assets/navbar-bg.svg')] bg-repeat bg-cover overflow-hidden relative flex flex-col min-h-screen">
            <Navbar />
            
            {/* ====== SECTION 1: HERO ====== */}
            {/* Hero menutupi bagian atas background SVG dengan gambar/overlay sendiri */}
            <div 
                className="relative h-[80vh] flex items-center justify-center bg-fixed bg-cover bg-center shadow-2xl"
                style={{ 
                    backgroundImage: detail.commissionersPhotoBg || 'none',
                    backgroundColor: '#174b1d' 
                }}
            >
                {/* Overlay Gradient Hitam + Hijau Tua */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-0"></div>
                <div className="container mx-auto px-6 relative z-10 text-center text-white">
                    <motion.div
                        variants={FadeUp(0.2)}
                        initial="initial"
                        animate="whileInView"
                    >
                        {/* Nama Perusahaan */}
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-wide text-white drop-shadow-lg">
                            {detail.name}
                        </h1>

                        {/* Narasi Singkat */}
                        <p className="text-lg md:text-2xl font-light max-w-3xl mx-auto leading-relaxed text-[#cae2c0]">
                            Bergerak dan berdedikasi penuh dalam bidang <span className="font-semibold text-white">{detail.items ? detail.items[0] : "Layanan Profesional"}</span> serta memberikan solusi terbaik bagi mitra kami.
                        </p>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ delay: 1, duration: 1 }}
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block"
                    >
                        <svg className="w-6 h-6 text-[#cae2c0]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </motion.div>
                </div>
            </div>

            {/* ====== SECTION 2: SELAYANG PANDANG ====== */}
            {/* CATATAN: 
               Saya tidak memberi background color di div pembungkus ini 
               agar 'navbar-bg.svg' dari <section> utama terlihat di sela-sela kartu.
            */}
            <div className="flex-grow bg-[#cae2c0] container py-16 rounded-3xl shadow-md">
                <div className="container mx-auto px-6">
                    {/* TITLE */}
                    <motion.div
                        variants={FadeUp(0.1)}
                        initial="initial"
                        whileInView="whileInView"
                        className="mb-16 text-center"
                    >
                        <h2 className="text-4xl font-extrabold text-[#174b1d] tracking-wide mb-4">
                            Selayang Pandang
                        </h2>
                        <div className="mx-auto w-24 h-1 bg-[#174b1d] rounded-full"></div>
                    </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* LOGO CARD */}
            <motion.div
                variants={FadeUp(0.2)}
                initial="initial"
                whileInView="whileInView"
                className="p-10 rounded-2xl shadow-xl border border-[#cae2c0]/60 bg-white/0 backdrop-blur-sm
                           flex flex-col items-center justify-center min-h-[300px]"
            >
                <div className="absolute top-0 left-0 w-full h-2 bg-[#174b1d] rounded-t-2xl"></div>

                <img
                    src={detail.logo}
                    alt={detail.name}
                    className="w-48 md:w-56 h-auto object-contain mt-4"
                />
            </motion.div>

            {/* TEXT CONTENT */}
            <motion.div
                variants={FadeUp(0.3)}
                initial="initial"
                whileInView="whileInView"
                className="lg:col-span-2 p-10 rounded-2xl shadow-lg border border-[#cae2c0]/60 bg-white/0 backdrop-blur-md"
            >
                {/* Nama perusahaan */}
                <h3 className="text-3xl font-bold text-[#174b1d] mb-6 pb-3 border-b border-[#cae2c0]">
                    {detail.name}
                </h3>

                {/* Deskripsi */}
                <p className="text-gray-700 text-lg leading-relaxed mb-10 text-justify">
                    {detail.description}
                </p>

                {/* Fokus & Layanan */}
                <div className="bg-[#cae2c0]/30 p-6 rounded-xl border-l-4 border-[#174b1d]">
                    <h4 className="text-xl font-bold mb-4 text-[#174b1d]">
                        Fokus & Layanan Utama
                    </h4>

                    {detail.items && (
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {detail.items.map((item, index) => (
                                <li key={index} className="flex items-start text-[#174b1d] font-semibold leading-snug">
                                    <svg
                                        className="w-5 h-5 text-[#174b1d] mr-3 mt-1 flex-shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            d="M5 13l4 4L19 7" 
                                        />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </motion.div>

        </div>
                </div>
            </div>

            {/* ====== SECTION 3: LEGALITAS ====== */}
            <div className="py-16 relative z-10">
                <div className="container mx-auto px-6">                   
                    {legal ? (
                        <motion.div 
                            variants={FadeUp(0.2)} 
                            initial="initial" 
                            whileInView="whileInView" 
                            // Card Putih Solid agar data penting terlihat jelas
                            className="max-w-4xl mx-auto bg-[#cae2c0]/80 rounded-2xl shadow-2xl overflow-hidden border border-[#cae2c0]"
                        >
                            {/* Header Legalitas */}
                            <div className="bg-[#cae2c0]/40 p-6 border-b border-[#cae2c0] flex flex-col items-center justify-center">
                                <div>
                                    <h2 className="text-2xl font-bold text-[#174b1d] text-center ">
                                        Legalitas Perusahaan
                                    </h2>
                                    <p className="text-[#174b1d]/80 text-sm font-medium text-center">Dokumen resmi dan perizinan terdaftar.</p>
                                </div>
                            </div>
                                                        
                            <div className="p-8">
                                <ul className="space-y-4">
                                    {[
                                        { label: "Nama Resmi", value: detail.name },
                                        { label: "Akta Pendirian", value: legal.aktaPendirian },
                                        { label: "SK Kemenkumham", value: legal.skKemenkumham },
                                        { label: "Nomor Induk Berusaha (NIB)", value: legal.nib, mono: true },
                                        { label: "NPWP", value: legal.npwp, mono: true }
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-[#cae2c0]/30 pb-3 hover:bg-[#cae2c0]/10 transition p-2 rounded">
                                            <span className="text-gray-500 font-medium">{item.label}</span>
                                            <span className={`text-[#174b1d] font-bold text-right ${item.mono ? 'font-mono tracking-wide' : ''}`}>
                                                {item.value || "-"}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ) : (
                        <div className="max-w-3xl mx-auto text-center">
                            {/* <motion.div 
                                variants={FadeUp(0.2)}
                                initial="initial"
                                whileInView="whileInView"
                                className="p-6 bg-white rounded-2xl shadow-lg border border-[#cae2c0]"
                            >
                                <p className="text-[#174b1d] italic font-medium">
                                    Data legalitas belum tersedia untuk ditampilkan saat ini.
                                </p>
                            </motion.div> */}
                        </div>
                    )}

                        {/* Tombol Navigasi */}
                        <div className="flex justify-center gap-4 mt-12 pb-8">

                            {/* Tombol Kembali */}
                            <Link 
                                to="/About-Us#sub-holding"
                                className="inline-flex items-center px-8 py-3 rounded-full bg-[#cae2c0] border-2 border-[#174b1d] text-[#174b1d] font-bold hover:bg-[#174b1d] hover:text-white transition duration-300 shadow-lg hover:shadow-xl"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                    />
                                </svg>
                                Kembali ke Ekosistem Bisnis
                            </Link>

                            {/* Tombol Contact Us – warna & hover sama */}
                            <Link
                                to="/Contact-Us"
                                className="inline-flex items-center px-8 py-3 rounded-full bg-[#cae2c0] border-2 border-[#174b1d] text-[#174b1d] font-bold hover:bg-[#174b1d] hover:text-white transition duration-300 shadow-lg hover:shadow-xl"
                            >
                                Hubungi Kami
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </Link>

                        </div>
                </div>
            </div>
            
            <Footer />
        </section>
    );
};

export default SubsidiaryDetailPage;