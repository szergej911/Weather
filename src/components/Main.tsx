import { FC } from "react";

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
          <h2>Weather in {name}</h2>
          <p>Temperature: {temp_c}°C</p>
          <p>Description: {condition_text}</p>
        </div>
      }
      <section>
        <p>TODAY'S </p>
        <p>{todaysForeCastHours}</p>
      </section>
      <section>
        AIR CONDITIONS
        <button>See more</button>
        <p>UV Index: {uv}</p>
        <p>
          Chance of rain:
          {daily_chance_of_rain}
        </p>
        <p>Wind: {maxwind_kph}</p>
      </section>
    </div>
  );
};

export default Main;
