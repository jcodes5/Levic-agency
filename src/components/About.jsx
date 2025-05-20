import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, ShieldCheck, Star, Users, Rocket, Target } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from "lottie-react";

import TeamAnimation from "../assets/team-lottie.json";
import DesignIllustration from "../assets/design.svg";

const values = [
  {
    icon: <Lightbulb className="w-7 h-7 text-yellow-500" />,
    title: "Creativity",
    desc: "We think beyond the ordinary, always exploring new possibilities."
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-yellow-500" />,
    title: "Integrity",
    desc: "Every design, every decision — rooted in trust and transparency."
  },
  {
    icon: <Star className="w-7 h-7 text-yellow-500" />,
    title: "Excellence",
    desc: "We raise the bar with every project we deliver."
  },
  {
    icon: <Users className="w-7 h-7 text-yellow-500" />,
    title: "Collaboration",
    desc: "We grow with our partners and clients — together."
  }
];

const journey = [
  {
    year: "2020",
    title: "Levic is born",
    description: "Founded with a vision to redefine digital experiences across Africa.",
  },
  {
    year: "2022",
    title: "Milestone Reached",
    description: "Successfully launched over 50+ client projects across industries.",
  },
  {
    year: "2024",
    title: "Going Global",
    description: "Expanded our services globally and introduced new strategic offerings.",
  }
];

export default function About() {
  React.useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section id="about" aria-labelledby="about-heading" className="relative bg-black text-white py-28 px-6 sm:px-12 overflow-hidden">
      {/* Blurred background elements */}
      <div className="absolute top-[-100px] left-[-100px] w-[700px] h-[500px] bg-yellow-400 opacity-10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[300px] bg-yellow-400 opacity-10 rounded-full blur-3xl z-0" />

      <div className="sm:hidden mb-10 flex justify-center">
        <img src={DesignIllustration} alt="Mobile Illustration" className="w-[280px] h-[280px] opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          id="about-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-8"
        >
          Who We Are
        </motion.h2>

        {/* Animation for larger screens */}
        <div className="hidden sm:flex justify-center mb-16 pb-12">
          <div className="w-[300px] h-[200px]">
            <Lottie animationData={TeamAnimation} loop />
          </div>
        </div>

        {/* Intro Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-20 leading-relaxed"
        >
          <span className="font-semibold text-white">Levic Digital Agency</span> is your strategic partner in the digital age. Since <span className="text-yellow-400 font-medium">2020</span>, we’ve helped bold brands create experiences that connect, convert, and stand out.
        </motion.p>

        {/* Our Journey Timeline */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Journey
        </motion.h3>

        <div className="max-w-4xl mx-auto relative space-y-10 pl-6 border-l-2 border-yellow-400">
          {journey.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="absolute -left-4 top-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-black" />
              <div className="ml-2">
                <h4 className="text-lg font-semibold text-white">{item.year} – {item.title}</h4>
                <p className="text-sm text-gray-300 mt-1">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-10 my-24">
          {[
            {
              title: "Our Vision",
              
              icon: <Rocket className="w-6 h-6 text-yellow-500" />,
              content: "To be the go-to digital partner for African and global brands seeking to grow, thrive, and lead in the digital era."
            },
            {
              title: "Our Mission",
              icon: <Target className="w-6 h-6 text-yellow-500" />,
              content: "To deliver top-tier digital services that blend creativity, strategy, and innovation — empowering businesses to succeed with ease."
            }
          ].map((card, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/90 backdrop-blur-lg border border-yellow-400 rounded-2xl p-8 shadow-xl hover:shadow-yellow-300/30"
            >
              <div className="flex items-center gap-3 mb-4">
                {card.icon}
                <h3 className="text-xl text-black font-semibold">{card.title}</h3>
              </div>
              <p className="text-sm text-gray-700">{card.content}</p>
            </motion.article>
          ))}
        </div>

        {/* Core Values */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Core Values
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white text-black p-6 rounded-2xl shadow-lg border-t-4 border-yellow-400 hover:border-yellow-500 hover:shadow-yellow-300/20"
            >
              <div className="flex items-center gap-3 mb-4">
                {value.icon}
                <h4 className="text-lg font-semibold">{value.title}</h4>
              </div>
              <p className="text-sm text-gray-700">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
