import React from "react";
import { MdHandshake } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi";
import { TbCrown } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ServicesData = [
  {
    id: 1,
    key: "multiGuna",
    title: "Pembiayaan Multiguna",
    desc: "Nikmati kemudahan pembiayaan untuk berbagai kebutuhan Anda—mulai dari rumah tinggal, renovasi, biaya pendidikan, hingga pembelian emas. Solusi fleksibel dan syariah untuk mendukung rencana hidup Anda.",
    icon: <TbCrown />,
    delay: 0.2,
  },
  {
    id: 2,
    key: "hajiUmroh",
    title: "Haji & Umroh",
    desc: "Wujudkan impian beribadah ke Tanah Suci dengan pembiayaan syariah yang aman, mudah, dan sesuai prinsip Islam. Siap mendampingi langkah suci Anda dengan solusi terbaik.",
    icon: <HiAcademicCap />,
    delay: 0.3,
  },
  {
    id: 3,
    key: "csr",
    title: "Corporate Social Responsibility (CSR)",
    desc: "Dengan produk WGS, Anda turut mendukung program sosial seperti santunan yatim piatu, inkubator ekonomi syariah, renovasi fasilitas umum, dan wakaf Al-Qur’an bagi para Tahfiz di Indonesia.",
    icon: <MdHandshake />,
    delay: 0.4,
  },
];

const SlideLeft = (delay) => ({
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, delay, ease: "easeInOut" },
  },
});

const Services = () => {
  const navigate = useNavigate();

  const handleItemClick = (productKey) => {
    navigate(`/page3?product=${productKey}`);
  };

  return (
    <section className="bg-[#cce6c4] rounded-t-3xl">
      <div className="container pb-14 pt-16">
        <motion.h1
          className="text-4xl font-bold text-left pb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          Produk Unggulan
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-8">
          {ServicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-[#e1f2d8] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl cursor-pointer"
              onClick={() => handleItemClick(service.key)}
            >
              <div className="text-4xl mb-1">{service.icon}</div>
              <h1 className="text-lg font-semibold text-center">{service.title}</h1>
              <p className="text-md font-light text-justify px-3 mb-2">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
