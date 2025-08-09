import React from "react";

const Tentang = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-white transition-all duration-500"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
          About Us
        </h2>
        <p className="text-gray-700 mb-4">
          Cumque spiculum credo circumvenio tempore contigo. Textor ambulo et
          admoveo nemo claudeo complectus, colo tantillus sui accommodo tero.
          Usus arx demonstro pauper circumvenio, ullus viridis studio verumtamen
          defero. Ademptio curto tabula asper capto sollers, alienus complectus
          adicio utpote capitulus commemoro vix, corrumpo doloribus benigne
          strenuus stipes statim.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-red-600 mb-2">Visi</h3>
            <p className="text-gray-700">
              Cumque spiculum credo circumvenio tempore contigo.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-red-600 mb-2">Misi</h3>
            <ul className="text-gray-700 text-left flex flex-col gap-2 mt-2">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>
                  asperiores delectus necessitatibus molestiae laborum
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>nostrum molestiae amet dolorem modi</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>
                  velociter coniecto admiratio suscipit charisma curriculum
                  iusto super volutabrum
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tentang;
