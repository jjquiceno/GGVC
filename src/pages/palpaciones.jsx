import { useState } from 'react'
import { Header} from '../components/header.jsx'
import { TablaSencilla } from '../components/Tablas.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faPlus, faSyringe } from '@fortawesome/free-solid-svg-icons';

import './ciclosPage.css'
import { Anterior } from '../components/Menuh.jsx';

const regPalpaciones1Col = ['#A', 'Condición corporal', 'Hallazgo', 'Palpador'];
const regPalpaciones2Col = ['Utero', 'Ovario izquierdo', 'Ovario derecho', 'Observación'];

const datosGanado = [
  ['001', 'Brahman', '2 m', 'M'],
  ['212', 'Brahman', '1 a', 'H'],
  ['001', 'Brahman', '2 m', 'M'],
  ['212', 'Brahman', '1 a', 'H'],
];

function PalpacionesPage() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="ajustes-page">
                <Header nav={<Anterior ruta={"/ganado"}/>} text="Palpaciones" img={"/img/optionGanado.jpg"}/>
                <div className='add-buttom'>
                    <FontAwesomeIcon className='iconomas' icon={faPlus}/>
                </div>
                <div className="content">
                    <div className='tabla-container'>
                        <h1 className='tittle'>Registro de palpaciones</h1>
                        <TablaSencilla columnas={regPalpaciones1Col} datos={datosGanado} />
                    </div>
                    <div className='tabla-container'>
                        <TablaSencilla columnas={regPalpaciones2Col} datos={datosGanado} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PalpacionesPage