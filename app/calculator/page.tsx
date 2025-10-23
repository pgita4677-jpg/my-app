'use client'

import React, { useState } from 'react'

export default function Calculator() {

    const [variableOne, setVariableOne] = useState('')
    const [variableTwo, setVariableTwo] = useState('')
    const [aritmatika, setAritmatika] = useState('+')
    const [result, setResult] = useState<number | string>('')

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
                    alert('Aritmatika hanya bisa diisi oleh +, -, *, /')
            }
        } else {
            alert('Bilangan Pertama dan Kedua Wajib Diisi')
        }    
    }

    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700'>
            <div className='bg-gray-900/80 backdrop-blur-md text-white p-8 rounded-2xl shadow-2xl w-[320px] text-center border border-gray-700'>
                
                <h1 className='text-3xl font-bold mb-6 tracking-wide text-white'>
                    KALKULATOR
                </h1>

                {/* Input Bilangan Pertama */}
                <input 
                    value={variableOne} 
                    onChange={(e) => setVariableOne(e.target.value)} 
                    className='w-full p-3 mb-4 rounded-lg text-gray-900 text-center placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
                    placeholder='Masukkan Bilangan Pertama'
                    type='number'
                />

                {/* Input Bilangan Kedua */}
                <input 
                    value={variableTwo} 
                    onChange={(e) => setVariableTwo(e.target.value)} 
                    className='w-full p-3 mb-4 rounded-lg text-gray-900 text-center placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
                    placeholder='Masukkan Bilangan Kedua'
                    type='number'
                />

                {/* Select Aritmatika + Tombol Hitung */}
                <div className='flex mb-4'>
                    <select 
                        value={aritmatika} 
                        onChange={(e) => setAritmatika(e.target.value)} 
                        className='flex-1 p-3 rounded-l-lg text-gray-900 text-center bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
                    >
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                    </select>

                    <button 
                        className='bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-5 py-3 rounded-r-lg font-semibold transition-all shadow-md hover:shadow-lg'
                        onClick={submitAritmatika}
                    >
                        Hitung
                    </button>
                </div>

                {/* Hasil */}
                <input 
                    readOnly
                    value={result}
                    className='w-full p-3 rounded-lg text-gray-900 text-center bg-white font-bold text-lg border border-gray-300 shadow-inner'
                    placeholder='Hasil'
                />
            </div>
        </div>
    )
}
