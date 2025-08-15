import "./App.css";
// import { cn } from "./utils/cn";
import React from "react";
import { Routes, Route, Link } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute.jsx';


import LoginPage from './pages/login.jsx';
import WelcomePage from './pages/welcome.jsx';
import AjustesPage from './pages/ajustes.jsx';
import CultivosPage from './pages/cultivos.jsx';
import InventarioPage from './pages/inventarioPage.jsx';
import GanadoPage from './pages/ganado.jsx';
import RegisterPage from './pages/register.jsx';
import GanadoListPage from './pages/ganadoList.jsx';
import CiclosPage from './pages/ciclosPage.jsx';
// import InfoCiclosVacunacion from './pages/infoCiclosVacunacion.jsx';
import Graficos from './pages/graficos.jsx';
import Palpaciones from './pages/palpaciones.jsx';
import HistorialesPage from './pages/historiales.jsx';
import Imagenes from './pages/viewImagenes.jsx';
import PruebasApp from './pages/pruebas.jsx';
import GesAdmon from './pages/gesAdmon.jsx';
import CambioDeDatos from './pages/cambioDeDatos.jsx';
import ReqBPG from "./pages/reqBPG.jsx";
import RegistroNuA from "./pages/registroNuA.jsx";
import GesNutricion from "./pages/gesNutricion.jsx";
import InventarioSuplementos from "./pages/inventarioSuplementos.jsx";
import ProduccionPage from "./pages/produccion.jsx";
import { Toaster } from 'sonner'


function App() {
  return (
    <div>

      <Toaster
        position="top-center"
        richColors
        closeButton
        toastOptions={{
          classNames: {
            toast: 'bg-[#fffdef] border border-[#2b3701] rounded-lg text-[#0c2001] text-sm',
            title: 'font-semibold',
            description: 'text-xs',
            actionButton: 'bg-[#909777] text-white px-3 py-1 rounded-md',
            closeButton: 'text-[#0c2001]'
          }
        }}
      />
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
        <Route path="/" element={
          <PrivateRoute>
            <LoginPage />
          </PrivateRoute>} />
        <Route path="/welcome" element={
          <PrivateRoute>
            <WelcomePage />
          </PrivateRoute>} />
        <Route path="/ajustes" element={
          <PrivateRoute>
            <AjustesPage />
          </PrivateRoute>} />
        <Route path="/cultivos" element={
          <PrivateRoute>
            <CultivosPage />
          </PrivateRoute>} />
        <Route path="/inventario" element={
          <PrivateRoute>
            <InventarioPage />
          </PrivateRoute>} />
        <Route path="/ganado" element={
          <PrivateRoute>
            <GanadoPage />
          </PrivateRoute>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/ganadoList" element={
          <PrivateRoute>
            <GanadoListPage />
          </PrivateRoute>} />
        <Route path="/ciclosPage" element={
          <PrivateRoute>
            <CiclosPage />
          </PrivateRoute>} />
        {/* <Route path="/infoCiclosVacunacion" element={
          <PrivateRoute>
            <InfoCiclosVacunacion/>
          </PrivateRoute>}/> */}
        <Route path="/graficos" element={
          <PrivateRoute>
            <Graficos />
          </PrivateRoute>} />
        <Route path="/palpaciones" element={
          <PrivateRoute>
            <Palpaciones />
          </PrivateRoute>} />
        <Route path="/historiales" element={
          <PrivateRoute>
            <HistorialesPage />
          </PrivateRoute>} />
        <Route path="/imagenes" element={
          <PrivateRoute>
            <Imagenes />
          </PrivateRoute>} />
        <Route path="/pruebas" element={
          <PrivateRoute>
            <PruebasApp />
          </PrivateRoute>} />

        <Route path="/gesAdmon" element={
          <PrivateRoute>
            <GesAdmon />
          </PrivateRoute>} />
        <Route path="/cambioDeDatos" element={
          <PrivateRoute>
            <CambioDeDatos />
          </PrivateRoute>} />
        <Route path="/registroNuA" element={
          <PrivateRoute>
            <RegistroNuA />
          </PrivateRoute>} />
        <Route path="/gesNutricion" element={
          <PrivateRoute>
            <GesNutricion />
          </PrivateRoute>} />
        <Route path="/inventarioSuplementos" element={
          <PrivateRoute>
            <InventarioSuplementos />
          </PrivateRoute>} />
        <Route path="/reqBPG" element={
          <PrivateRoute>
            <ReqBPG />
          </PrivateRoute>} />
        <Route path="/produccion" element={
          <PrivateRoute>
            <ProduccionPage />
          </PrivateRoute>} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />

      </Routes>
    </div>
  );
}

export default App;
