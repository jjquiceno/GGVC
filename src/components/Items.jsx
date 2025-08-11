import React from 'react'
import './items.css'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Items = ({ icono, text, ruta}) => {

    const handleClick = () => {
        window.location.href = ruta;
      };

    return (
        <div className='md:w-[6vw] md:h-[10vw] flex flex-col items-center group' >
            <div className="group-hover:shadow-[0_0_2px_0_rgba(0,0,0,0.75)] w-[20vw] h-[20vw] md:w-[5vw] md:h-[5vw] flex justify-center items-center bg-[#2b3701] rounded-[10px] shadow-[0_0_10px_0_rgba(0,0,0,0.75)] transition-all duration-300 ease-in-out cursor-pointer" onClick={handleClick}>
                <div className="w-[19vw] h-[19vw] md:w-[4.5vw] md:h-[4.5vw] text-black bg-[#e9edc9] rounded-[10px] flex justify-center items-center text-[1.5rem]">
                    <span>{icono}</span>
                </div>
            </div>
            <div className='item-texts'>
                <span className="text-black text-[0.9rem]">{text}</span>
            </div>
        </div>
    )
}

export const ItemsTypes = ({ icono, text, ruta}) => {

    const handleClick = () => {
        window.location.href = ruta;
      };

    return (
        <div className="md:w-[50%] md:h-[24vw] bg-[#2b3701] flex flex-col items-center p-[5px] rounded-[10px] shadow-[0_0_10px_0_rgba(0,0,0,0.75)] transition-all duration-300 ease-in-out cursor-pointer over:scale-[1.02] hover:shadow-[0_0_2px_0_rgba(0,0,0,0.75)]" onClick={handleClick}>
            <div className='w-full h-[95%] bg-[#e9edc9] rounded-[10px] flex items-center justify-center text-black text-[4rem]'>
                <span>{icono}</span>
            </div>
            <div className='item-texts'>
                <span className='text-white text-base text-center'>{text}</span>
            </div>
        </div>
    )
}

export const ItemsList = ({ onClick, iconoA, nombre, id, genero, iconoS, fecha}) => {
    return (
        <div className='item3' onClick={onClick}>
            <div className='icono'>
                <span>{iconoA}</span>
            </div>
            <div className='item-texts'>
                <strong>{nombre}</strong>
                <span>{id}</span>
                <span>{genero}</span>
            </div>
            <div className="status">
                <div className="status-date">
                    <span>{fecha}</span>
                </div>
                <div className="status-icon">
                    <span className="icono">{ iconoS }</span>
                </div>
            </div>
        </div>
    )
}

export const ProblemasPo = ({ plagascant, enfermedadescant, climacant }) => {
    return (
        <div className="problemaspo-container">
            <p>Problemas potenciales</p>
            <div className="separadorpo"></div>
            <div>
                <div>
                    <span>Plagas</span> <br />
                    <span>Enfermedades</span> <br />
                    <span>Clima</span>
                </div>
                <div></div>
                <div>
                    <span>{plagascant}</span> <br />
                    <span>{enfermedadescant}</span> <br />
                    <span>{climacant}</span>
                </div>
            </div>
        </div>
    )
}

export const ImagesItem = ({ srcImg, nombre, edad}) => {
    return(
        <div className="imageContainer">
            <div className='imagecInt'>
                <img className='imagenG' src={srcImg} alt={nombre} loading='lazy'/>
            </div>
            <div className='imagecText'>
                <p><span>{nombre}</span></p>
                <p><span>{edad}</span></p>
            </div>
        </div>
    )
}

export const InventarioItem = ({ srcImg, nombre, cantidad, descarga }) => {
    return (
        <div className="w-[90] h-[40vw] md:w-[28vw] md:h-[15vw] border-2 border-[#2b3701] rounded-[10px] bg-[#e9edc9] flex justify-between items-center px-[5px]">
            <div className='w-[60%] h-[95%] rounded-[10px]'>
                <img className='w-full h-full object-cover rounded-[10px] shadow-[1px_1px_10px_1px_rgba(0,0,0,0.342)]' src={srcImg} alt={nombre} loading='lazy'/>
            </div>
            <div className='w-[39%] h-[95%] rounded-[10px] flex flex-col justify-center items-center gap-[10px]'>
                <p className='text-black text-[1.5rem] font-semibold mb-[10px]'><span>{nombre}</span></p>
                <p className='border border-[#2b3701] rounded-[10px] bg-[#a2a88d] w-[80%] h-[20%] text-black flex items-center px-[5px] cursor-pointer transition ease-in-out duration-300 hover:shadow-[1px_1px_10px_1px_rgba(0,0,0,0.75)]'>Cantidad: <span>{cantidad}</span></p>
                <a className='border border-[#2b3701] rounded-[10px] bg-[#a2a88d] w-[80%] h-[20%] text-black flex items-center px-[5px] gap-3 cursor-pointer transition ease-in-out duration-300 hover:shadow-[1px_1px_10px_1px_rgba(0,0,0,0.75)]' href={descarga} >Manual <FontAwesomeIcon className='text-[1.5rem]' icon={faDownload} /></a>
            </div>
        </div>
    )
}