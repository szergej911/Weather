import { FC } from "react";
import "../style/style.css";

interface ForecastAsideProps {
  foreCastDays: JSX.Element[] | undefined;
}

const ForecastAside: FC<ForecastAsideProps> = ({ foreCastDays }) => {
  return (
    <aside>
      <p>7-DAY FOREFAST</p>
      <p>{foreCastDays} </p>
    </aside>
  );
};

export default ForecastAside;
