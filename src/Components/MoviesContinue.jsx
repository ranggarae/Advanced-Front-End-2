import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import WatchSeries from "./WatchSeries";
import PopupSeriesPremium from "./PopupSeriesPremium"; 


const MoviesContinue = ({ movies, redirectPath }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(300); // Default width, akan diupdate berdasarkan lebar layar
  const containerRef = useRef(null); // Ref untuk container film
  const [showWatch, setShowWatch] = useState(false); 
  const [showDetail, setShowDetail] = useState(false); 

  // Fungsi untuk mengupdate lebar item film berdasarkan lebar layar
  useEffect(() => {
    const updateItemWidth = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        // Menentukan lebar item film berdasarkan lebar layar
        if (containerWidth >= 1024) {
          setItemWidth(80); // Desktop: lebar item 300px
        } else if (containerWidth >= 768) {
          setItemWidth(190); // Tablet: lebar item 250px
        } else if (containerWidth >= 480) {
          setItemWidth(250); // Mobile landscape: lebar item 200px
        } else {
          setItemWidth(150); // Mobile portrait: lebar item 150px
        }
      }
    };

    // Panggil fungsi updateItemWidth saat komponen dimount dan saat ukuran layar berubah
    updateItemWidth();
    window.addEventListener("resize", updateItemWidth);

    // Bersihkan event listener saat komponen di-unmount
    return () => window.removeEventListener("resize", updateItemWidth);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 0.8
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === movies.length - 1 ? 0 : prevIndex + 0.8
    );
  };

  const Hover = ({ movie }) => {
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();

    // Fungsi untuk toggle hover state
    const toggleHover = () => {
      setHover((prevHover) => !prevHover);
    };

    return (
      <div
        className={`relative bg-gray-900 justify-items-center rounded-lg overflow-hidden shadow-md mx-2 transition-all duration-300 ${
          hover ? "w-[180px] h-[210px] md:w-[325px] md:h-[325px]" : "w-[150px] h-[85px] md:w-[305px] md:h-[170px]"
        }`}
        onClick={toggleHover} // Menggunakan onClick untuk toggle hover
      >
        {/* Gambar Film */}
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full object-cover rounded-lg"
        />

        {hover && (
          <div className="absolute inset-x-0 bottom-0 p-2 md:p-4 flex flex-col">
            {/* Kontrol */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <button className="w-8 h-8 md:w-10 md:h-10 bg-gray-900 rounded-full flex items-center justify-center mb-2"
                onClick={() => setShowWatch(true)}>
                <img src="play.svg" alt="play" />
              </button>

              <button className="w-8 h-8 md:w-10 md:h-10 bg-gray-900 rounded-full flex items-center justify-center mb-2"
                onClick={() => setShowDetail(true)}>
                <img src="down.svg" alt="play" />
              </button>
            </div>

            {/* Progress Bar */}
            <div>
              <div className="w-full h-1 bg-gray-600 rounded-full">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: `${movie.progress}%` }}
                ></div>
              </div>
              <p className="text-xs md:text-sm text-gray-300 mt-1 md:mt-2">{movie.duration}</p>
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
              <h3 className="text-white text-xs md:text-xl font-bold">{movie.title}</h3>
              <span className="text-gray-300 text-xs md:text-xl">⭐ {movie.rating}</span>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="relative w-full bg-black text-white p-0">
      <div className="flex items-center hide">
        {/* Tombol Sebelumnya */}
        <button
          onClick={handlePrev}
          className="hidden md:inline-flex bg-gray-800 rounded-full w-8 h-8 md:w-10 md:h-10 items-center justify-center mr-0 md:mr-0"
        >
          &lt;
        </button>

        {/* Daftar Film */}
        <div className="flex overflow-x-scroll md:overflow-x-hidden w-full" ref={containerRef}>
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * itemWidth}px)` }}
          >
            {movies.map((movie, index) => (
              <Hover key={index} movie={movie} />
            ))}
          </div>
        </div>

        {/* Tombol Berikutnya */}
        <button
          onClick={handleNext}
          className="hidden md:inline-flex bg-gray-800 rounded-full w-8 h-8 md:w-10 md:h-10 items-center justify-center ml-0 md:ml-0"
        >
          &gt;
        </button>
      </div>
      {showWatch && (
        <WatchSeries redirectPath={redirectPath} onClose={() => setShowWatch(false)} />
      )}
      {showDetail && (
        <PopupSeriesPremium redirectPath={redirectPath} onClose={() => setShowDetail(false)} />
      )}
    </div>
  );
};

export default MoviesContinue;