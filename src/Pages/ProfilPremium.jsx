import ProfilSayaPremium from "../Components/ProfilSayaPremium";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Movies from "../Components/Movies";
import { useEffect, useState } from 'react';
import { getListMovies } from '../services/api/ListMoviesApi';



function ProfilPremium() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getListMovies().then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <Navbar />
      <ProfilSayaPremium />
      <div className="bg-black p-8">
        <h2 className="text-3xl font-bold mb-4 ml-20 text-white">Daftar Saya</h2>
        <Movies movies={movies} redirectPath="/watchprofilpremium" redirectPath0="/detailprofilpremium" />
      </div>
      <Footer />
    </div>
  );
}


export default ProfilPremium;