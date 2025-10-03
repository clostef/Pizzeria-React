import React from "react";
import targetIcon from "../assets/icons/target.png";

const FindUs = () => {
  return (
    <section
      id="find"
      className="w-full h-[991px] md:h-[559px] bg-[#D9D9D9] flex items-center justify-center px-4 py-8 md:py-0 overflow-x-hidden"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-6xl w-full mx-auto">
        <div className="flex flex-col gap-6 justify-center">
          <h2 className="uppercase font-bold text-gray-700 text-3xl leading-none md:text-left">
            <span className="inline-block border-b-[1px] border-gray-700">
              Find Us
            </span>
          </h2>

          <div className="flex items-center gap-3">
            <img
              src={targetIcon}
              alt="Target Icon"
              className="w-8 h-8 object-contain"
            />
            <p className="text-gray-700 text-base leading-relaxed">
              10 Rue de Rivoli <br />
              75004 Paris, France
            </p>
          </div>

          <div>
            <p className="text-gray-700 font-semibold text-lg mb-2">
              Opening hours:
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Monday - Friday: 11:00 AM - 10:00 PM <br />
              Saturday: 12:00 PM - 11:00 PM <br />
              Sunday: 12:00 PM - 9:00 PM
            </p>
          </div>

          <div>
            <p className="text-gray-700 font-semibold text-lg mb-2">
              Delivery:
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Monday - Friday: 11:30 AM - 9:30 PM <br />
              Saturday: 12:30 PM - 10:30 PM <br />
              Sunday: 12:30 PM - 8:30 PM
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-8 md:mt-0">
          <div className="w-[343px] h-[395px] rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.5)] overflow-hidden">
            <iframe
              title="Restaurant Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.364326877963!2d2.352221315674023!3d48.85549117928779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d44a7f9f13%3A0x1a23456789abcdef!2s10%20Rue%20de%20Rivoli%2C%2075004%20Paris%2C%20France!5e0!3m2!1sfr!2sfr!4v1696350900000!5m2!1sfr!2sfr"
              width="343"
              height="395"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
