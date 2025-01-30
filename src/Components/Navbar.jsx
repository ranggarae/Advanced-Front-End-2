import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <nav className="bg-black text-white px-2 py-2 md:px-4 md:py-2 flex justify-between items-center">
      {/* Bagian Kiri */}
      <div className="flex items-center space-x-2 md:space-x-4">
        <img src="/logo.png" alt="Logo" className="w-6 h-6 md:w-8 md:h-8" />
        <Link to="/beranda" className="text-lg md:text-xl font-bold">CHILL</Link>
        <Link to="/series" className="text-sm md:text-base hover:text-gray-300">Series</Link>
        <Link to="/film" className="text-sm md:text-base hover:text-gray-300">Film</Link>
        <Link to="/daftarsaya" className="text-sm md:text-base hover:text-gray-300">Daftar Saya</Link>
      </div>

      {/* Bagian Kanan */}
      <div className="relative">
        <img
          src="/avatar.png"
          alt="Avatar"
          className="w-6 h-6 md:w-8 md:h-8 rounded-full cursor-pointer"
          onClick={toggleDropdown}
        />
        {dropdownVisible && (
          <div className="absolute right-0 mt-2 w-40 md:w-48 bg-black border border-gray-700 rounded-md shadow-lg z-40">
            <Link to="/profil"
              className="block px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm hover:bg-gray-700 hover:text-white"
              onClick={closeDropdown}>
              Profil Saya
            </Link>
            <Link to="/paket"
              className="block px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm hover:bg-gray-700 hover:text-white"
              onClick={closeDropdown}>
              Ubah Premium
            </Link>
            <Link to="/"
              className="block px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm hover:bg-gray-700 hover:text-white"
              onClick={closeDropdown}>
              Keluar
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;