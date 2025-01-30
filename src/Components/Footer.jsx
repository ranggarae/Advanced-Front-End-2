import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4 md:px-16">
      <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
        {/* Logo dan Hak Cipta */}
        <div>
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="w-8 h-8" />
            <div className="text-xl font-bold">CHILL</div>
          </div>
          <p className="text-sm mt-2">@2023 Chill All Rights Reserved.</p>
        </div>

        {/* Daftar Genre */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Genre</h4>
          <div className="grid grid-cols-2 gap-y-2">
            <a href="/" className="text-sm hover:text-gray-300">Aksi</a>
            <a href="/" className="text-sm hover:text-gray-300">Drama</a>
            <a href="/" className="text-sm hover:text-gray-300">Anak-anak</a>
            <a href="/" className="text-sm hover:text-gray-300">Fantasi Ilmiah & Fantasi</a>
            <a href="/" className="text-sm hover:text-gray-300">Anime</a>
            <a href="/" className="text-sm hover:text-gray-300">Kejahatan</a>
            <a href="/" className="text-sm hover:text-gray-300">Britania</a>
            <a href="/" className="text-sm hover:text-gray-300">KDrama</a>
            <a href="/" className="text-sm hover:text-gray-300">Komedi</a>
            <a href="/" className="text-sm hover:text-gray-300">Petualangan</a>
            <a href="/" className="text-sm hover:text-gray-300">Perang</a>
            <a href="/" className="text-sm hover:text-gray-300">Romantis</a>
            <a href="/" className="text-sm hover:text-gray-300">Sains & Alam</a>
            <a href="/" className="text-sm hover:text-gray-300">Thriller</a>
          </div>
        </div>

        {/* Bantuan */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Bantuan</h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-sm hover:text-gray-300">FAQ</a>
            </li>
            <li>
              <a href="/" className="text-sm hover:text-gray-300">Kontak Kami</a>
            </li>
            <li>
              <a href="/" className="text-sm hover:text-gray-300">Privasi</a>
            </li>
            <li>
              <a href="/" className="text-sm hover:text-gray-300">
                Syarat & Ketentuan
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;