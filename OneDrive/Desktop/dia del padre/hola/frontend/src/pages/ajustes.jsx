import { useState } from 'react'
import { Avatar } from '../components/avatar.jsx'
import { Header } from '../components/header.jsx'
import { InputInfo } from '../components/inputs.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';


import { Menu } from '../components/Menuh.jsx';


function AjustesPage() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="min-h-screen w-screen flex flex-col bg-[#fffdef]">
                <Header nav={<Menu/>} text="Ajustes" img={"/img/dosVacas.png"} />
                <div className="h-[70vh] w-full grid grid-cols-2 grid-rows-1 items-center mt-[30vh]">
                    <div className="flex flex-col items-center gap-4">
                        <h5 className="font-semibold text-black">Privacidad</h5>
                        <div className="grid gap-2 w-1/2 mx-auto">
                            <button className="bg-[#e9edc9] border-none shadow-[10px_10px_10px_2px_rgba(0,0,0,0.164)] text-black px-4 py-2 rounded hover:shadow-[0px_0px_10px_2px_rgba(0,0,0,0.164)] transition-all duration-300 ease-in-out">Cambiar usuario</button>
                            <button className="bg-[#e9edc9] border-none shadow-[10px_10px_10px_2px_rgba(0,0,0,0.164)] text-black px-4 py-2 rounded hover:shadow-[0px_0px_10px_2px_rgba(0,0,0,0.164)] transition-all duration-300 ease-in-out">Cambiar correo</button>
                            <button className="bg-[#e9edc9] border-none shadow-[10px_10px_10px_2px_rgba(0,0,0,0.164)] text-black px-4 py-2 rounded hover:shadow-[0px_0px_10px_2px_rgba(0,0,0,0.164)] transition-all duration-300 ease-in-out">Cambiar contraseña</button>
                        </div>
                        <h5 className="font-semibold text-black">Copias de seguridad</h5>
                        <div className="grid gap-2 w-1/2 mx-auto">
                            <button className="bg-[#e9edc9] border-none shadow-[10px_10px_10px_2px_rgba(0,0,0,0.164)] text-black px-4 py-2 rounded hover:shadow-[0px_0px_10px_2px_rgba(0,0,0,0.164)] transition-all duration-300 ease-in-out">Generar copia de seguridad</button>
                        </div>
                    </div>

                    <div className="w-4/5 h-[90%] flex flex-col mt-[25%]">
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

export default AjustesPage