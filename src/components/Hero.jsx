import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../assets/hero-animation.json";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaPenNib,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen z-10 flex items-center bg-white dark:bg-black  overflow-hidden">
      {/* Gradient Backgrounds */}
      <div className="absolute top-0 left-0 w-1/2 h-80 bg-yellow-400 blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[400px] h-[400px] bg-yellow-400 opacity-10 rounded-full blur-3xl z-0" />


      {/* Content Wrapper */}
      <div className="w-full max-w-8xl mx-auto px-6 md:px-10 pt-48 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black dark:text-white leading-tight mb-6">
              Building Bold Brands, Creative Experiences &{" "}
              <span className="text-yellow-400">Powerful Web Solutions</span>.
            </h1>
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-xl">
              At <span className="font-semibold text-yellow-400">Levic</span>,
              we craft digital strategies and experiences that connect brands to
              the people that matter. From design to code, we make you stand out.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:bg-yellow-300 transition"
              >
                Hire Us Now
              </a>
              <a
                href="/about"
                className="px-6 py-3 border border-black dark:border-white text-black dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Animation Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-full max-w-md mx-auto"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Lottie animationData={animationData} loop={true} />
            </motion.div>
          </motion.div>
        </div>

        {/* Value Points Section */}
        <div className="mt-24 grid md:grid-cols-3 gap-8 text-left">
          {[
            {
              title: "Creative Design",
              desc: "Visually stunning and conversion-driven digital experiences tailored to your brand.",
              icon: <FaPaintBrush className="text-yellow-400 text-xl" />,
            },
            {
              title: "Web Development",
              desc: "Clean, responsive, and scalable web solutions built with modern technologies.",
              icon: <FaLaptopCode className="text-yellow-400 text-2xl" />,
            },
            {
              title: "Brand Strategy",
              desc: "We help brands define their voice, identity, and connect with their audience.",
              icon: <FaPenNib className="text-yellow-400 text-2xl" />,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <div className="text-3xl">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
