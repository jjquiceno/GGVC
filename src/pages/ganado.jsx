import { useState } from 'react'

import { Header, HeaderLeft } from '../components/header.jsx'
import { ItemsTypes } from '../components/Items.jsx'
import { Items } from '../components/Items.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faChartBar, faCow, faExchangeAlt, faHandPaper, faHistory, faLeftLong, faPlus, faSyringe, faUpRightAndDownLeftFromCenter, faTree, faVenusMars, faAngleRight, faAngleDown, faChartLine, faScaleBalanced, faLayerGroup, faImage, faBox, faPills } from '@fortawesome/free-solid-svg-icons';

import './ganado.css'


function GanadoPage() {

    const [desplegado, setDesplegado] = useState(false);

    const toggleDesplegado = () => {
        setDesplegado(!desplegado);
    };

    const [count, setCount] = useState(0)

    return (
        <>
            <div className="ganado-page">
                <HeaderLeft text="Ganado" />
                <div className="continer">
                    <h2 className='text-black font-bold text-2xl m-5'>Funciones</h2>
                    <div className="items">
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
                            className={`arrow ${desplegado ? 'active' : ''}`}
                            onClick={toggleDesplegado}
                        />
                    </div>

                    <div className={`segunda-fila-container ${desplegado ? 'active' : ''}`}> 
                        <div className="segunda-fila"> 
                            <Items icono={<FontAwesomeIcon icon={faChartLine} />} text="Rendimiento" /> 
                            <Items icono={<FontAwesomeIcon icon={faScaleBalanced} />} text="Pesaje" /> 
                            <Items icono={<FontAwesomeIcon icon={faLayerGroup} />} text="Clasificación" /> 
                            <Items icono={<FontAwesomeIcon icon={faImage} />} text="Imagenes" /> 
                            <Items icono={<FontAwesomeIcon icon={faBox} />} text="Producción" /> 
                            <Items icono={<FontAwesomeIcon icon={faPills} />} text="Suplementos" ruta={"/porcentajeSal"}/> 
                        </div> 
                    </div>

                    <div className="items-types">
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