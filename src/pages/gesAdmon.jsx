import { useState, useEffect } from 'react';
import { Header } from '../components/header.jsx'
import { ButtonAreas } from '../components/buttonAreas.jsx'
import { Menu } from '../components/Menuh.jsx'

import { jwtDecode } from 'jwt-decode';

import { motion } from 'framer-motion';

function GesAdmon() {

  const token = sessionStorage.getItem('token');


  const decoded = token ? jwtDecode(token) : null;

  return (
    <>
      {decoded.rol === "admin" && (
        <div className="w-full h-screen bg-[#fffdef]">

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className='w-full'
          >
            <Header nav={<Menu />} text={`Gestion administrativa`} img={"/img/bienvenidosGanado.png"} />

          </motion.div>
          <div className="overflow-auto h-full w-full md:h-[70%] md:pt-[0] flex flex-col gap-10 justify-center items-center md:grid md:grid-cols-[2fr_1fr] md:grid-rows-1 md:items-center">
            <div className="mt-[80vh] md:mt-[0] flex flex-col h-fit gap-20 md:flex-row md:justify-around w-[100%] md:h-[90%] md:ml-[20%] md:items-center ">
              <ButtonAreas img="/img/nomina.jpg" text={"Registro de Usuarios"} ruta="/register" />
              <ButtonAreas img="/img/nomina.jpg" text={"Cambio de datos"} ruta="/cambioDeDatos" />
              <ButtonAreas img="/img/nomina.jpg" text={"Requisitos BPG"} ruta="/reqBPG" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default GesAdmon