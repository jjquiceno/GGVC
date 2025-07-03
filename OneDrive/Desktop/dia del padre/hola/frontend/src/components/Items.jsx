import React from 'react'
import './items.css'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Items = ({ icono, text, ruta}) => {

    const handleClick = () => {
        window.location.href = ruta;
      };

    return (
        <div className='item' >
            <div className='icono-box' onClick={handleClick}>
                <div className='icono'>
                    <span>{icono}</span>
                </div>
            </div>
            <div className='item-texts'>
                <span className='text'>{text}</span>
            </div>
        </div>
    )
}

export const ItemsTypes = ({ icono, text, ruta}) => {

    const handleClick = () => {
        window.location.href = ruta;
      };

    return (
        <div className='item2' onClick={handleClick}>
            <div className='icono'>
                <span>{icono}</span>
            </div>
            <div className='item-texts'>
                <span className='text2'>{text}</span>
            </div>
        </div>
    )
}

export const ItemsList = ({ onClick, iconoA, nombre, potrero, genero, iconoS, fecha}) => {
    return (
        <div className='item3' onClick={onClick}>
            <div className='icono'>
                <span>{iconoA}</span>
            </div>
            <div className='item-texts'>
                <strong>{nombre}</strong>
                <span>{potrero}</span>
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
        <div className="inventarioiC">
            <div className='inventarioiImg'>
                <img className='inventarioImgInt' src={srcImg} alt={nombre} loading='lazy'/>
            </div>
            <div className='inventarioiText'>
                <p className='inventarioNombre'><span>{nombre}</span></p>
                <p className='campos'>Cantidad: <span>{cantidad}</span></p>
                <a className='campos flex gap-3 cursor-pointer transition ease-in-out duration-300' href={descarga} >Manual <FontAwesomeIcon className='descargai' icon={faDownload} size="2x" /></a>
            </div>
        </div>
    )
}