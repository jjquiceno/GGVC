import { useState, useEffect } from 'react'
import { Header} from '../components/header.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';

import { Anterior } from '../components/Menuh.jsx';
import { DataTable } from '../components/DataTables.jsx';



function CiclosPage() {

    const [datosAnimales, setAnimales] = useState([]);
    const [datosSanitarios, setDatosSanitarios] = useState([]);

    const formatearFecha = (fecha) => {
        return new Date(fecha).toISOString().split('T')[0]; // => "2022-03-15"
    };

    useEffect(() => {
        const fetchGanadoYPotreros = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/ganado');
                const animales = await response.json();

                
    
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

        const fetchDatosSanitarios = async () => {
            try {
              const response = await fetch('http://localhost:3000/api/plan_sanitario');
              const data = await response.json();
          
              const datosSanitarios = await Promise.all(
                data.map(async (sanidad) => {
                  return {
                    ...sanidad,
                    fecha_aplicacion: formatearFecha(sanidad.fecha_aplicacion),
                  };
                })
              );
          
              setDatosSanitarios(datosSanitarios);
            } catch (error) {
              console.error('Error al obtener los datos sanitarios:', error);
            }
          };
          
        fetchDatosSanitarios();
    
        fetchGanadoYPotreros();
    }, []);

    const ganadoColums = [
        { accessorKey: 'id_ganado', header: 'ID' },
        { accessorKey: 'nombre', header: 'Nombre' },
        { accessorKey: 'raza', header: 'Raza' },
        { accessorKey: 'sexo', header: 'Sexo' },
        { accessorKey: 'fecha', header: 'Fecha de nacimiento' },
        { accessorKey: 'potrero', header: 'Potrero' },
        { accessorKey: 'estado', header: 'Estado' },
      ];

      const sanidadColumns = [
        { accessorKey: 'id_ganado', header: '# Animal' },
        { accessorKey: 'fecha_aplicacion', header: 'Fecha de aplicación' },
        { accessorKey: 'tipo_actividad', header: 'Tipo de actividad' },
        { accessorKey: 'dosis', header: 'Dosis' },
        { accessorKey: 'supervisor', header: 'Supervisor' },
        { accessorKey: 'observaciones', header: 'Observaciones' },
      ];
    

    return (
        <>
            <Header nav={<Anterior ruta={"/ganado"} />} text="Ciclos de vacunacion" img={"/img/vacaMirandoCamara.jpg"} />
            <div className='add-buttom'>
                <FontAwesomeIcon className='iconomas' icon={faPlus} />
            </div>
            <div className="contenido-ciclos mt-[30vh]">
                <div className="p-10">
                    <h1 className='text-black font-bold text-xl m-5'>Datos del ganado</h1>
                    <DataTable data={datosAnimales} columnas={ganadoColums} name={"Datos Ganado"}/>
                </div>
                <div className="p-10">
                    <h1 className='text-black font-bold text-xl m-5'>Datos Sanitarios</h1>
                    <DataTable data={datosSanitarios} columnas={sanidadColumns} name="Datos Sanitarios"/>
                </div>
            </div>

        </>
    )
}

export default CiclosPage