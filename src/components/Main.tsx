import { FC } from "react";
import "../style/style.css";

interface MainProps {
  name: string | undefined;
  temp_c: number | undefined;
  condition_text: string | undefined;
  todaysForeCastHours: JSX.Element[] | undefined;
  uv: number | undefined;
  daily_chance_of_rain: number | undefined;
  maxwind_kph: number | undefined;
  foreCastDays: JSX.Element[] | undefined;
}

const Main: FC<MainProps> = ({
  name,
  temp_c,
  condition_text,
  todaysForeCastHours,
  uv,
  daily_chance_of_rain,
  maxwind_kph,
}) => {
  return (
    <div>
      {
        <div>
          <h2 className="text-white">{name}</h2>

          <p className="text-gray-400">Description: {condition_text}</p>
          <p className="text-white">{temp_c}°C</p>
        </div>
      }
      <section className="text-gray-400">
        <p>TODAY'S FORECAST</p>
        <p>{todaysForeCastHours}</p>
      </section>
      <section className="text-gray-400">
        AIR CONDITIONS
        <button className="bg-blue-600 rounded-2xl text-white px-3 py-1">
          See more
        </button>
        <p>UV Index:</p>
        <p className="text-gray-200">{uv}</p>
        <p>Chance of rain:</p>
        <p className="text-gray-200">{daily_chance_of_rain} %</p>
        <p>Wind:</p>
        <p className="text-gray-200">{maxwind_kph}</p>
      </section>
    </div>
  );
};

export default Main;
