import { useState } from 'react'
import { Avatar } from '../components/avatar.jsx'
import { Header } from '../components/header.jsx'
import { InputInfo } from '../components/inputs.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCow, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

import "./graficos.css"
import GraficoLineas from '../components/graficoLineas.jsx';
import GraficoBarras from '../components/graficoBarras.jsx';
import { Anterior } from '../components/Menuh.jsx';

const hembrasData = [
    { edad: '0', peso: 0 },
    { edad: '1 año', peso: 250 },
    { edad: '2 años', peso: 400 },
    { edad: '3 años', peso: 550 },
    { edad: '4 años', peso: 600 },
];

const machosData = [
    { edad: '0', peso: 0 },
    { edad: '1 año', peso: 300 },
    { edad: '2 años', peso: 400 },
    { edad: '3 años', peso: 650 },
    { edad: '4 años', peso: 700 },
];

function GraficosPage() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="graficos-page">
                <Header nav={<Anterior ruta={"/ganado"}/>} text="Gráficas" img={"/img/cow.jpg"} />
                <div className="content">
                    <div className="peso-hembras flex flex-col items-center justify-center mt-10">
                        <div className="text">
                            <h2 className='text-[#0c2001] font-bold text-2xl ml-7'>Hembras</h2>
                            <p className='text-black text-xs'>Promedio de peso segun edad</p>
                        </div>
                        <div className="grafic flex mt-10">
                            <FontAwesomeIcon icon={faCow} className="icon text-[#2b3701] text-8xl mt-20" />
                            <GraficoLineas data={hembrasData} />
                        </div>

                    </div>
                    <div className="peso-machos flex flex-col items-center justify-center mt-10">
                        <div className="text">
                            <h2 className='text-[#0c2001] font-bold text-2xl ml-7'>Machos</h2>
                            <p className='text-black text-xs'>Promedio de peso segun edad</p>
                        </div>
                        <div className="grafic flex mt-10">
                            <FontAwesomeIcon icon={faCow} className="icon text-[#2b3701] text-8xl mt-20" />
                            <GraficoLineas data={machosData}/>
                        </div>
                    </div>
                    <div className="prod-leche flex flex-col items-center justify-center mt-10">
                        <div className="text">
                            <h2 className='text-[#0c2001] font-bold text-2xl ml-7'>Producción de leche</h2>
                            <p className='text-black text-xs ml-[40%]'>Litros por mes</p>
                        </div>
                        <div className="grafic w-[70%] flex mt-10">
                            <GraficoBarras />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GraficosPage