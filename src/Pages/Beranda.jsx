import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../store/redux/MoviesReducer'; // path sesuai struktur
import { getListMovies } from '../services/api/ListMoviesApi';
import { getListContinue } from '../services/api/ListContinueApi';

import HeroSection from '../Components/HeroSection';
import Navbar from '../Components/Navbar';
import Movies from '../Components/Movies';
import Footer from '../Components/Footer';
import MoviesContinue from '../Components/MoviesContinue';

function Beranda() {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.list); // dari Redux store
  const [continueMovies, setContinueMovies] = useState([]);

  useEffect(() => {
    getListMovies().then(data => dispatch(setMovies(data)));
    getListContinue().then(data => setContinueMovies(data));
  }, [dispatch]);

  const shuffleArray = (array) => {
  if (!Array.isArray(array)) return [];
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


  return (
    <>
      <Navbar />
      <HeroSection index={0} />
      <div className="bg-black p-4 md:p-8">
        <h2 className="text-lg md:text-2xl font-bold mb-4 ml-4 md:ml-20 text-white">Melanjutkan Tonton Film</h2>
        <MoviesContinue movies={continueMovies} />
      </div>
      <div className="bg-black p-4 md:p-8">
        <h2 className="text-lg md:text-2xl font-bold mb-4 ml-4 md:ml-20 text-white">Top Rating Film dan Series hari ini</h2>
        <Movies movies={shuffledMovies0} />
      </div>
      <div className="bg-black p-4 md:p-8">
        <h2 className="text-lg md:text-2xl font-bold mb-4 ml-4 md:ml-20 text-white">Film Trending</h2>
        <Movies movies={shuffledMovies1} />
      </div>
      <div className="bg-black p-4 md:p-8">
        <h2 className="text-lg md:text-2xl font-bold mb-4 ml-4 md:ml-20 text-white">Rilis Baru</h2>
        <Movies movies={shuffledMovies2} />
      </div>
      <Footer />
    </>
  );
}

export default Beranda;
