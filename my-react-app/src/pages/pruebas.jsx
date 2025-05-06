import { useState } from 'react'
import '../App.css'
import './pruebas.css'

import { Header } from '../components/header.jsx'
import { HeaderLeft } from '../components/header.jsx'
import { FormLogin } from '../components/formLogin.jsx'
import { Menu } from '../components/Menuh.jsx'
import { Items } from '../components/Items.jsx'

import { faSyringe } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TablaSencilla } from '../components/Tablas.jsx' 
import { TablaAnimal } from '../components/Tablas.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
{/* 
      <Items icono={<FontAwesomeIcon icon={faSyringe} />} text="vacunas"/>
      <Items icono={<FontAwesomeIcon icon={faSyringe} />} text="Ganado"/>
      <Items icono={<FontAwesomeIcon icon={faSyringe} />} text="1"/>
      <Items icono={<FontAwesomeIcon icon={faSyringe} />} text="2"/>
      <Items icono={<FontAwesomeIcon icon={faSyringe} />} text="3"/>
      <Items icono={<FontAwesomeIcon icon={faSyringe} />} text="4"/>
      <Items icono={<FontAwesomeIcon icon={faSyringe} />} text="5"/>
      <Items icono={<FontAwesomeIcon icon={faSyringe} />} text="6"/>
       */}
      {/* <Header text="hola isa"/> */}
      {/* <HeaderLeft text="hola mundo"/> */}
      {/* <Menu/> */}
      {/* <TablaSencilla/> */}
      <TablaAnimal 
        nombre="Thor" 
        id="01" 
        numeros="01/03" 
        fecha="22/06/12" 
        edad="6a 3m 22d"
        sexo="macho"
        raza="brhaman"
        madre="pepa"
        padre="papotico"
        desc="negro con mancha cafe en lado izquierdo"
        rebanoAc="01"
        rebanoAn="02"
        fechaAc="30/11"
        fechaAn="27/02"
      />
    </>
  )
}

export default App
