import { useState } from 'react'
import '../components/formLogin.css'
import { FormRegister } from '../components/formRegister.jsx'

function RegisterPage() {

  return (
    <>
      <div className="m-0 p-0 flex w-[100vw] h-[100vh] overflow-hidden">
        <div className="h-full w-[50%] flex items-center justify-center">
          <FormRegister/>
        </div>
        <div className="h-full w-[50%] bg-[url('../../img/vacas1.jpg')] bg-cover rounded-tl-[10%] rounded-bl-[10%]">
        </div>
      </div>
    </>
  )
}


export default RegisterPage


    