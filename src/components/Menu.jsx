import React, { useState } from "react";
import menuImage from "../assets/images/menu-section.png";

import margherita from "../assets/images/pizzas/margherita.png";
import mexican from "../assets/images/pizzas/mexican.png";
import mushroom from "../assets/images/pizzas/mushroom.png";

import rouge from "../assets/images/drinks/rouge.jfif";
import blanc from "../assets/images/drinks/blanc.jfif";
import cocktail from "../assets/images/drinks/cocktail1.jfif";

import brownie from "../assets/images/desserts/brownie.jfif";
import cafeGourmand from "../assets/images/desserts/cafe-gourmand.jfif";
import fruits from "../assets/images/desserts/fruits.jfif";

const menuData = {
  Pizzas: [
    {
      id: 1,
      name: "Margherita",
      price: "8€",
      image: margherita,
      ingredients:
        "The Margherita pizza is a traditional Italian dish from Naples. Tomato, Mozzarella, Basil.",
    },
    {
      id: 2,
      name: "Mexican",
      price: "10€",
      image: mexican,
      ingredients:
        "Tomato, Mozzarella, Spicy Beef, Jalapeños, Red Onion, Bell Peppers",
    },
    {
      id: 3,
      name: "Mushroom",
      price: "9€",
      image: mushroom,
      ingredients:
        "Tomato, Mozzarella, Mushrooms, Garlic, Fresh Herbs, Olive Oil",
    },
  ],
  Drinks: [
    {
      id: 4,
      name: "Château Margaux",
      price: "5€",
      image: rouge,
      ingredients:
        "A rich and full-bodied red wine with notes of blackberry, blackcurrant, and a hint of vanilla.",
    },
    {
      id: 5,
      name: "Sancerre Blanc",
      price: "5€",
      image: blanc,
      ingredients:
        "A fresh and elegant white wine with aromas of white fruits and citrus, with a subtle mineral touch.",
    },
    {
      id: 6,
      name: "Cocktail Maison",
      price: "7€",
      image: cocktail,
      ingredients:
        "A refreshing blend of fresh fruits and alcohol, lightly sweet and sparkling, perfect to accompany your meals or simply to relax.",
    },
  ],
  Desserts: [
    {
      id: 7,
      name: "Brownie",
      price: "4€",
      image: brownie,
      ingredients: "Chocolate, Butter, Sugar, Eggs, Flour, Walnuts",
    },
    {
      id: 8,
      name: "Café Gourmand",
      price: "6€",
      image: cafeGourmand,
      ingredients:
        "Café Gourmand is a delightful French dessert pairing a small cup of coffee with a selection of mini desserts. Coffee + Mini Desserts.",
    },
    {
      id: 9,
      name: "Fruits",
      price: "5€",
      image: fruits,
      ingredients:
        "A refreshing medley of seasonal fruits, including berries, melon, and citrus, perfect for a light and healthy treat.",
    },
  ],
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState("Pizzas");

  return (
    <section id="menu" className="relative w-full h-[674px] overflow-x-hidden">
      <img
        src={menuImage}
        alt="Our Menu"
        className="w-full h-[674px] object-cover"
      />

      <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
        <h2 className="uppercase font-bold text-gray-200 text-3xl leading-none">
          <span className="inline-block border-b-[1px] border-gray-200">
            Our Menu
          </span>
        </h2>
      </div>

      <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-full px-4 max-w-[735px] flex flex-col xl:block">
        <div className="flex xl:block mb-4 xl:mb-6">
          <div className="flex w-[229px] h-[42px] bg-white rounded-lg shadow-lg overflow-hidden">
            {["Pizzas", "Drinks", "Desserts"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="flex-1 flex items-center justify-center"
              >
                <span
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-gray-200 text-black"
                      : "bg-transparent text-black hover:bg-gray-200"
                  }`}
                >
                  {tab}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 text-black w-full">
          <div className="hidden xl:grid grid-cols-3 gap-4">
            {menuData[activeTab].map((item) => (
              <div key={item.id} className="flex flex-col items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[200px] h-[200px] object-cover rounded-xl"
                />
                <div className="flex justify-between w-[200px] mt-2">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <span className="text-lg font-semibold">{item.price}</span>
                </div>
                <p className="text-sm text-gray-600 w-[200px] text-left mt-4">
                  {item.ingredients}
                </p>
              </div>
            ))}
          </div>

          <div className="xl:hidden flex overflow-x-auto snap-x snap-mandatory space-x-4 px-2 scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-thin">
            {menuData[activeTab].map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-full max-w-[300px] snap-center flex flex-col items-center bg-white rounded-lg p-2"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[200px] h-[200px] object-cover rounded-xl"
                />
                <div className="flex justify-between w-[200px] mt-2">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <span className="text-lg font-semibold">{item.price}</span>
                </div>
                <p className="text-sm text-gray-600 w-[200px] text-left mt-4">
                  {item.ingredients}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
