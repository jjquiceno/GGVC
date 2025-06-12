import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  server: {
    // Esto permite que Vite en modo dev no muestre error 404 al recargar rutas como /imagenes
    historyApiFallback: true
  },
  build: {
    outDir: 'dist'
  }
})
