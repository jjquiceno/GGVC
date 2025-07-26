import React, { useState } from 'react'
// import './formLogin.css'
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
        sessionStorage.setItem('token', data.token); //Token en sessionStorage
        console.log('Token guardado:', sessionStorage.getItem('token'));
        alert('Bienvenido ' + data.user.usuario);
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
    <div className="flex flex-col items-center justify-center">
      <h1 className='text-black font-bold'>INICIAR SESIÓN</h1>
      <br/><br/>
      <form onSubmit={handleLogin} className='w-[60vw] lg:w-[100%] text-center'>
        <div className="input-icon w-[100%]">
          <input type="text" className='m-auto w-[100%]' id="usuario" placeholder="Usuario" required value={usuario}
            onChange={(e) => setUsuario(e.target.value)}/>
          <FontAwesomeIcon icon={faUser} className="icon" />
        </div>

        <br /><br />

        <div className="input-icon w-[100%] ">
          <input type="password" className='m-auto w-[100%]' id="password" name="password" placeholder="Contraseña" required value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}/>
          <FontAwesomeIcon icon={faLock} className="icon" />
        </div>

        <br /><br />

        <button className='boton-login w-[100%]' type="submit">Ingresar</button>

        <br /><br />

        <p>Olvidé mi <Link to="/">Contraseña</Link></p>
        <p>Aún no tengo una cuenta <Link to="/register">Registrarse</Link></p>
      </form>
    </div>
  )
}