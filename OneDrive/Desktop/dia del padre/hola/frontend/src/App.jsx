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
      </Routes>
    </div>
  );
}

export default App;
