// src/api.ts
import axios from "axios";
import { WeatherData } from "../types/api";

const API_KEY = "81e9d28be99c4c129a0210316242106";
const BASE_URL = "http://api.weatherapi.com/v1";

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  const response = await axios.get(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no`
  );

  return response.data;
};
