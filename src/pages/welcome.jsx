import { useState } from 'react'
import { Header } from '../components/header.jsx'
import { ButtonAreas } from '../components/buttonAreas.jsx'
import { Weather } from '../components/weather.jsx'

import './welcome.css'
import { Menu } from '../components/Menuh.jsx'

function WelcomePage() {

  const [count, setCount] = useState(0)

  return (
    <>
    <div className="welcome">
      <Header nav={<Menu/>} text="Bienvenido Quice" img={"/img/bienvenidosGanado.png"}/>

      <div className="content">
        <div className="options">
          <ButtonAreas img="/img/ganadosobrioia.jpg" text={"Ganado"} ruta="/ganado" />
          <ButtonAreas img="/img/cultivos.jpg" text={"Cultivos"} ruta="#"/>
          <ButtonAreas img="/img/potreros2.jpg" text={"Potreros"} ruta="#"/>
          <ButtonAreas img="/img/nomina.jpg" text={"Nomina"} ruta="#"/>
        </div>
        <div className="clima">
          <Weather/>
        </div>
      </div>
    </div>
    </>
  )
}

export default WelcomePage