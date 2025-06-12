import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import InventarioPage from './inventarioPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InventarioPage />
  </StrictMode>,
)