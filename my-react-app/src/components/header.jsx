import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { MenuLeft } from './Menuh.jsx'
import { Menu } from './Menuh.jsx' 

export const Header = ({ text }) => {
  return (
    <>
      <div className='contenedor text-black flex justify-between items-center'>
        <div className=''>
          <Menu/>
        </div>
        <div className=''>
          <h1 className='text-3xl font-bold'>{text}</h1>
        </div>
        <div className='img-container'>
          <div className='imagen'>

          </div>

        </div>
      </div> 
    </>
  )
}
export const HeaderLeft = ({ text }) => {
  return (
    <>
      <div className='contenedor text-black flex justify-between items-center'>
        <div className='img-container-left'>
          <div className='imagen'>

          </div>

        </div>
        
        <div className=''>
          <h1 className='text-3xl font-bold'>{text}</h1>
        </div>
        <div className=''>
          <MenuLeft/>
        </div>
      </div> 
    </>
  )
}