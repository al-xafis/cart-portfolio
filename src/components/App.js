import React from 'react';
import Navbar from './Navbar/Navbar';
import './App.css';
import Hero from './Hero/Hero';
import Announcement from './Announcement/Announcement';
import Features from './Features/Features';

const App = () => {
  return (
    <div>
     <Navbar />
     <Hero />
     <Announcement />
     <Features />
    </div>
  );
}

export default App;