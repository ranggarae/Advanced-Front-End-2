import React from 'react';
import HeroSection from '../Components/HeroSection';
import Navbar from '../Components/Navbar';
import Genre from '../Components/Genre';
import MoviesContinue from '../Components/MoviesContinue';
import Movies from '../Components/Movies';
import Footer from '../Components/Footer';
import { useEffect, useState } from 'react';
import { getListMovies } from '../services/api/ListMoviesApi';
import { getListContinue } from '../services/api/ListContinueApi';


function Series() {
  const [movies, setMovies] = useState([]);
  const [continueMovies, setContinueMovies] = useState([]);

  useEffect(() => {
    getListMovies().then((data) => setMovies(data));
    getListContinue().then((data) => setContinueMovies(data));
  }, []);

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const shuffledMovies0 = shuffleArray(movies);
  const shuffledMovies1 = shuffleArray(movies);
  const shuffledMovies2 = shuffleArray(movies);
  const shuffledMovies3 = shuffleArray(continueMovies);
  const shuffledMovies4 = shuffleArray(movies);

  return (
    <>
      <Navbar />
      <div className="absolute top-14 md:top-28 left-4 md:left-72 z-50">
        <Genre />
      </div>
      <HeroSection index={1} redirectPath="/watchseries" redirectPath0="/detailseries" />
      <div className="bg-black p-4 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4 ml-4 md:ml-20 text-white">Melanjutkan Tonton Series</h2>
        <MoviesContinue movies={shuffledMovies3} redirectPath="/watchseries" redirectPath0="/detailseries" />
      </div>
      <div className="bg-black p-4 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4 ml-4 md:ml-20 text-white">Series Persembahan Chill</h2>
        <Movies movies={shuffledMovies0} redirectPath="/watchseries" redirectPath0="/detailseries" />
      </div>
      <div className="bg-black p-4 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4 ml-4 md:ml-20 text-white">Top Rating Series Hari Ini</h2>
        <Movies movies={shuffledMovies1} redirectPath="/watchseries" redirectPath0="/detailseries" />
      </div>
      <div className="bg-black p-4 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4 ml-4 md:ml-20 text-white">Series Trending</h2>
        <Movies movies={shuffledMovies2} redirectPath="/watchseries" redirectPath0="/detailseries" />
      </div>
      <div className="bg-black p-4 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4 ml-4 md:ml-20 text-white">Rilis Baru</h2>
        <Movies movies={shuffledMovies4} redirectPath="/watchseries" redirectPath0="/detailseries" />
      </div>
      <Footer />
    </>
  );
}


export default Series;