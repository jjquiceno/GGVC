import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '../components/avatar.jsx'
import { Header } from '../components/header.jsx'
import { InputInfo } from '../components/inputs.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { jwtDecode } from 'jwt-decode';


import { Menu } from '../components/Menuh.jsx';
import { FormularioEmailEdit, FormularioPasswordEdit } from '../components/formLogin.jsx';
import { motion } from 'framer-motion';

function AjustesPage() {

    const token = sessionStorage.getItem('token');
    const decoded = token ? jwtDecode(token) : null;

    return (
        <>
            <div className="min-h-screen w-screen flex flex-col bg-[#fffdef]">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className='w-full'
                >
                    <Header nav={<Menu />} text="Ajustes" img={"/img/dosVacas.png"} />
                </motion.div>
                <div className="h-full w-full grid grid-cols-2 grid-rows-1 items-center">
                    <div className="flex flex-col items-center gap-4">
                        <h5 className="font-semibold text-black">Mis datos</h5>
                        <div className="grid gap-2 w-1/2 mx-auto">
                            <FormularioEmailEdit user={decoded.usuario} />
                            <FormularioPasswordEdit user={decoded.usuario} />
                        </div>

                    </div>

                    <div className="w-4/5 h-[90%] flex flex-col mt-[25%]">
                        <Avatar />
                        <div className="info">
                            <InputInfo icono={<FontAwesomeIcon icon={faUser} />} placeholder="Nombre" info={decoded.nombre} />
                            <InputInfo icono={<FontAwesomeIcon icon={faEnvelope} />} placeholder="Correo" info={decoded.email} />
                            <InputInfo icono={<FontAwesomeIcon icon={faUser} />} placeholder="Usuario" info={decoded.usuario} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AjustesPage