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
      <div className='w-full bg-gradient-to-b from-[#565a49] to-[#e9edc9] h-[20vh] md:justify-between xl:justify-between xl:h-[30vh] rounded-bl-[40px] rounded-br-[40px] ext-black flex justify-start gap-8 items-center'>
        <div className='text-1xl'>
          {nav}
        </div>
        <div className=''>
          <h1 className='text-4xl font-bold'>{text}</h1>
        </div>
        <div className="img-container hidden md:block sm:block  rounded-[40px] rounded-tr-[0]" style={{ backgroundImage: `url(${img})`}} >
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
      <div className='rounded-bl-[40px] rounded-br-[40px] h-[20vh] w-[100%] bg-gradient-to-b from-[#565a49] to-[#e9edc9] md:h-[30vh] text-black flex md:justify-between items-center'>
        <div className="h-full md:w-[55%] rounded-r-[30px] shadow-[ -10px_0px_10px_-2px_rgba(0,0,0,0.164)] md:bg-[url('/img/header.jpg')] bg-cover bg-center">
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
        <div className='img-container rounded-br-[40px]' style={{ backgroundImage: `url(${img})`}}>
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
      <div className='contenedor-img text-black flex justify-between items-center rounded-br-[40px]' style={{ backgroundImage: `url(${img})`}}>
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
      <div className='contenedor contenedorST text-black bg-gradient-to-b from-[#565a49] to-[#e9edc9]'>
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