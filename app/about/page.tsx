import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600 text-white p-4">
      {/* Judul */}
      <h1 className="text-5xl font-extrabold mb-4 text-center">
        Selamat Datang!
      </h1>

      {/* Deskripsi */}
      <p className="text-lg max-w-xl text-center mb-8">
        Ini adalah halaman utama proyek Gita Pratiwi. 
      </p>

      {/* Tombol Aksi */}
      <a
        href="/registrasi"
        className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
      >
        Daftar Sekarang
      </a>
    </div>
  );
}
