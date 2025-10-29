import React from "react";

export default function ForecastList({ forecast }) {
  return (
    <div className="forecast-container">
      {forecast.map((item, index) => (
        <div key={index} className="forecast-item">
          <p>
            {new Date(item.dt_txt).toLocaleDateString("en-GB", {
              weekday: "short",
            })}
          </p>
          <img
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            alt={item.weather[0].description}
          />
          <p>{Math.round(item.main.temp)}°C</p>
        </div>
      ))}
    </div>
  );
}
