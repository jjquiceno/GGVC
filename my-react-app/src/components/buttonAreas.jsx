import React from 'react'
import './buttonAreas.css'

export const ButtonAreas = () => {
    return (
        <div className="bg-[#e9edc9] w-[90%] h-[60%] rounded-md border-2 border-[#2b3701] grid grid-rows-[3fr_1fr] grid-cols-1 justify-items-center">
            <div className="bg-[url('../vaca.jpg')] w-full h-full bg-cover bg-center rounded-md"></div>
            <div className='flex items-center justify-center'><p className='text-3xl font-bold text-black'>Ganado</p></div>
        </div>
    )
  }