import { useState } from 'react'
import { Avatar } from '../components/avatar.jsx'
import { HeaderSoloText } from '../components/header.jsx'
import { InputInfo } from '../components/inputs.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faCow } from '@fortawesome/free-solid-svg-icons';
import { ItemsTypes, ImagesItem } from '../components/Items.jsx'

import './viewImagenes.css'
import { Anterior } from '../components/Menuh.jsx'


function ImagenesPage() {
    const [count, setCount] = useState(0);

    const imagenes = [
        '/img/fondoCultivos.jpg',
        '/img/Ganado-bovino.jpeg',
        '/img/dosVacas.png',
        '/img/cow.jpg',
        '/img/mitadDeCaraVaca.jpg',
        '/img/muuu.jpg',
        '/img/saturnoSaturnita.jpg',
        '/img/tresVacas.jpg',
        '/img/vacaMirandoCamara.jpg'
    ]

    return (
        <>
            <div className="ajustes-page">
                <HeaderSoloText nav={<Anterior />} text="Imagenes" img={"/img/dosVacas.png"} />
                <div className="content">
                    {imagenes.map((srcImg, index) => (
                        <ImagesItem key={index} srcImg={srcImg}/>
                    ))}
                </div>

            </div>
        </>
    )
}

export default ImagenesPage