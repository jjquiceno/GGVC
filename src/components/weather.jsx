import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faCloudSun, faCloudRain, faCloud, faSun } from "@fortawesome/free-solid-svg-icons";

export const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "b3f63e295956fe17a8321c29b855004e";

  const CACHE_KEY = "weatherData";
  const CACHE_TIME_KEY = "weatherDataTime";
  const CACHE_DURATION = 10 * 60 * 1000; // 10 minutos

  useEffect(() => {
    const now = Date.now();
    const savedData = localStorage.getItem(CACHE_KEY);
    const savedTime = localStorage.getItem(CACHE_TIME_KEY);

    // 🆕 Si hay datos guardados y no han pasado 10 min, usarlos
    if (savedData && savedTime && now - savedTime < CACHE_DURATION) {
      setWeatherData(JSON.parse(savedData));
      return;
    }
    // Coordenadas de Itagui (latitud y longitud)
    const lat = 6.1719;
    const lon = -75.6113;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`
    )
    .then((res) => res.json())
    .then((data) => {
      setWeatherData(data);

      // 🆕 Guardar en caché
      localStorage.setItem(CACHE_KEY, JSON.stringify(data));
      localStorage.setItem(CACHE_TIME_KEY, now.toString());
    })
    .catch((err) => console.error("Error al obtener el clima:", err));
  }, []);

  if (!weatherData) {
    return <p className="text-black">Cargando clima...</p>;
  }

  // Icono dinámico según el estado del clima
  const weatherIcon =
    weatherData.weather[0].main === "Clear"
      ? faSun
      : weatherData.weather[0].main === "Clouds"
      ? faCloud
      : faCloudRain;

  // Fecha en formato amigable
  const fecha = new Date().toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="w-[90%] h-[50vh] flex flex-col justify-center items-center">
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faMapMarker} className="text-2xl text-[rgb(236,198,93)]" />
        <h3 className="text-2xl text-black font-bold">{weatherData.name}</h3>
      </div>
      <p className="text-black text-xs mb-3">{fecha}</p>
      <FontAwesomeIcon icon={weatherIcon} className="text-7xl text-[rgb(236,198,93)]" />
      <span className="text-[300%] text-black font-extrabold">
        {Math.round(weatherData.main.temp)}°C
      </span>
      <p className="text-black capitalize">{weatherData.weather[0].description}</p>
    </div>
  );
};