import { useState } from 'react';

import { HeaderSearch } from '../components/header.jsx';
import { ItemsList } from '../components/Items.jsx';
import { TablaAnimal } from '../components/Tablas.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ganadoList.css';
import { faBaby, faCheckCircle, faCow, faPersonPregnant, faPlus, faSlidersH, faStethoscope } from '@fortawesome/free-solid-svg-icons';

function GanadoListPage() {
    const [selectedAnimal, setSelectedAnimal] = useState(null);

    const animales = [
        { nombre: "Princesa", potrero: "01", genero: 'H', iconoS: faBaby, fecha: "01/03"},
        { nombre: "Thor", potrero: "01", genero: 'M', iconoS: faStethoscope, fecha: "11/23"},
        { nombre: "Clara", potrero: "02", genero: 'H', iconoS: faPersonPregnant,fecha: "08/06"},
        { nombre: "01234", potrero: "01", genero: 'H', iconoS: faBaby, fecha: "09/15"},
        { nombre: "Lola", potrero: "02", genero: 'H', iconoS: faStethoscope, fecha: "04/11"},
        { nombre: "Pinto", potrero: "03", genero: 'M', iconoS: faCheckCircle, fecha: "06/11"},
        { nombre: "01458", potrero: "04", genero: 'H', iconoS: faBaby, fecha: "04/08"},
        { nombre: "86311", potrero: "04", genero: 'H', iconoS: faBaby, fecha: "02/29"},
    ];

    const handleAnimalClick = (animal) => {
        setSelectedAnimal(animal);
    };

    return (
        <>
            <div className="ganado-list-page ">
                <HeaderSearch img={"/img/Ganado-bovino.jpeg"}/>
                <div className="ganado-list-content">
                    <div className="continer-list">
                        <div className="icons w-[90%] h-[70%] flex justify-between">
                            <div className="add"><FontAwesomeIcon icon={faPlus} /></div>
                            <FontAwesomeIcon icon={faSlidersH} className="text-black text-2xl mt-10 cursor-pointer" />
                        </div>
                        <div className="list">
                            {animales.map((animal) => (
                                <ItemsList
                                    iconoA={<FontAwesomeIcon icon={faCow} />}
                                    nombre={animal.nombre}
                                    potrero={animal.potrero}
                                    genero={animal.genero}
                                    fecha={animal.fecha}
                                    iconoS={<FontAwesomeIcon icon={animal.iconoS} />}
                                    onClick={() => handleAnimalClick(animal)}
                                    className="cursor-pointer" // Añadimos un cursor para indicar que es ক্লিকable
                                />
                            ))}
                        </div>
                    </div>

                    <div className="list-info">
                        {selectedAnimal && (
                            <TablaAnimal
                                nombre={selectedAnimal.nombre}
                                id={selectedAnimal.potrero}
                                numeros={selectedAnimal.fecha} // Estos datos podrían venir del objeto animal
                                iconS={<FontAwesomeIcon icon={selectedAnimal.iconoS} />} // También el icono
                                fecha={"01/03/2016"}
                                edad={"9a 10m 27d"}
                                sexo={selectedAnimal.genero}
                                raza={"Holstein"} // Estos datos deberían ser dinámicos
                                madre={"Lola"} // Estos datos deberían ser dinámicos
                                padre={"Lolito"} // Estos datos deberían ser dinámicos
                                desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} // Estos datos deberían ser dinámicos
                                rebanoAc={selectedAnimal.potrero} // Estos datos deberían ser dinámicos
                                rebanoAn={"02"} // Estos datos deberían ser dinámicos
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default GanadoListPage;