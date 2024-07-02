import React, { useState } from "react";
import { WeatherData } from "../types/api";

interface WeatherListProps {
  weatherHistory: WeatherData[];
}

const WeatherList: React.FC<WeatherListProps> = ({ weatherHistory }) => {
  const [clickedLocation, setClickedLocation] = useState<string | null>(null);

  const handleClick = (id: number) => {
    setClickedLocation(weatherHistory[id].location.name);
  };

  return (
    <div>
      <h1>Last 4 Searches</h1>
      {weatherHistory.length > 0 ? (
        weatherHistory.slice(-4).map((weather, index) => (
          <div
            onClick={() => handleClick(index)}
            key={index}
            style={{ cursor: "pointer", margin: "10px 0" }}
          >
            <h2>Weather in {weather.location.name}</h2>
            <p>Temperature: {weather.current.temp_c}°C</p>
          </div>
        ))
      ) : (
        <p>No weather data stored.</p>
      )}
      {clickedLocation && (
        <div style={{ marginTop: "20px" }}>
          <h2>Clicked Location: {clickedLocation}</h2>
        </div>
      )}
    </div>
  );
};

export default WeatherList;
