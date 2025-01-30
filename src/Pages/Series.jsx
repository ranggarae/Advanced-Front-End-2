import React from 'react';
import HeroSection from '../Components/HeroSection';
import Navbar from '../Components/Navbar';
import Genre from '../Components/Genre';
import ContinueWatching from '../Components/ContinueWatching';
import Movies from '../Components/Movies';
import Footer from '../Components/Footer';
import ListMovies from '../Components/ListMovies';

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function Series() {
  const shuffledMovies0 = shuffleArray(ListMovies);
  const shuffledMovies1 = shuffleArray(ListMovies);
  const shuffledMovies2 = shuffleArray(ListMovies);
  const shuffledMovies3 = shuffleArray(ListMovies);
  const shuffledMovies4 = shuffleArray(ListMovies);

  return (
    <>
      <Navbar />
      <div className="absolute top-16 md:top-28 left-4 md:left-32 z-40">
        <Genre />
      </div>
      <HeroSection index={1} redirectPath="/watchseries" redirectPath0="/detailseries" />
      <div className="bg-black p-4 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4 ml-4 md:ml-20 text-white">Melanjutkan Tonton Series</h2>
        <ContinueWatching movies={shuffledMovies3} redirectPath="/watchseries" redirectPath0="/detailseries" />
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