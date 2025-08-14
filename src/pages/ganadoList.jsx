// import { useState, useEffect } from 'react';
// import React from 'react';
// import axios from 'axios';

// import { ItemsList } from '../components/Items.jsx';
// import { TablaAnimal } from '../components/Tablas.jsx';
// import FormularioAnimalDialog from '../components/formLogin.jsx';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import './ganadoList.css';
// import { faAngleLeft, faBaby, faCheckCircle, faCow, faPersonPregnant, faPlus, faSearch, faSlidersH, faStethoscope } from '@fortawesome/free-solid-svg-icons';
// import { InputSearch } from '../components/inputs.jsx';

// function GanadoListPage() {

//     const [animales, setAnimales] = useState([]);
//     const [busqueda, setBusqueda] = useState('');
//     const [filtrados, setFiltrados] = useState([]);

//     const [selectedAnimal, setSelectedAnimal] = useState(null);

//     const fetchAllData = async () => {
//         try {
//             const ganadoResponse = await axios.get('http://localhost:3000/api/ganado');
//             const ganadoData = ganadoResponse.data;

//             const getIcono = (estado) => {
//                 // ... tu lógica de íconos ...
//                 switch (estado) {
//                     case 'Amamantamiento':
//                         return faBaby;
//                     case 'Prenez':
//                         return faPersonPregnant;
//                     case 'Enfermo':
//                         return faStethoscope;
//                     case 'Sano':
//                         return faCheckCircle;
//                     default:
//                         return faCow;
//                 }
//             };

//             const formatearFecha = (fecha) => {
//                 return new Date(fecha).toISOString().split('T')[0];
//             };

//             const animalesConDatos = await Promise.all(ganadoData.map(async (animal) => {
//                 let potreroNombre = 'No registrado';
//                 let madre = null;
//                 let padre = null;

//                 // Obtener potrero
//                 try {
//                     const potreroResponse = await axios.get(`http://localhost:3000/api/ubicacion/potrero/${animal.id_ganado}`);
//                     potreroNombre = potreroResponse.data.id_potrero || 'No registrado';
//                 } catch (error) {
//                     if (error.response?.status !== 404) {
//                         console.error(`Error al obtener potrero para el animal ${animal.id_ganado}:`, error);
//                     }
//                 }

//                 // Obtener descendencia
//                 try {
//                     const descendenciaResponse = await axios.get(`http://localhost:3000/api/descendencias/ganado/${animal.id_ganado}`);
//                     const descendenciaData = descendenciaResponse.data;
//                     madre = {
//                         nombre: descendenciaData.nombre_madre || 'No registrado',
//                         id: descendenciaData.id_madre || ''
//                     };
//                     padre = {
//                         nombre: descendenciaData.nombre_padre || 'No registrado',
//                         id: descendenciaData.id_padre || ''
//                     };
//                 } catch (error) {
//                     if (error.response?.status !== 404) {
//                         console.error(`Error al obtener descendencia para el animal ${animal.id_ganado}:`, error);
//                     }
//                 }

//                 return {
//                     ...animal,
//                     genero: animal.sexo === 'Hembra' ? 'H' : 'M',
//                     iconoS: getIcono(animal.estado),
//                     fecha: formatearFecha(animal.fecha_nacimiento),
//                     potrero: potreroNombre,
//                     madre: madre,
//                     padre: padre,
//                     descripcion: animal.descripcion
//                 };
//             }));

//             setAnimales(animalesConDatos);

//             if (selectedAnimal) {
//                 const updatedSelected = animalesConDatos.find(a => a.id_ganado === selectedAnimal.id_ganado);
//                 setSelectedAnimal(updatedSelected);
//             }
//         } catch (error) {
//             console.error('Error al obtener los datos:', error);
//         }
//     };


//     const handleUpdateDescendencia = async (data) => {
//         try {
//             const { id_ganado } = data;

//             // Verifica si hay más de un campo en el objeto 'data'
//             if (Object.keys(data).length <= 1) {
//                 console.warn('No hay datos válidos para actualizar.');
//                 return;
//             }

