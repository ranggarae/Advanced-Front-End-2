import React from "react";
import HeroData from "./HeroData";
import { useNavigate } from "react-router-dom";

const HeroSection = ({ index = 0, redirectPath = "/watchberanda", redirectPath0 = "/detailberanda" }) => {
  const hero = HeroData[index];
  const navigate = useNavigate();

  return (
    <div className="relative bg-black text-white h-[400px] md:h-[500px] z-10">
      {/* Background Image */}
      <img
        src={hero.backgroundImage}
        alt={hero.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-4 md:px-16 lg:px-32 space-y-4">
        {/* Judul */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{hero.title}</h1>
        {/* Sinopsis */}
        <p className="text-sm md:text-base max-w-2xl">{hero.synopsis}</p>
        <div className="flex space-x-4">
          <button className="px-4 py-2 md:px-6 md:py-3 bg-blue-600 text-white font-semibold rounded-3xl hover:bg-blue-500" onClick={() => navigate(redirectPath)}>
            Mulai
          </button>
          <button className="px-4 py-2 md:px-6 md:py-3 bg-gray-700 text-white font-semibold rounded-3xl flex items-center space-x-2 hover:bg-gray-600" onClick={() => navigate(redirectPath0)}>
            Selengkapnya
          </button>
          <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 border-2 border-white rounded-full text-sm md:text-lg">
            18+
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
    </div>
  );
};

export default HeroSection;