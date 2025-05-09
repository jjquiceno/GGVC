import { useState } from 'react'
import { FormLogin } from '../components/formLogin.jsx'
import './login.css'


function LoginPage() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="login-page">
      <div className="img">
        <img src="/img/logoGGVC.png" alt="" className='logo' />
      </div>
      <div className="login">
        <FormLogin/>
      </div>
    </div>
      
      
    </>
  )
}

export default LoginPage