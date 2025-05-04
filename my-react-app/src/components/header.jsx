import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


import { Menu } from './Menuh.jsx' 

export const Header = () => {
  return (
    <>
      <div className='bg-[rgb(233,237,201)] contenedor text-black flex justify-between items-center'>
        <div className=''>
          <Menu/>
        </div>
        <div className=''>
          <h1 className='text-3xl font-bold'>My React App</h1>
        </div>
        <div className='img-container'>
          <div className='imagen'>

          </div>

        </div>
      </div> 
    </>
  )
}