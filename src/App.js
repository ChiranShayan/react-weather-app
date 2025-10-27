import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Forecast from "./pages/Forecast";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <nav className="navbar">
        <h2>Weather App ⛅</h2>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/Forecast">Forecast</Link>
          <Link to="/About">About</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Forecast" element={<Forecast />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}
