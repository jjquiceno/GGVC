import { useState } from 'react'

import { Header, HeaderLeft } from '../components/header.jsx'
import { ItemsTypes } from '../components/Items.jsx'
import { Items } from '../components/Items.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faChartBar, faCow, faExchangeAlt, faHandPaper, faHistory, faLeftLong, faPlus, faSyringe, faUpRightAndDownLeftFromCenter, faTree, faVenusMars, faAngleRight, faAngleDown, faChartLine, faScaleBalanced, faLayerGroup, faImage, faBox, faPills } from '@fortawesome/free-solid-svg-icons';

function GanadoPage() {

    const [desplegado, setDesplegado] = useState(false);

    const toggleDesplegado = () => {
        setDesplegado(!desplegado);
    };

    const [count, setCount] = useState(0)

    return (
        <>
            <div className="min-h-screen w-screen bg-[#fffdef] flex flex-col items-center overflow-x-hidden">
                <HeaderLeft text="Ganado" />
                <div className="flex flex-col w-[90vw] mt-[30vh] justify-center">
                    <h2 className='text-black font-bold text-2xl m-5'>Funciones</h2>
                    <div className="w-[90vw] grid grid-rows-1 grid-cols-10 items-center justify-items-center text-black text-[1.5rem]">
                        <Items icono={<FontAwesomeIcon icon={faSyringe} />} text="Vacunas" ruta={"/ciclosPage"}/>
                        <Items icono={<FontAwesomeIcon icon={faPlus} />} text="Médica" ruta={"/medica"} />
                        <Items icono={<FontAwesomeIcon icon={faExchangeAlt} />} text="Comparación" ruta={"/infoCiclosVacunacion"} />
                        <Items icono={<FontAwesomeIcon icon={faChartBar} />} text="Gráficas" ruta={"/graficos"}/>
                        <Items icono={<FontAwesomeIcon icon={faHandPaper} />} text="Palpaciones" ruta={"/palpaciones"} />
                        <Items icono={<FontAwesomeIcon icon={faHistory} />} text="Historiales" ruta={"/historiales"} />
                        <Items icono={<FontAwesomeIcon icon={faBell} />} text="Recordatorios" />
                        <Items icono={<FontAwesomeIcon icon={faVenusMars} />} text="Reproducción" />
                        <Items icono={<FontAwesomeIcon icon={faTree} />} text="Descendencia" />

                        <FontAwesomeIcon
                            icon={desplegado ? faAngleDown : faAngleRight}
                            className={`ml-[-5vw] mb-8 cursor-pointer transition-transform duration-300 ease-in-out ${desplegado ? 'rotate-90' : ''}`}
                            onClick={toggleDesplegado}
                        />
                    </div>

                    <div className={`w-full overflow-hidden transition-[max-height] duration-300 ease-in-out ${desplegado ? 'max-h-[25vh]' : 'max-h-0'}`}> 
                        <div className="w-[90vw] h-full grid grid-rows-1 grid-cols-10 items-center justify-items-center text-black text-[1.5rem]"> 
                            <Items icono={<FontAwesomeIcon icon={faChartLine} />} text="Rendimiento" /> 
                            <Items icono={<FontAwesomeIcon icon={faScaleBalanced} />} text="Pesaje" /> 
                            <Items icono={<FontAwesomeIcon icon={faLayerGroup} />} text="Clasificación" /> 
                            <Items icono={<FontAwesomeIcon icon={faImage} />} text="Imagenes" ruta={"/imagenes"}/> 
                            <Items icono={<FontAwesomeIcon icon={faBox} />} text="Producción" /> 
                            <Items icono={<FontAwesomeIcon icon={faPills} />} text="Suplementos" ruta={"/porcentajeSal"}/> 
                        </div> 
                    </div>

                    <div className="w-full flex flex-wrap justify-between gap-5 align-center minmax-100px items-center justify-items-center mb-8 mt-4">
                        <ItemsTypes icono={<FontAwesomeIcon icon={faCow} />} text="Ganado" ruta="/ganadoList"/>
                        <ItemsTypes icono={<FontAwesomeIcon icon={faCow} />} text="Vacas" ruta="/ganadoList"/>
                        <ItemsTypes icono={<FontAwesomeIcon icon={faCow} />} text="Toros" ruta="/ganadoList"/>
                        <ItemsTypes icono={<FontAwesomeIcon icon={faCow} />} text="Terneros" ruta="/ganadoList"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GanadoPage