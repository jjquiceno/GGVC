import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export const Avatar = () => {
  return (
    <>
        <div className="mb-[10px] w-[100px] h-[100px] bg-[#3b3f1f] text-white rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faUser} className='text-5xl'/>
        </div>
    </>
  )
}
