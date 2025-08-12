import React from "react";
import "./buttonAreas.css";

export const ButtonAreas = ({ ruta, img, text }) => {
  const handleClick = () => {
    window.location.href = ruta;
  };

  return (
    <div onClick={handleClick} className="boton-area m-auto bg-[#e9edc9] h-[50vh] w-[90%] rounded-md border-2 border-[#2b3701] shadow-[10px_10px_10px_2px_rgba(0,0,0,0.164)] grid grid-rows-[3fr_1fr] grid-cols-1 items-center justify-items-center cursor-pointer transition-all duration-300 ease-in-out hover:shadow-[0px_0px_10px_2px_rgba(0,0,0,0.164)]">
      <div className="imagen" style={{ backgroundImage: `url(${img})` }}></div>
      <div className="contenedor-texto ">
        <p className="text-l font-bold text-black">{text}</p>
      </div>
    </div>
  );
};

export const ButtonAreasCultivos = ({ ruta, img, text }) => {
  const handleClick = () => {
    window.location.href = ruta;
  };

  return (
    <div onClick={handleClick} className="boton-area-cultivos bg-[#e9edc9] w-[25vw] h-[40vh] rounded-md border-2 border-[#2b3701] shadow-[10px_10px_10px_2px_rgba(0,0,0,0.164)] grid grid-rows-[3fr_1fr] grid-cols-1 justify-items-center cursor-pointer transition-all duration-300 ease-in-out hover:shadow-[0px_0px_10px_2px_rgba(0,0,0,0.164)]">
      <div className="imagen" style={{ backgroundImage: `url(${img})` }}></div>
      <div className="contenedor-texto">
        <p className="text-9xl font-bold text-black">{text}</p>
      </div>
    </div>
  );
};
