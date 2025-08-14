import { useState, useEffect } from 'react'
import { Header } from '../components/header.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';


import { Anterior, Menu } from '../components/Menuh.jsx';
import { InventarioItem } from '../components/Items.jsx';   
import { AgregarHerramienta } from '../components/Items.jsx';


// Función para cargar el inventario desde localStorage
const cargarInventario = () => {
    try {
        // Si no hay nada guardado, retornamos los datos por defecto
        return [
            {id: 1, src: '/img/fondoCultivos.jpg', nombre: 'palas', cantidad: 10, manual: null},
            {id: 2, src: '/img/fondoCultivos.jpg', nombre: 'picos', cantidad: 5, manual: null},
            {id: 3, src: '/img/fondoCultivos.jpg', nombre: 'azadas', cantidad: 8, manual: null},
            {id: 4, src: '/img/fondoCultivos.jpg', nombre: 'carretillas', cantidad: 3, manual: null},
            {id: 5, src: '/img/fondoCultivos.jpg', nombre: 'carros', cantidad: 3, manual: null},
            {id: 6, src: '/img/fondoCultivos.jpg', nombre: 'stacones', cantidad: 3, manual: null},
            {id: 7, src: '/img/fondoCultivos.jpg', nombre: 'tornillos', cantidad: 3, manual: null},
            {id: 8, src: '/img/fondoCultivos.jpg', nombre: 'tijeras', cantidad: 3, manual: null},
            {id: 9, src: '/img/fondoCultivos.jpg', nombre: 'cables', cantidad: 3, manual: null},
            {id: 10, src: '/img/fondoCultivos.jpg', nombre: 'cercas', cantidad: 3, manual: null},
        ];
    } catch (error) {
        console.error('Error al cargar el inventario:', error);
        return [];
    }
};

function InventarioPage() {
    const [inventario, setInventario] = useState(cargarInventario());

    // Efecto para guardar en localStorage cada vez que el inventario cambie
    useEffect(() => {
        try {
            localStorage.setItem('inventarioHerramientas', JSON.stringify(inventario));
        } catch (error) {
            console.error('Error al guardar el inventario:', error);
        }
    }, [inventario]);

    const agregarHerramienta = (nuevaHerramienta) => {
        const nuevaHerramientaConId = {
            ...nuevaHerramienta,
            id: Date.now(), // Usamos el timestamp como ID único
            src: '/img/fondoCultivos.jpg', // Asegurando que siempre tenga una imagen por defecto
            manual: null // Aseguramos que el manual sea null por defecto
        };
        setInventario(prevInventario => [...prevInventario, nuevaHerramientaConId]);
    };

    const actualizarCantidad = (id, nuevaCantidad) => {
        setInventario(prevInventario => 
            prevInventario.map(item => 
                item.id === id ? { ...item, cantidad: nuevaCantidad } : item
            )
        );
    };

    const actualizarManual = (id, archivo, urlTemporal) => {
        // En una aplicación real, aquí subirías el archivo a un servidor
        // y obtendrías una URL permanente. Por ahora, usamos la URL temporal.
        console.log(`Subiendo manual para el ítem ${id}:`, archivo.name);
        
        // Leer el archivo como base64 para almacenarlo
        const reader = new FileReader();
        reader.onloadend = () => {
            setInventario(prevInventario => 
                prevInventario.map(item => 
                    item.id === id 
                        ? { 
                            ...item, 
                            manual: {
                                nombre: archivo.name,
                                tipo: archivo.type,
                                datos: reader.result // Datos en base64
                            } 
                        } 
                        : item
                )
            );
        };
        reader.readAsDataURL(archivo);
    };

    return (
        <>
            <div className="w-screen h-screen">
                <Header nav={<Anterior/>} text="Inventario" img={"/img/dosVacas.png"} />
                <div className='h-[70vh] border-[#2b3701]'>
                    <div className='p-5'>
                        <AgregarHerramienta onAgregar={agregarHerramienta} />
                    </div>
                    <div className="w-full h-[60vh] md:h-[70vh] overflow-y-scroll flex flex-wrap justify-around p-5 gap-5 scrollbar-thin scrollbar-thumb-[#2b3701] scrollbar-thumb-rounded-lg">
                        {inventario.map((itemI) => (
                            <InventarioItem 
                                key={itemI.id}
                                id={itemI.id}
                                srcImg={itemI.src} 
                                nombre={itemI.nombre} 
                                cantidad={itemI.cantidad}
                                textCant="cantidad"
                                manual={itemI.manual}
                                onCantidadChange={actualizarCantidad}
                                onManualChange={actualizarManual}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default InventarioPage