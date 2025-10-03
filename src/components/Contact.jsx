import React from "react";
import bgFooter from "../assets/images/contact-pizza.png";
import logo from "../assets/logos/logo-header.png";
import fb from "../assets/images/fb.png";
import insta from "../assets/images/insta.png";
import whatsapp from "../assets/images/whatsapp.png";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative w-full h-[902px] flex flex-col justify-end items-center pb-40 shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgFooter})` }}
      ></div>

      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4 mb-12 md:flex-row md:items-center md:gap-4 md:mb-8">
          <img src={logo} alt="logo" className="w-[120px] h-auto" />
          <h2 className="text-white font-bold text-4xl md:text-5xl uppercase tracking-wide text-center md:text-left">
            Pizzeria <br className="md:hidden" /> Della Mama
          </h2>
        </div>

        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img
              src={fb}
              alt="facebook"
              className="w-[100px] h-[100px] rounded-full object-cover"
            />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img
              src={insta}
              alt="instagram"
              className="w-[100px] h-[100px] rounded-full object-cover"
            />
          </a>
          <a href="https://wa.me/" target="_blank" rel="noreferrer">
            <img
              src={whatsapp}
              alt="whatsapp"
              className="w-[100px] h-[100px] rounded-full object-cover"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
