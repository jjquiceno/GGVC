import React, { useState, useEffect } from 'react'
// import './formLogin.css'
import * as Dialog from '@radix-ui/react-dialog';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faPlus, faCow, faMarsAndVenus, faCalendarDay, faHouse, faPenToSquare, faNotesMedical, faPen, faXmarksLines, faEyeDropper, faEye, faEyeSlash, faEnvelope, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { useNavigate, Link } from "react-router-dom"
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faDochub } from '@fortawesome/free-brands-svg-icons';
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

      // Si idMadre tiene un valor (no es undefined, null ni una cadena vacía)
      if (idMadre) {
        body.id_madre = idMadre;
      }

      // Si idPadre tiene un valor (no es undefined, null ni una cadena vacía)
      if (idPadre) {
        body.id_padre = idPadre;
      }

      // Si el objeto 'body' está vacío, no hacemos nada
      if (Object.keys(body).length === 0) {
        console.warn('No hay datos para actualizar.');
        return; // Salimos de la función
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
        <Dialog.Overlay className="bg-black/40 fixed inset-0 z-50" />
        <Dialog.Content className="bg-[#fffdef] rounded-2xl shadow-lg p-6 w-[90%] max-w-md mx-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-100">
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


export const FormularioVisitas = ({ id, nombre }) => {
  const [fechaVisita, setFechaVisita] = useState('');
  const [motivo, setMotivo] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [diagnostico, setDiagnostico] = useState('');
  const [tratamiento, setTratamiento] = useState('');
  const [proxVisita, setProxVisita] = useState('');

  const handleAddVisita = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/api/visitas/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id_ganado: id,
          fecha_visita: fechaVisita,
          motivo,
          sintomas,
          diagnostico,
          tratamiento,
          prox_visita: proxVisita
        })
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Visita agregada exitosamente:', data);
        alert('Visita agregada exitosamente');
        window.location.reload();
      } else {
        alert(data.message || 'Error al registrar la visita');
      }
    } catch (err) {
      console.error('Error de red:', err);
      alert('Error de conexión con el servidor.');
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <span className="text-2xl cursor-pointer transition duration-300 ease-in-out hover:drop-shadow-[1px_1px_2px_#2b370185]">
          <FontAwesomeIcon icon={faPlus} />
        </span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/40 fixed inset-0 z-100" />
        <Dialog.Content className="bg-[#fffdef] rounded-2xl shadow-2xl p-6 w-[90%] max-w-md mx-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-100">
          <Dialog.Title className="text-xl font-bold mb-2">
            Registrar visita médica
          </Dialog.Title>
          <Dialog.Description className="text-sm text-gray-500 mb-4">
            Completa la información para registrar una nueva visita médica para el animal {nombre}.
          </Dialog.Description>

          <form className="flex flex-col gap-4 h-full" onSubmit={handleAddVisita}>
            <div className="input-icon w-full">
              <input
                type="date"
                className="m-auto ml-0.5 w-full"
                id="fecha_visita"
                name="fecha_visita"
                required
                value={fechaVisita}
                onChange={(e) => setFechaVisita(e.target.value)}
              />
              <FontAwesomeIcon icon={faCalendarDay} className="icon" />
            </div>

            <div className="input-icon w-full">
              <select className="border rounded p-2 w-full" required
                value={motivo} onChange={(e) => setMotivo(e.target.value)}>
                <option value="">Motivo</option>
                <option value="REVISION_GENERAL">Revisión general</option>
                <option value="VACUNACION">Vacunación</option>
                <option value="TRATAMIENTO_ENFERMEDAD">Tratamiento de enfermedad</option>
                <option value="HERIDA">Herida</option>
                <option value="PARTO">Parto</option>
                <option value="REVISION_REPRODUCTIVA">Revisión reproductiva</option>
              </select>

              <FontAwesomeIcon icon={faNotesMedical} className="icon" />
            </div>

            <div className="input-icon w-full">
              <textarea type="text" className='border rounded p-2  ml-0.5 w-full' id="sintomas" name="sintomas" placeholder="Síntomas" required
                value={sintomas}
                onChange={(e) => setSintomas(e.target.value)}
              />
              <FontAwesomeIcon icon={faNotesMedical} className="icon" />
            </div>

            <div className="input-icon w-full mt-6">
              <textarea type="text" className='border rounded p-2 ml-0.5 w-full' id="diagnostico" name="diagnostico" placeholder="Diagnóstico" required
                value={diagnostico}
                onChange={(e) => setDiagnostico(e.target.value)}
              />
              <FontAwesomeIcon icon={faNotesMedical} className="icon" />
            </div>

            <div className="input-icon w-full mt-6 mb-6">
              <textarea type="text" className='border rounded p-2 ml-0.5 w-full' id="tratamiento" name="tratamiento" placeholder="Tratamiento" required
                value={tratamiento}
                onChange={(e) => setTratamiento(e.target.value)}
              />
              <FontAwesomeIcon icon={faNotesMedical} className="icon" />
            </div>

            <div className="input-icon w-full mb-4">
              <input
                type="date"
                className="m-auto ml-0.5 w-full"
                id="prox_visita"
                name="prox_visita"
                placeholder="Próxima visita"
                value={proxVisita}
                onChange={(e) => setProxVisita(e.target.value)}
              />
              <FontAwesomeIcon icon={faCalendarDay} className="icon" />
            </div>

            <button className="boton-login w-[100%] cursor-pointer bg-[#909777]" type="submit">
              Registrar
            </button>
          </form>

          <Dialog.Close className="absolute top-2 right-4 text-gray-500 hover:text-black text-xl cursor-pointer">
            ✕
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};


