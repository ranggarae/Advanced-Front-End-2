import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Beranda from "./Pages/Beranda";
import Series from "./Pages/Series";
import Film from "./Pages/Film";
import DaftarSaya from "./Pages/DaftarSaya";
import Profil from "./Pages/Profil";
import Paket from "./Pages/Paket";
import Pembayaran from "./Pages/Pembayaran";
import KonfirmasiPembayaran from "./Pages/KonfirmasiPembayaran";
import ProfilPremium from "./Pages/ProfilPremium";
import { PopupWatchFilmBeranda, PopupWatchFilm, PopupWatchFilmDaftarSaya, PopupWatchSeries, PopupWatchFilmProfil, PopupWatchFilmProfilPremium } from "./Pages/PopupWatchFilm";
import { DetailFilmPremiumBeranda, DetailFilmPremium, DetailFilmPremiumDaftarSaya, DetailSeriesPremium, DetailFilmPremiumProfil, DetailFilmPremiumProfilPremium} from "./Pages/PopupDetailFilm";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/series" element={<Series />} />
        <Route path="/film" element={<Film />} />
        <Route path="/daftarsaya" element={<DaftarSaya />} />
        <Route path="/watchberanda" element={<PopupWatchFilmBeranda />} />
        <Route path="/watchfilm" element={<PopupWatchFilm />} />
        <Route path="/watchdaftarsaya" element={<PopupWatchFilmDaftarSaya />} />
        <Route path="/watchprofil" element={<PopupWatchFilmProfil />} />
        <Route path="/watchprofilpremium" element={<PopupWatchFilmProfilPremium />} />
        <Route path="/watchseries" element={<PopupWatchSeries />} />
        <Route path="/detailberanda" element={<DetailFilmPremiumBeranda />} />
        <Route path="/detailfilm" element={<DetailFilmPremium />} />
        <Route path="/detaildaftarsaya" element={<DetailFilmPremiumDaftarSaya />} />
        <Route path="/detailprofil" element={<DetailFilmPremiumProfil />} />
        <Route path="/detailprofilpremium" element={<DetailFilmPremiumProfilPremium />} />
        <Route path="/detailseries" element={<DetailSeriesPremium />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/paket" element={<Paket />} />
        <Route path="/pembayaran" element={<Pembayaran />} />
        <Route path="/konfirmasipembayaran" element={<KonfirmasiPembayaran />} />
        <Route path="/profilpremium" element={<ProfilPremium />} />
      </Routes>
    </Router>
  );
}
