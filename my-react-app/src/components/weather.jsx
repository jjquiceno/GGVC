import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

export const Weather = () => {
  return (
    <>
        <div className="w-[60%] h-[70%] bg-[linear-gradient(90deg,_#ccd5ae_0%,_#e9edc9_100%)]  border-4 border-[#2b3701] rounded-md flex flex-col justify-center items-center ">
            <div className="flex">
            <FontAwesomeIcon icon={faMapMarker} className="text-2xl text-[rgb(236,198,93)]" />
            <h3 className='text-2xl'>Ubicación</h3>
            </div>
            <p>Viernes, 14 de Marzo 2025</p>
            <br/><br/>
            <FontAwesomeIcon icon={faCloudSun } className="text-7xl text-[rgb(236,198,93)]"/>
            <span className='text-[400%] font-extrabold'>24°C</span>
        </div>
    </>
  )
}