import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <nav className="bg-black text-white px-2 py-2 md:px-4 md:py-4 flex justify-between items-center">
      {/* Bagian Kiri */}
      <div className="flex items-center space-x-2.5 md:space-x-6">
      <button className="w-1/5 md:w-2/5 " onClick={() => navigate("/beranda")}> <img src="/logo.png" alt="Logo" /> </button>
        <Link to="/series" className="text-xs md:text-lg hover:text-gray-300">Series</Link>
        <Link to="/film" className="text-xs md:text-lg hover:text-gray-300">Film</Link>
        <Link to="/daftarsaya" className="text-xs md:text-lg hover:text-gray-300">Daftar Saya</Link>
      </div>

      {/* Bagian Kanan */}
      <div className="relative mr-4 md:mr-8">
        <img
          src="/avatar.png"
          alt="Avatar"
          className="w-4 h-4 md:w-10 md:h-10 rounded-full cursor-pointer"
          onClick={toggleDropdown}
        />
        {dropdownVisible && (
          <div className="absolute right-0 mt-2 w-28 md:w-40 bg-black border border-gray-700 rounded-md shadow-lg z-40">
            <Link to="/profil"
              className="block px-3 py-1 md:px-4 md:py-2 text-xs md:text-base  hover:bg-gray-700 hover:text-white"
              onClick={closeDropdown}>
              Profil Saya
            </Link>
            <Link to="/paket"
              className="block px-3 py-1 md:px-4 md:py-2 text-xs md:text-base  hover:bg-gray-700 hover:text-white"
              onClick={closeDropdown}>
              Ubah Premium
            </Link>
            <Link to="/"
              className="block px-3 py-1 md:px-4 md:py-2 text-xs md:text-base  hover:bg-gray-700 hover:text-white"
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