import React, { useState, useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import './tablas.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { useNavigate, Link } from "react-router-dom"
import { TablaDatosMedicos, TablaDatosVisitaMed, TablaInfoGanado } from './Tablas';
import { DataTable } from '../components/DataTables.jsx';
// import { Routes, Route, Link } from 'react-router-dom';

export const InfoMedica = ({ nombre, id }) => {

  const [datosSanitarios, setDatosSanitarios] = useState([]);
  const [datosVisitas, setDatosVisitas] = useState([]);

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

  const VisitaColums = [
    { accessorKey: 'id_ganado', header: 'ID' },
    { accessorKey: 'fecha_visita', header: 'Fecha y hora' },
    { accessorKey: 'motivo', header: 'Motivo de la visita' },
    { accessorKey: 'sintomas', header: 'Síntomas' },
    { accessorKey: 'diagnostico', header: 'Diagnóstico' },
    { accessorKey: 'tratamiento', header: 'Tratamiento' },
    { accessorKey: 'prox_visita', header: 'Proxima visita' },
  ];

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          onClick={() => fetchVisitas(id)}
          className="text-[#6e9347] underline cursor-pointer"
        >
          Ver Información Médica
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/40 fixed inset-0" />
        <Dialog.Content className="bg-[#fffdef] p-6 w-full h-full fixed inset-0 flex flex-col z-[9999] overflow-auto">
          <div className='relative'>
            <Dialog.Title className="text-xl font-bold mb-4">Información Médica de {nombre} ({id})</Dialog.Title>

            <div className='flex-1 p-6 gap-10'>
              <div className="w-full h-fit content-center mb-10">
                <div className="h-[15%] rounded-lg flex items-center justify-between mb-4 text-lg">
                  <div>
                    <h2 className='font-bold'>Visitas Medicas</h2>
                  </div>
                  <div>
                    <span className="text-2xl cursor-pointer transition duration-300 ease-in-out hover:drop-shadow-[1px_1px_2px_#2b370185]"><FontAwesomeIcon icon={faPlus} /></span>
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

              <div className="w-full h-fit content-center mb-10">
                <div className="h-[15%] rounded-lg flex items-center justify-between mb-4 text-lg">
                  <div>
                    <h2 className='font-bold'>Visitas Medicas</h2>
                  </div>
                  <div>
                    <span className="text-2xl cursor-pointer transition duration-300 ease-in-out hover:drop-shadow-[1px_1px_2px_#2b370185]"><FontAwesomeIcon icon={faPlus} /></span>
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

              <div className="w-full h-fit content-center mb-10">
                <div className="h-[15%] rounded-lg flex items-center justify-between mb-4 text-lg">
                  <div>
                    <h2 className='font-bold'>Visitas Medicas</h2>
                  </div>
                  <div>
                    <span className="text-2xl cursor-pointer transition duration-300 ease-in-out hover:drop-shadow-[1px_1px_2px_#2b370185]"><FontAwesomeIcon icon={faPlus} /></span>
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

          </div>

          <Dialog.Close className="absolute top-2 right-4 text-gray-500 hover:text-black text-xl">
            ✕
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}