"use client";
import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "admin" && password === "12345") {
      setMessage("✅ Login berhasil! Selamat datang, " + username);
    } else {
      setMessage("❌ Username atau password salah!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black p-4">
      {/* KOTAK LOGIN */}
      <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
          Login
        </h1>

        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          {/* Input Username */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              placeholder="Masukkan username"
              className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* Input Password */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Masukkan password"
              className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Tombol Login */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md font-semibold transition"
          >
            Login
          </button>
        </form>

        {/* Pesan Status Login */}
        {message && (
          <p
            className={`mt-4 text-center font-semibold ${
              message.includes("berhasil") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
