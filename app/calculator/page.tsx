'use client'

import React, { useState } from 'react'

export default function Calculator() {

  const [variableOne, setVariableOne] = useState('')
  const [variableTwo, setVariableTwo] = useState('')
  const [aritmatika, setAritmatika] = useState('+')
  const [result, setResult] = useState('')

  const submitAritmatika = () => {
    if (variableOne && variableTwo) {
      const num1 = Number(variableOne)
      const num2 = Number(variableTwo)

      switch (aritmatika) {
        case '+':
          setResult(num1 + num2)
          break
        case '-':
          setResult(num1 - num2)
          break
        case '*':
          setResult(num1 * num2)
          break
        case '/':
          if (num2 === 0) {
            alert('Tidak bisa membagi dengan nol!')
            setResult('')
          } else {
            setResult(num1 / num2)
          }
          break
        default:
          alert('Operasi tidak dikenal!')
      }
    } else {
      alert('Bilangan Pertama dan Kedua Wajib Diisi')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      <div className="backdrop-blur-md bg-white/20 p-8 rounded-2xl shadow-2xl w-[320px] text-center border border-white/30">
        
        <h1 className="text-3xl font-extrabold text-white mb-6 drop-shadow-lg">
          KALKULATOR
        </h1>

        {/* Input Bilangan Pertama */}
        <input 
          type="number"
          value={variableOne}
          onChange={(e) => setVariableOne(e.target.value)}
          placeholder="Masukkan Bilangan Pertama"
          className="w-full p-3 rounded-lg mb-4 bg-white/80 focus:bg-white text-gray-700 placeholder-gray-500 outline-none focus:ring-2 focus:ring-purple-400 transition"
        />

        {/* Input Bilangan Kedua */}
        <input 
          type="number"
          value={variableTwo}
          onChange={(e) => setVariableTwo(e.target.value)}
          placeholder="Masukkan Bilangan Kedua"
          className="w-full p-3 rounded-lg mb-4 bg-white/80 focus:bg-white text-gray-700 placeholder-gray-500 outline-none focus:ring-2 focus:ring-purple-400 transition"
        />

        {/* Select Operasi & Tombol */}
        <div className="flex mb-4">
          <select
            value={aritmatika}
            onChange={(e) => setAritmatika(e.target.value)}
            className="flex-1 p-3 rounded-l-lg bg-white/80 text-gray-700 border border-gray-300 focus:ring-2 focus:ring-purple-400 transition"
          >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>

          <button 
            onClick={submitAritmatika}
            className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold px-6 rounded-r-lg transition-all"
          >
            Hitung
          </button>
        </div>

        {/* Hasil */}
        <input 
          type="text"
          readOnly
          value={result}
          placeholder="Hasil"
          className="w-full p-3 rounded-lg bg-white/80 text-gray-700 text-center font-bold border border-gray-300"
        />
      </div>
    </div>
  )
}
