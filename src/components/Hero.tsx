import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import herosection from '../assets/herosection.jpg';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${herosection})`
        }}
      />
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Yayla Yemek Evi
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-white mb-8 font-medium drop-shadow-md">
          Doğallığın Kalbinde, Köy Kahvaltısı
        </p>
        <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
          Pamuklu Köyü'nde doğanın içinde, Doğal lezzetler ve serpme köy kahvaltısı sizi bekliyor.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <a 
            href="tel:+905338471010" 
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            <span className="font-medium">Rezervasyon</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;