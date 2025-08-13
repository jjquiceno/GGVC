import React, { useState, useEffect } from "react";
import { HeaderSoloText } from "../components/header.jsx";
import { Anterior } from "../components/Menuh.jsx";
import { ItemsReq } from "../components/Items";
import { DatePickerRadix } from "../components/DatePickerRadix.jsx";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FormularioAddReqBpg } from "../components/formLogin.jsx";

function ReqBPG() {
    const [registros, setRegistros] = useState([]);
    const [fechaInicio, setFechaInicio] = useState("");
    const [fechaFin, setFechaFin] = useState("");
    const [filtrados, setFiltrados] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/requerimientos")
            .then((res) => res.json())
            .then((data) => {
                const registros = data.map((requisito) => ({
                    ...requisito,
                    fecha: new Date(requisito.fecha).toISOString().split("T")[0],
                }));
                setRegistros(registros);
                setFiltrados(registros);
            })
            .catch((err) => console.error("Error al obtener requisitos:", err));
    }, []);

    const filtrarPorFecha = () => {
        if (!fechaInicio || !fechaFin) {
            setFiltrados(registros);
            return;
        }

        const inicio = new Date(fechaInicio);
        const fin = new Date(fechaFin);

        const filtradosPorFecha = registros.filter((item) => {
            const fechaItem = new Date(item.fecha);
            return fechaItem >= inicio && fechaItem <= fin;
        });

        setFiltrados(filtradosPorFecha);
    };

    return (
        <>
            <HeaderSoloText nav={<Anterior ruta={"/gesAdmon"} />} text="Requisitos BPG" />

            <div className="w-full px-10 flex flex-col items-center justify-center h-[80vh] bg-[#fffdef]">
                <div className="w-full flex justify-end">
                    <FormularioAddReqBpg/>
                </div>
                {/* Controles de filtro */}
                <div className="flex gap-4 my-4">
                    <DatePickerRadix
                        label="Fecha inicio"
                        value={fechaInicio}
                        onSelect={(fecha) => setFechaInicio(fecha)}
                    />
                    <DatePickerRadix
                        label="Fecha fin"
                        value={fechaFin}
                        onSelect={(fecha) => setFechaFin(fecha)}
                    />
                    <button
                        onClick={filtrarPorFecha}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Filtrar
                    </button>
                </div>

                {/* Lista */}
                <div className="w-full h-[80%] flex flex-col gap-2 overflow-y-auto">
                    {filtrados.length > 0 ? (
                        filtrados.map((item) => (
                            <ItemsReq
                                key={item.id_req}
                                req={item.req_cumplido}
                                idReq={item.id_req}
                                fecha={item.fecha}
                                idEmp={item.id_empleado}
                                desc={item.descripcion}
                                estado={item.estado}
                            />
                        ))
                    ) : (
                        <p className="text-black">No hay registros para este rango.</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default ReqBPG;