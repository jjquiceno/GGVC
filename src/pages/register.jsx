import { useState } from 'react'
import '../components/formLogin.css'
import { FormRegister } from '../components/formRegister.jsx'

function RegisterPage() {

  return (
    <>
      <div className="m-0 p-0 flex flex-col w-[100vw] h-[100vh] overflow-hidden lg:flex-row">
        <div className="h-full w-[100%] lg:w-[50%] flex items-center justify-center">
          <FormRegister/>
        </div>
        <div className="rounded-bl-[0] h-full w-[100%] lg:w-[50%] bg-[url('../../img/vacas1.jpg')] bg-cover rounded-tl-[10%] lg:rounded-bl-[10%] ">
        </div>
      </div>
    </>
  )
}


export default RegisterPage


    