import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HoverVertical = ({ movie, redirectPath = "/watchberanda", redirectPath0 = "/detailberanda" }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={`relative bg-gray-900 justify-items-center rounded-lg overflow-hidden shadow-md mx-2 transition-all duration-300 ${
        hover ? "w-[150px] h-[200px] md:w-[250px] md:h-[300px] z-50" : "w-[120px] h-[180px] md:w-[240px] md:h-[360px]"
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Gambar Film */}
      <img
        src={hover ? movie.image : movie.image1}
        alt={movie.title}
        className="w-full object-cover rounded-lg"
      />

      {hover && (
        <div className="absolute inset-x-0 bottom-0 p-2 md:p-4 flex flex-col">
          {/* Kontrol */}
          <div className="flex items-center space-x-6 md:space-x-10">
            <button className="w-8 h-8 md:w-10 md:h-10 bg-gray-900 rounded-full flex items-center justify-center mb-2"
              onClick={() => navigate(redirectPath)}>
              <img src="play.svg" alt="play" />
            </button>

            <button className="w-8 h-8 md:w-10 md:h-10 bg-gray-700 rounded-full flex items-center justify-center mb-2"
              onClick={() => navigate(redirectPath0)}>
              <img src="down.svg" alt="down" />
            </button>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <img src="Chip.svg" alt="chip" className="size-fit" />
            <p className="text-sm md:text-lg font-bold text-gray-300">{movie.duration}</p>
          </div>

          {/* Genre */}
          <div className="flex items-center justify-between mt-1 md:mt-2 text-gray-400 text-xs md:text-sm">
            {movie.genres.map((genre, index) => (
              <span key={index}>{genre}</span>
            ))}
          </div>
        </div>
      )}

      {!hover && (
        <div className="absolute bottom-0 left-0 w-full via-transparent to-transparent p-2 md:p-4">
          <div className="flex justify-between items-center">
            <h3 className="text-white text-sm md:text-lg font-bold">{movie.title}</h3>
            <span className="text-gray-300 text-xs md:text-sm">⭐ {movie.rating}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default HoverVertical;