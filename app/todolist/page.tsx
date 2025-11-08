'use client'
import React, { useEffect, useState } from 'react'

function TodoList() {
  const [input, setInput] = useState('')
  const [dataTodo, setDataTodo] = useState<string[]>([])
  const [search, setSearch] = useState('')
  const [editInput, setEditInput] = useState('')

  useEffect(() => {
    const storeData = localStorage.getItem('dataTodo')
    if (storeData) {
      setDataTodo(JSON.parse(storeData))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('dataTodo', JSON.stringify(dataTodo))
  }, [dataTodo])

  const addDataTodo = () => {
    if (input.trim().length === 0) {
      alert('Masukan Todo Terlebih Dahulu')
      return
    }

    if (dataTodo.includes(input.trim())) {
      alert('Data Sudah Ada')
      return
    }

    setDataTodo([...dataTodo, input])
    setInput('')
  }

  const removeDataTodo = (index: number) => {
    const removeData = dataTodo.filter((_val, idx) => idx !== index)
    setDataTodo(removeData)
  }

  const editTodo = () => {
    if (!editInput.trim()) {
      alert('Masukan teks baru!')
      return
    }

    const index = dataTodo.findIndex(item =>
      item.toLowerCase().includes(search.toLowerCase())
    )

    if (index !== -1) {
      const update = [...dataTodo]
      update[index] = editInput.trim() // ✅ perbaikan di sini
      setDataTodo(update)
      setEditInput('')
      alert('Todo berhasil diubah!')
    } else {
      alert('Todo yang dicari tidak ditemukan!')
    }
  }

  const filterdata = dataTodo.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  )

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
          className='bg-[#503E9D] text-white h-[48px] w-[114px] px-[16px] rounded-lg text-center'
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
      </div>

      {/* Input edit */}
      <div className='flex items-center gap-2 mb-[40px]'>
        <div className='flex-1'>
          <input
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
            className='w-full border border-[#E4E4E4] rounded-lg py-[8px] px-[16px]'
            placeholder='Masukan teks baru'
          />
        </div>
        <button
          className='bg-[#4CAF50] text-white h-[48px] w-[114px] px-[16px] rounded-lg text-center'
          onClick={editTodo}
        >
          Edit
        </button>
      </div>

      {/* Daftar Todo */}
      {filterdata.map((value, index) => (
        <div key={index} className='flex items-center justify-between mb-[16px]'>
          <p>{value}</p>
          <button
            className='bg-[#0084ff] text-white h-[30px] px-[6px] rounded-lg'
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
