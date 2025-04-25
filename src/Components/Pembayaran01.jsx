import React from "react";
import { useNavigate } from "react-router-dom";

const Pembayaran01 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col justify-start items-center py-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 self-start ml-4 md:ml-52">Ringkasan Pembayaran</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl px-4 md:px-0">
        {/* Paket Pilihan */}
        <div className="bg-gradient-to-b from-blue-600 to-blue-700 rounded-xl p-6 md:p-8 text-center w-full">
          <div className="bg-gray-800 text-white text-lg font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full inline-block mb-4">Individual</div>
          <p className="text-xl md:text-2xl font-bold mb-4">Mulai dari Rp49,990/bulan</p>
          <ul className="text-lg md:text-xl text-gray-200 mb-6 space-y-2">
            <li>✓ Tidak ada iklan</li>
            <li>✓ Kualitas 720p</li>
            <li>✓ Download konten pilihan</li>
          </ul>
          <button className="bg-white text-blue-700 font-semibold px-4 md:px-6 py-2 md:py-3 text-lg rounded-md hover:bg-gray-200" onClick={() => navigate("/pembayaran")}>Langganan</button>
          <p className="text-sm md:text-base text-gray-400 mt-2">Syarat dan Ketentuan Berlaku</p>
        </div>

        {/* Ringkasan Pembayaran */}
        <div className="bg-gray-800 rounded-xl p-6 md:p-8 w-full">
          {/* Metode Pembayaran */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Metode Pembayaran</h3>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 border border-gray-700 px-4 py-2 rounded-lg bg-gray-900 text-gray-400 hover:border-blue-500 focus:border-blue-500">
                <img src="/visa.svg" alt="Visa" className="w-36 md:w-full" />
              </button>
              <button className="flex items-center gap-2 border border-gray-700 px-4 py-2 rounded-lg bg-gray-900 text-gray-400 hover:border-blue-500 focus:border-blue-500">
                <img src="/bca.svg" alt="BCA" className="w-36 md:w-full" />
              </button>
            </div>
          </div>

          {/* Kode Voucher */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Kode Voucher (Jika ada)</h3>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Masukkan kode voucher"
                className="px-2 py-0 rounded-lg bg-gray-900 text-gray-400 text-xs border border-gray-700 focus:border-blue-500 focus:outline-none"
              />
              <button className="px-4 py-2 bg-gray-700 rounded-lg text-white text-xs hover:bg-gray-600">
                Gunakan
              </button>
            </div>
          </div>

          {/* Ringkasan Transaksi */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Ringkasan Transaksi</h3>
            <div className="text-sm text-gray-400 space-y-2">
              <div className="flex justify-between">
                <span>Paket Premium Individual</span>
                <span>Rp49,000</span>
              </div>
              <div className="flex justify-between">
                <span>Biaya Admin</span>
                <span>Rp3,000</span>
              </div>
              <div className="flex justify-between font-bold text-white">
                <span>Total Pembayaran</span>
                <span>Rp52,000</span>
              </div>
            </div>
          </div>

          {/* Tombol Bayar */}
          <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700" onClick={() => navigate("/konfirmasipembayaran")}>
            Bayar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pembayaran01;