// src/types.ts
export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

interface ForecastHour {
  time: string;
  temp_c: number;
}

export interface CurrentWeather {
  temp_c: number;
  condition: {
    text: string;
    icon: string;
  };
}

interface ForecastDay {
  date: string;
  date_epoch: number;
  astro: {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moon_phase: string;
    moon_illumination: string;
    is_moon_up: number;
    is_sun_up: number;
  };
  day: {
    mintemp_c: number;
    maxtemp_c: number;
    maxwind_kph: number;
    daily_chance_of_rain: number;
    uv: number;
    condition: {
      text: string;
      icon: string;
    };
  };
  hour: ForecastHour[];
}

interface ForecastHour {
  time: string;
  condition: {
    text: string;
    icon: string;
  };
}

export interface Forecast {
  forecastday: ForecastDay[];
}

export interface WeatherData {
  location: Location;
  current: CurrentWeather;
  forecast: Forecast;
}
