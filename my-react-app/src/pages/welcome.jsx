import { useState } from 'react'
import { Header } from '../components/header.jsx'
import { ButtonAreas } from '../components/buttonAreas.jsx'
import { Weather } from '../components/weather.jsx'
import { Input } from '../components/inputs.jsx'
import { Avatar } from '../components/avatar.jsx'


import './welcome.css'

function WelcomePage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header text="Quice"/>

      <div className="content">
        <div className="options">
          <ButtonAreas img="/vaca.jpg" text={"Ganado"}/>
          <ButtonAreas img="/vaca.jpg" text={"Cultivos"}/>
          <ButtonAreas img="/vaca.jpg" text={"Potreros"}/>
          <ButtonAreas img="/vaca.jpg" text={"Nomina"}/>
        </div>

        <div className="clima">
          <Weather/>
        </div>
      </div>
    </>
  )
}

export default WelcomePage