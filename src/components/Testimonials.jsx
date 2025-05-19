import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Creative Director, NovaStudio",
    quote: "Working with Levic was a game-changer. Their team brought our brand to life in ways we couldn’t imagine.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    logo: "/logos/novastudio.svg",
  },
  {
    name: "Daniel Umeh",
    role: "CEO, TechSpark",
    quote: "From strategy to execution, everything was seamless. Levic understood our vision and delivered flawlessly.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    logo: "/logos/techspark.svg",
  },
  {
    name: "Chinaza Onuoha",
    role: "Product Designer, Flowly",
    quote: "Their creativity and attention to detail stood out. Levic helped elevate our user experience significantly.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    logo: "/logos/flowly.svg",
  },
  {
    name: "Chinaza Onuoha",
    role: "Product Designer, Flowly",
    quote: "Their creativity and attention to detail stood out. Levic helped elevate our user experience significantly.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    logo: "/logos/flowly.svg",
  },
  {
    name: "Chinaza Onuoha",
    role: "Product Designer, Flowly",
    quote: "Their creativity and attention to detail stood out. Levic helped elevate our user experience significantly.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    logo: "/logos/flowly.svg",
  },
  {
    name: "Chinaza Onuoha",
    role: "Product Designer, Flowly",
    quote: "Their creativity and attention to detail stood out. Levic helped elevate our user experience significantly.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    logo: "/logos/flowly.svg",
  },


];

export default function Testimonials() {
  return (
    <section className="relative py-28 px-6 bg-black dark:bg-black overflow-hidden">
      {/* Blurred Background Elements */}
      <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-yellow-400 opacity-10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-yellow-400 opacity-10 rounded-full blur-3xl z-0" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Hear from our partners who trusted us to shape their digital journey.
          </p>
        </motion.div>

        {/* Client Logos Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-8 mb-20"
        >
          {testimonials.map((client, i) => (
            <img
              key={i}
              src={client.logo}
              alt={client.name}
              className="h-10 grayscale opacity-80 hover:opacity-100 transition duration-300"
            />
          ))}
        </motion.div>

        

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all"
            >
              <FaQuoteLeft className="text-yellow-400 text-3xl mb-4" />
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-sm font-semibold text-black dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Swiper spaceBetween={16} slidesPerView={1} loop>
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-6 shadow-lg"
                >
                  <FaQuoteLeft className="text-yellow-400 text-3xl mb-4" />
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-black dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
