import { FC } from "react";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { WeatherData } from "./types/api";
import { fetchWeather } from "./api/userApi";

import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";

const App: FC = () => {
  const [city, setCity] = useState<string>("Budapest");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [inputCity, setInputCity] = useState<string>("");

  useEffect(() => {
    const getWeather = async () => {
      const data = await fetchWeather(city);
      setWeather(data);
    };

    getWeather();
  }, [city]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputCity(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCity(inputCity);
  };

  const foreCastDays = weather?.forecast.forecastday.map((day, index) => (
    <div key={index}>
      <p>
        {day.date} {day.day.mintemp_c}/{day.day.maxtemp_c}
      </p>
    </div>
  ));

  const todaysForeCastHours = weather?.forecast.forecastday
    .slice(0, 1)
    .map((day, index) => (
      <div key={index}>
        <p>
          {day.hour
            .filter((_, index) => (index + 1) % 4 === 0)
            .map((hours) => (
              <p>
                {hours.time} {hours.temp_c}
              </p>
            ))}
        </p>
      </div>
    ));

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            onSubmit={handleSubmit}
            inputCity={inputCity}
            handleInputChange={handleInputChange}
            name={weather?.location.name}
            temp_c={weather?.current.temp_c}
            condition_text={weather?.current.condition.text}
            todaysForeCastHours={todaysForeCastHours}
            uv={weather?.forecast.forecastday[0].day.uv}
            daily_chance_of_rain={
              weather?.forecast.forecastday[0].day.daily_chance_of_rain
            }
            maxwind_kph={weather?.forecast.forecastday[0].day.maxwind_kph}
            foreCastDays={foreCastDays}
          />
        }
      />
    </Routes>
  );
};

export default App;