//             // Usa el endpoint PATCH para actualizar solo lo que se envió
//             await axios.patch(`http://localhost:3000/api/descendencias/ganado/${id_ganado}`, data);
//             console.log('Descendencia actualizada');
//         } catch (err) {
//             if (err.response?.status === 404) {
//                 // Si no existe, crea una nueva descendencia
//                 const body = {
//                     id_ganado: data.id_ganado,
//                     id_madre: data.id_madre || null,
//                     id_padre: data.id_padre || null
//                 };
//                 await axios.post('http://localhost:3000/api/descendencias', body);
//                 console.log('Descendencia creada');
//             } else {
//                 console.error("Error en la descendencia:", err);
//             }
//         }

//         fetchAllData();
//     };


//     const handleUpdateUbicacion = async (ganadoId, nuevoPotreroId) => {
//         try {
//             const body = {
//                 id_ganado: ganadoId,
//                 id_potrero: nuevoPotreroId,
//             };

//             await axios.post(`http://localhost:3000/api/ubicacion`, body);
//             console.log('Ubicación creada con éxito.');

//         } catch (err) {
//             console.error("Error al crear la ubicación:", err);
//         }
//         // Llama a fetchAllData para recargar los datos y que los cambios se vean en la UI
//         console.log('Llamando a fetchAllData para recargar la UI...');
//         fetchAllData();
//     };

//     useEffect(() => {
//         fetchAllData();
//     }, []);



//     useEffect(() => {
//         const resultado = animales.filter((animal) =>
//             animal.nombre?.toLowerCase().includes(busqueda.toLowerCase())
//         );
//         setFiltrados(resultado);
//     }, [busqueda, animales]);



//     function calcularEdad(fechaNacimiento) {
//         const hoy = new Date();
//         const nacimiento = new Date(fechaNacimiento);

//         let años = hoy.getFullYear() - nacimiento.getFullYear();
//         let meses = hoy.getMonth() - nacimiento.getMonth();
//         let dias = hoy.getDate() - nacimiento.getDate();

//         if (dias < 0) {
//             meses--;
//             const ultimoMes = new Date(hoy.getFullYear(), hoy.getMonth(), 0);
//             dias += ultimoMes.getDate();
//         }

//         if (meses < 0) {
//             años--;
//             meses += 12;
//         }

//         return `${años}a ${meses}m ${dias}d`;
//     }

//     const handleAnimalClick = (animal) => {
//         setSelectedAnimal(animal);
//     };

//     const handleClick = () => {
//         window.location.href = "/ganado";
//     };

//     return (
//         <>
//             <div className="ganado-list-page ">
//                 <FontAwesomeIcon icon={faAngleLeft} onClick={handleClick} className='text-4xl cursor-pointer' />
//                 <div className="ganado-list-content">

//                     <div className="continer-list">
//                         <div className='w-[90%] h-[10vh] flex flex-col '>
//                             <h2 className='text-3xl font-bold mr-[10rem] mb-5'>Lista del ganado</h2>
//                             <InputSearch icono={<FontAwesomeIcon icon={faSearch} />} type="text" placeholder={"Buscar"}
//                                 value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
//                         </div>
//                         <div className="icons w-[90%] flex justify-between">
//                             <FormularioAnimalDialog />
//                             <FontAwesomeIcon icon={faSlidersH} className="text-black text-2xl cursor-pointer" />
//                         </div>
//                         <div className="list">
//                             {(busqueda.trim() ? filtrados : animales).map((animal) => (
//                                 <ItemsList
//                                     iconoA={<FontAwesomeIcon icon={faCow} />}
//                                     nombre={animal.nombre}
//                                     id={animal.id_ganado}
//                                     genero={animal.genero}
//                                     fecha={animal.fecha}
//                                     iconoS={<FontAwesomeIcon icon={animal.iconoS} />}
//                                     onClick={() => handleAnimalClick(animal)}
//                                     className="cursor-pointer"
//                                 />
//                             ))}
//                         </div>
//                     </div>

