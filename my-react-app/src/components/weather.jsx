import React from 'react'
import './'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

export const Weather = () => {
  return (
    <>
        <div className="clima">
            <div className="ubicacion">
            <FontAwesomeIcon icon={faMapMarker} className="icon-clima" />
            <h3>Ubicación</h3>
            </div>
            <p>Viernes, 14 de Marzo 2025</p>
            <br/><br/>
            <FontAwesomeIcon icon={faCloudSun } className="icon-clima"/>
            <span>24°C</span>
        </div>
    </>
  )
}