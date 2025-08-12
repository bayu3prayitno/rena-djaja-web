import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import CSS Swiper
import "swiper/css";

const Recipe = () => {
  const recipes = [
    {
      img: "kangkung.webp",
      title: "Resep Kangkung",
      desc: "Resep Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      img: "opor.jpg",
      title: "Resep Opor",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      img: "nasgor.jpg",
      title: "Resep Nasi Goreng",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      img: "seblak.jpg",
      title: "Resep Seblak",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      img: "baso.webp",
      title: "Resep Bakso",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      img: "geprek.jpg",
      title: "Resep Ayam Geprek",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  return (
    <section id="recipe" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Recipe
          </h2>
          <p className="text-xl text-gray-600">
            ventito patruus tripudio infit bis velit vicissitudo texo abstergo.
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 2000, // jeda 2 detik
            disableOnInteraction: false,
          }}
          speed={800}
          breakpoints={{
            320: { slidesPerView: 1 },  // HP
            640: { slidesPerView: 2 },  // Tablet
            1024: { slidesPerView: 3 }, // Desktop
          }}
        >
          {recipes.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl text-center m-5 hover:scale-105 hover:-translate-y-2 hover:shadow-lg transition-shadow">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-44 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Recipe;
