import React, { useState } from 'react';
import './tablas.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faBorderAll, faCow, faPen, faPlus, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'

// export const TablaSencilla = () => {
//     return (
//         <div className='tabla-s-container'>
//             <table className='tabla-s'>
//                 <thead className='thead-s'>
//                     <tr>
//                         <th>#A</th>
//                         <th>Raza</th>
//                         <th>Edad</th>
//                         <th>Sexo</th>
//                         <th>Peso</th>
//                         <th className=''>Estado Prod</th>
//                     </tr>
//                 </thead>
//                 <tbody className='tbody-s'>
//                     <tr>
//                         <td>001</td>
//                         <td>Brahman</td>
//                         <td>2 m</td>
//                         <td>M</td>
//                         <td>80</td>
//                         <td>Lavante</td>
//                     </tr>
//                     <tr>
//                         <td>212</td>
//                         <td>Brahman</td>
//                         <td>1 a</td>
//                         <td>H</td>
//                         <td>180</td>
//                         <td>Peñez</td>
//                     </tr>
//                     <tr>
//                         <td>001</td>
//                         <td>Brahman</td>
//                         <td>2 m</td>
//                         <td>M</td>
//                         <td>80</td>
//                         <td>Lavante</td>
//                     </tr>
//                     <tr>
//                         <td>212</td>
//                         <td>Brahman</td>
//                         <td>1 a</td>
//                         <td>H</td>
//                         <td>180</td>
//                         <td>Peñez</td>
//                     </tr>
//                     <tr>
//                         <td>001</td>
//                         <td>Brahman</td>
//                         <td>2 m</td>
//                         <td>M</td>
//                         <td>80</td>
//                         <td>Lavante</td>
//                     </tr>
//                     <tr>
//                         <td>212</td>
//                         <td>Brahman</td>
//                         <td>1 a</td>
//                         <td>H</td>
//                         <td>180</td>
//                         <td>Peñez</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     )
// }

