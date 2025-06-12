import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import ImagenesPage from './viewImagenes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ImagenesPage />
  </StrictMode>,
)