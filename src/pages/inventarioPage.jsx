import { useState } from 'react'
import { Header } from '../components/header.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

import './inventario.css'
import { Anterior } from '../components/Menuh.jsx';
import { InventarioItem } from '../components/Items.jsx';   



function InventarioPage() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="inventarioPage">
                <Header nav={<Anterior/>} text="Inventario" img={"/img/dosVacas.png"} />
                <div className="content">
                    <InventarioItem srcImg={'/img/fondoCultivos.jpg'} nombre={"palas"} cantidad={10} />
                    <InventarioItem srcImg={'/img/fondoCultivos.jpg'} nombre={"palas"} cantidad={10} />
                    <InventarioItem srcImg={'/img/fondoCultivos.jpg'} nombre={"palas"} cantidad={10} />
                </div>
            </div>
        </>
    )
}

export default InventarioPage