import { useState } from 'react'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <a href="./pruebas.html" className="text-3xl font-bold underline">
        ir a las pruebas
      </a>
      <br />
      <a href="../login.html" className="text-3xl font-bold underline">
        ir a login
      </a>
      <br />
      <a href="../register.html" className="text-3xl font-bold underline">
        ir a register
      </a>
      <br />
      <a href="../welcome.html" className="text-3xl font-bold underline">
        ir a Botones de areas
      </a>
      
      <h1 className="text-3xl font-bold underline text-green-500">Esto es ggvc</h1>
      <br />
      <br />
      <br />
    </>
  )
    
}

export default App
