import React from "react";
import { useNavigate } from "react-router-dom";

const ProfilSaya = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex bg-black text-white justify-center items-center min-h-screen">
      <div className="absolute top-2 left-6 p-6 text-2xl md:text-3xl font-bold">
        Profil Saya
      </div>
      <div className="w-full max-w-4xl bg-gray-900 rounded-lg p-4 md:p-8 flex flex-col md:flex-row gap-4 md:gap-8 mx-2">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="relative">
            <img
              src="/avatar.png"
              alt="Profile"
              className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover"
            />
            <button className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full px-0.5 py-0.5 text-xs">
              Ubah Foto
            </button>
          </div>
          <p className="text-sm mt-2 text-gray-400">Maksimal 2MB</p>
          <div className="mt-4 w-full">
            <label className="block text-sm text-gray-400 mb-2">
              Nama Pengguna
            </label>
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
            <label className="block text-sm text-gray-400 mb-2">
              Kata Sandi
            </label>
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
          <button
            className="mt-6 bg-blue-600 w-full py-2 rounded-lg text-white font-semibold hover:bg-blue-700"
            onClick={() => navigate("/beranda")}
          >
            Simpan
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 h-48 bg-gray-800 rounded-lg p-4 md:p-6 flex flex-col items-center justify-center">
          <div className="flex items-center mb-2">
            <img
              src="/Warning.svg"
              alt="Warning"
              className="w-12 h-12 md:w-16 md:h-16 mr-2"
            />
            <p className="text-sm md:text-lg font-semibold text-gray-300 text-center">
              Saat ini anda belum berlangganan
            </p>
          </div>
          <p className="text-xs md:text-sm text-gray-400 text-center mb-4">
            Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!
          </p>
          <button
            className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            onClick={() => navigate("/paket")}
          >
            Mulai Berlangganan
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilSaya;