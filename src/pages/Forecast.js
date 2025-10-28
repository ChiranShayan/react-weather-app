import { useState, useEffect } from "react";
import { ForecastList } from "../components/ForecastList";
import { Loader } from "../components/Loader";

export default function Forecast() {
  const [forecast, setForecast] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const API_KEY = "6609ed7033145debe98ba554ac4661b5";
  const city = localStorage.getItem("lastCity") || "Colombo";

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await res.json();
        if (data.cod !== "200") {
          setError("Could not fetch forecast data! 😥");
          setLoading(false);
          return;
        }

        const dailyForecast = data.list.filter((item) =>
          item.dt_txt.includes("12:00:00")
        );

        setForecast(dailyForecast);
        setLoading(false);
      } catch {
        setError("Something went wrong! 🤔");
        setLoading(false);
      }
    };

    fetchForecast();
  }, [city]);

  return (
    <div className="page">
      <h2>5-Day Forecast for {city}</h2>
      {Loading && <Loader />}
      {error && <p className="error">{error}</p>}
      {forecast.length > 0 && !Loading && <ForecastList forecast={forecast} />}
    </div>
  );
}
