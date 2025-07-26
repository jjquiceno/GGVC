import { useState } from 'react'
import { Avatar } from '../components/avatar.jsx'
import { Header } from '../components/header.jsx'
import { InputInfo } from '../components/inputs.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

import './ajustes.css'
import { Menu } from '../components/Menuh.jsx';


function AgregararbolGenealogico() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="ajustes-page">
                <Header nav={<Menu/>} text="Agregar arbol genealogico" img={"/img/dosVacas.png"} />
                <div className="content">
                    <div className="options">
                        <h5>Privacidad</h5>
                        <div className="grid gap-2 w-1/2 mx-auto">
                            <button className="btn-primary" >Cambiar usuario</button>
                            <button className="btn-primary" >Cambiar correo</button>
                            <button className="btn-primary">Cambiar contraseña</button>
                        </div>
                        <h5>Copias de seguridad</h5>
                        <div className="grid gap-2 w-1/2 mx-auto">
                            <button className="btn-primary" >Generar copia de seguridad</button>
                        </div>
                    </div>

                    <div className="perfil">
                        <Avatar />
                        <div className="info">
                            <InputInfo icono={<FontAwesomeIcon icon={faUser} />} placeholder="Nombre" info="Isabella" />
                            <InputInfo icono={<FontAwesomeIcon icon={faEnvelope} />} placeholder="Correo" info="Isa@gmail.com" />
                            <InputInfo icono={<FontAwesomeIcon icon={faUser} />} placeholder="Usuario" info="Isa" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AgregararbolGenealogico