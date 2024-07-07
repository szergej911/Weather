import { FC } from "react";
import "../style/style.css";

interface ForecastAsideProps {
  foreCastDays: JSX.Element[] | undefined;
}

const ForecastAside: FC<ForecastAsideProps> = ({ foreCastDays }) => {
  return (
    <aside className="text-gray-400">
      <header>3-DAY FORECAST</header>
      <p>{foreCastDays} </p>
    </aside>
  );
};

export default ForecastAside;
