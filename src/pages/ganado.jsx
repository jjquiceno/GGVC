import { useState } from 'react'

import { HeaderLeft } from '../components/header.jsx'
import { ItemsTypes } from '../components/Items.jsx'
import { Items } from '../components/Items.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCow, faHandPaper, faSyringe, faBox, faPills, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

function GanadoPage() {

    return (
        <>
            <div className="min-h-screen w-screen bg-[#fffdef] flex flex-col items-center overflow-x-hidden">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className='w-full'
                >
                    <HeaderLeft text="Ganado" />
                </motion.div>
                <div className="flex flex-col w-[90vw] justify-center items-center md:flex-row">
                    <div className="w-full flex flex-wrap justify-center md:justify-between gap-5 align-center minmax-100px items-center justify-items-center mb-8 mt-4">
                        <ItemsTypes icono={<FontAwesomeIcon icon={faCow} />} text="Ganado" ruta="/ganadoList" />
                    </div>
                    <div>
                        <h2 className='text-black font-bold text-2xl m-5'>Funciones</h2>
                        <div className="w-[90vw] md:w-[60vw] grid grid-rows-3 grid-cols-3 gap-5 md:gap-0 md:grid-rows-1 md:grid-cols-7 items-center justify-items-center text-black text-[1.5rem]">
                            <Items icono={<FontAwesomeIcon icon={faSyringe} />} text="Sanidad" ruta={"/ciclosPage"} />
                            <Items icono={<FontAwesomeIcon icon={faHandPaper} />} text="Palpaciones" ruta={"/palpaciones"} />
                            <Items icono={<FontAwesomeIcon icon={faBox} />} text="Producción" ruta={"/produccion"} />
                            <Items icono={<FontAwesomeIcon icon={faPills} />} text="Suplementos" ruta={"/inventarioSuplementos"} />
                            <Items icono={<FontAwesomeIcon icon={faSeedling} />} text="Nutrición" ruta={"/gesNutricion"} />
                            {/* <Items icono={<FontAwesomeIcon icon={faHistory} />} text="Historiales" ruta={"/historiales"} />
                            <Items icono={<FontAwesomeIcon icon={faVenusMars} />} text="Reproducción" />
                            <Items icono={<FontAwesomeIcon icon={faImage} />} text="Imagenes" ruta={"/imagenes"} /> */}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default GanadoPage