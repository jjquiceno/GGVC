import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faBars, faSearch } from '@fortawesome/free-solid-svg-icons'

import { MenuLeft } from './Menuh.jsx'
import { Menu } from './Menuh.jsx'
import { InputSearch } from './inputs.jsx' 

export const Header = ({nav, text, img}) => {
  return (
    <>
      <div className='contenedor text-black flex justify-between items-center'>
        <div className=''>
          {nav}
        </div>
        <div className=''>
          <h1 className='text-3xl font-bold'>{text}</h1>
        </div>
        <div className="img-container" style={{ backgroundImage: `url(${img})`}} >
          <div className='imagen'>

          </div>

        </div>
      </div> 
    </>
  )
}
export const HeaderLeft = ({ text, img }) => {

  const handleClick = () => {
    window.location.href = "/welcome";
  };

  return (
    <>
      <div className='contenedor text-black flex justify-between items-center'>
        <div className='img-container-left'>
          <div className='imagen p-4 pt-7'>
            <Menu/>
          </div>

        </div>
        
        <div className=''>
          <h1 className='text-3xl font-bold mr-[10rem]'>{text}</h1>
        </div>
      </div> 
    </>
  )
}


export const HeaderSearch = ({text, img}) => {

  const handleClick = () => {
    window.location.href = "/ganado";
  };


  return (
    <>
      <div className='contenedor text-black flex justify-between items-center'>
        <div className=''>
          <FontAwesomeIcon icon={faAngleLeft} onClick={handleClick} className='text-2xl mb-20 ml-2 cursor-pointer'/>
        </div>
        <div className=''>
          <h2 className='text-3xl font-bold mr-[10rem] mb-5'>{text}</h2>
          <InputSearch icono={<FontAwesomeIcon icon={faSearch}/>} type="text" placeholder={"Buscar"}/>
        </div>
        <div className='img-container' style={{ backgroundImage: `url(${img})`}}>
          <div className='imagen'>

          </div>

        </div>
      </div> 
    </>
  )
}

export const HeaderInvert = ({ text, img }) => {

  const handleClick = () => {
    window.location.href = "/welcome";
  };

  return (
    <>
      <div className='contenedor-img text-black flex justify-between items-center' style={{ backgroundImage: `url(${img})`}}>
        <div className='bg flex justify-between items-center'>
          <div className='flex justify-between items-center p-4 pt-7'>
            <Menu/>
            <h1 className='text-3xl font-bold ml-[10rem]'>{text}</h1>
          </div>

        </div>
      </div> 
    </>
  )
}

export const HeaderSoloText = ({nav, text, img}) => {
  return (
    <>
      <div className='contenedor contenedorST text-black'>
        <div className=''>
          {nav}
        </div>
        <div className=''>
          <h1 className='text-3xl font-bold'>{text}</h1>
        </div>
      </div> 
    </>
  )
}