import { useState, useEffect } from 'react'
import { Header} from '../components/header.jsx'
import { TablaSencilla } from '../components/Tablas.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faPlus, faSyringe } from '@fortawesome/free-solid-svg-icons';

import { Anterior } from '../components/Menuh.jsx';
import { DataTable } from '../components/DataTables.jsx';



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
                <Header nav={<Anterior ruta={"/ganado"}/>} text="Palpaciones" img={"/img/optionGanado.jpg"}/>
                <div className='add-buttom'>
                    <FontAwesomeIcon className='iconomas' icon={faPlus}/>
                </div>
                <div className="mt-[30vh]">
                    <div className='max-w-screen p-10'>
                        <h1 className='font-bold text-xl m-10'>Registro de palpaciones</h1>
                        <DataTable data={datosPalpaciones} columnas={palpacionesColums} name={"Datos Palpaciones"}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PalpacionesPage