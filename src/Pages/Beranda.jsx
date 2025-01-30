import React from 'react';
import HeroSection from '../Components/HeroSection';
import Navbar from '../Components/Navbar';
import ContinueWatching from '../Components/ContinueWatching';
import Movies from '../Components/Movies';
import Footer from '../Components/Footer';
import ListMovies from '../Components/ListMovies';
import ListContinue from '../Components/ListContinue';

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function Beranda() {
  const shuffledMovies0 = shuffleArray(ListMovies);
  const shuffledMovies1 = shuffleArray(ListMovies);
  const shuffledMovies2 = shuffleArray(ListMovies);

  return (
    <>
      <Navbar />
      <HeroSection index={0} />
      <div className="bg-black p-4 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4 ml-4 md:ml-20 text-white">Melanjutkan Tonton Film</h2>
        <ContinueWatching movies={ListContinue} />
      </div>
      <div className="bg-black p-4 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4 ml-4 md:ml-20 text-white">Top Rating Film dan Series hari ini</h2>
        <Movies movies={shuffledMovies0} />
      </div>
      <div className="bg-black p-4 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4 ml-4 md:ml-20 text-white">Film Trending</h2>
        <Movies movies={shuffledMovies1} />
      </div>
      <div className="bg-black p-4 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4 ml-4 md:ml-20 text-white">Rilis Baru</h2>
        <Movies movies={shuffledMovies2} />
      </div>
      <Footer />
    </>
  );
}

export default Beranda;