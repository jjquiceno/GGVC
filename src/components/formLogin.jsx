import React, { useState, useEffect } from 'react'
// import './formLogin.css'
import * as Dialog from '@radix-ui/react-dialog';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faPlus, faCow, faMarsAndVenus, faCalendarDay, faHouse, faPenToSquare, faNotesMedical, faPen, faXmarksLines, faEyeDropper, faEye, faEyeSlash, faEnvelope, faCheckCircle, faScaleBalanced, faIdCard, faPhone, faDroplet, faClock, faBowlFood, faBolt } from '@fortawesome/free-solid-svg-icons';

import { useNavigate, Link } from "react-router-dom"
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faDochub } from '@fortawesome/free-brands-svg-icons';
// import { Routes, Route, Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import { toast } from 'sonner'

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
        Swal.fire({
          title: '¡Bienvenido!',
          text: `Hola ${data.user.usuario} 👋`,
          icon: 'success',
          background: '#fffdef',
          color: '#00000',
          confirmButtonText: 'Continuar',
          buttonsStyling: false, // 🔹 Desactiva estilos por defecto
          customClass: {
            popup: 'max-w-xs p-4 rounded-xl shadow-lg',
            title: 'text-lg font-bold',
            htmlContainer: 'text-xs',
            confirmButton: 'bg-[#909777] text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition'
          },
          showClass: {
            popup: 'animate__animated animate__zoomIn'
          },
          hideClass: {
            popup: 'animate__animated animate__zoomOut'
          }
        }).then(() => {
          navigate('/welcome');
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: data.message || 'Error al iniciar sesión',
          icon: 'error',
          confirmButtonColor: '#d33'
        });
      }
    } catch (err) {
      console.error('Error de red:', err);
      Swal.fire({
        title: 'Error de conexión',
        text: 'No se pudo conectar con el servidor.',
        icon: 'warning',
        confirmButtonColor: '#f39c12'
      });
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
        toast.success('¡Ganado agregado!', {
          description: 'Se registró correctamente.',
          action: {
            label: 'OK',
            onClick: () => {
              window.location.reload();
            }
          }
        })
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
      <span className="text-2xl cursor-pointer transition duration-300 ease-in-out hover:drop-shadow-[1px_1px_2px_#2b370185]">
          <FontAwesomeIcon icon={faPlus} />
        </span>
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

export const FormularioGeneralFinalPrenez = ({ id, open, onOpenChange }) => {

  const navigate = useNavigate();

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/40 fixed inset-0 z-50" />
        <Dialog.Content className="bg-[#fffdef] rounded-2xl shadow-lg p-6 w-[90%] max-w-md mx-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <Dialog.Title className="text-xl font-bold mb-4">
            Selecciona lo que quieres editar
          </Dialog.Title>

          <div className="flex flex-col gap-4">
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
};

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
        toast.success('¡Edicion Exitosa!', {
          description: 'Se registró correctamente.',
          action: {
            label: 'OK',
            onClick: () => {
              window.location.reload();
            }
          }
        })
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
        toast.success('¡Edicion Exitosa!', {
          description: 'Se registró correctamente.',
          action: {
            label: 'OK',
            onClick: () => {
              window.location.reload();
            }
          }
        })
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
        toast.success('¡Edicion Exitosa!', {
          description: 'Se registró correctamente.',
          action: {
            label: 'OK',
            onClick: () => {
              window.location.reload();
            }
          }
        })
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
        toast.success('¡Edicion Exitosa!', {
          description: 'Se registró correctamente.',
          action: {
            label: 'OK',
            onClick: () => {
              window.location.reload();
            }
          }
        })
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
        <span className="z-[9999] text-2xl cursor-pointer transition duration-300 ease-in-out hover:drop-shadow-[1px_1px_2px_#2b370185]">
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
        toast.success('¡Sanidad agregada exitosamente!', {
          description: 'Se registró correctamente.',
          action: {
            label: 'OK',
            onClick: () => {
              window.location.reload();
            }
          }
        })
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
        toast.success('¡Contraseña editada exitosamente!', {
          description: 'Se registró correctamente.',
          action: {
            label: 'OK',
            onClick: () => {
              window.location.reload();
            }
          }
        })
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
        toast.success('¡Edicion exitosa!', {
          description: 'Se registró correctamente.',
          action: {
            label: 'OK',
            onClick: () => {
              window.location.reload();
            }
          }
        })
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
        toast.success('¡Edicion exitosa!', {
          description: 'Se registró correctamente.',
          action: {
            label: 'OK',
            onClick: () => {
              window.location.reload();
            }
          }
        })
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
        toast.success('¡Edicion exitosa!', {
          description: 'Se registró correctamente.',
          action: {
            label: 'OK',
            onClick: () => {
              window.location.reload();
            }
          }
        })
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
        <span className="cursor-pointer">{<FontAwesomeIcon icon={faPen} />}</span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/40 fixed inset-0 z-100" />
        <Dialog.Content className="bg-[#fffdef] rounded-2xl shadow-2xl p-6 w-[90%] max-w-md mx-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-100">
          <Dialog.Title className="text-xl font-bold mb-2">
            Editar requerimiento
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

export const FormularioPalpaciones = ({ }) => {

  const [fecha, setFecha] = useState('');
  const [idGanado, setIdGanado] = useState('');
  const [hallazgo, setHallazgo] = useState('');
  const [observaciones, setObservaciones] = useState('');
  const [condCorporal, setCondCorporal] = useState('');
  const [palpador, setPalpador] = useState('');
  const [utero, setUtero] = useState('');
  const [ovarioIzq, setOvarioIzq] = useState('');
  const [ovarioDer, setOvarioDer] = useState('');


  const handleAddPalpacion = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/api/palpaciones/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fecha,
          id_ganado: idGanado,
          hallazgo,
          observaciones,
          condicion_corporal: condCorporal,
          palpador,
          utero,
          ovario_izq: ovarioIzq,
          ovario_der: ovarioDer
        })
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Palpacion agregada exitosamente:', data);
        toast.success('¡Edicion exitosa!', {
          description: 'Se registró correctamente.',
          action: {
            label: 'OK',
            onClick: () => {
              window.location.reload();
            }
          }
        })
      } else {
        alert(data.message || 'Error al registrar palpacion');
      }
    } catch (err) {
      console.error('Error de red:', err);
      alert('Error de conexión con el servidor.');
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <span className="z-[50] px-15 mt-10 text-2xl cursor-pointer transition duration-300 ease-in-out hover:drop-shadow-[1px_1px_2px_#2b370185]">
          <FontAwesomeIcon icon={faPlus} />
        </span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/40 fixed inset-0 z-100" />
        <Dialog.Content className="bg-[#fffdef] rounded-2xl shadow-2xl p-6 w-[90%] max-w-md mx-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-100">
          <Dialog.Title className="text-xl font-bold mb-2">
            Registrar palpacion
          </Dialog.Title>

          <form className="flex flex-col gap-4 h-full" onSubmit={handleAddPalpacion}>
            <div className="input-icon w-full">
              <input
                type="date"
                className="m-auto ml-0.5 w-full"
                id="fecha"
                name="fecha"
                required
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
              <FontAwesomeIcon icon={faCalendarDay} className="icon" />
            </div>

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

            <div className="input-icon w-full mb-6">
              <textarea type="text" className='border rounded p-2 ml-0.5 w-full' id="hallazgo" name="hallazgo" placeholder="Hallazgo" required
                value={hallazgo}
                onChange={(e) => setHallazgo(e.target.value)}
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


            <div className="input-icon w-full">
              <select className="border rounded p-2 w-full" required
                value={condCorporal} onChange={(e) => setCondCorporal(e.target.value)}>
                <option value="">Condición corporal</option>
                <option value="Mala">Mala</option>
                <option value="Regular">Regular</option>
                <option value="Buena">Buena</option>
                <option value="Muy_buena">Muy Buena</option>
                <option value="Excelente">Excelente</option>
              </select>

              <FontAwesomeIcon icon={faNotesMedical} className="icon" />
            </div>



            <div className="input-icon w-full">
              <input
                type="text"
                className="m-auto ml-0.5 w-full"
                id="palpador"
                name="palpador"
                placeholder="Palpador"
                required
                value={palpador}
                onChange={(e) => setPalpador(e.target.value)}
              />
              <FontAwesomeIcon icon={faUser} className="icon" />
            </div>

            <div className="input-icon w-full">
              <input
                type="text"
                className="m-auto ml-0.5 w-full"
                id="utero"
                name="utero"
                placeholder="Utero"
                required
                value={utero}
                onChange={(e) => setUtero(e.target.value)}
              />
              <FontAwesomeIcon icon={faNotesMedical} className="icon" />
            </div>

            <div className="input-icon w-full">
              <input
                type="text"
                className="m-auto ml-0.5 w-full"
                id="ovario_izq"
                name="ovario_izq"
                placeholder="Ovario izquierdo"
                required
                value={ovarioIzq}
                onChange={(e) => setOvarioIzq(e.target.value)}
              />
              <FontAwesomeIcon icon={faNotesMedical} className="icon" />
            </div>

            <div className="input-icon w-full">
              <input
                type="text"
                className="m-auto ml-0.5 w-full"
                id="ovario_der"
                name="ovario_der"
                placeholder="Ovario derecho"
                required
                value={ovarioDer}
                onChange={(e) => setOvarioDer(e.target.value)}
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

export const FormularioAddPesaje = ({ id, nombre }) => {

  const [peso, setPeso] = useState('');
  const [fecha, setFecha] = useState('');
  const [idGanado, setIdGanado] = useState(id);

  const fechaCompleta = fecha.length === 7 ? `${fecha}-01` : fecha;

  const handleAddPalpacion = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/api/peso/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          peso,
          fecha: fechaCompleta,
          id_ganado: idGanado
        })
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Peso agregado exitosamente:', data);
        toast.success('¡Edicion exitosa!', {
          description: 'Se registró correctamente.',
          action: {
            label: 'OK',
            onClick: () => {
              window.location.reload();
            }
          }
        })
      } else {
        alert(data.message || 'Error al registrar peso');
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
            Registrar pesaje para {nombre}
          </Dialog.Title>

          <form className="flex flex-col gap-4 h-full" onSubmit={handleAddPalpacion}>

            <div className="input-icon w-full">
              <input
                type="number"
                step="0.01"
                min="0"
                className="m-auto ml-0.5 w-full"
                id="peso"
                name="peso"
                placeholder="Peso (kg)"
                required
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
              />
              <FontAwesomeIcon icon={faScaleBalanced} className="icon" />
            </div>


            <div className="input-icon w-full">
              <input
                type="month"
                className="m-auto ml-0.5 w-full"
                id="fecha"
                name="fecha"
                required
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
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



export const FormularioEditEmpleado = ({ id_empleado }) => {

  const [usuario, setUsuario] = useState('');
  const [dni, setDni] = useState('');
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [show, setShow] = useState(false);
  const [rol, setRol] = useState('');

  const handleEditEmpleado = async (e) => {
    e.preventDefault();

    try {
      const body = {};

      // Si los campos tienen un valor (no es undefined, null ni una cadena vacía)
      if (usuario) {
        body.usuario = usuario;
      }

      if (dni) {
        body.dni = dni;
      }

      if (nombre) {
        body.nombre = nombre;
      }

      if (email) {
        body.email = email;
      }

      if (telefono) {
        body.telefono = telefono;
      }

      if (contraseña) {
        body.contraseña = contraseña;
      }

      if (rol) {
        body.rol = rol;
      }

      // Si el objeto 'body' está vacío, no hacemos nada
      if (Object.keys(body).length === 0) {
        console.warn('No hay datos para actualizar.');
        return;
      }

      const response = await fetch(`http://localhost:3000/api/empleado/admin/${id_empleado}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Empleado y/o usuario editado exitosamente:', data);
        toast.success('¡Edicion exitosa!', {
          description: 'Se registró correctamente.',
          action: {
            label: 'OK',
            onClick: () => {
              window.location.reload();
            }
          }
        })
      } else {
        alert(data.message || 'Error al editar datos');
      }
    } catch (err) {
      console.error('Error de red:', err);
      alert('Error de conexión con el servidor.');
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <span><FontAwesomeIcon icon={faPen} /></span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/40 fixed inset-0" />
        <Dialog.Content className="bg-[#fffdef] rounded-2xl shadow-lg p-6 w-[90%] max-w-md mx-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <Dialog.Title className="text-xl font-bold mb-4">Editar datos</Dialog.Title>
          <Dialog.Description className="text-sm text-gray-500 mb-4">
            Aquí puedes editar los datos del empleado y/o usuario. Si no deseas cambiar un campo, simplemente déjalo vacío.
          </Dialog.Description>

          <form className="flex flex-col gap-4 h-full" onSubmit={handleEditEmpleado}>

            <div className="input-icon w-full ">
              <input type="text" className='m-auto ml-0.5 w-full' id="usuario" name="usuario" placeholder="Usuario"
                value={usuario} onChange={(e) => setUsuario(e.target.value)} />
              <FontAwesomeIcon icon={faUser} className="icon" />
            </div>

            <div className="input-icon w-full ">
              <input type="text" className='m-auto ml-0.5 w-full' id="dni" name="dni" placeholder="Número de documento"
                value={dni} onChange={(e) => setDni(e.target.value)} />
              <FontAwesomeIcon icon={faIdCard} className="icon" />
            </div>

            <div className="input-icon w-full ">
              <input type="text" className='m-auto ml-0.5 w-full' id="nombre" name="nombre" placeholder="Nombre"
                value={nombre} onChange={(e) => setNombre(e.target.value)} />
              <FontAwesomeIcon icon={faUser} className="icon" />
            </div>

            <div className="input-icon w-full ">
              <input type="email" className='m-auto ml-0.5 w-full' id="email" name="email" placeholder="Correo electrónico"
                value={email} onChange={(e) => setEmail(e.target.value)} />
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
            </div>

            <div className="input-icon w-full ">
              <input type="text" className='m-auto ml-0.5 w-full' id="telefono" name="telefono" placeholder="Número telefonico"
                value={telefono} onChange={(e) => setTelefono(e.target.value)} />
              <FontAwesomeIcon icon={faPhone} className="icon" />
            </div>

            <div className="input-icon w-full ">
              <input type={show === false ? "password" : "text"} className='m-auto ml-0.5 w-full' id="password" name="password" placeholder="Nueva contraseña"
                value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
              <FontAwesomeIcon onClick={() => setShow(!show)} icon={show === false ? faEyeSlash : faEye} className="icon cursor-pointer" />
            </div>

            <div className="input-icon w-full">
              <select className="border rounded p-2 w-full"
                value={rol} onChange={(e) => setRol(e.target.value)}>
                <option value="">Rol</option>
                <option value="empleado">Empleado</option>
                <option value="admin">Administrador</option>
              </select>
              <FontAwesomeIcon icon={faUser} className="icon" />
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

export const FormularioAddProduccion = () => {

  const [idEmpleado, setIdEmpleado] = useState('');
  const [fecha, setFecha] = useState('');
  const [litros, setLitros] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleAddProduccion = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/api/producciones`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id_empleado: idEmpleado,
          fecha,
          litros,
          descripcion
        })
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Producción agregada exitosamente:', data);
        toast.success('¡Edicion exitosa!', {
          description: 'Se registró correctamente.',
          action: {
            label: 'OK',
            onClick: () => {
              window.location.reload();
            }
          }
        })
      } else {
        alert(data.message || 'Error al registrar la priducción');
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
            Registrar producción de leche
          </Dialog.Title>

          <form className="flex flex-col gap-4 h-full" onSubmit={handleAddProduccion}>
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
                placeholder='Fecha'
                required
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
              <FontAwesomeIcon icon={faCalendarDay} className="icon" />
            </div>

            <div className="input-icon w-full">
              <input
                type="number"
                className="m-auto ml-0.5 w-full"
                id="litros"
                name="litros"
                placeholder='Litros'
                required
                value={litros}
                onChange={(e) => setLitros(e.target.value)}
              />
              <FontAwesomeIcon icon={faDroplet} className="icon" />
            </div>

            <div className="input-icon w-full">
              <input
                type="text"
                className="m-auto ml-0.5 w-full"
                id="descripcion"
                name="descripcion"
                placeholder="Descripción"
                required
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
              <FontAwesomeIcon icon={faDochub} className="icon" />
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

export const FormularioAddManoDeObra = () => {

  const [fecha, setFecha] = useState('');
  const [idEmpleado, setIdEmpleado] = useState('');
  const [tipo, setTipo] = useState('');
  const [actividad, setActividad] = useState('');
  const [duracion, setDuracion] = useState('');

  const handleAddProduccion = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/api/mano_de_obra/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fecha,
          id_empleado: idEmpleado,
          tipo,
          actividad,
          duracion: duracion + ' h'
        })
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Mano de obra agregada exitosamente:', data);
        toast.success('¡Edicion exitosa!', {
          description: 'Se registró correctamente.',
          action: {
            label: 'OK',
            onClick: () => {
              window.location.reload();
            }
          }
        })
      } else {
        alert(data.message || 'Error al registrar la mano de obra');
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
            Registrar mano de obra
          </Dialog.Title>

          <form className="flex flex-col gap-4 h-full" onSubmit={handleAddProduccion}>

            <div className="input-icon w-full">
              <input
                type="date"
                className="m-auto ml-0.5 w-full"
                id="fecha"
                name="fecha"
                placeholder='Fecha'
                required
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
              <FontAwesomeIcon icon={faCalendarDay} className="icon" />
            </div>

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
              <select className="border rounded p-2 w-full"
                value={tipo} onChange={(e) => setTipo(e.target.value)}>
                <option value="">Tipo</option>
                <option value="Contratada">Contratada</option>
                <option value="Prestación de servicios">Prestación de servicios</option>
                <option value="Otro">Otro</option>
              </select>
              <FontAwesomeIcon icon={faUser} className="icon" />
            </div>


            <div className="input-icon w-full">
              <input
                type="text"
                className="m-auto ml-0.5 w-full"
                id="actividad"
                name="actividad"
                placeholder="Actividad"
                required
                value={actividad}
                onChange={(e) => setActividad(e.target.value)}
              />
              <FontAwesomeIcon icon={faCheckCircle} className="icon" />
            </div>

            <div className="input-icon w-full">
              <input
                type="number"
                className="m-auto ml-0.5 w-full"
                id="duracion"
                name="duracion"
                placeholder='Duracion (en horas)'
                required
                value={duracion}
                onChange={(e) => setDuracion(e.target.value)}
              />
              <FontAwesomeIcon icon={faClock} className="icon" />
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

export const FormularioNutricion = () => {

  const [idGanado, setIdGanado] = useState('');
  const [fecha, setFecha] = useState('');
  const [tipoAlimento, setTipoAlimento] = useState('');
  const [nombreAlimento, setNombreAlimento] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [observaciones, setObservaciones] = useState('');
  const [supervisor, setSupervisor] = useState('');

  const handleAddProduccion = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/api/nutricion`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id_ganado: idGanado,
          fecha,
          tipo_alimento: tipoAlimento,
          nombre_alimento: nombreAlimento,
          cantidad,
          observaciones,
          supervisor
        })
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Nutricion agregada exitosamente:', data);
        toast.success('¡Edicion exitosa!', {
          description: 'Se registró correctamente.',
          action: {
            label: 'OK',
            onClick: () => {
              window.location.reload();
            }
          }
        })
      } else {
        alert(data.message || 'Error al registrar la nutricion');
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
            Registrar nutricion
          </Dialog.Title>

          <form className="flex flex-col gap-4 h-full" onSubmit={handleAddProduccion}>

          <div className="input-icon w-full">
              <input
                type="number"
                className="m-auto ml-0.5 w-full"
                id="id_ganado"
                name="id_ganado"
                placeholder='ID del ganado'
                required
                value={idGanado}
                onChange={(e) => setIdGanado(e.target.value)}
              />
              <FontAwesomeIcon icon={faCow} className="icon" />
            </div>

            <div className="input-icon w-full">
              <input
                type="date"
                className="m-auto ml-0.5 w-full"
                id="fecha"
                name="fecha"
                placeholder='Fecha'
                required
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
              <FontAwesomeIcon icon={faCalendarDay} className="icon" />
            </div>

            <div className="input-icon w-full">
              <select className="border rounded p-2 w-full"
                value={tipoAlimento} onChange={(e) => setTipoAlimento(e.target.value)}>
                <option value="">Tipo de Alimento</option>
                <option value="Suplemento">Suplemento</option>
                <option value="Concentrado">Concentrado</option>
                <option value="Sal mineralizada">Sal mineralizada</option>
              </select>
              <FontAwesomeIcon icon={faBowlFood} className="icon" />
            </div>


            <div className="input-icon w-full">
              <input
                type="text"
                className="m-auto ml-0.5 w-full"
                id="nombre_alimento"
                name="nombre_alimento"
                placeholder="Nombre del alimento"
                required
                value={nombreAlimento}
                onChange={(e) => setNombreAlimento(e.target.value)}
              />
              <FontAwesomeIcon icon={faBowlFood} className="icon"/>
            </div>

            <div className="input-icon w-full">
              <input
                type="number"
                step="0.1"
                min="0"
                className="m-auto ml-0.5 w-full"
                id="cantidad"
                name="cantidad"
                placeholder="Cantidad (decimal)"
                required
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
              />
              <FontAwesomeIcon icon={faBolt} className="icon" />
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
              <FontAwesomeIcon icon={faUser} className="icon"/>
            </div>

            <div className="input-icon w-full mb-6">
              <textarea type="text" className='border rounded p-2 ml-0.5 w-full' id="observaciones" name="observaciones" placeholder="Observaciones" required
                value={observaciones}
                onChange={(e) => setObservaciones(e.target.value)}
              />
              <FontAwesomeIcon icon={faEye} className="icon" />
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

export const FormularioAddPrenez = ({id}) => {

  const [fecha_monta, setFechaMonta] = useState('');
  const [metodo, setMetodo] = useState('');
  const [responsable, setResponsable] = useState('');

  const idGanado = id;

  const handleAddProduccion = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/api/prenez/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id_ganado: idGanado,
          fecha_monta,
          metodo,
          responsable,
          estado: "activa"
        })
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Preñez agregada exitosamente:', data);
        toast.success('¡Edicion exitosa!', {
          description: 'Se registró correctamente.',
          action: {
            label: 'OK',
            onClick: () => {
              window.location.reload();
            }
          }
        })
      } else {
        alert(data.message || 'Error al registrar la preñez');
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
            Registrar preñez
          </Dialog.Title>

          <form className="flex flex-col gap-4 h-full" onSubmit={handleAddProduccion}>

            <div className="input-icon w-full">
              <input
                type="date"
                className="m-auto ml-0.5 w-full"
                id="fecha_monta"
                name="fecha_monta"
                placeholder='Fecha'
                required
                value={fecha_monta}
                onChange={(e) => setFechaMonta(e.target.value)}
              />
              <FontAwesomeIcon icon={faCalendarDay} className="icon" />
            </div>


            <div className="input-icon w-full">
              <select className="border rounded p-2 w-full"
                value={metodo} onChange={(e) => setMetodo(e.target.value)}>
                <option value="">Metodo</option>
                <option value="Monta natural">Monta natural</option>
                <option value="Inseminación artificial">Inseminación artificial</option>
                <option value="Sincronización de celos">Sincronización de celos</option>
                <option value="Transferencia de embriones">Transferencia de embriones</option>
              </select>
              <FontAwesomeIcon icon={faUser} className="icon" />
            </div>


            <div className="input-icon w-full">
              <input
                type="text"
                className="m-auto ml-0.5 w-full"
                id="responsable"
                name="responsable"
                placeholder='Responsable'
                required
                value={responsable}
                onChange={(e) => setResponsable(e.target.value)}
              />
              <FontAwesomeIcon icon={faClock} className="icon" />
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