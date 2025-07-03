import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export const InputInfo = ({icono, placeholder, info}) => {
  return (
    <>
        <div class="border-3 border-[#3b3f1f] rounded-md mb-2 p-1 bg-[#fffdef] flex">
            <span className="input-icono text-[#3b3f1f] font-bold mr-[5%] flex content-center items-center text-2xl">
              {icono}
            </span>
            <div>
                <strong className='text-black'>{placeholder}</strong> 
                <br/>
                <p className='text-black text-'>{info}</p>
            </div>
        </div>
    </>
  )
}

export const InputSearch = ({icono, placeholder, type}) => {
  return (
    <>
        <div className="border-1 border-black rounded-md p-1 bg-[#fffdef] flex text-sm w-[40vw]">
            <span className="input-icono text-black font-extrabold flex mr-2 content-center items-center">
              {icono}
            </span>
            <input type={type} placeholder={placeholder} className="focus:outline-none input-field text-black" />
        </div>
    </>
  )
}