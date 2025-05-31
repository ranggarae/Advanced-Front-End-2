import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WatchSeries from "./WatchSeries";
import PopupSeriesPremium from "./PopupSeriesPremium";
import { addMovie, deleteMovie } from "../services/api/ListMoviesApi";



const Movies = ({ movies, redirectPath }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showWatch, setShowWatch] = useState(false); 
  const [showDetail, setShowDetail] = useState(false); 

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= movies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const isInMyList = (movie) => {
    const myList = JSON.parse(localStorage.getItem("mylist") || "[]");
    return myList.some((m) => m.title === movie.title);
  };
  
  const toggleMyList = async (movie) => {
  const myList = JSON.parse(localStorage.getItem("mylist") || "[]");
  const exists = myList.some((m) => m.title === movie.title);
  let newList;

  if (exists) {
    newList = myList.filter((m) => m.title !== movie.title);
    await deleteMovie(movie.id); // Hapus dari database jika ada
  } else {
    newList = [...myList, movie];
    await addMovie(movie); // Tambah ke database
  }

  localStorage.setItem("mylist", JSON.stringify(newList));
};


  const Hover = ({ movie }) => {
    const [hover, setHover] = useState(false);
    const [added, setAdded] = useState(isInMyList(movie));
    const navigate = useNavigate();

    // Fungsi untuk toggle hover state
    const toggleHover = () => {
      setHover((prevHover) => !prevHover);
    };

    return (
      <div
        className={`relative bg-gray-900 justify-items-center rounded-lg overflow-hidden shadow-md mx-2 transition-all duration-300 ${
          hover ? "w-[150px] h-[200px] md:w-[250px] md:h-[300px] z-50" : "w-[120px] h-[180px] md:w-[240px] md:h-[360px]"
        }`}
        onClick={toggleHover} // Menggunakan onClick untuk toggle hover
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
            <div className="flex items-center space-x-4 md:space-x-6">
              <button className="w-8 h-8 md:w-10 md:h-10 bg-gray-900 rounded-full flex items-center justify-center mb-2"
                onClick={() => setShowWatch(true)}>
                <img src="play.svg" alt="play" />
              </button>

              <button
              className="w-8 h-8 md:w-10 md:h-10 bg-gray-900 rounded-full flex items-center justify-center mb-2"
              onClick={(e) => {
              e.stopPropagation();
              toggleMyList(movie);
              setAdded(!added);
              }}
              >
              <img src={added ? "check.svg" : "Add.svg"} alt="add" />
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
              <h3 className="text-white text-xs md:text-2xl font-bold">{movie.title}</h3>
              <span className="text-gray-300 text-xs md:text-2xl">⭐ {movie.rating}</span>
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
        <div className="flex overflow-x-scroll md:overflow-x-hidden w-full">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 240}px)` }}
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

export default Movies;