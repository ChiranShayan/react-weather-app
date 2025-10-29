import React from "react";

export default function About() {
  return (
    <div className="page">
      <h2>About This App</h2>
      <p>
        This weather app is built with React and the OpenWeatherMap API. It
        displays current weather and a 5-day forecast, with your last searched
        city saved in localStorage.
      </p>
    </div>
  );
}
