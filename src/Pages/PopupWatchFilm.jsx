import Beranda from "./Beranda";
import Film from "./Film";
import DaftarSaya from "./DaftarSaya";
import Series from "./Series";
import Profil from "./Profil";
import ProfilPremium from "./ProfilPremium";
import WatchFilm from "../Components/WatchFilm";
import WatchSeries from "../Components/WatchSeries";


export function PopupWatchFilmBeranda() {
    return (
      <div>
        <Beranda />
        <WatchFilm />
      </div>
    );
  }

  export function PopupWatchFilm() {
    return (
      <div>
        <Film />
        <WatchFilm redirectPath="/film" />
      </div>
    );
  }

  export function PopupWatchFilmDaftarSaya() {
    return (
      <div>
        <DaftarSaya />
        <WatchFilm redirectPath="/daftarsaya" />
      </div>
    );
  }

  export function PopupWatchFilmProfil() {
    return (
      <div>
        <Profil />
        <WatchFilm redirectPath="/profil" />
      </div>
    );
  }

  export function PopupWatchFilmProfilPremium() {
    return (
      <div>
        <ProfilPremium />
        <WatchFilm redirectPath="/profilpremium" />
      </div>
    );
  }

  export function PopupWatchSeries() {
    return (
      <div>
        <Series />
        <WatchSeries />
      </div>
    );
  }