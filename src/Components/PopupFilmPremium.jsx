import React, { useState } from "react";

const PopupFilm = ({onClose}) => {
  const [isVisible,] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-10">
      <div className="bg-gray-900 text-white w-full md:w-lg rounded-lg shadow-lg">
        {/* Header Section */}
        <div className="relative">
          <img
            src="/PopupHeroFilm.png"
            alt="Ted Lasso"
            className="object-cover"
          />
          <button
            className="absolute top-3 right-3 bg-gray-800 rounded-full size-6 md:size-8 flex items-center justify-center hover:bg-gray-700"
            onClick={onClose}>✕
          </button>

          <div className="absolute bottom-0 left-0 right-0  p-4">
            <h2 className="text-base md:text-2xl font-bold">Guardian Of The Galaxy Vol. 3 "Example"</h2>
            <div className="flex items-center space-x-2 md:space-x-4 mt-2">
              <button className="bg-blue-600 text-white text-xs md:text-base px-1 py-1 md:px-2 md:py-2 rounded-2xl hover:bg-blue-700">Mulai</button>
              <div className="flex items-center space-x-2">
                <button className="size-6 md:size-8 rounded-full flex items-center justify-center hover:bg-gray-600">
                  <img src="/Add.svg" alt="Add"/>
                </button>
                <img src="/Premium.svg" alt="Premium" className="w-16 h-16 md:w-20 md:h-20" />
              </div>
              <button className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:bg-gray-600 ml-auto">
                <img src="/Mute.svg" alt="Mute" className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col md:flex-row md:space-x-4">
          <div className="flex-1">
            <p className="text-sm mt-1 flex items-center">
              2023 · 2j 29m ·
              <img src="/PG-13.svg" alt="16+" className="w-8 h-8 md:w-10 md:h-10 ml-2" />
            </p>
            <p className="text-sm mb-4 mt-2">
              Masih goyah karena kehilangan Gamora, Peter Quill mengumpulkan timnya untuk mempertaruhkan alam semesta dan salah satu dari mereka. Sebuah misi yang bisa berarti akhir dari Penjaga jika tidak berhasil.
            </p>
          </div>
          <div className="flex-1 text-sm">
            <div className="mt-4 md:mt-14 tabular-nums">
              <p>
                <strong>Cast:</strong> Chris Pratt, Chukwudi Iwuji, Bradley Cooper, dan lain lain
              </p>
              <p>
                <strong>Genre:</strong> Aksi, Petualangan, Komedi
              </p>
              <p>
                <strong>Pembuat Film:</strong> James Gunn
                Lawrence
              </p>
            </div>
          </div>
        </div>

        {/* Recommendations Section */}
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4">Rekomendasi Serupa</h3>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4">
            {[
              {
                title: "The Batman",
                image: "Number=8.png",
                label: "Top 10",
              },
              {
                title: "Doctor Strange",
                image: "Number=19.png",
                label: "Top 10",
              },
              {
                title: "Shazam",
                image: "Number=2.png",
                label: "Top 10",
              },
            ].map((rec, index) => (
              <div key={index} className="relative">
                <img
                  src={rec.image}
                  alt={rec.title}
                  className="w-full h-36 md:h-full object-cover rounded-lg"
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-md">
                  {rec.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupFilm;