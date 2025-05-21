import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/Levic2.png"; 

export default function Preloader({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 10000); // simulate 10 seconds loading

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 bg-white dark:bg-black flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <motion.img
        src={logo}
        alt="Levic Logo"
        className="w-28 h-28"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      />
    </motion.div>
  );
}
