import React, { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import desktopAnimation from "../assets/hero-animation.json";
import mobileIllustration from "../assets/services.json";

//Images Import
import EACO from "../assets/EACO.jpg";
import gaius from "../assets/gaius.jpg";
import scentivityy from "../assets/scentivityy.jpg";
import CPRDS from "../assets/CPRDS.jpg";
import Kib from "../assets/Kib.jpg";
import rescue from "../assets/rescue.jpg";
import Nera from "../assets/Nera-hotel.jpg";
import kesug from "../assets/kesug.jpg";

const clients = [
  {
    title: "EACO",
    image: EACO,
    description: "Conversion-optimized and mobile-first shopping experience.",
  },
  {
    title: "Gaius",
    image: gaius,
    description: "Sleek branding with strong call-to-action focus.",
  },
  {
    title: "Scentivityy",
    image: scentivityy,
    description: "Creative portfolio for agency visibility and reach.",
  },
  {
    title: "CPRDS",
    image: CPRDS,
    description: "Scalable SaaS platform with analytics and user control.",
  },
  {
    title: "Kib",
    image: Kib,
    description: "Interactive single-page site to showcase events.",
  },
  {
    title: "Rescue",
    image: rescue,
    description: "Smooth scrolling UX with product-focused storytelling.",
  },
];

const HappyClients = () => {
  const [modalData, setModalData] = useState(null);

  return (
    <section className="relative z-10 py-28 px-6 bg-white dark:bg-black overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-80 bg-yellow-400 blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-0 right-0 w-1/2 h-80 bg-yellow-400 blur-3xl opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-black dark:text-white">
            Our <span className="text-yellow-400">Happy Clients</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We build lasting relationships by delivering results our clients love.
          </p>
        </motion.div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.02}
                glareEnable={false}
                className="rounded-3xl bg-gradient-to-br from-white via-yellow-50 to-yellow-100 dark:from-black dark:via-gray-900 dark:to-black p-1 border border-transparent hover:border-yellow-400 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <div className="rounded-2xl overflow-hidden relative group bg-white dark:bg-black">
                  <img
                    src={client.image}
                    alt={client.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
                    <button
                      onClick={() => setModalData(client)}
                      className="px-5 py-2 bg-yellow-400 text-black font-bold rounded-full shadow hover:bg-yellow-300 transition"
                    >
                      View
                    </button>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-black dark:text-white">{client.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{client.description}</p>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* Lottie Animation */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="hidden md:block max-w-2xl mx-auto"
          >
            <Lottie animationData={desktopAnimation} loop />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="block md:hidden max-w-md mx-auto"
          >
            <Lottie animationData={mobileIllustration} loop />
          </motion.div>
        </div>
      </div>

      {/* Modal Preview */}
      {modalData && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-900 max-w-lg p-6 rounded-2xl shadow-2xl relative">
            <button
              onClick={() => setModalData(null)}
              className="absolute top-3 right-3 text-gray-700 dark:text-gray-300 hover:text-red-500 text-xl"
            >
              &times;
            </button>
            <img
              src={modalData.image}
              alt={modalData.title}
              className="rounded-xl mb-4"
            />
            <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">{modalData.title}</h3>
            <p className="text-gray-700 dark:text-gray-400">{modalData.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default HappyClients;
