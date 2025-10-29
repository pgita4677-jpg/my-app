'use client'
import React, { useState } from 'react'

function TodoList() {
  const [input, setInput] = useState('')
  const [dataTodo, setDataTodo] = useState<string[]>([])
  const [search, setSearch] = useState('')
  const [filteredTodo, setFilteredTodo] = useState<string[]>([])

  const addDataTodo = () => {
    if (input.trim().length === 0) {
      window.alert('Masukkan Todo terlebih dahulu!')
      return
    }

    const isDuplicate = dataTodo.some(
      (item) => item.toLowerCase() === input.toLowerCase()
    )
    if (isDuplicate) {
      window.alert('Todo sudah ada, masukkan yang berbeda!')
      return
    }

    setDataTodo([...dataTodo, input])
    setInput('')
    setFilteredTodo([]) // reset hasil filter kalau ada
  }

  const removeDataTodo = (index: number) => {
    const removeData = dataTodo.filter((_val, idx) => idx !== index)
    setDataTodo(removeData)
    setFilteredTodo([]) // reset hasil pencarian biar gak aneh
  }

  const searchTodo = () => {
    if (search.trim().length === 0) {
      window.alert('Masukkan kata untuk mencari!')
      setFilteredTodo([])
      return
    }

    const hasil = dataTodo.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    )

    if (hasil.length === 0) {
      window.alert('Data tidak ditemukan!')
    }

    setFilteredTodo(hasil)
  }

  return (
    <div className='w-1/2 m-auto p-[63px]'>
      <div className='flex justify-between items-center'>
        <h1 className='text-[56px] font-[600]'>Todo List</h1>
        <div className='flex justify-between items-center bg-[#f2f3ff] w-[56px] rounded-lg'>
          🚀
        </div>
      </div>

      <p>Notes:</p>

      <div className='h-[1px] bg-[#EBEBEB] mb-[21px] mt-[32px]' />

      {/* Input tambah data */}
      <div className='flex items-center gap-2 mb-[43px]'>
        <div className='flex-1'>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='w-full border border-[#E4E4E4] rounded-lg py-[8px] px-[16px]'
            placeholder='Masukan Todo'
          />
        </div>
        <button
          className='bg-[#503E9D] text-white h-[48px] px-[16px] rounded-lg text-center'
          onClick={addDataTodo}
        >
          Simpan
        </button>
      </div>

      {/* Input pencarian */}
      <div className='flex items-center gap-2 mb-[32px]'>
        <div className='flex-1'>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='w-full border border-[#E4E4E4] rounded-lg py-[8px] px-[16px]'
            placeholder='Cari Todo'
          />
        </div>
        <button
          className='bg-[#0084ff] text-white h-[48px] px-[16px] rounded-lg text-center'
          onClick={searchTodo}
        >
          Cari
        </button>
      </div>

      {/* List Todo */}
      {(filteredTodo.length > 0 ? filteredTodo : dataTodo).map((value, index) => (
        <div key={index} className='flex items-center justify-between mb-[16px]'>
          <p>{value}</p>
          <button
            className='bg-[#FF0004] text-white h-[30px] px-[6px] rounded-lg'
            onClick={() => removeDataTodo(index)}
          >
            Hapus
          </button>
        </div>
      ))}
    </div>
  )
}

export default TodoList
