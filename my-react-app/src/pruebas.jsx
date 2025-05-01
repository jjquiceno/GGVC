import { useState } from 'react'
import './App.css'
import './pruebas.css'

import { Header } from './components/header.jsx'
import { FormLogin } from './components/formLogin.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full'></div>
    <h1>Header</h1>
      <Header/>
      <h1>formLogin</h1>
      <FormLogin/>
    </>
  )
}

export default App
