import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import slide1 from '../assets/slide1.jpeg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import slide4 from '../assets/slide4.jpg';
import slide5 from '../assets/slide5.jpg';
import slide6 from '../assets/slide6.jpg';

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    { url: slide1, alt: 'Serpme köy kahvaltısı' },
    { url: slide2, alt: 'Doğal ortamda yemek' },
    { url: slide3, alt: 'Taze kahvaltı malzemeleri' },
    { url: slide4, alt: 'Köy ortamı' },
    { url: slide5, alt: 'Ahşap masa düzeni' },
    { url: slide6, alt: 'Doğal bahçe manzarası' },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-6">
            Fotoğraf Galerisi
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Doğallezzetlerimizi ve samimi ortamımızı keşfedin
          </p>
        </div>

        <div className="relative">
          {/* Main Image */}
          <div className="relative w-full h-56 sm:h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl mb-4">
            <img 
              src={images[currentImage].url}
              alt={images[currentImage].alt}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            
            {/* Navigation Buttons */}
            <button 
              onClick={prevImage}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-green-900" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6 text-green-900" />
            </button>
            
            {/* Image Counter */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
              {currentImage + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-2 overflow-x-auto py-2 sm:py-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  currentImage === index 
                    ? 'border-green-600 shadow-lg' 
                    : 'border-gray-200 hover:border-green-400'
                }`}
              >
                <img 
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;