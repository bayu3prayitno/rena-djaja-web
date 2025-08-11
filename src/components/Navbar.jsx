import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isTop, setIsTop] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // NEW state

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 40);
      // Scroll spy logic
      const sections = [
        { id: "home", offset: 0 },
        { id: "about" },
        { id: "product" },
        { id: "service" },
      ];
      let current = "home";
      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 80;
          if (window.scrollY >= top) {
            current = sections[i].id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTop
          ? "bg-transparent shadow-none border-none"
          : "bg-white shadow-md border-b border-gray-200"
      }`}
      style={isTop ? { background: "transparent", boxShadow: "none", border: "none" } : { background: "#fff" }}
    >
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="align-center w-10 h-10 rounded-full z-10" />
          <span className="text-2xl font-bold bg-gradient-to-r from-red-500 via-red-700 to-red-900 bg-clip-text text-transparent text-shadow-md">Rena Djaja</span>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-8 font-semibold text-black">
          {["home", "about", "product", "service"].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`transition ${
                  activeSection === id
                    ? "text-red-600 underline"
                    : "hover:underline hover:text-red-600"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-red-700 focus:outline-none z-22"
          aria-label="Open Menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </nav>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md">
          <ul className="flex flex-col items-center gap-4 py-4 font-semibold text-black">
            {["home", "about", "product", "service"].map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`transition ${
                    activeSection === id
                      ? "text-red-600 underline"
                      : "hover:underline hover:text-red-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)} // Tutup menu setelah klik
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
