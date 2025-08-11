import React from "react";

import { Clock, MapPin, Package } from "lucide-react";

const recipe = () => {
  return (
    <section id="recipe" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Recipe
          </h2>
          <p className="text-xl text-gray-600">
            ventito patruus tripudio infit bis velit vicissitudo texo abstergo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white  rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <img
              src="kangkung.webp"
              alt="Custom Packaging"
              className="w-full h-44 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black mb-3">
                Resep Cah Kangkung
              </h3>
              <p className="text-gray-600">
                perspiciatis tandem voluptatem avarus vel appello distinctio
                tero placeat animadverto ventito patruus tripudio infit bis
                velit vicissitudo texo abstergo.
              </p>
            </div>
          </div>

          <div className="bg-white  rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <img
              src="opor.jpg"
              alt="Custom Packaging"
              className="w-full h-44 object-cover "
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black mb-3">
                Resep Opor
              </h3>
              <p className="text-gray-600">
                perspiciatis tandem voluptatem avarus vel appello distinctio
                tero placeat animadverto ventito patruus tripudio infit bis
                velit vicissitudo texo abstergo.
              </p>
            </div>
          </div>

          <div className="bg-white  rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <img
              src="nasgor.jpg"
              alt="Custom Packaging"
              className="w-full h-44 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black mb-3">
                Resep Nasi Goreng
              </h3>
              <p className="text-gray-600">
                perspiciatis tandem voluptatem avarus vel appello distinctio
                tero placeat animadverto ventito patruus tripudio infit bis
                velit vicissitudo texo abstergo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default recipe;
