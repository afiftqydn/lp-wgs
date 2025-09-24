import Navbar from "../components/Navbar/Navbar";
import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";


export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Page4 = () => {
  return (
    <section className="bg-light overflow-hidden relative">
      <Navbar />
      <div className="container min-h-[650px] py-10 md:py-20">
        {/* Judul Halaman */}
        <motion.div
          variants={FadeUp(0.6)}
          initial="initial"
          animate="animate"
          className="text-center space-y-4 mb-10"
        >
          <h1 className="text-3xl lg:text-5xl font-bold !leading-snug">
            Hubungi <span className="text-secondary">Kami</span>
          </h1>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Tim kami siap membantu. Silakan hubungi kami untuk pertanyaan,
            dukungan, atau konsultasi.
          </p>
        </motion.div>
        
        {/* Bagian Utama Konten: FAQ dan Informasi Kontak */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* FAQ - Frequently Asked Questions */}
          <motion.div
            variants={FadeUp(0.8)}
            initial="initial"
            animate="animate"
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">FAQ (Pertanyaan yang Sering Diajukan)</h2>
            <div className="space-y-4">
              <div className="border-b pb-2">
                <h3 className="font-bold text-lg">Layanan apa saja yang ditawarkan oleh WGS?</h3>
                <p className="text-gray-600 mt-1">
                  Kami menawarkan berbagai inovasi, seperti pembiayaan Haji & Umroh, Pembiayaan Multi Guna, Koperasi Keuangan Syariah, dan Pomigor.
                </p>
              </div>
              <div className="border-b pb-2">
                <h3 className="font-bold text-lg">Bagaimana cara mendapatkan pembiayaan dari WGS?</h3>
                <p className="text-gray-600 mt-1">
                  Untuk pembiayaan, Anda harus menjadi anggota Koperasi Bhumi Pasundan Sejahtera (BPS) dengan biaya pendaftaran Rp 125.000. Setelah itu, melengkapi persyaratan yang tertuang dalam tabel cicilan.
                </p>
              </div>
              <div className="border-b pb-2">
                <h3 className="font-bold text-lg">Siapa saja yang bisa menjadi klien WGS?</h3>
                <p className="text-gray-600 mt-1">
                  Target pelanggan kami mencakup ASN, BUMN, BUMD, perusahaan Tbk (dengan sistem payroll), pelaku UMKM, dan masyarakat umum lainnya.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Informasi Kontak dan Peta */}
          <motion.div
            variants={FadeUp(1.0)}
            initial="initial"
            animate="animate"
            className="space-y-8 bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Informasi Kontak</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-700">Jl. Panglima Aim Nomor 74, Rt. 007, Rw. 016, Kelurahan Dalam Bugis, Kecamatan Pontianak Timur, Provinsi Kalimantan Barat, Kode Pos 78232</p>
              </div>
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-gray-700">+6285195522202</p>
              </div>
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-700">wgskalbar@gmail.com</p>
              </div>
            </div>
            <div className="w-full h-[300px] mt-6 rounded-md overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.817687638003!2d109.36129727456408!3d-0.03226723554025702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d58324dce450f%3A0x249d935df69219f8!2sJl.%20Panglima%20Aim%20No.74%2075%2C%20Dalam%20Bugis%2C%20Kec.%20Pontianak%20Tim.%2C%20Kota%20Pontianak%2C%20Kalimantan%20Barat!5e0!3m2!1sen!2sid!4v1758695286700!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
          
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Page4;