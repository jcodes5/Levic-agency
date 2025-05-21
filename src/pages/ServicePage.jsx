import React from "react";
import Services from "../components/Services";
import Faq from "../components/Faq";
// import Footer from "../components/Footer";
// import Services from "../components/Services";

export default function ServicePage() {
  return (
    <main id="about" className="bg-black text-white">
      <Services />
      <Faq />
    </main>
  );
}
