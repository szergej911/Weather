import React, { FC } from "react";
import WeatherList from "./WeatherList";
import { WeatherData } from "../types/api";

interface WeatherListProps {
  weatherHistory: WeatherData[];
}

const CitiesPage: FC<WeatherListProps> = ({ weatherHistory }) => {
  return (
    <div>
      <WeatherList weatherHistory={weatherHistory} />
    </div>
  );
};

export default CitiesPage;
