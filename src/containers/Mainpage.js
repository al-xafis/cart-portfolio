import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import '../components/App.css';
import Hero from '../components/Hero/Hero';
import Announcement from '../components/Announcement/Announcement';
import Features from '../components/Features/Features';
import Testimonials from '../components/Testimonials/Testimonials';
import Footer from '../components/Footer/Footer';


const Mainpage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Announcement />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Mainpage;