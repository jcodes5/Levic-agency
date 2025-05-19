import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Player } from "@lottiefiles/react-lottie-player";

// Illustrations & Animations
import mobileServices from "../assets/mobile-services.svg";
import serviceAnimation from "../assets/services.json";

// React Icons
import {
  FaBullhorn,
  FaPaintBrush,
  FaLaptopCode,
  FaUserCircle,
  FaPenNib,
  FaLock,
  FaDraftingCompass,
} from "react-icons/fa";

const services = [
  {
    title: "Digital Marketing",
    icon:  <FaBullhorn className="text-yellow-400 text-xl" />,
    items: [
      "Social Media Marketing",
      "Email Campaigns",
      "SEO",
      "Paid Ads (Google, Facebook, Instagram)",
    ],
  },
  {
    title: "Branding & Creative Design",
    icon: <FaPaintBrush className="text-yellow-400 text-xl" />,
    items: [
      "Logo Design",
      "Brand Identity Development",
      "Corporate Stationery",
      "Marketing Collateral",
    ],
  },
  {
    title: "Web Design & Development",
    icon: <FaLaptopCode className="text-yellow-400 text-2xl" />,
    items: [
      "Responsive Websites",
      "E-commerce Platforms",
      "Landing Pages",
      "Website Management",
    ],
  },
  {
    title: "UI/UX Design",
    icon: <FaUserCircle className="text-yellow-400 text-2xl" />,
    items: [
      "App & Web Interfaces",
      "Prototyping & Wireframes",
      "User Experience Strategy",
    ],
  },
  {
    title: "Graphics Design",
    icon: <FaPenNib className="text-yellow-400 text-2xl" />,
    items: ["Social Media Content", "Print Designs", "Promotional Materials"],
  },
  {
    title: "Cybersecurity Solutions",
    icon: <FaLock className="text-yellow-400 text-2xl" />,
    items: [
      "Website Security",
      "Data Protection Strategy",
      "Vulnerability Assessments",
    ],
  },
  {
    title: "Architectural Design",
    icon: <FaDraftingCompass className="text-yellow-400 text-2xl" />,
    items: ["2D & 3D Designs", "Space Planning", "Visualization & Rendering"],
  },
];

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section
      id="services"
      className="relative bg-black text-white py-28 px-6 sm:px-12 overflow-hidden"
    >
      <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-yellow-400 opacity-10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-yellow-400 opacity-10 rounded-full blur-3xl z-0" />

      <div className="sm:hidden mb-10 flex justify-center z-10 relative">
        <img src={mobileServices} alt="Mobile Services" className="w-72 opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-center mb-4 text-yellow-400"
        >
          What We Do
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-gray-400 max-w-3xl mx-auto mb-16 text-lg"
        >
          We provide a wide range of innovative, modern, and tailored services to help you thrive in the digital world and beyond.
        </motion.p>

        <div className="hidden sm:flex justify-center mb-20">
          <Player autoplay loop src={serviceAnimation} className="w-[300px] h-[200px]" />
        </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {services.map((service, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-6 rounded-3xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 border border-yellow-500/10 shadow-lg hover:shadow-yellow-400/30 transition duration-300 backdrop-blur-xl hover:border-yellow-400"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-yellow-400/10 group-hover:bg-yellow-400/20 transition transform group-hover:scale-110">
          {service.icon}
        </div>
        <h3 className="text-lg font-semibold text-yellow-300 group-hover:text-yellow-400 transition">
          {service.title}
        </h3>
      </div>

      <ul className="text-sm text-gray-300 space-y-2 pl-1">
        {service.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-yellow-300 font-bold">•</span>
            {item}
          </li>
        ))}
      </ul>

      {/* Decorative Gradient Blur on Hover */}
      {/* <div className="absolute -z-10 inset-0 opacity-0 group-hover:opacity-20 transition duration-300 blur-2xl rounded-3xl bg-yellow-400" /> */}
    </motion.div>
  ))}
</div>


        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-gray-400 mb-4">
            Ready to elevate your brand or project?
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-yellow-300 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-400 transition"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
}
