import React from "react";
import aboutImage from "../assets/images/about-us.png";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="w-full h-[559px] bg-[#D9D9D9] flex items-center justify-center px-4 py-12"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mx-auto">
        <div className="hidden md:block flex-shrink-0">
          <div className="w-[331px] h-[395px] rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
            <img
              src={aboutImage}
              alt="About us"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center h-[395px] gap-6 text-gray-700">
          <h2 className="uppercase font-bold text-gray-700 text-3xl leading-none">
            <span className="inline-block border-b-[1px] border-gray-700">
              About Us
            </span>
          </h2>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-lg mb-2">
            Welcome to Pizzeria Della Mama, where we <br />
            serve up authentic Italian pizza made
            <br /> fresh daily.
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-lg mb-2">
            Our dough is handcrafted with love, and
            <br /> our toppings are always fresh and <br /> flavorful. Come join
            us for a slice of Italy in
            <br /> a warm and inviting atmosphere.
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-lg">
            We can't wait to share our passion for
            <br />
            pizza with you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