export const TablaSencilla = ({ columnas, datos }) => {
    return (
      <div className="tabla-s-container overflow-x-auto">
        <table className="tabla-s w-full">
          <thead className="thead-s">
            <tr>
              {columnas.map((columna, index) => (
                <th key={index}>{columna}</th>
              ))}
            </tr>
          </thead>
          <tbody className="tbody-s">
            {datos.map((fila, i) => (
              <tr key={i}>
                {fila.map((celda, j) => (
                  <td key={j}>{celda}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export const TablaAnimal = ({nombre, id, numeros, iconS,fecha, edad, sexo, raza, madre, padre, desc, rebanoAc, rebanoAn, fechaAc, fechaAn}) => {
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
                    <span className='faicon'>{iconS}</span>
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
        </div>
    )
}
export const TablaInfoGanado = ({}) => {
    return (
        <div className="tabla-i-g-container">
            <div className="tig-tittle">
                <div>
                    <h2>Información Ganado</h2>
                </div>
                <div>
                    <span className="faicon iconotig"><FontAwesomeIcon icon={faPlus}/></span>
                </div>
            </div>
            <a href="" className="tig-item"><span>Datos demográficos</span></a>
            <a href="" className="tig-item"><span>Historia clinica</span></a>
            <a href="" className="tig-item"><span>Productividad</span></a>
            <a href="" className="tig-item"><span>Peso</span></a>
        </div>
    )
}

export const TablaDatosVisitaMed = ({}) => {
    return (
        <div className="tabla-i-g-container">
            <div className="tig-tittle">
                <div>
                    <h2>Datos de visita médica</h2>
                </div>
                <div>
                    <span className="faicon iconotig"><FontAwesomeIcon icon={faPlus}/></span>
                </div>
            </div>
            <a href="" className="tig-item"><span>Fecha y hora</span></a>
            <a href="" className="tig-item"><span>Motivo de la visita</span></a>
            <a href="" className="tig-item"><span>Síntomas</span></a>
            <a href="" className="tig-item"><span>Diagnóstico</span></a>
            <a href="" className="tig-item"><span>Tratamiento</span></a>
            <a href="" className="tig-item"><span>Próxima visita</span></a>
        </div>
    )
}

export const TablaDatosMedicos = ({}) => {
    return (
        <div className="tabla-d-m-container">
            <div className="tig-tittle">
                <div>
                    <h2>Datos médicos</h2>
                </div>
                <div>
                    <span className="faicon iconotig"><FontAwesomeIcon icon={faPlus}/></span>
                </div>
            </div>
            <a href="" className="tig-item"><span>Resultados de análisis</span></a>
            <a href="" className="tig-item"><span>Imágenes médicas</span></a>
            <a href="" className="tig-item"><span>Biopsias</span></a>
            <a href="" className="tig-item"><span>Registros</span></a>
            <a href="" className="tig-item"><span>Vacunas</span></a>
            <a href="" className="tig-item"><span>Desparacitaciones</span></a>
            <a href="" className="tig-item"><span>Alimentación</span></a>
        </div>
    )
}

export const TablaInfoCiclo = ({ciclonum, ticDescripcion, ticDosis, ticDuracion, ticFecha, ticTipoVacuna}) => {
    return (
        <div className="tabla-i-c-container">
            <div className="tic-tittle">
                <div>
                    <h2>Cilo #<span>{ciclonum}</span></h2>
                </div>
            </div>
            <div className="tic-item">
                <p className="tic-item-info">Fecha de inicio <span>{ticFecha}</span></p>
                <p className="tic-item-info">Duración <span>{ticDuracion}</span></p>
                <p className="tic-item-info">Dosis <span>{ticDosis}</span></p>
                <p className="tic-item-info">Tipo de vacuna <span>{ticTipoVacuna}</span></p>
            </div>
            <div className="tic-item">
                <p className='tic-item-info'><span>{ticDescripcion}</span></p>
            </div>
        </div>
    )
}
export const TablaAbortos = ({ taTittle, nombreA }) => {
    const [desplegado, setDesplegado] = useState(false);
    
    const toggleDesplegado = () => {
        setDesplegado(!desplegado);
    };

    return (
        <div className="container">
            <div className="tabla-a-container">
                <div className={`ta-tittle ${desplegado ? 'active' : ''}`} onClick={toggleDesplegado}>
                    <p>{taTittle}</p>
                    <FontAwesomeIcon className={`flechaabajo ${desplegado ? 'active' : ''}`} icon={faAngleDown}/>
                </div>
                <div className={`abortosContainer ${desplegado ? 'active' : ''}`}>
                    <div className="abortoitem">
                        <div>
                            <FontAwesomeIcon icon={faSkullCrossbones}/>
                            <span>isa</span>
                        </div>
                        <div>1/02/2020</div>
                    </div>
                    <div className="abortoitem">
                        <div>
                            <FontAwesomeIcon icon={faSkullCrossbones}/>
                            <span>quice</span>
                        </div>
                        <div>5/04/2025</div>
                    </div>
                    <div className="abortoitem">
                        <div>
                            <FontAwesomeIcon icon={faSkullCrossbones}/>
                            <span>el voce</span>
                        </div>
                        <div>6/01/2021</div>
                    </div>
                    <div className="abortoitem">
                        <div>
                            <FontAwesomeIcon icon={faSkullCrossbones}/>
                            <span>lopera</span>
                        </div>
                        <div>05/03/2023</div>
                    </div>
                    <div className="abortoitem">
                        <div>
                            <FontAwesomeIcon icon={faSkullCrossbones}/>
                            <span>santa</span>
                        </div>
                        <div>04/06/2024</div>
                    </div>
                    <div className="abortoitem">
                        <div>
                            <FontAwesomeIcon icon={faSkullCrossbones}/>
                            <span>marlon</span>
                        </div>
                        <div>0909/2018</div>
                    </div>
                    <div className="abortoitem">
                        <div>
                            <FontAwesomeIcon icon={faSkullCrossbones}/>
                            <span>beltran</span>
                        </div>
                        <div>04/07/2025</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const TablaSal = ({ salIdAnimal, salper, pesok, salNomAnimal }) => {
    const [desplegado, setDesplegado] = useState(false);
    
    const toggleDesplegado = () => {
        setDesplegado(!desplegado);
    };

    return (
        <div className="container ">
            <div className="tabla-sal-container">
                <div className={`sal-tittle ${desplegado ? 'active' : ''}`} onClick={toggleDesplegado}>
                    <div>
                        <FontAwesomeIcon icon={faCow}/>
                        <p>ID: <span>{salIdAnimal}</span></p>
                    </div>
                    <div>
                        <p>{salNomAnimal}</p>
                        <FontAwesomeIcon className={`flechaabajo ${desplegado ? 'active' : ''}`} icon={faAngleDown}/>
                    </div>
                </div>
                <div className={`salContainer ${desplegado ? 'active' : ''}`}>
                    <div>
                        <div className='saltt-int'>
                            <p>Peso kg</p>
                        </div>
                        <div className='salinfo-int'>
                            <p><span>{pesok}</span></p>
                        </div>
                    </div>
                    <div>
                        <div className='saltt-int'>
                            <p>% Sal</p>
                        </div>
                        <div className='salinfo-int'>
                            <p><span>{salper}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
