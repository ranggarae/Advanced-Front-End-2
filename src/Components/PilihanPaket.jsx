import React from "react";
import { useNavigate } from "react-router-dom";

const PilihanPaket = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gray-950 text-white flex flex-col items-center py-12">
      {/* Premium Popup */}
      <div className="relative bg-gray-950 text-white rounded-lg shadow-lg p-6 w-full md:w-[600px] text-center z-10 mb-12">
        <h5 className="text-2xl font-bold mb-3">Kenapa Harus Berlangganan?</h5>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4 mt-9 h-48">
          <div className="flex flex-col items-center">
            <img src="/download.svg" alt="Download" className="w-6 h-6 mb-1" />
            <p className="text-xs">Download Konten Pilihan</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/ads.svg" alt="No Ads" className="w-6 h-6 mb-1" />
            <p className="text-xs">Tidak Ada Iklan</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/movie-roll.svg" alt="All Content" className="w-6 h-6 mb-1" />
            <p className="text-xs">Tonton Semua Konten</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/4k.svg" alt="4K" className="w-6 h-6 mb-1" />
            <p className="text-xs">Kualitas Maksimal Sampai Dengan 4K</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/tablet-cellphone.svg" alt="Devices" className="w-6 h-6 mb-1" />
            <p className="text-xs">Tonton di TV, Tablet, Mobile, dan Laptop</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/subtitlepremium.svg" alt="Subtitles" className="w-6 h-6 mb-1" />
            <p className="text-xs">Subtitle Untuk Konten Pilihan</p>
          </div>
        </div>
      </div>

      {/* Pilihan Paket */}
      <h2 className="text-3xl font-bold mb-4">Pilih Paketmu</h2>
      <p className="text-gray-400 mb-8">Temukan paket sesuai kebutuhanmu!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full px-4 md:px-0">
        {/* Individual Plan */}
        <div className="bg-gradient-to-b from-blue-600 to-blue-700 rounded-xl p-6 text-center">
          <div className="bg-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-full inline-block mb-4">Individual</div>
          <p className="text-lg font-bold mb-4">Mulai dari Rp49,990/bulan</p>
          <p className="text-sm mb-2">1 Akun</p>
          <ul className="text-sm text-gray-200 mb-6 space-y-2">
            <li>✓ Tidak ada iklan</li>
            <li>✓ Kualitas 720p</li>
            <li>✓ Download konten pilihan</li>
          </ul>
          <button className="bg-white text-blue-700 font-semibold px-4 py-2 rounded-md hover:bg-gray-200" onClick={() => navigate("/pembayaran")}>Langganan</button>
          <p className="text-xs text-gray-400 mt-2">Syarat dan Ketentuan Berlaku</p>
        </div>

        {/* Duo Plan */}
        <div className="bg-gradient-to-b from-blue-600 to-blue-700 rounded-xl p-6 text-center">
          <div className="bg-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-full inline-block mb-4">Berdua</div>
          <p className="text-lg font-bold mb-4">Mulai dari Rp79,990/bulan</p>
          <p className="text-sm mb-2">2 Akun</p>
          <ul className="text-sm text-gray-200 mb-6 space-y-2">
            <li>✓ Tidak ada iklan</li>
            <li>✓ Kualitas 1080p</li>
            <li>✓ Download konten pilihan</li>
          </ul>
          <button className="bg-white text-blue-700 font-semibold px-4 py-2 rounded-md hover:bg-gray-200" onClick={() => navigate("/pembayaran")}>Langganan</button>
          <p className="text-xs text-gray-400 mt-2">Syarat dan Ketentuan Berlaku</p>
        </div>

        {/* Family Plan */}
        <div className="bg-gradient-to-b from-blue-600 to-blue-700 rounded-xl p-6 text-center">
          <div className="bg-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-full inline-block mb-4">Keluarga</div>
          <p className="text-lg font-bold mb-4">Mulai dari Rp159,990/bulan</p>
          <p className="text-sm mb-2">5-7 Akun</p>
          <ul className="text-sm text-gray-200 mb-6 space-y-2">
            <li>✓ Tidak ada iklan</li>
            <li>✓ Kualitas 4K</li>
            <li>✓ Download konten pilihan</li>
          </ul>
          <button className="bg-white text-blue-700 font-semibold px-4 py-2 rounded-md hover:bg-gray-200" onClick={() => navigate("/pembayaran")}>Langganan</button>
          <p className="text-xs text-gray-400 mt-2">Syarat dan Ketentuan Berlaku</p>
        </div>
      </div>
    </div>
  );
};

export default PilihanPaket;