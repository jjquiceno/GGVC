import { useState } from 'react'
import '../App.css'
import './pruebas.css'

import { Header } from '../components/header.jsx'
import { FormLogin } from '../components/formLogin.jsx'
import { Menu } from '../components/Menuh.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Header/>
      {/* <Menu/> */}
      
    </>
  )
}

export default App
