import { useState } from 'react'
import { Header} from '../components/header.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';

import { Anterior } from '../components/Menuh.jsx';

import AnimalTable from '../components/AnimalTable.jsx';


function CiclosPage() {
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

export default CiclosPage