export const FormularioSanidad = ({ id, nombre, personal }) => {

  const [fechaAplicacion, setFechaAplicacion] = useState('');
  const [tipoActividad, setTipoActividad] = useState('');
  const [idGanado, setIdGanado] = useState(id);
  const [dosis, setDosis] = useState('');
  const [supervisor, setSupervisor] = useState('');
  const [observaciones, setObservaciones] = useState('');

  const handleAddSanidad = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/api/plan_sanitario/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fecha_aplicacion: fechaAplicacion,
          tipo_actividad: tipoActividad,
          id_ganado: idGanado,
          dosis,
          supervisor,
          observaciones
        })
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Sanidad agregada exitosamente:', data);
        alert('Sanidad agregada exitosamente');
        window.location.reload();
      } else {
        alert(data.message || 'Error al registrar la visita');
      }
    } catch (err) {
      console.error('Error de red:', err);
      alert('Error de conexión con el servidor.');
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <span className="text-2xl cursor-pointer transition duration-300 ease-in-out hover:drop-shadow-[1px_1px_2px_#2b370185]">
          <FontAwesomeIcon icon={faPlus} />
        </span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/40 fixed inset-0 z-100" />
        <Dialog.Content className="bg-[#fffdef] rounded-2xl shadow-2xl p-6 w-[90%] max-w-md mx-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-100">
          <Dialog.Title className="text-xl font-bold mb-2">
            Registrar datos de sanidad
          </Dialog.Title>
          <Dialog.Description className="text-sm text-gray-500 mb-4">
            Completa la información para registrar una nueva aplicación sanitaria para el animal {nombre}.
          </Dialog.Description>

          <form className="flex flex-col gap-4 h-full" onSubmit={handleAddSanidad}>
            <div className="input-icon w-full">
              <input
                type="date"
                className="m-auto ml-0.5 w-full"
                id="fecha_aplicacion"
                name="fecha_aplicacion"
                required
                value={fechaAplicacion}
                onChange={(e) => setFechaAplicacion(e.target.value)}
              />
              <FontAwesomeIcon icon={faCalendarDay} className="icon" />
            </div>

            <div className="input-icon w-full">
              <select className="border rounded p-2 w-full" required
                value={tipoActividad} onChange={(e) => setTipoActividad(e.target.value)}>
                <option value="">Tipo de actividad</option>
                <option value="Vacunación">Vacunación</option>
                <option value="Vitaminización">Vitaminización</option>
                <option value="Desparacitacitación">Desparacitacitación</option>
              </select>

              <FontAwesomeIcon icon={faNotesMedical} className="icon" />
            </div>

            {personal === false && (
              <div className="input-icon w-full">
                <input
                  type="number"
                  className="m-auto ml-0.5 w-full"
                  id="id_ganado"
                  name="id_ganado"
                  placeholder="ID del ganado"
                  required
                  value={idGanado}
                  onChange={(e) => setIdGanado(e.target.value)}
                />
                <FontAwesomeIcon icon={faCow} className="icon" />
              </div>
            )}


            <div className="input-icon w-full">
              <input
                type="text"
                className="m-auto ml-0.5 w-full"
                id="dosis"
                name="dosis"
                placeholder="Dosis"
                required
                value={dosis}
                onChange={(e) => setDosis(e.target.value)}
              />
              <FontAwesomeIcon icon={faNotesMedical} className="icon" />
            </div>

            <div className="input-icon w-full">
              <input
                type="text"
                className="m-auto ml-0.5 w-full"
                id="supervisor"
                name="supervisor"
                placeholder="Supervisor"
                required
                value={supervisor}
                onChange={(e) => setSupervisor(e.target.value)}
              />
              <FontAwesomeIcon icon={faNotesMedical} className="icon" />
            </div>

            <div className="input-icon w-full mb-6">
              <textarea type="text" className='border rounded p-2 ml-0.5 w-full' id="observaciones" name="observaciones" placeholder="Observaciones" required
                value={observaciones}
                onChange={(e) => setObservaciones(e.target.value)}
              />
              <FontAwesomeIcon icon={faNotesMedical} className="icon" />
            </div>


            <button className="boton-login w-[100%] cursor-pointer bg-[#909777]" type="submit">
              Registrar
            </button>
          </form>

          <Dialog.Close className="absolute top-2 right-4 text-gray-500 hover:text-black text-xl cursor-pointer">
            ✕
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export const FormularioPasswordEdit = ({ user }) => {

  const [nuevaContraseña, setNuevaContraseña] = useState('');
  const [show, setShow] = useState(false);

  const handleEditContraseña = async (e) => {
    e.preventDefault();

    try {



      const resUser = await fetch(`http://localhost:3000/api/usuario/${user}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ contrasena: nuevaContraseña })
      });

      const dataUser = await resUser.json();

      if (resUser.ok) {
        console.log('Contraseña editada exitosamente:', dataUser);
        alert('Edición exitosa');
        window.location.reload();
      } else {
        alert(dataUser.message || 'Error al editar la contraseña');
      }
    } catch (err) {
      console.error('Error de red:', err);
      alert('Error de conexión con el servidor.');
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="bg-[#e9edc9] border-none shadow-[10px_10px_10px_2px_rgba(0,0,0,0.164)] text-black px-4 py-2 rounded hover:shadow-[0px_0px_10px_2px_rgba(0,0,0,0.164)] transition-all duration-300 ease-in-out">Cambiar contraseña</button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/40 fixed inset-0" />
        <Dialog.Content className="bg-[#fffdef] rounded-2xl shadow-lg p-6 w-[90%] max-w-md mx-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <Dialog.Title className="text-xl font-bold mb-4">Cambiar contraseña</Dialog.Title>

          <form className="flex flex-col gap-4 h-full" onSubmit={handleEditContraseña}>

            <div className="input-icon w-full ">
              <input type={show === false ? "password" : "text"} className='m-auto ml-0.5 w-full' id="password" name="password" placeholder="Nueva contraseña"
                value={nuevaContraseña} onChange={(e) => setNuevaContraseña(e.target.value)} />
              <FontAwesomeIcon onClick={() => setShow(!show)} icon={show === false ? faEyeSlash : faEye} className="icon cursor-pointer" />
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

export const FormularioEmailEdit = ({ user }) => {

  const [nuevoEmail, setNuevoEmail] = useState('');

  const handleEditEmail = async (e) => {
    e.preventDefault();

    try {
      const resEmpleado = await fetch(`http://localhost:3000/api/empleado/${user}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: nuevoEmail })
      });

      const dataEmpleado = await resEmpleado.json();

      if (resEmpleado.ok) {
        console.log('Email editada exitosamente:', dataEmpleado);
        alert('Edición exitosa');
        window.location.reload();
      } else {
        alert(dataEmpleado.message || 'Error al editar la Email');
      }
    } catch (err) {
      console.error('Error de red:', err);
      alert('Error de conexión con el servidor.');
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="bg-[#e9edc9] border-none shadow-[10px_10px_10px_2px_rgba(0,0,0,0.164)] text-black px-4 py-2 rounded hover:shadow-[0px_0px_10px_2px_rgba(0,0,0,0.164)] transition-all duration-300 ease-in-out">Cambiar correo</button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/40 fixed inset-0" />
        <Dialog.Content className="bg-[#fffdef] rounded-2xl shadow-lg p-6 w-[90%] max-w-md mx-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <Dialog.Title className="text-xl font-bold mb-4">Cambiar Email</Dialog.Title>

          <form className="flex flex-col gap-4 h-full" onSubmit={handleEditEmail}>

            <div className="input-icon w-full ">
              <input type="text" className='m-auto ml-0.5 w-full' id="password" name="password" placeholder="Nuevo Email"
                value={nuevoEmail} onChange={(e) => setNuevoEmail(e.target.value)} />
              <FontAwesomeIcon icon={faEnvelope} className="icon cursor-pointer" />
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

export const FormularioAddReqBpg = () => {
  const [idEmpleado, setIdEmpleado] = useState('');
  const [fecha, setFecha] = useState('');
  const [reqCumplido, setReqCumplido] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [estado, setEstado] = useState('');

  const handleAddReq = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/api/requerimientos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id_empleado: idEmpleado,
          fecha,
          req_cumplido: reqCumplido,
          descripcion,
          estado
        })
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Requerimiento agregado exitosamente:', data);
        alert('Requerimiento agregado exitosamente');
        window.location.reload();
      } else {
        alert(data.message || 'Error al registrar la requerimiento');
      }
    } catch (err) {
      console.error('Error de red:', err);
      alert('Error de conexión con el servidor.');
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <span className="text-2xl cursor-pointer transition duration-300 ease-in-out hover:drop-shadow-[1px_1px_2px_#2b370185]">
          <FontAwesomeIcon icon={faPlus} />
        </span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/40 fixed inset-0 z-100" />
        <Dialog.Content className="bg-[#fffdef] rounded-2xl shadow-2xl p-6 w-[90%] max-w-md mx-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-100">
          <Dialog.Title className="text-xl font-bold mb-2">
            Registrar nuevo requerimiento
          </Dialog.Title>

          <form className="flex flex-col gap-4 h-full" onSubmit={handleAddReq}>
            <div className="input-icon w-full">
              <input
                type="number"
                className="m-auto ml-0.5 w-full"
                id="id_empleado"
                name="id_empleado"
                placeholder='ID del empleado'
                required
                value={idEmpleado}
                onChange={(e) => setIdEmpleado(e.target.value)}
              />
              <FontAwesomeIcon icon={faUser} className="icon" />
            </div>

            <div className="input-icon w-full">
              <input
                type="date"
                className="m-auto ml-0.5 w-full"
                id="fecha"
                name="fecha"
                placeholder="Fecha de cumplimiento"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
              <FontAwesomeIcon icon={faCalendarDay} className="icon" />
            </div>

            <div className="input-icon w-full ml-0.5">
              <select className="border rounded p-2 w-full" required
                value={reqCumplido} onChange={(e) => setReqCumplido(e.target.value)}>
                <option value="">Requerimiento cumplido</option>
                <option value="Sanidad animal">Sanidad animal</option>
                <option value="Identificación individual">Identificación individual</option>
                <option value="Bioseguridad">Bioseguridad</option>
                <option value="Higiene ordeño">Higiene ordeño</option>
                <option value="Medicamentos veterinarios">Medicamentos veterinarios</option>
                <option value="Alimentación animal">Alimentación animal</option>
                <option value="Bienestar animal">Bienestar animal</option>
                <option value="Capacitación personal">Capacitación personal</option>
                <option value="Infraestructura">Infraestructura</option>
                <option value="Trazabilidad y registros">Trazabilidad y registros</option>
                <option value="Saneamiento">Saneamiento</option>
              </select>

              <FontAwesomeIcon icon={faCheckCircle} className="icon" />
            </div>

            <div className="input-icon w-full mb-6">
              <textarea type="text" className='border rounded p-2  ml-0.5 w-full' id="descripcion" name="descripcion" placeholder="Descripción" required
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
              <FontAwesomeIcon icon={faDochub} className="icon" />
            </div>

            <div className="input-icon w-full m-auto ml-0.5">
              <select className="border rounded p-2 w-full" required
                value={estado} onChange={(e) => setEstado(e.target.value)}>
                <option value="">Estado</option>
                <option value="Cumplido">Cumplido</option>
                <option value="Pendiente">Pendiente</option>
              </select>

              <FontAwesomeIcon icon={faCheckCircle} className="icon" />
            </div>



            <button className="boton-login w-[100%] cursor-pointer bg-[#909777]" type="submit">
              Registrar
            </button>
          </form>

          <Dialog.Close className="absolute top-2 right-4 text-gray-500 hover:text-black text-xl cursor-pointer">
            ✕
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export const FormularioEditReqBpg = ({ idReq, estado }) => {

  const [idEmpleado, setIdEmpleado] = useState('');
  const [fecha, setFecha] = useState('');
  const [reqCumplido, setReqCumplido] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleEditReq = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/api/requerimientos/${idReq}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id_empleado: idEmpleado,
          fecha,
          req_cumplido: reqCumplido,
          descripcion,
          estado
        })
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Requerimiento editado exitosamente:', data);
        window.location.reload();
      } else {
        alert(data.message || 'Error al editar requerimiento');
      }
    } catch (err) {
      console.error('Error de red:', err);
      alert('Error de conexión con el servidor.');
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <span className="">{<FontAwesomeIcon icon={faPen} />}</span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/40 fixed inset-0 z-100" />
        <Dialog.Content className="bg-[#fffdef] rounded-2xl shadow-2xl p-6 w-[90%] max-w-md mx-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-100">
          <Dialog.Title className="text-xl font-bold mb-2">
            Registrar nuevo requerimiento
          </Dialog.Title>

          <form className="flex flex-col gap-4 h-full" onSubmit={handleEditReq}>
            <div className="input-icon w-full">
              <input
                type="number"
                className="m-auto ml-0.5 w-full"
                id="id_empleado"
                name="id_empleado"
                placeholder='ID del empleado'
                required
                value={idEmpleado}
                onChange={(e) => setIdEmpleado(e.target.value)}
              />
              <FontAwesomeIcon icon={faUser} className="icon" />
            </div>

            <div className="input-icon w-full">
              <input
                type="date"
                className="m-auto ml-0.5 w-full"
                id="fecha"
                name="fecha"
                placeholder="Fecha de cumplimiento"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
              <FontAwesomeIcon icon={faCalendarDay} className="icon" />
            </div>

            <div className="input-icon w-full ml-0.5">
              <select className="border rounded p-2 w-full" required
                value={reqCumplido} onChange={(e) => setReqCumplido(e.target.value)}>
                <option value="">Requerimiento cumplido</option>
                <option value="Sanidad animal">Sanidad animal</option>
                <option value="Identificación individual">Identificación individual</option>
                <option value="Bioseguridad">Bioseguridad</option>
                <option value="Higiene ordeño">Higiene ordeño</option>
                <option value="Medicamentos veterinarios">Medicamentos veterinarios</option>
                <option value="Alimentación animal">Alimentación animal</option>
                <option value="Bienestar animal">Bienestar animal</option>
                <option value="Capacitación personal">Capacitación personal</option>
                <option value="Infraestructura">Infraestructura</option>
                <option value="Trazabilidad y registros">Trazabilidad y registros</option>
                <option value="Saneamiento">Saneamiento</option>
              </select>

              <FontAwesomeIcon icon={faCheckCircle} className="icon" />
            </div>

            <div className="input-icon w-full mb-6">
              <textarea type="text" className='border rounded p-2  ml-0.5 w-full' id="descripcion" name="descripcion" placeholder="Descripción" required
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
              <FontAwesomeIcon icon={faDochub} className="icon" />
            </div>



            <button className="boton-login w-[100%] cursor-pointer bg-[#909777]" type="submit">
              Editar
            </button>
          </form>

          <Dialog.Close className="absolute top-2 right-4 text-gray-500 hover:text-black text-xl cursor-pointer">
            ✕
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};