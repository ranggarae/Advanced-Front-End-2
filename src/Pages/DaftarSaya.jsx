import MyList from "../Components/MyList";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ListMovies from '../Components/ListMovies'


function DaftarSaya() {
  return (
    <div>
      <Navbar />
      <MyList movies={ListMovies} redirectPath="/watchdaftarsaya" redirectPath0="/detaildaftarsaya" />
      <Footer />
    </div>
  );
}

export default DaftarSaya;