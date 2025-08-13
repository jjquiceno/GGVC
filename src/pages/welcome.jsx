import { useState, useEffect } from 'react';
import { Header } from '../components/header.jsx'
import { ButtonAreas } from '../components/buttonAreas.jsx'
import { Weather } from '../components/weather.jsx'
import { Menu } from '../components/Menuh.jsx'

import { jwtDecode } from 'jwt-decode';

function WelcomePage() {

  const [count, setCount] = useState(0)

  const token = sessionStorage.getItem('token');


  const decoded = token ? jwtDecode(token) : null;

  return (
    <>
      <div className="w-full h-screen bg-[#fffdef]">
        <Header nav={<Menu />} text={`Bienvenido ${decoded.nombre}`} img={"/img/bienvenidosGanado.png"} />

        <div className="pb-[5vh] overflow-auto h-full w-full md:h-[70%] md:pt-[0] flex flex-col gap-10 justify-center items-center md:grid md:grid-cols-[2fr_1fr] md:grid-rows-1 md:items-center">
          <div className="mt-[80vh] md:mt-[0] flex flex-col h-fit gap-20 md:flex-row md:justify-around w-[100%] md:h-[90%] md:ml-[20%] md:items-center ">
            <ButtonAreas img="/img/ganadosobrioia.jpg" text={"Ganado"} ruta="/ganado" />
            {decoded.rol === "admin" && (
              <ButtonAreas img="/img/nomina.jpg" text={"Gestion administrativa"} ruta="/gesAdmon" />
            )}

            <div className="m-auto w-[80%] h-[70%]bg-gradient-to-r from-[#ccd5ae] to-[#e9edc9] border-4 border-[#2b3701] rounded-[10px] flex justify-center items-center flex-col shadow-[-10px_0px_10px_-2px_rgba(0,0,0,0.164)]">
              <Weather />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WelcomePage