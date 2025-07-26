import { useState } from 'react'
import { HeaderSoloText } from '../components/header.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ImagesItem } from '../components/Items.jsx'

import './viewImagenes.css'
import { Anterior } from '../components/Menuh.jsx'

function ImagenesPage() {
    const [count, setCount] = useState(0);
    
    const imagenes2 = [
        {src: '/img/fondoCultivos.jpg', nombre: 'lola', edad: '2a 1m'},
        {src: '/img/Ganado-bovino.jpeg', nombre: 'lola', edad: '2a 1m'},
        {src: '/img/dosVacas.png', nombre: 'lola', edad: '2a 1m'},
        {src: '/img/cow.jpg', nombre: 'lola', edad: '2a 1m'},
        {src: '/img/mitadDeCaraVaca.jpg', nombre: 'lola', edad: '2a 1m'},
        {src: '/img/muuu.jpg', nombre: 'lola', edad: '2a 1m'},
        {src: '/img/tresVacas.jpg', nombre: 'lola', edad: '2a 1m'},
        {src: '/img/saturnoSaturnita.jpg', nombre: 'lola', edad: '2a 1m'},
        {src: '/img/vacaMirandoCamara.jpg', nombre: 'lola', edad: '2a 1m'},
    ];

    return (
        <>
            <div className="ajustes-page">
                <HeaderSoloText nav={<Anterior />} text="Imagenes" img={"/img/dosVacas.png"} />
                <div className="content">
                    {imagenes2.map((imagen, index) => (
                        <ImagesItem key={index} srcImg={imagen.src} nombre={imagen.nombre} edad={imagen.edad}/>
                    ))}
                </div>

            </div>
        </>
    )
}

export default ImagenesPage