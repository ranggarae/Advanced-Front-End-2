import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import MyList from "../Components/MyList";
import { getListMovies } from "../services/api/ListMoviesApi";

function DaftarSaya() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getListMovies().then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <Navbar />
      <MyList
        movies={movies}
        redirectPath="/watchdaftarsaya"
        redirectPath0="/detaildaftarsaya"
      />
      <Footer />
    </div>
  );
}

export default DaftarSaya;
