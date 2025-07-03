import React from 'react'
import './buttonAreas.css'

export const ButtonAreas = ({ruta, img, text}) => {

    const handleClick = () => {
        window.location.href = ruta;
      };

    return (
        <div onClick={handleClick} className="boton-area">
            <div className="imagen" style={{ backgroundImage: `url(${img})` }}></div>
            <div className='contenedor-texto'><p className='text-l font-bold text-black'>{text}</p></div>
        </div>
    )
  }

  export const ButtonAreasCultivos = ({ruta, img, text}) => {

    const handleClick = () => {
        window.location.href = ruta;
      };

    return (
        <div onClick={handleClick} className="boton-area-cultivos">
            <div className="imagen" style={{ backgroundImage: `url(${img})` }}></div>
            <div className='contenedor-texto'><p className='text-9xl font-bold text-black'>{text}</p></div>
        </div>
    )
  }