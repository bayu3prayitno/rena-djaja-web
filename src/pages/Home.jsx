
const Home = () => {
  return (
    <>
      <section
        id="home"
        className="relative min-h-[100vh] flex flex-col justify-center items-center text-center px-4 py-20 transition-all duration-500 overflow-hidden h-full w-full"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/bg.webp')",
            backgroundAttachment: "fixed",
          }}
          aria-hidden="true"
        />
        {/* Gradient shadow overlay */}
        <div
          className="absolute inset-0 w-full h-full bg-gradient-to-b from-opacity-100 to-white z-10"
          aria-hidden="true"
        />
        <div className="relative z-20 flex flex-col justify-center items-center h-full w-full bottom-38">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4 drop-shadow">
            Cita Rasa Terbaik untuk{" "}
            <span className="animate-color-cycle font-extrabold">
              Dapur Indonesia
            </span>
          </h1>
          <p className="text-lg md:text-1xl text-red-700 mb-8 font-medium">
            Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
            faucibus.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#about"
              className="bg-transparent text-red-600 px-6 py-3 rounded-full font-bold shadow 
                 hover:bg-red-600 hover:text-white transition border-3 border-red-600"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="absolute top-75 z-11">
          <img
            src="/produk.png"
            alt="Moto Cap Mobil"
            className="w-170 h-130 object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
