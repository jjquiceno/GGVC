import React from 'react'
import './tablas.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBorderAll, faCow, faPen, faPlus } from '@fortawesome/free-solid-svg-icons'

export const TablaSencilla = () => {
    return (
        <div className='tabla-s-container'>
            <table className='tabla-s'>
                <thead className='thead-s'>
                    <tr>
                        <th>#A</th>
                        <th>Raza</th>
                        <th>Edad</th>
                        <th>Sexo</th>
                        <th>Peso</th>
                        <th className=''>Estado Prod</th>
                    </tr>
                </thead>
                <tbody className='tbody-s'>
                    <tr>
                        <td>Ana</td>
                        <td>25</td>
                        <td>Bogotá</td>
                        <td>Ana</td>
                        <td>25</td>
                        <td>Bogotá</td>
                    </tr>
                    <tr>
                        <td>Carlos</td>
                        <td>30</td>
                        <td>Medellín</td>
                        <td>Carlos</td>
                        <td>30</td>
                        <td>Medellín</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export const TablaAnimal = ({nombre, id, numeros, fecha, edad, sexo, raza, madre, padre, desc, rebanoAc, rebanoAn, fechaAc, fechaAn}) => {
    return (
        <div className='tabla-animal-container'>
            <div className='encabezado-tabla-animal'>
                <div className='e-t-1'>
                    <span className='faicon'><FontAwesomeIcon icon={faCow}/></span>
                    <span>{nombre}</span>
                    <span>{id}</span>
                </div>
                <div className='e-t-2'>
                    <span>{numeros}</span>
                    <span className='faicon'><FontAwesomeIcon icon={faPlus}/></span>
                </div>
            </div>
            <div className='cuerpo-tabla-animal'>
                <div className='lapiz-tabla-animal'>
                    <span><FontAwesomeIcon icon={faPen}/></span>
                </div>
                <div className='cuerpo-texts'>
                    <div>
                        <p className='bold'>Fecha nacimiento: <span className='light'>{fecha}</span></p>
                        <p className='bold'>Edad: <span className='light'>{edad}</span></p>
                        <p className='bold'>Sexo: <span className='light'>{sexo}</span></p>
                        <p className='bold'>Raza: <span className='light'>{raza}</span></p>
                        <p className='bold'>Madre: <span className='light'>{madre}</span></p>
                        <p className='bold'>Padre: <span className='light'>{padre}</span></p>
                        <p className='bold'>Descripcion: <span className='light'>{desc}</span></p>
                    </div>
                    <div>
                        <h3 className='bold ml-2'>Evento</h3>
                        <div className='evento'>
                            <div>
                                <p className='bold'>Actual rebaño: <span className='light'>{rebanoAc}</span></p>
                                <p className='bold'>Anterior rebaño: <span className='light'>{rebanoAn}</span></p>
                            </div>
                            <div>
                                <p><span>{fechaAc}</span></p>
                                <p><span>{fechaAn}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            {/* <table className='tabla-animal'>
                <thead className='thead-animal'>
                    <tr>
                        <th>#A</th>
                        <th>Raza</th>
                        <th>Edad</th>
                        <th>Sexo</th>
                        <th>Peso</th>
                        <th className=''>Estado Prod</th>
                    </tr>
                </thead>
                <tbody className='tbody-animal'>
                    <tr>
                        <td>Ana</td>
                        <td>25</td>
                        <td>Bogotá</td>
                        <td>Ana</td>
                        <td>25</td>
                        <td>Bogotá</td>
                    </tr>
                    <tr>
                        <td>Carlos</td>
                        <td>30</td>
                        <td>Medellín</td>
                        <td>Carlos</td>
                        <td>30</td>
                        <td>Medellín</td>
                    </tr>
                </tbody>
            </table> */}
        </div>
    )
}