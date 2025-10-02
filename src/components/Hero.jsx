import React from "react";
import pizzaHero from "../assets/images/hero-pic.png";

const Hero = () => {
  return (
    <section className="relative w-full">
      <img
        src={pizzaHero}
        alt="Delicious Pizza"
        className="w-full h-[517px] object-cover"
      />

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
