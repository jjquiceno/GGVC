import { useState, useEffect } from 'react'
import { Header } from '../components/header.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { Anterior } from '../components/Menuh.jsx';
import { DataTable } from '../components/DataTables.jsx';
import { Form } from 'react-router';
import { FormularioNutricion, FormularioSanidad } from '../components/formLogin.jsx';



function GesNutricion() {
  const [datosNutricion, setDatosNutricion] = useState([]);

    // const formatearFecha = (fecha) => {
    //     if (fecha) {
    //     return fecha; 
    //     }
    //     return 'Fecha no disponible';
    // };

  useEffect(() => {
    const fetchNutricion = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/nutricion');
        const data = await response.json();

        const datosNutricion = await Promise.all(
          data.map(async (nutricion) => {
            return {
              ...nutricion,
              fecha: new Date(nutricion.fecha).toISOString().split('T')[0]
            };
          })
        );
        setDatosNutricion(datosNutricion);
      } catch (error) {
        console.error('Error al obtener los datos de nutricion:', error);
      }
    };

    fetchNutricion();
  }, []);

  const nutricionColumns = [
    { accessorKey: 'id_ganado', header: '# Animal' },
    { accessorKey: 'fecha', header: 'Fecha'},
    { accessorKey: 'tipo_alimento', header: 'Tipo de alimento' },
    { accessorKey: 'nombre_alimento', header: 'Nombre de alimento' },
    { accessorKey: 'cantidad', header: 'Cantidad' },
    { accessorKey: 'observaciones', header: 'Observaciones' },
    { accessorKey: 'supervisor', header: 'Supervisor' },
  ];


  return (
    <>
      <Header nav={<Anterior ruta={"/ganado"} />} text="Nutrición" img={"/img/vacaMirandoCamara.jpg"} />
      <div className='flex justify-end items-center mx-10 p-5 mt-10'>
        <FormularioNutricion/>
      </div>
      <div className="contenido-ciclos -mt-25">
        <div className="p-10">
          <h1 className='text-black font-bold text-xl m-5'>Información Nutricional</h1>
          <DataTable
            data={datosNutricion}
            columnas={nutricionColumns}
            name="Información Nutricional"
            onDeleteRows={(rows) => {
              rows.forEach(async (row) => {
                await fetch(`http://localhost:3000/api/nutricion/${row.id_nutricion}`, {
                  method: 'DELETE',
                });
                setDatosNutricion((prev) => prev.filter((item) => item.id_nutricion !== row.id_nutricion));
              });
            }} />
        </div>
      </div>

    </>
  )
}

export default GesNutricion