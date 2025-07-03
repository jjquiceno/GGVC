import { useState } from 'react'
import { Avatar } from '../components/avatar.jsx'
import { Header } from '../components/header.jsx'
import { InputInfo } from '../components/inputs.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

import { Anterior } from '../components/Menuh.jsx';
import { TablaInfoGanado, TablaDatosVisitaMed, TablaDatosMedicos } from '../components/Tablas.jsx';


function MedicaPage() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="">
                <Header nav={<Anterior ruta={"/ganado"}/>} text="Aplicación Médica" img={"/img/tresVacas.jpg"}/>
                <div className="medica-page w-[100vw] h-[50vh] flex items-center justify-center mt-[30vh] gap-10">
                   <TablaInfoGanado/>
                   <TablaDatosVisitaMed/>
                </div>
                <div className='w-[90.5%] h-[30%] ml-9 flex items-center justify-center"'>
                <TablaDatosMedicos/>
                </div>
                
            </div>
        </>
    )
}

export default MedicaPage