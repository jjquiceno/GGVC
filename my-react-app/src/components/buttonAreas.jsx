import React from 'react'
import './buttonAreas.css'

export const ButtonAreas = ({img, text}) => {
    return (
        <div className="boton-area">
            <div className="imagen" style={{ backgroundImage: `url(${img})` }}></div>
            <div className='contenedor-texto'><p className='text-l font-bold text-black'>{text}</p></div>
        </div>
    )
  }