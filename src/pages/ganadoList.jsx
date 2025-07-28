import { useState, useEffect } from 'react';
import React from 'react';

import { HeaderSearch } from '../components/header.jsx';
import { ItemsList } from '../components/Items.jsx';
import { TablaAnimal } from '../components/Tablas.jsx';
import  FormularioAnimalDialog  from '../components/formLogin.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ganadoList.css';
import { faBaby, faCheckCircle, faCow, faPersonPregnant, faPlus, faSlidersH, faStethoscope } from '@fortawesome/free-solid-svg-icons';

function GanadoListPage() {

    const [animales, setAnimales] = useState([]);
    
    const [selectedAnimal, setSelectedAnimal] = useState(null);

    useEffect(() => {
        const fetchGanado = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/ganado');
                const data = await response.json();

                const getIcono = (estado) => {
                    switch (estado) {
                        case 'Amamantamiento':
                            return faBaby;
                        case 'Prenez':
                            return faPersonPregnant;
                        case 'Enfermo':
                            return faStethoscope;
                        case 'Sano':
                            return faCheckCircle;
                    }
                };

                const formatearFecha = (fecha) => {
                    return new Date(fecha).toISOString().split('T')[0]; // => "2022-03-15"
                  };

                const animalesConIcono = data.map((animal) => ({
                    ...animal,
                    // nombre: animal.nombre,
                    genero: animal.sexo === 'Hembra' ? 'H' : 'M',
                    iconoS: getIcono(animal.estado),
                    fecha: formatearFecha(animal.fecha_nacimiento),
                    // raza: animal.raza
                }));

    
                setAnimales(animalesConIcono);
            } catch (error) {
                console.error('Error al obtener los animales:', error);
            }
        };
    
        fetchGanado();

    }, []);

    useEffect(() => {
        const fetchPotrero = async () => {
            try {
                const animalesCompleto = await Promise.all(
                    animales.map(async (animal) => {
                        const response = await fetch(`http://localhost:3000/api/ubicacion/potrero/${animal.id_ganado}`);
                        const data = await response.json();
    
                        return {
                            ...animal,
                            potrero: data.id_potrero
                        };
                    })
                );
    
                setAnimales(animalesCompleto);
            } catch (error) {
                console.error('Error al obtener los animales:', error);
            }
        };
    
        if (animales.length > 0) {
            fetchPotrero();
        }

    }, [animales]);



    function calcularEdad(fechaNacimiento) {
        const hoy = new Date();
        const nacimiento = new Date(fechaNacimiento);
      
        let años = hoy.getFullYear() - nacimiento.getFullYear();
        let meses = hoy.getMonth() - nacimiento.getMonth();
        let dias = hoy.getDate() - nacimiento.getDate();
      
        if (dias < 0) {
          meses--;
          const ultimoMes = new Date(hoy.getFullYear(), hoy.getMonth(), 0);
          dias += ultimoMes.getDate();
        }
      
        if (meses < 0) {
          años--;
          meses += 12;
        }
      
        return `${años}a ${meses}m ${dias}d`;
      }

    const handleAnimalClick = (animal) => {
        setSelectedAnimal(animal);
    };

    return (
        <>
            <div className="ganado-list-page ">
                <HeaderSearch img={"/img/Ganado-bovino.jpg"}/>
                <div className="ganado-list-content">
                    <div className="continer-list">
                        <div className="icons w-[90%] h-[70%] flex justify-between">
                        <FormularioAnimalDialog/>
                            <FontAwesomeIcon icon={faSlidersH} className="text-black text-2xl mt-10 cursor-pointer" />
                        </div>
                        <div className="list">
                            {animales.map((animal) => (
                                <ItemsList
                                    iconoA={<FontAwesomeIcon icon={faCow} />}
                                    nombre={animal.nombre}
                                    id={animal.id_ganado}
                                    genero={animal.genero}
                                    fecha={animal.fecha}
                                    iconoS={<FontAwesomeIcon icon={animal.iconoS} />}
                                    onClick={() => handleAnimalClick(animal)}
                                    className="cursor-pointer"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="list-info">
                        {selectedAnimal && (
                            <TablaAnimal
                                nombre={selectedAnimal.nombre}
                                id={selectedAnimal.id_ganado}
                                numeros={selectedAnimal.fecha}
                                iconS={<FontAwesomeIcon icon={selectedAnimal.iconoS} />}
                                fecha={selectedAnimal.fecha}
                                edad={calcularEdad(selectedAnimal.fecha)}
                                sexo={selectedAnimal.genero}
                                raza={selectedAnimal.raza}
                                madre={"Lola"} // Estos datos deberían ser dinámicos
                                padre={"Lolito"} // Estos datos deberían ser dinámicos
                                desc={selectedAnimal.fecha} // Estos datos deberían ser dinámicos
                                rebano={selectedAnimal.potrero} // Estos datos deberían ser dinámicos
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default GanadoListPage;