//                     <div className="list-info">
//                         {selectedAnimal && (
//                             <TablaAnimal
//                             nombre={selectedAnimal.nombre}
//                             id={selectedAnimal.id_ganado}
//                             numeros={selectedAnimal.fecha}
//                             iconS={<FontAwesomeIcon icon={selectedAnimal.iconoS} />}
//                             fecha={selectedAnimal.fecha}
//                             edad={calcularEdad(selectedAnimal.fecha)}
//                             sexo={selectedAnimal.genero}
//                             raza={selectedAnimal.raza}
//                             madre={selectedAnimal.madre}
//                             padre={selectedAnimal.padre}
//                             desc={selectedAnimal.descripcion}
//                             rebano={selectedAnimal.potrero}
//                             onUpdateDes={handleUpdateDescendencia}
//                             onUpdateUbi={handleUpdateUbicacion}
//                         />
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default GanadoListPage;

import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

import { ItemsList } from '../components/Items.jsx';
import { TablaAnimal } from '../components/Tablas.jsx';
import FormularioAnimalDialog from '../components/formLogin.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faBaby, faCheckCircle, faCow, faPersonPregnant, faSearch, faSlidersH, faStethoscope } from '@fortawesome/free-solid-svg-icons';
import { InputSearch } from '../components/inputs.jsx';

import './ganadoList.css';

