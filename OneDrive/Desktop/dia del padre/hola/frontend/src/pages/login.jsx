import { useState } from 'react'
import { FormLogin } from '../components/formLogin.jsx'

function LoginPage() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="w-screen h-screen box-border flex m-0">
      <div className="top-0 left-0 m-0 p-0 h-full w-1/2 flex items-center justify-center bg-gradient-to-r from-[#A6AB90] to-[#E9EDC9] rounded-r-2xl">
        <img src="/img/logoGGVC.png" alt="" className='drop-shadow-[10px_10px_5px_rgba(0,0,0,0.5)]' />
      </div>
      <div className="h-full w-1/2 flex items-center justify-center">
        <FormLogin/>
      </div>
    </div>
    </>
  )
}

export default LoginPage