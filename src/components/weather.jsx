import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

export const Weather = () => {
  return (
    <>
        <div className="w-[90%] h-[90%] flex flex-col justify-center items-center ">
            <div className="flex">
            <FontAwesomeIcon icon={faMapMarker} className="text-2xl text-[rgb(236,198,93)]" />
            <h3 className='text-2xl text-black font-bold'>Medellin</h3>
            </div>
            <p className='text-black text-xs mb-3' >Jueves, 15 de Mayo 2025</p>
            <FontAwesomeIcon icon={faCloudSun } className="text-7xl text-[rgb(236,198,93)]"/>
            <span className='text-[300%] text-black font-extrabold'>24°C</span>
        </div>
    </>
  )
}