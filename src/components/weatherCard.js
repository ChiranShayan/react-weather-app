import React from "react";

export default function WeatherCard({ weather }) {
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`;

  return (
    <div className="weather-card">
      <h2 className="city-name">{weather.name}</h2>
      <img
        className="weather-icon"
        src={iconUrl}
        alt={weather.weather[0].description}
      />
      <h1 className="temp">{Math.round(weather.main.temp)}°C</h1>
      <p className="description">{weather.weather[0].description}</p>

      <div className="details">
        <p>💨 {weather.wind.speed} m/s</p>
        <p>💧 {weather.main.humidity}%</p>
        <p>🌡️ Feels like {Math.round(weather.main.feels_like)}°C</p>
      </div>
    </div>
  );
}
