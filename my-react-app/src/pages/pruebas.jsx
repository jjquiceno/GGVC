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
    </>
  )
}

export default App
