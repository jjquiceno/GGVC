import { useState, useEffect } from 'react'
import { Header} from '../components/header.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';

import { Anterior } from '../components/Menuh.jsx';

import AnimalTable from '../components/AnimalTable.jsx';


function CiclosPage() {

    const [datosAnimales, setAnimales] = useState([]);

    useEffect(() => {
        const fetchGanadoYPotreros = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/ganado');
                const animales = await response.json();

                const formatearFecha = (fecha) => {
                    return new Date(fecha).toISOString().split('T')[0]; // => "2022-03-15"
                };
    
                // Obtener potreros para cada animal
                const animalesConPotrero = await Promise.all(
                    animales.map(async (animal) => {
                        const responsePotrero = await fetch(`http://localhost:3000/api/ubicacion/potrero/${animal.id_ganado}`);
                        const potreroData = await responsePotrero.json();
    
                        return {
                            ...animal,
                            fecha: formatearFecha(animal.fecha_nacimiento),
                            potrero: potreroData.id_potrero || 'No registrado', // fallback si no hay potrero
                        };
                    })
                );
    
                setAnimales(animalesConPotrero);
            } catch (error) {
                console.error('Error al obtener los animales o potreros:', error);
            }
        };
    
        fetchGanadoYPotreros();
    }, []);

    // const datosAnimales = [
    //     {
    //         id_ganado: 1,
    //         nombre: 'Luna',
    //         raza: 'Holstein',
    //         sexo: 'Hembra',
    //         fecha: '2023-03-10',
    //         potrero: 'A1',
    //         estado: 'Activo',
    //     },
    //     {
    //         id_ganado: 2,
    //         nombre: 'Toro',
    //         raza: 'Brahman',
    //         sexo: 'Macho',
    //         fecha: '2022-05-15',
    //         potrero: 'B2',
    //         estado: 'Enfermo',
    //     },
    // ];

    return (
        <>
            <Header nav={<Anterior ruta={"/ganado"} />} text="Ciclos de vacunacion" img={"/img/vacaMirandoCamara.jpg"} />
            <div className='add-buttom'>
                <FontAwesomeIcon className='iconomas' icon={faPlus} />
            </div>
            <div className="contenido-ciclos mt-[30vh]">
                <div className="p-10">
                    <h1 className='tittle'>Datos del ganado</h1>
                    <AnimalTable data={datosAnimales} />
                </div>
                <div className="p-10">
                    <h1 className='tittle'>Datos del ganado</h1>
                    <AnimalTable data={datosAnimales} />
                </div>
                <div className="p-10">
                    <h1 className='tittle'>Datos del ganado</h1>
                    <AnimalTable data={datosAnimales} />
                </div>
            </div>

        </>
    )
}

export default CiclosPage