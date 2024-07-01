import React from "react";
import { WeatherData } from "../types/api";

interface WeatherListProps {
  weatherHistory: WeatherData[];
}

const WeatherList: React.FC<WeatherListProps> = ({ weatherHistory }) => {
  return (
    <div>
      <h1>Last 4 Searches</h1>
      {weatherHistory.length > 0 ? (
        weatherHistory.map((weather, index) => (
          <div key={index}>
            <h2>Weather in {weather.location.name}</h2>
            <p>Temperature: {weather.current.temp_c}°C</p>
            <p>Description: {weather.current.condition.text}</p>
          </div>
        ))
      ) : (
        <p>No weather data stored.</p>
      )}
    </div>
  );
};

export default WeatherList;
