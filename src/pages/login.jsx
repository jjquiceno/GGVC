import { useState } from 'react'
import { FormLogin } from '../components/formLogin.jsx'

function LoginPage() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="w-screen h-screen box-border flex flex-col m-0 lg:w-screen lg:h-screen lg:box-border lg:flex lg:flex-row lg:m-0">
      <div className="bg-gradient-to-r from-[#A6AB90] to-[#E9EDC9] rounded-br-[50px] rounded-bl-[50px] mb-[20px] lg:rounded-bl-[0] lg:top-0 lg:left-0 lg:m-0 lg:p-0 lg:h-full lg:w-1/2 lg:flex lg:items-center lg:justify-center lg:rounded-r-2xl">
        <img src="/img/logoGGVC.png" alt="" className='drop-shadow-[10px_10px_5px_rgba(0,0,0,0.5)]' />
      </div>
      <div className="m-auto h-full flex items-center justify-center lg:w-1/2">
        <FormLogin/>
      </div>
    </div>
    </>
  )
}

export default LoginPage