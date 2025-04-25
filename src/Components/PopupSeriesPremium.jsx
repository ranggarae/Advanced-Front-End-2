import React, { useState } from "react";

const PopupSeriesPremium = ({onClose}) => {
  const [isVisible,] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-10">
      <div className="bg-gray-900 text-white w-full md:w-lg rounded-lg shadow-lg max-h-screen">
        {/* Header Section */}
        <div className="relative">
          <img
            src="/Popuphero.png"
            alt="Ted Lasso"
            className="w-full h-48 md:h-60 object-cover rounded-2xl"
          />

          <button
            className="absolute top-3 right-3 bg-gray-800 rounded-2xl w-8 h-8 flex items-center justify-center hover:bg-gray-700"
            onClick={onClose}>✕
          </button>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
            <h2 className="text-xl md:text-2xl font-bold">Ted Lasso "Example"</h2>
            <div className="flex items-center space-x-2 md:space-x-4 mt-2">
              <button className="bg-blue-600 text-white text-sm px-1 py-1 md:px-4 md:py-2 rounded-2xl hover:bg-blue-700">Mulai</button>
              <div className="flex items-center space-x-2">
                <button className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:bg-gray-600">
                  <img src="/Add.svg" alt="Add" className="w-6 h-6 md:w-8 md:h-8" />
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
        <div className="p-4 flex flex-col md:flex-row md:space-x-2">
          <div className="flex-1">
            <p className="text-sm mt-1 flex items-center">
              2020 · 10 episodes ·
              <img src="/16+.svg" alt="16+" className="w-4 h-4 md:w-5 md:h-5 ml-2" />
            </p>
            <p className="text-xs md:text-sm mb-4 mt-2">
              Pelatih sepak bola perguruan tinggi Amerika Ted Lasso pergi ke
              London untuk mengelola AFC Richmond, tim sepak bola Liga Utama
              Inggris yang kesulitan.
            </p>
          </div>
          <div className="flex-1 text-sm">
            <div className="text-xs md:text-sm tabular-nums">
              <p>
                <strong>Cast:</strong> Jason Sudeikis, Brett Goldstein, Brendan
                Hunt, Nick Mohammed, dan lain-lain
              </p>
              <p>
                <strong>Genre:</strong> Komedi, Drama, Olahraga
              </p>
              <p>
                <strong>Pembuat Film:</strong> Brendan Hunt, Joe Kelly, Bill
                Lawrence
              </p>
            </div>
          </div>
        </div>

        {/* Episodes */}
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1">Episode</h3>
          <ul className="space-y-2">
            {[
              {
                title: "Pilot",
                description:
                  "American football coach Ted Lasso is hired by a wealthy divorcée to coach the English soccer team AFC Richmond.",
                duration: "30",
                image: "/Popup01.png", 
              },
              {
                title: "Biscuits",
                description:
                  "It's Ted's first day of coaching, and fans aren’t happy. He makes little headway but remains undeterred as the team...",
                duration: "29",
                image: "/Popup02.png",
              },
              {
                title: "Trent Crimm: Independent",
                description:
                  "To arrange an in-depth exposé, Rebecca pairs cynical journalist Trent Crimm with Ted for a day.",
                duration: "30",
                image: "/Popup03.png",
              },
              {
                title: "For The Children",
                description:
                  "Rebecca hosts the team's annual charity benefit, where Ted stages a reconciliation between Roy and Jamie.",
                duration: "33",
                image: "/Popup04.png",
              },
              {
                title: "Tan Lines",
                description:
                  "With his wife and son visiting from America, Ted makes drastic changes to the lineup during a critical match.",
                duration: "31",
                image: "/Popup05.png",
              },
            ].map((episode, index) => (
              <li
                key={index}
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-600 flex items-start space-x-3"
              >
                {/* Episode Image */}
                <img
                  src={episode.image}
                  alt={episode.title}
                  className="w-18 h-10 md:w-26 md:h-14 rounded-lg object-cover flex-shrink-0"
                />
                {/* Episode Info */}
                <div className="flex flex-col justify-between items-start">
                  <div>
                    <h4 className="text-xs md:text-base font-semibold">{episode.title}</h4>
                    <p className="text-xs line-clamp-2 text-gray-400">{episode.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PopupSeriesPremium;