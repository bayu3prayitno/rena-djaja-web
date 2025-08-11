import React from "react";

const Produk = () => {
  return (
    <section id="product" className="py-20 px-4 bg-red-50 transition-all duration-500 ">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">Flagship Product</h2>
        <div className="flex flex-col md:flex-row items-center gap-12 justify-center">
          <div className="flex-shrink-0 flex items-center justify-center md:justify-end w-full md:w-auto">
            <img
              src="produk1.png"
              alt="Moto Cap Mobil"
              className="max-w-xs"
            />
          </div>
          <div className="text-left max-w-md">
            <h3 className="text-2xl font-bold text-red-600 mb-2 bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">Moto Cap Mobil</h3>
            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <ul className="list-disc list-inside text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>asperiores delectus necessitatibus molestiae laborum</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>nostrum molestiae amet dolorem modi</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>velociter coniecto admiratio suscipit charisma curriculum iusto super volutabrum</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white flex items-center gap-4 p-5 m-5 w-full text-left rounded-md hover:shadow-xl transition-shadow">
          <img
            src="halal.png"
            alt="Moto Cap Mobil"
            className="w-20 h-20 object-contain"
          />
          <p className="text-black text-sm leading-snug">
            Produk kami telah mendapatkan sertifikat halal dari Majelis
            Ulama Indonesia (MUI) dan Badan Penyelenggara Jaminan Produk Halal
            (BPJPH)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Produk;