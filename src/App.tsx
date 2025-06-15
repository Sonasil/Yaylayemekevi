import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="location">
        <Location />
      </div>
      <div id="reviews">
        <Reviews />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;