import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tentang from "./pages/About_Us";
import Produk from "./pages/Product";
import Layanan from "./pages/Service";

function App() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <div className="absolute inset-0 z-21 h-18">
        <Navbar />
      </div>
      <main className="flex-1">
        <Home />
        <Tentang />
        <Produk />
        <Layanan />
      </main>
      <Footer />
    </div>
  );
}

export default App;
