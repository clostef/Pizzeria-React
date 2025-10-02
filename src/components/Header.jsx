import React, { useState } from "react";
import logoHeader from "../assets/logos/logo-header.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-6 px-4">
        <div className="flex items-center gap-4">
          <img
            src={logoHeader}
            alt="Logo Pizzeria"
            className="w-16 h-16 object-contain"
          />
          <h1 className="text-3xl font-norican text-black hidden md:block">
            Pizzeria Della Mama
          </h1>
        </div>

        <nav className="hidden md:flex gap-10 text-black font-semibold text-lg">
          <a href="#about" className="hover:text-gray-400 transition-colors">
            About us
          </a>
          <a href="#menu" className="hover:text-gray-400 transition-colors">
            Menu
          </a>
          <a href="#find" className="hover:text-gray-400 transition-colors">
            Find us
          </a>
          <a href="#contact" className="hover:text-gray-400 transition-colors">
            Contact
          </a>
        </nav>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden flex flex-col gap-4 px-4 pb-4 text-black font-semibold text-lg">
          <a href="#about" onClick={() => setIsOpen(false)}>
            About us
          </a>
          <a href="#menu" onClick={() => setIsOpen(false)}>
            Menu
          </a>
          <a href="#find" onClick={() => setIsOpen(false)}>
            Find us
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