function GanadoListPage() {
    const [animales, setAnimales] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [filtrados, setFiltrados] = useState([]);
    const [selectedAnimal, setSelectedAnimal] = useState(null);

    // Estados para filtros
    const [mostrarFiltros, setMostrarFiltros] = useState(false);
    const [filtroProposito, setFiltroProposito] = useState('Todos');
    const [filtroSexo, setFiltroSexo] = useState('Todos');

    const fetchAllData = async () => {
        try {
            const ganadoResponse = await axios.get('http://localhost:3000/api/ganado');
            const ganadoData = ganadoResponse.data;

            const getIcono = (estado) => {
                switch (estado) {
                    case 'Amamantamiento': return faBaby;
                    case 'Prenez': return faPersonPregnant;
                    case 'Enfermo': return faStethoscope;
                    case 'Sano': return faCheckCircle;
                    default: return faCow;
                }
            };

            const formatearFecha = (fecha) => new Date(fecha).toISOString().split('T')[0];

            const animalesConDatos = await Promise.all(ganadoData.map(async (animal) => {
                let potreroNombre = 'No registrado';
                let madre = null;
                let padre = null;

                try {
                    const potreroResponse = await axios.get(`http://localhost:3000/api/ubicacion/potrero/${animal.id_ganado}`);
                    potreroNombre = potreroResponse.data.id_potrero || 'No registrado';
                } catch (error) {
                    if (error.response?.status !== 404) {
                        console.error(`Error al obtener potrero para el animal ${animal.id_ganado}:`, error);
                    }
                }

                try {
                    const descendenciaResponse = await axios.get(`http://localhost:3000/api/descendencias/ganado/${animal.id_ganado}`);
                    const descendenciaData = descendenciaResponse.data;
                    madre = {
                        nombre: descendenciaData.nombre_madre || 'No registrado',
                        id: descendenciaData.id_madre || ''
                    };
                    padre = {
                        nombre: descendenciaData.nombre_padre || 'No registrado',
                        id: descendenciaData.id_padre || ''
                    };
                } catch (error) {
                    if (error.response?.status !== 404) {
                        console.error(`Error al obtener descendencia para el animal ${animal.id_ganado}:`, error);
                    }
                }

                return {
                    ...animal,
                    genero: animal.sexo === 'Hembra' ? 'H' : 'M',
                    iconoS: getIcono(animal.estado),
                    fecha: formatearFecha(animal.fecha_nacimiento),
                    potrero: potreroNombre,
                    madre,
                    padre,
                    descripcion: animal.descripcion
                };
            }));

            setAnimales(animalesConDatos);

            if (selectedAnimal) {
                const updatedSelected = animalesConDatos.find(a => a.id_ganado === selectedAnimal.id_ganado);
                setSelectedAnimal(updatedSelected);
            }
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    };

    useEffect(() => {
        fetchAllData();
    }, []);

    useEffect(() => {
        const resultado = animales.filter((animal) =>
            animal.nombre?.toLowerCase().includes(busqueda.toLowerCase())
        );
        setFiltrados(resultado);
    }, [busqueda, animales]);

    function calcularEdad(fechaNacimiento) {
        const hoy = new Date();
        const nacimiento = new Date(fechaNacimiento);

        let años = hoy.getFullYear() - nacimiento.getFullYear();
        let meses = hoy.getMonth() - nacimiento.getMonth();
        let dias = hoy.getDate() - nacimiento.getDate();

        if (dias < 0) {
            meses--;
            const ultimoMes = new Date(hoy.getFullYear(), hoy.getMonth(), 0);
            dias += ultimoMes.getDate();
        }

        if (meses < 0) {
            años--;
            meses += 12;
        }

        return `${años}a ${meses}m ${dias}d`;
    }

    const handleAnimalClick = (animal) => {
        setSelectedAnimal(animal);
    };

    const handleClick = () => {
        window.location.href = "/ganado";
    };

    // Lista final filtrada por búsqueda, propósito y sexo
    const listaFiltrada = (busqueda.trim() ? filtrados : animales)
        .filter((animal) => {
            const cumpleProposito = filtroProposito === 'Todos' || animal.proposito === filtroProposito;
            const cumpleSexo = filtroSexo === 'Todos' || animal.genero === filtroSexo;
            return cumpleProposito && cumpleSexo;
        });

    return (
        <>
            <div className="ganado-list-page">
                <FontAwesomeIcon icon={faAngleLeft} onClick={handleClick} className='text-4xl cursor-pointer' />
                <div className="ganado-list-content">

                    <div className="continer-list">
                        <div className='w-[90%] flex flex-col gap-3'>
                            <h2 className='text-3xl font-bold'>Lista del ganado</h2>
                            <InputSearch icono={<FontAwesomeIcon icon={faSearch} />} type="text" placeholder={"Buscar"}
                                value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />

                            {/* {mostrarFiltros && ( */}
                            <div className={`flex gap-4 transition-all duration-300 ease-in-out overflow-hidden ${mostrarFiltros ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                <select
                                    value={filtroProposito}
                                    onChange={(e) => setFiltroProposito(e.target.value)}
                                    className="border p-2 rounded"
                                >
                                    <option value="Todos">Todos los propósitos</option>
                                    <option value="Carne">Carne</option>
                                    <option value="Leche">Leche</option>
                                    <option value="Reproducción">Reproducción</option>
                                </select>

                                <select
                                    value={filtroSexo}
                                    onChange={(e) => setFiltroSexo(e.target.value)}
                                    className="border p-2 rounded"
                                >
                                    <option value="Todos">Ambos sexos</option>
                                    <option value="M">Macho</option>
                                    <option value="H">Hembra</option>
                                </select>
                            </div>
                            {/* )} */}
                        </div>

                        <div className="icons w-[90%] h-[2vh] flex justify-between items-center">
                            <FormularioAnimalDialog />
                            <FontAwesomeIcon
                                icon={faSlidersH}
                                className="text-black text-2xl cursor-pointer"
                                onClick={() => setMostrarFiltros(!mostrarFiltros)}
                            />
                        </div>

                        <div className="list mt-4">
                            {listaFiltrada.map((animal) => (
                                <ItemsList
                                    key={animal.id_ganado}
                                    iconoA={<FontAwesomeIcon icon={faCow} />}
                                    nombre={animal.nombre}
                                    id={animal.id_ganado}
                                    genero={animal.genero}
                                    fecha={animal.fecha}
                                    iconoS={<FontAwesomeIcon icon={animal.iconoS} />}
                                    onClick={() => handleAnimalClick(animal)}
                                    className="cursor-pointer"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="list-info">
                        {selectedAnimal && (
                            <TablaAnimal
                                nombre={selectedAnimal.nombre}
                                id={selectedAnimal.id_ganado}
                                numeros={selectedAnimal.fecha}
                                iconS={<FontAwesomeIcon icon={selectedAnimal.iconoS} />}
                                fecha={selectedAnimal.fecha}
                                edad={calcularEdad(selectedAnimal.fecha)}
                                sexo={selectedAnimal.genero}
                                raza={selectedAnimal.raza}
                                madre={selectedAnimal.madre}
                                padre={selectedAnimal.padre}
                                desc={selectedAnimal.descripcion}
                                rebano={selectedAnimal.potrero}
                                onUpdateDes={() => { }}
                                onUpdateUbi={() => { }}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default GanadoListPage;
