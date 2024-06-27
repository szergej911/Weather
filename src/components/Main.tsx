import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { WeatherData } from "../types/api";
import { fetchWeather } from "../api/userApi";

export default function Main() {
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
      <p>{day.date}</p>
    </div>
  ));

  const foreCastDaysCondition = weather?.forecast.forecastday
    .slice(0, 1)
    .map((day, index) => (
      <div key={index}>
        <p>
          {day.hour
            .filter((_, index) => (index + 1) % 4 === 0)
            .map((hours) => (
              <p>{hours.condition.text}</p>
            ))}
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
              <p>{hours.time}</p>
            ))}
        </p>
      </div>
    ));

  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputCity}
          onChange={handleInputChange}
          placeholder="Enter city name"
        />
        <button type="submit">Get Weather</button>
      </form>
      {weather && (
        <div>
          <h2>Weather in {weather.location.name}</h2>
          <p>Temperature: {weather.current.temp_c}°C</p>
          <p>Description: {weather.current.condition.text}</p>
        </div>
      )}
      <section>
        <p>TODAY'S </p>
        <p>{todaysForeCastHours}</p>
      </section>
      <section>
        AIR CONDITIONS
        <button>See more</button>
      </section>
      <aside>
        <p>7-DAY FOREFAST</p>

        <p>{foreCastDays}</p>
        <p>{foreCastDaysCondition}</p>
      </aside>
    </div>
  );
}
