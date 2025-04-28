import { useState } from 'react'
import './components/formLogin.css'
import { FormLogin } from './components/formLogin.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormLogin/>
    </>
  )
}

export default App