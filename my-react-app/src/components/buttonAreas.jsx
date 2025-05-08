import React from 'react'
import './buttonAreas.css'

export const ButtonAreas = ({img, text}) => {
    return (
        <div className="bg-[#e9edc9] w-[90%] h-[70%]  rounded-md border-2 border-[#2b3701] shadow-[-10px_0px_10px_2px_rgba(0,0,0,0.164)] grid grid-rows-[3fr_1fr] grid-cols-1 justify-items-center">
            <div className="w-full h-full bg-cover bg-center rounded-md" style={{ backgroundImage: `url(${img})` }}></div>
            <div className='flex items-center justify-center'><p className='text-l font-bold text-black'>{text}</p></div>
        </div>
    )
  }