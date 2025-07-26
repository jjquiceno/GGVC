import { useState } from 'react'
import { Avatar } from '../components/avatar.jsx'
import { Header } from '../components/header.jsx'
import { InputInfo } from '../components/inputs.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

import './ajustes.css'
import { Menu } from '../components/Menuh.jsx';
import { ButtonAreasCultivos } from '../components/buttonAreas.jsx';


function PruebasApp() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="ajustes-page">
                <Header nav={<Menu/>} text="Ajustes" />
                <div className="content">
                    <ButtonAreasCultivos img={"/vaca.jpg"} text={"Cosechas y cultivos "}/>      
                </div>
            </div>
        </>
    )
}

export default PruebasApp
