import React, { use, useState, useRef } from 'react'
import './items.css'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight, faArrowsRotate, faDownload, faExchangeAlt, faPen, faPencil, faUpload, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormularioEditReqBpg } from './formLogin'

export const Items = ({ icono, text, ruta }) => {

    const handleClick = () => {
        window.location.href = ruta;
    };

    return (
        <div className='md:w-[6vw] md:h-[10vw] flex flex-col items-center group' >
            <div className="group-hover:shadow-[0_0_2px_0_rgba(0,0,0,0.75)] w-[20vw] h-[20vw] md:w-[5vw] md:h-[5vw] flex justify-center items-center bg-[#2b3701] rounded-[10px] shadow-[0_0_10px_0_rgba(0,0,0,0.75)] transition-all duration-300 ease-in-out cursor-pointer" onClick={handleClick}>
                <div className="w-[19vw] h-[19vw] md:w-[4.5vw] md:h-[4.5vw] text-black bg-[#e9edc9] rounded-[10px] flex justify-center items-center text-[1.5rem]">
                    <span>{icono}</span>
                </div>
            </div>
            <div className='item-texts'>
                <span className="text-black text-[0.9rem]">{text}</span>
            </div>
        </div>
    )
}

export const ItemsTypes = ({ icono, text, ruta }) => {

    const handleClick = () => {
        window.location.href = ruta;
    };

    return (
        <div className="w-[70vw] h-[80vw] md:w-[70%] md:h-[60vh] bg-[#2b3701] flex flex-col items-center p-[5px] rounded-[10px] shadow-[0_0_10px_0_rgba(0,0,0,0.75)] transition-all duration-300 ease-in-out cursor-pointer over:scale-[1.02] hover:shadow-[0_0_2px_0_rgba(0,0,0,0.75)]" onClick={handleClick}>
            <div className='w-full h-[95%] bg-[#e9edc9] rounded-[10px] flex items-center justify-center text-black text-[4rem]'>
                <span>{icono}</span>
            </div>
            <div className='item-texts'>
                <span className='text-white text-base text-center'>{text}</span>
            </div>
        </div>
    )
}

export const ItemsList = ({ onClick, iconoA, nombre, id, genero, iconoS, fecha }) => {
    return (
        <div className='item3 cursor-pointer w-full min-h-[5vh] flex-shrink-0 bg-[#e9edc9] border-2 border-[#2b3701] flex items-center justify-between rounded-md shadow-[0px_0px_10px_0px_rgba(0,0,0,0.75)] transition-all duration-300 ease-in-out text-black text-base mb-2 hover:shadow-[0px_0px_2px_0px_rgba(0,0,0,0.75)]' onClick={onClick}>
            <div className='icono'>
                <span>{iconoA}</span>
            </div>
            <div className='item-texts'>
                <strong>{nombre}</strong>
                <span>{id}</span>
                <span>{genero}</span>
            </div>
            <div className="status">
                <div className="status-date">
                    <span>{fecha}</span>
                </div>
                <div className="status-icon">
                    <span className="icono">{iconoS}</span>
                </div>
            </div>
        </div>
    )
}
export const ItemsListE = ({ onClick, id_empleado, nombre, }) => {
    return (
        <div className='item3 w-full h-[5vh] bg-[#e9edc9] border-2 border-[#2b3701] flex items-center rounded-md shadow-md transition-all duration-300 ease-in-out cursor-pointer text-black text-base mb-2 hover:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.75)]' onClick={onClick}>
            <div className='icono'>
                <span><FontAwesomeIcon icon={faUser} /></span>
            </div>
            <div className='item-texts'>
                <strong>{id_empleado}</strong>
                <span>{nombre}</span>
            </div>
        </div>
    )
}

