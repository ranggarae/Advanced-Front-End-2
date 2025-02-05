import React from 'react';
import backgroundImage from '../assets/register.png'; 
import { Link } from "react-router-dom";


const Register = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`, 
      }}
    >
      <div className="bg-black/40 p-8 rounded-lg shadow-lg w-72">
        <div className="flex items-center justify-center mb-6">
          <img src="/logo.png" alt="Logo" className="w-6/12" />
        </div>
        <h3 className="text-white text-center text-lg">Daftar</h3>
        <p className="text-gray-400 text-center mb-6">Selamat datang!</p>
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-300 text-sm mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white"
              placeholder="Masukkan username"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-300 text-sm mb-2"
            >
              Kata Sandi
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white"
                placeholder="Masukkan kata sandi"
              />
              <button
                type="button"
                className="absolute right-3 top-2 text-gray-400"
              >
                👁️
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirm-password"
              className="block text-gray-300 text-sm mb-2"
            >
              Konfirmasi Kata Sandi
            </label>
            <div className="relative">
              <input
                type="password"
                id="confirm-password"
                className="w-full px-3 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white"
                placeholder="Masukkan kata sandi"
              />
              <button
                type="button"
                className="absolute right-3 top-2 text-gray-400"
              >
                👁️
              </button>
            </div>
          </div>
          <div className="flex justify-between text-sm mb-6">
          <Link to="/" className="text-gray-400">
  Sudah punya akun? <span className="text-blue-500">Masuk</span>
</Link>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Daftar
          </button>
          <div className="text-center">
            <p className="text-gray-400 mb-2">Atau</p>
            <button
              type="button"
              className="w-full bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200 flex items-center justify-center"
            >
              <img
                src="/google.png"
                alt="Google Logo"
                className="w-5 h-5 mr-2"
              />
              Daftar dengan Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
