import React, { useState } from 'react'
import './formLogin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from "react-router-dom" 
// import { Routes, Route, Link } from 'react-router-dom';

export const FormLogin = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/usuario/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ usuario, contrasena })
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login exitoso:', data);
        // Guarda el usuario en localStorage si quieres mantener sesión
        // localStorage.setItem('usuario', JSON.stringify(data));
        alert('Bienvenido ' + data.usuario);
        navigate('/welcome');
      } else {
        alert(data.message || 'Error al iniciar sesión');
      }
    } catch (err) {
      console.error('Error de red:', err);
      alert('Error de conexión con el servidor.');
    }
  };


  return (
    <div className="form">
      <h1 className='text-black font-bold'>INICIAR SESIÓN</h1>

      <br /><br />

      <form onSubmit={handleLogin}>
        <div className="input-icon">
          <input type="text" id="usuario" placeholder="Usuario" required value={usuario}
            onChange={(e) => setUsuario(e.target.value)}/>
          <FontAwesomeIcon icon={faUser} className="icon" />
        </div>

        <br /><br />

        <div className="input-icon">
          <input type="password" id="password" name="password" placeholder="Contraseña" required value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}/>
          <FontAwesomeIcon icon={faLock} className="icon" />
        </div>

        <br /><br />

        <button className='boton-login' type="submit">Ingresar</button>

        <br /><br />

        <p>Olvidé mi <Link to="/login">Contraseña</Link></p>
        <p>Aún no tengo una cuenta <Link to="/register">Registrarse</Link></p>
      </form>
    </div>
  )
}