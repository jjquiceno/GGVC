import { useState } from 'react'
import { Header} from '../components/header.jsx'
import { TablaSencilla, TablaInfoCiclo } from '../components/Tablas.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faPlus, faSyringe } from '@fortawesome/free-solid-svg-icons';

import './infoCiclosVacunacion.css'
import { Anterior } from '../components/Menuh.jsx';


function InfoCiclosVacunacionPage() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="ajustes-page">
                <Header nav={<Anterior ruta={"/ganado"}/>} text="Compracion de los ciclos de vacunacion" img={"/img/vacas2.jpg"}/>
                <div className="content">
                    <div className='tabla-container'>
                        <TablaInfoCiclo
                            ciclonum={1}
                            ticDescripcion={"Vacunacion de la madre de las crias del potrero la chimbita"}
                            ticDosis={"1ml"}
                            ticDuracion={"1 mes"}
                            ticFecha={"20/08/2023"}
                            ticTipoVacuna={"influenza"}

                        />
                    </div>
                    <div className='tabla-container'>
                        <TablaInfoCiclo
                            ciclonum={2}
                            ticDescripcion={"Vacunacion de la madre de las crias del potrero la chimbita"}
                            ticDosis={"1ml"}
                            ticDuracion={"1 mes"}
                            ticFecha={"20/08/2023"}
                            ticTipoVacuna={"influenza"}

                        />
                    </div>
                    <div className='tabla-container'>
                        <TablaInfoCiclo
                            ciclonum={3}
                            ticDescripcion={"Vacunacion de la madre de las crias del potrero la chimbita"}
                            ticDosis={"1ml"}
                            ticDuracion={"1 mes"}
                            ticFecha={"20/08/2023"}
                            ticTipoVacuna={"influenza"}

                        />
                    </div>
                    <div className='tabla-container'>
                        <TablaInfoCiclo
                            ciclonum={4}
                            ticDescripcion={"Vacunacion de la madre de las crias del potrero la chimbita"}
                            ticDosis={"1ml"}
                            ticDuracion={"1 mes"}
                            ticFecha={"20/08/2023"}
                            ticTipoVacuna={"influenza"}

                        />
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default InfoCiclosVacunacionPage