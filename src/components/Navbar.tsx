import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-green-900' : 'text-white'
              }`}
            >
              Yayla Yemek Evi
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-green-400 ${
                  isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white'
                }`}
              >
                Ana Sayfa
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-green-400 ${
                  isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white'
                }`}
              >
                Hakkımızda
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-green-400 ${
                  isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white'
                }`}
              >
                Galeri
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-green-400 ${
                  isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white'
                }`}
              >
                Konum
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-green-400 ${
                  isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white'
                }`}
              >
                Yorumlar
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-green-400 ${
                  isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white'
                }`}
              >
                İletişim
              </button>
            </div>
          </div>

          {/* Contact Info & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Phone Number - Hidden on small screens */}
            <a 
              href="tel:+905338471010"
              className={`hidden lg:flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                isScrolled 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Rezervasyon</span>
            </a>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-md transition-colors duration-300 ${
                  isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-400'
                }`}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
              <button
                onClick={() => scrollToSection('hero')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md w-full text-left transition-colors duration-200"
              >
                Ana Sayfa
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md w-full text-left transition-colors duration-200"
              >
                Hakkımızda
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md w-full text-left transition-colors duration-200"
              >
                Galeri
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md w-full text-left transition-colors duration-200"
              >
                Konum
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md w-full text-left transition-colors duration-200"
              >
                Yorumlar
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md w-full text-left transition-colors duration-200"
              >
                İletişim
              </button>
              <a 
                href="tel:+905338471010"
                className="flex items-center gap-2 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">Rezervasyon</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;