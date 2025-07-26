import { useState } from 'react'
import { Avatar } from '../components/avatar.jsx'
import { Header, HeaderSearch } from '../components/header.jsx'
import { InputInfo } from '../components/inputs.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { TablaAbortos } from '../components/Tablas.jsx';


function HistorialesPage() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="ajustes-page">
                <HeaderSearch text="Historiales" img={"/img/mitadDeCaraVaca.jpg"} />
                <div className="w-[100vw] h-[50vh] flex items-center justify-center mt-[30vh] gap-10">
                    <TablaAbortos taTittle={"Abortos"}/>
                    <TablaAbortos taTittle={"Defunciones"}/>
                </div>
            </div>
        </>
    )
}

export default HistorialesPage