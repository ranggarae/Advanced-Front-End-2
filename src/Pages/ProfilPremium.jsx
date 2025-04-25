import ProfilSayaPremium from "../Components/ProfilSayaPremium";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Movies from "../Components/Movies";
import ListMovies from '../Data/ListMovies.json';
import ListContinue from '../Data/ListContinue.json';


function ProfilPremium() {
  return (
    <div>
      <Navbar />
      <ProfilSayaPremium />
      <div className="bg-black p-8">
          <h2 className="text-3xl font-bold mb-4 ml-20 text-white">Daftar Saya</h2>
          <Movies movies={ListMovies} redirectPath="/watchprofilpremium" redirectPath0="/detailprofilpremium" />
        </div>
      <Footer />
    </div>
  );
}

export default ProfilPremium;