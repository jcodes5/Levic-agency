import Hero from '../components/Hero.jsx';
import React from 'react';
import About from '../components/About.jsx';
import Services from '../components/Services.jsx';
import Portfolio from '../components/Portfolio.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Contact from '../components/Contact.jsx';

const HomePage = () => {
   return (
      <div  className="bg-black text-white">
         <Hero />
         <About />
         <Services />
          <Portfolio />
          <Testimonials />
          <Contact />
      </div>
   );
   }
export default HomePage;