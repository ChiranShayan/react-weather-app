import React from "react";

export default function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>
      <h3>{weather.sys.country}</h3>
      <p>{weather.main.temp}°C</p>
      <p>{weather.weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
      <h2>{Math.round(weather.main.temp)}°C</h2>
      <p>{weather.weather[0].description}</p>
    </div>
  );
}
