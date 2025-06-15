import React from 'react';
import { MapPin, Navigation, Clock } from 'lucide-react';

const Location = () => {
  return (
    <section className="py-16 sm:py-20 bg-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-6">
            Bizi Nasıl Bulursunuz?
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-green-900 mb-2">Adresimiz</h3>
                  <p className="text-gray-700">
                    Pamuklu Köyü, İskele Bölgesi
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-green-900 mb-2">Çalışma Saatleri</h3>
                  <div className="mt-1 grid grid-cols-2 gap-x-4 gap-y-2 text-gray-700 leading-relaxed">
                    <span className="font-medium text-green-900">Pazartesi</span><span>Kapalıyız</span>
                    <span className="font-medium text-green-900">Salı</span><span>08:00 - 00:00</span>
                    <span className="font-medium text-green-900">Çarşamba</span><span>08:00 - 00:00</span>
                    <span className="font-medium text-green-900">Perşembe</span><span>08:00 - 00:00</span>
                    <span className="font-medium text-green-900">Cuma</span><span>08:00 - 00:00</span>
                    <span className="font-medium text-green-900">Cumartesi</span><span>08:00 - 00:00</span>
                    <span className="font-medium text-green-900">Pazar</span><span>08:00 - 00:00</span>
                    <span className="col-span-2 mt-2 italic">Rezervasyon önerilir</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-96 rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93396.33880316243!2d33.998417644375266!3d35.39487517952796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dfa0afed780c2f%3A0x2eb95722503ce949!2sYayla%20Yemek%20Evi!5e0!3m2!1str!2str!4v1749981528008!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Yayla Yemek Evi Harita"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;