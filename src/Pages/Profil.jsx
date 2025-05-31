import Navbar from "../Components/Navbar";
import ProfilSaya from "../Components/ProfilSaya";
import Footer from "../Components/Footer";
import Movies from "../Components/Movies";
import { useEffect, useState } from 'react';
import { getListMovies } from '../services/api/ListMoviesApi';


function Profil() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getListMovies().then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <Navbar />
      <ProfilSaya />
      <div className="bg-black p-8">
        <h2 className="text-3xl font-bold mb-4 ml-20 text-white">Daftar Saya</h2>
        <Movies movies={movies} redirectPath="/watchprofil" redirectPath0="/detailprofil" />
      </div>
      <Footer />
    </div>
  );
}


export default Profil;