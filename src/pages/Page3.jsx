import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { motion } from "framer-motion";

// Asumsikan FadeUp sudah didefinisikan di sini atau diimpor
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

const productDetails = {
  hajiUmroh: {
    title: "Haji & Umroh",
    image: "/haji.png", // Ganti dengan path gambar yang sesuai
    description: "PT. WGS memfasilitasi umat muslim untuk beribadah haji & umroh maupun perjalanan lainnya (non muslim) dengan pelayanan terbaik. Berbagai inovasi telah dilakukan oleh PT. WGS, salah satunya Pembiayaan Haji dan Umroh. Niat yang sudah matang Insyaa Allah menjadi dorongan tersendiri untuk mulai melangkah menuju Tanah Suci.",
    items: [
      "Pelayanan terbaik untuk haji & umroh.",
      "Pembiayaan haji & umroh dengan sistem syariah.",
      "Membantu mewujudkan niat Anda untuk ke Tanah Suci."
    ]
  },
  multiGuna: {
    title: "Pembiayaan Multi Guna",
    image: "pbyn.png", // Ganti dengan path gambar yang sesuai
    description: "Kami menyediakan pembiayaan multi guna untuk berbagai keperluan, seperti:",
    items: [
      "KPR & Renovasi Rumah",
      "Pendidikan sampai dengan Strata 2",
      "Modal Kerja",
      "Pembelian Emas"
    ]
  },
  koperasi: {
    title: "Koperasi Keuangan Syariah",
    image: "/kop.png", // Ganti dengan path gambar yang sesuai
    description: "Sebagai lembaga keuangan modern berbasis syariah, kami memfasilitasi kebutuhan finansial melalui koperasi.",
    items: [
      "Pembiayaan mikro tanpa agunan hingga Rp 10 juta.",
      "Pembiayaan Aliansi Mikro hingga Rp 50 juta.",
      "Pembiayaan Usaha Mikro hingga Rp 100 juta."
    ]
  },
  pomigor: {
    title: "Pomigor (POM Mini Minyak Goreng)",
    image: "/pom.jpg", // Ganti dengan path gambar yang sesuai
    description: "Kami menyediakan fasilitas peminjaman mesin POM MINYAK GORENG kepada pelaku usaha kecil menengah dengan sistem bagi hasil. InSyaa Allah PT. WGS akan istiqomah menjaga semua kepercayaan dan amanah yang diberikan kepada kami.",
    items: [
      "Fasilitas peminjaman mesin Pomigor.",
      "Sistem bagi hasil yang adil.",
      "Mendukung pelaku UMKM untuk berwirausaha."
    ]
  },
  csr: {
    title: "Corporate Social Responsibility (CSR)",
    image: "/csr.png", // Ganti dengan path gambar yang sesuai
    description: "Dengan menggunakan produk WGS, Anda turut serta dalam kegiatan sosial kami. Hal ini sejalan dengan moto CERIA yang Amanah, serta didasari niat tulus untuk memberikan sumbangsih bagi kemaslahatan umat.",
    items: [
      "Menyantuni 10.000 anak Yatim dan Piatu dari SD hingga Perguruan Tinggi.",
      "Program Inkubator Ekonomi Syariah untuk masjid.",
      "Renovasi fasilitas umum seperti masjid, sekolah, dan pesantren.",
      "Wakaf Al-Qur'an bagi para Tahfiz di seluruh Indonesia."
    ]
  }
};

const Page3 = () => {
  const [activeProduct, setActiveProduct] = useState(null);

  const handleCardClick = (productKey) => {
    setActiveProduct(productKey);
    // Solusi: Gunakan setTimeout untuk memastikan scroll terjadi setelah render
    setTimeout(() => {
      const element = document.getElementById("product-details");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  const renderProductDetail = () => {
    const detail = productDetails[activeProduct];
    if (!detail) {
      return null;
    }

    return (
      <motion.div
        key={activeProduct}
        variants={FadeUp(0.2)}
        initial="initial"
        animate="animate"
        className="mt-20 p-8 bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start gap-8"
      >
        <div className="w-full md:w-1/3">
          <img src={detail.image} alt={detail.title} className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left text-primary">{detail.title}</h2>
          <p className="text-gray-700 mb-6 text-center md:text-left">{detail.description}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mx-auto md:mx-0">
            {detail.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="bg-light overflow-hidden relative">
      <Navbar />
      <div className="container min-h-[650px] py-10 md:py-20">
        {/* Judul Section */}
        <motion.div
          variants={FadeUp(0.6)}
          initial="initial"
          animate="animate"
          className="text-center space-y-4 mb-10"
        >
          <h1 className="text-3xl lg:text-5xl font-bold !leading-snug">
            Produk & <span className="text-secondary">Layanan</span>
          </h1>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            WGS menawarkan berbagai solusi keuangan modern berbasis syariah untuk memenuhi kebutuhan Anda.
          </p>
        </motion.div>

        {/* Bagian Produk: Kartu yang bisa diklik */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          
          {Object.keys(productDetails).map((key, index) => (
            <motion.div
              key={key}
              variants={FadeUp(0.8 + index * 0.2)}
              initial="initial"
              animate="animate"
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:bg-gray-100 transition-colors"
              onClick={() => handleCardClick(key)}
            >
              <img src={productDetails[key].image} alt={productDetails[key].title} className="h-24 w-auto object-contain mb-4 rounded-md" />
              <h3 className="text-xl font-bold mb-2">{productDetails[key].title}</h3>
              <p className="text-gray-600">
                {key === 'hajiUmroh' && "WGS memfasilitasi umat muslim untuk beribadah haji dan umroh, termasuk pembiayaan."}
                {key === 'multiGuna' && "Solusi pembiayaan untuk berbagai kebutuhan pribadi dan keluarga, dari rumah hingga pendidikan."}
                {key === 'koperasi' && "Kami memfasilitasi pembiayaan untuk usaha mikro dan aliansi mikro, tanpa agunan."}
                {key === 'pomigor' && "Fasilitas peminjaman mesin POM minyak goreng kepada pelaku usaha kecil menengah."}
                {key === 'csr' && "Setiap transaksi produk WGS mendukung program-program kemanusiaan dan sosial."}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Bagian Detail Produk */}
        <div id="product-details">
          {renderProductDetail()}
        </div>
        
      </div>
    </section>
  );
};

export default Page3;