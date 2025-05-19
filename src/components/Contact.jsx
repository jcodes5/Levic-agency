import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Contact() {
  const [state, handleSubmit] = useForm("xeogvdgl");

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black overflow-hidden">
      {/* Blur background gradients */}
      <div className="absolute -top-10 -left-10 w-80 h-80 bg-yellow-300 opacity-20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 opacity-30 rounded-full blur-3xl z-0" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-8">
        {/* Contact Info & Map */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white">
            Get In Touch
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg">
            We're here to listen, collaborate, and create something impactful together.
          </p>

          <div className="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-400" />
              Suite D9 HCR Plaza, Opp. Police Pension Office, Jabi, Abuja.
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-400" />
              +2348074947146
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400" />
              <a href="mailto:info.levicdigital@gmail.com">
                info.levicdigital@gmail.com
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4 text-xl">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-yellow-400">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-yellow-400">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-yellow-400">
              <FaLinkedin />
            </a>
          </div>

          {/* Responsive Google Map */}
          <div className="mt-8 w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3940.033554522476!2d7.4153228!3d9.0607038!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e758922a854db%3A0x4359b8df5543551b!2sHCR%20PLAZA!5e0!3m2!1sen!2sng!4v1747284610058!5m2!1sen!2sng"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          {state.succeeded ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-green-500">
                🎉 Message sent successfully!
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                We’ll get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 text-black dark:text-white focus:ring-2 focus:ring-yellow-400"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 text-black dark:text-white focus:ring-2 focus:ring-yellow-400"
                  placeholder="john@example.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 text-black dark:text-white focus:ring-2 focus:ring-yellow-400"
                  placeholder="What's on your mind?"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <motion.button
                type="submit"
                disabled={state.submitting}
                className="bg-yellow-400 hover:bg-yellow-300 transition-all text-black font-semibold px-6 py-3 rounded-full shadow-md"
                whileTap={{ scale: 0.95 }}
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
