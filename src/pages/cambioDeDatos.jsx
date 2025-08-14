import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

import { ItemsListE } from '../components/Items.jsx';
import { TablaEmpleado } from '../components/Tablas.jsx';
import FormularioAnimalDialog from '../components/formLogin.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ganadoList.css';
import { faAngleLeft, faBaby, faCheckCircle, faCow, faPersonPregnant, faPlus, faSearch, faSlidersH, faStethoscope } from '@fortawesome/free-solid-svg-icons';
import { InputSearch } from '../components/inputs.jsx';

function GanadoListPage() {

    const [empleados, setEmpleados] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [filtrados, setFiltrados] = useState([]);

    const [selectedEmpleado, setSelectedEmpleado] = useState(null);

    const fetchAllData = async () => {
        try {
            const empleadoResponse = await axios.get('http://localhost:3000/api/Empleado');
            const empleadoData = empleadoResponse.data;

            const empleadosConDatos = await Promise.all(empleadoData.map(async (empleado) => {

                return {
                    ...empleado
                };
            }));

            setEmpleados(empleadosConDatos);

            // También actualizamos el animal seleccionado si es necesario
            if (selectedEmpleado) {
                const updatedSelected = empleadosConDatos.find(a => a.id_empleado === selectedEmpleado.id_empleado);
                setSelectedEmpleado(updatedSelected);
            }
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    };  

    useEffect(() => {
        fetchAllData();
    }, []);

    useEffect(() => {
        const resultado = empleados.filter((empleado) =>
            empleado.nombre?.toLowerCase().includes(busqueda.toLowerCase())
        );
        setFiltrados(resultado);
    }, [busqueda, empleados]);

    const handleEmpleadoClick = (empleado) => {
        setSelectedEmpleado(empleado);
        console.log('Empleado seleccionado:', empleado);
    };

    const handleUpdateEmpleado = async (data) => {
        try {
            await axios.put(`http://localhost:3000/api/Empleado/${data.id_empleado}`, data);
            // Actualizar la lista de empleados
            fetchAllData();
        } catch (error) {
            console.error('Error al actualizar empleado:', error);
        }
    };

    const handleClick = () => {
        window.location.href = "/gesAdmon";
    };

    return (
        <>
            <div className="ganado-list-page ">
                <FontAwesomeIcon icon={faAngleLeft} onClick={handleClick} className='text-4xl cursor-pointer' />
                <div className="ganado-list-content">
                    <div className="continer-list">
                        <div className='w-[90%] h-[10vh] flex flex-col '>
                            <h2 className='text-3xl font-bold mr-[10rem] mb-5'>Lista del ganado</h2>
                            <InputSearch icono={<FontAwesomeIcon icon={faSearch} />} type="text" placeholder={"Buscar"}
                                value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
                        </div>
                        
                        <div className="list">
                            {(busqueda.trim() ? filtrados : empleados).map((empleado) => (
                                <ItemsListE
                                    id_empleado={empleado.id_empleado}
                                    nombre={empleado.nombre}
                                    onClick={() => handleEmpleadoClick(empleado)}
                                    className="cursor-pointer"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="list-info">
                        {selectedEmpleado && (
                            <TablaEmpleado
                            id_empleado={selectedEmpleado.id_empleado}
                            usuario={selectedEmpleado.usuario}
                            dni={selectedEmpleado.dni}
                            nombre={selectedEmpleado.nombre}
                            email={selectedEmpleado.email}
                            telefono={selectedEmpleado.telefono}
                            // onUpdateUbi={handleUpdateUbicacion}
                        />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default GanadoListPage;