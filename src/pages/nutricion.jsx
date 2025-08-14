import { useState, useEffect } from 'react';
import { Header } from '../components/header.jsx'
import { ButtonAreas } from '../components/buttonAreas.jsx'
import { Weather } from '../components/weather.jsx'
import { Menu } from '../components/Menuh.jsx'

import { jwtDecode } from 'jwt-decode';

function NutricionPage() {

  const [count, setCount] = useState(0)

  const token = sessionStorage.getItem('token');


  const decoded = token ? jwtDecode(token) : null;

  return (
    <>
      <div className="w-full h-screen bg-[#fffdef]">
        <Header nav={<Menu />} text={`Nutricion y Alimentación`} img={"/img/bienvenidosGanado.png"} />

        <div className="pb-[5vh] overflow-auto h-full w-full md:h-[70%] md:pt-[0] flex flex-col gap-10 justify-center items-center md:grid md:grid-cols-[2fr_1fr] md:grid-rows-1 md:items-center">
          <div className="mt-[80vh] md:mt-[0] flex flex-col h-fit gap-20 md:flex-row md:justify-around w-[100%] md:h-[90%] md:ml-[20%] md:items-center ">
            <ButtonAreas img="/img/ganadosobrioia.jpg" text={"Realizar un registro"} ruta="/registroNuA" />
            <ButtonAreas img="/img/ganadosobrioia.jpg" text={"Gestión de la nutrición"} ruta="/gesNutricion" />
            <ButtonAreas img="/img/ganadosobrioia.jpg" text={"Inventario de Suplementos"} ruta="/inventarioSuplementos" />
          </div>
        </div>
      </div>
    </>
  )
}

export default NutricionPage