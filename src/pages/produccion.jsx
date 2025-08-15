import { useState, useEffect } from 'react'
import { Header } from '../components/header.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Anterior } from '../components/Menuh.jsx';
import { DataTable } from '../components/DataTables.jsx';
import { Form } from 'react-router';
import { FormularioAddManoDeObra, FormularioAddProduccion, FormularioSanidad } from '../components/formLogin.jsx';
import GraficoBarras from '../components/graficoBarras.jsx';

import { motion } from 'framer-motion';

function ProduccionPage() {

  const [producciones, setProducciones] = useState([]);
  const [resumenProd, setResumenProd] = useState([]);
  const [datosObra, setObra] = useState([]);

  const formatearFecha = (fecha) => {
    return new Date(fecha).toISOString().split('T')[0]; // => "2022-03-15"
  };

  useEffect(() => {
    const fetchProduccion = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/producciones/');
        const producciones = await response.json();


        // Obtener potreros para cada animal
        const produccionesData = producciones.map((produccion) => ({
          ...produccion,
          fecha: formatearFecha(produccion.fecha),
          mes: new Date(produccion.fecha).toLocaleString('es-ES', { month: 'long' }),
        }));

        const resumenPorMes = producciones.reduce((acc, produccion) => {
          const mes = new Date(produccion.fecha).toLocaleString('es-ES', { month: 'long' });
          const litros = Number(produccion.litros ?? produccion.pesaje ?? 0); // asegura que sea número

          if (!acc[mes]) {
            acc[mes] = { mes, litros: 0 };
          }
          acc[mes].litros += litros;

          return acc;
        }, {});

        // Convertir el objeto en array
        const resumenProd = Object.values(resumenPorMes);

        setResumenProd(resumenProd);
        setProducciones(produccionesData);
      } catch (error) {
        console.error('Error al obtener las producciones:', error);
      }
    };

    const fetchManoDeObra = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/mano_de_obra/');
        const data = await response.json();


        const datosObra = await Promise.all(
          data.map(async (obra) => {
            return {
              ...obra,
              fecha: formatearFecha(obra.fecha),
            };
          })
        );


        setObra(datosObra);
      } catch (error) {
        console.error('Error al obtener los datos de mano de obra:', error);
      }
    };

    fetchManoDeObra();

    fetchProduccion();
  }, []);

  const obraColums = [
    { accessorKey: 'id_obra', header: 'ID Obra' },
    { accessorKey: 'fecha', header: 'Fecha' },
    { accessorKey: 'id_empleado', header: '# Empleado' },
    { accessorKey: 'tipo', header: 'Tipo' },
    { accessorKey: 'actividad', header: 'Actividad' },
    { accessorKey: 'duracion', header: 'Duracion' },
  ];

  const produccionColumns = [
    { accessorKey: 'id_produccion', header: '#Producción' },
    { accessorKey: 'id_empleado', header: '# Empleado' },
    { accessorKey: 'fecha', header: 'Fecha de producción' },
    { accessorKey: 'litros', header: 'Litros' },
    { accessorKey: 'descripcion', header: 'Descripción' }
  ];


  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className='w-full'
      >

        <Header nav={<Anterior ruta={"/ganado"} />} text="Produccion" img={"/img/vacaMirandoCamara.jpg"} />
      </motion.div>

      <div className='flex justify-end items-center mx-10 p-5 mt-10'>
        <FormularioAddProduccion />
      </div>
      <div className="contenido-ciclos -mt-25">
        <div className="p-10">
          <h1 className='text-black font-bold text-xl m-5'>Producción de Leche</h1>
          <DataTable
            data={producciones}
            columnas={produccionColumns}
            name="Producción de Leche"
            onDeleteRows={(rows) => {
              rows.forEach(async (row) => {
                await fetch(`http://localhost:3000/api/producciones/${row.id_produccion}`, {
                  method: 'DELETE',
                });
                setProducciones((prev) => prev.filter((item) => item.id_produccion !== row.id_produccion));
              });
            }} />

          <GraficoBarras data={resumenProd} />
        </div>
        <div className="p-10">
          <div className='flex justify-between pr-5'>
            <h1 className='text-black font-bold text-xl m-5'>Mano de obra</h1>
            <FormularioAddManoDeObra />
          </div>

          <DataTable
            data={datosObra}
            columnas={obraColums}
            name={"Datos de Mano de Obra"}
            onDeleteRows={(rows) => {
              rows.forEach(async (row) => {
                await fetch(`http://localhost:3000/api/mano_de_obra/${row.id_obra}`, {
                  method: 'DELETE',
                });
                setObra((prev) => prev.filter((item) => item.id_obra !== row.id_obra));
              });
            }}
          />
        </div>
      </div>

    </>
  )
}

export default ProduccionPage