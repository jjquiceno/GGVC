import { useState } from 'react'
import { Header} from '../components/header.jsx'
import { TablaSencilla } from '../components/Tablas.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import './ciclosPage.css'
import { Anterior } from '../components/Menuh.jsx';

const datosGanadoCol = ['#A', 'Raza', 'Edad', 'Sexo', 'Peso', 'Estado Prod'];

const datosGanado = [
  ['001', 'Brahman', '2 m', 'M', '80', 'Lavante'],
  ['212', 'Brahman', '1 a', 'H', '180', 'Peñez'],
  ['001', 'Brahman', '2 m', 'M', '80', 'Lavante'],
  ['212', 'Brahman', '1 a', 'H', '180', 'Peñez'],
];

function CiclosPage() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="ajustes-page">
                <Header nav={<Anterior ruta={"/ganado"}/>} text="Ciclos de vacunacion" img={"/img/vacaMirandoCamara.jpg"} />
                <div className='add-buttom'>
                    <FontAwesomeIcon className='iconomas' icon={faPlus}/>
                </div>
                <div className="content">
                    <div className='tabla-container'>
                        <h1 className='tittle'>Datos del ganado</h1>
                        <TablaSencilla columnas={datosGanadoCol} datos={datosGanado} />
                    </div>
                    <div className='tabla-container'>
                        <h1 className='tittle'>Datos de vacuna</h1>
                        <TablaSencilla columnas={datosGanadoCol} datos={datosGanado} />
                    </div>
                    <div className='tabla-container'>
                        <h1 className='tittle'>Datos de peso</h1>
                        <TablaSencilla columnas={datosGanadoCol} datos={datosGanado} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CiclosPage