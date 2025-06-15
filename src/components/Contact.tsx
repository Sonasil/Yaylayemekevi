import React from 'react';
import { Phone, MapPin, Instagram, Clock, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-16 sm:py-20 bg-green-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            İletişim
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
          <p className="text-xl text-green-100">
            Rezervasyon ve bilgi için bizi arayın
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-green-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-green-100" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Telefon</h3>
            <a 
              href="tel:+905338471010"
              className="text-green-200 hover:text-white transition-colors duration-200"
            >
              +90 533 847 1010
            </a>
          </div>

          <div className="text-center">
            <div className="bg-green-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-green-100" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Adres</h3>
            <p className="text-green-200">
              Pamuklu Köyü<br />
              İskele, Kuzey Kıbrıs
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Facebook className="w-8 h-8 text-green-100" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Facebook</h3>
            <a 
              href="https://www.facebook.com/profile.php?id=100063710611861&locale=tr_TR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-200 hover:text-white transition-colors duration-200"
            >
              @yaylayemekevi
            </a>
          </div>

          <div className="text-center">
            <div className="bg-green-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Instagram className="w-8 h-8 text-green-100" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Instagram</h3>
            <a 
              href="https://instagram.com/yaylayemekevi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-200 hover:text-white transition-colors duration-200"
            >
              @yaylayemekevi
            </a>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-green-800 p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Rezervasyon Yapın</h3>
            <p className="text-green-100 mb-6">
              Özellikle hafta sonları için rezervasyon yapmanızı öneriyoruz. 
              Sizleri doğanın kalbinde ağırlamaktan mutluluk duyarız.
            </p>
            <a 
              href="tel:+905338471010"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              Hemen Ara
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;