export const ItemsReq = ({ req, idReq, fecha, idEmp, desc, estado }) => {

    const [cumplido, setCumplido] = React.useState(estado);

    React.useEffect(() => {
        setCumplido(estado === "Cumplido");
    }, [estado]);


    const handleToggle = async (e) => {
        e.preventDefault();

        const nuevoEstado = !cumplido;
        setCumplido(nuevoEstado);

        try {
            const response = await fetch(`http://localhost:3000/api/requerimientos/${idReq}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id_empleado: idEmp,
                    fecha,
                    req_cumplido: req,
                    descripcion: desc,
                    estado: nuevoEstado ? "Cumplido" : "Pendiente"
                })
            });

            const data = await response.json();

            if (response.ok) {
                console.log('El estado cambió exitosamente:', data);
                window.location.reload();
            } else {
                alert(data.message || 'Error al cambiar estado de requerimiento');
            }
        } catch (err) {
            console.error('Error de red:', err);
            alert('Error de conexión con el servidor.');
        }

    };

    

    return (
        <div className={`w-full min-h-[5vh] border-2 border-[#2b3701] rounded-[5px] flex justify-between items-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.75)] hover:shadow-[0px_0px_2px_0px_rgba(0,0,0,0.75)] transition ease-in-out duration-300 ${cumplido ? "bg-[#8ab861]" : "bg-[#a2a88d]"
            }`}>
            <div className='w-[90%] h-full flex items-center justify-between px-10'>
                <strong className='max-w-[15%] w-[15%]'>{req}</strong>
                <span className='max-w-[6%] w-[6%]'>{idReq}</span>
                <span className='max-w-[10%] w-[10%]'>{fecha}</span>
                <span className='max-w-[9%] w-[9%]'>Empleado: {idEmp}</span>
                <span className='max-w-[50%] w-[45%]'>{desc}</span>
            </div>
            <div className="w-[12%] h-full flex items-center justify-between px-10">
                <FormularioEditReqBpg idReq={idReq} estado={cumplido ? "Cumplido" : "Pendiente"}/>
                <span onClick={handleToggle} className="cursor-pointer">{<FontAwesomeIcon icon={faExchangeAlt} />}</span>
            </div>
        </div>
    )
}

export const ProblemasPo = ({ plagascant, enfermedadescant, climacant }) => {
    return (
        <div className="problemaspo-container">
            <p>Problemas potenciales</p>
            <div className="separadorpo"></div>
            <div>
                <div>
                    <span>Plagas</span> <br />
                    <span>Enfermedades</span> <br />
                    <span>Clima</span>
                </div>
                <div></div>
                <div>
                    <span>{plagascant}</span> <br />
                    <span>{enfermedadescant}</span> <br />
                    <span>{climacant}</span>
                </div>
            </div>
        </div>
    )
}

export const ImagesItem = ({ srcImg, nombre, edad }) => {
    return (
        <div className="imageContainer">
            <div className='imagecInt'>
                <img className='imagenG' src={srcImg} alt={nombre} loading='lazy' />
            </div>
            <div className='imagecText'>
                <p><span>{nombre}</span></p>
                <p><span>{edad}</span></p>
            </div>
        </div>
    )
}

export const InventarioItem = ({ id, srcImg, nombre, cantidad, manual, onCantidadChange, onManualChange }) => {
    const [editando, setEditando] = useState(false);
    const [nuevaCantidad, setNuevaCantidad] = useState(cantidad);
    const fileInputRef = useRef(null);

    const handleCantidadClick = () => {
        setEditando(true);
    };

    const handleCantidadChange = (e) => {
        const valor = parseInt(e.target.value);
        if (!isNaN(valor) && valor >= 0) {
            setNuevaCantidad(valor);
        }
    };

    const handleGuardar = () => {
        if (onCantidadChange && nuevaCantidad !== cantidad) {
            onCantidadChange(id, nuevaCantidad);
        }
        setEditando(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleGuardar();
        } else if (e.key === 'Escape') {
            setNuevaCantidad(cantidad);
            setEditando(false);
        }
    };

    const handleManualClick = () => {
        if (manual) {
            // Si ya hay un manual, lo descargamos
            if (manual.datos) {
                // Si es un manual guardado (datos en base64)
                const link = document.createElement('a');
                link.href = manual.datos;
                link.download = manual.nombre || 'manual';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else if (typeof manual === 'string') {
                // Si es una URL directa (compatibilidad con versiones anteriores)
                window.open(manual, '_blank');
            }
        } else {
            // Si no hay manual, abrimos el selector de archivos
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) { // 5MB máximo
                alert('El archivo es demasiado grande. El tamaño máximo permitido es 5MB.');
                return;
            }
            
            // Creamos una URL temporal para el archivo
            const fileUrl = URL.createObjectURL(file);
            
            // Llamamos a la función del padre para actualizar el manual
            if (onManualChange) {
                onManualChange(id, file, fileUrl);
            }
            
            // Limpiamos el input para permitir cargar el mismo archivo de nuevo si es necesario
            e.target.value = null;
        }
    };

    return (
        <div className="w-[90] h-[40vw] md:w-[28vw] md:h-[15vw] border-2 border-[#2b3701] rounded-[10px] bg-[#e9edc9] flex justify-between items-center px-[5px] hover:shadow-md transition-shadow">
            <div className='w-[60%] h-[95%] rounded-[10px] overflow-hidden'>
                <img className='w-full h-full object-cover rounded-[10px] shadow-[1px_1px_10px_1px_rgba(0,0,0,0.342)]' src={srcImg} alt={nombre} loading='lazy' />
            </div>
            <div className='w-[39%] h-[95%] rounded-[10px] flex flex-col justify-center items-center gap-[10px] p-2'>
                <p className='text-black text-[1.1rem] font-semibold text-center mb-1'>{nombre}</p>
                
                <div className='w-full h-[25%] relative flex items-center justify-center'>
                    {editando ? (
                        <div className='flex items-center gap-2'>
                            <input type="number" value={nuevaCantidad} onChange={handleCantidadChange} onKeyDown={handleKeyDown} className='w-full h-8 px-2 rounded border border-[#2b3701] focus:outline-none focus:ring-1 focus:ring-[#2b3701]' autoFocus min="0"/>
                            <button onClick={handleGuardar} className='px-2 h-8 bg-[#2b3701] text-white rounded hover:bg-[#3a4a03] transition-colors'>OK</button>
                        </div>
                    ) : (
                        <div onClick={handleCantidadClick} className='border border-[#2b3701] rounded-[10px] bg-[#a2a88d] w-full h-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-[0_0_5px_rgba(0,0,0,0.3)] group'>
                            <span className='font-medium'>Cantidad: </span>
                            <span className='ml-1 font-bold group-hover:text-[#2b3701]'>{cantidad}</span>
                            <FontAwesomeIcon icon={faPencil} className='ml-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity' />
                        </div>
                    )}
                </div>
                
                <div className='w-full h-[25%]'>
                    <button onClick={handleManualClick} className={`w-full h-full border rounded-[10px] flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 group border-[#2b3701] bg-[#a2a88d] hover:shadow-[0_0_5px_rgba(0,0,0,0.3)]`}>
                        <span>{manual ? 'Ver manual' : 'Subir manual'}</span>
                        <FontAwesomeIcon icon={manual ? faFileAlt : faUpload} className='text-base group-hover:scale-110 transition-transform' />
                    </button>
                    <input type="file" ref={fileInputRef} onChange={handleFileChange} accept=".pdf,.doc,.docx,.txt" className="hidden" />
                </div>
            </div>
        </div>
    )
}

export const AgregarHerramienta = ({ onAgregar }) => {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [nuevaHerramienta, setNuevaHerramienta] = useState({
        nombre: '',
        cantidad: 1,
        src: '/img/fondoCultivos.jpg' // Imagen por defecto
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNuevaHerramienta(prev => ({
            ...prev,
            [name]: name === 'cantidad' ? parseInt(value) || 0 : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nuevaHerramienta.nombre.trim() && nuevaHerramienta.cantidad > 0) {
            onAgregar(nuevaHerramienta);
            // Resetear el formulario
            setNuevaHerramienta({
                nombre: '',
                cantidad: 1,
                src: '/img/fondoCultivos.jpg'
            });
            setMostrarFormulario(false);
        }
    };

    return (
        <div className="mb-4">
            <div 
                className="flex items-center justify-center border-2 border-[#2b3701] rounded-[25px] w-[18vw] h-[8vh] text-black cursor-pointer transition ease-in-out duration-300 hover:shadow-[1px_1px_10px_1px_rgba(0,0,0,0.75)]"
                onClick={() => setMostrarFormulario(!mostrarFormulario)}
            >
                <p className='text-[1.2rem] font-semibold cursor-pointer'>
                    {mostrarFormulario ? 'Cancelar' : 'Agregar herramienta'}
                </p>
            </div>
            
            {mostrarFormulario && (
                <div className='mt-4 p-4 border border-[#2b3701] rounded-lg bg-[#f8f9fa]'>
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Nombre de la herramienta</label>
                            <input type="text" name="nombre" value={nuevaHerramienta.nombre} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2b3701] focus:ring focus:ring-[#2b3701] focus:ring-opacity-50" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Cantidad</label>
                            <input type="number" name="cantidad" min="1" value={nuevaHerramienta.cantidad} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2b3701] focus:ring focus:ring-[#2b3701] focus:ring-opacity-50" required />
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="px-4 py-2 bg-[#2b3701] text-white rounded-md hover:bg-[#3a4a03] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2b3701]">Agregar</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};