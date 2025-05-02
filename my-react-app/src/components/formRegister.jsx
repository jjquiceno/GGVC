import React from 'react'
import './formLogin.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

export const FormRegister = () => {
  return (
    <div className="form">
                <h1 className='text-black font-bold'>REGISTRARSE</h1>

                <br/><br/>

                <form action="">

                    <div className="input-icon">
                        <input type="text" id="nombre" placeholder="Nombre" required/>
                        <FontAwesomeIcon icon={faUser} className="icon" />
                    </div>
                    
                    <br/><br/>

                    <div className="input-icon">
                        <input type="email" id="email" placeholder="Correo electrónico" required/>
                        <FontAwesomeIcon icon={faEnvelope} className="icon" />
                    </div>
                    
                    <br/><br/>

                    <div className="input-icon">
                        <input type="text" id="usuario" placeholder="Usuario" required/>
                        <FontAwesomeIcon icon={faUser} className="icon" />
                    </div>
                    
                    <br/><br/>

                    <div className="input-icon">
                        <input type="password" id="password" name="password" placeholder="Contraseña" required/>
                        <FontAwesomeIcon icon={faLock} className="icon" />
                    </div>

                    <br/><br/>

                    <button type="submit">Registrarse</button>
                </form>

                <br/><br/>
                
                <p>Ya tengo una cuenta <a href="./inicio.html">Iniciar sesión </a></p>
            </div>
  )
}