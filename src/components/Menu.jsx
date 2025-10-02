import React from "react";
import menuImage from "../assets/images/menu-section.png";

const Menu = () => {
  return (
    <section className="relative w-full h-[674px]">
      <img
        src={menuImage}
        alt="Our Menu"
        className="w-full h-full object-cover"
      />

      <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
        <h2 className="uppercase font-bold text-gray-200 text-3xl leading-none">
          <span className="inline-block border-b-[1px] border-gray-200">
            Our Menu
          </span>
        </h2>
      </div>
    </section>
  );
};

export default Menu;
