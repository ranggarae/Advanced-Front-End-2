import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const WatchFilm = ({onClose }) => {
  const [isVisible, ] = useState(true);
  const [subtitlePopupVisible, setSubtitlePopupVisible] = useState(false);
  const [speedPopupVisible, setSpeedPopupVisible] = useState(false);
  const [premiumPopupVisible, setPremiumPopupVisible] = useState(false);
  const navigate = useNavigate();

  // Ref untuk tombol Subtitles, Speedometer, dan Premium
  const subtitleButtonRef = useRef(null);
  const speedometerButtonRef = useRef(null);
  const premiumButtonRef = useRef(null);

  const closeAllPopups = () => {
    setSubtitlePopupVisible(false);
    setSpeedPopupVisible(false);
    setPremiumPopupVisible(false);    
  };

  const handleSubtitleClick = () => {
    closeAllPopups();
    setSubtitlePopupVisible(!subtitlePopupVisible);
  };

  const handleSpeedClick = () => {
    closeAllPopups();
    setSpeedPopupVisible(!speedPopupVisible);
  };

  const handlePremiumClick = () => {
    closeAllPopups();
    setPremiumPopupVisible(!premiumPopupVisible);
  };

  if (!isVisible) return null;

  // Fungsi untuk mendapatkan posisi popup Subtitles
  const getSubtitlePopupPosition = () => {
    if (subtitleButtonRef.current) {
      const buttonRect = subtitleButtonRef.current.getBoundingClientRect();
      return {
        top: buttonRect.top - 95, // 95px di atas tombol
        left: buttonRect.left + buttonRect.width / 2, // Tengah horizontal
        transform: "translateX(-65%)", // Pusatkan popup
      };
    }
    return {};
  };

  // Fungsi untuk mendapatkan posisi popup Speedometer
  const getSpeedometerPopupPosition = () => {
    if (speedometerButtonRef.current) {
      const buttonRect = speedometerButtonRef.current.getBoundingClientRect();
      return {
        top: buttonRect.top - 145, // 95px di atas tombol
        left: buttonRect.left + buttonRect.width / 2, // Tengah horizontal
        transform: "translateX(-70%)", // Pusatkan popup
      };
    }
    return {};
  };

  // Fungsi untuk mendapatkan posisi popup Premium
  const getPremiumPopupPosition = () => {
    if (premiumButtonRef.current) {
      const buttonRect = premiumButtonRef.current.getBoundingClientRect();
      return {
        top: buttonRect.top - 330, // 95px di atas tombol
        left: buttonRect.left + buttonRect.width / 2, // Tengah horizontal
        transform: "translateX(-105%)", // Pusatkan popup
      };
    }
    return {};
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      {/* Popup Container */}
      <div className="relative aspect-auto bg-black rounded-lg shadow-lg overflow-hidden z-50">
        {/* Close Button */}
        <button
          className="absolute top-1 right-1 bg-gray-800/70 rounded-full size-5 md:size-8 flex items-center justify-center z-50"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Video Content */}
        <div className="relative">
          {/* Video Placeholder */}
          <img
            src="/WatchFilm.svg"
            alt="Video Placeholder"
            className="object-cover"
          />

          {/* Pause Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white/90 rounded-full size-4 md:size-8 flex items-center justify-center">
              <img
                src="/pause.svg"
                alt="Pause"
                className="w-full h-full"
              />
            </button>
          </div>

          {/* Lewati Intro */}
          <button
            className="absolute bottom-9 left-1 md:bottom-20 md:left-8 bg-white/60 text-black px-1 py-1 md:px-4 md:py-2 rounded-full text-xs"
          >
            Lewati Intro
          </button>
        </div>

        {/* Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 flex items-center justify-between px-1 py-1 md:px-8 md:py-4">
          {/* Left Controls */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Play Button */}
            <button>
              <img
                src="/playfilm.svg"
                alt="Play"
                className="size-4"
              />
            </button>

            {/* Rewind Button */}
            <button>
              <img
                src="/rewind.svg"
                alt="Rewind"
                className="size-4"
              />
            </button>

            {/* Forward Button */}
            <button>
              <img
                src="/fastforward.svg"
                alt="Forward"
                className="size-4"
              />
            </button>

            {/* Volume */}
            <button>
              <img
                src="/volumehigh.svg"
                alt="Volume"
                className="size-4"
              />
            </button>
          </div>

          {/* Video Info */}
          <div className="text-center">
            <p className="text-white text-xs md:text-lg">A Man Called Otto "Example"</p>
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-4 md:space-x-6 relative">
            {/* Subtitles Button */}
            <button
              ref={subtitleButtonRef} // Tambahkan ref ke tombol Subtitles
              onClick={handleSubtitleClick}
              className="relative"
            >
              <img
                src="/subtitle.svg"
                alt="Subtitles"
                className="size-4"
              />
            </button>

            {/* Speedometer Button */}
            <button
              ref={speedometerButtonRef} // Tambahkan ref ke tombol Speedometer
              onClick={handleSpeedClick}
              className="relative"
            >
              <img
                src="/speedometer.svg"
                alt="Speed"
                className="size-4"
              />
            </button>

            {/* Fullscreen Button */}
            <button
              ref={premiumButtonRef} // Tambahkan ref ke tombol Premium
              onClick={handlePremiumClick}
              className="relative"
            >
              <img
                src="/fullscreen.svg"
                alt="Fullscreen"
                className="size-4"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Subtitles Popup */}
      {subtitlePopupVisible && (
        <div
          className="absolute bg-gray-800 text-white rounded-lg py-1 px-2 w-44 z-50"
          style={getSubtitlePopupPosition()} // Atur posisi popup
        >
          <div className="flex justify-between">
            <div>
              <h4 className="font-semibold mb-1 text-sm">Audio</h4>
              <p className="text-xs">✔ Bahasa Inggris</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-sm">Terjemahan</h4>
              <p className="text-xs">✔ Bahasa Indonesia</p>
              <p className="text-xs">Bahasa Inggris</p>
            </div>
          </div>
        </div>
      )}

      {/* Speed Popup */}
      {speedPopupVisible && (
        <div
          className="absolute bg-gray-800 text-white rounded-lg p-4 py-1 w-28 z-50"
          style={getSpeedometerPopupPosition()} // Atur posisi popup
        >
          <h4 className="font-semibold mb-2 text-sm">Kecepatan</h4>
          <ul className="space-y-1">
            <li className="text-xs">0.5x</li>
            <li className="text-xs">0.75x</li>
            <li className="text-xs font-bold">1x (Normal)</li>
            <li className="text-xs">1.25x</li>
            <li className="text-xs">1.5x</li>
          </ul>
        </div>
      )}

      {/* Premium Popup */}
      {premiumPopupVisible && (
        <div
          className="absolute bg-black text-white rounded-lg shadow-lg p-4 md:p-6 w-64 md:w-96 text-center z-50"
          style={getPremiumPopupPosition()} // Atur posisi popup
        >
          <h4 className="text-base font-bold mb-2">Layanan Premium🌟</h4>
          <p className="text-xs mb-4">Tingkatkan paket anda untuk dapat menonton video ini.</p>
          <h5 className="text-sm font-semibold mb-3">Kenapa Harus Berlangganan?</h5>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col items-center">
              <img src="/download.svg" alt="Download" className="size-4 mb-1" />
              <p className="text-xs">Download Konten Pilihan</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/ads.svg" alt="No Ads" className="size-4 mb-1" />
              <p className="text-xs">Tidak Ada Iklan</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/movie-roll.svg" alt="All Content" className="size-4 mb-1" />
              <p className="text-xs">Tonton Semua Konten</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/4k.svg" alt="4K" className="size-4 mb-1" />
              <p className="text-xs">Kualitas Maksimal Sampai Dengan 4K</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/tablet-cellphone.svg" alt="Devices" className="size-4 mb-1" />
              <p className="text-xs">Tonton di TV, Tablet, Mobile, dan Laptop</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/subtitlepremium.svg" alt="Subtitles" className="size-4 mb-1" />
              <p className="text-xs">Subtitle Untuk Konten Pilihan</p>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-2 py-2 rounded-md text-xs hover:bg-blue-700" onClick={() => navigate("/paket")}>
            Ubah Jadi Premium
          </button>
        </div>
      )}
    </div>
  );
};

export default WatchFilm;