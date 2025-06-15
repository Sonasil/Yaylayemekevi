import React from "react";
import { Leaf, Heart, Users } from "lucide-react";

import hakkımızda from '../assets/hakkımızda.jpeg';

const About = () => {
  return (
    <section className="py-16 sm:py-20 bg-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-6">
            Hakkımızda
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Yayla Yemek Evi, doğallık ve geleneksel tatların buluştuğu bir köy
              restoranıdır. 2018'den beri Pamuklu Köyü’nde, kendi üretimimiz
              taze ürünlerle hazırladığımız ev yemekleri ve kahvaltılarla
              misafirlerimize unutulmaz bir lezzet deneyimi sunuyoruz.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-green-900 mb-2">
                    Doğal Ürünler
                  </h3>
                  <p className="text-gray-600">
                  Her sabah özenle seçtiğimiz taze ve katkısız kahvaltılıklarla, doğallığı sofranıza taşıyoruz.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-green-900 mb-2">
                    Geleneksel Lezzetler
                  </h3>
                  <p className="text-gray-600">
                    Köy kahvaltısının özgün tadları ve ev yapımı lezzetler
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-green-900 mb-2">
                    Aile Sıcaklığı
                  </h3>
                  <p className="text-gray-600">
                    Samimi ortam ve misafirperverliğimizle unutulmaz anlar
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={hakkımızda}
              alt="Doğal ortamda kahvaltı"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <p className="text-green-900 font-semibold text-sm">
                2018'den beri
              </p>
              <p className="text-gray-600 text-sm">hizmetinizdeyiz</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
