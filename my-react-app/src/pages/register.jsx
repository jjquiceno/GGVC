import { useState } from 'react'
import '../components/formLogin.css'
import { FormRegister } from '../components/formRegister.jsx'

function RegisterPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormRegister/>

    </>
  )
}

export default RegisterPage