import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

import Levi from "../assets/Levi-creative-director.jpg";
import Esther from "../assets/Esther-coo.jpg";
import Victoria from "../assets/Victoria-Admin.jpg";
import Anthony from "../assets/Anthony-wordpress.jpg";
import Rosemary from "../assets/Rosemary-Financial.jpg";
import Jcodes from "../assets/me.jpeg";

const teamMembers = [
  {
    name: "Promise Levi",
    role: "Creative Director",
    img: Levi,
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Esther Richard",
    role: "Cheif Operating Officer",
    img: Esther,
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Victoria Samuel",
    role: "Admin/Executive secretary",
    img: Victoria,
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Rosemary Ojochenemi L.",
    role: "Financial Secretary",
    img: Rosemary,
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Anthony Chigbo",
    role: "WordPress Developer",
    img: Anthony,
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Jatto Overcomer",
    role: "Fullstack Developer",
    img: Jcodes,
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  // {
  //   name: "Amara Benson",
  //   role: "Product Designer",
  //   img: "https://randomuser.me/api/portraits/women/60.jpg",
  //   socials: {
  //     linkedin: "#",
  //     twitter: "#",
  //     github: "#"
  //   }
  // },
  // {
  //   name: "Kelvin Uche",
  //   role: "Data Analyst",
  //   img: "https://randomuser.me/api/portraits/men/40.jpg",
  //   socials: {
  //     linkedin: "#",
  //     twitter: "#",
  //     github: "#"
  //   }
  // }
];

export default function MeetOurTeam() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleOverlay = (idx) => {
    // Toggle logic: if already active, close it
    setActiveIndex(activeIndex === idx ? null : idx);
  };
  return (
    <section className="relative bg-black text-white py-28 px-6 sm:px-12 overflow-hidden">
      {/* Glowing circles */}
      <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-yellow-400 opacity-20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-yellow-400 opacity-20 rounded-full blur-3xl z-0" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-6 text-white"
        >
          Meet Our Team
        </motion.h2>

        <p className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto leading-relaxed">
          Our talented team brings together diverse expertise and a shared passion for delivering exceptional results.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, idx) => {
            const isActive = activeIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl hover:shadow-yellow-500/30 transition-all text-center group relative overflow-hidden"
                onClick={() => toggleOverlay(idx)}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-yellow-500 mb-4 transition-transform duration-300 group-hover:scale-105"
                />
                <h4 className="text-lg font-semibold text-white">{member.name}</h4>
                <p className="text-sm text-gray-300">{member.role}</p>

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-black/80 flex flex-col items-center justify-center rounded-2xl p-4 transition-opacity duration-300
                    ${isActive ? "opacity-100 z-20" : "opacity-0 z-0"}
                    sm:opacity-0 sm:group-hover:opacity-100 sm:z-20`}
                >
                  <h4 className="text-lg font-semibold text-white mb-2">{member.name}</h4>
                  <p className="text-sm text-gray-400 mb-4">{member.role}</p>
                  <div className="flex gap-4">
                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition transform hover:scale-125 duration-300">
                      <FaLinkedin size={22} />
                    </a>
                    <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition transform hover:scale-125 duration-300">
                      <FaTwitter size={22} />
                    </a>
                    <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition transform hover:scale-125 duration-300">
                      <FaGithub size={22} />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
