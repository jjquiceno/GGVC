import React, { useState } from 'react';
import './tablas.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormularioGeneralEdit } from './formLogin'
import { faAngleDown, faBorderAll, faCheck, faCow, faPen, faPlus, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { InfoMedica } from './Dialogs.jsx';
import { DataTable } from './DataTables.jsx';

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

export const TablaAnimal = ({
    nombre,
    id,
    numeros,
    iconS,
    fecha,
    edad,
    sexo,
    raza,
    madre,
    padre,
    desc,
    rebano,
    onUpdateDes,
    onUpdateUbi // Recibimos la nueva prop aquí
}) => {
    const [editMadre, setEditMadre] = useState(false);
    const [nuevaMadre, setNuevaMadre] = useState('');
    const [editPadre, setEditPadre] = useState(false);
    const [nuevoPadre, setNuevoPadre] = useState('');
    const [editPotrero, setEditPotrero] = useState(false);
    const [nuevoPotrero, setNuevoPotrero] = useState('');


    // Ya no necesitas 'actualizarDescendencia' aquí, ya que 'handleUpdateDescendencia' la hace
    // const handleGuardarMadre = async () => {
    //     if (!nuevaMadre.trim()) return;
    //     await onUpdateDes(id, nuevaMadre, padre?.id); // Llama a la función del padre
    //     setEditMadre(false);
    // };

    // const handleGuardarPadre = async () => {
    //     if (!nuevoPadre.trim()) return;
    //     await onUpdateDes(id, madre?.id, nuevoPadre); // Llama a la función del padre
    //     setEditPadre(false);
    // };

    const handleGuardarMadre = async () => {
        console.log('--- Llamando a handleGuardarMadre ---');
        if (!nuevaMadre.trim()) return;
        const data = { id_ganado: id, id_madre: nuevaMadre };
        await onUpdateDes(data);
        setEditMadre(false);
    };

    const handleGuardarPadre = async () => {
        console.log('--- Llamando a handleGuardarPadre ---');
        if (!nuevoPadre.trim()) return;
        const data = { id_ganado: id, id_padre: nuevoPadre };
        await onUpdateDes(data);
        setEditPadre(false);
    };

    const handleGuardarPotrero = async () => {
        if (!nuevoPotrero.trim()) return;
        await onUpdateUbi(id, nuevoPotrero); // Llama a la función del padre
        setEditPotrero(false);
    };

    const madreNombre = madre?.nombre || 'No registrado';
    const madreId = madre?.id || '';
    const padreNombre = padre?.nombre || 'No registrado';
    const padreId = padre?.id || '';
    const potreroNombre = rebano || 'No registrado';

    return (
        <div className='tabla-animal-container'>
            <div className='encabezado-tabla-animal'>
                <div className='e-t-1'>
                    <span className='faicon text-white'><FontAwesomeIcon icon={faCow} /></span>
                    <span className='text-white'>{nombre}</span>
                    <span className='text-white'>{id}</span>
                </div>
                <div className='e-t-2'>
                    <span className='text-white'>{numeros}</span>
                    <span className='faicon text-white'>{iconS}</span>
                </div>
            </div>

            <div className='cuerpo-tabla-animal'>
                <div className='lapiz-tabla-animal cursor-pointer'>
                    <FormularioGeneralEdit id={id} />
                </div>

                <div className='cuerpo-texts'>
                    <div>
                        <p className='bold'>Fecha nacimiento: <span className='light'>{fecha}</span></p>
                        <p className='bold'>Edad: <span className='light'>{edad}</span></p>
                        <p className='bold'>Sexo: <span className='light'>{sexo}</span></p>
                        <p className='bold'>Raza: <span className='light'>{raza}</span></p>

                        <div className='bold text-lg'>
                            <span>Madre:
                                <span className='light ml-2'>
                                    {editMadre ? (
                                        <div className="relative inline-block w-[80%] h-[35px] m-1">
                                            <input
                                                type="text"
                                                id="madre"
                                                placeholder="ID Madre"
                                                value={nuevaMadre}
                                                onChange={(e) => setNuevaMadre(e.target.value)}
                                                className="w-full h-full text-gray-500 border-[3px] border-[#0c2001] rounded-[10px] pr-[30px] pl-3"
                                            />
                                            <FontAwesomeIcon
                                                onClick={handleGuardarMadre}
                                                icon={faCheck}
                                                className="cursor-pointer absolute right-[10px] top-1/2 -translate-y-1/2 text-[18px] text-[#aaa]"
                                            />
                                        </div>
                                    ) : madreNombre === 'No registrado' ? (
                                        <button
                                            onClick={() => setEditMadre(true)}
                                            className="ml-2 text-[#6e9347] underline"
                                        >
                                            Añadir
                                        </button>
                                    ) : `${madreNombre} (${madreId})`}
                                </span>
                            </span>
                        </div>

                        <div className='bold text-lg'>
                            <span>Padre:
                                <span className='light ml-2'>
                                    {editPadre ? (
                                        <div className="relative inline-block w-[80%] h-[35px] m-1">
                                            <input
                                                type="text"
                                                id="padre"
                                                placeholder="ID Padre"
                                                value={nuevoPadre}
                                                onChange={(e) => setNuevoPadre(e.target.value)}
                                                className="w-full h-full text-gray-500 border-[3px] border-[#0c2001] rounded-[10px] pr-[30px] pl-3"
                                            />
                                            <FontAwesomeIcon
                                                onClick={handleGuardarPadre}
                                                icon={faCheck}
                                                className="cursor-pointer absolute right-[10px] top-1/2 -translate-y-1/2 text-[18px] text-[#aaa]"
                                            />
                                        </div>
                                    ) : padreNombre === 'No registrado' ? (
                                        <button
                                            onClick={() => setEditPadre(true)}
                                            className="ml-2 text-[#6e9347] underline"
                                        >
                                            Añadir
                                        </button>
                                    ) : `${padreNombre} (${padreId})`}
                                </span>
                            </span>
                        </div>

                        <p className='bold'>Descripción: <span className='light'>{desc || 'No registrado'}</span></p>
                    </div>

                    <div>
                        <div className='evento flex flex-col'>
                            <div className='bold text-lg'>
                                <span>Potrero:
                                    <span className='light ml-2'>
                                        {editPotrero ? (
                                            <div className="relative inline-block w-[80%] h-[35px] m-1">
                                                <input
                                                    type="text"
                                                    id="potrero"
                                                    placeholder="ID Potrero"
                                                    value={nuevoPotrero}
                                                    onChange={(e) => setNuevoPotrero(e.target.value)}
                                                    className="w-full h-full text-gray-500 border-[3px] border-[#0c2001] rounded-[10px] pr-[30px] pl-3"
                                                />
                                                <FontAwesomeIcon
                                                    onClick={handleGuardarPotrero}
                                                    icon={faCheck}
                                                    className="cursor-pointer absolute right-[10px] top-1/2 -translate-y-1/2 text-[18px] text-[#aaa]"
                                                />
                                            </div>
                                        ) : potreroNombre === 'No registrado' ? (
                                            <button
                                                onClick={() => setEditPotrero(true)}
                                                className="ml-2 text-[#6e9347] underline"
                                            >
                                                Añadir
                                            </button>
                                        ) : `${potreroNombre}`}
                                    </span>
                                </span>
                            </div>
                            <div className='bold text-lg'>
                                <InfoMedica nombre={nombre} id={id} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export const TablaEmpleado = ({
    id_empleado,
    usuario,
    dni,
    nombre,
    email,
    telefono,
    onUpdateDes,
    // onUpdateUbi // Recibimos la nueva prop aquí
}) => {
    const [editEmpleado, setEditEmpleado] = useState(false);
    const [nuevoEmpleado, setNuevoEmpleado] = useState('');

    const handleGuardarEmpleado = async () => {
        console.log('--- Llamando a handleGuardarMadre ---');
        if (!nuevoEmpleado.trim()) return;
        const data = { id_empleado: id_empleado, usuario: usuario };
        await onUpdateDes(data);
        setEditEmpleado(false);
    };

    return (
        <div className='tabla-animal-container'>
            <div className='encabezado-tabla-animal'>
                <div className='e-t-1'>
                    <span className='faicon text-white'><FontAwesomeIcon icon={faCow} /></span>
                    <span className='text-white'>{id_empleado}</span>
                    <span className='text-white'>{usuario}</span>
                </div>
                <div className='e-t-2'>
                    <span className='text-white'>{dni}</span>
                    <span className='faicon text-white'>{nombre}</span>
                </div>
            </div>

            <div className='cuerpo-tabla-animal'>
                <div className='lapiz-tabla-animal cursor-pointer'>
                    <FormularioGeneralEdit id={id_empleado} />
                </div>

                <div className='cuerpo-texts'>
                    <div>
                        <p className='bold'>Nombre: <span className='light'>{nombre}</span></p>
                        <p className='bold'>Usuario: <span className='light'>{usuario}</span></p>
                        <p className='bold'>DNI: <span className='light'>{dni}</span></p>
                        <p className='bold'>Email: <span className='light'>{email}</span></p>
                        <p className='bold'>Telefono: <span className='light'>{telefono}</span></p>

                        <div className='bold text-lg'>
                            <span>Usuario:
                                <span className='light ml-2'>
                                    {editEmpleado ? (
                                        <div className="relative inline-block w-[80%] h-[35px] m-1">
                                            <input
                                                type="text"
                                                id="empleado"
                                                placeholder="ID Empleado"
                                                value={nuevoEmpleado}
                                                onChange={(e) => setNuevoEmpleado(e.target.value)}
                                                className="w-full h-full text-gray-500 border-[3px] border-[#0c2001] rounded-[10px] pr-[30px] pl-3"
                                            />
                                            <FontAwesomeIcon
                                                onClick={handleGuardarEmpleado}
                                                icon={faCheck}
                                                className="cursor-pointer absolute right-[10px] top-1/2 -translate-y-1/2 text-[18px] text-[#aaa]"
                                            />
                                        </div>
                                    ) : usuario === 'No registrado' ? (
                                        <button
                                            onClick={() => setEditMadre(true)}
                                            className="ml-2 text-[#6e9347] underline"
                                        >
                                            Añadir
                                        </button>
                                    ) : `${usuario}`}
                                </span>
                            </span>
                        </div>

                        {/* <p className='bold'>Descripción: <span className='light'>{desc || 'No registrado'}</span></p> */}
                    </div>

                    {/* <div>
                        <div className='evento flex flex-col'>
                            <div className='bold text-lg'>
                                <span>Potrero:
                                    <span className='light ml-2'>
                                        {editPotrero ? (
                                            <div className="relative inline-block w-[80%] h-[35px] m-1">
                                                <input
                                                    type="text"
                                                    id="potrero"
                                                    placeholder="ID Potrero"
                                                    value={nuevoPotrero}
                                                    onChange={(e) => setNuevoPotrero(e.target.value)}
                                                    className="w-full h-full text-gray-500 border-[3px] border-[#0c2001] rounded-[10px] pr-[30px] pl-3"
                                                />
                                                <FontAwesomeIcon
                                                    onClick={handleGuardarPotrero}
                                                    icon={faCheck}
                                                    className="cursor-pointer absolute right-[10px] top-1/2 -translate-y-1/2 text-[18px] text-[#aaa]"
                                                />
                                            </div>
                                        ) : potreroNombre === 'No registrado' ? (
                                            <button
                                                onClick={() => setEditPotrero(true)}
                                                className="ml-2 text-[#6e9347] underline"
                                            >
                                                Añadir
                                            </button>
                                        ) : `${potreroNombre}`}
                                    </span>
                                </span>
                            </div>
                            <div className='bold text-lg'>
                                <InfoMedica nombre={nombre} id={id} />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};


export const TablaInfoGanado = ({ }) => {
    return (
        <div className="tabla-i-g-container">
            <div className="tig-tittle">
                <div>
                    <h2>Información Ganado</h2>
                </div>
                <div>
                    <span className="faicon iconotig"><FontAwesomeIcon icon={faPlus} /></span>
                </div>
            </div>
            <a href="" className="tig-item"><span>Datos demográficos</span></a>
            <a href="" className="tig-item"><span>Historia clinica</span></a>
            <a href="" className="tig-item"><span>Productividad</span></a>
            <a href="" className="tig-item"><span>Peso</span></a>
        </div>
    )
}

export const TablaDatosVisitaMed = ({ }) => {
    return (
        <div className="tabla-i-g-container">
            <div className="tig-tittle">
                <div>
                    <h2>Datos de visita médica</h2>
                </div>
                <div>
                    <span className="faicon iconotig"><FontAwesomeIcon icon={faPlus} /></span>
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

export const TablaDatosMedicos = ({ title, data, colums, name,  }) => {
    return (
        <div className="tabla-d-m-container">
            <div className="tig-tittle">
                <div>
                    <h2>{title}</h2>
                </div>
                <div>
                    <span className="faicon iconotig"><FontAwesomeIcon icon={faPlus} /></span>
                </div>
            </div>
            
        </div>
    )
}

export const TablaInfoCiclo = ({ ciclonum, ticDescripcion, ticDosis, ticDuracion, ticFecha, ticTipoVacuna }) => {
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
                    <FontAwesomeIcon className={`flechaabajo ${desplegado ? 'active' : ''}`} icon={faAngleDown} />
                </div>
                <div className={`abortosContainer ${desplegado ? 'active' : ''}`}>
                    <div className="abortoitem">
                        <div>
                            <FontAwesomeIcon icon={faSkullCrossbones} />
                            <span>isa</span>
                        </div>
                        <div>1/02/2020</div>
                    </div>
                    <div className="abortoitem">
                        <div>
                            <FontAwesomeIcon icon={faSkullCrossbones} />
                            <span>quice</span>
                        </div>
                        <div>5/04/2025</div>
                    </div>
                    <div className="abortoitem">
                        <div>
                            <FontAwesomeIcon icon={faSkullCrossbones} />
                            <span>el voce</span>
                        </div>
                        <div>6/01/2021</div>
                    </div>
                    <div className="abortoitem">
                        <div>
                            <FontAwesomeIcon icon={faSkullCrossbones} />
                            <span>lopera</span>
                        </div>
                        <div>05/03/2023</div>
                    </div>
                    <div className="abortoitem">
                        <div>
                            <FontAwesomeIcon icon={faSkullCrossbones} />
                            <span>santa</span>
                        </div>
                        <div>04/06/2024</div>
                    </div>
                    <div className="abortoitem">
                        <div>
                            <FontAwesomeIcon icon={faSkullCrossbones} />
                            <span>marlon</span>
                        </div>
                        <div>0909/2018</div>
                    </div>
                    <div className="abortoitem">
                        <div>
                            <FontAwesomeIcon icon={faSkullCrossbones} />
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
                        <FontAwesomeIcon icon={faCow} />
                        <p>ID: <span>{salIdAnimal}</span></p>
                    </div>
                    <div>
                        <p>{salNomAnimal}</p>
                        <FontAwesomeIcon className={`flechaabajo ${desplegado ? 'active' : ''}`} icon={faAngleDown} />
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
