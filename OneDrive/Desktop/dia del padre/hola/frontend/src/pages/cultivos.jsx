import { useState } from 'react'
import { Avatar } from '../components/avatar.jsx'
import { Header, HeaderInvert, HeaderLeft } from '../components/header.jsx'
import { InputInfo } from '../components/inputs.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

import { Menu } from '../components/Menuh.jsx';
import { ButtonAreasCultivos } from '../components/buttonAreas.jsx';


function CultivosPage() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="ajustes-page">
                <HeaderInvert text="Cultivos" img={"/img/fondoCultivos.jpg"} />
                <div className="content mt-[40vh] flex items-center justify-center gap-10">
                    <ButtonAreasCultivos img={"/img/cultivos.jpg"} text={"Cosechas y cultivos "}/>
                    <ButtonAreasCultivos img={"/img/abonos.jpg"} text={"Abonos y producto"}/>     
                </div>
            </div>
        </>
    )
}

export default CultivosPage
