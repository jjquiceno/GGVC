import { useState } from 'react'
import '../components/formLogin.css'
import { FormRegister } from '../components/formRegister.jsx'
import './register.css'

function RegisterPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-full w-[50%] flex items-center justify-center">
        <FormRegister/>
      </div>
      <div className="h-full w-[50%] bg-[url('../img/vacas1.jpg')] bg-cover rounded-tl-[10%] rounded-bl-[10%]">
      </div>

      

    </>
  )
}


export default RegisterPage


    