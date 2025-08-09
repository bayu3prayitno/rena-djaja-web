import React from "react";

import { Clock, MapPin, Package } from "lucide-react";

const Layanan = () => {
  return (
    <section id="service" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Service
          </h2>
          <p className="text-xl text-gray-600">
            ventito patruus tripudio infit bis velit vicissitudo texo abstergo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <Package className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-black mb-3">
              Custom Packaging
            </h3>
            <p className="text-gray-600">
              perspiciatis tandem voluptatem avarus vel appello distinctio tero
              placeat animadverto ventito patruus tripudio infit bis velit
              vicissitudo texo abstergo.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-black mb-3">
              Flexible Schedule
            </h3>
            <p className="text-gray-600">
              perspiciatis tandem voluptatem avarus vel appello distinctio tero
              placeat animadverto ventito
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <MapPin className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-black mb-3">
              Pickup Service
            </h3>
            <p className="text-gray-600">
              perspiciatis tandem voluptatem avarus vel appello distinctio tero
              placeat animadverto
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layanan;
