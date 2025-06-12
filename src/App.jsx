import { Routes, Route } from "react-router-dom"
import WelcomePage from "./pages/welcome.jsx"
import LoginPage from "./pages/login"
import RegisterPage from "./pages/register"
import PruebasApp from "./pages/pruebas.jsx"
import AjustesPage from "./pages/ajustes.jsx"
import GanadoPage from "./pages/ganado.jsx"
import GanadoListPage from "./pages/ganadoList.jsx"
import PorcentajeSal from "./pages/porcentajeSal.jsx"
import ImagenesPage from "./pages/viewImagenes.jsx"
import InventarioPage from "./pages/inventarioPage.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/pruebas" element={<PruebasApp/>}/>
      <Route path="/ajustes" element={<AjustesPage/>}/>
      <Route path="/ganado" element={<GanadoPage/>}/>
      <Route path="/ganadoList" element={<GanadoListPage/>}/>
      <Route path="/porcentajeSal" element={<PorcentajeSal/>}/>
      <Route path="/imagenes" element={<ImagenesPage/>}/>
      <Route path="/inventario" element={<InventarioPage/>}/>
      {/* <Route path="/medica" element={<MedicaPage/>}/> */}
    </Routes>
  )
}

export default App
