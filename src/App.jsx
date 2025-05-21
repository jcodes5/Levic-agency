import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import Contact from "./components/Contact";
import HappyClients from "./components/Portfolio";

// Create a wrapper component that tracks location changes and handles preloader
function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show preloader on route change
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000); // Adjust time to how long you want the preloader

    return () => clearTimeout(timer);
  }, [location.pathname]); // re-run on every path change

  return (
    <>
      {loading && <Preloader onFinish={() => setLoading(false)} />}
      {!loading && (
        <>
          <Navbar />
          <main className="flex-grow">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicePage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<HappyClients />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
