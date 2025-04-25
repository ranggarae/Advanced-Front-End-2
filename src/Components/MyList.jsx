import React, { useState } from "react";
import WatchSeries from "./WatchSeries";
import PopupSeriesPremium from "./PopupSeriesPremium";

const MyList = ({ redirectPath }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showWatch, setShowWatch] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const myList = JSON.parse(localStorage.getItem("mylist") || "[]");

  const removeFromMyList = (title) => {
    const newList = myList.filter((m) => m.title !== title);
    localStorage.setItem("mylist", JSON.stringify(newList));
    setRefresh(!refresh); // paksa re-render
  };

  return (
    <div className="px-4 md:px-16 py-4 bg-black text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-5">Daftar Saya</h1>

      {myList.length === 0 ? (
        <div className="text-center text-gray-400 py-20">
          <p className="text-lg">Belum ada film di daftar kamu.</p>
        </div>
      ) : (
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {myList.map((movie, index) => (
            <div
              key={index}
              className={`relative bg-gray-900 rounded-lg overflow-hidden shadow-md transition-all duration-300 ${
                activeIndex === index
                  ? "w-[90px] h-[90px] md:w-[150px] md:h-[150px] lg:w-[270px] lg:h-[225px] z-50"
                  : "w-[75px] h-[115px] md:w-[150px] md:h-[225px] lg:w-[175px] lg:h-[260px]"
              }`}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <img
                src={activeIndex === index ? movie.image : movie.image1}
                alt={movie.title}
                className="w-full object-cover rounded-lg"
              />

              {activeIndex !== index && (
                <div className="absolute bottom-0 left-0 w-full p-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-white text-xs font-bold">
                      {movie.title}
                    </h3>
                  </div>
                </div>
              )}

              {activeIndex === index && (
                <div className="flex inset-x-0 bottom-0 p-2 md:p-4 flex-col">
                  <div className="flex items-center space-x-3 md:space-x-5">
                    <button
                      className="size-6 md:size-8 bg-gray-900 rounded-full flex items-center justify-center mb-2"
                      onClick={() => setShowWatch(true)}
                    >
                      <img src="play.svg" alt="play" />
                    </button>

                    <button
                      className="size-6 md:size-8 bg-gray-900 rounded-full flex items-center justify-center mb-2"
                      onClick={() => setShowDetail(true)}
                    >
                      <img src="down.svg" alt="detail" />
                    </button>

                    <button
                      className="size-6 md:size-8 bg-gray-900 rounded-full flex items-center justify-center mb-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFromMyList(movie.title);
                      }}
                    >
                      <img src="check.svg" alt="remove" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {showWatch && (
        <WatchSeries
          redirectPath={redirectPath}
          onClose={() => setShowWatch(false)}
        />
      )}
      {showDetail && (
        <PopupSeriesPremium
          redirectPath={redirectPath}
          onClose={() => setShowDetail(false)}
        />
      )}
    </div>
  );
};

export default MyList;
