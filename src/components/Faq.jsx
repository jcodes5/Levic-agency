import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What makes Levic different from other digital agencies?",
    answer:
      "Levic is not just another agency — we’re a strategic partner. We combine creativity, innovation, and technical expertise to deliver solutions that drive real business growth. Our client-centric approach ensures every solution is tailored, scalable, and results-driven."
  },
  {
    question: "Do you work with startups or only established companies?",
    answer:
      "We proudly serve both. Whether you're a startup looking to build your brand or an established company ready to scale, we provide tailored services that match your current phase and future goals."
  },
  {
    question: "Can I hire Levic for just one service, like website design?",
    answer:
      "Absolutely. While we offer end-to-end digital services, many of our clients engage us for individual needs like web design, SEO, branding, or social media campaigns. You can scale your engagement as your business evolves."
  },
  {
    question: "What’s the typical timeline for completing a project?",
    answer:
      "Timelines vary based on project scope and complexity. For example, branding projects may take 1–2 weeks, while full website development could range from 3–6 weeks. We always discuss timelines upfront and stay transparent throughout."
  },
  {
    question: "How does your pricing work?",
    answer:
      "Our pricing is flexible and designed to meet your budget without compromising quality. After an initial consultation, we provide a custom quote based on your needs — whether it’s a one-time project or a long-term engagement."
  },
  {
    question: "Do you offer post-launch support or maintenance?",
    answer:
      "Yes. We don’t just deliver and disappear. From website maintenance to performance monitoring and marketing tweaks, we offer ongoing support to ensure your digital presence remains optimized and effective."
  },
  {
    question: "Can Levic help my business grow online?",
    answer:
      "That’s what we exist for. Through strategic marketing, brand positioning, compelling design, and seamless technology, we help you attract, engage, and convert your target audience."
  },
  {
    question: "Where is Levic located, and do you work remotely?",
    answer:
      "Our office is in Abuja, Nigeria — Suite D9 HCR Plaza, Jabi. But we work with clients across Africa and globally, thanks to remote collaboration tools and agile project management."
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <section className="relative bg-black text-white py-24 px-6 sm:px-12 overflow-hidden">
      {/* Glowing Background Effects */}
      <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-yellow-400 opacity-20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-yellow-400 opacity-20 rounded-full blur-3xl z-0" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-center"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-white/10 border border-white/10 backdrop-blur-md p-6 rounded-xl"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center text-left text-white text-lg font-medium"
              >
                {faq.question}
                {activeIndex === index ? (
                  <FaChevronUp className="text-yellow-400" />
                ) : (
                  <FaChevronDown className="text-yellow-400" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden text-sm text-gray-300 mt-4 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
