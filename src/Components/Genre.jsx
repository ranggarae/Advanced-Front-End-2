import React, { useState } from "react";

const Genre = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genres = [
    "Aksi",
    "Anak-anak",
    "Anime",
    "Britania",
    "Drama",
    "Fantasi Ilmiah & Fantasi",
    "Kejahatan",
    "KDrama",
    "Komedi",
    "Petualangan",
    "Perang",
    "Romantis",
    "Sains & Alam",
    "Thriller",
  ];

  return (
    <div className="relative inline-flex z-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black text-white font-semibold py-1 px-1 rounded flex items-center text-xs md:text-lg ml-24 md:ml-0 "
      >
        Genre
        <svg
          className="ml-2 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute mt-6 md:mt-9 bg-gray-900 text-white rounded shadow-lg p-4 grid grid-cols-2 gap-2 z-10 w-52 md:w-72 text-xs md:text-base">
          {genres.map((genre, index) => (
            <div
              key={index}
              className="hover:bg-gray-700 px-2 py-1 rounded cursor-pointer"
            >
              {genre}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Genre;