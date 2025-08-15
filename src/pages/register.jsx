import { useState } from 'react'
import '../components/formLogin.css'
import { FormRegister } from '../components/formRegister.jsx'
import { Anterior } from '../components/Menuh.jsx'
import { motion } from 'framer-motion';

function RegisterPage() {

  return (
    <>
      <div className="m-0 p-0 flex flex-col w-[100vw] h-[100vh] overflow-hidden lg:flex-row">
        <div className="h-full w-[100%] lg:w-[50%] flex items-center justify-center">
          <div className='absolute top-10 left-5'>
            <Anterior ruta={"/gesAdmon"} />
          </div>

          <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          <FormRegister />
        </motion.div>
        </div>
        
        <div className="rounded-bl-[0] h-full w-[100%] lg:w-[50%] bg-[url('../../img/vacas1.jpg')] bg-cover rounded-tl-[10%] lg:rounded-bl-[10%] ">
        </div>
      </div>
    </>
  )
}


export default RegisterPage


