import React, { useState } from 'react';
import './formLogin.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faLock, faIdCard } from '@fortawesome/free-solid-svg-icons';

export const FormRegister = () => {
    // Estado para cada campo del formulario
    const [nombre, setNombre] = useState('');
    const [idPersona, setIdPersona] = useState('');
    const [email, setEmail] = useState('');
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [rol, setRol] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            id: idPersona,
            nombre_empleado: nombre,
            email_empleado: email,
            telefono_empleado: telefono,
            usuario: usuario,
            contrasena: contrasena,
            rol: rol,
        };

        try {
            const response = await fetch('http://localhost:3000/api/usuario/register', { // Reemplaza con la URL de tu backend
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Registro exitoso:', data);
                alert('¡Registro exitoso! Ya puedes iniciar sesión.');
                // Redirige al usuario a la página de inicio de sesión
                window.location.href = '/';
            } else {
                console.error('Error en el registro:', data.message);
                alert("Error al registrar: " + (data.message || 'Error desconocido'));
            }
        } catch (error) {
            console.error('Error de red al registrar:', error);
            alert('Error de conexión. Inténtalo de nuevo más tarde.');
        }
    };

    return (
        // para el commit 
        <div className="form">
            <h1 className='text-black font-bold'>REGISTRARSE</h1>

            <br /><br />

            <form onSubmit={handleSubmit}>

                <div className="input-icon">
                    <input type="text" id="nombre" placeholder="Nombre" required value={nombre}
                        onChange={(e) => setNombre(e.target.value)} />

                    <FontAwesomeIcon icon={faUser} className="icon" />
                </div>

                <br /><br />

                <div className="input-icon">
                    <input type="text" id="idPersona" placeholder="Número de documento" required value={idPersona}
                        onChange={(e) => setIdPersona(e.target.value)} />

                    <FontAwesomeIcon icon={faIdCard} className="icon" />
                </div>

                <br /><br />

                <div className="input-icon">
                    <input type="email" id="email" placeholder="Correo electrónico" required value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                </div>

                <br /><br />

                <div className="input-icon">
                    <input type="text" id="usuario" placeholder="Usuario" required value={usuario}
                        onChange={(e) => setUsuario(e.target.value)} />
                    <FontAwesomeIcon icon={faUser} className="icon" />
                </div>

                <br /><br />
                <div className="input-icon">
                    {/* <input type="text" id="rol" placeholder="Rol" required value={rol}
                        onChange={(e) => setRol(e.target.value)} /> */}
                    <select id="rol" required value={rol}
                        onChange={(e) => setRol(e.target.value)}>
                        <option value="">Seleccione un rol</option>
                        <option value="admin">Administrador</option>
                        <option value="empleado">Empleado</option>
                    </select>
                    <FontAwesomeIcon icon={faUser} className="icon" />
                </div>

                <br /><br />
                <div className="input-icon">
                    <input type="text" id="telefono" placeholder="Telefono" required value={telefono}
                        onChange={(e) => setTelefono(e.target.value)} />
                    <FontAwesomeIcon icon={faUser} className="icon" />
                </div>

                <br /><br />

                <div className="input-icon">
                    <input type="password" id="password" name="password" placeholder="Contraseña" required value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)} />
                    <FontAwesomeIcon icon={faLock} className="icon" />
                </div>

                <br /><br />

                <button className='boton-register' type="submit">Registrarse</button>
            </form>

            <br /><br />

            <p>Ya tengo una cuenta <a href="/">Iniciar sesión </a></p>
        </div>
    )
}