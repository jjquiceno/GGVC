import "./App.css";
// import { cn } from "./utils/cn";
import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/login.jsx';
import WelcomePage from './pages/welcome.jsx';
import AjustesPage from './pages/ajustes.jsx';
import CultivosPage from './pages/cultivos.jsx';
import InventarioPage from './pages/inventarioPage.jsx';
import GanadoPage from './pages/ganado.jsx';
import RegisterPage from './pages/register.jsx';
import GanadoListPage from './pages/ganadoList.jsx';
import CiclosPage from './pages/ciclosPage.jsx';
import MedicaPage from './pages/medica.jsx';
import InfoCiclosVacunacion from './pages/infoCiclosVacunacion.jsx';
import Graficos from './pages/graficos.jsx';
import Palpaciones from './pages/palpaciones.jsx';
import HistorialesPage from './pages/historiales.jsx';
import Imagenes from './pages/viewImagenes.jsx';

function App() {
  return (
    <div>
      {/* <nav>
        <Link to="/">Inicio</Link> |{' '}
        <Link to="/cards">Cards</Link> |{' '}
        <Link to="/welcome">Bienvenido</Link>
        <Link to="/ajustes">Ajustes</Link>
        <Link to="/cultivos">Cultivos</Link>
        <Link to="/inventario">Inventario</Link>
        <Link to="/ganado">Ganado</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/ganadoList">Ganado List</Link>
        <Link to="/ciclosPage">Ciclos Page</Link>
      </nav>   */}

      <hr />

      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/welcome" element={<WelcomePage/>}/>
        <Route path="/ajustes" element={<AjustesPage/>}/>
        <Route path="/cultivos" element={<CultivosPage/>}/>
        <Route path="/inventario" element={<InventarioPage/>}/>
        <Route path="/ganado" element={<GanadoPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/ganadoList" element={<GanadoListPage/>}/>
        <Route path="/ciclosPage" element={<CiclosPage/>}/>
        <Route path="/medica" element={<MedicaPage/>}/>
        <Route path="/infoCiclosVacunacion" element={<InfoCiclosVacunacion/>}/>
        <Route path="/graficos" element={<Graficos/>}/>
        <Route path="/palpaciones" element={<Palpaciones/>}/>
        <Route path="/historiales" element={<HistorialesPage/>}/>
        <Route path="/imagenes" element={<Imagenes/>}/>
      </Routes>
    </div>
  );
}

export default App;
