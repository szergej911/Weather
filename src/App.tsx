import { FC } from "react";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { WeatherData } from "./types/api";
import { fetchWeather } from "./api/userApi";

import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
import CitiesPage from "./components/CitiesPage";

const App: FC = () => {
  const [city, setCity] = useState<string>("Budapest");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [inputCity, setInputCity] = useState<string>("");
  const [weatherHistory, setWeatherHistory] = useState<WeatherData[]>([]);

  useEffect(() => {
    const getWeather = async () => {
      const data = await fetchWeather(city);
      setWeather(data);
      const storedData = localStorage.getItem("weatherHistory");
      if (storedData) {
        setWeatherHistory(JSON.parse(storedData));
      }
    };

    getWeather();
  }, [city]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputCity(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await fetchWeather(inputCity);
    setWeather(data);
    const newHistory = [data, ...weatherHistory].slice(0, 4);
    setWeatherHistory(newHistory);
    localStorage.setItem("weatherHistory", JSON.stringify(newHistory));
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
                {hours.time} {hours.temp_c} °C
              </p>
            ))}
        </p>
      </div>
    ));

  const name = weather?.location.name;
  const temp_c = weather?.current.temp_c;
  const condition_text = weather?.current.condition.text;
  const uv = weather?.forecast.forecastday[0].day.uv;
  const daily_chance_of_rain =
    weather?.forecast.forecastday[0].day.daily_chance_of_rain;
  const maxwind_kph = weather?.forecast.forecastday[0].day.maxwind_kph;

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            onSubmit={handleSubmit}
            inputCity={inputCity}
            handleInputChange={handleInputChange}
            name={name}
            temp_c={temp_c}
            condition_text={condition_text}
            todaysForeCastHours={todaysForeCastHours}
            uv={uv}
            daily_chance_of_rain={daily_chance_of_rain}
            maxwind_kph={maxwind_kph}
            foreCastDays={foreCastDays}
          />
        }
      />
      <Route
        path="/cities"
        element={<CitiesPage weatherHistory={weatherHistory} />}
      />
    </Routes>
  );
};

export default App;
