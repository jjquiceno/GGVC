import { useState, useEffect } from 'react'
import { Header } from '../components/header.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { Anterior } from '../components/Menuh.jsx';
import { DataTable } from '../components/DataTables.jsx';
import { Form } from 'react-router';
import { FormularioSanidad } from '../components/formLogin.jsx';



function GesNutricion() {
  const [datosSanitarios, setDatosSanitarios] = useState([]);

//   const formatearFecha = (fecha) => {
//     return new Date(fecha).toISOString().split('T')[0]; // => "2022-03-15"
//   };
    const formatearFecha = (fecha) => {
        if (fecha) {
        return fecha; 
        }
        return 'Fecha no disponible';
    };

  useEffect(() => {
    const fetchDatosSanitarios = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/nutricion');
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
  }, []);

  const sanidadColumns = [
    { accessorKey: 'fecha', header: 'Fecha', enableHiding: true },
    { accessorKey: 'id_ganado', header: '# Animal' },
    { accessorKey: 'tipo_alimento', header: 'Tipo de alimento' },
    { accessorKey: 'nombre_alimento', header: 'Nombre de alimento' },
    { accessorKey: 'cantidad', header: 'Cantidad' },
    { accessorKey: 'observaciones', header: 'Observaciones' },
    { accessorKey: 'empleado', header: 'Empleado' },
  ];


  return (
    <>
      <Header nav={<Anterior ruta={"/ganado"} />} text="Ciclos de vacunacion" img={"/img/vacaMirandoCamara.jpg"} />
      <div className='flex justify-end items-center mx-10 p-5 mt-10'>
        <FormularioSanidad personal={false} />
      </div>
      <div className="contenido-ciclos -mt-25">
        <div className="p-10">
          <h1 className='text-black font-bold text-xl m-5'>Datos Sanitarios</h1>
          <DataTable
            data={datosSanitarios}
            columnas={sanidadColumns}
            name="Datos Sanitarios"
            onDeleteRows={(rows) => {
              rows.forEach(async (row) => {
                await fetch(`http://localhost:3000/api/nutricion/${row.fecha}`, {
                  method: 'DELETE',
                });
                setDatosSanitarios((prev) => prev.filter((item) => item.id_ganado !== row.id_ganado));
              });
            }} />
        </div>
      </div>

    </>
  )
}

export default GesNutricion