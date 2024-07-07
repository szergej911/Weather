import { ChangeEvent, FC, FormEvent } from "react";
import Header from "./Header";
import Main from "./Main";
import Nav from "./Nav";
import ForecastAside from "./ForecastAside";
import "../style/style.css";

interface HomePageProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  inputCity: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name: string | undefined;
  temp_c: number | undefined;
  condition_text: string | undefined;
  icon: string | undefined;
  todaysForeCastHours: JSX.Element[] | undefined;
  uv: number | undefined;
  daily_chance_of_rain: number | undefined;
  maxwind_kph: number | undefined;
  foreCastDays: JSX.Element[] | undefined;
}

const HomePage: FC<HomePageProps> = ({
  onSubmit,
  inputCity,
  handleInputChange,
  name,
  temp_c,
  condition_text,
  todaysForeCastHours,
  uv,
  daily_chance_of_rain,
  maxwind_kph,
  foreCastDays,
  icon,
}) => {
  return (
    <div className="px-6 text-center">
      <Nav />

      <Header
        onSubmit={onSubmit}
        inputCity={inputCity}
        handleInputChange={handleInputChange}
      />

      <Main
        name={name}
        temp_c={temp_c}
        condition_text={condition_text}
        todaysForeCastHours={todaysForeCastHours}
        uv={uv}
        daily_chance_of_rain={daily_chance_of_rain}
        maxwind_kph={maxwind_kph}
        foreCastDays={foreCastDays}
        icon={icon}
      />

      <ForecastAside foreCastDays={foreCastDays} />
    </div>
  );
};

export default HomePage;
