import React, { useState } from "react";
import HeroData from "./HeroData";
import WatchFilm from "./WatchFilm";
import PopupFilmPremium from "./PopupFilmPremium"; 

const HeroSection = ({ index = 0, redirectPath}) => {
  const hero = HeroData[index];
  const [showWatch, setShowWatch] = useState(false); 
  const [showDetail, setShowDetail] = useState(false); 

  return (
    <div className="relative bg-black text-white w-screen h-44 md:h-96">
      {/* Background Image */}
      <img
        src={hero.backgroundImage}
        alt={hero.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-4 md:px-16 lg:px-32 space-y-4">
        {/* Judul */}
        <h1 className="text-lg md:text-5xl font-bold">{hero.title}</h1>

        {/* Sinopsis */}
        <p className="text-xs md:text-2xl line-clamp-2">
          {hero.synopsis}
        </p>

        {/* Tombol Aksi */}
        <div className="flex space-x-4 size-fit text-xs md:text-xl">
          <button
            className="px-2 py-2 md:px-6 md:py-3 bg-blue-600 text-white font-semibold rounded-3xl hover:bg-blue-500"
            onClick={() => setShowWatch(true)}>
            Mulai
          </button>
          <button
            className="px-4 py-2 md:px-6 md:py-3 bg-gray-700 text-white font-semibold rounded-3xl flex items-center space-x-2 hover:bg-gray-600"
            onClick={() => setShowDetail(true)}>
            Selengkapnya
          </button>
          <div className="flex items-center justify-center border-2 border-white rounded-full w-8 md:w-13">
            18+
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>

      {/* Render WatchFilm jika showWatchFilm true */}
      {showWatch && (
        <WatchFilm redirectPath={redirectPath} onClose={() => setShowWatch(false)} />
      )}
      {showDetail && (
        <PopupFilmPremium redirectPath={redirectPath} onClose={() => setShowDetail(false)} />
      )}
    </div>
  );
};

export default HeroSection;