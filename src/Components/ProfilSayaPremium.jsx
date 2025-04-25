import React from "react";
import { useNavigate } from "react-router-dom";

const ProfilSaya = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center p-4">
      <div className="absolute top-28 md:top-24 left-6 md:left-80 text-2xl md:text-3xl font-bold">Profil Saya</div>
      <div className="w-full max-w-4xl bg-gray-900 rounded-lg p-4 md:p-8 flex flex-col md:flex-row gap-4 md:gap-8">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="relative">
            <img
              src="/avatar.png"
              alt="Profile"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover"
            />
            <button className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full px-0.5 py-0.5 text-xs">Ubah Foto</button>
          </div>
          <p className="text-sm mt-2 text-gray-400">Maksimal 2MB</p>
          <div className="mt-4 w-full">
            <label className="block text-sm text-gray-400 mb-2">Nama Pengguna</label>
            <div className="relative">
              <input
                type="text"
                value="William"
                className="w-full bg-gray-800 text-gray-300 rounded-lg px-4 py-2"
                readOnly
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                ✎
              </button>
            </div>
          </div>
          <div className="mt-4 w-full">
            <label className="block text-sm text-gray-400 mb-2">Email</label>
            <div className="relative">
              <input
                type="email"
                value="william1980@gmail.com"
                className="w-full bg-gray-800 text-gray-300 rounded-lg px-4 py-2"
                readOnly
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                ✎
              </button>
            </div>
          </div>
          <div className="mt-4 w-full">
            <label className="block text-sm text-gray-400 mb-2">Kata Sandi</label>
            <div className="relative">
              <input
                type="password"
                value="**********"
                className="w-full bg-gray-800 text-gray-300 rounded-lg px-4 py-2"
                readOnly
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                ✎
              </button>
            </div>
          </div>
          <button className="mt-6 bg-blue-600 w-full py-2 rounded-lg text-white font-semibold hover:bg-blue-700" onClick={() => navigate("/beranda")}>
            Simpan
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 h-48 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-4 md:p-6 flex flex-col justify-between text-white mt-4 md:mt-0">
          <div className="flex items-center">
            <span className="bg-blue-800 text-white text-xs font-semibold px-3 py-1 rounded-full">Aktif</span>
          </div>
          <div className="mt-2">
            <h2 className="text-lg font-semibold">Akun Premium Individual ✨</h2>
            <p className="text-sm mt-1">Saat ini kamu sedang menggunakan akses akun premium</p>
          </div>
          <p className="text-xs mt-4">Berlaku hingga 31 Desember 2025</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilSaya;