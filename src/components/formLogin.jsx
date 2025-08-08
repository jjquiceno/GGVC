import React, { useState } from 'react'
// import './formLogin.css'
import * as Dialog from '@radix-ui/react-dialog';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faPlus, faCow, faMarsAndVenus, faCalendarDay, faHouse, faPenToSquare, faNotesMedical, faPen, faXmarksLines } from '@fortawesome/free-solid-svg-icons';

import { useNavigate, Link } from "react-router-dom"
import { faFile } from '@fortawesome/free-regular-svg-icons';
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
      <br /><br />
      <form onSubmit={handleLogin} className=' w-[60vw] lg:w-[40vw] text-center'>
        <div className="input-icon w-[100%] ">
          <input type="text" className='m-auto w-[100%]' id="usuario" placeholder="Usuario" required value={usuario}
            onChange={(e) => setUsuario(e.target.value)} />
          <FontAwesomeIcon icon={faUser} className="icon" />
        </div>

        <br /><br />

        <div className="input-icon w-[100%] ">
          <input type="password" className='m-auto w-[100%]' id="password" name="password" placeholder="Contraseña" required value={contrasena}
            onChange={(e) => setContrasena(e.target.value)} />
          <FontAwesomeIcon icon={faLock} className="icon" />
        </div>

        <br /><br />

        <button className='boton-login w-[100%] bg-[#909777]' type="submit">Ingresar</button>

        <br /><br />

        <p>Olvidé mi <Link to="/">Contraseña</Link></p>
        <p>Aún no tengo una cuenta <Link to="/register">Registrarse</Link></p>
      </form>
    </div>
  )
}

