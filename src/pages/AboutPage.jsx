import React from "react";
import About from "../components/About";
import MeetOurTeam from "../components/MeetOurTeam";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main id="about" className="bg-black text-white">
      <About />
      <MeetOurTeam />
    </main>
  );
}
