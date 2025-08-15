import { useState, useEffect } from 'react'
import { Header } from '../components/header.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { Anterior } from '../components/Menuh.jsx';
import { InventarioSuplementosItem } from '../components/Items.jsx';
import { AgregarHerramienta } from '../components/Items.jsx';

import { motion } from 'framer-motion';
// Función para cargar el inventario desde localStorage
const cargarInventario = () => {
    try {
        // Si no hay nada guardado, retornamos los datos por defecto
        return [
            { id: 1, nombre: 'Melaza de caña', cantidad: 10, tipo: 'Suplemento', uso: 'Mejora la digestión y el apetito' },
            { id: 2, nombre: 'Maíz molido', cantidad: 5, tipo: 'Suplemento', uso: 'Fuente de energía y nutrientes' },
            { id: 3, nombre: 'Avena', cantidad: 8, tipo: 'Suplemento', uso: 'Aporta fibra y energía' },
            { id: 4, nombre: 'Cebada', cantidad: 3, tipo: 'Suplemento', uso: 'Mejora la salud digestiva' },
            { id: 5, nombre: 'Salvado de trigo', cantidad: 3, tipo: 'Suplemento', uso: 'Aporta fibra y nutrientes' },
        ];
    } catch (error) {
        console.error('Error al cargar el inventario:', error);
        return [];
    }
};

function InventarioSuplementos() {
    const [inventario, setInventario] = useState(cargarInventario());

    // Efecto para guardar en localStorage cada vez que el inventario cambie
    useEffect(() => {
        try {
            localStorage.setItem('inventarioSuplementos', JSON.stringify(inventario));
        } catch (error) {
            console.error('Error al guardar el inventario:', error);
        }
    }, [inventario]);

    const agregarSuplemento = (nuevoSuplemento) => {
        const nuevoSuplementoConId = {
            ...nuevoSuplemento,
            id: Date.now(), // Usamos el timestamp como ID único
        };
        setInventario(prevInventario => [...prevInventario, nuevoSuplementoConId]);
    };

    const actualizarCantidad = (id, nuevaCantidad) => {
        setInventario(prevInventario =>
            prevInventario.map(item =>
                item.id === id ? { ...item, cantidad: nuevaCantidad } : item
            )
        );
    };

    return (

        <div className="w-screen h-screen">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className='w-full'
            >


                <Header nav={<Anterior ruta={"/ganado"} />} text="Inventario Suplementos" img={"/img/dosVacas.png"} />
            </motion.div>
            <div className='h-[70vh] border-[#2b3701]'>
                <div className='p-5'>
                    <AgregarHerramienta text={"Agregar Suplemento"} nombre={"Nombre del Suplemento"} onAgregar={agregarSuplemento} />
                </div>
                <div className="w-full h-[60vh] md:h-[70vh] overflow-y-scroll flex flex-wrap justify-around p-5 gap-5 scrollbar-thin scrollbar-thumb-[#2b3701] scrollbar-thumb-rounded-lg">
                    {inventario.map((itemI) => (
                        <InventarioSuplementosItem
                            key={itemI.id}
                            id={itemI.id}
                            nombre={itemI.nombre}
                            cantidad={itemI.cantidad}
                            textCant="Cantidad:"
                            tipo={itemI.tipo}
                            uso={itemI.uso}
                            onCantidadChange={actualizarCantidad}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
};


export default InventarioSuplementos