import { useState, useEffect, useCallback } from "react";
import WeatherCard from "../components/WeatherCard";
import Loader from "../components/Loader";

export default function Home() {
  const [city, setCity] = useState(
    localStorage.getItem("lastCity") || "Colombo"
  );
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const API_KEY = "6609ed7033145debe98ba554ac4661b5";

  const fetchWeather = useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      if (data.cod !== 200) {
        setError("City not found!");
        setLoading(false);
        return;
      }
      setWeather(data);
      localStorage.setItem("lastCity", city);
      setLoading(false);
    } catch (e) {
      setError("Something went wrong!");
      setLoading(false);
    }
  }, [city]);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") fetchWeather();
  };
  console.log("Weather state:", weather);

  return (
    <div className="page">
      <form onSubmit={handleSubmit} className="search-box">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city Name..."
        />
        <button type="submit">Search</button>
      </form>

      {loading && <Loader />}
      {error && <p className="error">{error}</p>}
      {weather && !loading && !error && <WeatherCard weather={weather} />}
    </div>
  );
}
