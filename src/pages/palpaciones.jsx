import { useState, useEffect } from 'react'
import { Header } from '../components/header.jsx'
import { TablaSencilla } from '../components/Tablas.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faPlus, faSyringe } from '@fortawesome/free-solid-svg-icons';

import { Anterior } from '../components/Menuh.jsx';
import { DataTable } from '../components/DataTables.jsx';
import { FormularioPalpaciones } from '../components/formLogin.jsx';
import { motion } from 'framer-motion';


function PalpacionesPage() {

    const [datosPalpaciones, setDatosPalpaciones] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/api/palpaciones');
            const data = await response.json();
            setDatosPalpaciones(data);
        };
        fetchData();
    }, []);

    const palpacionesColums = [
        { accessorKey: 'id_ganado', header: '# Animal' },
        { accessorKey: 'condicion_corporal', header: 'Condición corporal' },
        { accessorKey: 'hallazgo', header: 'Hallazgo' },
        { accessorKey: 'utero', header: 'Utero' },
        { accessorKey: 'ovario_izq', header: 'Ovario izquierdo' },
        { accessorKey: 'ovario_der', header: 'Ovario derecho' },
        { accessorKey: 'observaciones', header: 'Observación' },
        { accessorKey: 'palpador', header: 'Palpador' },
    ];

    return (
        <>
            <div className="ajustes-page">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className='w-full'
                >
                    <Header nav={<Anterior ruta={"/ganado"} />} text="Palpaciones" img={"/img/optionGanado.jpg"} />
                </motion.div>
                <FormularioPalpaciones />


                <div className="-mt-30">
                    <div className='max-w-screen p-10'>
                        <h1 className='font-bold text-xl m-10'>Registro de palpaciones</h1>
                        <DataTable data={datosPalpaciones} columnas={palpacionesColums} name={"Datos Palpaciones"} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PalpacionesPage