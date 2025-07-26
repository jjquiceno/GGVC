import { useState } from 'react'
import { Header } from '../components/header.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';


import { Anterior } from '../components/Menuh.jsx';
import { InventarioItem } from '../components/Items.jsx';   



function InventarioPage() {
    const [count, setCount] = useState(0)

    const inventario = [
        {src: '/img/fondoCultivos.jpg', nombre: 'palas', cantidad: 10},
        {src: '/img/fondoCultivos.jpg', nombre: 'picos', cantidad: 5},
        {src: '/img/fondoCultivos.jpg', nombre: 'azadas', cantidad: 8},
        {src: '/img/fondoCultivos.jpg', nombre: 'carretillas', cantidad: 3},
        {src: '/img/fondoCultivos.jpg', nombre: 'carretillas', cantidad: 3},
        {src: '/img/fondoCultivos.jpg', nombre: 'carretillas', cantidad: 3},
        {src: '/img/fondoCultivos.jpg', nombre: 'carretillas', cantidad: 3},
        {src: '/img/fondoCultivos.jpg', nombre: 'carretillas', cantidad: 3},
        {src: '/img/fondoCultivos.jpg', nombre: 'carretillas', cantidad: 3},
    ];

    return (
        <>
            <div className="w-screen h-screen flex items-end">
                <Header nav={<Anterior/>} text="Inventario" img={"/img/dosVacas.png"} />
                <div className="w-full h-[70vh] overflow-y-scroll flex flex-wrap justify-around p-5 gap-5 scrollbar-thin scrollbar-thumb-[#2b3701] scrollbar-thumb-rounded-lg">
                    {inventario.map((itemI, index) => (
                        <InventarioItem key={index} srcImg={itemI.src} nombre={itemI.nombre} cantidad={itemI.cantidad} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default InventarioPage