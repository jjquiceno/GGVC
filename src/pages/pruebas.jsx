import { useState } from 'react'
import { Avatar } from '../components/avatar.jsx'
import { Header, HeaderLeft } from '../components/header.jsx'
import { InputInfo } from '../components/inputs.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';

import './ajustes.css'
import { Anterior, Menu } from '../components/Menuh.jsx';
import { ButtonAreasCultivos } from '../components/buttonAreas.jsx';

import AnimalTable from '../components/AnimalTable.jsx';


function PruebasApp() {
    const datosAnimales = [
        {
            id_ganado: 1,
            nombre: 'Luna',
            raza: 'Holstein',
            sexo: 'Hembra',
            fecha: '2023-03-10',
            potrero: 'A1',
            estado: 'Activo',
        },
        {
            id_ganado: 2,
            nombre: 'Toro',
            raza: 'Brahman',
            sexo: 'Macho',
            fecha: '2022-05-15',
            potrero: 'B2',
            estado: 'Enfermo',
        },
    ];

    return (
        <>
            <Header nav={<Anterior ruta={"/ganado"} />} text="Ciclos de vacunacion" img={"/img/vacaMirandoCamara.jpg"} />
            <div className='add-buttom'>
                <FontAwesomeIcon className='iconomas' icon={faPlus} />
            </div>
            <div className="contenido-ciclos mt-[30vh]">
                <div className="p-10">
                    <h1 className='tittle'>Datos del ganado</h1>
                    <AnimalTable data={datosAnimales} />
                </div>
                <div className="p-10">
                    <h1 className='tittle'>Datos del ganado</h1>
                    <AnimalTable data={datosAnimales} />
                </div>
                <div className="p-10">
                    <h1 className='tittle'>Datos del ganado</h1>
                    <AnimalTable data={datosAnimales} />
                </div>
            </div>

        </>
    )
}

export default PruebasApp
