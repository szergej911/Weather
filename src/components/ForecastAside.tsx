import { FC } from "react";
import "../style/style.css";

interface ForecastAsideProps {
  foreCastDays: JSX.Element[] | undefined;
}

const ForecastAside: FC<ForecastAsideProps> = ({ foreCastDays }) => {
  return (
    <aside>
      <header>7-DAY FOREFAST</header>
      <p>{foreCastDays} </p>
    </aside>
  );
};

export default ForecastAside;
