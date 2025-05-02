import { useState } from 'react'
import { ButtonAreas } from '../components/buttonAreas.jsx'

function WelcomePage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ButtonAreas/>
    </>
  )
}

export default WelcomePage