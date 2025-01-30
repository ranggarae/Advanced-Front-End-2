import Beranda from "./Beranda";
import Film from "./Film";
import DaftarSaya from "./DaftarSaya";
import Series from "./Series";
import Profil from "./Profil";
import ProfilPremium from "./ProfilPremium";
import PopupFilmPremium from "../Components/PopupFilmPremium";
import PopupSeriesPremium from "../Components/PopupSeriesPremium";

  export function DetailFilmPremiumBeranda() {
    return (
      <div>
        <Beranda />
        <PopupFilmPremium />
      </div>
    );
  }

  export function DetailFilmPremium() {
    return (
      <div>
        <Film />
        <PopupFilmPremium redirectPath0="/film" />
      </div>
    );
  }

  export function DetailFilmPremiumDaftarSaya() {
    return (
      <div>
        <DaftarSaya />
        <PopupFilmPremium redirectPath0="/daftarsaya" />
      </div>
    );
  }

  export function DetailFilmPremiumProfil() {
    return (
      <div>
        <Profil />
        <PopupFilmPremium redirectPath0="/profil" />
      </div>
    );
  }

  export function DetailFilmPremiumProfilPremium() {
    return (
      <div>
        <ProfilPremium />
        <PopupFilmPremium redirectPath0="/profilpremium" />
      </div>
    );
  }

  export function DetailSeriesPremium() {
    return (
      <div>
        <Series />
        <PopupSeriesPremium redirectPath0="/series" />
      </div>
    );
  }
