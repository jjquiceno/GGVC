import { useState } from 'react'
import { FormLogin } from '../components/formLogin.jsx'

function LoginPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormLogin/>
    </>
  )
}

export default LoginPage