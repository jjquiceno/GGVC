import { useState, useEffect } from 'react';
import { Header } from '../components/header.jsx'
import { ButtonAreas } from '../components/buttonAreas.jsx'
import { Menu } from '../components/Menuh.jsx'

import { jwtDecode } from 'jwt-decode';

function GesAdmon() {

  const token = sessionStorage.getItem('token');


  const decoded = token ? jwtDecode(token) : null;

  return (
    <>
    {decoded.rol === "admin" && (
      <div className="flex justify-center items-center w-full h-screen bg-[#fffdef]">
        <Header nav={<Menu />} text={`Gestion administrativa`} img={"/img/bienvenidosGanado.png"} />

        <div className="mt-[25vh] pt-[25vh] pb-[5vh] overflow-auto h-[75vh] w-full md:h-[70%] md:pt-[0] md:mt-[30vh] flex flex-col gap-10 justify-center items-center md:grid md:grid-cols-[2fr_1fr] md:grid-rows-1 md:items-center">
          <div className="mt-[80vh] md:mt-[0] flex flex-col h-fit gap-20 md:flex-row md:justify-around w-[100%] md:h-[90%] md:ml-[20%] md:items-center ">
            <ButtonAreas img="/img/nomina.jpg" text={"Registro de Usuarios"} ruta="/register" />
            <ButtonAreas img="/img/nomina.jpg" text={"Cambio de datos"} ruta="/cambioDeDatos" />
            <ButtonAreas img="/img/nomina.jpg" text={"Requisitos BPg"} ruta="/requisitos" />
          </div>
        </div>
      </div>
    )}
    </>
  )
}

export default GesAdmon