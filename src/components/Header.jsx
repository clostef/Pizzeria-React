import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-6 px-4">
        <div className="flex items-center gap-4">
          <img
            src="/logo.png"
            alt="Logo Pizzeria"
            className="w-16 h-16 object-contain"
          />
          <h1 className="text-3xl font-norican text-black">
            Pizzeria Della Mama
          </h1>
        </div>

        <nav className="flex gap-10 text-black text-lg">
          <a href="#about" className="hover:text-yellow-500 transition-colors">
            About us
          </a>
          <a href="#menu" className="hover:text-yellow-500 transition-colors">
            Menu
          </a>
          <a href="#find" className="hover:text-yellow-500 transition-colors">
            Find us
          </a>
          <a
            href="#contact"
            className="hover:text-yellow-500 transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
