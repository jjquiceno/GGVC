import { Routes, Route } from "react-router-dom"
import WelcomePage from "./pages/welcome"
import LoginPage from "./pages/login"
import RegisterPage from "./pages/register"
import PruebasApp from "./pages/pruebas"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/pruebas" element={<PruebasApp/>}/>
    </Routes>
  )
}

export default App
