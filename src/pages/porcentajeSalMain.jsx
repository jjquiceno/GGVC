import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import PorcentajeSal from './porcentajeSal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PorcentajeSal />
  </StrictMode>,
)