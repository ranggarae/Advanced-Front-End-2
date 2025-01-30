import React, { useState } from "react";
import HoverVertical from "../Components/HoverVertical";

const Movies = ({ movies, redirectPath = "/watchberanda", redirectPath0 = "/detailberanda" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === movies.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full bg-black text-white p-4 md:p-6">
      <div className="flex items-center">
        {/* Tombol Sebelumnya */}
        <button
          onClick={handlePrev}
          className="bg-gray-800 bg-opacity-50 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mr-2 md:mr-4"
        >
          &lt;
        </button>

        {/* Daftar Film */}
        <div className="flex overflow-x-hidden w-full">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 300}px)` }}
          >
            {movies.map((movie, index) => (
              <HoverVertical key={index} movie={movie} redirectPath={redirectPath} redirectPath0={redirectPath0} />
            ))}
          </div>
        </div>

        {/* Tombol Berikutnya */}
        <button
          onClick={handleNext}
          className="bg-gray-800 bg-opacity-50 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center ml-2 md:ml-4"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Movies;