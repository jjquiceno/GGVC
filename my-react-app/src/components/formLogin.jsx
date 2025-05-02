import React from 'react'
import './formLogin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

export const FormLogin = () => {
  return (
    <div className="form">
      <h1 className='text-black font-bold'>INICIAR SESIÓN</h1>

      <br /><br />

      <form action="">
        <div className="input-icon">
          <input type="text" id="usuario" placeholder="Usuario" required />
          <FontAwesomeIcon icon={faUser} className="icon" />
        </div>

        <br /><br />

        <div className="input-icon">
          <input type="password" id="password" name="password" placeholder="Contraseña" required />
          <FontAwesomeIcon icon={faLock} className="icon" />
        </div>

        <br /><br />

        <button type="submit">Ingresar</button>

        <br /><br />

        <p>Olvidé mi <a href="html/#">Contraseña</a></p>
        <p>Aún no tengo una cuenta <a href="../html/registro.html">Registrarse</a></p>
      </form>
    </div>
  )
}