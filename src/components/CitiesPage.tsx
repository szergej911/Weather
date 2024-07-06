import React, { ChangeEvent, FC, FormEvent } from "react";
import WeatherList from "./WeatherList";
import { WeatherData } from "../types/api";
import Header from "./Header";

interface WeatherListProps {
  weatherHistory: WeatherData[];
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  inputCity: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CitiesPage: FC<WeatherListProps> = ({
  weatherHistory,
  onSubmit,
  inputCity,
  handleInputChange,
}) => {
  return (
    <div className="text-white">
      <Header
        onSubmit={onSubmit}
        inputCity={inputCity}
        handleInputChange={handleInputChange}
      />
      <WeatherList weatherHistory={weatherHistory} />
    </div>
  );
};

export default CitiesPage;
