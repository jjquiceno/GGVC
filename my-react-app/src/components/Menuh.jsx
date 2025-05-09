import React, { useState } from 'react';
import './menuh.css';
import { faBars, faXmark, faHouse, faCow, faSeedling, faXmarksLines, faDollarSign, faBookOpen, faUserPen, faGear } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="menuitem" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </div>
      <div className={`menu-float ${menuOpen ? 'active' : ''}`}>
        <div className='menu-float-items'>
            <div className="cerrar" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faXmark} size="2x" />
            </div>
            <div className='opciones'>
                <nav className='opciones1'>
                    <ul>
                        <li><a href="/welcome"><FontAwesomeIcon icon={faHouse}/> Inicio</a></li>
                        <li><a href=""><FontAwesomeIcon icon={faCow}/> Ganado</a></li>
                        <li><a href=""><FontAwesomeIcon icon={faSeedling}/> Cultivos</a></li>
                        <li><a href=""><FontAwesomeIcon icon={faXmarksLines}/> Potreros</a></li>
                        <li><a href=""><FontAwesomeIcon icon={faDollarSign}/> Nómina</a></li>
                        <li><a href="/pruebas"><FontAwesomeIcon icon={faBookOpen}/> Manuales</a></li>
                    </ul>
                </nav>
                <nav className='opciones2'>
                    <div className="separador-menu"></div>
                    <ul>
                        <li><a href=""><FontAwesomeIcon icon={faUserPen}/> Ajustes</a></li>
                        <li><a href=""><FontAwesomeIcon icon={faGear}/> Contácto</a></li>
                    </ul>
                </nav>
            </div> 
        </div>
        
      </div>
    </>

  );
};

export const MenuLeft = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="menu">
      <div className="menuitem" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </div>
      <div className={`menu-float-left ${menuOpen ? 'active' : ''}`}>
        <div className='menu-float-items'>
            <div className="cerrar" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faXmark} size="2x" />
            </div>
            <div className='opciones'>
                <nav className='opciones1'>
                    <ul>
                        <li><a href=""><FontAwesomeIcon icon={faHouse}/> Inicio</a></li>
                        <li><a href=""><FontAwesomeIcon icon={faCow}/> Ganado</a></li>
                        <li><a href=""><FontAwesomeIcon icon={faSeedling}/> Cultivos</a></li>
                        <li><a href=""><FontAwesomeIcon icon={faXmarksLines}/> Potreros</a></li>
                        <li><a href=""><FontAwesomeIcon icon={faDollarSign}/> Nómina</a></li>
                        <li><a href=""><FontAwesomeIcon icon={faBookOpen}/> Manuales</a></li>
                    </ul>
                </nav>
                <nav className='opciones2'>
                    <div className="separador-menu"></div>
                    <ul>
                        <li><a href=""><FontAwesomeIcon icon={faUserPen}/> Ajustes</a></li>
                        <li><a href=""><FontAwesomeIcon icon={faGear}/> Contácto</a></li>
                    </ul>
                </nav>
            </div> 
        </div>
        
      </div>
    </div>
  );
};
