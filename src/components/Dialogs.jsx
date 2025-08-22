import React, { useState, useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import './tablas.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { useNavigate, Link } from "react-router-dom"
import { TablaDatosMedicos, TablaDatosVisitaMed, TablaInfoGanado } from './Tablas';
import { DataTable } from '../components/DataTables.jsx';
import { FormularioAddPesaje, FormularioAddPrenez, FormularioSanidad, FormularioVisitas } from './formLogin.jsx';
import GraficoLineas from './graficoLineas.jsx';
import { ItemsList, ItemsPrenez } from './Items.jsx';
// import { Routes, Route, Link } from 'react-router-dom';

export const InfoMedica = ({ nombre, id, genero }) => {

  const [datosSanitarios, setDatosSanitarios] = useState([]);
  const [datosVisitas, setDatosVisitas] = useState([]);
  const [datosPesajes, setDatosPesajes] = useState([]);
  const [datosPrenez, setDatosPrenez] = useState([]);

  const fetchVisitas = async (idActual) => {
    setDatosVisitas([]);
    try {
      const response = await fetch(`http://localhost:3000/api/visitas/${idActual}`);
      const datosVisitas = await response.json();

      const visitasFormateadas = datosVisitas.map((visita) => ({
        ...visita,
        prox_visita: new Date(visita.prox_visita).toISOString().split("T")[0],
      }));

      setDatosVisitas(visitasFormateadas);
    } catch (error) {
      console.error("Error al obtener las visitas:", error);
    }
  };

  const fetchDatosSanitarios = async (idActual) => {
    setDatosSanitarios([]);
    try {
      const response = await fetch(`http://localhost:3000/api/plan_sanitario/ganado/${idActual}`);
      const data = await response.json();


      const datosSanitarios = data.map((sanidad) => ({
        ...sanidad,
        fecha_aplicacion: new Date(sanidad.fecha_aplicacion).toISOString().split("T")[0],
      }));

      setDatosSanitarios(datosSanitarios);
    } catch (error) {
      console.error('Error al obtener los datos sanitarios:', error);
    }
  }

  const fetchPeso = async (idActual) => {
    setDatosPesajes([]);
    try {
      const response = await fetch(`http://localhost:3000/api/peso/${idActual}`);
      const data = await response.json();


      const datosPesajes = data.map((peso) => ({
        ...peso,
        fecha: new Date(peso.fecha).toLocaleString('es-ES', { month: 'long' }),
        mes: new Date(peso.fecha).toLocaleString('es-ES', { month: 'long' }),
        peso: parseFloat(parseFloat(peso.peso).toFixed(2)),
      }));

      setDatosPesajes(datosPesajes);
    } catch (error) {
      console.error('Error al obtener los pesajes:', error);
    }
  }

  const fetchPrenez = async (idActual) => {
    setDatosPesajes([]);
    try {
      const response = await fetch(`http://localhost:3000/api/prenez/${idActual}`);
      const data = await response.json();


      const datosPrenez = data.map((prenez) => ({
        ...prenez,
        fecha_monta: new Date(prenez.fecha_monta).toISOString().split("T")[0],
      }));

      setDatosPrenez(datosPrenez);
    } catch (error) {
      console.error('Error al obtener los registros de peñez:', error);
    }
  }

  const VisitaColums = [
    { accessorKey: 'id_visita', header: '#Visita' },
    { accessorKey: 'fecha_visita', header: 'Fecha y hora' },
    { accessorKey: 'motivo', header: 'Motivo de la visita' },
    { accessorKey: 'sintomas', header: 'Síntomas' },
    { accessorKey: 'diagnostico', header: 'Diagnóstico' },
    { accessorKey: 'tratamiento', header: 'Tratamiento' },
    { accessorKey: 'prox_visita', header: 'Proxima visita' },
  ];

  const sanidadColumns = [
    { accessorKey: 'fecha_aplicacion', header: 'Fecha de aplicación' },
    { accessorKey: 'tipo_actividad', header: 'Tipo de actividad' },
    { accessorKey: 'dosis', header: 'Dosis' },
    { accessorKey: 'supervisor', header: 'Supervisor' },
    { accessorKey: 'observaciones', header: 'Observaciones' },
  ];

  const pesajesColumns = [
    { accessorKey: 'fecha', header: 'Mes de pesaje' },
    { accessorKey: 'peso', header: 'Peso' },
  ];



  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          onClick={() => { fetchVisitas(id), fetchDatosSanitarios(id), fetchPeso(id), fetchPrenez(id) }}
          className="text-[#6e9347] underline cursor-pointer"
        >
          Ver Información Médica
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/40 fixed inset-0" />
        <Dialog.Content className="bg-[#fffdef] p-6 w-full h-full fixed inset-0 flex flex-col z-[50] overflow-auto">
          <div className='relative'>
            <Dialog.Title className="text-xl font-bold mb-4">Información Médica de {nombre} ({id})</Dialog.Title>

            <div className='flex-1 p-6 gap-10'>
              <div className="w-full h-fit content-center mb-10">
                <div className="h-[15%] rounded-lg flex items-center justify-between mb-4 text-lg">
                  <div>
                    <h2 className='font-bold'>Visitas Medicas</h2>
                  </div>
                  <div>
                    <FormularioVisitas id={id} />
                  </div>
                </div>
                <DataTable
                  className="transform-gpu will-change-transform backface-hidden"
                  data={datosVisitas}
                  columnas={VisitaColums}
                  name={`Visitas Médicas de ${nombre}, ${id}`}
                  onDeleteRows={(rows) => {
                    rows.forEach(async (row) => {
                      await fetch(`http://localhost:3000/api/visitas/${row.id_visita}`, {
                        method: 'DELETE',
                      });
                      setDatosSanitarios((prev) => prev.filter((item) => item.id_visita !== row.id_visita));
                    });
                  }} />
              </div>
            </div>

            <div className='flex-1 p-6 gap-10'>
              <div className="w-full h-fit content-center mb-10">
                <div className="h-[15%] rounded-lg flex items-center justify-between mb-4 text-lg">
                  <div>
                    <h2 className='font-bold'>Datos sanitarios</h2>
                  </div>
                  <div>
                    <FormularioSanidad id={id} nombre={nombre} personal={true} />
                  </div>
                </div>
                <DataTable
                  className="transform-gpu will-change-transform backface-hidden"
                  data={datosSanitarios}
                  columnas={sanidadColumns}
                  name={`Datos Sanitarios de ${nombre}, ${id}`}
                  onDeleteRows={(rows) => {
                    rows.forEach(async (row) => {
                      await fetch(`http://localhost:3000/api/plan_sanitario/${row.id_sanidad}`, {
                        method: 'DELETE',
                      });
                      setDatosSanitarios((prev) => prev.filter((item) => item.id_sanidad !== row.id_sanidad));
                    });
                  }} />
              </div>
            </div>

            <div className='flex-1 p-6 gap-10'>
              <div className="w-full h-fit content-center mb-10">
                <div className="h-[15%] rounded-lg flex items-center justify-between mb-4 text-lg">
                  <div>
                    <h2 className='font-bold'>Pesajes</h2>
                  </div>
                  <div>
                    <FormularioAddPesaje id={id} nombre={nombre} />
                  </div>
                </div>
                <DataTable
                  className="transform-gpu will-change-transform backface-hidden"
                  data={datosPesajes} // Reemplaza con los datos de pesajes
                  columnas={pesajesColumns}
                  name={`Pesajes de ${nombre}, ${id}`}
                  onDeleteRows={(rows) => {
                    rows.forEach(async (row) => {
                      await fetch(`http://localhost:3000/api/peso/${row.id_pesaje}`, {
                        method: 'DELETE',
                      });
                      setDatosPesajes((prev) => prev.filter((item) => item.id_pesaje !== row.id_pesaje));
                    });
                  }} />

              </div>
              <div className='w-full h-[50vh]'>
                <GraficoLineas data={datosPesajes} />
              </div>

            </div>

            {genero === 'H' && (
              <div className='flex-1 p-6 gap-10'>
                <div className="w-full h-fit content-center mb-10">
                  <div className="h-[15%] rounded-lg flex items-center justify-between mb-4 text-lg">
                    <div>
                      <h2 className='font-bold'>Preñez</h2>
                    </div>
                    <div>
                      <FormularioAddPrenez id={id}/>
                    </div>
                  </div>
                  <div className='w-full flex flex-col gap-4'>
                    {datosPrenez.length > 0 ? (
                      datosPrenez.map((prenez) => (
                        <ItemsPrenez
                          key={prenez.id_prenez}
                          id_prenez={prenez.id_prenez}
                          id_ganado={id}
                          fecha={prenez.fecha_monta}
                          metodo={prenez.metodo}
                          responsable={prenez.responsable}
                          estado={prenez.estado}
                        />
                      ))
                    ) : (
                      <p className="text-black">No hay registros de preñez para {nombre}</p>
                    )}
                  </div>
                </div>


              </div>
            )}



          </div>



          <Dialog.Close className="absolute top-2 right-4 text-gray-500 hover:text-black text-xl">
            ✕
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