export default function FormularioAnimalDialog() {

  const [nombre, setNombre] = useState('');
  const [raza, setRaza] = useState('');
  const [sexo, setSexo] = useState('');
  const [FNacimiento, setFNacimiento] = useState('');
  const [origen, setOrigen] = useState('');
  const [proposito, setProposito] = useState('');
  const [estado, setEstado] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const navigate = useNavigate()

  const handleAddGanado = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/ganado/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, raza, sexo, fecha_nacimiento: FNacimiento, origen, proposito, estado, descripcion })
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Ganado agregado exitosamente:', data);
        alert('Ganado agregado exitosamente');
        window.location.reload();
      } else {
        alert(data.message || 'Error al registrar el ganado');
      }
    } catch (err) {
      console.error('Error de red:', err);
      alert('Error de conexión con el servidor.');
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className="add cursor-pointer">
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/40 fixed inset-0" />
        <Dialog.Content className="bg-[#fffdef] rounded-2xl shadow-lg p-6 w-[90%] max-w-md mx-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <Dialog.Title className="text-xl font-bold mb-4">Registrar animal</Dialog.Title>

          <form className="flex flex-col gap-4 h-full" onSubmit={handleAddGanado}>

            <div className="input-icon w-full ">
              <input type="text" className='m-auto ml-0.5 w-full' id="nombre" name="nombre" placeholder="Nombre" required
                value={nombre} onChange={(e) => setNombre(e.target.value)} />
              <FontAwesomeIcon icon={faCow} className="icon" />
            </div>

            <div className="input-icon w-full ">
              <input type="text" className='m-auto ml-0.5 w-full' id="raza" name="raza" placeholder="Raza" required
                value={raza} onChange={(e) => setRaza(e.target.value)} />
              <FontAwesomeIcon icon={faCow} className="icon" />
            </div>

            <div className="input-icon w-full ">
              <select className="border rounded p-2 w-full" required
                value={sexo} onChange={(e) => setSexo(e.target.value)}>
                <option value="">Genero</option>
                <option value="Hembra">Hembra</option>
                <option value="Macho">Macho</option>
              </select>
              <FontAwesomeIcon icon={faMarsAndVenus} className="icon" />
            </div>

            <div className="input-icon w-full ">
              <input type="date" className='m-auto ml-0.5 w-full' id="f_nacimiento" name="f_nacimiento" placeholder="Fecha de nacimiento" required
                value={FNacimiento} onChange={(e) => setFNacimiento(e.target.value)} />
              <FontAwesomeIcon icon={faCalendarDay} className="icon" />
            </div>

            <div className="input-icon w-full ">
              <input type="text" className='m-auto ml-0.5 w-full' id="origen" name="origen" placeholder="Origen" required
                value={origen} onChange={(e) => setOrigen(e.target.value)} />
              <FontAwesomeIcon icon={faHouse} className="icon" />
            </div>

            <div className="input-icon w-full ">
              <select className="border rounded p-2 w-full" required
                value={proposito} onChange={(e) => setProposito(e.target.value)}>
                <option value="">Propósito</option>
                <option value="Leche">Leche</option>
                <option value="Carne">Carne</option>
                <option value="Reproduccion">Reproducción</option>
              </select>
              <FontAwesomeIcon icon={faPenToSquare} className="icon" />
            </div>

            <div className="input-icon w-full ">
              <select className="border rounded p-2 w-full" required
                value={estado} onChange={(e) => setEstado(e.target.value)}>
                <option value="">Estado</option>
                <option value="Amamantamiento">Amamantamiento</option>
                <option value="Prenez">Preñez</option>
                <option value="Enfermo">Enfermo</option>
                <option value="Sano">Sano</option>
              </select>
              <FontAwesomeIcon icon={faNotesMedical} className="icon" />
            </div>

            <div className="input-icon w-full mb-4">
              <textarea type="text" className='border rounded p-2 m-auto ml-0.5 w-full' id="descripcion" name="descripcion" placeholder="Descripcion" required
                value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
              <FontAwesomeIcon icon={faFile} className="icon" />
            </div>


            <button className='boton-login w-[100%] cursor-pointer bg-[#909777]' type="submit">Registrar</button>
          </form>

          <Dialog.Close className="absolute top-2 right-4 text-gray-500 hover:text-black text-xl">
            ✕
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export const FormularioGeneralEdit = ({ id }) => {

  // const [opcionEdit, setOpcionEdit] = useState('');

  const navigate = useNavigate()

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <span><FontAwesomeIcon icon={faPen} /></span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/40 fixed inset-0" />
        <Dialog.Content className="bg-[#fffdef] rounded-2xl shadow-lg p-6 w-[90%] max-w-md mx-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <Dialog.Title className="text-xl font-bold mb-4">Selecciona lo que quieres editar</Dialog.Title>

          <div className='flex flex-col gap-4'>
            <FormularioGanadoEdit id={id} />
            <FormularioDescendenciaEdit id={id} />
            <FormularioUbicacionEdit id={id} />
          </div>

          <Dialog.Close className="absolute top-2 right-4 text-gray-500 hover:text-black text-xl">
            ✕
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export const FormularioGanadoEdit = ({ id }) => {

  const [nombre, setNombre] = useState('');
  const [raza, setRaza] = useState('');
  const [sexo, setSexo] = useState('');
  const [FNacimiento, setFNacimiento] = useState('');
  const [origen, setOrigen] = useState('');
  const [proposito, setProposito] = useState('');
  const [estado, setEstado] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const navigate = useNavigate()

  const handleEditGanado = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/api/ganado/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, raza, sexo, fecha_nacimiento: FNacimiento, origen, proposito, estado, descripcion })
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Ganado editado exitosamente:', data);
        alert('Edición exitosa');
        window.location.reload();
      } else {
        alert(data.message || 'Error al registrar el ganado');
      }
    } catch (err) {
      console.error('Error de red:', err);
      alert('Error de conexión con el servidor.');
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className='boton-login w-[100%] bg-[#909777] shadow-md shadow-gray-300' type="submit">Datos generales</button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/40 fixed inset-0" />
        <Dialog.Content className="bg-[#fffdef] rounded-2xl shadow-lg p-6 w-[90%] max-w-md mx-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <Dialog.Title className="text-xl font-bold mb-4">Datos del ganado</Dialog.Title>

          <form className="flex flex-col gap-4 h-full" onSubmit={handleEditGanado}>

            <div className="input-icon w-full ">
              <input type="text" className='m-auto ml-0.5 w-full' id="nombre" name="nombre" placeholder="Nombre" required
                value={nombre} onChange={(e) => setNombre(e.target.value)} />
              <FontAwesomeIcon icon={faCow} className="icon" />
            </div>

            <div className="input-icon w-full ">
              <input type="text" className='m-auto ml-0.5 w-full' id="raza" name="raza" placeholder="Raza" required
                value={raza} onChange={(e) => setRaza(e.target.value)} />
              <FontAwesomeIcon icon={faCow} className="icon" />
            </div>

            <div className="input-icon w-full ">
              <select className="border rounded p-2 w-full" required
                value={sexo} onChange={(e) => setSexo(e.target.value)}>
                <option value="">Genero</option>
                <option value="Hembra">Hembra</option>
                <option value="Macho">Macho</option>
              </select>
              <FontAwesomeIcon icon={faMarsAndVenus} className="icon" />
            </div>

            <div className="input-icon w-full ">
              <input type="date" className='m-auto ml-0.5 w-full' id="f_nacimiento" name="f_nacimiento" placeholder="Fecha de nacimiento" required
                value={FNacimiento} onChange={(e) => setFNacimiento(e.target.value)} />
              <FontAwesomeIcon icon={faCalendarDay} className="icon" />
            </div>

            <div className="input-icon w-full ">
              <input type="text" className='m-auto ml-0.5 w-full' id="origen" name="origen" placeholder="Origen" required
                value={origen} onChange={(e) => setOrigen(e.target.value)} />
              <FontAwesomeIcon icon={faHouse} className="icon" />
            </div>

            <div className="input-icon w-full ">
              <select className="border rounded p-2 w-full" required
                value={proposito} onChange={(e) => setProposito(e.target.value)}>
                <option value="">Propósito</option>
                <option value="Leche">Leche</option>
                <option value="Carne">Carne</option>
                <option value="Reproduccion">Reproducción</option>
              </select>
              <FontAwesomeIcon icon={faPenToSquare} className="icon" />
            </div>

            <div className="input-icon w-full ">
              <select className="border rounded p-2 w-full" required
                value={estado} onChange={(e) => setEstado(e.target.value)}>
                <option value="">Estado</option>
                <option value="Amamantamiento">Amamantamiento</option>
                <option value="Prenez">Preñez</option>
                <option value="Enfermo">Enfermo</option>
                <option value="Sano">Sano</option>
              </select>
              <FontAwesomeIcon icon={faNotesMedical} className="icon" />
            </div>

            <div className="input-icon w-full mb-4">
              <textarea type="text" className='border rounded p-2 m-auto ml-0.5 w-full' id="descripcion" name="descripcion" placeholder="Descripcion" required
                value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
              <FontAwesomeIcon icon={faFile} className="icon" />
            </div>


            <button className='boton-login w-[100%] cursor-pointer bg-[#909777]' type="submit">Editar</button>
          </form>

          <Dialog.Close className="absolute top-2 right-4 text-gray-500 hover:text-black text-xl cursor-pointer">
            ✕
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export const FormularioDescendenciaEdit = ({ id }) => {

  const [idMadre, setIdMadre] = useState('');
  const [idPadre, setIdPadre] = useState('');

  const handleEditGanado = async (e) => {
    e.preventDefault();

    try {

      const body = {};

      if (idMadre !== undefined) {
        body.potrero = idMadre;
      }

      if (idPadre !== undefined) {
        body.id_padre = idPadre;
      }

      const response = await fetch(`http://localhost:3000/api/descendencias/ganado/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Descendencia editada exitosamente:', data);
        alert('Edición exitosa');
        window.location.reload();
      } else {
        alert(data.message || 'Error al editar la descendencia');
      }
    } catch (err) {
      console.error('Error de red:', err);
      alert('Error de conexión con el servidor.');
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className='boton-login w-[100%] bg-[#e9edc9] shadow-md shadow-gray-300' type="submit">Descendencia</button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/40 fixed inset-0" />
        <Dialog.Content className="bg-[#fffdef] rounded-2xl shadow-lg p-6 w-[90%] max-w-md mx-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <Dialog.Title className="text-xl font-bold mb-4">Descendencia</Dialog.Title>

          <form className="flex flex-col gap-4 h-full" onSubmit={handleEditGanado}>

            <div className="input-icon w-full ">
              <input type="text" className='m-auto ml-0.5 w-full' id="id_madre" name="id_madre" placeholder="Id de la madre"
                value={idMadre} onChange={(e) => setIdMadre(e.target.value)} />
              <FontAwesomeIcon icon={faCow} className="icon" />
            </div>

            <div className="input-icon w-full ">
              <input type="text" className='m-auto ml-0.5 w-full' id="id_madre" name="id_madre" placeholder="Id del padre"
                value={idPadre} onChange={(e) => setIdPadre(e.target.value)} />
              <FontAwesomeIcon icon={faCow} className="icon" />
            </div>


            <button className='boton-login w-[100%] cursor-pointer bg-[#909777]' type="submit">Editar</button>
          </form>

          <Dialog.Close className="absolute top-2 right-4 text-gray-500 hover:text-black text-xl cursor-pointer">
            ✕
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export const FormularioUbicacionEdit = ({ id }) => {

  const [idPotrero, setIdPotrero] = useState('');

  const handleEditUbicacion = async (e) => {
    e.preventDefault();

    try {

      const resUbicacion = await fetch(`http://localhost:3000/api/ubicacion/potrero/${id}`);
      const dataUbicacion = await resUbicacion.json();

      let ubicacion = dataUbicacion.id_ubicacion; 

      const response = await fetch(`http://localhost:3000/api/ubicacion/${ubicacion}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id_potrero: idPotrero, id_ganado: id })
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Ubicación editada exitosamente:', data);
        alert('Edición exitosa');
        window.location.reload();
      } else {
        alert(data.message || 'Error al editar la ubicacion');
      }
    } catch (err) {
      console.error('Error de red:', err);
      alert('Error de conexión con el servidor.');
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className='boton-login w-[100%] bg-[#909777] shadow-md shadow-gray-300' type="submit">Ubicación</button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/40 fixed inset-0" />
        <Dialog.Content className="bg-[#fffdef] rounded-2xl shadow-lg p-6 w-[90%] max-w-md mx-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <Dialog.Title className="text-xl font-bold mb-4">Descendencia</Dialog.Title>

          <form className="flex flex-col gap-4 h-full" onSubmit={handleEditUbicacion}>

            <div className="input-icon w-full ">
              <input type="text" className='m-auto ml-0.5 w-full' id="potrero" name="potrero" placeholder="Id del nuevo potrero"
                value={idPotrero} onChange={(e) => setIdPotrero(e.target.value)} />
              <FontAwesomeIcon icon={faXmarksLines} className="icon" />
            </div>


            <button className='boton-login w-[100%] cursor-pointer bg-[#909777]' type="submit">Editar</button>
          </form>

          <Dialog.Close className="absolute top-2 right-4 text-gray-500 hover:text-black text-xl cursor-pointer">
            ✕
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
