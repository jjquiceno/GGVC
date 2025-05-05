import { useState } from 'react'
import { ButtonAreas } from '../components/buttonAreas.jsx'
import { Weather } from '../components/weather.jsx'
import { Input } from '../components/inputs.jsx'
import { Avatar } from '../components/avatar.jsx'

function WelcomePage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ButtonAreas/>
      <Weather/>
      <Input/>
      <Avatar/>
    </>
  )
}

export default WelcomePage