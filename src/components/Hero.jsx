import React from "react";
import pizzaHero from "../assets/images/hero-pic.png";

const Hero = () => {
  return (
    <section className="relative w-full flex justify-center">
      <div className="w-full h-[517px] relative shadow-[0_10px_25px_rgba(0,0,0,0.5)] overflow-hidden">
        <img
          src={pizzaHero}
          alt="Delicious Pizza"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    bg-gray-200/50 rounded-xl 
                    w-[90%] max-w-[536px] h-[120px] flex items-center justify-center px-4"
      >
        <p className="text-black text-center text-lg md:text-xl lg:text-xl italic font-sans">
          "Enjoy our homemade Italian pizzas, prepared with passion and fresh
          ingredients!"
        </p>
      </div>
    </section>
  );
};

export default Hero;
