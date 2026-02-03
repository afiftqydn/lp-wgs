import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
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

    // ====== STATE UNTUK CAROUSEL ======
    const [currentSlide, setCurrentSlide] = useState(0);

    // ====== LOGIKA SCROLL TO TOP ======
    useEffect(() => {
        window.scrollTo(0, 0);
        setCurrentSlide(0); // Reset slide saat ganti halaman
    }, [id]);

    // --- Handling 404 (Not Found) ---
    if (!subsidiary) {
        return (
            <section className="bg-[url('/src/assets/navbar-bg.svg')] bg-repeat bg-cover min-h-screen flex flex-col justify-between relative">
                <Navbar />
                <div className="container mx-auto py-20 text-center flex-grow flex flex-col items-center justify-center relative z-10">
                    <div className="bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-[#cae2c0]">
                        <h1 className="text-4xl font-bold text-[#174b1d]">404</h1>
                        <p className="text-gray-600 mt-2">Detail Perusahaan Tidak Ditemukan.</p>
                        <Link to="/About-Us" className="mt-4 inline-block text-[#174b1d] font-bold hover:underline">
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
    const products = detail.products || []; // Fallback jika tidak ada data produk

    // Fungsi Navigasi Slider
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? products.length - 1 : prev - 1));
    };

    return (
        // 1. MAIN WRAPPER
        <section className=" bg-black bg-repeat bg-cover overflow-hidden relative flex flex-col min-h-screen">
            <Navbar />

            {/* ====== SECTION 1: HERO ====== */}
            <div
                // UBAH: Hapus 'bg-center' agar kita bisa atur manual posisinya di style
                className="relative h-[95vh] flex items-end justify-start bg-fixed bg-cover shadow-2xl"
                style={{
                    backgroundImage: detail.commissionersPhotoBg || 'none',
                    backgroundColor: '#174b1d',
                    // UBAH: Atur posisi background di sini. 
                    // Ganti '35%' dengan angka lain (misal 20% atau 40%) sesuai selera agar pas turunnya.
                    backgroundPosition: 'center 15%' 
                }}
            >
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90 z-0"></div>
                
                {/* UBAH: text-center DIUBAH jadi text-left sesuai request sebelumnya */}
            <div className="container mx-auto px-6 relative z-10 text-center text-white pb-10 md:pb-8">
                <motion.div
                    variants={FadeUp(0.2)}
                    initial="initial"
                    animate="whileInView"
                >
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-5 tracking-wide text-white drop-shadow-lg">
                        {detail.name}
                    </h1>

                    <p className="text-base md:text-xl font-light max-w-3xl leading-relaxed text-[#cae2c0] mx-auto">
                        Bergerak dan berdedikasi penuh dalam bidang
                        <span className="font-semibold text-white">
                            {" "}
                            {detail.items ? detail.items[0] : "Layanan Profesional"}
                        </span>{" "}
                        serta memberikan solusi terbaik bagi mitra kami.
                    </p>
                </motion.div>
            </div>
            </div>
            {/* ====== MAIN CONTENT WRAPPER ====== */}
            <div className="flex-grow bg-[#cae2c0] container py-8 rounded-t-[50px] shadow-md">
                
                {/* ====== SECTION 2: PRODUCT CAROUSEL (DIPINDAHKAN KE SINI) ====== */}
                {products.length > 0 && (
                    <div className="container mx-auto px-6 pt-12 pb-8"> {/* pt-12 untuk memberi jarak dari atas */}
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
                        <div className="relative max-w-5xl mx-auto">
                            {/* Main Slide Container */}
                            <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-[#cae2c0]">
                                <AnimatePresence mode='wait'>
                                    <motion.div
                                        key={currentSlide}
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute inset-0"
                                    >
                                        <img
                                            src={products[currentSlide].image}
                                            alt={products[currentSlide].title}
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Caption Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 md:p-6 backdrop-blur-sm">
                                            <h3 className="text-white text-xl md:text-2xl font-bold text-center">
                                                {products[currentSlide].title}
                                            </h3>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Navigation Arrows */}
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/80 text-[#174b1d] p-3 rounded-full backdrop-blur-md transition-all z-10 hover:scale-110"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/80 text-[#174b1d] p-3 rounded-full backdrop-blur-md transition-all z-10 hover:scale-110"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>

                            {/* Dots Indicators */}
                            <div className="flex justify-center mt-6 gap-2">
                                {products.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-[#174b1d]" : "w-3 bg-[#174b1d]/40"}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* ====== SECTION 3: SELAYANG PANDANG (DIGESER KE BAWAH) ====== */}
                <div className="container mx-auto px-6 mt-16 md:mt-24"> {/* mt-16 untuk jarak dari carousel */}
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
                            <h3 className="text-3xl font-bold text-[#174b1d] mb-6 pb-3 border-b border-[#cae2c0]">
                                {detail.name}
                            </h3>

                            <p className="text-gray-700 text-lg leading-relaxed mb-10 text-justify">
                                {detail.description}
                            </p>

                            <div className="bg-[#cae2c0]/30 p-6 rounded-xl border-l-4 border-[#174b1d]">
                                <h4 className="text-xl font-bold mb-4 text-[#174b1d]">
                                    Fokus & Layanan Utama
                                </h4>

                                {detail.items && (
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {detail.items.map((item, index) => (
                                            <li key={index} className="flex items-start text-[#174b1d] font-semibold leading-snug">
                                                <svg className="w-5 h-5 text-[#174b1d] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
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

                {/* ====== SECTION 4: LEGALITAS ====== */}
                <div className="py-16 relative z-10 mt-12">
                    <div className="container mx-auto px-6">
                        {legal ? (
                            <motion.div
                                variants={FadeUp(0.2)}
                                initial="initial"
                                whileInView="whileInView"
                                className="max-w-4xl mx-auto bg-[#cae2c0]/80 rounded-2xl shadow-2xl overflow-hidden border border-[#cae2c0]"
                            >
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
                                ]
                                // --- BAGIAN INI YANG DITAMBAHKAN ---
                                // Filter akan membuang item jika value-nya kosong/null/undefined
                                .filter(item => item.value) 
                                // ------------------------------------
                                .map((item, idx) => (
                                    <li key={idx} className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-[#cae2c0]/30 pb-3 hover:bg-[#cae2c0]/10 transition p-2 rounded">
                                    <span className="text-gray-500 font-medium">{item.label}</span>
                                    <span className={`text-[#174b1d] font-bold text-right ${item.mono ? 'font-mono tracking-wide' : ''}`}>
                                        {item.value}
                                    </span>
                                    </li>
                                ))}
                                </ul>                
                                                </div>
                            </motion.div>
                        ) : (
                            <div className="max-w-3xl mx-auto text-center"></div>
                        )}

                        {/* Tombol Navigasi */}
                        <div className="flex justify-center gap-4 mt-12 pb-8">
                            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8 w-full">
                                <Link
                                    to="/About-Us#sub-holding"
                                    className="flex justify-center items-center px-4 py-2 rounded-full bg-[#cae2c0] border-2 border-[#174b1d] text-[#174b1d] font-bold hover:bg-[#174b1d] hover:text-white transition duration-300 shadow-lg hover:shadow-xl w-full md:w-64 h-16"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                    <span className="text-center text-sm leading-tight">
                                        Kembali ke <br /> Ekosistem Bisnis
                                    </span>
                                </Link>

                                <Link
                                    to="/Contact-Us"
                                    className="flex justify-center items-center px-4 py-2 rounded-full bg-[#cae2c0] border-2 border-[#174b1d] text-[#174b1d] font-bold hover:bg-[#174b1d] hover:text-white transition duration-300 shadow-lg hover:shadow-xl w-full md:w-64 h-16"
                                >
                                    Hubungi Kami
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </section>
    );
};

export default SubsidiaryDetailPage;