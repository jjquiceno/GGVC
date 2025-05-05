import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export const Input = () => {
  return (
    <>
        <div class="border-3 border-[#3b3f1f] rounded-md mb-2 p-1 bg-[#fffdef] flex">
            <span className="input-icono text-[#3b3f1f] font-bold mr-[5%] flex content-center items-center">
                <FontAwesomeIcon icon={faUser} className='text-2xl'/>
            </span>
            <div>
                <strong className='text-black'>Nombre</strong> 
                <br/>
                <p className='text-black'>Camilo</p>
            </div>
        </div>
    </>
  )
}