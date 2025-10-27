export default function Home() {
  const [city, setCity] = useState("localStorage");

  return (
    <div>
      <h2>Weather App</h2>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
    </div>
  );
}
